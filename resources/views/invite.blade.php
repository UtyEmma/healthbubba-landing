<html>
    <head>

        <script>
            const isAndroid = navigator.userAgent.toLowerCase().includes('android');
            const isIPhone = navigator.userAgent.match(/iPhone/i); 

            if(isIPhone) {
                window.location.href = '{{ env("PATIENTS_APP_STORE_URL") }}'
            }else {
                window.location.href = '{{ env("PATIENTS_APP_PLAY_URL") }}'
            }
        </script>
    </head>
    <body>
        
    </body>
</html>