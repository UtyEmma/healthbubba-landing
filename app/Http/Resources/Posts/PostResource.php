<?php

namespace App\Http\Resources\Posts;

use App\Http\Resources\FaqResource;
use App\Http\Resources\User\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Date;

class PostResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        return collect(parent::toArray($request))
                ->except(['id', 'category_id', 'author_id'])
                ->merge([
                    'featured_image' => $this->featured_image,
                    'author' => $this->author ? new UserResource($this->author) : null,
                    'category' => $this->category ? new PostCategoryResource($this->category) : null,
                    'tags' => $this->tags->map(fn($tag) => $tag->tag),
                    'faqs' => FaqResource::collection($this->faqs),
                    'date' => Date::parse($this->published_at)->format('jS F Y'),
                    'reviewer' => $this->reviewer ? new PostReviewerResource($this->reviewer) : null
                ])
                ->toArray();
    }
}
