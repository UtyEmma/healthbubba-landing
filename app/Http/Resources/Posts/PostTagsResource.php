<?php

namespace App\Http\Resources\Posts;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostTagsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        return [
            'tag' => str($this->tag)->headline()
        ];
    }
}
