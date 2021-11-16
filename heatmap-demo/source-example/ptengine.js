_pt_sp_2.push('setDomain,xiaweiss.com');
_pt_sp_2.push('setServer,0');
_pt_sp_2.push('setEventReport,true');
/*event open*/
!function(a) {
  window["edc7uo"] = ["https://xiaweiss.com/#/"];
  function b() {
    var a = new RegExp("(^|#)ptengine=([^&]*)(&|$)","i")
      , b = location.hash.substr(1)
      , c = b.match(a);
    return null != c ? decodeURIComponent(c[2]) : null
  }
  function c() {
    this.eventName = "",
      this.eventType = 0,
      this.elementType = 0,
      this.properties = [],
      this.errors = [],
      this.rules = {
        eventName: {
          lengthLimit: function(a) {
            return a > 60
          }
        },
        key: {
          lengthLimit: 64,
          regex: /^[a-zA-Z\d_]*$/
        },
        value: {
          lengthLimit: 256
        }
      }
  }
  function d(a, b, c, d, e) {
    this.sid = a,
      this.uid = b,
      this.vid = c,
      this.pid = d,
      this.peid = e,
      this.v = A,
      this.ts = (new Date).getTime()
  }
  function e(a, b) {
    function c(b) {
      var c = "callback_" + d++;
      return e[c] = function() {
        b.apply(a, arguments)
      }
        ,
        c
    }
    var d = 0
      , e = {};
    window.addEventListener("message", function(a) {
      if (console.log(a.origin, a),
        /js(test)?\.pt(engine|mind)\.(cn|jp)/.test(a.origin)) {
        var b = JSON.parse(a.data)
          , c = b.fn;
        c && e[c] && "function" == typeof e[c] && (e[c](b.result),
          delete e[c])
      }
    }),
      this.set = function(d, e, f) {
        a.postMessage(JSON.stringify({
          key: d,
          data: e,
          fn: c(f)
        }), b)
      }
      ,
      this.get = function(d, e) {
        a.postMessage(JSON.stringify({
          key: d,
          fn: c(e)
        }), b)
      }
  }
  function f() {
    return N + ":" + pa
  }
  function g() {
    return "Safari" == Na.browerType
  }
  function h() {
    function b(a) {
      if (na)
        return !1;
      if (location.href.match(/(utm_campaign|utm_source|utm_medium|utm_term|utm_content)/))
        return !0;
      for (var b = 0; b < a.length; b++)
        if (location.search.match(new RegExp("[?/&](" + a[b] + ")=")))
          return !0;
      return !1
    }
    function c() {
      for (var a = ["(wap|www|m|m5).baidu.com", "www.baidu.jp", "(hao|so).360.cn", "www.360(soso|sou).com", "(www|m).so.com", "www.google.", "(blogsearch|books|images|news|scholar).google.com", "bing.com", "(search|tw.search).yahoo.com", "www.yahoo.cn", "search.yahoo.co.jp", "(www|jp).ask.com", "(cn|jp).indeed.com", "search.biglobe.ne.jp", "search.(goo|smt.docomo).ne.jp", "search.nifty.com", "websearch.rakuten.co.jp", "www.so-net.ne.jp"], b = 0; b < a.length; b++)
        if (Ka.referrer.match(new RegExp(a[b])))
          return !0;
      return !1
    }
    function e(a, b) {
      for (var c = 0; c < ea.length; c++)
        if (a.indexOf(ea[c]) > -1 && b.referrer.indexOf(ea[c]) > -1)
          return 0;
      return 1
    }
    function f(a, b, c) {
      a.addEventListener ? a.addEventListener(b, c, !0) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    function g(a, b) {
      var c = a;
      "object" == typeof b && (c = b);
      var d = "";
      try {
        d = Ra.getCssPathOld(c)
      } catch (a) {}
      var e, f = [];
      if (Aa.length > 0)
        for (var g = 0; g < Aa.length; g++)
          try {
            var i = Aa[g];
            if (i.length >= 10) {
              for (var j = y(i[7], i[9]), k = 0, l = j.length; k < l; k++)
                if (h(a, j[k])) {
                  f.push(i[3] + ":1:0");
                  break
                }
            } else if ("function" == typeof jQuery && jQuery(i[7])[0] == c || "function" != typeof jQuery && i[7] == d) {
              var m = i;
              e = m.slice(1, 5)
            }
          } catch (a) {}
      return {
        newEventTriggerList: f,
        oldEventTrigger: e
      }
    }
    function h(a, b) {
      return a === b || "body" !== a.nodeName.toLowerCase() && h(a.parentNode, b)
    }
    function k(a) {
      if (!a)
        return !1;
      var b, c;
      return a.newEventTriggerList && a.newEventTriggerList.length && (b = a.newEventTriggerList.join(",")),
      a.oldEventTrigger && (c = a.oldEventTrigger.join(".")),
      !(!b && !c) && {
        eid: b || "",
        stat: c || ""
      }
    }
    function m() {
      if (null == lb)
        return !1;
      var b = lb.nodeName.toLowerCase();
      if ("html" == b)
        return !1;
      var c = 0
        , e = Ra.parentA(lb)
        , f = Na.getOffset(lb);
      mb = f.left,
        nb = f.top;
      var h = "";
      try {
        h = Ra.getCssPath(lb)
      } catch (a) {}
      var i = (new Date).getTime();
      if (i - Ga < S && "a" != b)
        return !1;
      if ("object" == typeof e) {
        var j = e.getAttribute("onclick");
        if (j && j.indexOf("_pt_sp_2") > -1 && e.onclick && -1 == e.onclick.toString().indexOf("_pt_sp_2"))
          for (var m = j.split(";"), n = 0; n < m.length; n++)
            if (m[n].indexOf("setPVTag") > -1 && _pt_sp_2.push(m[n].replace("_pt_sp_2.push('", "").replace('_pt_sp_2.push("', "").replace("')", "").replace('")', "")),
            m[n].indexOf("setTrackEvent") > -1) {
              var p = m[n].split(",");
              8 == p.length && p.pop(),
                _pt_sp_2.push(p.join("").replace("_pt_sp_2.push('", "").replace('_pt_sp_2.push("', "").replace("')", "").replace('")', ""))
            }
        var q = function() {
          var a = ""
            , b = "object" == typeof e.href ? e.href.animVal : e.href
            , c = Oa.encode(b, !1).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\./g, "%2E");
          if ("" == b)
            ;
          else if (b.match(/mailto:/))
            "true" == ta.mailSendings && (a = "Mail,Mailto," + c.toLowerCase() + ",0");
          else if (b.toLowerCase().match(/\.(msi|pdf|apk|ipa|jar|umd|jad|epub|mobi|iso|tar|zip|rar|gzip|gz|dmg|doc|docx|xls|xlsx|csv|ppt|pptx|exe|txt|pdf|key|numbers|pages)/)) {
            if ("true" == ta.fileDownloads) {
              var d = b.toLowerCase().match(/\.(msi|pdf|apk|ipa|jar|umd|jad|epub|mobi|iso|tar|zip|rar|gzip|gz|dmg|doc|docx|xls|xlsx|csv|ppt|pptx|exe|txt|pdf|key|numbers|pages)/)[1];
              c = c.replace(/(^https?:\/\/)([^\/]+)/i, function(a) {
                return a.toLowerCase()
              }),
                a = "Downloads," + d + "," + c + ",0"
            }
          } else if (0 == b.toLowerCase().indexOf("http") && "true" == ta.outboundLinks) {
            for (var f = !0, g = 0; g < ea.length; g++)
              if (b.toLowerCase().indexOf(ea[g]) > 0) {
                f = !1;
                break
              }
            f && (c = c.replace(/(^https?:\/\/)([^\/]+)/i, function(a) {
              return a.toLowerCase()
            }),
              a = "Outbound%20Links,Exit," + c + ",0")
          }
          return a
        }();
        "" != q && oa && _pt_sp_2.push("setTrackEvent," + q + ",false")
      }
      var r;
      if (function() {
        if ("focus" == za)
          for (var a = 0; a < M.length; a++)
            if (M[a] == b)
              return;
        r = g(lb, e)
      }(),
        !("3bfec6ad" == pa && navigator.userAgent.indexOf("MSIE") > -1 && ".focus-menu .current " == h)) {
        var s = 0;
        s = "a" == b || "input" == b || "select" == b || "embed" == b || "object" == b || "textarea" == b || "button" == b ? 1 : lb.onclick ? 1 : 0 == lb.childNodes.length || 1 == lb.childNodes.length && 1 != lb.childNodes[0].nodeType ? 2 : 0;
        var t = s + ua[2] + Oa.encode(h, !1).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\./g, "%2E");
        if (Pa.readCookies(),
        1 != Pa.getValueFromCookies("to_flag") && Pa.isActive())
          ((c = i - Fa - rb * Q) < 0 || c > 1.5 * Q) && (c = Q);
        else {
          if (1 == Pa.getValueFromCookies("to_flag") || +i - +Pa.getValueFromCookies("sact") > +R)
            return l("pn"),
              !1;
          if (Pa.isNewVisit(Wa, i))
            return void l("pv");
          xb = !0,
            c = U
        }
        hb = Pa.plPrc(eb),
          Ea = i,
          Fa = i,
          Ga = i,
          Ya = Pa.getValueFromCookies("pvn"),
        zb && (clearInterval(window._pt_hb_interval),
          window._pt_hb_interval = setInterval(function() {
            o()
          }, Q),
          rb = 0),
          Pa.writeCookies();
        var u = Na.getYMax();
        Ua = La.orientation == a || 0 == La.orientation ? 1 : -1,
          1 == Ua && u > pb ? pb = u : 1 != Ua && u > qb && (qb = u);
        var v = new d(pa,qa,Wa,eb,gb)
          , w = pa + "." + qa + "." + Wa + "." + eb + "." + gb
          , x = +(kb.x + ua[0]) * Ua + "." + (kb.y + ua[1]) * Ua + "." + Na.getViewWidth() + "." + Na.getViewHeight() + "." + t + ".0." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + (1 == Ua ? pb : -1 * qb) + "." + c + "." + (mb + ua[0]) + "." + (nb + ua[1])
          , y = Ta + ""
          , z = k(r)
          , A = "";
        z ? (A = "?id=" + w,
        z.stat && (A += "&stat=" + z.stat,
          v.addPropery("stat", z.stat)),
        z.eid && (A += "&eid=" + z.eid,
          v.addPropery("eid", z.eid)),
        zb && (A += "&ocstat=" + x,
          v.addPropery("ocstat", x)),
          Ya = +Ya + 1,
          v.addPropery("pvn", Ya),
          v.addPropery("ptif", y),
          A += "&pvn=" + Ya,
          A += "&ptif=" + y,
        Ra.sendPost(L, v.getJSONRet()) || Ra.sendMsgByScript(L + A)) : zb && (v = new d(pa,qa,Wa,eb,gb),
          v.addPropery("stat", x),
          v.addPropery("ptif", y),
          A = "?id=" + w + "&stat=" + x + "&ptif=" + y,
          mb = 0,
          nb = 0,
          ua = [0, 0, ""],
        Ra.sendPost(I, v.getJSONRet()) || Ra.sendMsgByScript(I + A))
      }
    }
    function n() {
      for (var a, b, c = Ka.getElementsByTagName("a"), d = "", e = 0; e < c.length; e++)
        (a = c[e].getAttribute("href")) && (d = a.match(/[\#|\?|\&]_pt_link=[^#|^&]*/)) && (a = a.split(d),
          b = a[0] + (a[1] ? a[1] : ""),
          c[e].setAttribute("href", b))
    }
    function o() {
      if (Pa.readCookies(),
        !Pa.isActive())
        return void (xb = !1);
      if (!((new Date).getTime() - Fa > R + +Q && (!fa || "519aa7cd" != pa && "4d304c7a" != pa || n(),
        clearInterval(window._pt_hb_interval),
        yb = 1,
        xb = !1,
        Pa.writeCookies(),
      (rb + 5) * +Q < R))) {
        rb++;
        var b = Na.getYMax();
        Ua = La.orientation == a || 0 == La.orientation ? 1 : -1,
          1 == Ua && b > pb ? pb = b : 1 != Ua && b > qb && (qb = b);
        var c = new d(pa,qa,Wa,eb,gb);
        if (c.addPropery("stat", (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + (1 == Ua ? pb : -1 * qb) + "." + Na.getViewHeight() + "." + (1 == yb ? -1 * R + 1 : Q)),
          c.addPropery("ptif", Ta + ""),
          !Ra.sendPost(K, c.getJSONRet())) {
          var e = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb + "&stat=" + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + (1 == Ua ? pb : -1 * qb) + "." + Na.getViewHeight() + "." + (1 == yb ? -1 * R + 1 : Q) + "&ptif=" + Ta;
          Ra.sendMsg(K + e)
        }
      }
    }
    if (!Ma.href.match(/^https?:\/\/.*/) || Ma.href.indexOf("#_pt_capture") > -1)
      return !1;
    if (["7918662e", "613dedb9", "67c0f6ac", "3fca011a", "6ed7a454", "7a192cf9", "4c40caae", "3b32cedc", "65a94ff8"].join(",").indexOf(pa) < 0) {
      var p = /^http[s]?:\/\/((?!datatest).)+\.(miapex|ptengine|ptmind)\.(com|jp|cn)/;
      if (p.test(Ma.href) || p.test(Ka.referrer))
        return !1
    }
    if (location.href.indexOf("ptengine=") > -1)
      return !1;
    if (location.href.indexOf(xa) > -1 || Ka.referrer && Ka.referrer.indexOf(xa) > -1)
      return !1;
    switch (Ra.valFunction("heatmap", window.edc7uo) && (zb = !0),
      Ta) {
      case 2:
      case 3:
        R = 18e5
    }
    if ("cellant" == W && (2 == Ta || 3 == Ta))
      return !1;
    if (cb = Na.getPage(),
      db = cb,
      eb = Oa.createID(cb),
      Qa.clearOtherCookie(),
      Pa.writeRefererCookies(),
      Pa.readCookies(),
      ca = !(!Pa.cookiesValue || !ca),
    ca && (P = 864e5,
      Sa = Na.getRef(),
      preVID = Pa.getValueFromCookies("vid")),
      function() {
        function a(a) {
          function b(a, b, c) {
            var d = new Date;
            d.setTime(d.getTime() - 1e4),
              document.cookie = a + "='';expires=" + d.toGMTString() + ";domain=" + b + ";path=" + c + ";",
              document.cookie = a + "='';expires=" + d.toGMTString() + ";domain=" + b + ";path=" + c + "/;"
          }
          b(a, "", "");
          for (var c = document.location.hostname.split("."), d = document.location.pathname.split("/"), e = 0; e < c.length; e++)
            for (var f = 0; f < d.length; f++)
              b(a, c.slice(e).join("."), d.slice(0, parseInt(f) + 1).join("/"))
        }
        for (var b = Ka.cookie.split(";"), c = 0; c < b.length; c++)
          if (b[c] = b[c].split("="),
          b[c][0].indexOf(Jb) > -1)
            Pa.cookiesValue = b[c].slice(1).join("="),
              a(b[c][0]);
          else if (b[c][0].indexOf(Kb) > -1) {
            var d = Kb + "=" + b[c].slice(1).join("=") + ";domain=" + N + ";path=/;";
            a(b[c][0])
          }
        d && (document.cookie = d)
      }(),
    Oa.isNull(Pa.cookiesValue) || !Pa.checkCookiesValue())
      if (Qa.setValue(Kb, sb, {
        expires: ""
      }),
        Pa.cookiesValue = "",
        qa = Oa.createID(Na.getUidStr()),
      qa || (qa = Oa.createID((new Date).getTime() + "" + Math.random())),
        bb = "1",
        Xa = 0,
        tb) {
        var q = tb.split(".");
        qa = q[0],
          bb = q[1],
          Wa = q[2],
          Ea = q[3],
          Xa = q[4],
          Ya = q[5],
          ab = q[6].replace(/\*\_\*/g, ".").replace(/\*\_wh\_\*/g, "?"),
          Va = "0"
      } else
        Va = "1",
          ab = Sa.referrer;
    else if (b(ma) || c())
      if (tb) {
        var q = tb.split(".");
        qa = q[0],
          bb = q[1],
          Wa = q[2],
          Ea = q[3],
          Xa = q[4],
          Ya = q[5],
          ab = q[6].replace(/\*\_\*/g, ".").replace(/\*\_wh\_\*/g, "?"),
          Va = "0"
      } else
        qa = Pa.getValueFromCookies("uid"),
        qa || (qa = Oa.createID((new Date).getTime() + "" + Math.random())),
          bb = Pa.getIsNID(),
          Xa = Pa.getValueFromCookies("vn"),
          Va = "1",
          ab = Sa.referrer;
    else if (jb = Qa.getValue(Kb),
      wb = ib ? jb ? 1 : 0 : -1,
      tb)
      q = tb.split("."),
        qa = q[0],
        bb = q[1],
        Wa = q[2],
        Ea = q[3],
        Xa = q[4],
        Ya = q[5],
        ab = q[6].replace(/\*\_\*/g, ".").replace(/\*\_wh\_\*/g, "?"),
        hb = "",
        Va = "0",
        Qa.setValue(Kb, sb, {
          expires: ""
        });
    else {
      qa = Pa.getValueFromCookies("uid"),
      qa || (qa = Oa.createID((new Date).getTime() + "" + Math.random())),
        bb = Pa.getIsNID(),
      1 == Pa.getIsRefresh(sb) && (Sa = {
        flag: 0,
        referrer: ""
      }),
        Va = 1 == Sa.flag ? "1" : Pa.getIsNV(sb),
      "cellant" == W && ja && (Va = "1"),
      "cellant" == W && wb && !ka && (ka = jb.split("cad=")[1]) && (ka = ka.split("&")[0]),
        Xa = Pa.getValueFromCookies("vn");
      var r = Pa.getValueFromCookies("pvn");
      Ya = "1" == Va ? 0 : r || 1,
        hb = "1" == Va ? "" : Pa.getValueFromCookies("pl"),
        ab = "1" == Va ? Sa.referrer : La.localStorage && "function" == typeof La.localStorage.removeItem ? La.localStorage.getItem(Za) : "",
      "1" == Va && Qa.setValue(Kb, sb, {
        expires: ""
      })
    }
    if (vb && /^\d+$/.test(vb)) {
      for (var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/", t = qa.substr(1, 2) + qa.substr(5, 1) + qa.substr(8, 1) + qa.substr(10, 1) + qa.substr(13, 1) + qa.substr(15, 1) + qa.substr(19, 1), u = 0, v = 0; u < 8; ) {
        var w = t.charAt(7 - u);
        v += s.indexOf(w) * Math.pow(64, u),
          u++
      }
      if (v % vb != 0)
        return
    }
    Da = sb,
      Ea = tb ? Ea : sb,
      Fa = sb,
      Wa = tb ? Wa : "1" == Va ? Oa.createID(qa + cb + Ea + "v") : Pa.getValueFromCookies("vid"),
    ca && preVID && Wa != preVID && (Wa = preVID),
      Xa = "1" == Va ? +Xa + 1 : 0 == +Xa ? 1 : +Xa,
      Ya = +Ya + 1,
      gb = Oa.createID(qa + Wa + cb + Da + "v"),
      hb = Pa.plPrc(eb),
      Pa.writeCookies(),
      function() {
        if (Cb || "7f21ceb9" == pa)
          for (var a = document.getElementsByTagName("iframe"), b = 0; b < a.length; b++)
            a[b].onload = function(b) {
              return function(c) {
                this.contentWindow.document.onclick = function(c) {
                  var d = Na.getOffset(a[b]);
                  ua[0] = d.left,
                    ua[1] = d.top;
                  var e = "";
                  try {
                    e = Ra.getCssPath(a[b])
                  } catch (a) {}
                  ua[2] = encodeURIComponent(e),
                    kb = Na.getMouseRC1(c),
                  Na.getPageHeight() > 0 && (kb.x <= 0 || kb.y <= 0 || kb.x > +Na.getPageWidth() || kb.y > +Na.getPageHeight()) || (lb = Na.getSrcElement(c),
                    m())
                }
              }
            }(b)
      }();
    var x = -1 != window._pt_lt ? (new Date).getTime() - window._pt_lt : 0;
    x < 0 && (x = 0);
    var z = new d(pa,qa,Wa,eb,gb);
    z.addPropery("stat", ("1" == Va ? Xa : Ya) + "." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + ob * Ua + "." + Na.getViewHeight() + "." + x + "." + ("1" == Va ? Sa.flag : Na.getRefType(ab)) + ("1" == Va ? "" : "." + Xa)),
      z.addPropery("ref", Oa.encode(Sa.referrer.replace(/&/g, "*&*").replace(/\+/g, "*+*"), !1)),
    "1" != Va && z.addPropery("vref", Oa.encode(ab, !1)),
      z.addPropery("p", Oa.encode(cb.replace(/&/g, "*&*"), !1)),
      z.addPropery("tl", fb),
    ka && z.addPropery("cad", ka),
      z.addPropery("ptif", Ta + Na.getSysInfo()),
    i(!0) && z.addPropery("op", i(!0)),
      localStorage.setItem("PT_ID_" + pa, pa + "." + qa + "." + Wa + "." + eb + "." + gb),
    -1 == Ma.href.indexOf(ya) && Y && function() {
      var a = "https:" == location.protocol ? "https://" : "http://"
        , b = document.createElement("script");
      b.type = "text/javascript",
        b.async = !0,
        b.charset = "UTF-8",
        b.src = a + "pteengagejs.ptengine.cn/engage.js?v=" + A;
      try {
        localStorage.setItem("PTSID", pa),
          Ka.body.appendChild(b);
        var c = window.analytics = window.analytics || [];
        if (c.invoked)
          return void (window.console && console.error && console.error("engage_sdk snippet included twice."));
        c.invoked = !0,
          c.methods = ["pageview", "identify", "track", "ready", "page", "on"],
          c.factory = function(a) {
            return function() {
              var b = Array.prototype.slice.call(arguments);
              return b.unshift(a),
                c.push(b),
                c
            }
          }
        ;
        for (var d = 0; d < c.methods.length; d++) {
          var e = c.methods[d];
          c[e] = c.factory(e)
        }
      } catch (a) {
        Ka.getElementsByTagName("head")[0].appendChild(b)
      }
    }(),
      Ia = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb + "&stat=" + ("1" == Va ? Xa : Ya) + "." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + ob * Ua + "." + Na.getViewHeight() + "." + x + "." + ("1" == Va ? Sa.flag : Na.getRefType(ab)) + ("1" == Va ? "" : "." + Xa) + "&ref=" + Oa.encode(Sa.referrer.replace(/&/g, "*&*").replace(/\+/g, "*+*"), !1) + ("1" != Va ? "&vref=" + Oa.encode(ab, !1) : "") + "&p=" + Oa.encode(cb.replace(/&/g, "*&*"), !1) + "&tl=" + fb + (ka ? "&cad=" + ka : "") + "&ptif=" + Ta,
      Ia += Na.getSysInfo(),
      Ia += i();
    for (var B = 0; B < sa.length; B++)
      if ("cookie" == sa[B][2]) {
        var C = Qa.getValue(sa[B][1]);
        C && (Ia += "&" + sa[B][0] + "=" + Oa.encode(C, !1),
          z.addPropery(sa[B][0], Oa.encode(C, !1)))
      } else
        Ia += "&" + sa[B][0] + "=" + Oa.encode(sa[B][1], !1),
          z.addPropery(sa[B][0], Oa.encode(sa[B][1], !1));
    X && (Ia += "&pvid=" + encodeURIComponent(X),
      z.addPropery("pvid", encodeURIComponent(X))),
      "1" == Va ? !fa || "519aa7cd" != pa && "4d304c7a" != pa || "allManual" == ba || "" == Sa.referrer || !e(Ma.href, Sa) || 0 != Na.getRefType(Sa.referrer) || Ma.href.match(/[\#|\?|\&]_pt_link=[^#|^&]*/) ? Ra.sendPost(G, z.getJSONRet()) || Ra.sendMsg(G + Ia) : (eb = Oa.createID(Sa.referrer),
        gb = Oa.createID(qa + Wa + Sa.referrer + Da + "v"),
        z = new d(pa,qa,Wa,eb,gb),
        z.addPropery("stat", ("1" == Va ? Xa : Ya) + "." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + ob * Ua + "." + Na.getViewHeight() + "." + x + ".0"),
        z.addPropery("ref", ""),
        z.addPropery("p", Oa.encode(Sa.referrer.replace(/&/g, "*&*"), !1)),
        z.addPropery("tl", fb),
      ka && z.addPropery("cad", ka),
        z.addPropery("ptif", Ta + Na.getSysInfo()),
      X && z.addPropery("pvid", encodeURIComponent(X)),
      Ra.sendPost(G, z.getJSONRet()) || (Ia = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb + "&stat=" + ("1" == Va ? Xa : Ya) + "." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + ob * Ua + "." + Na.getViewHeight() + "." + x + ".0&ref=&p=" + Oa.encode(Sa.referrer.replace(/&/g, "*&*"), !1) + "&tl=" + fb + (ka ? "&cad=" + ka : "") + "&ptif=" + Ta,
        Ia += Na.getSysInfo(),
      X && (Ia += "&pvid=" + encodeURIComponent(X)),
        Ra.sendMsg(G + Ia)),
        function() {
          eb = Oa.createID(cb),
            gb = Oa.createID(qa + Wa + cb + Da + "v"),
            Ya = +Ya + 1,
            z = new d(pa,qa,Wa,eb,gb),
            z.addPropery("stat", Ya + "." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + ob * Ua + "." + Na.getViewHeight() + "." + x + "." + Na.getRefType(ab) + "." + Xa),
            z.addPropery("ref", Oa.encode(Sa.referrer.replace(/&/g, "*&*").replace(/\+/g, "*+*"), !1)),
            z.addPropery("vref", ""),
            z.addPropery("p", Oa.encode(cb.replace(/&/g, "*&*"), !1)),
            z.addPropery("tl", fb),
          ka && z.addPropery("cad", ka),
            z.addPropery("ptif", Ta + Na.getSysInfo()),
          X && (Ia += "&pvid=" + encodeURIComponent(X)),
          Ra.sendPost(H, z.getJSONRet()) || (Ia = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb + "&stat=" + Ya + "." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + ob * Ua + "." + Na.getViewHeight() + "." + x + "." + Na.getRefType(ab) + "." + Xa + "&ref=" + Oa.encode(Sa.referrer.replace(/&/g, "*&*").replace(/\+/g, "*+*"), !1) + "&vref=&p=" + Oa.encode(cb.replace(/&/g, "*&*"), !1) + "&tl=" + fb + (ka ? "&cad=" + ka : "") + "&ptif=" + Ta,
            Ia += Na.getSysInfo(),
          X && (Ia += "&pvid=" + encodeURIComponent(X)),
            Ra.sendMsg(H + Ia))
        }()) : Ra.sendPost(H, z.getJSONRet()) || Ra.sendMsg(H + Ia);
    var D = "vt=" + sb + "&cad=" + ka;
    if (Qa.setValue(Kb, D, {
      expires: ""
    }),
    "1" == Va && La.localStorage && "function" == typeof La.localStorage.removeItem && (La.localStorage.removeItem(Za),
      La.localStorage.setItem(Za, ab)),
      fa)
      if ("complete" == Ka.readyState)
        j();
      else {
        var E = La.onload;
        La.onload = function() {
          E && E(),
            j()
        }
      }
    var F = function() {
      var a = ["", ""]
        , b = function(a, b) {
        return "Chrome" != Na.browerType || (b[0] != a || b[1] != window) && (b[0] != window || b[1] != window)
      };
      return f(window, "focus", function(b) {
        a[1] != this && (a.push(this),
          a.shift())
      }),
        f(window, "click", function(b) {
          if (a[1] != this) {
            var c = b.target || b.srcElement;
            a.push(c),
              a.shift()
          }
        }),
        function() {
          if (/windows|win32/i.test(Ja.userAgent) && /msie|trident|edge/i.test(Ja.userAgent) || /(iPhone|iPad|iPod|iOS)/.test(Ja.userAgent))
            za = "click";
          else
            for (var c = 0; c < M.length; c++)
              for (var e = document.getElementsByTagName(M[c]), h = 0; h < e.length; h++)
                f(e[h], "focus", function(c) {
                  if (b(this, a)) {
                    lb = Na.getSrcElement(c);
                    var f = g(lb)
                      , i = k(f);
                    if (i) {
                      var j = new d(pa,qa,Wa,eb,gb)
                        , l = pa + "." + qa + "." + Wa + "." + eb + "." + gb
                        , m = Ta + ""
                        , n = "?id=" + l;
                      i.stat && (n += "&stat=" + i.stat,
                        j.addPropery("stat", i.stat)),
                      i.eid && (n += "&eid=" + i.eid,
                        j.addPropery("eid", i.eid)),
                        Ya = +Ya + 1,
                        j.addPropery("pvn", Ya),
                        j.addPropery("ptif", m),
                        n += "&pvn=" + Ya,
                        n += "&ptif=" + m,
                      Ra.sendPost(L, j.getJSONRet()) || Ra.sendMsgByScript(L + n)
                    }
                  }
                  a.push(e[h]),
                    a.shift()
                })
        }
    }()
      , M = ["input", "textarea", "select", "embed"];
    "interactive" === document.readyState.toLowerCase() || "complete" === document.readyState.toLowerCase() ? F() : document.onreadystatechange = function() {
      "complete" === document.readyState.toLowerCase() && F()
    }
      ,
      f(La, "onorientationchange", function(b) {
        Ua = La.orientation == a || 0 == La.orientation ? 1 : -1
      }),
      f(Ka, "touchmove", function(a) {
        ub = !0
      }),
      f(Ka, "touchstart", function(a) {
        a = a || La.event,
          lb = Na.getSrcElement(a),
          kb = Na.getMouseRC(a)
      }),
      function() {
        for (var a = 0, b = _.length; a < b; a++)
          window[wa].push("setCustomVarV2", _[a]);
        for (var a = 0, b = $.length; a < b; a++)
          window[wa].push("setUser", $[a]);
        for (var a = 0, b = Z.length; a < b; a++)
          window[wa].push("setEC", Z[a])
      }();
    var O, V = !1;
    f(Ka, "click", function(a) {
      a = a || La.event,
        kb = Na.getMouseRC1(a),
      Na.getPageHeight() > 0 && (kb.x <= 0 || kb.y <= 0 || kb.x > +Na.getPageWidth() || kb.y > +Na.getPageHeight()) || (lb = Na.getSrcElement(a),
      V || m())
    }),
      f(Ka, "touchend", function(a) {
        if (ub)
          return void (ub = !1);
        kb.x <= 0 || kb.y <= 0 || 0 == kb.x && 0 == kb.y || kb.x < 0 || kb.x > Na.getPageWidth() || kb.y > Na.getPageHeight() || (m(),
          V = !0,
        O && clearTimeout(O),
          O = setTimeout(function() {
            V = !1
          }, 500))
      });
    var aa, da = sb, ga = 0;
    return f(La, "scroll", function(b) {
      function c() {
        var a = !0;
        return 0 == Ka.body.clientHeight ? a = !1 : Na.getScrollY() <= 1 ? a = !1 : Na.getScrollY() + Na.getBrowserHeight() + 1 >= Na.getPageHeight() && (a = !1),
          a
      }
      var e = (new Date).getTime();
      if (aa = e,
      (ga = aa - da) < +T)
        return void (da = aa);
      var f = "";
      if (Pa.readCookies(),
      1 != Pa.getValueFromCookies("to_flag") && Pa.isActive())
        ((f = e - Fa - rb * Q) < 0 || f > 1.5 * Q) && (f = Q);
      else {
        if (1 == Pa.getValueFromCookies("to_flag") || +e - +Pa.getValueFromCookies("sact") > +R)
          return void l("pn");
        if (Pa.isNewVisit(Wa, e))
          return void l("pv");
        xb = !0,
          f = U
      }
      hb = Pa.plPrc(eb),
        Ea = e,
        Fa = e,
        Ya = Pa.getValueFromCookies("pvn"),
      zb && (clearInterval(window._pt_hb_interval),
        window._pt_hb_interval = setInterval(function() {
          o()
        }, Q),
        rb = 0),
        Pa.writeCookies();
      var g = Na.getYMax();
      if (Ua = La.orientation == a || 0 == La.orientation ? 1 : -1,
        1 == Ua && g > pb ? pb = g : 1 != Ua && g > qb && (qb = g),
      c() && zb) {
        var h = new d(pa,qa,Wa,eb,gb);
        if (h.addPropery("stat", (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + (1 == Ua ? pb : -1 * qb) + "." + (Na.getViewHeight() > 1500 ? 1500 : Na.getViewHeight()) + "." + f),
          h.addPropery("ptif", Ta + ""),
          !Ra.sendPost(J, h.getJSONRet())) {
          var i = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb + "&stat=" + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + (1 == Ua ? pb : -1 * qb) + "." + (Na.getViewHeight() > 1500 ? 1500 : Na.getViewHeight()) + "." + f + "&ptif=" + Ta;
          Ra.sendMsg(J + i)
        }
      }
      da = aa
    }),
      window._pt_hb_interval = setInterval(function() {
        o()
      }, Q),
      !1
  }
  function i(a) {
    var b = "";
    if (Ab)
      switch (Bb) {
        case "GoogleOptimize":
          window.gaData && window.gaData.expId && window.gaData.expVar && (b += gaData.expId + "|p||p|" + gaData.expVar + "|p||p|" + Bb);
          break;
        case "OptimizelyX":
          if ("object" == typeof window.optimizely && "function" == typeof window.optimizely.get) {
            var c = window.optimizely.get("state");
            if (c)
              for (var d = c.getActiveExperimentIds(), e = 0; e < d.length; e++) {
                var f = d[e]
                  , g = c.getExperimentStates({
                  isActive: !0
                })[f].experimentName || ""
                  , h = c.getVariationMap()[f]
                  , i = h.id
                  , j = h.name || "";
                b += 0 == e ? "" : "|o|",
                  b += f + "|p|" + g.substr(0, 100) + "|p|" + i + "|p|" + j.substr(0, 100),
                  b += "|p|" + Bb
              }
          }
          break;
        case "Optimizely":
        default:
          if ("object" == typeof optimizely) {
            var k = optimizely.activeExperiments;
            if (k && k.length > 0)
              for (var e = 0; e < k.length; e++)
                b += 0 == e ? "" : "|o|",
                  b += k[e] + "|p|" + optimizely.data.experiments[k[e]].name.substr(0, 100) + "|p|" + optimizely.variationIdsMap[k[e]][0] + "|p|" + optimizely.variationNamesMap[k[e]].substr(0, 100),
                  b += "|p|" + Bb
          }
      }
    return a ? b ? Oa.encode(b, !1) : "" : b ? "&op=" + Oa.encode(b, !1) : ""
  }
  function j() {
    var a = Ka.getElementsByTagName("a")
      , b = "";
    if ("allManual" == ba) {
      for (var c = 0; c < a.length; c++)
        if ((b = a[c].getAttribute("href")) && a[c].getAttribute("onclick") && a[c].getAttribute("onclick").indexOf("pt_domain") > -1)
          for (var d = b.toLowerCase(), e = 0; e < ea.length; e++)
            if (d.indexOf(ea[e]) > -1 && (b.indexOf(location.hostname) < 0 || b.indexOf(location.hostname) > d.indexOf(ea[e]))) {
              a[c].setAttribute("href", k(b));
              break
            }
    } else if ("halfManual" == ba)
      for (var c = 0; c < a.length; c++)
        if ((b = a[c].getAttribute("href")) && b.match(/^https?:\/\//) && b.length < 900)
          for (var d = b.toLowerCase(), e = 0; e < ea.length; e++)
            if (d.indexOf(ea[e]) > -1 && (b.indexOf(location.hostname) < 0 || b.indexOf(location.hostname) > d.indexOf(ea[e]))) {
              a[c].setAttribute("href", k(b));
              break
            }
  }
  function k(a) {
    var b = a.split("#");
    if (Pa.readCookies(),
      Pa.cookiesValue) {
      var c = Pa.getValueFromCookies("uid") + "." + Pa.getValueFromCookies("nid") + "." + Pa.getValueFromCookies("vid") + "." + Pa.getValueFromCookies("sact") + "." + Pa.getValueFromCookies("vn") + "." + Pa.getValueFromCookies("pvn") + "." + (La.localStorage && "function" == typeof La.localStorage.removeItem && La.localStorage.getItem(Za) ? La.localStorage.getItem(Za).replace(/\./g, "*_*").replace(/\?/g, "*_wh_*") : "");
      1 == b.length ? a += "#_pt_link=" + c : "allManual" != ba && "halfManual" != ba || (a = b[0] + (-1 == a.indexOf("?") ? "?" : "&") + "_pt_link=" + c + "#" + b[1])
    }
    return a
  }
  function l(a, b, c) {
    var e = c || eb
      , f = b || cb
      , g = new Date
      , h = g.getTime();
    if (!("vpv" != a && h - Fa < 1e4)) {
      Pa.readCookies(),
        ob = Na.getYMax(),
        yb = 0,
        xb = 1,
        Da = h,
        Ea = h,
        Fa = h,
        "pn" == a ? (Va = "1",
          Xa = Pa.getValueFromCookies("vn"),
          bb = Pa.getIsNID(),
          hb = "",
          Wa = Oa.createID(qa + f + Ea + "v"),
          Xa = +Xa + 1,
          Ya = 1) : (hb = Pa.getValueFromCookies("pl"),
          Wa = Pa.getValueFromCookies("vid"),
          Ya = Pa.getValueFromCookies("pvn"),
          Ya = Ya ? +Ya + 1 : 1),
        gb = Oa.createID(qa + Wa + f + Da + "v"),
        hb = Pa.plPrc(eb),
        Pa.writeCookies();
      var k = new d(pa,qa,Wa,e,gb);
      k.addPropery("stat", ("pn" == a ? 0 == +Xa ? 1 : +Xa : Ya) + "." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + ob * Ua + "." + Na.getViewHeight() + ".0.0" + ("pn" == a ? "" : "." + Xa)),
        k.addPropery("ref", ""),
      "pn" == a && k.addPropery("vref", Oa.encode(ab, !1)),
        k.addPropery("p", Oa.encode(f.replace(/&/g, "*&*"), !1)),
        k.addPropery("tl", fb),
      ka && k.addPropery("cad", ka),
        k.addPropery("ptif", Ta + Na.getSysInfo()),
      i(!0) && k.addPropery("op", i(!0)),
        Ia = "?id=" + pa + "." + qa + "." + Wa + "." + e + "." + gb + "&stat=" + ("pn" == a ? 0 == +Xa ? 1 : +Xa : Ya) + "." + (1 == Ua ? Na.getScrollY() : (Na.getScrollY() + 1) * Ua) + "." + ob * Ua + "." + Na.getViewHeight() + ".0.0" + ("pn" == a ? "" : "." + Xa) + "&ref=" + ("pn" == a ? "" : "&vref=" + Oa.encode(ab, !1)) + "&p=" + Oa.encode(f.replace(/&/g, "*&*"), !1) + "&tl=" + fb + (ka ? "&cad=" + ka : "") + "&ptif=" + Ta,
        Ia += Na.getSysInfo(),
        Ia += i();
      for (var l = 0; l < sa.length; l++)
        if ("cookie" == sa[l][2]) {
          var m = Qa.getValue(sa[l][1]);
          m && (Ia += "&" + sa[l][0] + "=" + Oa.encode(m, !1),
            k.addPropery(sa[l][0], Oa.encode(m, !1)))
        } else
          Ia += "&" + sa[l][0] + "=" + Oa.encode(sa[l][1], !1),
            k.addPropery(sa[l][0], Oa.encode(sa[l][1], !1));
      X && (Ia += "&pvid=" + encodeURIComponent(X),
        k.addPropery("pvid", encodeURIComponent(X))),
      Ra.sendPost("pn" == a ? G : H, k.getJSONRet()) || Ra.sendMsg(("pn" == a ? G : H) + Ia),
        yb = 0,
      !fa || "vpv" == a || "519aa7cd" != pa && "4d304c7a" != pa || j()
    }
  }
  function m(a) {
    if (a.length > 0)
      for (var b = 0, c = a.length; b < c; b++) {
        if (a[b] && "object" == typeof a[b]) {
          var d = a[b - 1];
          if (d) {
            switch (d) {
              case "setUser":
                $.push(a[b]);
                break;
              case "setPageViewVar":
                X = a[b].data ? JSON.stringify(a[b].data) : "";
                break;
              case "setEC":
                Z.push(a[b]);
                break;
              case "setCustomVarV2":
                _.push(a[b])
            }
            a[b] = null;
            continue
          }
        }
        var e = a[b].indexOf(",");
        if (!n(a[b].slice(0, e), a[b].slice(e + 1)))
          return !1
      }
    return !0
  }
  function n(a, b) {
    if (!b)
      return !1;
    switch (a) {
      case "setEngageEnabled":
        Y = "1" == b;
        break;
      case "setServer":
        D = b ? +b : 0,
          F = E + C[D],
          G = F + "/pn",
          H = F + "/pv",
          I = F + "/oc",
          J = F + "/os",
          K = F + "/hb",
          L = F + "/te";
        break;
      case "setAdParam":
        W = "cellant",
          b = b.replace(/^\|*/, "").replace(/\|*$/, ""),
          la = b ? b.split("|") : "";
        break;
      case "setCamParam":
        ma = b.split(",");
        break;
      case "setURL":
        ga = b;
        break;
      case "setIgnoreCampaign":
        na = "true" == b.toLowerCase();
        break;
      case "setVPV":
        ha = b.toLowerCase().split(",")[0];
        break;
      case "setVPT":
        ia = b;
        break;
      case "setAccount":
      case "setSID":
        pa = b.toLowerCase();
        break;
      case "isTestWeb":
        "true" == b && "" != pa && (Ba[pa] = !0);
        break;
      case "useHttpCookie":
        ra = "false" != b.toLowerCase();
        break;
      case "setDomain":
        return function() {
          N = "";
          var a = b.split(",");
          fa = a.length > 1,
            a.sort(function(a, b) {
              return a.replace(/^https?:\/\//, "").length > b.replace(/^https?:\/\//, "").length ? 1 : -1
            });
          for (var c = 0; c < a.length; c++)
            ea.push(a[c].replace(/^https?:\/\//, "")),
            a[c].match(/https?:\/\//) && a[c].match(/https?:\/\//)[0] != location.protocol + "//" || location.hostname.indexOf(a[c].replace(/^https?:\/\//, "")) > -1 && (N = a[c].replace(/^https?:\/\//, ""));
          return "default" != b && "http" == location.href.slice(0, 4) || (N = location.href.toLowerCase().split("://")[1].split("?")[0].split("/")[0],
            ea.push(N)),
            !0
        }();
      case "setAutoEvent":
        2 == b.split(",").length && (ta[b.split(",")[0]] = b.split(",")[1]);
        break;
      case "setEventReport":
        oa = "true" == b;
        break;
      case "setAutoFetchMatch":
        o(b);
        break;
      case "setPayDomainList":
        va = b.replace(/,$/, "").split(",")
    }
    return !0
  }
  function o(a) {
    var b = a.split(",")
      , c = b[0]
      , d = b[1]
      , e = b[2]
      , f = null;
    setTimeout(function() {
      if (c)
        switch (c) {
          case "URL":
            d && (f = p(e, d))
        }
      if (f)
        try {
          sessionStorage.getItem(a) || (sessionStorage.setItem(a, "1"),
            _pt_sp_2.push("setUser", {
              accountid: f
            }))
        } catch (a) {}
    }, 0)
  }
  function p(a, b) {
    var c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)","i")
      , d = Ma.search.substr(1)
      , e = null;
    if (null != (e = d.match(c)))
      return decodeURIComponent(e[2]);
    c = new RegExp("(^|/)" + a + "/([^/]*)(/|$)","i");
    for (var f = ["pathname", "hash"], g = 0, h = f.length; g < h; g++)
      if (d = Ma[f[g]].substr(1),
      null != (e = d.match(c)))
        return decodeURIComponent(e[2]);
    return null
  }
  function q(a) {
    var b = null;
    this.init = function() {
      if (!b)
        try {
          b = Ka.createElement("input"),
            b.type = "hidden",
            b.addBehavior("#default#userData"),
            Ka.body.appendChild(b)
        } catch (a) {
          return !1
        }
      return !0
    }
      ,
      this.isEnabled = function() {
        return !0
      }
      ,
      this.clearOtherCookie = function() {
        var a = new s;
        a.getValue(Jb) && (a.setValue(Jb, "", {
          expires: ""
        }),
          a.setValue(Lb, "", {
            expires: ""
          }))
      }
      ,
      this.setValue = function(c, d, e) {
        if (c == Kb)
          return void a.setValue(c, d, e);
        try {
          if (this.init()) {
            var f = b;
            f.load(c),
            d && f.setAttribute("code", d);
            var g = new Date;
            g.setDate(g.getDate() + 30),
              f.expires = g.toUTCString(),
              f.save(c)
          }
        } catch (a) {}
      }
      ,
      this.getValue = function(c) {
        if (c == Kb)
          return a.getValue(c);
        if (this.init())
          try {
            var d = b;
            return d.load(c),
              d.getAttribute("code")
          } catch (a) {
            return null
          }
      }
  }
  function r() {
    this.isEnabled = function() {
      return La.localStorage && "function" == typeof La.localStorage.removeItem
    }
      ,
      this.clearOtherCookie = function() {
        var a = new s;
        a.getValue(Jb) && (a.setValue(Jb, "", {
          expires: ""
        }),
          a.setValue(Lb, "", {
            expires: ""
          }))
      }
      ,
      this.getValue = function(a) {
        return La.sessionStorage.getItem(a) || La.localStorage.getItem(a)
      }
      ,
      this.setValue = function(a, b, c) {
        "" == c.expires ? (La.sessionStorage.setItem(a, b),
          La.localStorage.removeItem(a)) : La.localStorage.setItem(a, b)
      }
  }
  function s() {
    this.isEnabled = function() {
      return Ja.cookieEnabled
    }
      ,
      this.clearOtherCookie = function() {}
      ,
      this.getValue = function(a) {
        var b = "";
        if (this.isEnabled() || (ib = !1),
        Ka.cookie && "" != Ka.cookie)
          for (var c = Ka.cookie.split(";"), d = 0; d < c.length; d++) {
            var e = Oa.trim(c[d]);
            if (e.substring(0, a.length + 1) == a + "=" && (a != Jb || a == Jb && e.indexOf("pt1pt") < 0 && e.indexOf("pt0pt") < 0)) {
              b = e.substring(a.length + 1);
              break
            }
          }
        return b
      }
      ,
      this.setValue = function(a, b, c) {
        if (!this.isEnabled())
          return void (ib = !1);
        var d = "";
        if (c.expires && ("number" == typeof c.expires || c.expires.toUTCString)) {
          var e;
          "number" == typeof c.expires ? (e = new Date,
            e.setTime(e.getTime() + 24 * c.expires * 60 * 60 * 1e3)) : e = c.expires,
            d = "; expires=" + e.toUTCString()
        }
        Ka.cookie = a + "=" + b + d + "; path=/; domain=" + N
      }
  }
  function t() {
    var a = !1;
    if (this.localDataType = "",
    !ra && Ja.userAgent.toLowerCase().match(/msie\s([2-8]+?\.[\d]+)/gi))
      this.localDataType = new q(new s);
    else if (!ra && La.localStorage && La.sessionStorage && "function" == typeof La.localStorage.removeItem && "function" == typeof La.sessionStorage.removeItem) {
      var b = "pt_test";
      if (La.sessionStorage.setItem(b + "sk", b + "sv"),
        La.localStorage.setItem(b + "lk", b + "lv"),
      La.sessionStorage.getItem(b + "sk") == b + "sv" && La.localStorage.getItem(b + "lk") == b + "lv")
        this.localDataType = new r;
      else
        var a = !0;
      La.sessionStorage.removeItem(b + "sk"),
        La.localStorage.removeItem(b + "lk")
    } else if (ra)
      this.localDataType = new s;
    else
      var a = !0;
    a ? (this.clearOtherCookie = function() {}
        ,
        this.isEnabled = function() {
          return !1
        }
        ,
        this.setValue = function(a, b, c) {}
        ,
        this.getValue = function(a) {
          return ""
        }
    ) : (this.clearOtherCookie = function() {
        this.localDataType.clearOtherCookie()
      }
        ,
        this.isEnabled = function() {
          return this.localDataType.isEnabled()
        }
        ,
        this.setValue = function(a, b, c) {
          this.localDataType.setValue(a, b, c)
        }
        ,
        this.getValue = function(a) {
          return this.localDataType.getValue(a)
        }
    )
  }
  function u() {
    this.getSysInfo = function() {
      var a = [];
      return 1 == this.getTerminalType() || 4 == this.getTerminalType() ? (a.push("." + [this.getViewWidth(), this.getScreenHeight()].sort()[0]),
        a.push("." + [this.getViewWidth(), this.getScreenHeight()].sort()[1])) : (a.push("." + this.getScreenWidth()),
        a.push("." + this.getScreenHeight())),
        a.push("." + (La.screen.colorDepth || 0)),
        a.push("." + this.getTimezone().replace(/\./g, "_")),
        a.push("." + (Ja.platform || "").replace(/\./g, "_").toLowerCase()),
        a.push("." + (Ja.language || Ja.browserLanguage || "").replace(/\./g, "_").toLowerCase()),
        a.push("." + (Ka.characterSet || Ka.charset || "").replace(/\./g, "_").toLowerCase()),
        a.join("")
    }
      ,
      this.getUidStr = function() {
        try {
          var a = [this.getSysInfo()];
          a.push("&ua=" + Oa.encode(Ja.userAgent || "", !1)),
            a.push("&bw=" + (Ka.documentElement.clientWidth || Ka.body.clientWidth || 0)),
            a.push("&bh=" + Na.getBrowserHeight()),
            a.push("&pi=" + Na.getPlugins()),
            a.push("&ts=" + _a);
          var b = a.join("");
          return b || (b = (new Date).getTime() + "" + Math.random()),
            b
        } catch (a) {
          return (new Date).getTime() + "" + Math.random()
        }
      }
      ,
      this.getTitle = function() {
        try {
          var a = Ka.getElementsByTagName("title")[0] && Ka.getElementsByTagName("title")[0].innerHTML || Ka.title;
          return a = Oa.trim(a.split("#")[0]),
          ia && (a = ia),
            Oa.encode(a, !1)
        } catch (a) {
          return ""
        }
      }
      ,
      this.getRefType = function(a) {
        if (a) {
          for (var b = a.split("?")[0].toLowerCase(), c = 0; c < ea.length; c++) {
            var d = b.split("://")[0];
            if (!ea[c].match(/^https?:\/\/.*/) && b.indexOf(ea[c]) > -1)
              return 0;
            if (d == ea[c].split("://")[0] && b.indexOf(ea[c].split("://")[1]) > -1)
              return 0
          }
          return 1
        }
        return 0
      }
      ,
      this.getRef = function() {
        try {
          var a = {
            flag: 0,
            referrer: ""
          }
            , b = Ka.referrer;
          if (b || ca && da) {
            ca && (b = da || "*" + b + "*");
            var c = b.match(/^(\S+:\/\/)?([^\/|\?|\#]+)(\S*)/);
            if (a.referrer = c[1].toLowerCase() + c[2].toLowerCase() + c[3],
              a.referrer) {
              a.referrer = a.referrer.split("#")[0].replace(/(^\s*)/g, "").replace(/(\s*$)/g, ""),
              a.referrer.indexOf("?_randomTest") > -1 && (a.referrer = a.referrer.split("?_randomTest")[0]),
                a.referrer = a.referrer.replace(/\/*$/, "");
              for (var d = a.referrer.split("?")[0].toLowerCase(), e = 0; e < ea.length; e++) {
                var f = d.split("://")[0];
                if (!ea[e].match(/^https?:\/\/.*/) && d.indexOf(ea[e]) > -1)
                  return a;
                if (f == ea[e].split("://")[0] && d.indexOf(ea[e].split("://")[1]) > -1)
                  return a
              }
              ca || (a.flag = 1)
            }
            for (var e = 0, g = va.length; e < g; e++)
              if (va[e] && -1 !== a.referrer.indexOf(va[e]))
                return a.flag = 0,
                  a.referrer = Qa.getValue(Ha),
                  a
          }
          return a
        } catch (b) {
          return a
        }
      }
      ,
      this.getPlugins = function() {
        var a = ""
          , b = Ja.plugins;
        if (0 != b.length) {
          for (var c = new Array, d = 0; d < b.length; d++) {
            c[d] = b[d].name + ";" + b[d].description + ";" + b[d].filename + ";";
            for (var e = 0; e < b[d].length; e++)
              c[d] += "(" + b[d][e].description + ";" + b[d][e].type + ";" + b[d][e].suffixes + ")";
            c[d] += "."
          }
          a = c.sort().join("")
        }
        return a
      }
      ,
      this.setURLMerger = function(a) {
        function b(a, b) {
          var c = b.match(/^https?:\/\//);
          return c ? 0 == a.indexOf(c[0]) && a.indexOf(b.substring(c[0].length)) > -1 : a.indexOf(b) > -1
        }
        for (var c = /*window.allPageInfo*/
          [['xiaweiss.com', false, true, false, 'index.html', false]] || [], d = a, e = 0; e < c.length; e++)
          if (b(a, c[e][0])) {
            c[e][1] && (d = d.replace(/\#[^#|\$|\?]*/g, "")),
            c[e][2] && (d = d.replace(/^(http:\/\/|https:\/\/)?www./, "$1")),
            c[e][3] && (d = d.replace(new RegExp("([^#|$|?]*)" + c[e][4] + "(S*)"), "$1$2")),
              aa = "tmpUrlAPI" == aa ? "tmpUrlAPI" : 0 != c[e][5];
            break
          }
        return d
      }
      ,
      this.getPage = function() {
        var a, b = [], c = "", d = (Ma.protocol + "//" + Ma.host).toLowerCase() + Ma.pathname + Ma.search + Ma.hash;
        if (!d)
          return "";
        if (ea.length > 1) {
          var e = new RegExp(/(\?|\&|\#)_pt_link=([^\&|\#]*)(\&|\#)?/);
          d.match(e) && (tb = d.match(e)[2],
            d = "&" == d.match(e)[3] ? d.replace(e, "$1") : d.replace(e, "$3"))
        }
        switch (d = "56fbce4e" == pa ? d.replace(/(\?|\&)__SID=\S*/, "") : d,
          d = d.replace(/\?_randomTest=\S*/, ""),
        ha && (d = ha),
          d = this.setURLMerger(d),
          W) {
          case "cellant":
            if (la) {
              d = d.split("#")[0];
              var f = "";
              for (a = 0; a < la.length; a++)
                f = "",
                  d.indexOf("?" + la[a] + "=") > -1 ? f = "?" : d.indexOf("&" + la[a] + "=") > -1 && (f = "&"),
                f && (ja = !0,
                ka && (ka += ","),
                  b = d.split(f + la[a] + "="),
                  c = b[1] ? b[1].split("&")[0] : "",
                  ka += la[a] + ":" + c,
                  d = b[0] + f + b[1].slice(c.length + 1));
              d = d.replace(/\?*$/, "").replace(/\&*$/, "")
            }
            break;
          case "oisix":
            var g = ["utm_referrer", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "sessionid", "urlserverid", "SESSIONISNEW", "k", "tk", "KAKUNINJIKAN", "screenmode", "OVRAW", "OVKEY", "OVMTC", "OVADID", "OVKWID", "OVCAMPGID", "OVADGRPID", "SESSIONISNEW", "jid", "KENSAKUMOZIFLG", "KENSAKUMOZIJOUKEN", "searchValue", "param", "faqSearchKeyword", "startNum", "maxDisplayNum", "detail", "mi2", "roadid", "cart", "ref", "hosid", "utm_expid"]
              , f = "";
            for (a = 0; a < g.length; a++)
              f = "",
                d.indexOf("?" + g[a] + "=") > -1 ? f = "?" : d.indexOf("&" + g[a] + "=") > -1 && (f = "&"),
              f && (b = d.split(f + g[a] + "="),
                c = b[1] ? b[1].split("&")[0] : "",
                d = b[0] + f + b[1].slice(c.length + 1));
            d = d.replace(/\?*$/, "").replace(/\&*$/, "")
        }
        return ga && (d += "#" + ga),
        "7f21ceb9" != pa && "2934b1d1" != pa && "2161b761" != pa && "2f120b77" != pa && "tmpUrlAPI" != aa && aa && (d = d.replace(/\/*$/, "")),
        "4c92a252" == pa && (d = d.replace(/\/([\?|#])/, "$1")),
          d
      }
      ,
      this.isPCByPlat = function() {
        var a = Ja.platform.toLowerCase();
        if (a.indexOf("win") > -1)
          return !0;
        for (var b = ["mac68k", "macppc", "macintosh", "macintel"], c = 0; c < b.length; c++)
          if (a == b[c])
            return !0;
        return !1
      }
      ,
      this.isPCByOSList = function(a) {
        for (var b = ["AIX", "Amiga", "BeOS", "DragonFly", "FreeBSD", "GNU", "Haiku", "HP-UX", "IRIX", "Joli", "Java", "Macintosh", "Minix", "MorphOS", "NetBSD", "OpenBSD", "PClinuxOS", "QNX x86pc", "SunOS", "Ubuntu", "Mint", "Red Hat", "Slackware", "SUSE", "PCLinuxOS", "Debian", "Fedora", "CentOS", "Vine", "Arch Linux", "Gentoo", "Kanotix", "Mandriva"], c = 0; c < b.length; c++)
          if (a.indexOf(b[c]) > -1)
            return !0;
        return !1
      }
      ,
      this.isMobileByOSList = function(a) {
        for (var b = ["Android", "AROS", "Bada", "BlackBerry", "Chromium", "CrOS", "Danger Hiptop", "Inferno", "iPhone", "iPad", "iPod", "Nintendo DS", "Nintendo Wii", "Palm OS", "PLAYSTATION", "Syllable", "SymbOS", "Symbian", "Tizen", "webOS", "WebTV", "Windows CE", "Windows Mobile", "Windows Phone", "Xbox"], c = 0; c < b.length; c++)
          if (a.indexOf(b[c]) > -1)
            return !0;
        return !1
      }
      ,
      this.getTerminalType = function() {
        try {
          var a = Ja.userAgent;
          return a ? this.isPCByPlat() || this.isPCByOSList(a) ? this.isMobileByOSList(a) ? 3 : a.match(/.*MSIE.*Windows NT 6\.2;.*Touch\).*/) ? 4 : 2 : a.indexOf("iPad") > -1 || Math.min(Na.getScreenWidth(), La.screen.height) >= 1e3 ? 4 : 1 : 0
        } catch (a) {
          return 0
        }
      }
      ,
      this.getScreenWidth = function() {
        try {
          var a = La.screen.width;
          return a ? isNaN(parseInt(a, 10)) ? 0 : parseInt(a, 10) : 0
        } catch (a) {
          return 0
        }
      }
      ,
      this.getScreenHeight = function() {
        try {
          var a = La.screen.height;
          return (1 == this.getTerminalType() && a > 2e3 || 4 == this.getTerminalType() && a > 3e3) && (a = this.getViewHeight()),
            a ? isNaN(parseInt(a, 10)) ? 0 : parseInt(a, 10) : 0
        } catch (a) {
          return 0
        }
      }
      ,
      this.getBrowserHeight = function() {
        try {
          var a = La.innerHeight || Ka.documentElement.clientHeight || Ka.body.clientHeight;
          return [].join(",").indexOf(pa) > -1 && (a = La.innerHeight || Ka.body.clientHeight || Ka.documentElement.clientHeight),
            a ? isNaN(parseInt(a, 10)) ? 0 : parseInt(a, 10) : 0
        } catch (a) {
          return 0
        }
      }
      ,
      this.getScrollY = function() {
        var a = 0;
        try {
          a = Ka.documentElement.scrollTop || La.pageYOffset,
            a = isNaN(a) ? 0 : a
        } catch (b) {
          a = 0
        }
        return parseInt(a, 10)
      }
      ,
      this.getYMax = function() {
        var a = +this.getScrollY() + +this.getBrowserHeight();
        return a = isNaN(a) ? 0 : parseInt(a, 10)
      }
      ,
      this.getScrollX = function() {
        var a = Ka.documentElement.scrollLeft || La.pageXOffset;
        return a = isNaN(a) ? 0 : a,
          parseInt(a, 10)
      }
      ,
      this.getTimezone = function() {
        try {
          var a = (new Date).getTimezoneOffset();
          return a || 0 == a ? "GMT" + (a <= 0 ? "+" : "") + a / 60 * -1 : ""
        } catch (a) {
          return ""
        }
      }
      ,
      this.getSrcElement = function(a) {
        return a.target || La.event.srcElement
      }
      ,
      this.getOffset = function(b) {
        var c = {
          top: 0,
          left: 0
        };
        if (typeof b.getBoundingClientRect != typeof a) {
          var d = Ka.documentElement
            , e = b.getBoundingClientRect();
          c = {
            top: e.top + (La.pageYOffset || d.scrollTop) - (d.clientTop || 0),
            left: e.left + (La.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
          }
        } else {
          if (c.top += b.offsetTop,
            c.left += b.offsetLeft,
            b.offsetParent) {
            var f = this.getOffset(b.offsetParent);
            c.top += f.top,
              c.left += f.left
          }
          c.top < 0 && (c.top = 0),
          c.left < 0 && (c.left = 0),
            c.top = isNaN(c.top) ? 0 : parseInt(c.top, 10),
            c.left = isNaN(c.left) ? 0 : parseInt(c.left, 10)
        }
        return c.top = Math.round(c.top),
          c.left = Math.round(c.left),
          c
      }
      ,
      this.getMouseRC = function(a) {
        var b = {
          x: 0,
          y: 0
        };
        try {
          switch (b.x = a.touches[0].pageX ? a.touches[0].pageX : a.clientX,
            b.y = a.touches[0].pageY ? a.touches[0].pageY : a.clientY,
            pa) {
            case "7ba4a69b":
              a.touches[0].clientY <= 110 && (b.y = a.touches[0].clientY)
          }
          b.x || (b.x = 0),
          b.y || (b.y = 0)
        } catch (a) {}
        return b.x = isNaN(b.x) ? 0 : parseInt(b.x, 10),
          b.y = isNaN(b.y) ? 0 : parseInt(b.y, 10),
          b
      }
      ,
      this.getMouseRC1 = function(a) {
        var b = parseInt(+a.clientX + +this.getScrollX(), 10)
          , c = parseInt(+a.clientY + +this.getScrollY(), 10);
        return b = isNaN(b) ? 0 : b,
          c = isNaN(c) ? 0 : c,
          {
            x: b,
            y: c
          }
      }
      ,
      this.getPageWidth = function() {
        var a = parseInt(Ka.body.scrollWidth, 10);
        return a = isNaN(a) ? 0 : a
      }
      ,
      this.getPageHeight = function() {
        var a = parseInt(Ka.body.scrollHeight, 10);
        return a = isNaN(a) ? 0 : a
      }
      ,
      this.getViewWidth = function() {
        var a = self.innerWidth || Ka.body.clientWidth;
        return a = isNaN(a) ? 0 : parseInt(a, 10)
      }
      ,
      this.getViewHeight = function() {
        try {
          var a = self.innerHeight || Ka.body.clientHeight;
          return a = isNaN(a) ? 0 : parseInt(a, 10)
        } catch (a) {
          return 0
        }
      }
      ,
      this.getInitialScale = function() {
        try {
          var a = Ka.getElementsByName("viewport")[0].content;
          return a ? a.match("initial-scale=\\d.\\d+").toString().split("=")[1] : 1
        } catch (a) {
          return 1
        }
      }
    ;
    var b = this.browerType = function() {
      var b = window.navigator.userAgent
        , c = window.ActiveXObject != a && -1 != b.indexOf("MSIE")
        , d = -1 != b.indexOf("Firefox")
        , e = window.opr != a
        , f = b.indexOf("Chrome") && window.chrome
        , g = -1 != b.indexOf("Safari") && -1 != b.indexOf("Version");
      return c ? "IE" : d ? "Firefox" : e ? "Opera" : f ? "Chrome" : g ? "Safari" : "Unkown"
    }();
    this.urlLengthLimit = function() {
      return {
        IE: 2083,
        Firefox: 65536,
        Chrome: 8182,
        Safari: 8e4,
        Opera: 19e4,
        Unkown: 2083
      }[b]
    }()
  }
  function v() {
    this.valFunction = function(a, b) {
      var c = "";
      try {
        switch (a) {
          case "heatmap":
            if (-1 == b)
              return !0;
            if (b) {
              for (var d = Na.setURLMerger(Ma.href).replace(/\/*$/, ""), e = d.split("?")[0].replace(/\/*$/, "") == d ? d.split("#")[0].replace(/\/*$/, "") == d ? null : d.split("#")[0].replace(/\/*$/, "") : d.split("?")[0].replace(/\/*$/, ""), f = 0; f < b.length; f++)
                if (c = b[f],
                c && (c = Na.setURLMerger(c).replace(/\/*$/, ""),
                  c = c.split("?")[0].replace(/\/*$/, "") == c ? c.split("#")[0].replace(/\/*$/, "") == c ? c : c.split("#")[0].replace(/\/*$/, "") : c.split("?")[0].replace(/\/*$/, "")),
                d == c || e == c)
                  return !0;
              return !1
            }
            return !1
        }
      } catch (a) {}
    }
      ,
      this.sendMsgByScript = function() {
        function a(a) {
          var b = a + "&v=" + A + "&ts=" + (new Date).getTime();
          if (b.length > Na.urlLengthLimit)
            return void ("undefined" != typeof console && console.warn("The requested URL's length can't large than " + Na.urlLengthLimit));
          var c = document.createElement("script");
          c.setAttribute("src", b),
            document.getElementsByTagName("head")[0].appendChild(c)
        }
        return function(b) {
          if (!(Ya > 99) && (a(b),
            Ba[pa]))
            if ("4c92a252" == pa) {
              for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/", d = qa.substr(1, 2) + qa.substr(5, 1) + qa.substr(8, 1) + qa.substr(10, 1) + qa.substr(13, 1) + qa.substr(15, 1) + qa.substr(19, 1), e = 0, f = 0; e < 8; ) {
                var g = d.charAt(7 - e)
                  , h = c.indexOf(g);
                f += h * Math.pow(64, e),
                  e++
              }
              f % 10 == 0 && a(b)
            } else
              a(b)
        }
      }(),
      this.sendMsg = function() {
        function a(a) {
          var b = a + "&v=" + A + "&ts=" + (new Date).getTime();
          if (b.length > Na.urlLengthLimit)
            return void ("undefined" != typeof console && console.warn("The requested URL's length can't large than " + Na.urlLengthLimit));
          (new Image).src = b
        }
        return function(b) {
          if (!(Ya > 99) && (a(b),
            Ba[pa]))
            if ("4c92a252" == pa) {
              for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/", d = qa.substr(1, 2) + qa.substr(5, 1) + qa.substr(8, 1) + qa.substr(10, 1) + qa.substr(13, 1) + qa.substr(15, 1) + qa.substr(19, 1), e = 0, f = 0; e < 8; ) {
                var g = d.charAt(7 - e)
                  , h = c.indexOf(g);
                f += h * Math.pow(64, e),
                  e++
              }
              f % 10 == 0 && (b = b.replace(/collect.ptengine.cn/, "tzcj.ptmind.com"),
                a(b))
            } else
              b = b.replace(/collect.ptengine.cn/, "tzcj.ptmind.com"),
                a(b)
        }
      }(),
      this.createCORSRequest = function(a, b) {
        var c = new XMLHttpRequest;
        return "withCredentials"in c ? c.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (c = new XDomainRequest,
          c.open(a, b)) : c = null,
          c
      }
      ,
      this.sendPost = function(a, b) {
        var a = a
          , c = this.createCORSRequest("POST", a);
        return !(!c || !b) && (c.send(encodeURIComponent(b)),
          !0)
      }
      ,
      this.getCssPath = function(a) {
        var b = a.nodeName.toLowerCase();
        if ("body" == b || "html" == b)
          return "body";
        var c = a.parentNode;
        if (a.getAttribute("id"))
          return this.getCssPath(c) + ">#" + a.getAttribute("id");
        if (("input" == b || "select" == b || "textarea" == b || "button" == b) && a.getAttribute("name")) {
          var d = c.querySelectorAll(b + "[name='" + a.getAttribute("name") + "']");
          if (d.length > 1) {
            for (var e = 0; e < d.length; e++)
              if (d[e] == a)
                return this.getCssPath(c) + ">" + b + ":input[name='" + a.getAttribute("name") + "']:eq(" + e + ")"
          } else if (1 == d.length)
            return this.getCssPath(c) + ">" + b + ":input[name='" + a.getAttribute("name") + "']"
        }
        for (var f = [], e = 0; e < c.children.length; e++) {
          var g = c.children[e];
          g.nodeName && g.nodeName.toLowerCase() == b && f.push(g)
        }
        for (var e = 0; e < f.length; e++)
          if (f[e] == a)
            return this.getCssPath(c) + ">" + b + ":eq(" + e + ")"
      }
      ,
      this.getCssPathOld = function(a) {
        var b = a.nodeName.toLowerCase();
        if ("body" == b || "html" == b)
          return "body";
        if (a.getAttribute("id"))
          return "#" + a.getAttribute("id");
        for (var c = a.parentNode, d = 0; b == c.nodeName.toLowerCase() && !c.getAttribute("id"); )
          c = c.parentNode;
        for (var e = c.getElementsByTagName(b); 1 == e.length && !c.getAttribute("id") && "body" != c.nodeName.toLowerCase(); )
          c = c.parentNode,
            e = c.getElementsByTagName(b);
        for (var f = 0; f < e.length; f++)
          if (e[f] == a) {
            if (("input" == b || "select" == b || "textarea" == b || "button" == b) && a.getAttribute("name")) {
              var g = c.querySelectorAll(b + "[name='" + a.getAttribute("name") + "']");
              if (g.length > 1) {
                for (var f = 0; f < g.length; f++)
                  if (g[f] == a)
                    return this.getCssPathOld(c) + ">" + b + ":input[name='" + a.getAttribute("name") + "']:eq(" + f + ")"
              } else if (1 == g.length)
                return this.getCssPathOld(c) + ">" + b + ":input[name='" + a.getAttribute("name") + "']"
            }
            return this.getCssPathOld(c) + " " + b + ":eq(" + (f - d) + ")"
          }
      }
      ,
      this.parentA = function(a) {
        for (; "body" != a.nodeName.toLowerCase(); ) {
          if ("a" == a.nodeName.toLowerCase())
            return a;
          a = a.parentNode
        }
        return !1
      }
  }
  function w() {
    this.cookiesValue = "",
      this.syncSharedStorage = function() {
        var a = Math.floor(hb.length / 3800)
          , b = {
          uid: qa,
          nid: bb,
          vid: Wa,
          vn: Xa,
          pvn: Ya,
          to_flag: yb,
          pl: hb
        };
        a > 0 && (b.cn = a),
          console.log("sync write to localstorage start"),
        Rb && Rb.set(f(), b, function(a) {
          console.log("write done!")
        })
      }
      ,
      this.writeRefererCookies = function() {
        var a = Ka.referrer
          , b = !1;
        if (va.length > 0) {
          for (var c = 0, d = va.length; c < d; c++)
            -1 != a.indexOf(va[c]) && (b = !0);
          b || Qa.setValue(Ha, a, {
            expires: O
          })
        }
      }
      ,
      this.writeCookies = function() {
        ib && (this.cookiesValue = this.createCookiesValue(),
          Qa.setValue(Jb, this.cookiesValue, {
            expires: O
          })),
        g() && this.syncSharedStorage(),
          this.readCookies()
      }
      ,
      this.readCookies = function() {
        ib && (this.cookiesValue = Qa.getValue(Jb))
      }
      ,
      this.getIsRefresh = function(a) {
        return this.cookiesValue.indexOf(eb) > -1 && !Oa.timeCompare_M(this.getValueFromCookies("sact"), a, V) ? 1 : 0
      }
      ,
      this.getIsNV = function(a) {
        return 0 != wb || ca ? Oa.timeCompare_M(this.getValueFromCookies("sact"), a, P) && !ca ? 1 : 1 != this.getValueFromCookies("to_flag") || ca ? 0 : 1 : 1
      }
      ,
      this.getIsNID = function() {
        var a = this.getValueFromCookies("nid");
        return "1" == a && (a = 0),
          a
      }
      ,
      this.isActive = function() {
        return this.getValueFromCookies("pl") == eb + "*pt*" + Da
      }
      ,
      this.isNewVisit = function(a, b) {
        return this.getValueFromCookies("vid") != a && +b >= +this.getValueFromCookies("sact")
      }
      ,
      this.createCookiesValue = function() {
        var a = Math.floor(hb.length / 3800);
        return "uid=" + qa + "&nid=" + bb + "&vid=" + Wa + "&vn=" + Xa + "&pvn=" + Ya + "&sact=" + Ea + "&to_flag=" + yb + (+a > 0 ? "&cn=" + a : "") + "&pl=" + hb
      }
      ,
      this.checkCookiesValue = function() {
        for (var a = ["uid", "nid", "vid", "vn", "sact", "to_flag", "pl"], b = 0; b < a.length; b++)
          if (this.cookiesValue.indexOf(a[b]) < 0)
            return !1;
        return !0
      }
      ,
      this.getValueFromCookies = function(a) {
        try {
          if ("pl" == a)
            return -1 != this.cookiesValue.indexOf(a) ? this.cookiesValue.split(a + "=")[1] : "";
          var b = -1 != this.cookiesValue.indexOf(a) ? this.cookiesValue.split(a + "=")[1].split("&")[0] : "";
          return "pvn" == a && (b = isNaN(b) ? 0 : b),
            b
        } catch (a) {
          return ""
        }
      }
      ,
      this.plPrc = function(a) {
        return a + "*pt*" + Da
      }
  }
  function x() {
    this.addLoadEvent = function(a, b) {
      var c = a.onload;
      "function" != typeof a.onload ? a.onload = b : a.onload = function() {
        c(),
          b()
      }
    }
      ,
      this.timeCompare_M = function(a, b, c) {
        return +b - +a > +c
      }
      ,
      this.encode = function(a, b) {
        return encodeURIComponent instanceof Function ? b ? encodeURI(a) : encodeURIComponent(a) : escape(a)
      }
      ,
      this.decode = function(a, b) {
        var c = "";
        if (a = a.split("+").join(" "),
        decodeURIComponent instanceof Function)
          try {
            c = b ? decodeURI(a) : decodeURIComponent(a)
          } catch (b) {
            c = unescape(a)
          }
        else
          c = unescape(a);
        return c
      }
      ,
      this.isNull = function(b) {
        return a == b || "null" == b || -1 == b || "" == b
      }
      ,
      this.trim = function(a) {
        return a.replace(/(^\s*)/g, "").replace(/(\s*$)/g, "")
      }
      ,
      this.base64encodeForBin = function(a) {
        for (var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/", c = "", d = 0; d < a.length / 6 - 1; )
          c += b.charAt(parseInt(a.slice(6 * d, 6 * (d + 1)), 2).toString(10)),
            d++;
        var e = a.slice(6 * d, 6 * (d + 1));
        if (e) {
          var f = e.length;
          for (d = 0; d < 6 - f; d++)
            e += "0";
          c += b.charAt(parseInt(e, 2).toString(10))
        }
        return c
      }
      ,
      this.Hex2Bin = function(a) {
        for (var b = "", c = "", d = 0, e = a.length, f = 0; f < e; f++) {
          c = parseInt(a.charAt(f), 16).toString(2),
            d = c.length;
          for (var g = 0; g < 4 - d; g++)
            c = "0" + c;
          b += c
        }
        return b
      }
      ,
      this.createID = function(a) {
        return this.base64encodeForBin(this.Hex2Bin(this.MD5(a)))
      }
      ,
      this.MD5 = function(a) {
        function b(a, b) {
          return a << b | a >>> 32 - b
        }
        function c(a, b) {
          var c, d, e, f, g;
          return e = 2147483648 & a,
            f = 2147483648 & b,
            c = 1073741824 & a,
            d = 1073741824 & b,
            g = (1073741823 & a) + (1073741823 & b),
            c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
        }
        function d(a, b, c) {
          return a & b | ~a & c
        }
        function e(a, b, c) {
          return a & c | b & ~c
        }
        function f(a, b, c) {
          return a ^ b ^ c
        }
        function g(a, b, c) {
          return b ^ (a | ~c)
        }
        function h(a, e, f, g, h, i, j) {
          return a = c(a, c(c(d(e, f, g), h), j)),
            c(b(a, i), e)
        }
        function i(a, d, f, g, h, i, j) {
          return a = c(a, c(c(e(d, f, g), h), j)),
            c(b(a, i), d)
        }
        function j(a, d, e, g, h, i, j) {
          return a = c(a, c(c(f(d, e, g), h), j)),
            c(b(a, i), d)
        }
        function k(a, d, e, f, h, i, j) {
          return a = c(a, c(c(g(d, e, f), h), j)),
            c(b(a, i), d)
        }
        function l(a) {
          for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = Array(f - 1), h = 0, i = 0; i < c; )
            b = (i - i % 4) / 4,
              h = i % 4 * 8,
              g[b] = g[b] | a.charCodeAt(i) << h,
              i++;
          return b = (i - i % 4) / 4,
            h = i % 4 * 8,
            g[b] = g[b] | 128 << h,
            g[f - 2] = c << 3,
            g[f - 1] = c >>> 29,
            g
        }
        function m(a) {
          var b, c, d = "", e = "";
          for (c = 0; c <= 3; c++)
            b = a >>> 8 * c & 255,
              e = "0" + b.toString(16),
              d += e.substr(e.length - 2, 2);
          return d
        }
        var n, o, p, q, r, s, t, u, v, w = 32, x = w, y = Array(), z = 7, A = 12, B = 17, C = 22, D = 5, E = 9, F = 14, G = 20, H = 4, I = 11, J = 16, K = 23, L = 6, M = 10, N = 15, O = 21;
        for (y = l(a),
               s = 1732584193,
               t = 4023233417,
               u = 2562383102,
               v = 271733878,
               n = 0; n < y.length; n += 16)
          o = s,
            p = t,
            q = u,
            r = v,
            s = h(s, t, u, v, y[n + 0], z, 3614090360),
            v = h(v, s, t, u, y[n + 1], A, 3905402710),
            u = h(u, v, s, t, y[n + 2], B, 606105819),
            t = h(t, u, v, s, y[n + 3], C, 3250441966),
            s = h(s, t, u, v, y[n + 4], z, 4118548399),
            v = h(v, s, t, u, y[n + 5], A, 1200080426),
            u = h(u, v, s, t, y[n + 6], B, 2821735955),
            t = h(t, u, v, s, y[n + 7], C, 4249261313),
            s = h(s, t, u, v, y[n + 8], z, 1770035416),
            v = h(v, s, t, u, y[n + 9], A, 2336552879),
            u = h(u, v, s, t, y[n + 10], B, 4294925233),
            t = h(t, u, v, s, y[n + 11], C, 2304563134),
            s = h(s, t, u, v, y[n + 12], z, 1804603682),
            v = h(v, s, t, u, y[n + 13], A, 4254626195),
            u = h(u, v, s, t, y[n + 14], B, 2792965006),
            t = h(t, u, v, s, y[n + 15], C, 1236535329),
            s = i(s, t, u, v, y[n + 1], D, 4129170786),
            v = i(v, s, t, u, y[n + 6], E, 3225465664),
            u = i(u, v, s, t, y[n + 11], F, 643717713),
            t = i(t, u, v, s, y[n + 0], G, 3921069994),
            s = i(s, t, u, v, y[n + 5], D, 3593408605),
            v = i(v, s, t, u, y[n + 10], E, 38016083),
            u = i(u, v, s, t, y[n + 15], F, 3634488961),
            t = i(t, u, v, s, y[n + 4], G, 3889429448),
            s = i(s, t, u, v, y[n + 9], D, 568446438),
            v = i(v, s, t, u, y[n + 14], E, 3275163606),
            u = i(u, v, s, t, y[n + 3], F, 4107603335),
            t = i(t, u, v, s, y[n + 8], G, 1163531501),
            s = i(s, t, u, v, y[n + 13], D, 2850285829),
            v = i(v, s, t, u, y[n + 2], E, 4243563512),
            u = i(u, v, s, t, y[n + 7], F, 1735328473),
            t = i(t, u, v, s, y[n + 12], G, 2368359562),
            s = j(s, t, u, v, y[n + 5], H, 4294588738),
            v = j(v, s, t, u, y[n + 8], I, 2272392833),
            u = j(u, v, s, t, y[n + 11], J, 1839030562),
            t = j(t, u, v, s, y[n + 14], K, 4259657740),
            s = j(s, t, u, v, y[n + 1], H, 2763975236),
            v = j(v, s, t, u, y[n + 4], I, 1272893353),
            u = j(u, v, s, t, y[n + 7], J, 4139469664),
            t = j(t, u, v, s, y[n + 10], K, 3200236656),
            s = j(s, t, u, v, y[n + 13], H, 681279174),
            v = j(v, s, t, u, y[n + 0], I, 3936430074),
            u = j(u, v, s, t, y[n + 3], J, 3572445317),
            t = j(t, u, v, s, y[n + 6], K, 76029189),
            s = j(s, t, u, v, y[n + 9], H, 3654602809),
            v = j(v, s, t, u, y[n + 12], I, 3873151461),
            u = j(u, v, s, t, y[n + 15], J, 530742520),
            t = j(t, u, v, s, y[n + 2], K, 3299628645),
            s = k(s, t, u, v, y[n + 0], L, 4096336452),
            v = k(v, s, t, u, y[n + 7], M, 1126891415),
            u = k(u, v, s, t, y[n + 14], N, 2878612391),
            t = k(t, u, v, s, y[n + 5], O, 4237533241),
            s = k(s, t, u, v, y[n + 12], L, 1700485571),
            v = k(v, s, t, u, y[n + 3], M, 2399980690),
            u = k(u, v, s, t, y[n + 10], N, 4293915773),
            t = k(t, u, v, s, y[n + 1], O, 2240044497),
            s = k(s, t, u, v, y[n + 8], L, 1873313359),
            v = k(v, s, t, u, y[n + 15], M, 4264355552),
            u = k(u, v, s, t, y[n + 6], N, 2734768916),
            t = k(t, u, v, s, y[n + 13], O, 1309151649),
            s = k(s, t, u, v, y[n + 4], L, 4149444226),
            v = k(v, s, t, u, y[n + 11], M, 3174756917),
            u = k(u, v, s, t, y[n + 2], N, 718787259),
            t = k(t, u, v, s, y[n + 9], O, 3951481745),
            s = c(s, o),
            t = c(t, p),
            u = c(u, q),
            v = c(v, r);
        var P;
        return "16" == x && (P = m(t) + m(u)),
        "32" == x && (P = m(s) + m(t) + m(u) + m(v)),
          P
      }
      ,
      this.substringByByte = function(a, b) {
        for (var c = 0, d = 0, e = a.length; d < e; d++) {
          if (/[\x00-\xff]/.test(a[d]) ? c++ : c += 2,
          c == b)
            return a.substring(0, d + 1);
          if (c > b)
            return a.substring(0, d)
        }
        return a
      }
  }
  function y(b, c) {
    b = Oa.decode(b);
    var d;
    try {
      d = document.querySelectorAll ? document.querySelectorAll(b) : z(b)
    } catch (a) {
      d = z(b)
    }
    var e, f = [];
    if (c === a || "" === c)
      f = d;
    else
      for (var g = 0, h = d.length; g < h; g++)
        e = d[g],
        Oa.MD5(e.text || "") === c && f.push(e);
    return f
  }
  function z(a, b) {
    var c, d = [];
    if (a = a || [],
      b = b || document,
    "string" == typeof a && (a = a.split(/\s|>/)),
    0 === a.length)
      return [];
    for (var e = a.shift(); !e && a.length > 0; )
      e = a.shift();
    if (!e)
      return [];
    c = 0 !== a.length;
    var f = -1
      , g = e.match(/:nth-child\(\d\)/);
    if (g) {
      var h = g[0]
        , i = e.match(/[^:]*/g)[0];
      f = +h.match(/\d/)[0];
      var j = b.children[f - 1];
      return j && j.nodeName.toLowerCase() === i ? c ? z(a, j) : (d.push(j),
        d) : []
    }
    var k, l, m, n, o, p, q = [], r = e.match(/[^#\.:\[]*/), s = e.match(/#[^.:\[]*/), t = e.match(/\.[^#:\[]*/), u = e.match(/\[[^#:\.]*/);
    r && (r = r[0]),
    s && (s = s[0]),
    t && (t = t[0]),
    u && (u = u[0]),
    s && (s = s.replace("#", ""),
    (p = document.getElementById(s)) && d.push(p)),
    r && (s || (d = b.querySelectorAll ? b.querySelectorAll(r) : b.getElementsByTagName(r))),
    t && (s || r || (d = b.querySelectorAll ? b.querySelectorAll(t) : b.getElementsByClassName ? b.getElementsByClassName(t.replace(/\./g, " ")) : b.getElementsByTagName("*"))),
    u && (s || r || t || b.querySelectorAll && (d = b.querySelectorAll(u)));
    var v, w, x, y, A = t ? t.split(/\./) : [], B = u ? u.split(/\[|]/g) : [];
    for (l = 0,
           m = d.length; l < m; l++)
      if (k = d[l],
      !r || k.nodeName.toLowerCase() === r) {
        if (y = !0,
          t) {
          var C = " " + k.className + " ";
          for (n = 0,
                 o = A.length; n < o; n++)
            if (A[n] && (v = new RegExp("\\s" + A[n] + "\\s"),
              !v.test(C))) {
              y = !1;
              break
            }
          if (!y)
            continue
        }
        if (u) {
          for (n = 0,
                 o = B.length; n < o; n++)
            if (B[n] && (w = B[n].split("="),
              w[1] = w[1].replace(/^'|'$/g, ""),
              x = k.getAttribute(w[0]),
            x && (x = x.replace(/'/g, "\\'")),
            x !== w[1])) {
              y = !1;
              break
            }
          if (!y)
            continue
        }
        q.push(k)
      }
    return d = q,
      c ? z(a, d[0]) : d
  }
  window.edc7uo || (window.edc7uo = -1);
  var A = "v1.65.0";
  if (!navigator.doNotTrack || 1 != navigator.doNotTrack || window.PT_IGNORE_DNT) {
    var B = "engagebind.ptengine.cn/account_bind"
      , C = ["collect.ptengine.cn", "collect.ptengine.cn"]
      , D = 0
      , E = "https:" == location.protocol ? "https://" : "http://"
      , F = E + C[D]
      , G = F + "/pn"
      , H = F + "/pv"
      , I = F + "/oc"
      , J = F + "/os"
      , K = F + "/hb"
      , L = F + "/te"
      , M = F + "/ec";
    B = E + B;
    var N = ""
      , O = 1e3
      , P = 18e4
      , Q = 3e4
      , R = 3e5
      , S = 3e3
      , T = 1e3
      , U = 1e3
      , V = 6e4
      , W = ""
      , X = null
      , Y = !1
      , Z = []
      , $ = []
      , _ = []
      , aa = !0
      , ba = !1
      , ca = !1
      , da = ""
      , ea = []
      , fa = !1
      , ga = ""
      , ha = ""
      , ia = ""
      , ja = !1
      , ka = ""
      , la = []
      , ma = []
      , na = !1
      , oa = !1
      , pa = ""
      , qa = ""
      , ra = !0
      , sa = []
      , ta = {}
      , ua = [0, 0, ""]
      , va = []
      , wa = window._pt_sp_2 ? "_pt_sp_2" : "_pt_pe"
      , xa = "ptengine-event-explore=open"
      , ya = "preview_token"
      , za = "focus"
      , Aa = []
      , Ba = {
      "4c92a252": !0
    };
    if (function() {
      "use strict";
      function a(a) {
        return a < 10 ? "0" + a : a
      }
      function b() {
        return this.valueOf()
      }
      function c(a) {
        return e.lastIndex = 0,
          e.test(a) ? '"' + a.replace(e, function(a) {
            var b = h[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
          }) + '"' : '"' + a + '"'
      }
      function d(a, b) {
        var e, h, j, k, l, m = f, n = b[a];
        switch (n && "object" == typeof n && "function" == typeof n.toJSON && (n = n.toJSON(a)),
        "function" == typeof i && (n = i.call(b, a, n)),
          typeof n) {
          case "string":
            return c(n);
          case "number":
            return isFinite(n) ? String(n) : "null";
          case "boolean":
          case "null":
            return String(n);
          case "object":
            if (!n)
              return "null";
            if (f += g,
              l = [],
            "[object Array]" === Object.prototype.toString.apply(n)) {
              for (k = n.length,
                     e = 0; e < k; e += 1)
                l[e] = d(e, n) || "null";
              return j = 0 === l.length ? "[]" : f ? "[\n" + f + l.join(",\n" + f) + "\n" + m + "]" : "[" + l.join(",") + "]",
                f = m,
                j
            }
            if (i && "object" == typeof i)
              for (k = i.length,
                     e = 0; e < k; e += 1)
                "string" == typeof i[e] && (h = i[e],
                (j = d(h, n)) && l.push(c(h) + (f ? ": " : ":") + j));
            else
              for (h in n)
                Object.prototype.hasOwnProperty.call(n, h) && (j = d(h, n)) && l.push(c(h) + (f ? ": " : ":") + j);
            return j = 0 === l.length ? "{}" : f ? "{\n" + f + l.join(",\n" + f) + "\n" + m + "}" : "{" + l.join(",") + "}",
              f = m,
              j
        }
      }
      if ("object" != typeof JSON) {
        JSON = {};
        var e = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
          return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
        }
          ,
          Boolean.prototype.toJSON = b,
          Number.prototype.toJSON = b,
          String.prototype.toJSON = b);
        var f, g, h, i;
        "function" != typeof JSON.stringify && (h = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
          },
            JSON.stringify = function(a, b, c) {
              var e;
              if (f = "",
                g = "",
              "number" == typeof c)
                for (e = 0; e < c; e += 1)
                  g += " ";
              else
                "string" == typeof c && (g = c);
              if (i = b,
              b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length))
                throw new Error("JSON.stringify");
              return d("", {
                "": a
              })
            }
        )
      }
    }(),
      !(!window[wa] || window[wa].join("").indexOf("setAccount") < 0 && window[wa].join("").indexOf("setSID") < 0 || window[wa].join("").indexOf("setDomain") < 0)) {
      for (var Ca = 0; Ca < window[wa].length; Ca++)
        /setpvtag/i.test(window[wa][Ca]) && (window[wa][Ca] = window[wa][Ca].replace(/setpvtag/i, "setVPV"));
      if (m(window[wa])) {
        var Da, Ea, Fa, Ga, Ha = "pt_ref_" + pa, Ia = "", Ja = navigator, Ka = document, La = window, Ma = location, Na = new u, Oa = new x, Pa = new w, Qa = new t, Ra = new v, Sa = Na.getRef(), Ta = (Na.getInitialScale(),
        Na.getTerminalType() + ""), Ua = La.orientation == a || 0 == La.orientation ? 1 : -1, Va = "0", Wa = "", Xa = 0, Ya = 0, Za = pa + "_/", $a = new Date, _a = $a.getTime() + "-" + $a.getDate(), ab = "", bb = "0", cb = "", db = "", eb = "", fb = Na.getTitle(), gb = "", hb = "", ib = Qa.isEnabled(), jb = "", kb = "", lb = "", mb = 0, nb = 0, ob = Na.getYMax(), pb = 1 == Ua ? ob : 0, qb = 1 != Ua ? ob : 0, rb = 0, sb = $a.getTime(), tb = "", ub = !1, vb = "", wb = 0, xb = !0, yb = 0, zb = !1, Ab = !1, Bb = "Optimizely", Cb = !1, Db = {
          lastTime: (new Date).getTime() - 1e4,
          AddTime: function() {
            var a = (new Date).getTime();
            return !(this.lastTime + 1e3 > a) && (a - this.lastTime > 1e4 ? (this.lastTime = a - 9e3,
              !0) : (this.lastTime += 1e3,
              !0))
          }
        };
        if (location.search.indexOf("ptengine=") > -1 || b() && 32 != b().length) {
          var Eb = location.href.split("ptengine=")
            , Fb = {
            0: "https://report.ptengine.jp/js/popup/ptpopupheatmap.js",
            1: "https://reportv3.ptengine.jp/components/pagescene/overlay/overlay.js",
            2: "https://report.ptengine.com/js/popup/ptpopupheatmap.js",
            3: "https://reportv3.ptengine.com/components/pagescene/overlay/overlay.js",
            4: "https://demo.ptengine.jp/components/pagescene/heatmap/js/popup/ptpopupheatmap_jp.js",
            5: "https://demo.ptengine.com/components/pagescene/heatmap/js/popup/ptpopupheatmap_en.js",
            6: "https://devjpreport.ptmind.com/components/pagescene/overlay/overlay.js",
            7: "https://devenreport.ptmind.com/components/pagescene/overlay/overlay.js",
            8: "https://stagingjpreport.ptmind.com/components/pagescene/overlay/overlay.js",
            9: "https://stagingenreport.ptmind.com/components/pagescene/overlay/overlay.js",
            A: "http://localhost:3100/components/pagescene/overlay/overlay.js",
            B: "http://localhost:3000/components/pagescene/overlay/overlay.js",
            a: "https://report.ptengine.cn/components/pagescene/overlay/overlay.js",
            b: "https://stagingcnreport.ptmind.com/components/pagescene/overlay/overlay.js",
            c: "https://devcnreport.ptmind.com/components/pagescene/overlay/overlay.js",
            d: "http://localhost:3200/components/pagescene/overlay/overlay.js"
          }
            , Gb = Fb[Eb[1].substring(0, 1)];
          if (!Gb)
            return;
          var Hb = document.createElement("script");
          return Hb.type = "text/javascript",
            Hb.async = !0,
            Hb.charset = "utf-8",
            Hb.src = Gb,
            void document.body.appendChild(Hb)
        }
        if (Ma.href.indexOf(ya) > -1) {
          var E = "https:" == Ma.protocol ? "https://" : "http://"
            , Ib = Ka.createElement("script");
          return Ib.type = "text/javascript",
            Ib.async = !0,
            Ib.charset = "UTF-8",
            Ib.src = E + "pteengagejs.ptengine.cn/preview.js?v=" + A,
            void Ka.body.appendChild(Ib)
        }
        if (function() {
          function a() {
            c = c.replace(/^https?:/, Ma.protocol);
            var a = document.createElement("script");
            a.type = "text/javascript",
              a.async = !0,
              a.charset = "UTF-8",
              a.src = c + "/components/event/foreign/dest/event.js",
              Ka.body.appendChild(a)
          }
          var b = document.referrer || window.name || ""
            , c = localStorage.ptengineDomain;
          Ma.href.indexOf(xa) > -1 && /^https?:\/\/(.*\.ptengine.(com|cn|jp)|localhost).*/gim.test(b) ? (localStorage.ptengineDomain = c = b.match(/https?:\/\/([^\/]+)/i)[0],
            a()) : opener && c && a()
        }(),
        "" != N) {
          var Jb = "pt_" + pa
            , Kb = "pt_s_" + pa
            , Lb = "pt_t_" + pa
            , Mb = "pt_v_" + pa
            , Nb = "pt_sc_" + pa;
          switch (pa) {
            case "7915ceae":
              W = "CONVERSE"
          }
          if ("VjjxITmt45nXMldop676zQ" == Oa.createID("ptmind")) {
            c.prototype = {
              constructor: c,
              addProperty: function(a) {
                var b = function() {
                  var b = a.value;
                  return encodeURIComponent("function" == typeof b ? b.call() : b)
                }();
                this.properties.push({
                  key: encodeURIComponent(a.key),
                  type: a.type,
                  value: b
                }),
                this.rules.key.lengthLimit && a.key.length > this.rules.key.lengthLimit && this.errors.push({
                  errorType: "key",
                  errorValue: a.key,
                  msg: "key[" + a.key + "]length is too long"
                }),
                this.rules.key.regex && !this.rules.key.regex.test(a.key) && this.errors.push({
                  errorType: "key",
                  errorValue: a.key,
                  msg: "value[" + a.key + "] must match ^[a-zA-Zd_]*$"
                }),
                  "string" == typeof a.value ? (this.rules.value.lengthLimit && b.length > this.rules.value.lengthLimit && this.errors.push({
                    errorType: "value",
                    errorValue: a.value,
                    msg: "value[" + decodeURIComponent(a.value) + "]length is too long"
                  }),
                  this.rules.value.regex && !this.rules.value.regex.test(a.value) && this.errors.push({
                    errorType: "value",
                    errorValue: a.value,
                    msg: "value[" + a.value + "] must match ^[a-zA-Zd_]*$"
                  })) : "number" == typeof a.value && ((a.value > 4294967294 || a.value < -4294967296) && this.errors.push({
                    errorType: "value",
                    errorValue: a.value,
                    msg: "value[" + a.value + "] does not match, the type float should between -4294967296 and 4294967294, and the type int should bewteen -2147483648 and 2147483647"
                  }),
                  "int" == a.type && (a.value > 2147483647 || a.value < -2147483648) && this.errors.push({
                    errorType: "value",
                    errorValue: a.value,
                    msg: "value[" + a.value + "] is [" + a.type + "]type, it should between -2147483648 and 2147483647"
                  }))
              },
              getErrorMsg: function() {
                for (var a = [], b = 0, c = this.errors, d = c.length; b < d; b++)
                  a.push(c[b].msg);
                return a.join("\n")
              },
              getType: function() {
                var b = /^\d{4}\-\d{2}\-\d{2}(?:\x20\d{2}:\d{2}:\d{2})?$/;
                return function(c) {
                  return c === a && "undefined" != typeof console && console.warn("getType paramer is required!"),
                    "function" == typeof c ? arguments.callee.call(this, c.call()) : "number" == typeof c ? c % 1 == 0 ? "int" : "float" : "string" == typeof c ? b.test(c) ? "date" : "string" : "object" == typeof c && c instanceof Date ? "date" : void ("undefined" != typeof console && console.warn("unsupported type, only support 4 types:[int, float, string, date]"))
                }
              }(),
              getCustomVarEid: function() {
                for (var a = [this.eventName + ":" + this.eventType + ":" + this.elementType], b = 0, c = this.properties, d = c.length; b < d; b++) {
                  var e = c[b];
                  a.push(e.key + ":" + e.type + ":" + e.value)
                }
                return a.join("|")
              },
              getDateFormat: function() {
                function a(a) {
                  return 1 == (a + "").length ? "0" + a : a + ""
                }
                return function(b) {
                  if (b instanceof Date)
                    return b.getFullYear() + "-" + a(b.getMonth() + 1) + "-" + a(b.getDate()) + " " + a(b.getHours()) + ":" + a(b.getMinutes()) + ":" + a(b.getSeconds())
                }
              }()
            };
            var Ob = function(a) {
              this.events = [];
              for (var b = 0; b < a.length; b++)
                this.events.push(new Pb(a[b]))
            };
            Ob.prototype = {
              constructor: Ob,
              getAllErrors: function() {
                for (var a = [], b = 0; b < this.events.length; b++)
                  Array.prototype.push.apply(a, this.events[b].getEventErrors());
                return a
              },
              getCustomEventEid: function() {
                var b = this.events[0]
                  , c = [];
                if (b) {
                  var d = this.getAllErrors();
                  if (d.length) {
                    for (var e = 0, f = d.length; e < f; e++)
                      c.push(d[e].msg);
                    return c.join("\n")
                  }
                  var g = encodeURIComponent(b.eventName)
                    , c = [g + ":0:0"];
                  for (var h in b)
                    if ("eventName" != h && "pt_event_id" != h && b.hasOwnProperty(h)) {
                      var i = b[h]
                        , j = b.getType(i)
                        , k = i instanceof Date ? b.getDateFormat(i) : i;
                      if (j == a)
                        return void ("undefined" != typeof console && console.warn("unsupported type, only support 4 types:[int, float, string, date]"));
                      c.push(encodeURIComponent(h) + ":" + j + ":" + encodeURIComponent(k))
                    }
                  return c.join("|")
                }
              },
              getStr: function(b) {
                var c = [];
                b === a && Array.prototype.push.apply(c, this.events);
                var d = this.getAllErrors();
                return b !== a && d.push({
                  errorCode: "109",
                  errorType: "lengthLimit",
                  errorValue: b,
                  msg: "the url length " + b + " is too long"
                }),
                d.length && c.push({
                  pt_error: d
                }),
                  c
              }
            };
            var Pb = function(a) {
              this.pt_event_id = this.getEventId();
              for (var b in a)
                if (a.hasOwnProperty(b)) {
                  var c = a[b];
                  c = c instanceof Date ? this.getDateFormat(c) : c,
                    this[b] = c
                }
            };
            if (Pb.prototype = {
              constructor: Pb,
              rules: {
                eventName: {
                  maxLength: 60
                },
                key: {
                  maxLength: 64,
                  regex: /^[a-zA-Z\d_]*$/
                },
                value: {
                  string: {
                    maxLength: 256
                  },
                  date: {},
                  float: {
                    min: -4294967296,
                    max: 4294967294
                  },
                  int: {
                    min: -2147483648,
                    max: 2147483647
                  }
                }
              },
              getEventId: function() {
                for (var a = "0123456789qwertyuioplkjhgfdsazxcvbnm", b = "", c = 0; c < 32; c++)
                  b += a.charAt(Math.ceil(36 * Math.random()));
                return b
              },
              getPropsCount: function() {
                var a = 0;
                for (var b in this)
                  this.hasOwnProperty(b) && "eventName" != b && "pt_category" != b && a++;
                return a
              },
              getEventErrors: function() {
                var a = [];
                for (var b in this)
                  this.hasOwnProperty(b) && Array.prototype.push.apply(a, this.valid(b, this[b]));
                var c = this.getPropsCount();
                return c > 10 && !this.hasOwnProperty("pt_category") && a.push({
                  errorCode: "501",
                  errorValue: c,
                  errorEventName: this.eventName || this.pt_category,
                  msg: "The custom properties count must not more than 10"
                }),
                  a
              },
              valid: function(a, b) {
                var c = [];
                b = "function" == typeof b ? b.call() : b;
                var d = encodeURIComponent(b)
                  , e = this.getType(b);
                ("eventName" == a || "pt_category" == a) && this.rules.eventName.maxLength && b.replace(/[^\x00-\xff]+/g, "aa").length > this.rules.eventName.maxLength && c.push({
                  errorCode: "101",
                  errorType: "eventName",
                  errorValue: b,
                  errorEventName: this.eventName || this.pt_category,
                  msg: "eventName[" + b + "]length is too long"
                }),
                this.rules.key.maxLength && a.length > this.rules.key.maxLength && c.push({
                  errorCode: "103",
                  errorType: "key",
                  errorValue: a,
                  errorEventName: this.eventName || this.pt_category,
                  msg: "key[" + a + "]length is too long"
                }),
                this.rules.key.regex && !this.rules.key.regex.test(a) && c.push({
                  errorType: "key",
                  errorCode: "103",
                  errorValue: a,
                  errorEventName: this.eventName || this.pt_category,
                  msg: "key[" + a + "] must match ^[a-zA-Zd_]*$"
                });
                var f = {
                  string: function() {
                    this.rules.value.string.maxLength && d.length > this.rules.value.string.maxLength && c.push({
                      errorType: "value",
                      errorValue: b,
                      errorCode: "105",
                      errorEventName: this.eventName || this.pt_category,
                      msg: "value[" + decodeURIComponent(b) + "]length is too long"
                    })
                  },
                  int: function() {
                    (b > this.rules.value.int.max || b < this.rules.value.int.min) && c.push({
                      errorType: "value",
                      errorValue: b,
                      errorCode: "108",
                      errorEventName: this.eventName || this.pt_category,
                      msg: "value[" + b + "] is [" + e + "]type, it should between -2147483648 and 2147483647"
                    })
                  },
                  float: function() {
                    (b > this.rules.value.float.max || b < this.rules.value.float.min) && c.push({
                      errorType: "value",
                      errorValue: b,
                      errorCode: "107",
                      errorEventName: this.eventName || this.pt_category,
                      msg: "value[" + b + "] does not match, the type float should between -4294967296 and 4294967294, and the type int should bewteen -2147483648 and 2147483647"
                    })
                  }
                };
                return f[e] && f[e].call(this),
                  c
              },
              getType: function() {
                var a = /^\d{4}\-\d{2}\-\d{2}(?:\x20\d{2}:\d{2}:\d{2})?$/;
                return function(b) {
                  return "function" == typeof b ? arguments.callee.call(this, b.call()) : "number" == typeof b ? b % 1 == 0 ? "int" : "float" : "string" == typeof b ? a.test(b) ? "date" : "string" : "object" == typeof b && b instanceof Date ? "date" : void 0
                }
              }(),
              getDateFormat: function() {
                function a(a) {
                  return 1 == (a + "").length ? "0" + a : a + ""
                }
                return function(b) {
                  if (b instanceof Date)
                    return b.getFullYear() + "-" + a(b.getMonth() + 1) + "-" + a(b.getDate()) + " " + a(b.getHours()) + ":" + a(b.getMinutes()) + ":" + a(b.getSeconds())
                }
              }()
            },
              d.prototype.addPropery = function(a, b) {
                this[a] = b
              }
              ,
              d.prototype.getJSONRet = function() {
                return JSON.stringify(this)
              }
              ,
              window[wa].push = function(a, b) {
                function c(a) {
                  return "&eid=" + encodeURIComponent(a)
                }
                var e = a.split(",");
                switch (e[0]) {
                  case "setPVTag":
                    try {
                      if ("replace" == e[2])
                        cb = e[1];
                      else {
                        var f = e[1] ? e[1] : "";
                        cb = db + "#" + f
                      }
                      eb = Oa.createID(cb),
                        l("vpv", cb, eb)
                    } catch (a) {}
                    break;
                  case "setCustomEvent":
                    try {
                      var g = b.eventName ? b.eventName : "";
                      if (g = Oa.trim(g),
                      0 == oa || !g)
                        return;
                      var g = encodeURIComponent(Oa.substringByByte(g, 60))
                        , h = "0"
                        , i = b.isActiveElement ? b.isActiveElement : 0;
                      Ya = +Ya + 1;
                      var j = new d(pa,qa,Wa,eb,gb);
                      if (j.addPropery("eid", g + ":" + h + ":" + i),
                        j.addPropery("ptif", Ta + ""),
                        j.addPropery("pvn", Ya),
                        !Ra.sendPost(L, j.getJSONRet())) {
                        var k = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb + "&eid=" + g + ":" + h + ":" + i + "&ptif=" + Ta + "&pvn=" + Ya;
                        Ra.sendMsgByScript(L + k)
                      }
                    } catch (a) {}
                    break;
                  case "setTrackEvent":
                    try {
                      if (0 == oa)
                        return;
                      if ("string" == typeof e[6] && !Ma.href.replace(/\/$/, "").match(new RegExp(e[6].replace(/^\//, "").replace(/\/$/, ""))))
                        return;
                      void 0 === e[3] && (e[3] = ""),
                      void 0 === e[4] && (e[4] = "0"),
                        e[4] = e[4].replace(/\./g, "e");
                      for (var m = 1; m < 5; m++)
                        e[m] = Oa.decode(e[m]);
                      e[1] = e[1].substr(0, 200),
                        e[2] = e[2].substr(0, 200),
                        e[3] = e[3].substr(0, 500),
                        e[4] = e[4].substr(0, 10);
                      for (var m = 1; m < 5; m++)
                        if (e[m] = Oa.encode(e[m]).replace(/\./g, "%2E"),
                        e[m].indexOf(".") > -1) {
                          var n = e[m].split(".");
                          e[m] = n.join("%2E")
                        }
                      if ("string" == typeof e[7])
                        Aa.push(e);
                      else {
                        if ("" == qa || "" == Wa || "" == eb || "" == gb)
                          return;
                        if (!Db.AddTime())
                          return;
                        Ya = +Ya + 1,
                          Pa.writeCookies();
                        var j = new d(pa,qa,Wa,eb,gb);
                        if (j.addPropery("stat", e.slice(1, 5).join(".")),
                          j.addPropery("ptif", Ta + ""),
                          j.addPropery("pvn", Ya),
                          !Ra.sendPost(L, j.getJSONRet())) {
                          var k = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb + "&stat=" + e.slice(1, 5).join(".") + "&ptif=" + Ta + "&pvn=" + Ya;
                          Ra.sendMsgByScript(L + k)
                        }
                      }
                    } catch (a) {}
                    break;
                  case "setCustomVar":
                    !function() {
                      var a, b = e[3];
                      "cookie" == b ? a = e[4] : "globalVar" == b ? a = window[e[4]] : "domId" == b ? Ka.getElementById(e[4]) && (a = Ka.getElementById(e[4]).innerHTML) : "value" == b && (a = e[4]),
                      a && ("ptselfSource" == e[2] && sa.push(["def01", Qa.getValue(Nb), e[3]]),
                        sa.push([e[1], a, e[3]])),
                      "ptself" != e[2] && "ptselfSource" != e[2] || (l("vpv"),
                      "ptselfSource" == e[2] && sa.pop(),
                        sa.pop(),
                      "ptselfSource" == e[2] && Qa.setValue(Nb, "", {
                        expires: ""
                      }))
                    }();
                    break;
                  case "setCustomVarV2":
                    try {
                      if (0 == oa)
                        return;
                      var o = function() {
                        if ("object" == typeof b)
                          return "number" == typeof b.length ? b : [b]
                      }();
                      if (!o)
                        return;
                      var p = new Ob(o);
                      Ya = +Ya + 1;
                      var j = new d(pa,qa,Wa,eb,gb);
                      if (j.addPropery("eid", p.getCustomEventEid()),
                        j.addPropery("ptif", Ta + ""),
                        j.addPropery("pvn", Ya),
                        !Ra.sendPost(L, j.getJSONRet())) {
                        var k = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb + "&eid=" + p.getCustomEventEid() + "&ptif=" + Ta + "&pvn=" + Ya;
                        Ra.sendMsgByScript(L + k)
                      }
                    } catch (a) {}
                    break;
                  case "setEC":
                    try {
                      var o = function() {
                        if ("object" == typeof b)
                          return "number" == typeof b.length ? b : [b]
                      }()
                        , p = new Ob(o);
                      if (!o)
                        return;
                      if (0 == oa)
                        return;
                      Ya = +Ya + 1;
                      var q = p.getStr()
                        , r = "?id=" + pa + "." + qa + "." + Wa + "." + eb + "." + gb
                        , s = "&ptif=" + Ta + "&pvn=" + Ya
                        , t = new d(pa,qa,Wa,eb,gb);
                      t.addPropery("ptif", Ta + ""),
                        t.addPropery("pvn", Ya),
                        t.addPropery("v", A),
                        t.addPropery("ts", (new Date).getTime()),
                        t.addPropery("data", q);
                      var k = r + s;
                      if (!Ra.sendPost(M, t.getJSONRet())) {
                        k = r + c(JSON.stringify(q)) + s;
                        var u = M + k + "&v=" + A + "&ts=" + (new Date).getTime();
                        u.length > Na.urlLengthLimit && (k = r + c(p.getStr(u.length)) + s),
                          Ra.sendMsgByScript(M + k)
                      }
                    } catch (a) {}
                    break;
                  case "setUser":
                    if ("object" == typeof b) {
                      if (!b.accountid)
                        throw new Error("accountid can not be empty.");
                      var v = {
                        uid: qa,
                        sid: pa,
                        accountid: b.accountid,
                        properties: b.props || {}
                      };
                      Ra.sendPost(B, JSON.stringify(v))
                    }
                    break;
                  case "setFunnelStep":
                    try {
                      ca = "true" == e[1],
                        da = 3 == e.length ? e[2] : ""
                    } catch (a) {}
                    break;
                  case "useURLTrim":
                    try {
                      aa = "false" != e[1] || "tmpUrlAPI"
                    } catch (a) {}
                    break;
                  case "setCrossDomainLink":
                    try {
                      ba = "allManual" == e[1] ? "allManual" : "halfManual" == e[1] && "halfManual"
                    } catch (a) {}
                    break;
                  case "setIframe":
                    Cb = "true" == e[1];
                    break;
                  case "RecordSource":
                    if (Qa.getValue(Mb) == Wa)
                      return;
                    var w;
                    w = location.search.indexOf("utm_") > -1 ? location.href : ab ? ab.split("://")[1].split("/")[0] : "";
                    var x = Oa.encode(w, !1) || "no referrer"
                      , y = Qa.getValue(Nb);
                    x = y ? y + "," + x : x,
                      Qa.setValue(Nb, x, {
                        expires: O
                      }),
                      Qa.setValue(Mb, Wa, {
                        expires: O
                      });
                    break;
                  case "ClearSource":
                    Qa.setValue(Nb, "", {
                      expires: ""
                    });
                    break;
                  case "setSampleRate":
                    try {
                      vb = e[1]
                    } catch (a) {}
                    break;
                  case "setOptimizely":
                    try {
                      Ab = "true" == e[1],
                      e[2] && (Bb = e[2])
                    } catch (a) {}
                    break;
                  case "setOptimizelyX":
                    try {
                      Ab = "true" == e[1],
                        Bb = "OptimizelyX"
                    } catch (a) {}
                }
              }
              ,
            window[wa].length > 0)
              for (var Qb = window[wa], Ca = 0; Ca < Qb.length; Ca++)
                Qb[Ca] && window[wa].push(Qb[Ca]);
            "308fd851" != pa && "633fdbe6" != pa || (Q = 6e4);
            var Rb;
            if (Pa.readCookies(),
              g()) {
              var Sb = document.createElement("iframe")
                , E = "https:" == Ma.protocol ? "https://" : "http://";
              Sb.src = E + "js.ptengine.cn/tracking.html",
                Sb.setAttribute("style", "width:0;height:0;border:0;border:none;display:none"),
                document.body.appendChild(Sb);
              var Tb = !1
                , Ub = setTimeout(function() {
                console.log("timeout timer fired ,load event got exception"),
                Tb || (Tb = !0),
                  h()
              }, 1e3);
              Sb.addEventListener("load", function(a) {
                console.log("tracking html load event fired !"),
                Tb || (Tb = !0,
                  clearTimeout(Ub),
                  Rb = new e(Sb.contentWindow,"*"),
                  Pa.cookiesValue ? h() : Rb.get(f(), function(a) {
                    if (a) {
                      var b = JSON.parse(a);
                      qa = b.uid,
                        bb = b.nid,
                        Wa = b.vid,
                        Xa = b.vn,
                        Ya = b.pvn,
                        Ea = b.sact,
                        yb = b.to_flag,
                        hb = b.pl,
                      qa && Pa.writeCookies()
                    }
                    h()
                  }))
              })
            } else
              h()
          }
        }
      }
    }
  }
}();
