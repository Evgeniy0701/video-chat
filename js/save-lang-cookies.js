document.addEventListener('DOMContentLoaded', function () {

    var currentLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');

    function setLangCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    setLangCookie('lang', currentLanguage, 180);
});