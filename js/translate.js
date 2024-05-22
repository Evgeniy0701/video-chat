if (typeof _coomeet !== "undefined") {
  function getTranslate (lang, href) {
    var currLocation = window.location;
    var currentLang = document.getElementsByTagName("html")[0].getAttribute("lang");
    var i18nStroke = document.querySelectorAll('[data-i18]');
    var i18nLink = document.querySelectorAll('[data-i18-link]');
    var url = "https://ap1.coomeet.com/v20/i18n/lending/"+lang;
    var request = new XMLHttpRequest();
    if (currentLang !== lang) {
      request.open("GET", url, true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      request.responseType = 'json';
      request.onload = function () {
        languageSwitcher.classList.replace("--"+currentLang, "--"+lang);
        footerRegionFlag.classList.replace("--"+currentLang, "--"+lang);
        document.documentElement.setAttribute('lang', lang);
        for (var item of i18nStroke) {
          var langStr = request.response.i18n[item.dataset.i18];
          if (item.dataset.i18 === 'MSG_HOME_COUNTER1') {
            var splitTranslate = request.response.i18n[item.dataset.i18].split('</span>');
            COUNTER1[0].innerHTML = splitTranslate[0];
            COUNTER1[0].parentNode.querySelectorAll('span')[1].innerHTML = splitTranslate[1].replace('<span>', '');
          } else if (item.dataset.i18 === 'MSG_HOME_COUNTER2') {
            var splitTranslate = request.response.i18n[item.dataset.i18].split('</span>');
            COUNTER2[0].innerHTML = splitTranslate[0];
            COUNTER2[0].parentNode.querySelectorAll('span')[1].innerHTML = splitTranslate[1].replace('<span>', '');
          } else if (langStr) {
            item.innerHTML = langStr;
          }
        }
        for (var link of i18nLink) {
          if (link.href.includes(currentLang)) {
            if (lang === 'en') {
              link.href = link.href.replace('/' + currentLang, '');
            } else {
              link.href = link.href.replace(currentLang, lang);
            }
          } else if (link.href.includes(currLocation.origin)) {
            var pathName = link.href.replace(currLocation.origin, lang);
            if (pathName.length === 3) pathName = pathName.slice(0, -1);
            link.href = currLocation.origin + '/' + pathName;
          }
        }
        var locale = lang
        if (lang == "hi" || lang == "sv") {
          locale = "en";
        } else if (lang == "no") {
          locale = "de";
        } else if (lang == "pt") {
          locale = "pt";
        }
        localStorage.setItem("coomeet-locale", locale);
        var unsupportedLang = ['hi', 'sv', 'no'];
        unsupportedLangLocale = lang;
        if (unsupportedLang.indexOf(lang) === -1) {
          if (lang !== currentLang && typeof CoomeetIframePlugin !== "undefined") CoomeetIframePlugin.setLocale(locale);
        } else {
          if (lang !== currentLang && typeof CoomeetIframePlugin !== "undefined") CoomeetIframePlugin.setLocale('en');
        }

        var splitPathname = window.location.pathname.split('/');
        var path = splitPathname.join('/').replace(/\/$/, '');
        setTimeout(function() {
          if (href ==! false) {
            window.history.pushState(null,document.title, href.replace(window.location.origin, ''));
          } else {
            window.history.pushState(null,document.title, path.replace(currentLang, lang));
          }
        }, 200);
      }

      request.onerror = function () {
        console.log('ERROR');
      };

      request.send();
    }
  };
  var languageSwitcher = document.getElementById("language-switcher");
  var footerRegionFlag = document.getElementById("footer-region-flag");
  var COUNTER1 = document.querySelectorAll('[data-i18="MSG_HOME_COUNTER1"]');
  var COUNTER2 = document.querySelectorAll('[data-i18="MSG_HOME_COUNTER2"]');
  var currentAppLocale = localStorage.getItem("coomeet-locale");
  document.addEventListener("DOMContentLoaded", function () {
    if (currentAppLocale && currentAppLocale !== document.getElementsByTagName("html")[0].getAttribute("lang")) {
      getTranslate(currentAppLocale, window.location.href + '?lang=' + currentAppLocale);
    }
    var languageDropdownList = document.querySelectorAll('.language-dropdown__item a');
    if (languageDropdownList.length) {
      for (var i = 0; i < languageDropdownList.length; i++) {
        languageDropdownList[i].onclick = function (click) {
          getTranslate(this.dataset.code, this.href);
          click.preventDefault();
        };
      }
    }
  });
}