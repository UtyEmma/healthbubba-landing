<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category_id')->nullable();
            $table->string('author_id')->nullable();
            $table->string('image')->nullable();
            $table->string('videos')->nullable();
            $table->longText('content');
            $table->longText('excerpt')->nullable();
            $table->integer('visits')->default(0);
            $table->integer('unique_visits')->default(0);
            $table->text('meta_keywords')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('reviewer_id')->nullable();
            $table->string('published_at')->nullable();
            $table->string('faq_title')->nullable();
            $table->boolean('is_featured')->default(true);
            $table->string('status');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
