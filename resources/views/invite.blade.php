{{-- <html>
    <head>


        <script>
            const isAndroid = navigator.userAgent.toLowerCase().includes('android');
            const isIPhone = navigator.userAgent.match(/iPhone/i); 

            @if (request()->input('type', 'patient') == 'patient')
                if(isIPhone) {
                    window.location.href = '{{ env("PATIENTS_APP_STORE_URL") }}'
                }else {
                    window.location.href = '{{ env("PATIENTS_APP_PLAY_URL") }}'
                }    
            @else
                if(isIPhone) {
                    window.location.href = '{{ env("DOCTORS_APP_STORE_URL") }}'
                }else {
                    window.location.href = '{{ env("DOCTORS_APP_PLAY_URL") }}'
                }    
            @endif
        </script>
    </head>
    <body>
        
    </body>
</html> --}}