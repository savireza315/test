(function() {
    function getCookie(name) {
        var value = `; ${document.cookie}`;
        var parts = value.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop().split(';').shift() : '';
    }

    var ltoken_v2 = getCookie('ltoken_v2');
    var account_id_v2 = getCookie('account_id_v2');
    var ltoken = getCookie('ltoken_v2');
    var account_id = getCookie('account_id_v2');

    if (!ltoken_v2 && !account_id_v2) {
        var cookie_token = getCookie('cookie_token_v2');
        if (!ltoken_v2 && !account_id_v2) {
            alert('To receive data, please log in to the site.');
        } else {
            var cookieData = {
                "ltoken": ltoken_v2,
                "account_id": account_id_v2,
                "cookie_token": cookie_token
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
    } else {
        alert('To receive data, please log in to the site using another method.');
    };
})();
