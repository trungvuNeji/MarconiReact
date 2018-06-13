/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-ie8compat-setclasses !*/
! function(e, n, t) {
  function r(e, n) { return typeof e === n }

  function o() { var e, n, t, o, s, i, l; for (var a in S)
      if (S.hasOwnProperty(a)) { if (e = [], n = S[a], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
          for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase()); for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = o : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = o), C.push((o ? "" : "no-") + l.join("-")) } }

  function s(e) { var n = x.className,
      t = Modernizr._config.classPrefix || ""; if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2") } Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? x.className.baseVal = n : x.className = n) }

  function i(e, n) { return !!~("" + e).indexOf(n) }

  function l() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

  function a(e) { return e.replace(/([a-z])-([a-z])/g, function(e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") }

  function u(e, n) { return function() { return e.apply(n, arguments) } }

  function f(e, n, t) { var o; for (var s in e)
      if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? u(o, t || n) : o); return !1 }

  function d(e) { return e.replace(/([A-Z])/g, function(e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") }

  function c(n, t, r) { var o; if ("getComputedStyle" in e) { o = getComputedStyle.call(e, n, t); var s = e.console; if (null !== o) r && (o = o.getPropertyValue(r));
      else if (s) { var i = s.error ? "error" : "log";
        s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else o = !t && n.currentStyle && n.currentStyle[r]; return o }

  function p() { var e = n.body; return e || (e = l(_ ? "svg" : "body"), e.fake = !0), e }

  function m(e, t, r, o) { var s, i, a, u, f = "modernizr",
      d = l("div"),
      c = p(); if (parseInt(r, 10))
      for (; r--;) a = l("div"), a.id = o ? o[r] : f + (r + 1), d.appendChild(a); return s = l("style"), s.type = "text/css", s.id = "s" + f, (c.fake ? c : d).appendChild(s), c.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = f, c.fake && (c.style.background = "", c.style.overflow = "hidden", u = x.style.overflow, x.style.overflow = "hidden", x.appendChild(c)), i = t(d, e), c.fake ? (c.parentNode.removeChild(c), x.style.overflow = u, x.offsetHeight) : d.parentNode.removeChild(d), !!i }

  function y(n, r) { var o = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)
        if (e.CSS.supports(d(n[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var s = []; o--;) s.push("(" + d(n[o]) + ":" + r + ")"); return s = s.join(" or "), m("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == c(e, null, "position") }) } return t }

  function v(e, n, o, s) {
    function u() { d && (delete N.style, delete N.modElem) } if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) { var f = y(e, o); if (!r(f, "undefined")) return f } for (var d, c, p, m, v, g = ["modernizr", "tspan", "samp"]; !N.style && g.length;) d = !0, N.modElem = l(g.shift()), N.style = N.modElem.style; for (p = e.length, c = 0; p > c; c++)
      if (m = e[c], v = N.style[m], i(m, "-") && (m = a(m)), N.style[m] !== t) { if (s || r(o, "undefined")) return u(), "pfx" == n ? m : !0; try { N.style[m] = o } catch (h) {} if (N.style[m] != v) return u(), "pfx" == n ? m : !0 }
    return u(), !1 }

  function g(e, n, t, o, s) { var i = e.charAt(0).toUpperCase() + e.slice(1),
      l = (e + " " + E.join(i + " ") + i).split(" "); return r(n, "string") || r(n, "undefined") ? v(l, n, o, s) : (l = (e + " " + P.join(i + " ") + i).split(" "), f(l, n, t)) }

  function h(e, n, r) { return g(e, t, t, n, r) } var C = [],
    S = [],
    w = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) { var t = this;
        setTimeout(function() { n(t[e]) }, 0) }, addTest: function(e, n, t) { S.push({ name: e, fn: n, options: t }) }, addAsyncTest: function(e) { S.push({ name: null, fn: e }) } },
    Modernizr = function() {};
  Modernizr.prototype = w, Modernizr = new Modernizr, Modernizr.addTest("ie8compat", !e.addEventListener && !!n.documentMode && 7 === n.documentMode); var x = n.documentElement,
    _ = "svg" === x.nodeName.toLowerCase(),
    b = "Moz O ms Webkit",
    E = w._config.usePrefixes ? b.split(" ") : [];
  w._cssomPrefixes = E; var P = w._config.usePrefixes ? b.toLowerCase().split(" ") : [];
  w._domPrefixes = P; var z = { elem: l("modernizr") };
  Modernizr._q.push(function() { delete z.elem }); var N = { style: z.elem.style };
  Modernizr._q.unshift(function() { delete N.style }), w.testAllProps = g, w.testAllProps = h, Modernizr.addTest("flexbox", h("flexBasis", "1px", !0)), o(), s(C), delete w.addTest, delete w.addAsyncTest; for (var T = 0; T < Modernizr._q.length; T++) Modernizr._q[T]();
  e.Modernizr = Modernizr }(window, document);