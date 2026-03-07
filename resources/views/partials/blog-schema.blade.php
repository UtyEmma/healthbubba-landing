@php
    $postData = is_array($post) ? $post : $post->toArray(request());
    $postUrl = url("blog/{$postData['slug']}");
    $baseUrl = config('app.url');

    // MedicalWebPage + MedicalScholarlyArticle
    $articleSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'MedicalWebPage',
        'name' => $postData['title'],
        'description' => $postData['meta_description'] ?? $postData['excerpt'] ?? '',
        'url' => $postUrl,
        'image' => $postData['featured_image'] ?? null,
        'datePublished' => $postData['published_at'] ?? null,
        'dateModified' => $postData['updated_at'] ?? $postData['published_at'] ?? null,
        'publisher' => [
            '@type' => 'Organization',
            'name' => 'HealthBubba',
            'url' => $baseUrl,
        ],
        'mainContentOfPage' => [
            '@type' => 'WebPageElement',
            'cssSelector' => '.prose',
        ],
        'mainEntity' => [
            '@type' => 'MedicalScholarlyArticle',
            'headline' => $postData['title'],
            'image' => $postData['featured_image'] ?? null,
            'datePublished' => $postData['published_at'] ?? null,
            'dateModified' => $postData['updated_at'] ?? $postData['published_at'] ?? null,
            'publisher' => [
                '@type' => 'Organization',
                'name' => 'HealthBubba',
                'url' => $baseUrl,
            ],
            'description' => $postData['meta_description'] ?? $postData['excerpt'] ?? '',
            'articleSection' => $postData['category']['name'] ?? null,
            'keywords' => is_array($postData['tags'] ?? null) ? implode(', ', $postData['tags']) : null,
        ],
    ];

    if (!empty($postData['author'])) {
        $author = ['@type' => 'Person', 'name' => $postData['author']['name']];
        $articleSchema['author'] = $author;
        $articleSchema['mainEntity']['author'] = $author;
    }

    if (!empty($postData['reviewer'])) {
        $articleSchema['mainEntity']['reviewedBy'] = [
            '@type' => 'Person',
            'name' => $postData['reviewer']['name'],
            'jobTitle' => $postData['reviewer']['specialty'] ?? null,
            'description' => $postData['reviewer']['description'] ?? null,
        ];
    }

    // Breadcrumb
    $breadcrumbSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => [
            ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => $baseUrl],
            ['@type' => 'ListItem', 'position' => 2, 'name' => 'Blog', 'item' => $baseUrl . '/blog'],
            ['@type' => 'ListItem', 'position' => 3, 'name' => $postData['title'], 'item' => $postUrl],
        ],
    ];

    // FAQ (conditional)
    $faqSchema = null;
    if (!empty($postData['faqs']) && count($postData['faqs']) > 0) {
        $faqSchema = [
            '@context' => 'https://schema.org',
            '@type' => 'FAQPage',
            'mainEntity' => array_map(fn($faq) => [
                '@type' => 'Question',
                'name' => $faq['question'],
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => $faq['answer'],
                ],
            ], $postData['faqs']),
        ];
    }

    $jsonFlags = JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT;
@endphp

<!-- MedicalWebPage + MedicalScholarlyArticle -->
<script type="application/ld+json">
{!! json_encode($articleSchema, $jsonFlags) !!}
</script>

<!-- BreadcrumbList -->
<script type="application/ld+json">
{!! json_encode($breadcrumbSchema, $jsonFlags) !!}
</script>

@if($faqSchema)
<!-- FAQPage -->
<script type="application/ld+json">
{!! json_encode($faqSchema, $jsonFlags) !!}
</script>
@endif
