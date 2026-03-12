<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class ImageOptimizationService
{
    public function optimizePublicImage(string $relativePath): string
    {
        if (! function_exists('getimagesize') || ! function_exists('imagewebp')) {
            return $relativePath;
        }

        $fullPath = Storage::disk('public')->path($relativePath);

        if (! is_file($fullPath)) {
            return $relativePath;
        }

        $imageInfo = @getimagesize($fullPath);

        if (! $imageInfo || ! isset($imageInfo[0], $imageInfo[1], $imageInfo['mime'])) {
            return $relativePath;
        }

        [$width, $height] = [$imageInfo[0], $imageInfo[1]];
        $mime = $imageInfo['mime'];
        $maxDimension = 1920;
        $image = $this->createImageResource($fullPath, $mime);

        if (! $image) {
            return $relativePath;
        }

        if (max($width, $height) > $maxDimension) {
            $scale = $maxDimension / max($width, $height);
            $newWidth = (int) floor($width * $scale);
            $newHeight = (int) floor($height * $scale);

            $resized = imagecreatetruecolor($newWidth, $newHeight);

            if (in_array($mime, ['image/png', 'image/gif', 'image/webp'], true)) {
                imagealphablending($resized, false);
                imagesavealpha($resized, true);
            }

            imagecopyresampled($resized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
            imagedestroy($image);
            $image = $resized;
        }

        [$targetRelativePath, $targetFullPath] = $this->resolveWebpTargetPath($relativePath);

        if (! is_dir(dirname($targetFullPath))) {
            @mkdir(dirname($targetFullPath), 0755, true);
        }

        $converted = @imagewebp($image, $targetFullPath, 78);

        imagedestroy($image);

        if (! $converted) {
            return $relativePath;
        }

        if ($targetRelativePath !== $relativePath && is_file($fullPath)) {
            @unlink($fullPath);
        }

        return $targetRelativePath;
    }

    private function createImageResource(string $fullPath, string $mime): mixed
    {
        if ($mime === 'image/jpeg' && function_exists('imagecreatefromjpeg')) {
            return @imagecreatefromjpeg($fullPath);
        }

        if ($mime === 'image/png' && function_exists('imagecreatefrompng')) {
            return @imagecreatefrompng($fullPath);
        }

        if ($mime === 'image/gif' && function_exists('imagecreatefromgif')) {
            return @imagecreatefromgif($fullPath);
        }

        if ($mime === 'image/webp' && function_exists('imagecreatefromwebp')) {
            return @imagecreatefromwebp($fullPath);
        }

        return null;
    }

    private function resolveWebpTargetPath(string $relativePath): array
    {
        $directory = pathinfo($relativePath, PATHINFO_DIRNAME);
        $filename = pathinfo($relativePath, PATHINFO_FILENAME);
        $directory = $directory === '.' ? '' : trim($directory, '/\\');
        $targetRelativePath = ltrim(($directory ? "{$directory}/" : '').$filename.'.webp', '/\\');

        return [$targetRelativePath, Storage::disk('public')->path($targetRelativePath)];
    }
}
