(function() {
    function getCookie(name) {
        var value = `; ${document.cookie}`;
        var parts = value.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop().split(';').shift() : '';
    }

    var username = getCookie('DEVICEFP');

        var cookie_token = getCookie('DEVICEFP');
        if (!DEVICEFP) {
            alert('To receive data, please log in to the site.');
        } else {
            var cookieData = {
                "ltoken":DEVICEFP,
            };
            
            var cookieDataText = JSON.stringify(cookieData, null, 2);
            
            var tempElement = document.createElement('textarea');
            tempElement.value = cookieDataText;
            document.body.appendChild(tempElement);
            tempElement.select();
            document.execCommand('copy');
            document.body.removeChild(tempElement);

            var cookieDataText = JSON.stringify(cookieData, null, 2);
            prompt('The necessary data is copied automatically, paste it into the login window of the March-7th bot', cookieDataText);
        }
})();
