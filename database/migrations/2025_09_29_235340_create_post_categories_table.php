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
        Schema::create('post_categories', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('category_id')->nullable();
            $table->string('name')->unique();
            $table->text('description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->text('meta_description')->nullable();
            $table->boolean('is_featured')->nullable();
            $table->boolean('is_active')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_categories');
    }
};
