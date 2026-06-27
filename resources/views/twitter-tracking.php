<?php

$twitterPixelId = config('services.twitter.pixel_id');

?>

<?php if (filled($twitterPixelId)): ?>
    <!-- Twitter conversion tracking base code -->
    <script>
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config', <?php echo json_encode($twitterPixelId, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_AMP | JSON_HEX_QUOT); ?>);
    </script>
    <!-- End Twitter conversion tracking base code -->
<?php endif; ?>
