<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">

        <link rel="shortcut icon" href="{{asset('assets/imgs/logo.svg')}}" type="image/x-icon">

        @include('partials.head')

        @if(request()->routeIs('blog.show'))
            @include('partials.blog-schema', ['post' => $page['props']['post']])
        @endif

        <!-- MedicalOrganization (site-wide) -->
        <script type="application/ld+json">
        {!! json_encode([
            '@context' => 'https://schema.org',
            '@type' => 'MedicalOrganization',
            'name' => 'HealthBubba',
            'url' => config('app.url'),
            'logo' => asset('assets/imgs/logo.svg'),
            'description' => 'HealthBubba is a digital health platform connecting patients with healthcare providers and services.',
            'medicalSpecialty' => 'General Medicine',
            'sameAs' => [
                'https://www.instagram.com/healthbubba',
                'https://www.facebook.com/profile.php?id=61559440283914',
                'https://www.linkedin.com/company/healthbubba/',
                'https://x.com/Health_Bubba',
                'https://www.threads.net/@healthbubba',
            ],
            'contactPoint' => [
                '@type' => 'ContactPoint',
                'contactType' => 'customer service',
                'availableLanguage' => 'English',
            ],
        ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
        </script>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="scroll-smooth" >
        @include('partials.body')
        @inertia

        @include('partials.scripts')
        <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
    </body>
</html>
