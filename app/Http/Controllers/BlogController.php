<?php

namespace App\Http\Controllers;

use App\Http\Resources\Posts\PostResource;
use App\Models\Blog\Post;
use App\Models\Blog\PostCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller {
    
    function index(Request $request){
        $posts = Post::published()
            ->when($request->search, function($query, $search) {
                $query->where('title', 'LIKE', "%{$search}%");
            })
            ->latest()
            ->paginate()
            ->withQueryString();

        $posts = PostResource::collection($posts);
        return Inertia::render('Blog/Index', compact('posts'));
    }
        
    function show(Post $post){
        $posts = Post::published()
                    ->whereNot('id', $post->id)
                    ->latest()->limit(3)
                    ->get();
                    
        $posts = PostResource::collection($posts);
        $post = new PostResource($post);

        return Inertia::render('Blog/Show', compact('post', 'posts'));

    }

}
