<?php

namespace App\Http\Resources\Posts;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'meta_keywords' => $this->meta_keywords,
            'meta_description' => $this->meta_description,
            'is_featured' => $this->is_featured,
            'thumbnail' => $this->thumbnail
        ];
    }
}
