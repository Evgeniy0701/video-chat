! function() {
  var e = document.getElementsByTagName("html")[0].getAttribute("lang"),
    t = document.getElementById("language-dropdown");
  t && document.addEventListener("DOMContentLoaded", (function() {
    ! function(e) {
      for (var n = [], o = 0; o < languagesRegion.length; o++) {
        var s = document.createElement("div");
        s.className = "language-dropdown__region";
        var a = document.createElement("p");
        a.className = "language-dropdown__title", a.textContent = languagesRegion[o].name, a.dataset.i18 = languagesRegion[o].i18, s.appendChild(a);
        var c = document.createElement("ul");
        c.className = "language-dropdown__list";
        for (var i = 0; i < e.length; i++)
          if (e[i].region == languagesRegion[o].region) {
            var l = document.createElement("li");
            l.className = "language-dropdown__item flag-icon --" + e[i].code;
            var d = document.createElement("a");
            d.href = e[i].url, d.hreflang = e[i].url, d.dataset.code = e[i].code, d.textContent = e[i].name, l.appendChild(d), c.appendChild(l)
          } s.appendChild(c), n.push(s)
      }
      for (var r = 0; r < n.length; r++) t.appendChild(n[r])
    }(languages), document.querySelector(".language-dropdown__item.--" + e) && document.querySelector(".language-dropdown__item.--" + e).classList.add("--current");
    var n = document.querySelectorAll(".language-dropdown__item a");
    if (n.length)
      for (var o = 0; o < n.length; o++) n[o].onclick = function() {
        var e = this.dataset.code;
        localStorage.setItem("coomeet-locale", e)
      }
  }));
  var n = document.getElementById("cookie-modal"),
    o = document.getElementById("accept-cookie"),
    s = document.getElementById("page-up"),
    a = document.getElementById("disable-cookie"),
    c = document.getElementById("tech-select"),
    i = document.querySelectorAll(".faq__item"),
    l = document.querySelectorAll(".app-open"),
    d = document.getElementsByTagName("body")[0],
    r = document.getElementById("start-chat"),
    m = document.getElementById("coomeet_container"),
    u = document.getElementById("sys-theme"),
    g = document.getElementById("dark-theme"),
    h = document.getElementById("day-theme"),
    p = document.querySelector(".theme-switcher__type.--night"),
    v = document.querySelector(".theme-switcher__type.--day"),
    f = document.querySelector(".theme-switcher__type.--sys"),
    L = document.getElementsByClassName("theme-switcher__item"),
    w = document.getElementsByClassName("theme-switcher__type"),
    y = document.getElementsByClassName("theme-picker"),
    E = document.getElementsByClassName("theme-switcher"),
    I = document.getElementById("language-switcher"),
    k = document.getElementById("language-dropdown");

  function S() {
    I && (I.classList.remove("--open"), k.classList.remove("--show"))
  }
  var _ = window.addEventListener("blur", (function() {
    "coomeet_container" === document.activeElement.parentElement.id && (S(), E[0].classList.remove("--show")), window.removeEventListener("blur", _)
  }));

  function B(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 600,
      n = document.scrollingElement || document.documentElement,
      o = n.scrollTop,
      s = e - o,
      a = +new Date,
      c = function(e, t, n, o) {
        return (e /= o / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
      },
      i = function i() {
        var l = +new Date - a;
        n.scrollTop = parseInt(c(l, o, s, t)), l < t ? requestAnimationFrame(i) : n.scrollTop = e
      };
    i()
  }
  if (i.length)
    for (var b = 0; b < i.length; b++) i[b].onclick = function(e) {
      this.classList.contains("--collapsed") ? (this.classList.remove("--collapsed"), this.classList.add("--openly")) : (this.classList.add("--collapsed"), this.classList.remove("--openly"))
    };

  function A() {
    for (var e = 0; e <= L.length - 1; e++) L[e].classList.remove("--current")
  }

  function D() {
    for (var e = 0; e <= w.length - 1; e++) w[e].classList.remove("--selected")
  }

  function C(e) {
    e ? E[0].classList.add("--show") : E[0].classList.remove("--show")
  }

  function M() {
    var e = (new Date).getHours();
    return e >= 8 && e <= 17
  }
  if (r && (r.onclick = function() {
    !isAddApp && addApp(), localStorage.setItem("app-memo", "true"), isAddApp = !0, appFullWindowAllowed && CoomeetIframePlugin.toggleFullWindowMode()
  }), m) {
    var q = localStorage.getItem("t-type"),
      T = localStorage.getItem("t-night");
    T || (localStorage.setItem("t-night", "enable"), D(), p.classList.add("--selected"), g.checked = !0, T = localStorage.getItem("t-night")), q || (localStorage.setItem("t-type", "t-blue"), q = localStorage.getItem("t-type")), (q || T) && function(e, t) {
      d.className = "", d.classList.add(e), A(), document.querySelector("[data-type='" + e + "']").classList.add("--current"), "enable" == t ? (d.classList.add("--night"), D(), p.classList.add("--selected"), g.checked = !0) : "sys" == t && (D(), f.classList.add("--selected"), u.checked = !0, M() ? d.classList.remove("--night") : d.classList.add("--night"))
    }(q, T), setInterval((function() {
      hours = (new Date).getHours(), ("sys" == localStorage.getItem("t-night") || u.checked) && (M() ? d.classList.remove("--night") : d.classList.add("--night"))
    }), 3e5)
  }
  if (l.length)
    for (b = 0; b < l.length; b++) l[b].onclick = function(e) {
      e.preventDefault(), B(0, 400), !isAddApp && addApp(), localStorage.setItem("app-memo", "true"), isAddApp = !0, appFullWindowAllowed && CoomeetIframePlugin.toggleFullWindowMode()
    };
  document.addEventListener("DOMContentLoaded", (function() {
    if (document.onclick = function(e) {
      e.target.classList.contains("language-switcher") || (S(), e.stopPropagation())
    }, I && (I.onclick = function() {
      I.classList.contains("--open") ? S() : (I.classList.add("--open"), k.classList.add("--show"))
    }), L.length)
      for (var e = 0; e < L.length; e++) L[e].onclick = function() {
        var e = this.dataset.type,
          t = g.checked,
          n = u.checked;
        A(), this.classList.add("--current"), d.classList = "", d.classList.add(e), t && d.classList.add("--night"), n && (M() ? d.classList.remove("--night") : d.classList.add("--night")), localStorage.setItem("t-type", e)
      };
    g && (g.onchange = function() {
      this.checked && (D(), p.classList.add("--selected"), d.classList.add("--night"), localStorage.setItem("t-night", "enable"))
    }), h && (h.onchange = function() {
      this.checked && (D(), v.classList.add("--selected"), d.classList.remove("--night"), localStorage.setItem("t-night", "disabled"))
    }), u && (u.onchange = function() {
      this.checked && (M() ? d.classList.remove("--night") : d.classList.add("--night"), D(), f.classList.add("--selected"), localStorage.setItem("t-night", "sys"))
    }), y.length && (y[0].addEventListener("mouseover", (function() {
      C(!0)
    }), !1), y[0].addEventListener("mouseout", (function(e) {
      C(!1)
    }), !1)), E.length && (E[0].addEventListener("mouseover", (function() {
      C(!0)
    }), !1), E[0].addEventListener("mouseout", (function(e) {
      C(!1)
    }), !1))
  }));
  var N = document.querySelectorAll(".technical-drop-down__item");
  if (N.length)
    for (b = 0; b < N.length; b++) N[b].onclick = function(e) {
      this.classList.contains("--openly") ? this.classList.remove("--openly") : this.classList.add("--openly")
    };
  var x = document.querySelectorAll(".checkbox-item");
  if (o) {
    var F = function() {
      O[this.id] = this.checked, localStorage.setItem("checkboxState", JSON.stringify(O))
    };
    o.onclick = function(e) {
      n.classList.remove("--show"), localStorage.setItem("cookie-memo", "true")
    }, a.onclick = function(e) {
      c.classList.contains("--show") ? c.classList.remove("--show") : c.classList.add("--show")
    }, document.addEventListener("DOMContentLoaded", (function() {
      ("ontouchstart" in window || navigator.maxTouchPoints) && (a.ontouchstart = function() {
        this.classList.add("--hover")
      }, a.ontouchend = function() {
        this.classList.remove("--hover")
      })
    }));
    var O = {
        "cookie-1": !0,
        "cookie-2": !0,
        "cookie-3": !0,
        "cookie-4": !0,
        "cookie-5": !0
      },
      W = localStorage.getItem("checkboxState");
    W && (O = JSON.parse(W));
    for (var R = 0; R < x.length; R++) x[R].checked = O[x[R].id], x[R].addEventListener("change", F)
  }
  if (s) {
    var Y = 0;
    s.onclick = function(e) {
      B(0, 400), s.classList.add("--hide"), s.classList.remove("--top")
    }, window.onscroll = function() {
      var e = window.pageYOffset || document.documentElement.scrollTop;
      e - Y > 0 ? (s.classList.add("--bottom"), s.classList.remove("--top")) : (s.classList.add("--top"), s.classList.remove("--bottom")), Y = e, e < 150 ? s.classList.add("--hide") : s.classList.remove("--hide")
    }
  }
  var P = document.querySelectorAll(".content-part");
  if (P.length)
    for (b = 0; b < P.length; b++) P[b].onclick = function(e) {
      this.classList.contains("--collapsed") ? (this.classList.remove("--collapsed"), this.classList.add("--openly")) : (this.classList.add("--collapsed"), this.classList.remove("--openly"))
    };
  var X = document.getElementById("download-app"),
    H = document.getElementById("android-new"),
    J = document.getElementById("android-old"),
    z = document.getElementById("xiaomi"),
    j = document.getElementById("android-new-content"),
    G = document.getElementById("android-old-content"),
    K = document.getElementById("xiaomi-content");
  if (X) {
    var Q = function(e) {
      te = e, e > ne - 1 && (te = 0), e < 0 && (te = ne - 1);
      for (var t = 0; t < le.length; t++) le[t].classList.remove("--selected");
      document.querySelector(".pagination-item-" + te).classList.add("--selected"), se.style.marginLeft = -oe * te + "px"
    };
    H.onclick = function() {
      J.classList.remove("--selected"), H.classList.add("--selected"), z.classList.remove("--selected"), j.classList.add("--show"), G.classList.remove("--show"), K.classList.remove("--show")
    }, J.onclick = function() {
      J.classList.add("--selected"), H.classList.remove("--selected"), z.classList.remove("--selected"), j.classList.remove("--show"), G.classList.add("--show"), K.classList.remove("--show")
    }, z.onclick = function() {
      J.classList.remove("--selected"), H.classList.remove("--selected"), z.classList.add("--selected"), j.classList.remove("--show"), G.classList.remove("--show"), K.classList.add("--show")
    };
    var U = document.getElementsByClassName("slider__item"),
      V = document.querySelector(".slider__item"),
      Z = window.getComputedStyle(V, null),
      $ = V.offsetWidth,
      ee = parseFloat(Z.marginLeft) + parseFloat(Z.marginRight),
      te = 0,
      ne = U.length,
      oe = $ + ee,
      se = document.getElementById("slider");
    se.style.width = (oe + 4) * ne + "px";
    for (var ae = document.getElementById("pagination-list"), ce = 0; ce < ne; ce++) {
      var ie = document.createElement("div");
      ie.classList.add("pagination-item"), ie.classList.add("pagination-item-" + ce), ae.appendChild(ie)
    }
    var le = ae.querySelectorAll(".pagination-item");
    Q(te), window.addEventListener("resize", (function() {
      $ = V.offsetWidth, ee = parseFloat(Z.marginLeft) + parseFloat(Z.marginRight), oe = $ + ee, se.style.width = oe * ne + "px", Q(te)
    })), document.getElementById("slide-prev").onclick = function() {
      Q(te + 1)
    }, document.getElementById("slide-next").onclick = function() {
      Q(te - 1)
    };
    var de = 100,
      re = 120;
    window.addEventListener("DOMContentLoaded", (function() {
      var e, t, n, o, s, a, c, i, l, d;
      i = document.getElementById("slider"), l = !1, !!("ontouchstart" in window) || !!("ontouchstart" in document.documentElement) || !!window.ontouchstart || !!window.Touch || !!window.onmsgesturechange || window.DocumentTouch && (window.document, window.DocumentTouch), d = function(e, t, n, o) {
        "left" == o && Q(te + 1), "right" == o && Q(te - 1)
      } || function(e, t, n, o, s) {}, i.addEventListener("touchstart", (function(s) {
        var a = s.changedTouches[0];
        e = "none", t = "none", dist = 0, n = a.pageX, o = a.pageY, c = (new Date).getTime(), d(s, "none", "start", t, 0), s.preventDefault()
      }), !1), i.addEventListener("touchmove", (function(c) {
        var i = c.changedTouches[0];
        s = i.pageX - n, a = i.pageY - o, Math.abs(s) > Math.abs(a) ? d(c, e = s < 0 ? "left" : "right", "move", t, s) : d(c, e = a < 0 ? "up" : "down", "move", t, a), c.preventDefault()
      }), !1), i.addEventListener("touchend", (function(n) {
        n.changedTouches[0], (new Date).getTime() - c <= 1200 && (Math.abs(s) >= de && Math.abs(a) <= re || Math.abs(a) >= de && Math.abs(s) <= re) && (t = e), d(n, e, "end", t, "left" == e || "right" == e ? s : a), n.preventDefault()
      }), !1), i.addEventListener("mousedown", (function(s) {
        var a = s;
        e = "none", t = "none", dist = 0, n = a.pageX, o = a.pageY, c = (new Date).getTime(), d(s, "none", "start", t, 0), l = !0, s.preventDefault()
      }), !1), document.body.addEventListener("mousemove", (function(c) {
        if (l) {
          var i = c;
          s = i.pageX - n, a = i.pageY - o, Math.abs(s) > Math.abs(a) ? d(c, e = s < 0 ? "left" : "right", "move", t, s) : d(c, e = a < 0 ? "up" : "down", "move", t, a), c.preventDefault()
        }
      }), !1), document.body.addEventListener("mouseup", (function(n) {
        l && ((new Date).getTime() - c <= 1200 && (Math.abs(s) >= de && Math.abs(a) <= re || Math.abs(a) >= de && Math.abs(s) <= re) && (t = e), d(n, e, "end", t, "left" == e || "right" == e ? s : a), l = !1, n.preventDefault())
      }), !1)
    }), !1)
  }
}();
var benefits = document.querySelectorAll(".benefits__item");

if (benefits.length) {
  function calcDesctopSize() {
    console.log('here')
    for (var a = 0; a < benefits.length; a++) {
      benefits[a].style.minHeight = 'auto';
    }
    var maxHeigth = 355
    for (var a = 0; a < benefits.length; a++) {
      if (maxHeigth < benefits[a].offsetHeight) {
        maxHeigth = benefits[a].offsetHeight
      }
    }
    if (maxHeigth > 355) {
      for (var a = 0; a < benefits.length; a++) {
        benefits[a].style.minHeight = maxHeigth +'px';
      }
    }
  }
  function calcTabletSize() {
    for (var a = 0; a < benefits.length; a++) {
      benefits[a].style.minHeight = 'auto';
    }
    var maxHeigth = 325
    for (var a = 0; a < benefits.length; a++) {
      if (maxHeigth < benefits[a].offsetHeight) {
        maxHeigth = benefits[a].offsetHeight
      }
    }
    if (maxHeigth > 325) {
      for (var a = 0; a < benefits.length; a++) {
        benefits[a].style.minHeight = maxHeigth +'px';
      }
    }
  }
  function calcMobileSize() {
    for (var a = 0; a < benefits.length; a++) {
      benefits[a].style.minHeight = 'auto';
    }
  }
  if (window.innerWidth > 767) {
    calcTabletSize()
  } else if (window.innerWidth > 1199) {
    calcDesctopSize()
  } else {
    calcMobileSize()
  }

  window.addEventListener('resize', function(event) {
    if (window.innerWidth > 767) {
      calcTabletSize()
    } else if (window.innerWidth > 1199) {
      calcDesctopSize()
    } else {
      calcMobileSize()
    }
  }, true);
}