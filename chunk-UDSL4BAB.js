import {
    Hc as D,
    Ii as O,
    Vg as B,
    sc as x,
    yd as g,
    zc as A,
    zd as j
} from "./chunk-5MZXJYZL.js";
import {
    a as m,
    d as H,
    e as L,
    f as C
} from "./chunk-GAL4ENT6.js";
var T = H((b, h) => {
    (function(c, n) {
        typeof define == "function" && define.amd ? define([], n) : typeof b < "u" ? n() : (n(), c.FileSaver = {})
    })(b, function() {
        "use strict";

        function c(e, t) {
            return typeof t > "u" ? t = {
                autoBom: !1
            } : typeof t != "object" && (console.warn("Deprecated: Expected third argument to be a object"), t = {
                autoBom: !t
            }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], {
                type: e.type
            }) : e
        }

        function n(e, t, s) {
            var o = new XMLHttpRequest;
            o.open("GET", e), o.responseType = "blob", o.onload = function() {
                d(o.response, t, s)
            }, o.onerror = function() {
                console.error("could not download file")
            }, o.send()
        }

        function l(e) {
            var t = new XMLHttpRequest;
            t.open("HEAD", e, !1);
            try {
                t.send()
            } catch {}
            return 200 <= t.status && 299 >= t.status
        }

        function i(e) {
            try {
                e.dispatchEvent(new MouseEvent("click"))
            } catch {
                var t = document.createEvent("MouseEvents");
                t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t)
            }
        }
        var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : void 0,
            R = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
            d = a.saveAs || (typeof window != "object" || window !== a ? function() {} : "download" in HTMLAnchorElement.prototype && !R ? function(e, t, s) {
                var o = a.URL || a.webkitURL,
                    r = document.createElement("a");
                t = t || e.name || "download", r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? i(r) : l(r.href) ? n(e, t, s) : i(r, r.target = "_blank")) : (r.href = o.createObjectURL(e), setTimeout(function() {
                    o.revokeObjectURL(r.href)
                }, 4e4), setTimeout(function() {
                    i(r)
                }, 0))
            } : "msSaveOrOpenBlob" in navigator ? function(e, t, s) {
                if (t = t || e.name || "download", typeof e != "string") navigator.msSaveOrOpenBlob(c(e, s), t);
                else if (l(e)) n(e, t, s);
                else {
                    var o = document.createElement("a");
                    o.href = e, o.target = "_blank", setTimeout(function() {
                        i(o)
                    })
                }
            } : function(e, t, s, o) {
                if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof e == "string") return n(e, t, s);
                var r = e.type === "application/octet-stream",
                    M = /constructor/i.test(a.HTMLElement) || a.safari,
                    E = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((E || r && M || R) && typeof FileReader < "u") {
                    var p = new FileReader;
                    p.onloadend = function() {
                        var u = p.result;
                        u = E ? u : u.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = u : location = u, o = null
                    }, p.readAsDataURL(e)
                } else {
                    var S = a.URL || a.webkitURL,
                        f = S.createObjectURL(e);
                    o ? o.location = f : location.href = f, o = null, setTimeout(function() {
                        S.revokeObjectURL(f)
                    }, 4e4)
                }
            });
        a.saveAs = d.saveAs = d, typeof h < "u" && (h.exports = d)
    })
});
var w = {};
L(w, {
    loadPreviousBusinessDay: () => v
});
var v = j("[DW] load previous business day");
var P = {
        previousBusinessDays: {}
    },
    _ = A({
        previousBusinessDays: g(v)
    }, P);

function K(c, n) {
    return _(c, n)
}
var U = D(O.dw);
var y = {};
L(y, {
    selectPreviousBusinessDay: () => q
});
var q = B(x(U, c => c ? .previousBusinessDays));
var Y = m({}, w),
    Z = m({}, y);
var F = C(T()),
    k = class {
        static saveAs(n, l, i, a) {
            (0, F.saveAs)(n, l)
        }
        static getFileName(n, l) {
            return n.headers.get("Content-Disposition").split(";")[1].split("filename")[1].split("=")[1].trim() || l
        }
        static printInNewTab(n) {
            let l = URL.createObjectURL(n),
                i = document.createElement("a");
            i.href = l, i.target = "_blank", document.body.appendChild(i), i.click(), document.body.removeChild(i)
        }
    };
export {
    K as a, Y as b, Z as c, k as d
};