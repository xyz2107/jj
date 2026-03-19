/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 3.0.3 Built on 2025-09-18T08:03:54.261Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2025 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2025 yWorks GmbH, http://www.yworks.com
 *               2015-2025 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */
import Se from "@babel/runtime/helpers/typeof";
import {
    zlibSync as Do
} from "fflate";
import Os from "@babel/runtime/helpers/slicedToArray";
import {
    decode as el
} from "fast-png";
var Gt = (function() {
    return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this
})();

function Ro() {
    Gt.console && typeof Gt.console.log == "function" && Gt.console.log.apply(Gt.console, arguments)
}
var _e = {
    log: Ro,
    warn: function(n) {
        Gt.console && (typeof Gt.console.warn == "function" ? Gt.console.warn.apply(Gt.console, arguments) : Ro.call(null, arguments))
    },
    error: function(n) {
        Gt.console && (typeof Gt.console.error == "function" ? Gt.console.error.apply(Gt.console, arguments) : Ro(n))
    }
};

function To(n, e, i) {
    var a = new XMLHttpRequest;
    a.open("GET", n), a.responseType = "blob", a.onload = function() {
        fi(a.response, e, i)
    }, a.onerror = function() {
        _e.error("could not download file")
    }, a.send()
}

function Ms(n) {
    var e = new XMLHttpRequest;
    e.open("HEAD", n, !1);
    try {
        e.send()
    } catch {}
    return e.status >= 200 && e.status <= 299
}

function Ka(n) {
    try {
        n.dispatchEvent(new MouseEvent("click"))
    } catch {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.dispatchEvent(e)
    }
}
var fi = Gt.saveAs || ((typeof window > "u" ? "undefined" : Se(window)) !== "object" || window !== Gt ? function() {} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, e, i) {
    var a = Gt.URL || Gt.webkitURL,
        s = document.createElement("a");
    e = e || n.name || "download", s.download = e, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? Ms(s.href) ? To(n, e, i) : Ka(s, s.target = "_blank") : Ka(s)) : (s.href = a.createObjectURL(n), setTimeout(function() {
        a.revokeObjectURL(s.href)
    }, 4e4), setTimeout(function() {
        Ka(s)
    }, 0))
} : "msSaveOrOpenBlob" in navigator ? function(n, e, i) {
    if (e = e || n.name || "download", typeof n == "string")
        if (Ms(n)) To(n, e, i);
        else {
            var a = document.createElement("a");
            a.href = n, a.target = "_blank", setTimeout(function() {
                Ka(a)
            })
        }
    else navigator.msSaveOrOpenBlob((function(s, o) {
        return o === void 0 ? o = {
            autoBom: !1
        } : Se(o) !== "object" && (_e.warn("Deprecated: Expected third argument to be a object"), o = {
            autoBom: !o
        }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob(["\uFEFF", s], {
            type: s.type
        }) : s
    })(n, i), e)
} : function(n, e, i, a) {
    if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), typeof n == "string") return To(n, e, i);
    var s = n.type === "application/octet-stream",
        o = /constructor/i.test(Gt.HTMLElement) || Gt.safari,
        f = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((f || s && o) && (typeof FileReader > "u" ? "undefined" : Se(FileReader)) === "object") {
        var h = new FileReader;
        h.onloadend = function() {
            var w = h.result;
            w = f ? w : w.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = w : location = w, a = null
        }, h.readAsDataURL(n)
    } else {
        var c = Gt.URL || Gt.webkitURL,
            g = c.createObjectURL(n);
        a ? a.location = g : location.href = g, a = null, setTimeout(function() {
            c.revokeObjectURL(g)
        }, 4e4)
    }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */
function Ds(n) {
    var e;
    n = n || "", this.ok = !1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
    }[n = (n = n.replace(/ /g, "")).toLowerCase()] || n;
    for (var i = [{
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
            process: function(h) {
                return [parseInt(h[1]), parseInt(h[2]), parseInt(h[3])]
            }
        }, {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: ["#00ff00", "336699"],
            process: function(h) {
                return [parseInt(h[1], 16), parseInt(h[2], 16), parseInt(h[3], 16)]
            }
        }, {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: ["#fb0", "f0f"],
            process: function(h) {
                return [parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16), parseInt(h[3] + h[3], 16)]
            }
        }], a = 0; a < i.length; a++) {
        var s = i[a].re,
            o = i[a].process,
            f = s.exec(n);
        f && (e = o(f), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0)
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
    }, this.toHex = function() {
        var h = this.r.toString(16),
            c = this.g.toString(16),
            g = this.b.toString(16);
        return h.length == 1 && (h = "0" + h), c.length == 1 && (c = "0" + c), g.length == 1 && (g = "0" + g), "#" + h + c + g
    }
}
var Za = Gt.atob.bind(Gt),
    Rs = Gt.btoa.bind(Gt);
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function Eo(n, e) {
    var i = n[0],
        a = n[1],
        s = n[2],
        o = n[3];
    i = cr(i, a, s, o, e[0], 7, -680876936), o = cr(o, i, a, s, e[1], 12, -389564586), s = cr(s, o, i, a, e[2], 17, 606105819), a = cr(a, s, o, i, e[3], 22, -1044525330), i = cr(i, a, s, o, e[4], 7, -176418897), o = cr(o, i, a, s, e[5], 12, 1200080426), s = cr(s, o, i, a, e[6], 17, -1473231341), a = cr(a, s, o, i, e[7], 22, -45705983), i = cr(i, a, s, o, e[8], 7, 1770035416), o = cr(o, i, a, s, e[9], 12, -1958414417), s = cr(s, o, i, a, e[10], 17, -42063), a = cr(a, s, o, i, e[11], 22, -1990404162), i = cr(i, a, s, o, e[12], 7, 1804603682), o = cr(o, i, a, s, e[13], 12, -40341101), s = cr(s, o, i, a, e[14], 17, -1502002290), i = fr(i, a = cr(a, s, o, i, e[15], 22, 1236535329), s, o, e[1], 5, -165796510), o = fr(o, i, a, s, e[6], 9, -1069501632), s = fr(s, o, i, a, e[11], 14, 643717713), a = fr(a, s, o, i, e[0], 20, -373897302), i = fr(i, a, s, o, e[5], 5, -701558691), o = fr(o, i, a, s, e[10], 9, 38016083), s = fr(s, o, i, a, e[15], 14, -660478335), a = fr(a, s, o, i, e[4], 20, -405537848), i = fr(i, a, s, o, e[9], 5, 568446438), o = fr(o, i, a, s, e[14], 9, -1019803690), s = fr(s, o, i, a, e[3], 14, -187363961), a = fr(a, s, o, i, e[8], 20, 1163531501), i = fr(i, a, s, o, e[13], 5, -1444681467), o = fr(o, i, a, s, e[2], 9, -51403784), s = fr(s, o, i, a, e[7], 14, 1735328473), i = dr(i, a = fr(a, s, o, i, e[12], 20, -1926607734), s, o, e[5], 4, -378558), o = dr(o, i, a, s, e[8], 11, -2022574463), s = dr(s, o, i, a, e[11], 16, 1839030562), a = dr(a, s, o, i, e[14], 23, -35309556), i = dr(i, a, s, o, e[1], 4, -1530992060), o = dr(o, i, a, s, e[4], 11, 1272893353), s = dr(s, o, i, a, e[7], 16, -155497632), a = dr(a, s, o, i, e[10], 23, -1094730640), i = dr(i, a, s, o, e[13], 4, 681279174), o = dr(o, i, a, s, e[0], 11, -358537222), s = dr(s, o, i, a, e[3], 16, -722521979), a = dr(a, s, o, i, e[6], 23, 76029189), i = dr(i, a, s, o, e[9], 4, -640364487), o = dr(o, i, a, s, e[12], 11, -421815835), s = dr(s, o, i, a, e[15], 16, 530742520), i = pr(i, a = dr(a, s, o, i, e[2], 23, -995338651), s, o, e[0], 6, -198630844), o = pr(o, i, a, s, e[7], 10, 1126891415), s = pr(s, o, i, a, e[14], 15, -1416354905), a = pr(a, s, o, i, e[5], 21, -57434055), i = pr(i, a, s, o, e[12], 6, 1700485571), o = pr(o, i, a, s, e[3], 10, -1894986606), s = pr(s, o, i, a, e[10], 15, -1051523), a = pr(a, s, o, i, e[1], 21, -2054922799), i = pr(i, a, s, o, e[8], 6, 1873313359), o = pr(o, i, a, s, e[15], 10, -30611744), s = pr(s, o, i, a, e[6], 15, -1560198380), a = pr(a, s, o, i, e[13], 21, 1309151649), i = pr(i, a, s, o, e[4], 6, -145523070), o = pr(o, i, a, s, e[11], 10, -1120210379), s = pr(s, o, i, a, e[2], 15, 718787259), a = pr(a, s, o, i, e[9], 21, -343485551), n[0] = Rn(i, n[0]), n[1] = Rn(a, n[1]), n[2] = Rn(s, n[2]), n[3] = Rn(o, n[3])
}

function $a(n, e, i, a, s, o) {
    return e = Rn(Rn(e, n), Rn(a, o)), Rn(e << s | e >>> 32 - s, i)
}

function cr(n, e, i, a, s, o, f) {
    return $a(e & i | ~e & a, n, e, s, o, f)
}

function fr(n, e, i, a, s, o, f) {
    return $a(e & a | i & ~a, n, e, s, o, f)
}

function dr(n, e, i, a, s, o, f) {
    return $a(e ^ i ^ a, n, e, s, o, f)
}

function pr(n, e, i, a, s, o, f) {
    return $a(i ^ (e | ~a), n, e, s, o, f)
}

function Ts(n) {
    var e, i = n.length,
        a = [1732584193, -271733879, -1732584194, 271733878];
    for (e = 64; e <= n.length; e += 64) Eo(a, rl(n.substring(e - 64, e)));
    n = n.substring(e - 64);
    var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (e = 0; e < n.length; e++) s[e >> 2] |= n.charCodeAt(e) << (e % 4 << 3);
    if (s[e >> 2] |= 128 << (e % 4 << 3), e > 55)
        for (Eo(a, s), e = 0; e < 16; e++) s[e] = 0;
    return s[14] = 8 * i, Eo(a, s), a
}

function rl(n) {
    var e, i = [];
    for (e = 0; e < 64; e += 4) i[e >> 2] = n.charCodeAt(e) + (n.charCodeAt(e + 1) << 8) + (n.charCodeAt(e + 2) << 16) + (n.charCodeAt(e + 3) << 24);
    return i
}
var Es = "0123456789abcdef".split("");

function nl(n) {
    for (var e = "", i = 0; i < 4; i++) e += Es[n >> 8 * i + 4 & 15] + Es[n >> 8 * i & 15];
    return e
}

function il(n) {
    return String.fromCharCode(255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24)
}

function qo(n) {
    return Ts(n).map(il).join("")
}
var al = (function(n) {
    for (var e = 0; e < n.length; e++) n[e] = nl(n[e]);
    return n.join("")
})(Ts("hello")) != "5d41402abc4b2a76b9719d911017c592";

function Rn(n, e) {
    if (al) {
        var i = (65535 & n) + (65535 & e);
        return (n >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
    }
    return n + e & 4294967295
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function zo(n, e) {
    var i, a, s, o;
    if (n !== i) {
        for (var f = (s = n, o = 1 + (256 / n.length | 0), new Array(o + 1).join(s)), h = [], c = 0; c < 256; c++) h[c] = c;
        var g = 0;
        for (c = 0; c < 256; c++) {
            var w = h[c];
            g = (g + w + f.charCodeAt(c)) % 256, h[c] = h[g], h[g] = w
        }
        i = n, a = h
    } else h = a;
    var m = e.length,
        C = 0,
        d = 0,
        B = "";
    for (c = 0; c < m; c++) d = (d + (w = h[C = (C + 1) % 256])) % 256, h[C] = h[d], h[d] = w, f = h[(h[C] + h[d]) % 256], B += String.fromCharCode(e.charCodeAt(c) ^ f);
    return B
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */
var qs = {
    print: 4,
    modify: 8,
    copy: 16,
    "annot-forms": 32
};

function Ii(n, e, i, a) {
    this.v = 1, this.r = 2;
    var s = 192;
    n.forEach(function(h) {
        if (qs.perm !== void 0) throw new Error("Invalid permission: " + h);
        s += qs[h]
    }), this.padding = "(\xBFN^Nu\x8AAd\0NV\xFF\xFA\b..\0\xB6\xD0h>\x80/\f\xA9\xFEdSiz";
    var o = (e + this.padding).substr(0, 32),
        f = (i + this.padding).substr(0, 32);
    this.O = this.processOwnerPassword(o, f), this.P = -(1 + (255 ^ s)), this.encryptionKey = qo(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(a)).substr(0, 5), this.U = zo(this.encryptionKey, this.padding)
}

function Bi(n) {
    if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
    for (var e = "", i = n.length, a = 0; a < i; a++) {
        var s = n.charCodeAt(a);
        e += s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? "#" + ("0" + s.toString(16)).slice(-2) : n[a]
    }
    return e
}

function zs(n) {
    if (Se(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
    var e = {};
    this.subscribe = function(i, a, s) {
        if (s = s || !1, typeof i != "string" || typeof a != "function" || typeof s != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
        e.hasOwnProperty(i) || (e[i] = {});
        var o = Math.random().toString(35);
        return e[i][o] = [a, !!s], o
    }, this.unsubscribe = function(i) {
        for (var a in e)
            if (e[a][i]) return delete e[a][i], Object.keys(e[a]).length === 0 && delete e[a], !0;
        return !1
    }, this.publish = function(i) {
        if (e.hasOwnProperty(i)) {
            var a = Array.prototype.slice.call(arguments, 1),
                s = [];
            for (var o in e[i]) {
                var f = e[i][o];
                try {
                    f[0].apply(n, a)
                } catch (h) {
                    Gt.console && _e.error("jsPDF PubSub Error", h.message, h)
                }
                f[1] && s.push(o)
            }
            s.length && s.forEach(this.unsubscribe)
        }
    }, this.getTopics = function() {
        return e
    }
}

function ha(n) {
    if (!(this instanceof ha)) return new ha(n);
    var e = "opacity,stroke-opacity".split(",");
    for (var i in n) n.hasOwnProperty(i) && e.indexOf(i) >= 0 && (this[i] = n[i]);
    this.id = "", this.objectNumber = -1
}

function Hs(n, e) {
    this.gState = n, this.matrix = e, this.id = "", this.objectNumber = -1
}

function Tn(n, e, i, a, s) {
    if (!(this instanceof Tn)) return new Tn(n, e, i, a, s);
    this.type = n === "axial" ? 2 : 3, this.coords = e, this.colors = i, Hs.call(this, a, s)
}

function di(n, e, i, a, s) {
    if (!(this instanceof di)) return new di(n, e, i, a, s);
    this.boundingBox = n, this.xStep = e, this.yStep = i, this.stream = "", this.cloneIndex = 0, Hs.call(this, a, s)
}

function Mt(n) {
    var e, i = typeof arguments[0] == "string" ? arguments[0] : "p",
        a = arguments[1],
        s = arguments[2],
        o = arguments[3],
        f = [],
        h = 1,
        c = 16,
        g = "S",
        w = null;
    Se(n = n || {}) === "object" && (i = n.orientation, a = n.unit || a, s = n.format || s, o = n.compress || n.compressPdf || o, (w = n.encryption || null) !== null && (w.userPassword = w.userPassword || "", w.ownerPassword = w.ownerPassword || "", w.userPermissions = w.userPermissions || []), h = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (e = n.precision), n.floatPrecision !== void 0 && (c = n.floatPrecision), g = n.defaultPathOperation || "S"), f = n.filters || (o === !0 ? ["FlateEncode"] : f), a = a || "mm", i = ("" + (i || "P")).toLowerCase();
    var m = n.putOnlyUsedFonts || !1,
        C = {},
        d = {
            internal: {},
            __private__: {}
        };
    d.__private__.PubSub = zs;
    var B = "1.3",
        A = d.__private__.getPdfVersion = function() {
            return B
        };
    d.__private__.setPdfVersion = function(u) {
        B = u
    };
    var N = {
        a0: [2383.94, 3370.39],
        a1: [1683.78, 2383.94],
        a2: [1190.55, 1683.78],
        a3: [841.89, 1190.55],
        a4: [595.28, 841.89],
        a5: [419.53, 595.28],
        a6: [297.64, 419.53],
        a7: [209.76, 297.64],
        a8: [147.4, 209.76],
        a9: [104.88, 147.4],
        a10: [73.7, 104.88],
        b0: [2834.65, 4008.19],
        b1: [2004.09, 2834.65],
        b2: [1417.32, 2004.09],
        b3: [1000.63, 1417.32],
        b4: [708.66, 1000.63],
        b5: [498.9, 708.66],
        b6: [354.33, 498.9],
        b7: [249.45, 354.33],
        b8: [175.75, 249.45],
        b9: [124.72, 175.75],
        b10: [87.87, 124.72],
        c0: [2599.37, 3676.54],
        c1: [1836.85, 2599.37],
        c2: [1298.27, 1836.85],
        c3: [918.43, 1298.27],
        c4: [649.13, 918.43],
        c5: [459.21, 649.13],
        c6: [323.15, 459.21],
        c7: [229.61, 323.15],
        c8: [161.57, 229.61],
        c9: [113.39, 161.57],
        c10: [79.37, 113.39],
        dl: [311.81, 623.62],
        letter: [612, 792],
        "government-letter": [576, 756],
        legal: [612, 1008],
        "junior-legal": [576, 360],
        ledger: [1224, 792],
        tabloid: [792, 1224],
        "credit-card": [153, 243]
    };
    d.__private__.getPageFormats = function() {
        return N
    };
    var v = d.__private__.getPageFormat = function(u) {
        return N[u]
    };
    s = s || "a4";
    var R = "compat",
        z = "advanced",
        D = R;

    function G() {
        this.saveGraphicsState(), H(new Wt(Vt, 0, 0, -Vt, 0, ti() * Vt).toString() + " cm"), this.setFontSize(this.getFontSize() / Vt), g = "n", D = z
    }

    function tt() {
        this.restoreGraphicsState(), g = "S", D = R
    }
    var st = d.__private__.combineFontStyleAndFontWeight = function(u, b) {
        if (u == "bold" && b == "normal" || u == "bold" && b == 400 || u == "normal" && b == "italic" || u == "bold" && b == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
        return b && (u = b == 400 || b === "normal" ? u === "italic" ? "italic" : "normal" : b != 700 && b !== "bold" || u !== "normal" ? (b == 700 ? "bold" : b) + "" + u : "bold"), u
    };
    d.advancedAPI = function(u) {
        var b = D === R;
        return b && G.call(this), typeof u != "function" || (u(this), b && tt.call(this)), this
    }, d.compatAPI = function(u) {
        var b = D === z;
        return b && tt.call(this), typeof u != "function" || (u(this), b && G.call(this)), this
    }, d.isAdvancedAPI = function() {
        return D === z
    };
    var Y, O = function(u) {
            if (D !== z) throw new Error(u + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
        },
        at = d.roundToPrecision = d.__private__.roundToPrecision = function(u, b) {
            var q = e || b;
            if (isNaN(u) || isNaN(q)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
            return u.toFixed(q).replace(/0+$/, "")
        };
    Y = d.hpf = d.__private__.hpf = typeof c == "number" ? function(u) {
        if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return at(u, c)
    } : c === "smart" ? function(u) {
        if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return at(u, u > -1 && u < 1 ? 16 : 5)
    } : function(u) {
        if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return at(u, 16)
    };
    var P = d.f2 = d.__private__.f2 = function(u) {
            if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.f2");
            return at(u, 2)
        },
        M = d.__private__.f3 = function(u) {
            if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.f3");
            return at(u, 3)
        },
        F = d.scale = d.__private__.scale = function(u) {
            if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.scale");
            return D === R ? u * Vt : D === z ? u : void 0
        },
        _ = function(u) {
            return F((function(b) {
                return D === R ? ti() - b : D === z ? b : void 0
            })(u))
        };
    d.__private__.setPrecision = d.setPrecision = function(u) {
        typeof parseInt(u, 10) == "number" && (e = parseInt(u, 10))
    };
    var J, W = "00000000000000000000000000000000",
        nt = d.__private__.getFileId = function() {
            return W
        },
        X = d.__private__.setFileId = function(u) {
            return W = u !== void 0 && /^[a-fA-F0-9]{32}$/.test(u) ? u.toUpperCase() : W.split("").map(function() {
                return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
            }).join(""), w !== null && (Te = new Ii(w.userPermissions, w.userPassword, w.ownerPassword, W)), W
        };
    d.setFileId = function(u) {
        return X(u), this
    }, d.getFileId = function() {
        return nt()
    };
    var et = d.__private__.convertDateToPDFDate = function(u) {
            var b = u.getTimezoneOffset(),
                q = b < 0 ? "+" : "-",
                V = Math.floor(Math.abs(b / 60)),
                rt = Math.abs(b % 60),
                mt = [q, U(V), "'", U(rt), "'"].join("");
            return ["D:", u.getFullYear(), U(u.getMonth() + 1), U(u.getDate()), U(u.getHours()), U(u.getMinutes()), U(u.getSeconds()), mt].join("")
        },
        ht = d.__private__.convertPDFDateToDate = function(u) {
            var b = parseInt(u.substr(2, 4), 10),
                q = parseInt(u.substr(6, 2), 10) - 1,
                V = parseInt(u.substr(8, 2), 10),
                rt = parseInt(u.substr(10, 2), 10),
                mt = parseInt(u.substr(12, 2), 10),
                Lt = parseInt(u.substr(14, 2), 10);
            return new Date(b, q, V, rt, mt, Lt, 0)
        },
        ct = d.__private__.setCreationDate = function(u) {
            var b;
            if (u === void 0 && (u = new Date), u instanceof Date) b = et(u);
            else {
                if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(u)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
                b = u
            }
            return J = b
        },
        L = d.__private__.getCreationDate = function(u) {
            var b = J;
            return u === "jsDate" && (b = ht(J)), b
        };
    d.setCreationDate = function(u) {
        return ct(u), this
    }, d.getCreationDate = function(u) {
        return L(u)
    };
    var I, U = d.__private__.padd2 = function(u) {
            return ("0" + parseInt(u)).slice(-2)
        },
        Z = d.__private__.padd2Hex = function(u) {
            return ("00" + (u = u.toString())).substr(u.length)
        },
        Q = 0,
        ut = [],
        dt = [],
        ft = 0,
        yt = [],
        Nt = [],
        Pt = !1,
        kt = dt;
    d.__private__.setCustomOutputDestination = function(u) {
        Pt = !0, kt = u
    };
    var gt = function(u) {
        Pt || (kt = u)
    };
    d.__private__.resetCustomOutputDestination = function() {
        Pt = !1, kt = dt
    };
    var H = d.__private__.out = function(u) {
            return u = u.toString(), ft += u.length + 1, kt.push(u), kt
        },
        ue = d.__private__.write = function(u) {
            return H(arguments.length === 1 ? u.toString() : Array.prototype.join.call(arguments, " "))
        },
        ne = d.__private__.getArrayBuffer = function(u) {
            for (var b = u.length, q = new ArrayBuffer(b), V = new Uint8Array(q); b--;) V[b] = u.charCodeAt(b);
            return q
        },
        Ht = [
            ["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
            ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
            ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
            ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
            ["Courier", "courier", "normal", "WinAnsiEncoding"],
            ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
            ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
            ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
            ["Times-Roman", "times", "normal", "WinAnsiEncoding"],
            ["Times-Bold", "times", "bold", "WinAnsiEncoding"],
            ["Times-Italic", "times", "italic", "WinAnsiEncoding"],
            ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
            ["ZapfDingbats", "zapfdingbats", "normal", null],
            ["Symbol", "symbol", "normal", null]
        ];
    d.__private__.getStandardFonts = function() {
        return Ht
    };
    var At = n.fontSize || 16;
    d.__private__.setFontSize = d.setFontSize = function(u) {
        return At = D === z ? u / Vt : u, this
    };
    var Tt, _t = d.__private__.getFontSize = d.getFontSize = function() {
            return D === R ? At : At * Vt
        },
        ie = n.R2L || !1;
    d.__private__.setR2L = d.setR2L = function(u) {
        return ie = u, this
    }, d.__private__.getR2L = d.getR2L = function() {
        return ie
    };
    var zt, de = d.__private__.setZoomMode = function(u) {
        if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(u)) Tt = u;
        else if (isNaN(u)) {
            if ([void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(u) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + u + '" is not recognized.');
            Tt = u
        } else Tt = parseInt(u, 10)
    };
    d.__private__.getZoomMode = function() {
        return Tt
    };
    var $t, Qt = d.__private__.setPageMode = function(u) {
        if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(u) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + u + '" is not recognized.');
        zt = u
    };
    d.__private__.getPageMode = function() {
        return zt
    };
    var we = d.__private__.setLayoutMode = function(u) {
        if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(u) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + u + '" is not recognized.');
        $t = u
    };
    d.__private__.getLayoutMode = function() {
        return $t
    }, d.__private__.setDisplayMode = d.setDisplayMode = function(u, b, q) {
        return de(u), we(b), Qt(q), this
    };
    var ae = {
        title: "",
        subject: "",
        author: "",
        keywords: "",
        creator: ""
    };
    d.__private__.getDocumentProperty = function(u) {
        if (Object.keys(ae).indexOf(u) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
        return ae[u]
    }, d.__private__.getDocumentProperties = function() {
        return ae
    }, d.__private__.setDocumentProperties = d.setProperties = d.setDocumentProperties = function(u) {
        for (var b in ae) ae.hasOwnProperty(b) && u[b] && (ae[b] = u[b]);
        return this
    }, d.__private__.setDocumentProperty = function(u, b) {
        if (Object.keys(ae).indexOf(u) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
        return ae[u] = b
    };
    var Et, Vt, qt, Pe, pe, Dt = {},
        te = {},
        Le = [],
        Ut = {},
        le = {},
        ee = {},
        Re = {},
        Xe = null,
        xe = 0,
        Jt = [],
        ve = new zs(d),
        Hn = n.hotfixes || [],
        ur = {},
        on = {},
        Xr = [],
        Wt = function u(b, q, V, rt, mt, Lt) {
            if (!(this instanceof u)) return new u(b, q, V, rt, mt, Lt);
            isNaN(b) && (b = 1), isNaN(q) && (q = 0), isNaN(V) && (V = 0), isNaN(rt) && (rt = 1), isNaN(mt) && (mt = 0), isNaN(Lt) && (Lt = 0), this._matrix = [b, q, V, rt, mt, Lt]
        };
    Object.defineProperty(Wt.prototype, "sx", {
        get: function() {
            return this._matrix[0]
        },
        set: function(u) {
            this._matrix[0] = u
        }
    }), Object.defineProperty(Wt.prototype, "shy", {
        get: function() {
            return this._matrix[1]
        },
        set: function(u) {
            this._matrix[1] = u
        }
    }), Object.defineProperty(Wt.prototype, "shx", {
        get: function() {
            return this._matrix[2]
        },
        set: function(u) {
            this._matrix[2] = u
        }
    }), Object.defineProperty(Wt.prototype, "sy", {
        get: function() {
            return this._matrix[3]
        },
        set: function(u) {
            this._matrix[3] = u
        }
    }), Object.defineProperty(Wt.prototype, "tx", {
        get: function() {
            return this._matrix[4]
        },
        set: function(u) {
            this._matrix[4] = u
        }
    }), Object.defineProperty(Wt.prototype, "ty", {
        get: function() {
            return this._matrix[5]
        },
        set: function(u) {
            this._matrix[5] = u
        }
    }), Object.defineProperty(Wt.prototype, "a", {
        get: function() {
            return this._matrix[0]
        },
        set: function(u) {
            this._matrix[0] = u
        }
    }), Object.defineProperty(Wt.prototype, "b", {
        get: function() {
            return this._matrix[1]
        },
        set: function(u) {
            this._matrix[1] = u
        }
    }), Object.defineProperty(Wt.prototype, "c", {
        get: function() {
            return this._matrix[2]
        },
        set: function(u) {
            this._matrix[2] = u
        }
    }), Object.defineProperty(Wt.prototype, "d", {
        get: function() {
            return this._matrix[3]
        },
        set: function(u) {
            this._matrix[3] = u
        }
    }), Object.defineProperty(Wt.prototype, "e", {
        get: function() {
            return this._matrix[4]
        },
        set: function(u) {
            this._matrix[4] = u
        }
    }), Object.defineProperty(Wt.prototype, "f", {
        get: function() {
            return this._matrix[5]
        },
        set: function(u) {
            this._matrix[5] = u
        }
    }), Object.defineProperty(Wt.prototype, "rotation", {
        get: function() {
            return Math.atan2(this.shx, this.sx)
        }
    }), Object.defineProperty(Wt.prototype, "scaleX", {
        get: function() {
            return this.decompose().scale.sx
        }
    }), Object.defineProperty(Wt.prototype, "scaleY", {
        get: function() {
            return this.decompose().scale.sy
        }
    }), Object.defineProperty(Wt.prototype, "isIdentity", {
        get: function() {
            return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0
        }
    }), Wt.prototype.join = function(u) {
        return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(Y).join(u)
    }, Wt.prototype.multiply = function(u) {
        var b = u.sx * this.sx + u.shy * this.shx,
            q = u.sx * this.shy + u.shy * this.sy,
            V = u.shx * this.sx + u.sy * this.shx,
            rt = u.shx * this.shy + u.sy * this.sy,
            mt = u.tx * this.sx + u.ty * this.shx + this.tx,
            Lt = u.tx * this.shy + u.ty * this.sy + this.ty;
        return new Wt(b, q, V, rt, mt, Lt)
    }, Wt.prototype.decompose = function() {
        var u = this.sx,
            b = this.shy,
            q = this.shx,
            V = this.sy,
            rt = this.tx,
            mt = this.ty,
            Lt = Math.sqrt(u * u + b * b),
            jt = (u /= Lt) * q + (b /= Lt) * V;
        q -= u * jt, V -= b * jt;
        var Ot = Math.sqrt(q * q + V * V);
        return jt /= Ot, u * (V /= Ot) < b * (q /= Ot) && (u = -u, b = -b, jt = -jt, Lt = -Lt), {
            scale: new Wt(Lt, 0, 0, Ot, 0, 0),
            translate: new Wt(1, 0, 0, 1, rt, mt),
            rotate: new Wt(u, b, -b, u, 0, 0),
            skew: new Wt(1, 0, jt, 1, 0, 0)
        }
    }, Wt.prototype.toString = function(u) {
        return this.join(" ")
    }, Wt.prototype.inversed = function() {
        var u = this.sx,
            b = this.shy,
            q = this.shx,
            V = this.sy,
            rt = this.tx,
            mt = this.ty,
            Lt = 1 / (u * V - b * q),
            jt = V * Lt,
            Ot = -b * Lt,
            Yt = -q * Lt,
            Kt = u * Lt;
        return new Wt(jt, Ot, Yt, Kt, -jt * rt - Yt * mt, -Ot * rt - Kt * mt)
    }, Wt.prototype.applyToPoint = function(u) {
        var b = u.x * this.sx + u.y * this.shx + this.tx,
            q = u.x * this.shy + u.y * this.sy + this.ty;
        return new $n(b, q)
    }, Wt.prototype.applyToRectangle = function(u) {
        var b = this.applyToPoint(u),
            q = this.applyToPoint(new $n(u.x + u.w, u.y + u.h));
        return new Gi(b.x, b.y, q.x - b.x, q.y - b.y)
    }, Wt.prototype.clone = function() {
        var u = this.sx,
            b = this.shy,
            q = this.shx,
            V = this.sy,
            rt = this.tx,
            mt = this.ty;
        return new Wt(u, b, q, V, rt, mt)
    }, d.Matrix = Wt;
    var sn = d.matrixMult = function(u, b) {
            return b.multiply(u)
        },
        un = new Wt(1, 0, 0, 1, 0, 0);
    d.unitMatrix = d.identityMatrix = un;
    var Cr = function(u, b) {
        if (!le[u]) {
            var q = (b instanceof Tn ? "Sh" : "P") + (Object.keys(Ut).length + 1).toString(10);
            b.id = q, le[u] = q, Ut[q] = b, ve.publish("addPattern", b)
        }
    };
    d.ShadingPattern = Tn, d.TilingPattern = di, d.addShadingPattern = function(u, b) {
        return O("addShadingPattern()"), Cr(u, b), this
    }, d.beginTilingPattern = function(u) {
        O("beginTilingPattern()"), Yi(u.boundingBox[0], u.boundingBox[1], u.boundingBox[2] - u.boundingBox[0], u.boundingBox[3] - u.boundingBox[1], u.matrix)
    }, d.endTilingPattern = function(u, b) {
        O("endTilingPattern()"), b.stream = Nt[I].join(`
`), Cr(u, b), ve.publish("endTilingPattern", b), Xr.pop().restore()
    };
    var jr, Ie = d.__private__.newObject = function() {
            var u = rr();
            return nr(u, !0), u
        },
        rr = d.__private__.newObjectDeferred = function() {
            return Q++, ut[Q] = function() {
                return ft
            }, Q
        },
        nr = function(u, b) {
            return b = typeof b == "boolean" && b, ut[u] = ft, b && H(u + " 0 obj"), u
        },
        Un = d.__private__.newAdditionalObject = function() {
            var u = {
                objId: rr(),
                content: ""
            };
            return yt.push(u), u
        },
        wn = rr(),
        Er = rr(),
        Kr = d.__private__.decodeColorString = function(u) {
            var b = u.split(" ");
            if (b.length !== 2 || b[1] !== "g" && b[1] !== "G") b.length !== 5 || b[4] !== "k" && b[4] !== "K" || (b = [(1 - b[0]) * (1 - b[3]), (1 - b[1]) * (1 - b[3]), (1 - b[2]) * (1 - b[3]), "r"]);
            else {
                var q = parseFloat(b[0]);
                b = [q, q, q, "r"]
            }
            for (var V = "#", rt = 0; rt < 3; rt++) V += ("0" + Math.floor(255 * parseFloat(b[rt])).toString(16)).slice(-2);
            return V
        },
        qr = d.__private__.encodeColorString = function(u) {
            var b;
            typeof u == "string" && (u = {
                ch1: u
            });
            var q = u.ch1,
                V = u.ch2,
                rt = u.ch3,
                mt = u.ch4,
                Lt = u.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
            if (typeof q == "string" && q.charAt(0) !== "#") {
                var jt = new Ds(q);
                if (jt.ok) q = jt.toHex();
                else if (!/^\d*\.?\d*$/.test(q)) throw new Error('Invalid color "' + q + '" passed to jsPDF.encodeColorString.')
            }
            if (typeof q == "string" && /^#[0-9A-Fa-f]{3}$/.test(q) && (q = "#" + q[1] + q[1] + q[2] + q[2] + q[3] + q[3]), typeof q == "string" && /^#[0-9A-Fa-f]{6}$/.test(q)) {
                var Ot = parseInt(q.substr(1), 16);
                q = Ot >> 16 & 255, V = Ot >> 8 & 255, rt = 255 & Ot
            }
            if (V === void 0 || mt === void 0 && q === V && V === rt) b = typeof q == "string" ? q + " " + Lt[0] : u.precision === 2 ? P(q / 255) + " " + Lt[0] : M(q / 255) + " " + Lt[0];
            else if (mt === void 0 || Se(mt) === "object") {
                if (mt && !isNaN(mt.a) && mt.a === 0) return ["1.", "1.", "1.", Lt[1]].join(" ");
                b = typeof q == "string" ? [q, V, rt, Lt[1]].join(" ") : u.precision === 2 ? [P(q / 255), P(V / 255), P(rt / 255), Lt[1]].join(" ") : [M(q / 255), M(V / 255), M(rt / 255), Lt[1]].join(" ")
            } else b = typeof q == "string" ? [q, V, rt, mt, Lt[2]].join(" ") : u.precision === 2 ? [P(q), P(V), P(rt), P(mt), Lt[2]].join(" ") : [M(q), M(V), M(rt), M(mt), Lt[2]].join(" ");
            return b
        },
        zr = d.__private__.getFilters = function() {
            return f
        },
        Ir = d.__private__.putStream = function(u) {
            var b = (u = u || {}).data || "",
                q = u.filters || zr(),
                V = u.alreadyAppliedFilters || [],
                rt = u.addLength1 || !1,
                mt = b.length,
                Lt = u.objectId,
                jt = function(Ke) {
                    return Ke
                };
            if (w !== null && Lt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
            w !== null && (jt = Te.encryptor(Lt, 0));
            var Ot = {};
            q === !0 && (q = ["FlateEncode"]);
            var Yt = u.additionalKeyValues || [],
                Kt = (Ot = Mt.API.processDataByFilters !== void 0 ? Mt.API.processDataByFilters(b, q) : {
                    data: b,
                    reverseChain: []
                }).reverseChain + (Array.isArray(V) ? V.join(" ") : V.toString());
            if (Ot.data.length !== 0 && (Yt.push({
                    key: "Length",
                    value: Ot.data.length
                }), rt === !0 && Yt.push({
                    key: "Length1",
                    value: mt
                })), Kt.length != 0)
                if (Kt.split("/").length - 1 == 1) Yt.push({
                    key: "Filter",
                    value: Kt
                });
                else {
                    Yt.push({
                        key: "Filter",
                        value: "[" + Kt + "]"
                    });
                    for (var ge = 0; ge < Yt.length; ge += 1)
                        if (Yt[ge].key === "DecodeParms") {
                            for (var je = [], Ye = 0; Ye < Ot.reverseChain.split("/").length - 1; Ye += 1) je.push("null");
                            je.push(Yt[ge].value), Yt[ge].value = "[" + je.join(" ") + "]"
                        }
                }
            H("<<");
            for (var ke = 0; ke < Yt.length; ke++) H("/" + Yt[ke].key + " " + Yt[ke].value);
            H(">>"), Ot.data.length !== 0 && (H("stream"), H(jt(Ot.data)), H("endstream"))
        },
        Wn = d.__private__.putPage = function(u) {
            var b = u.number,
                q = u.data,
                V = u.objId,
                rt = u.contentsObjId;
            nr(V, !0), H("<</Type /Page"), H("/Parent " + u.rootDictionaryObjId + " 0 R"), H("/Resources " + u.resourceDictionaryObjId + " 0 R"), H("/MediaBox [" + parseFloat(Y(u.mediaBox.bottomLeftX)) + " " + parseFloat(Y(u.mediaBox.bottomLeftY)) + " " + Y(u.mediaBox.topRightX) + " " + Y(u.mediaBox.topRightY) + "]"), u.cropBox !== null && H("/CropBox [" + Y(u.cropBox.bottomLeftX) + " " + Y(u.cropBox.bottomLeftY) + " " + Y(u.cropBox.topRightX) + " " + Y(u.cropBox.topRightY) + "]"), u.bleedBox !== null && H("/BleedBox [" + Y(u.bleedBox.bottomLeftX) + " " + Y(u.bleedBox.bottomLeftY) + " " + Y(u.bleedBox.topRightX) + " " + Y(u.bleedBox.topRightY) + "]"), u.trimBox !== null && H("/TrimBox [" + Y(u.trimBox.bottomLeftX) + " " + Y(u.trimBox.bottomLeftY) + " " + Y(u.trimBox.topRightX) + " " + Y(u.trimBox.topRightY) + "]"), u.artBox !== null && H("/ArtBox [" + Y(u.artBox.bottomLeftX) + " " + Y(u.artBox.bottomLeftY) + " " + Y(u.artBox.topRightX) + " " + Y(u.artBox.topRightY) + "]"), typeof u.userUnit == "number" && u.userUnit !== 1 && H("/UserUnit " + u.userUnit), ve.publish("putPage", {
                objId: V,
                pageContext: Jt[b],
                pageNumber: b,
                page: q
            }), H("/Contents " + rt + " 0 R"), H(">>"), H("endobj");
            var mt = q.join(`
`);
            return D === z && (mt += `
Q`), nr(rt, !0), Ir({
                data: mt,
                filters: zr(),
                objectId: rt
            }), H("endobj"), V
        },
        Zr = d.__private__.putPages = function() {
            var u, b, q = [];
            for (u = 1; u <= xe; u++) Jt[u].objId = rr(), Jt[u].contentsObjId = rr();
            for (u = 1; u <= xe; u++) q.push(Wn({
                number: u,
                data: Nt[u],
                objId: Jt[u].objId,
                contentsObjId: Jt[u].contentsObjId,
                mediaBox: Jt[u].mediaBox,
                cropBox: Jt[u].cropBox,
                bleedBox: Jt[u].bleedBox,
                trimBox: Jt[u].trimBox,
                artBox: Jt[u].artBox,
                userUnit: Jt[u].userUnit,
                rootDictionaryObjId: wn,
                resourceDictionaryObjId: Er
            }));
            nr(wn, !0), H("<</Type /Pages");
            var V = "/Kids [";
            for (b = 0; b < xe; b++) V += q[b] + " 0 R ";
            H(V + "]"), H("/Count " + xe), H(">>"), H("endobj"), ve.publish("postPutPages")
        },
        Vn = function(u) {
            ve.publish("putFont", {
                font: u,
                out: H,
                newObject: Ie,
                putStream: Ir
            }), u.isAlreadyPutted !== !0 && (u.objectNumber = Ie(), H("<<"), H("/Type /Font"), H("/BaseFont /" + Bi(u.postScriptName)), H("/Subtype /Type1"), typeof u.encoding == "string" && H("/Encoding /" + u.encoding), H("/FirstChar 32"), H("/LastChar 255"), H(">>"), H("endobj"))
        },
        yi = function(u) {
            u.objectNumber = Ie();
            var b = [];
            b.push({
                key: "Type",
                value: "/XObject"
            }), b.push({
                key: "Subtype",
                value: "/Form"
            }), b.push({
                key: "BBox",
                value: "[" + [Y(u.x), Y(u.y), Y(u.x + u.width), Y(u.y + u.height)].join(" ") + "]"
            }), b.push({
                key: "Matrix",
                value: "[" + u.matrix.toString() + "]"
            });
            var q = u.pages[1].join(`
`);
            Ir({
                data: q,
                additionalKeyValues: b,
                objectId: u.objectNumber
            }), H("endobj")
        },
        wi = function(u, b) {
            b || (b = 21);
            var q = Ie(),
                V = (function(Lt, jt) {
                    var Ot, Yt = [],
                        Kt = 1 / (jt - 1);
                    for (Ot = 0; Ot < 1; Ot += Kt) Yt.push(Ot);
                    if (Yt.push(1), Lt[0].offset != 0) {
                        var ge = {
                            offset: 0,
                            color: Lt[0].color
                        };
                        Lt.unshift(ge)
                    }
                    if (Lt[Lt.length - 1].offset != 1) {
                        var je = {
                            offset: 1,
                            color: Lt[Lt.length - 1].color
                        };
                        Lt.push(je)
                    }
                    for (var Ye = "", ke = 0, Ke = 0; Ke < Yt.length; Ke++) {
                        for (Ot = Yt[Ke]; Ot > Lt[ke + 1].offset;) ke++;
                        var Je = Lt[ke].offset,
                            ir = (Ot - Je) / (Lt[ke + 1].offset - Je),
                            Or = Lt[ke].color,
                            br = Lt[ke + 1].color;
                        Ye += Z(Math.round((1 - ir) * Or[0] + ir * br[0]).toString(16)) + Z(Math.round((1 - ir) * Or[1] + ir * br[1]).toString(16)) + Z(Math.round((1 - ir) * Or[2] + ir * br[2]).toString(16))
                    }
                    return Ye.trim()
                })(u.colors, b),
                rt = [];
            rt.push({
                key: "FunctionType",
                value: "0"
            }), rt.push({
                key: "Domain",
                value: "[0.0 1.0]"
            }), rt.push({
                key: "Size",
                value: "[" + b + "]"
            }), rt.push({
                key: "BitsPerSample",
                value: "8"
            }), rt.push({
                key: "Range",
                value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
            }), rt.push({
                key: "Decode",
                value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
            }), Ir({
                data: V,
                additionalKeyValues: rt,
                alreadyAppliedFilters: ["/ASCIIHexDecode"],
                objectId: q
            }), H("endobj"), u.objectNumber = Ie(), H("<< /ShadingType " + u.type), H("/ColorSpace /DeviceRGB");
            var mt = "/Coords [" + Y(parseFloat(u.coords[0])) + " " + Y(parseFloat(u.coords[1])) + " ";
            u.type === 2 ? mt += Y(parseFloat(u.coords[2])) + " " + Y(parseFloat(u.coords[3])) : mt += Y(parseFloat(u.coords[2])) + " " + Y(parseFloat(u.coords[3])) + " " + Y(parseFloat(u.coords[4])) + " " + Y(parseFloat(u.coords[5])), H(mt += "]"), u.matrix && H("/Matrix [" + u.matrix.toString() + "]"), H("/Function " + q + " 0 R"), H("/Extend [true true]"), H(">>"), H("endobj")
        },
        Li = function(u, b) {
            var q = rr(),
                V = Ie();
            b.push({
                resourcesOid: q,
                objectOid: V
            }), u.objectNumber = V;
            var rt = [];
            rt.push({
                key: "Type",
                value: "/Pattern"
            }), rt.push({
                key: "PatternType",
                value: "1"
            }), rt.push({
                key: "PaintType",
                value: "1"
            }), rt.push({
                key: "TilingType",
                value: "1"
            }), rt.push({
                key: "BBox",
                value: "[" + u.boundingBox.map(Y).join(" ") + "]"
            }), rt.push({
                key: "XStep",
                value: Y(u.xStep)
            }), rt.push({
                key: "YStep",
                value: Y(u.yStep)
            }), rt.push({
                key: "Resources",
                value: q + " 0 R"
            }), u.matrix && rt.push({
                key: "Matrix",
                value: "[" + u.matrix.toString() + "]"
            }), Ir({
                data: u.stream,
                additionalKeyValues: rt,
                objectId: u.objectNumber
            }), H("endobj")
        },
        no = function(u) {
            for (var b in u.objectNumber = Ie(), H("<<"), u) switch (b) {
                case "opacity":
                    H("/ca " + P(u[b]));
                    break;
                case "stroke-opacity":
                    H("/CA " + P(u[b]))
            }
            H(">>"), H("endobj")
        },
        Di = function(u) {
            nr(u.resourcesOid, !0), H("<<"), H("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), (function() {
                for (var b in H("/Font <<"), Dt) Dt.hasOwnProperty(b) && (m === !1 || m === !0 && C.hasOwnProperty(b)) && H("/" + b + " " + Dt[b].objectNumber + " 0 R");
                H(">>")
            })(), (function() {
                if (Object.keys(Ut).length > 0) {
                    for (var b in H("/Shading <<"), Ut) Ut.hasOwnProperty(b) && Ut[b] instanceof Tn && Ut[b].objectNumber >= 0 && H("/" + b + " " + Ut[b].objectNumber + " 0 R");
                    ve.publish("putShadingPatternDict"), H(">>")
                }
            })(), (function(b) {
                if (Object.keys(Ut).length > 0) {
                    for (var q in H("/Pattern <<"), Ut) Ut.hasOwnProperty(q) && Ut[q] instanceof d.TilingPattern && Ut[q].objectNumber >= 0 && Ut[q].objectNumber < b && H("/" + q + " " + Ut[q].objectNumber + " 0 R");
                    ve.publish("putTilingPatternDict"), H(">>")
                }
            })(u.objectOid), (function() {
                if (Object.keys(ee).length > 0) {
                    var b;
                    for (b in H("/ExtGState <<"), ee) ee.hasOwnProperty(b) && ee[b].objectNumber >= 0 && H("/" + b + " " + ee[b].objectNumber + " 0 R");
                    ve.publish("putGStateDict"), H(">>")
                }
            })(), (function() {
                for (var b in H("/XObject <<"), ur) ur.hasOwnProperty(b) && ur[b].objectNumber >= 0 && H("/" + b + " " + ur[b].objectNumber + " 0 R");
                ve.publish("putXobjectDict"), H(">>")
            })(), H(">>"), H("endobj")
        },
        ga = function(u) {
            te[u.fontName] = te[u.fontName] || {}, te[u.fontName][u.fontStyle] = u.id
        },
        va = function(u, b, q, V, rt) {
            var mt = {
                id: "F" + (Object.keys(Dt).length + 1).toString(10),
                postScriptName: u,
                fontName: b,
                fontStyle: q,
                encoding: V,
                isStandardFont: rt || !1,
                metadata: {}
            };
            return ve.publish("addFont", {
                font: mt,
                instance: this
            }), Dt[mt.id] = mt, ga(mt), mt.id
        },
        Br = d.__private__.pdfEscape = d.pdfEscape = function(u, b) {
            return (function(q, V) {
                var rt, mt, Lt, jt, Ot, Yt, Kt, ge, je;
                if (Lt = (V = V || {}).sourceEncoding || "Unicode", Ot = V.outputEncoding, (V.autoencode || Ot) && Dt[Et].metadata && Dt[Et].metadata[Lt] && Dt[Et].metadata[Lt].encoding && (jt = Dt[Et].metadata[Lt].encoding, !Ot && Dt[Et].encoding && (Ot = Dt[Et].encoding), !Ot && jt.codePages && (Ot = jt.codePages[0]), typeof Ot == "string" && (Ot = jt[Ot]), Ot)) {
                    for (Kt = !1, Yt = [], rt = 0, mt = q.length; rt < mt; rt++)(ge = Ot[q.charCodeAt(rt)]) ? Yt.push(String.fromCharCode(ge)) : Yt.push(q[rt]), Yt[rt].charCodeAt(0) >> 8 && (Kt = !0);
                    q = Yt.join("")
                }
                for (rt = q.length; Kt === void 0 && rt !== 0;) q.charCodeAt(rt - 1) >> 8 && (Kt = !0), rt--;
                if (!Kt) return q;
                for (Yt = V.noBOM ? [] : [254, 255], rt = 0, mt = q.length; rt < mt; rt++) {
                    if ((je = (ge = q.charCodeAt(rt)) >> 8) >> 8) throw new Error("Character at position " + rt + " of string '" + q + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
                    Yt.push(je), Yt.push(ge - (je << 8))
                }
                return String.fromCharCode.apply(void 0, Yt)
            })(u, b).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
        },
        Ri = d.__private__.beginPage = function(u) {
            Nt[++xe] = [], Jt[xe] = {
                objId: 0,
                contentsObjId: 0,
                userUnit: Number(h),
                artBox: null,
                bleedBox: null,
                cropBox: null,
                trimBox: null,
                mediaBox: {
                    bottomLeftX: 0,
                    bottomLeftY: 0,
                    topRightX: Number(u[0]),
                    topRightY: Number(u[1])
                }
            }, ba(xe), gt(Nt[I])
        },
        ma = function(u, b) {
            var q, V, rt;
            switch (i = b || i, typeof u == "string" && (q = v(u.toLowerCase()), Array.isArray(q) && (V = q[0], rt = q[1])), Array.isArray(u) && (V = u[0] * Vt, rt = u[1] * Vt), isNaN(V) && (V = s[0], rt = s[1]), (V > 14400 || rt > 14400) && (_e.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), V = Math.min(14400, V), rt = Math.min(14400, rt)), s = [V, rt], i.substr(0, 1)) {
                case "l":
                    rt > V && (s = [rt, V]);
                    break;
                case "p":
                    V > rt && (s = [rt, V])
            }
            Ri(s), fo(Hi), H(Ai), Wi !== 0 && H(Wi + " J"), Vi !== 0 && H(Vi + " j"), ve.publish("addPage", {
                pageNumber: xe
            })
        },
        Ti = function(u) {
            u > 0 && u <= xe && (Nt.splice(u, 1), Jt.splice(u, 1), xe--, I > xe && (I = xe), this.setPage(I))
        },
        ba = function(u) {
            u > 0 && u <= xe && (I = u)
        },
        ya = d.__private__.getNumberOfPages = d.getNumberOfPages = function() {
            return Nt.length - 1
        },
        wa = function(u, b, q) {
            var V, rt = void 0;
            return q = q || {}, u = u !== void 0 ? u : Dt[Et].fontName, b = b !== void 0 ? b : Dt[Et].fontStyle, V = u.toLowerCase(), te[V] !== void 0 && te[V][b] !== void 0 ? rt = te[V][b] : te[u] !== void 0 && te[u][b] !== void 0 ? rt = te[u][b] : q.disableWarning === !1 && _e.warn("Unable to look up font label for font '" + u + "', '" + b + "'. Refer to getFontList() for available fonts."), rt || q.noFallback || (rt = te.times[b]) == null && (rt = te.times.normal), rt
        },
        xi = d.__private__.putInfo = function() {
            var u = Ie(),
                b = function(V) {
                    return V
                };
            for (var q in w !== null && (b = Te.encryptor(u, 0)), H("<<"), H("/Producer (" + Br(b("jsPDF " + Mt.version)) + ")"), ae) ae.hasOwnProperty(q) && ae[q] && H("/" + q.substr(0, 1).toUpperCase() + q.substr(1) + " (" + Br(b(ae[q])) + ")");
            H("/CreationDate (" + Br(b(J)) + ")"), H(">>"), H("endobj")
        },
        io = d.__private__.putCatalog = function(u) {
            var b = (u = u || {}).rootDictionaryObjId || wn;
            switch (Ie(), H("<<"), H("/Type /Catalog"), H("/Pages " + b + " 0 R"), Tt || (Tt = "fullwidth"), Tt) {
                case "fullwidth":
                    H("/OpenAction [3 0 R /FitH null]");
                    break;
                case "fullheight":
                    H("/OpenAction [3 0 R /FitV null]");
                    break;
                case "fullpage":
                    H("/OpenAction [3 0 R /Fit]");
                    break;
                case "original":
                    H("/OpenAction [3 0 R /XYZ null null 1]");
                    break;
                default:
                    var q = "" + Tt;
                    q.substr(q.length - 1) === "%" && (Tt = parseInt(Tt) / 100), typeof Tt == "number" && H("/OpenAction [3 0 R /XYZ null null " + P(Tt) + "]")
            }
            switch ($t || ($t = "continuous"), $t) {
                case "continuous":
                    H("/PageLayout /OneColumn");
                    break;
                case "single":
                    H("/PageLayout /SinglePage");
                    break;
                case "two":
                case "twoleft":
                    H("/PageLayout /TwoColumnLeft");
                    break;
                case "tworight":
                    H("/PageLayout /TwoColumnRight")
            }
            zt && H("/PageMode /" + zt), ve.publish("putCatalog"), H(">>"), H("endobj")
        },
        Ge = d.__private__.putTrailer = function() {
            H("trailer"), H("<<"), H("/Size " + (Q + 1)), H("/Root " + Q + " 0 R"), H("/Info " + (Q - 1) + " 0 R"), w !== null && H("/Encrypt " + Te.oid + " 0 R"), H("/ID [ <" + W + "> <" + W + "> ]"), H(">>")
        },
        La = d.__private__.putHeader = function() {
            H("%PDF-" + B), H("%\xBA\xDF\xAC\xE0")
        },
        xa = d.__private__.putXRef = function() {
            var u = "0000000000";
            H("xref"), H("0 " + (Q + 1)), H("0000000000 65535 f ");
            for (var b = 1; b <= Q; b++) typeof ut[b] == "function" ? H((u + ut[b]()).slice(-10) + " 00000 n ") : ut[b] !== void 0 ? H((u + ut[b]).slice(-10) + " 00000 n ") : H("0000000000 00000 n ")
        },
        ln = d.__private__.buildDocument = function() {
            var u;
            Q = 0, ft = 0, dt = [], ut = [], yt = [], wn = rr(), Er = rr(), gt(dt), ve.publish("buildDocument"), La(), Zr(), (function() {
                ve.publish("putAdditionalObjects");
                for (var q = 0; q < yt.length; q++) {
                    var V = yt[q];
                    nr(V.objId, !0), H(V.content), H("endobj")
                }
                ve.publish("postPutAdditionalObjects")
            })(), u = [], (function() {
                for (var q in Dt) Dt.hasOwnProperty(q) && (m === !1 || m === !0 && C.hasOwnProperty(q)) && Vn(Dt[q])
            })(), (function() {
                var q;
                for (q in ee) ee.hasOwnProperty(q) && no(ee[q])
            })(), (function() {
                for (var q in ur) ur.hasOwnProperty(q) && yi(ur[q])
            })(), (function(q) {
                var V;
                for (V in Ut) Ut.hasOwnProperty(V) && (Ut[V] instanceof Tn ? wi(Ut[V]) : Ut[V] instanceof di && Li(Ut[V], q))
            })(u), ve.publish("putResources"), u.forEach(Di), Di({
                resourcesOid: Er,
                objectOid: Number.MAX_SAFE_INTEGER
            }), ve.publish("postPutResources"), w !== null && (Te.oid = Ie(), H("<<"), H("/Filter /Standard"), H("/V " + Te.v), H("/R " + Te.r), H("/U <" + Te.toHexString(Te.U) + ">"), H("/O <" + Te.toHexString(Te.O) + ">"), H("/P " + Te.P), H(">>"), H("endobj")), xi(), io();
            var b = ft;
            return xa(), Ge(), H("startxref"), H("" + b), H("%%EOF"), gt(Nt[I]), dt.join(`
`)
        },
        Gn = d.__private__.getBlob = function(u) {
            return new Blob([ne(u)], {
                type: "application/pdf"
            })
        },
        Hr = d.output = d.__private__.output = (jr = function(u, b) {
            switch (typeof(b = b || {}) == "string" ? b = {
                filename: b
            } : b.filename = b.filename || "generated.pdf", u) {
                case void 0:
                    return ln();
                case "save":
                    d.save(b.filename);
                    break;
                case "arraybuffer":
                    return ne(ln());
                case "blob":
                    return Gn(ln());
                case "bloburi":
                case "bloburl":
                    if (Gt.URL !== void 0 && typeof Gt.URL.createObjectURL == "function") return Gt.URL && Gt.URL.createObjectURL(Gn(ln())) || void 0;
                    _e.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                    break;
                case "datauristring":
                case "dataurlstring":
                    var q = "",
                        V = ln();
                    try {
                        q = Rs(V)
                    } catch {
                        q = Rs(unescape(encodeURIComponent(V)))
                    }
                    return "data:application/pdf;filename=" + b.filename + ";base64," + q;
                case "pdfobjectnewwindow":
                    if (Object.prototype.toString.call(Gt) === "[object Window]") {
                        var rt = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",
                            mt = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                        b.pdfObjectUrl && (rt = b.pdfObjectUrl, mt = "");
                        var Lt = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + rt + '"' + mt + '></script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(b) + ");</script></body></html>",
                            jt = Gt.open();
                        return jt !== null && jt.document.write(Lt), jt
                    }
                    throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
                case "pdfjsnewwindow":
                    if (Object.prototype.toString.call(Gt) === "[object Window]") {
                        var Ot = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (b.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + b.filename + '" width="500px" height="400px" /></body></html>',
                            Yt = Gt.open();
                        if (Yt !== null) {
                            Yt.document.write(Ot);
                            var Kt = this;
                            Yt.document.documentElement.querySelector("#pdfViewer").onload = function() {
                                Yt.document.title = b.filename, Yt.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(Kt.output("bloburl"))
                            }
                        }
                        return Yt
                    }
                    throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
                case "dataurlnewwindow":
                    if (Object.prototype.toString.call(Gt) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                    var ge = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", b) + '"></iframe></body></html>',
                        je = Gt.open();
                    if (je !== null && (je.document.write(ge), je.document.title = b.filename), je || typeof safari > "u") return je;
                    break;
                case "datauri":
                case "dataurl":
                    return Gt.document.location.href = this.output("datauristring", b);
                default:
                    return null
            }
        }, jr.foo = function() {
            try {
                return jr.apply(this, arguments)
            } catch (q) {
                var u = q.stack || "";
                ~u.indexOf(" at ") && (u = u.split(" at ")[1]);
                var b = "Error in function " + u.split(`
`)[0].split("<")[0] + ": " + q.message;
                if (!Gt.console) throw new Error(b);
                Gt.console.error(b, q), Gt.alert && alert(b)
            }
        }, jr.foo.bar = jr, jr.foo),
        Yn = function(u) {
            return Array.isArray(Hn) === !0 && Hn.indexOf(u) > -1
        };
    switch (a) {
        case "pt":
            Vt = 1;
            break;
        case "mm":
            Vt = 72 / 25.4;
            break;
        case "cm":
            Vt = 72 / 2.54;
            break;
        case "in":
            Vt = 72;
            break;
        case "px":
            Vt = Yn("px_scaling") == 1 ? .75 : 96 / 72;
            break;
        case "pc":
        case "em":
            Vt = 12;
            break;
        case "ex":
            Vt = 6;
            break;
        default:
            if (typeof a != "number") throw new Error("Invalid unit: " + a);
            Vt = a
    }
    var Te = null;
    ct(), X();
    var Ei = d.__private__.getPageInfo = d.getPageInfo = function(u) {
            if (isNaN(u) || u % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
            return {
                objId: Jt[u].objId,
                pageNumber: u,
                pageContext: Jt[u]
            }
        },
        ao = d.__private__.getPageInfoByObjId = function(u) {
            if (isNaN(u) || u % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
            for (var b in Jt)
                if (Jt[b].objId === u) break;
            return Ei(b)
        },
        oo = d.__private__.getCurrentPageInfo = d.getCurrentPageInfo = function() {
            return {
                objId: Jt[I].objId,
                pageNumber: I,
                pageContext: Jt[I]
            }
        };
    d.addPage = function() {
        return ma.apply(this, arguments), this
    }, d.setPage = function() {
        return ba.apply(this, arguments), gt.call(this, Nt[I]), this
    }, d.insertPage = function(u) {
        return this.addPage(), this.movePage(I, u), this
    }, d.movePage = function(u, b) {
        var q, V;
        if (u > b) {
            q = Nt[u], V = Jt[u];
            for (var rt = u; rt > b; rt--) Nt[rt] = Nt[rt - 1], Jt[rt] = Jt[rt - 1];
            Nt[b] = q, Jt[b] = V, this.setPage(b)
        } else if (u < b) {
            q = Nt[u], V = Jt[u];
            for (var mt = u; mt < b; mt++) Nt[mt] = Nt[mt + 1], Jt[mt] = Jt[mt + 1];
            Nt[b] = q, Jt[b] = V, this.setPage(b)
        }
        return this
    }, d.deletePage = function() {
        return Ti.apply(this, arguments), this
    }, d.__private__.text = d.text = function(u, b, q, V, rt) {
        var mt, Lt, jt, Ot, Yt, Kt, ge, je, Ye, ke = (V = V || {}).scope || this;
        if (typeof u == "number" && typeof b == "number" && (typeof q == "string" || Array.isArray(q))) {
            var Ke = q;
            q = b, b = u, u = Ke
        }
        if (arguments[3] instanceof Wt == 0 ? (jt = arguments[4], Ot = arguments[5], Se(ge = arguments[3]) === "object" && ge !== null || (typeof jt == "string" && (Ot = jt, jt = null), typeof ge == "string" && (Ot = ge, ge = null), typeof ge == "number" && (jt = ge, ge = null), V = {
                flags: ge,
                angle: jt,
                align: Ot
            })) : (O("The transform parameter of text() with a Matrix value"), Ye = rt), isNaN(b) || isNaN(q) || u == null) throw new Error("Invalid arguments passed to jsPDF.text");
        if (u.length === 0) return ke;
        var Je, ir = "",
            Or = typeof V.lineHeightFactor == "number" ? V.lineHeightFactor : Xn,
            br = ke.internal.scaleFactor;

        function Ca(me) {
            return me = me.split("	").join(Array(V.TabLen || 9).join(" ")), Br(me, ge)
        }

        function Pi(me) {
            for (var Ae, qe = me.concat(), Ze = [], vn = qe.length; vn--;) typeof(Ae = qe.shift()) == "string" ? Ze.push(Ae) : Array.isArray(me) && (Ae.length === 1 || Ae[1] === void 0 && Ae[2] === void 0) ? Ze.push(Ae[0]) : Ze.push([Ae[0], Ae[1], Ae[2]]);
            return Ze
        }

        function ei(me, Ae) {
            var qe;
            if (typeof me == "string") qe = Ae(me)[0];
            else if (Array.isArray(me)) {
                for (var Ze, vn, na = me.concat(), Ci = [], Ba = na.length; Ba--;) typeof(Ze = na.shift()) == "string" ? Ci.push(Ae(Ze)[0]) : Array.isArray(Ze) && typeof Ze[0] == "string" && (vn = Ae(Ze[0], Ze[1], Ze[2]), Ci.push([vn[0], vn[1], vn[2]]));
                qe = Ci
            }
            return qe
        }
        var An = !1,
            ri = !0;
        if (typeof u == "string") An = !0;
        else if (Array.isArray(u)) {
            var ni = u.concat();
            Lt = [];
            for (var ii, lr = ni.length; lr--;)(typeof(ii = ni.shift()) != "string" || Array.isArray(ii) && typeof ii[0] != "string") && (ri = !1);
            An = ri
        }
        if (An === !1) throw new Error('Type of text must be string or Array. "' + u + '" is not recognized.');
        typeof u == "string" && (u = u.match(/[\r?\n]/) ? u.split(/\r\n|\r|\n/g) : [u]);
        var ai = At / ke.internal.scaleFactor,
            oi = ai * (Or - 1);
        switch (V.baseline) {
            case "bottom":
                q -= oi;
                break;
            case "top":
                q += ai - oi;
                break;
            case "hanging":
                q += ai - 2 * oi;
                break;
            case "middle":
                q += ai / 2 - oi
        }
        if ((Kt = V.maxWidth || 0) > 0 && (typeof u == "string" ? u = ke.splitTextToSize(u, Kt) : Object.prototype.toString.call(u) === "[object Array]" && (u = u.reduce(function(me, Ae) {
                return me.concat(ke.splitTextToSize(Ae, Kt))
            }, []))), mt = {
                text: u,
                x: b,
                y: q,
                options: V,
                mutex: {
                    pdfEscape: Br,
                    activeFontKey: Et,
                    fonts: Dt,
                    activeFontSize: At
                }
            }, ve.publish("preProcessText", mt), u = mt.text, jt = (V = mt.options).angle, Ye instanceof Wt == 0 && jt && typeof jt == "number") {
            jt *= Math.PI / 180, V.rotationDirection === 0 && (jt = -jt), D === z && (jt = -jt);
            var Ji = Math.cos(jt),
                Xi = Math.sin(jt);
            Ye = new Wt(Ji, Xi, -Xi, Ji, 0, 0)
        } else jt && jt instanceof Wt && (Ye = jt);
        D !== z || Ye || (Ye = un), (Yt = V.charSpace || Si) !== void 0 && (ir += Y(F(Yt)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (je = V.horizontalScale) !== void 0 && (ir += Y(100 * je) + ` Tz
`), V.lang;
        var Be = -1,
            pn = V.renderingMode !== void 0 ? V.renderingMode : V.stroke,
            ki = ke.internal.getCurrentPageInfo().pageContext;
        switch (pn) {
            case 0:
            case !1:
            case "fill":
                Be = 0;
                break;
            case 1:
            case !0:
            case "stroke":
                Be = 1;
                break;
            case 2:
            case "fillThenStroke":
                Be = 2;
                break;
            case 3:
            case "invisible":
                Be = 3;
                break;
            case 4:
            case "fillAndAddForClipping":
                Be = 4;
                break;
            case 5:
            case "strokeAndAddPathForClipping":
                Be = 5;
                break;
            case 6:
            case "fillThenStrokeAndAddToPathForClipping":
                Be = 6;
                break;
            case 7:
            case "addToPathForClipping":
                Be = 7
        }
        var ja = ki.usedRenderingMode !== void 0 ? ki.usedRenderingMode : -1;
        Be !== -1 ? ir += Be + ` Tr
` : ja !== -1 && (ir += `0 Tr
`), Be !== -1 && (ki.usedRenderingMode = Be), Ot = V.align || "left";
        var Mr, si = At * Or,
            Ki = ke.internal.pageSize.getWidth(),
            Zi = Dt[Et];
        Yt = V.charSpace || Si, Kt = V.maxWidth || 0, ge = Object.assign({
            autoencode: !0,
            noBOM: !0
        }, V.flags);
        var Nn = [],
            ui = function(me) {
                return ke.getStringUnitWidth(me, {
                    font: Zi,
                    charSpace: Yt,
                    fontSize: At,
                    doKerning: !1
                }) * At / br
            };
        if (Object.prototype.toString.call(u) === "[object Array]") {
            var xr;
            Lt = Pi(u), Ot !== "left" && (Mr = Lt.map(ui));
            var Ar, Sn = 0;
            if (Ot === "right") {
                b -= Mr[0], u = [], lr = Lt.length;
                for (var gn = 0; gn < lr; gn++) gn === 0 ? (Ar = hn(b), xr = cn(q)) : (Ar = F(Sn - Mr[gn]), xr = -si), u.push([Lt[gn], Ar, xr]), Sn = Mr[gn]
            } else if (Ot === "center") {
                b -= Mr[0] / 2, u = [], lr = Lt.length;
                for (var _n = 0; _n < lr; _n++) _n === 0 ? (Ar = hn(b), xr = cn(q)) : (Ar = F((Sn - Mr[_n]) / 2), xr = -si), u.push([Lt[_n], Ar, xr]), Sn = Mr[_n]
            } else if (Ot === "left") {
                u = [], lr = Lt.length;
                for (var $i = 0; $i < lr; $i++) u.push(Lt[$i])
            } else if (Ot === "justify" && Zi.encoding === "Identity-H") {
                u = [], lr = Lt.length, Kt = Kt !== 0 ? Kt : Ki;
                for (var Fi = 0, Ee = 0; Ee < lr; Ee++)
                    if (xr = Ee === 0 ? cn(q) : -si, Ar = Ee === 0 ? hn(b) : Fi, Ee < lr - 1) {
                        var Ia = F((Kt - Mr[Ee]) / (Lt[Ee].split(" ").length - 1)),
                            Qr = Lt[Ee].split(" ");
                        u.push([Qr[0] + " ", Ar, xr]), Fi = 0;
                        for (var tn = 1; tn < Qr.length; tn++) {
                            var Qi = (ui(Qr[tn - 1] + " " + Qr[tn]) - ui(Qr[tn])) * br + Ia;
                            tn == Qr.length - 1 ? u.push([Qr[tn], Qi, 0]) : u.push([Qr[tn] + " ", Qi, 0]), Fi -= Qi
                        }
                    } else u.push([Lt[Ee], Ar, xr]);
                u.push(["", Fi, 0])
            } else {
                if (Ot !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                for (u = [], lr = Lt.length, Kt = Kt !== 0 ? Kt : Ki, Ee = 0; Ee < lr; Ee++) {
                    xr = Ee === 0 ? cn(q) : -si, Ar = Ee === 0 ? hn(b) : 0;
                    var ta = Lt[Ee].split(" ").length - 1,
                        ea = ta > 0 ? (Kt - Mr[Ee]) / ta : 0;
                    Ee < lr - 1 ? Nn.push(Y(F(ea))) : Nn.push(0), u.push([Lt[Ee], Ar, xr])
                }
            }
        }(typeof V.R2L == "boolean" ? V.R2L : ie) === !0 && (u = ei(u, function(me, Ae, qe) {
            return [me.split("").reverse().join(""), Ae, qe]
        })), mt = {
            text: u,
            x: b,
            y: q,
            options: V,
            mutex: {
                pdfEscape: Br,
                activeFontKey: Et,
                fonts: Dt,
                activeFontSize: At
            }
        }, ve.publish("postProcessText", mt), u = mt.text, Je = mt.mutex.isHex || !1;
        var ra = Dt[Et].encoding;
        ra !== "WinAnsiEncoding" && ra !== "StandardEncoding" || (u = ei(u, function(me, Ae, qe) {
            return [Ca(me), Ae, qe]
        })), Lt = Pi(u), u = [];
        for (var Pn, kn, Fn, li = Array.isArray(Lt[0]) ? 1 : 0, Cn = "", hi = function(me, Ae, qe) {
                var Ze = "";
                return qe instanceof Wt ? (qe = typeof V.angle == "number" ? sn(qe, new Wt(1, 0, 0, 1, me, Ae)) : sn(new Wt(1, 0, 0, 1, me, Ae), qe), D === z && (qe = sn(new Wt(1, 0, 0, -1, 0, 0), qe)), Ze = qe.join(" ") + ` Tm
`) : Ze = Y(me) + " " + Y(Ae) + ` Td
`, Ze
            }, Dr = 0; Dr < Lt.length; Dr++) {
            switch (Cn = "", li) {
                case 1:
                    Fn = (Je ? "<" : "(") + Lt[Dr][0] + (Je ? ">" : ")"), Pn = parseFloat(Lt[Dr][1]), kn = parseFloat(Lt[Dr][2]);
                    break;
                case 0:
                    Fn = (Je ? "<" : "(") + Lt[Dr] + (Je ? ">" : ")"), Pn = hn(b), kn = cn(q)
            }
            Nn !== void 0 && Nn[Dr] !== void 0 && (Cn = Nn[Dr] + ` Tw
`), Dr === 0 ? u.push(Cn + hi(Pn, kn, Ye) + Fn) : li === 0 ? u.push(Cn + Fn) : li === 1 && u.push(Cn + hi(Pn, kn, Ye) + Fn)
        }
        u = li === 0 ? u.join(` Tj
T* `) : u.join(` Tj
`), u += ` Tj
`;
        var en = `BT
/`;
        return en += Et + " " + At + ` Tf
`, en += Y(At * Or) + ` TL
`, en += Kn + `
`, en += ir, en += u, H(en += "ET"), C[Et] = !0, ke
    };
    var so = d.__private__.clip = d.clip = function(u) {
        return H(u === "evenodd" ? "W*" : "W"), this
    };
    d.clipEvenOdd = function() {
        return so("evenodd")
    }, d.__private__.discardPath = d.discardPath = function() {
        return H("n"), this
    };
    var $r = d.__private__.isValidStyle = function(u) {
        var b = !1;
        return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(u) !== -1 && (b = !0), b
    };
    d.__private__.setDefaultPathOperation = d.setDefaultPathOperation = function(u) {
        return $r(u) && (g = u), this
    };
    var Aa = d.__private__.getStyle = d.getStyle = function(u) {
            var b = g;
            switch (u) {
                case "D":
                case "S":
                    b = "S";
                    break;
                case "F":
                    b = "f";
                    break;
                case "FD":
                case "DF":
                    b = "B";
                    break;
                case "f":
                case "f*":
                case "B":
                case "B*":
                    b = u
            }
            return b
        },
        Na = d.close = function() {
            return H("h"), this
        };
    d.stroke = function() {
        return H("S"), this
    }, d.fill = function(u) {
        return Ln("f", u), this
    }, d.fillEvenOdd = function(u) {
        return Ln("f*", u), this
    }, d.fillStroke = function(u) {
        return Ln("B", u), this
    }, d.fillStrokeEvenOdd = function(u) {
        return Ln("B*", u), this
    };
    var Ln = function(u, b) {
            Se(b) === "object" ? lo(b, u) : H(u)
        },
        qi = function(u) {
            u === null || D === z && u === void 0 || (u = Aa(u), H(u))
        };

    function uo(u, b, q, V, rt) {
        var mt = new di(b || this.boundingBox, q || this.xStep, V || this.yStep, this.gState, rt || this.matrix);
        mt.stream = this.stream;
        var Lt = u + "$$" + this.cloneIndex++ + "$$";
        return Cr(Lt, mt), mt
    }
    var lo = function(u, b) {
            var q = le[u.key],
                V = Ut[q];
            if (V instanceof Tn) H("q"), H(ho(b)), V.gState && d.setGState(V.gState), H(u.matrix.toString() + " cm"), H("/" + q + " sh"), H("Q");
            else if (V instanceof di) {
                var rt = new Wt(1, 0, 0, -1, 0, ti());
                u.matrix && (rt = rt.multiply(u.matrix || un), q = uo.call(V, u.key, u.boundingBox, u.xStep, u.yStep, rt).id), H("q"), H("/Pattern cs"), H("/" + q + " scn"), V.gState && d.setGState(V.gState), H(b), H("Q")
            }
        },
        ho = function(u) {
            switch (u) {
                case "f":
                case "F":
                case "n":
                    return "W n";
                case "f*":
                    return "W* n";
                case "B":
                case "S":
                    return "W S";
                case "B*":
                    return "W* S"
            }
        },
        zi = d.moveTo = function(u, b) {
            return H(Y(F(u)) + " " + Y(_(b)) + " m"), this
        },
        Jn = d.lineTo = function(u, b) {
            return H(Y(F(u)) + " " + Y(_(b)) + " l"), this
        },
        xn = d.curveTo = function(u, b, q, V, rt, mt) {
            return H([Y(F(u)), Y(_(b)), Y(F(q)), Y(_(V)), Y(F(rt)), Y(_(mt)), "c"].join(" ")), this
        };
    d.__private__.line = d.line = function(u, b, q, V, rt) {
        if (isNaN(u) || isNaN(b) || isNaN(q) || isNaN(V) || !$r(rt)) throw new Error("Invalid arguments passed to jsPDF.line");
        return D === R ? this.lines([
            [q - u, V - b]
        ], u, b, [1, 1], rt || "S") : this.lines([
            [q - u, V - b]
        ], u, b, [1, 1]).stroke()
    }, d.__private__.lines = d.lines = function(u, b, q, V, rt, mt) {
        var Lt, jt, Ot, Yt, Kt, ge, je, Ye, ke, Ke, Je, ir;
        if (typeof u == "number" && (ir = q, q = b, b = u, u = ir), V = V || [1, 1], mt = mt || !1, isNaN(b) || isNaN(q) || !Array.isArray(u) || !Array.isArray(V) || !$r(rt) || typeof mt != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
        for (zi(b, q), Lt = V[0], jt = V[1], Yt = u.length, Ke = b, Je = q, Ot = 0; Ot < Yt; Ot++)(Kt = u[Ot]).length === 2 ? (Ke = Kt[0] * Lt + Ke, Je = Kt[1] * jt + Je, Jn(Ke, Je)) : (ge = Kt[0] * Lt + Ke, je = Kt[1] * jt + Je, Ye = Kt[2] * Lt + Ke, ke = Kt[3] * jt + Je, Ke = Kt[4] * Lt + Ke, Je = Kt[5] * jt + Je, xn(ge, je, Ye, ke, Ke, Je));
        return mt && Na(), qi(rt), this
    }, d.path = function(u) {
        for (var b = 0; b < u.length; b++) {
            var q = u[b],
                V = q.c;
            switch (q.op) {
                case "m":
                    zi(V[0], V[1]);
                    break;
                case "l":
                    Jn(V[0], V[1]);
                    break;
                case "c":
                    xn.apply(this, V);
                    break;
                case "h":
                    Na()
            }
        }
        return this
    }, d.__private__.rect = d.rect = function(u, b, q, V, rt) {
        if (isNaN(u) || isNaN(b) || isNaN(q) || isNaN(V) || !$r(rt)) throw new Error("Invalid arguments passed to jsPDF.rect");
        return D === R && (V = -V), H([Y(F(u)), Y(_(b)), Y(F(q)), Y(F(V)), "re"].join(" ")), qi(rt), this
    }, d.__private__.triangle = d.triangle = function(u, b, q, V, rt, mt, Lt) {
        if (isNaN(u) || isNaN(b) || isNaN(q) || isNaN(V) || isNaN(rt) || isNaN(mt) || !$r(Lt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
        return this.lines([
            [q - u, V - b],
            [rt - q, mt - V],
            [u - rt, b - mt]
        ], u, b, [1, 1], Lt, !0), this
    }, d.__private__.roundedRect = d.roundedRect = function(u, b, q, V, rt, mt, Lt) {
        if (isNaN(u) || isNaN(b) || isNaN(q) || isNaN(V) || isNaN(rt) || isNaN(mt) || !$r(Lt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
        var jt = 4 / 3 * (Math.SQRT2 - 1);
        return rt = Math.min(rt, .5 * q), mt = Math.min(mt, .5 * V), this.lines([
            [q - 2 * rt, 0],
            [rt * jt, 0, rt, mt - mt * jt, rt, mt],
            [0, V - 2 * mt],
            [0, mt * jt, -rt * jt, mt, -rt, mt],
            [2 * rt - q, 0],
            [-rt * jt, 0, -rt, -mt * jt, -rt, -mt],
            [0, 2 * mt - V],
            [0, -mt * jt, rt * jt, -mt, rt, -mt]
        ], u + rt, b, [1, 1], Lt, !0), this
    }, d.__private__.ellipse = d.ellipse = function(u, b, q, V, rt) {
        if (isNaN(u) || isNaN(b) || isNaN(q) || isNaN(V) || !$r(rt)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
        var mt = 4 / 3 * (Math.SQRT2 - 1) * q,
            Lt = 4 / 3 * (Math.SQRT2 - 1) * V;
        return zi(u + q, b), xn(u + q, b - Lt, u + mt, b - V, u, b - V), xn(u - mt, b - V, u - q, b - Lt, u - q, b), xn(u - q, b + Lt, u - mt, b + V, u, b + V), xn(u + mt, b + V, u + q, b + Lt, u + q, b), qi(rt), this
    }, d.__private__.circle = d.circle = function(u, b, q, V) {
        if (isNaN(u) || isNaN(b) || isNaN(q) || !$r(V)) throw new Error("Invalid arguments passed to jsPDF.circle");
        return this.ellipse(u, b, q, q, V)
    }, d.setFont = function(u, b, q) {
        return q && (b = st(b, q)), Et = wa(u, b, {
            disableWarning: !1
        }), this
    };
    var co = d.__private__.getFont = d.getFont = function() {
        return Dt[wa.apply(d, arguments)]
    };
    d.__private__.getFontList = d.getFontList = function() {
        var u, b, q = {};
        for (u in te)
            if (te.hasOwnProperty(u))
                for (b in q[u] = [], te[u]) te[u].hasOwnProperty(b) && q[u].push(b);
        return q
    }, d.addFont = function(u, b, q, V, rt) {
        var mt = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
        return arguments[3] && mt.indexOf(arguments[3]) !== -1 ? rt = arguments[3] : arguments[3] && mt.indexOf(arguments[3]) == -1 && (q = st(q, V)), va.call(this, u, b, q, rt = rt || "Identity-H")
    };
    var Xn, Hi = n.lineWidth || .200025,
        Xt = d.__private__.getLineWidth = d.getLineWidth = function() {
            return Hi
        },
        fo = d.__private__.setLineWidth = d.setLineWidth = function(u) {
            return Hi = u, H(Y(F(u)) + " w"), this
        };
    d.__private__.setLineDash = Mt.API.setLineDash = Mt.API.setLineDashPattern = function(u, b) {
        if (u = u || [], b = b || 0, isNaN(b) || !Array.isArray(u)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
        return u = u.map(function(q) {
            return Y(F(q))
        }).join(" "), b = Y(F(b)), H("[" + u + "] " + b + " d"), this
    };
    var po = d.__private__.getLineHeight = d.getLineHeight = function() {
        return At * Xn
    };
    d.__private__.getLineHeight = d.getLineHeight = function() {
        return At * Xn
    };
    var go = d.__private__.setLineHeightFactor = d.setLineHeightFactor = function(u) {
            return typeof(u = u || 1.15) == "number" && (Xn = u), this
        },
        vo = d.__private__.getLineHeightFactor = d.getLineHeightFactor = function() {
            return Xn
        };
    go(n.lineHeight);
    var hn = d.__private__.getHorizontalCoordinate = function(u) {
            return F(u)
        },
        cn = d.__private__.getVerticalCoordinate = function(u) {
            return D === z ? u : Jt[I].mediaBox.topRightY - Jt[I].mediaBox.bottomLeftY - F(u)
        },
        mo = d.__private__.getHorizontalCoordinateString = d.getHorizontalCoordinateString = function(u) {
            return Y(hn(u))
        },
        bo = d.__private__.getVerticalCoordinateString = d.getVerticalCoordinateString = function(u) {
            return Y(cn(u))
        },
        Ai = n.strokeColor || "0 G";
    d.__private__.getStrokeColor = d.getDrawColor = function() {
        return Kr(Ai)
    }, d.__private__.setStrokeColor = d.setDrawColor = function(u, b, q, V) {
        return Ai = qr({
            ch1: u,
            ch2: b,
            ch3: q,
            ch4: V,
            pdfColorType: "draw",
            precision: 2
        }), H(Ai), this
    };
    var Ui = n.fillColor || "0 g";
    d.__private__.getFillColor = d.getFillColor = function() {
        return Kr(Ui)
    }, d.__private__.setFillColor = d.setFillColor = function(u, b, q, V) {
        return Ui = qr({
            ch1: u,
            ch2: b,
            ch3: q,
            ch4: V,
            pdfColorType: "fill",
            precision: 2
        }), H(Ui), this
    };
    var Kn = n.textColor || "0 g",
        Ni = d.__private__.getTextColor = d.getTextColor = function() {
            return Kr(Kn)
        };
    d.__private__.setTextColor = d.setTextColor = function(u, b, q, V) {
        return Kn = qr({
            ch1: u,
            ch2: b,
            ch3: q,
            ch4: V,
            pdfColorType: "text",
            precision: 3
        }), this
    };
    var Si = n.charSpace,
        yo = d.__private__.getCharSpace = d.getCharSpace = function() {
            return parseFloat(Si || 0)
        };
    d.__private__.setCharSpace = d.setCharSpace = function(u) {
        if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
        return Si = u, this
    };
    var Wi = 0;
    d.CapJoinStyles = {
        0: 0,
        butt: 0,
        but: 0,
        miter: 0,
        1: 1,
        round: 1,
        rounded: 1,
        circle: 1,
        2: 2,
        projecting: 2,
        project: 2,
        square: 2,
        bevel: 2
    }, d.__private__.setLineCap = d.setLineCap = function(u) {
        var b = d.CapJoinStyles[u];
        if (b === void 0) throw new Error("Line cap style of '" + u + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return Wi = b, H(b + " J"), this
    };
    var Vi = 0;
    d.__private__.setLineJoin = d.setLineJoin = function(u) {
        var b = d.CapJoinStyles[u];
        if (b === void 0) throw new Error("Line join style of '" + u + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return Vi = b, H(b + " j"), this
    }, d.__private__.setLineMiterLimit = d.__private__.setMiterLimit = d.setLineMiterLimit = d.setMiterLimit = function(u) {
        if (u = u || 0, isNaN(u)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
        return H(Y(F(u)) + " M"), this
    }, d.GState = ha, d.setGState = function(u) {
        (u = typeof u == "string" ? ee[Re[u]] : Zn(null, u)).equals(Xe) || (H("/" + u.id + " gs"), Xe = u)
    };
    var Zn = function(u, b) {
        if (!u || !Re[u]) {
            var q = !1;
            for (var V in ee)
                if (ee.hasOwnProperty(V) && ee[V].equals(b)) {
                    q = !0;
                    break
                }
            if (q) b = ee[V];
            else {
                var rt = "GS" + (Object.keys(ee).length + 1).toString(10);
                ee[rt] = b, b.id = rt
            }
            return u && (Re[u] = b.id), ve.publish("addGState", b), b
        }
    };
    d.addGState = function(u, b) {
        return Zn(u, b), this
    }, d.saveGraphicsState = function() {
        return H("q"), Le.push({
            key: Et,
            size: At,
            color: Kn
        }), this
    }, d.restoreGraphicsState = function() {
        H("Q");
        var u = Le.pop();
        return Et = u.key, At = u.size, Kn = u.color, Xe = null, this
    }, d.setCurrentTransformationMatrix = function(u) {
        return H(u.toString() + " cm"), this
    }, d.comment = function(u) {
        return H("#" + u), this
    };
    var $n = function(u, b) {
            var q = u || 0;
            Object.defineProperty(this, "x", {
                enumerable: !0,
                get: function() {
                    return q
                },
                set: function(mt) {
                    isNaN(mt) || (q = parseFloat(mt))
                }
            });
            var V = b || 0;
            Object.defineProperty(this, "y", {
                enumerable: !0,
                get: function() {
                    return V
                },
                set: function(mt) {
                    isNaN(mt) || (V = parseFloat(mt))
                }
            });
            var rt = "pt";
            return Object.defineProperty(this, "type", {
                enumerable: !0,
                get: function() {
                    return rt
                },
                set: function(mt) {
                    rt = mt.toString()
                }
            }), this
        },
        Gi = function(u, b, q, V) {
            $n.call(this, u, b), this.type = "rect";
            var rt = q || 0;
            Object.defineProperty(this, "w", {
                enumerable: !0,
                get: function() {
                    return rt
                },
                set: function(Lt) {
                    isNaN(Lt) || (rt = parseFloat(Lt))
                }
            });
            var mt = V || 0;
            return Object.defineProperty(this, "h", {
                enumerable: !0,
                get: function() {
                    return mt
                },
                set: function(Lt) {
                    isNaN(Lt) || (mt = parseFloat(Lt))
                }
            }), this
        },
        _i = function() {
            this.page = xe, this.currentPage = I, this.pages = Nt.slice(0), this.pagesContext = Jt.slice(0), this.x = qt, this.y = Pe, this.matrix = pe, this.width = Sa(I), this.height = fn(I), this.outputDestination = kt, this.id = "", this.objectNumber = -1
        };
    _i.prototype.restore = function() {
        xe = this.page, I = this.currentPage, Jt = this.pagesContext, Nt = this.pages, qt = this.x, Pe = this.y, pe = this.matrix, _a(I, this.width), dn(I, this.height), kt = this.outputDestination
    };
    var Yi = function(u, b, q, V, rt) {
        Xr.push(new _i), xe = I = 0, Nt = [], qt = u, Pe = b, pe = rt, Ri([q, V])
    };
    for (var Qn in d.beginFormObject = function(u, b, q, V, rt) {
            return Yi(u, b, q, V, rt), this
        }, d.endFormObject = function(u) {
            return (function(b) {
                if (on[b]) Xr.pop().restore();
                else {
                    var q = new _i,
                        V = "Xo" + (Object.keys(ur).length + 1).toString(10);
                    q.id = V, on[b] = V, ur[V] = q, ve.publish("addFormObject", q), Xr.pop().restore()
                }
            })(u), this
        }, d.doFormObject = function(u, b) {
            var q = ur[on[u]];
            return H("q"), H(b.toString() + " cm"), H("/" + q.id + " Do"), H("Q"), this
        }, d.getFormObject = function(u) {
            var b = ur[on[u]];
            return {
                x: b.x,
                y: b.y,
                width: b.width,
                height: b.height,
                matrix: b.matrix
            }
        }, d.save = function(u, b) {
            return u = u || "generated.pdf", (b = b || {}).returnPromise = b.returnPromise || !1, b.returnPromise === !1 ? (fi(Gn(ln()), u), typeof fi.unload == "function" && Gt.setTimeout && setTimeout(fi.unload, 911), this) : new Promise(function(q, V) {
                try {
                    var rt = fi(Gn(ln()), u);
                    typeof fi.unload == "function" && Gt.setTimeout && setTimeout(fi.unload, 911), q(rt)
                } catch (mt) {
                    V(mt.message)
                }
            })
        }, Mt.API) Mt.API.hasOwnProperty(Qn) && (Qn === "events" && Mt.API.events.length ? (function(u, b) {
        var q, V, rt;
        for (rt = b.length - 1; rt !== -1; rt--) q = b[rt][0], V = b[rt][1], u.subscribe.apply(u, [q].concat(typeof V == "function" ? [V] : V))
    })(ve, Mt.API.events) : d[Qn] = Mt.API[Qn]);

    function Sa(u) {
        return Jt[u].mediaBox.topRightX - Jt[u].mediaBox.bottomLeftX
    }

    function _a(u, b) {
        Jt[u].mediaBox.topRightX = b + Jt[u].mediaBox.bottomLeftX
    }

    function fn(u) {
        return Jt[u].mediaBox.topRightY - Jt[u].mediaBox.bottomLeftY
    }

    function dn(u, b) {
        Jt[u].mediaBox.topRightY = b + Jt[u].mediaBox.bottomLeftY
    }
    var Pa = d.getPageWidth = function(u) {
            return Sa(u = u || I) / Vt
        },
        ka = d.setPageWidth = function(u, b) {
            _a(u, b * Vt)
        },
        ti = d.getPageHeight = function(u) {
            return fn(u = u || I) / Vt
        },
        Fa = d.setPageHeight = function(u, b) {
            dn(u, b * Vt)
        };
    return d.internal = {
        pdfEscape: Br,
        getStyle: Aa,
        getFont: co,
        getFontSize: _t,
        getCharSpace: yo,
        getTextColor: Ni,
        getLineHeight: po,
        getLineHeightFactor: vo,
        getLineWidth: Xt,
        write: ue,
        getHorizontalCoordinate: hn,
        getVerticalCoordinate: cn,
        getCoordinateString: mo,
        getVerticalCoordinateString: bo,
        collections: {},
        newObject: Ie,
        newAdditionalObject: Un,
        newObjectDeferred: rr,
        newObjectDeferredBegin: nr,
        getFilters: zr,
        putStream: Ir,
        events: ve,
        scaleFactor: Vt,
        pageSize: {
            getWidth: function() {
                return Pa(I)
            },
            setWidth: function(u) {
                ka(I, u)
            },
            getHeight: function() {
                return ti(I)
            },
            setHeight: function(u) {
                Fa(I, u)
            }
        },
        encryptionOptions: w,
        encryption: Te,
        getEncryptor: function(u) {
            return w !== null ? Te.encryptor(u, 0) : function(b) {
                return b
            }
        },
        output: Hr,
        getNumberOfPages: ya,
        pages: Nt,
        out: H,
        f2: P,
        f3: M,
        getPageInfo: Ei,
        getPageInfoByObjId: ao,
        getCurrentPageInfo: oo,
        getPDFVersion: A,
        Point: $n,
        Rectangle: Gi,
        Matrix: Wt,
        hasHotfix: Yn
    }, Object.defineProperty(d.internal.pageSize, "width", {
        get: function() {
            return Pa(I)
        },
        set: function(u) {
            ka(I, u)
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(d.internal.pageSize, "height", {
        get: function() {
            return ti(I)
        },
        set: function(u) {
            Fa(I, u)
        },
        enumerable: !0,
        configurable: !0
    }), (function(u) {
        for (var b = 0, q = Ht.length; b < q; b++) {
            var V = va.call(this, u[b][0], u[b][1], u[b][2], Ht[b][3], !0);
            m === !1 && (C[V] = !0);
            var rt = u[b][0].split("-");
            ga({
                id: V,
                fontName: rt[0],
                fontStyle: rt[1] || ""
            })
        }
        ve.publish("addFonts", {
            fonts: Dt,
            dictionary: te
        })
    }).call(d, Ht), Et = "F1", ma(s, i), ve.publish("initialized"), d
}
Ii.prototype.lsbFirstWord = function(n) {
    return String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255)
}, Ii.prototype.toHexString = function(n) {
    return n.split("").map(function(e) {
        return ("0" + (255 & e.charCodeAt(0)).toString(16)).slice(-2)
    }).join("")
}, Ii.prototype.hexToBytes = function(n) {
    for (var e = [], i = 0; i < n.length; i += 2) e.push(String.fromCharCode(parseInt(n.substr(i, 2), 16)));
    return e.join("")
}, Ii.prototype.processOwnerPassword = function(n, e) {
    return zo(qo(e).substr(0, 5), n)
}, Ii.prototype.encryptor = function(n, e) {
    var i = qo(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
    return function(a) {
        return zo(i, a)
    }
}, ha.prototype.equals = function(n) {
    var e, i = "id,objectNumber,equals";
    if (!n || Se(n) !== Se(this)) return !1;
    var a = 0;
    for (e in this)
        if (!(i.indexOf(e) >= 0)) {
            if (this.hasOwnProperty(e) && !n.hasOwnProperty(e) || this[e] !== n[e]) return !1;
            a++
        }
    for (e in n) n.hasOwnProperty(e) && i.indexOf(e) < 0 && a--;
    return a === 0
}, Mt.API = {
    events: []
}, Mt.version = "3.0.3";
var De = Mt.API,
    Ho = 1,
    pi = function(n) {
        return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
    },
    Oi = function(n) {
        return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
    },
    Zt = function(n) {
        return n.toFixed(2)
    },
    En = function(n) {
        return n.toFixed(5)
    };
De.__acroform__ = {};
var Lr = function(n, e) {
        n.prototype = Object.create(e.prototype), n.prototype.constructor = n
    },
    Us = function(n) {
        return n * Ho
    },
    rn = function(n) {
        var e = new Vs,
            i = Ct.internal.getHeight(n) || 0,
            a = Ct.internal.getWidth(n) || 0;
        return e.BBox = [0, 0, Number(Zt(a)), Number(Zt(i))], e
    },
    ol = De.__acroform__.setBit = function(n, e) {
        if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
        return n | 1 << e
    },
    sl = De.__acroform__.clearBit = function(n, e) {
        if (n = n || 0, e = e || 0, isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
        return n & ~(1 << e)
    },
    ul = De.__acroform__.getBit = function(n, e) {
        if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
        return n & 1 << e ? 1 : 0
    },
    Ue = De.__acroform__.getBitForPdf = function(n, e) {
        if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
        return ul(n, e - 1)
    },
    We = De.__acroform__.setBitForPdf = function(n, e) {
        if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
        return ol(n, e - 1)
    },
    Ve = De.__acroform__.clearBitForPdf = function(n, e) {
        if (isNaN(n) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
        return sl(n, e - 1)
    },
    ll = De.__acroform__.calculateCoordinates = function(n, e) {
        var i = e.internal.getHorizontalCoordinate,
            a = e.internal.getVerticalCoordinate,
            s = n[0],
            o = n[1],
            f = n[2],
            h = n[3],
            c = {};
        return c.lowerLeft_X = i(s) || 0, c.lowerLeft_Y = a(o + h) || 0, c.upperRight_X = i(s + f) || 0, c.upperRight_Y = a(o) || 0, [Number(Zt(c.lowerLeft_X)), Number(Zt(c.lowerLeft_Y)), Number(Zt(c.upperRight_X)), Number(Zt(c.upperRight_Y))]
    },
    hl = function(n) {
        if (n.appearanceStreamContent) return n.appearanceStreamContent;
        if (n.V || n.DV) {
            var e = [],
                i = n._V || n.DV,
                a = Uo(n, i),
                s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
            e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(n.scope.__private__.encodeColorString(n.color)), e.push("/" + s + " " + Zt(a.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(a.text), e.push("ET"), e.push("Q"), e.push("EMC");
            var o = rn(n);
            return o.scope = n.scope, o.stream = e.join(`
`), o
        }
    },
    Uo = function(n, e) {
        var i = n.fontSize === 0 ? n.maxFontSize : n.fontSize,
            a = {
                text: "",
                fontSize: ""
            },
            s = (e = (e = e.substr(0, 1) == "(" ? e.substr(1) : e).substr(e.length - 1) == ")" ? e.substr(0, e.length - 1) : e).split(" ");
        s = n.multiline ? s.map(function(P) {
            return P.split(`
`)
        }) : s.map(function(P) {
            return [P]
        });
        var o = i,
            f = Ct.internal.getHeight(n) || 0;
        f = f < 0 ? -f : f;
        var h = Ct.internal.getWidth(n) || 0;
        h = h < 0 ? -h : h;
        var c = function(P, M, F) {
            if (P + 1 < s.length) {
                var _ = M + " " + s[P + 1][0];
                return Qa(_, n, F).width <= h - 4
            }
            return !1
        };
        o++;
        t: for (; o > 0;) {
            e = "", o--;
            var g, w, m = Qa("3", n, o).height,
                C = n.multiline ? f - o : (f - m) / 2,
                d = C += 2,
                B = 0,
                A = 0,
                N = 0;
            if (o <= 0) {
                e = `(...) Tj
`, e += "% Width of Text: " + Qa(e, n, o = 12).width + ", FieldWidth:" + h + `
`;
                break
            }
            for (var v = "", R = 0, z = 0; z < s.length; z++)
                if (s.hasOwnProperty(z)) {
                    var D = !1;
                    if (s[z].length !== 1 && N !== s[z].length - 1) {
                        if ((m + 2) * (R + 2) + 2 > f) continue t;
                        v += s[z][N], D = !0, A = z, z--
                    } else {
                        v = (v += s[z][N] + " ").substr(v.length - 1) == " " ? v.substr(0, v.length - 1) : v;
                        var G = parseInt(z),
                            tt = c(G, v, o),
                            st = z >= s.length - 1;
                        if (tt && !st) {
                            v += " ", N = 0;
                            continue
                        }
                        if (tt || st) {
                            if (st) A = G;
                            else if (n.multiline && (m + 2) * (R + 2) + 2 > f) continue t
                        } else {
                            if (!n.multiline || (m + 2) * (R + 2) + 2 > f) continue t;
                            A = G
                        }
                    }
                    for (var Y = "", O = B; O <= A; O++) {
                        var at = s[O];
                        if (n.multiline) {
                            if (O === A) {
                                Y += at[N] + " ", N = (N + 1) % at.length;
                                continue
                            }
                            if (O === B) {
                                Y += at[at.length - 1] + " ";
                                continue
                            }
                        }
                        Y += at[0] + " "
                    }
                    switch (Y = Y.substr(Y.length - 1) == " " ? Y.substr(0, Y.length - 1) : Y, w = Qa(Y, n, o).width, n.textAlign) {
                        case "right":
                            g = h - w - 2;
                            break;
                        case "center":
                            g = (h - w) / 2;
                            break;
                        default:
                            g = 2
                    }
                    e += Zt(g) + " " + Zt(d) + ` Td
`, e += "(" + pi(Y) + `) Tj
`, e += -Zt(g) + ` 0 Td
`, d = -(o + 2), w = 0, B = D ? A : A + 1, R++, v = ""
                }
            break
        }
        return a.text = e, a.fontSize = o, a
    },
    Qa = function(n, e, i) {
        var a = e.scope.internal.getFont(e.fontName, e.fontStyle),
            s = e.scope.getStringUnitWidth(n, {
                font: a,
                fontSize: parseFloat(i),
                charSpace: 0
            }) * parseFloat(i);
        return {
            height: e.scope.getStringUnitWidth("3", {
                font: a,
                fontSize: parseFloat(i),
                charSpace: 0
            }) * parseFloat(i) * 1.5,
            width: s
        }
    },
    cl = {
        fields: [],
        xForms: [],
        acroFormDictionaryRoot: null,
        printedOut: !1,
        internal: null,
        isInitialized: !1
    },
    fl = function(n, e) {
        var i = {
            type: "reference",
            object: n
        };
        e.internal.getPageInfo(n.page).pageContext.annotations.find(function(a) {
            return a.type === i.type && a.object === i.object
        }) === void 0 && e.internal.getPageInfo(n.page).pageContext.annotations.push(i)
    },
    dl = function(n, e) {
        if (e.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === !1)) {
            if (Gr.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(cl)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
            Ho = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new Gs, n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
                (function(i) {
                    i.internal.events.unsubscribe(i.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete i.internal.acroformPlugin.acroFormDictionaryRoot._eventID, i.internal.acroformPlugin.printedOut = !0
                })(n)
            }), n.internal.events.subscribe("buildDocument", function() {
                (function(i) {
                    i.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                    var a = i.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                    for (var s in a)
                        if (a.hasOwnProperty(s)) {
                            var o = a[s];
                            o.objId = void 0, o.hasAnnotation && fl(o, i)
                        }
                })(n)
            }), n.internal.events.subscribe("putCatalog", function() {
                (function(i) {
                    if (i.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
                    i.internal.write("/AcroForm " + i.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
                })(n)
            }), n.internal.events.subscribe("postPutPages", function(i) {
                (function(a, s) {
                    var o = !a;
                    for (var f in a || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), a = a || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
                        if (a.hasOwnProperty(f)) {
                            var h = a[f],
                                c = [],
                                g = h.Rect;
                            if (h.Rect && (h.Rect = ll(h.Rect, s)), s.internal.newObjectDeferredBegin(h.objId, !0), h.DA = Ct.createDefaultAppearanceStream(h), Se(h) === "object" && typeof h.getKeyValueListForStream == "function" && (c = h.getKeyValueListForStream()), h.Rect = g, h.hasAppearanceStream && !h.appearanceStreamContent) {
                                var w = hl(h);
                                c.push({
                                    key: "AP",
                                    value: "<</N " + w + ">>"
                                }), s.internal.acroformPlugin.xForms.push(w)
                            }
                            if (h.appearanceStreamContent) {
                                var m = "";
                                for (var C in h.appearanceStreamContent)
                                    if (h.appearanceStreamContent.hasOwnProperty(C)) {
                                        var d = h.appearanceStreamContent[C];
                                        if (m += "/" + C + " ", m += "<<", Object.keys(d).length >= 1 || Array.isArray(d)) {
                                            for (var f in d)
                                                if (d.hasOwnProperty(f)) {
                                                    var B = d[f];
                                                    typeof B == "function" && (B = B.call(s, h)), m += "/" + f + " " + B + " ", s.internal.acroformPlugin.xForms.indexOf(B) >= 0 || s.internal.acroformPlugin.xForms.push(B)
                                                }
                                        } else typeof(B = d) == "function" && (B = B.call(s, h)), m += "/" + f + " " + B, s.internal.acroformPlugin.xForms.indexOf(B) >= 0 || s.internal.acroformPlugin.xForms.push(B);
                                        m += ">>"
                                    }
                                c.push({
                                    key: "AP",
                                    value: `<<
` + m + ">>"
                                })
                            }
                            s.internal.putStream({
                                additionalKeyValues: c,
                                objectId: h.objId
                            }), s.internal.out("endobj")
                        }
                    o && (function(A, N) {
                        for (var v in A)
                            if (A.hasOwnProperty(v)) {
                                var R = v,
                                    z = A[v];
                                N.internal.newObjectDeferredBegin(z.objId, !0), Se(z) === "object" && typeof z.putStream == "function" && z.putStream(), delete A[R]
                            }
                    })(s.internal.acroformPlugin.xForms, s)
                })(i, n)
            }), n.internal.acroformPlugin.isInitialized = !0
        }
    },
    Ws = De.__acroform__.arrayToPdfArray = function(n, e, i) {
        var a = function(f) {
            return f
        };
        if (Array.isArray(n)) {
            for (var s = "[", o = 0; o < n.length; o++) switch (o !== 0 && (s += " "), Se(n[o])) {
                case "boolean":
                case "number":
                case "object":
                    s += n[o].toString();
                    break;
                case "string":
                    n[o].substr(0, 1) !== "/" ? (e !== void 0 && i && (a = i.internal.getEncryptor(e)), s += "(" + pi(a(n[o].toString())) + ")") : s += n[o].toString()
            }
            return s + "]"
        }
        throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
    },
    Wo = function(n, e, i) {
        var a = function(s) {
            return s
        };
        return e !== void 0 && i && (a = i.internal.getEncryptor(e)), (n = n || "").toString(), "(" + pi(a(n)) + ")"
    },
    nn = function() {
        this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
            get: function() {
                if (this._objId === void 0) {
                    if (this.scope === void 0) return;
                    this._objId = this.scope.internal.newObjectDeferred()
                }
                return this._objId
            },
            set: function(n) {
                this._objId = n
            }
        }), Object.defineProperty(this, "scope", {
            value: this._scope,
            writable: !0
        })
    };
nn.prototype.toString = function() {
    return this.objId + " 0 R"
}, nn.prototype.putStream = function() {
    var n = this.getKeyValueListForStream();
    this.scope.internal.putStream({
        data: this.stream,
        additionalKeyValues: n,
        objectId: this.objId
    }), this.scope.internal.out("endobj")
}, nn.prototype.getKeyValueListForStream = function() {
    var n = [],
        e = Object.getOwnPropertyNames(this).filter(function(o) {
            return o != "content" && o != "appearanceStreamContent" && o != "scope" && o != "objId" && o.substring(0, 1) != "_"
        });
    for (var i in e)
        if (Object.getOwnPropertyDescriptor(this, e[i]).configurable === !1) {
            var a = e[i],
                s = this[a];
            s && (Array.isArray(s) ? n.push({
                key: a,
                value: Ws(s, this.objId, this.scope)
            }) : s instanceof nn ? (s.scope = this.scope, n.push({
                key: a,
                value: s.objId + " 0 R"
            })) : typeof s != "function" && n.push({
                key: a,
                value: s
            }))
        }
    return n
};
var Vs = function() {
    nn.call(this), Object.defineProperty(this, "Type", {
        value: "/XObject",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "Subtype", {
        value: "/Form",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "FormType", {
        value: 1,
        configurable: !1,
        writable: !0
    });
    var n, e = [];
    Object.defineProperty(this, "BBox", {
        configurable: !1,
        get: function() {
            return e
        },
        set: function(i) {
            e = i
        }
    }), Object.defineProperty(this, "Resources", {
        value: "2 0 R",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "stream", {
        enumerable: !1,
        configurable: !0,
        set: function(i) {
            n = i.trim()
        },
        get: function() {
            return n || null
        }
    })
};
Lr(Vs, nn);
var Gs = function() {
    nn.call(this);
    var n, e = [];
    Object.defineProperty(this, "Kids", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return e.length > 0 ? e : void 0
        }
    }), Object.defineProperty(this, "Fields", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return e
        }
    }), Object.defineProperty(this, "DA", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (n) {
                var i = function(a) {
                    return a
                };
                return this.scope && (i = this.scope.internal.getEncryptor(this.objId)), "(" + pi(i(n)) + ")"
            }
        },
        set: function(i) {
            n = i
        }
    })
};
Lr(Gs, nn);
var Gr = function n() {
    nn.call(this);
    var e = 4;
    Object.defineProperty(this, "F", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return e
        },
        set: function(v) {
            if (isNaN(v)) throw new Error('Invalid value "' + v + '" for attribute F supplied.');
            e = v
        }
    }), Object.defineProperty(this, "showWhenPrinted", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(e, 3)
        },
        set: function(v) {
            v ? this.F = We(e, 3) : this.F = Ve(e, 3)
        }
    });
    var i = 0;
    Object.defineProperty(this, "Ff", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return i
        },
        set: function(v) {
            if (isNaN(v)) throw new Error('Invalid value "' + v + '" for attribute Ff supplied.');
            i = v
        }
    });
    var a = [];
    Object.defineProperty(this, "Rect", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (a.length !== 0) return a
        },
        set: function(v) {
            a = v !== void 0 ? v : []
        }
    }), Object.defineProperty(this, "x", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !a || isNaN(a[0]) ? 0 : a[0]
        },
        set: function(v) {
            a[0] = v
        }
    }), Object.defineProperty(this, "y", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !a || isNaN(a[1]) ? 0 : a[1]
        },
        set: function(v) {
            a[1] = v
        }
    }), Object.defineProperty(this, "width", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !a || isNaN(a[2]) ? 0 : a[2]
        },
        set: function(v) {
            a[2] = v
        }
    }), Object.defineProperty(this, "height", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !a || isNaN(a[3]) ? 0 : a[3]
        },
        set: function(v) {
            a[3] = v
        }
    });
    var s = "";
    Object.defineProperty(this, "FT", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return s
        },
        set: function(v) {
            switch (v) {
                case "/Btn":
                case "/Tx":
                case "/Ch":
                case "/Sig":
                    s = v;
                    break;
                default:
                    throw new Error('Invalid value "' + v + '" for attribute FT supplied.')
            }
        }
    });
    var o = null;
    Object.defineProperty(this, "T", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            if (!o || o.length < 1) {
                if (this instanceof to) return;
                o = "FieldObject" + n.FieldNum++
            }
            var v = function(R) {
                return R
            };
            return this.scope && (v = this.scope.internal.getEncryptor(this.objId)), "(" + pi(v(o)) + ")"
        },
        set: function(v) {
            o = v.toString()
        }
    }), Object.defineProperty(this, "fieldName", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return o
        },
        set: function(v) {
            o = v
        }
    });
    var f = "helvetica";
    Object.defineProperty(this, "fontName", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return f
        },
        set: function(v) {
            f = v
        }
    });
    var h = "normal";
    Object.defineProperty(this, "fontStyle", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return h
        },
        set: function(v) {
            h = v
        }
    });
    var c = 0;
    Object.defineProperty(this, "fontSize", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return c
        },
        set: function(v) {
            c = v
        }
    });
    var g = void 0;
    Object.defineProperty(this, "maxFontSize", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return g === void 0 ? 50 / Ho : g
        },
        set: function(v) {
            g = v
        }
    });
    var w = "black";
    Object.defineProperty(this, "color", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return w
        },
        set: function(v) {
            w = v
        }
    });
    var m = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            if (!(!m || this instanceof to || this instanceof qn)) return Wo(m, this.objId, this.scope)
        },
        set: function(v) {
            v = v.toString(), m = v
        }
    });
    var C = null;
    Object.defineProperty(this, "DV", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (C) return this instanceof er == 0 ? Wo(C, this.objId, this.scope) : C
        },
        set: function(v) {
            v = v.toString(), C = this instanceof er == 0 ? v.substr(0, 1) === "(" ? Oi(v.substr(1, v.length - 2)) : Oi(v) : v
        }
    }), Object.defineProperty(this, "defaultValue", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return this instanceof er == 1 ? Oi(C.substr(1, C.length - 1)) : C
        },
        set: function(v) {
            v = v.toString(), C = this instanceof er == 1 ? "/" + v : v
        }
    });
    var d = null;
    Object.defineProperty(this, "_V", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (d) return d
        },
        set: function(v) {
            this.V = v
        }
    }), Object.defineProperty(this, "V", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (d) return this instanceof er == 0 ? Wo(d, this.objId, this.scope) : d
        },
        set: function(v) {
            v = v.toString(), d = this instanceof er == 0 ? v.substr(0, 1) === "(" ? Oi(v.substr(1, v.length - 2)) : Oi(v) : v
        }
    }), Object.defineProperty(this, "value", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return this instanceof er == 1 ? Oi(d.substr(1, d.length - 1)) : d
        },
        set: function(v) {
            v = v.toString(), d = this instanceof er == 1 ? "/" + v : v
        }
    }), Object.defineProperty(this, "hasAnnotation", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return this.Rect
        }
    }), Object.defineProperty(this, "Type", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return this.hasAnnotation ? "/Annot" : null
        }
    }), Object.defineProperty(this, "Subtype", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return this.hasAnnotation ? "/Widget" : null
        }
    });
    var B, A = !1;
    Object.defineProperty(this, "hasAppearanceStream", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return A
        },
        set: function(v) {
            v = !!v, A = v
        }
    }), Object.defineProperty(this, "page", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            if (B) return B
        },
        set: function(v) {
            B = v
        }
    }), Object.defineProperty(this, "readOnly", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 1)
        },
        set: function(v) {
            v ? this.Ff = We(this.Ff, 1) : this.Ff = Ve(this.Ff, 1)
        }
    }), Object.defineProperty(this, "required", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 2)
        },
        set: function(v) {
            v ? this.Ff = We(this.Ff, 2) : this.Ff = Ve(this.Ff, 2)
        }
    }), Object.defineProperty(this, "noExport", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 3)
        },
        set: function(v) {
            v ? this.Ff = We(this.Ff, 3) : this.Ff = Ve(this.Ff, 3)
        }
    });
    var N = null;
    Object.defineProperty(this, "Q", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            if (N !== null) return N
        },
        set: function(v) {
            if ([0, 1, 2].indexOf(v) === -1) throw new Error('Invalid value "' + v + '" for attribute Q supplied.');
            N = v
        }
    }), Object.defineProperty(this, "textAlign", {
        get: function() {
            var v;
            switch (N) {
                case 0:
                default:
                    v = "left";
                    break;
                case 1:
                    v = "center";
                    break;
                case 2:
                    v = "right"
            }
            return v
        },
        configurable: !0,
        enumerable: !0,
        set: function(v) {
            switch (v) {
                case "right":
                case 2:
                    N = 2;
                    break;
                case "center":
                case 1:
                    N = 1;
                    break;
                default:
                    N = 0
            }
        }
    })
};
Lr(Gr, nn);
var gi = function() {
    Gr.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
    var n = 0;
    Object.defineProperty(this, "TI", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return n
        },
        set: function(i) {
            n = i
        }
    }), Object.defineProperty(this, "topIndex", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return n
        },
        set: function(i) {
            n = i
        }
    });
    var e = [];
    Object.defineProperty(this, "Opt", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return Ws(e, this.objId, this.scope)
        },
        set: function(i) {
            var a, s;
            s = [], typeof(a = i) == "string" && (s = (function(o, f, h) {
                h || (h = 1);
                for (var c, g = []; c = f.exec(o);) g.push(c[h]);
                return g
            })(a, /\((.*?)\)/g)), e = s
        }
    }), this.getOptions = function() {
        return e
    }, this.setOptions = function(i) {
        e = i, this.sort && e.sort()
    }, this.addOption = function(i) {
        i = (i = i || "").toString(), e.push(i), this.sort && e.sort()
    }, this.removeOption = function(i, a) {
        for (a = a || !1, i = (i = i || "").toString(); e.indexOf(i) !== -1 && (e.splice(e.indexOf(i), 1), a !== !1););
    }, Object.defineProperty(this, "combo", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 18)
        },
        set: function(i) {
            i ? this.Ff = We(this.Ff, 18) : this.Ff = Ve(this.Ff, 18)
        }
    }), Object.defineProperty(this, "edit", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 19)
        },
        set: function(i) {
            this.combo === !0 && (i ? this.Ff = We(this.Ff, 19) : this.Ff = Ve(this.Ff, 19))
        }
    }), Object.defineProperty(this, "sort", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 20)
        },
        set: function(i) {
            i ? (this.Ff = We(this.Ff, 20), e.sort()) : this.Ff = Ve(this.Ff, 20)
        }
    }), Object.defineProperty(this, "multiSelect", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 22)
        },
        set: function(i) {
            i ? this.Ff = We(this.Ff, 22) : this.Ff = Ve(this.Ff, 22)
        }
    }), Object.defineProperty(this, "doNotSpellCheck", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 23)
        },
        set: function(i) {
            i ? this.Ff = We(this.Ff, 23) : this.Ff = Ve(this.Ff, 23)
        }
    }), Object.defineProperty(this, "commitOnSelChange", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 27)
        },
        set: function(i) {
            i ? this.Ff = We(this.Ff, 27) : this.Ff = Ve(this.Ff, 27)
        }
    }), this.hasAppearanceStream = !1
};
Lr(gi, Gr);
var vi = function() {
    gi.call(this), this.fontName = "helvetica", this.combo = !1
};
Lr(vi, gi);
var mi = function() {
    vi.call(this), this.combo = !0
};
Lr(mi, vi);
var ca = function() {
    mi.call(this), this.edit = !0
};
Lr(ca, mi);
var er = function() {
    Gr.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 15)
        },
        set: function(i) {
            i ? this.Ff = We(this.Ff, 15) : this.Ff = Ve(this.Ff, 15)
        }
    }), Object.defineProperty(this, "radio", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 16)
        },
        set: function(i) {
            i ? this.Ff = We(this.Ff, 16) : this.Ff = Ve(this.Ff, 16)
        }
    }), Object.defineProperty(this, "pushButton", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 17)
        },
        set: function(i) {
            i ? this.Ff = We(this.Ff, 17) : this.Ff = Ve(this.Ff, 17)
        }
    }), Object.defineProperty(this, "radioIsUnison", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 26)
        },
        set: function(i) {
            i ? this.Ff = We(this.Ff, 26) : this.Ff = Ve(this.Ff, 26)
        }
    });
    var n, e = {};
    Object.defineProperty(this, "MK", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            var i = function(o) {
                return o
            };
            if (this.scope && (i = this.scope.internal.getEncryptor(this.objId)), Object.keys(e).length !== 0) {
                var a, s = [];
                for (a in s.push("<<"), e) s.push("/" + a + " (" + pi(i(e[a])) + ")");
                return s.push(">>"), s.join(`
`)
            }
        },
        set: function(i) {
            Se(i) === "object" && (e = i)
        }
    }), Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return e.CA || ""
        },
        set: function(i) {
            typeof i == "string" && (e.CA = i)
        }
    }), Object.defineProperty(this, "AS", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return n
        },
        set: function(i) {
            n = i
        }
    }), Object.defineProperty(this, "appearanceState", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return n.substr(1, n.length - 1)
        },
        set: function(i) {
            n = "/" + i
        }
    })
};
Lr(er, Gr);
var fa = function() {
    er.call(this), this.pushButton = !0
};
Lr(fa, er);
var bi = function() {
    er.call(this), this.radio = !0, this.pushButton = !1;
    var n = [];
    Object.defineProperty(this, "Kids", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return n
        },
        set: function(e) {
            n = e !== void 0 ? e : []
        }
    })
};
Lr(bi, er);
var to = function() {
    var n, e;
    Gr.call(this), Object.defineProperty(this, "Parent", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return n
        },
        set: function(s) {
            n = s
        }
    }), Object.defineProperty(this, "optionName", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return e
        },
        set: function(s) {
            e = s
        }
    });
    var i, a = {};
    Object.defineProperty(this, "MK", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            var s = function(h) {
                return h
            };
            this.scope && (s = this.scope.internal.getEncryptor(this.objId));
            var o, f = [];
            for (o in f.push("<<"), a) f.push("/" + o + " (" + pi(s(a[o])) + ")");
            return f.push(">>"), f.join(`
`)
        },
        set: function(s) {
            Se(s) === "object" && (a = s)
        }
    }), Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return a.CA || ""
        },
        set: function(s) {
            typeof s == "string" && (a.CA = s)
        }
    }), Object.defineProperty(this, "AS", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return i
        },
        set: function(s) {
            i = s
        }
    }), Object.defineProperty(this, "appearanceState", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return i.substr(1, i.length - 1)
        },
        set: function(s) {
            i = "/" + s
        }
    }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Ct.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
};
Lr(to, Gr), bi.prototype.setAppearance = function(n) {
    if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
    for (var e in this.Kids)
        if (this.Kids.hasOwnProperty(e)) {
            var i = this.Kids[e];
            i.appearanceStreamContent = n.createAppearanceStream(i.optionName), i.caption = n.getCA()
        }
}, bi.prototype.createOption = function(n) {
    var e = new to;
    return e.Parent = this, e.optionName = n, this.Kids.push(e), pl.call(this.scope, e), e
};
var da = function() {
    er.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Ct.CheckBox.createAppearanceStream()
};
Lr(da, er);
var qn = function() {
    Gr.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 13)
        },
        set: function(e) {
            e ? this.Ff = We(this.Ff, 13) : this.Ff = Ve(this.Ff, 13)
        }
    }), Object.defineProperty(this, "fileSelect", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 21)
        },
        set: function(e) {
            e ? this.Ff = We(this.Ff, 21) : this.Ff = Ve(this.Ff, 21)
        }
    }), Object.defineProperty(this, "doNotSpellCheck", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 23)
        },
        set: function(e) {
            e ? this.Ff = We(this.Ff, 23) : this.Ff = Ve(this.Ff, 23)
        }
    }), Object.defineProperty(this, "doNotScroll", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 24)
        },
        set: function(e) {
            e ? this.Ff = We(this.Ff, 24) : this.Ff = Ve(this.Ff, 24)
        }
    }), Object.defineProperty(this, "comb", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 25)
        },
        set: function(e) {
            e ? this.Ff = We(this.Ff, 25) : this.Ff = Ve(this.Ff, 25)
        }
    }), Object.defineProperty(this, "richText", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 26)
        },
        set: function(e) {
            e ? this.Ff = We(this.Ff, 26) : this.Ff = Ve(this.Ff, 26)
        }
    });
    var n = null;
    Object.defineProperty(this, "MaxLen", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return n
        },
        set: function(e) {
            n = e
        }
    }), Object.defineProperty(this, "maxLength", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return n
        },
        set: function(e) {
            Number.isInteger(e) && (n = e)
        }
    }), Object.defineProperty(this, "hasAppearanceStream", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return this.V || this.DV
        }
    })
};
Lr(qn, Gr);
var pa = function() {
    qn.call(this), Object.defineProperty(this, "password", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !!Ue(this.Ff, 14)
        },
        set: function(n) {
            n ? this.Ff = We(this.Ff, 14) : this.Ff = Ve(this.Ff, 14)
        }
    }), this.password = !0
};
Lr(pa, qn);
var Ct = {
    CheckBox: {
        createAppearanceStream: function() {
            return {
                N: {
                    On: Ct.CheckBox.YesNormal
                },
                D: {
                    On: Ct.CheckBox.YesPushDown,
                    Off: Ct.CheckBox.OffPushDown
                }
            }
        },
        YesPushDown: function(n) {
            var e = rn(n);
            e.scope = n.scope;
            var i = [],
                a = n.scope.internal.getFont(n.fontName, n.fontStyle).id,
                s = n.scope.__private__.encodeColorString(n.color),
                o = Uo(n, n.caption);
            return i.push("0.749023 g"), i.push("0 0 " + Zt(Ct.internal.getWidth(n)) + " " + Zt(Ct.internal.getHeight(n)) + " re"), i.push("f"), i.push("BMC"), i.push("q"), i.push("0 0 1 rg"), i.push("/" + a + " " + Zt(o.fontSize) + " Tf " + s), i.push("BT"), i.push(o.text), i.push("ET"), i.push("Q"), i.push("EMC"), e.stream = i.join(`
`), e
        },
        YesNormal: function(n) {
            var e = rn(n);
            e.scope = n.scope;
            var i = n.scope.internal.getFont(n.fontName, n.fontStyle).id,
                a = n.scope.__private__.encodeColorString(n.color),
                s = [],
                o = Ct.internal.getHeight(n),
                f = Ct.internal.getWidth(n),
                h = Uo(n, n.caption);
            return s.push("1 g"), s.push("0 0 " + Zt(f) + " " + Zt(o) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + Zt(f - 1) + " " + Zt(o - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + i + " " + Zt(h.fontSize) + " Tf " + a), s.push(h.text), s.push("ET"), s.push("Q"), e.stream = s.join(`
`), e
        },
        OffPushDown: function(n) {
            var e = rn(n);
            e.scope = n.scope;
            var i = [];
            return i.push("0.749023 g"), i.push("0 0 " + Zt(Ct.internal.getWidth(n)) + " " + Zt(Ct.internal.getHeight(n)) + " re"), i.push("f"), e.stream = i.join(`
`), e
        }
    },
    RadioButton: {
        Circle: {
            createAppearanceStream: function(n) {
                var e = {
                    D: {
                        Off: Ct.RadioButton.Circle.OffPushDown
                    },
                    N: {}
                };
                return e.N[n] = Ct.RadioButton.Circle.YesNormal, e.D[n] = Ct.RadioButton.Circle.YesPushDown, e
            },
            getCA: function() {
                return "l"
            },
            YesNormal: function(n) {
                var e = rn(n);
                e.scope = n.scope;
                var i = [],
                    a = Ct.internal.getWidth(n) <= Ct.internal.getHeight(n) ? Ct.internal.getWidth(n) / 4 : Ct.internal.getHeight(n) / 4;
                a = Number((.9 * a).toFixed(5));
                var s = Ct.internal.Bezier_C,
                    o = Number((a * s).toFixed(5));
                return i.push("q"), i.push("1 0 0 1 " + En(Ct.internal.getWidth(n) / 2) + " " + En(Ct.internal.getHeight(n) / 2) + " cm"), i.push(a + " 0 m"), i.push(a + " " + o + " " + o + " " + a + " 0 " + a + " c"), i.push("-" + o + " " + a + " -" + a + " " + o + " -" + a + " 0 c"), i.push("-" + a + " -" + o + " -" + o + " -" + a + " 0 -" + a + " c"), i.push(o + " -" + a + " " + a + " -" + o + " " + a + " 0 c"), i.push("f"), i.push("Q"), e.stream = i.join(`
`), e
            },
            YesPushDown: function(n) {
                var e = rn(n);
                e.scope = n.scope;
                var i = [],
                    a = Ct.internal.getWidth(n) <= Ct.internal.getHeight(n) ? Ct.internal.getWidth(n) / 4 : Ct.internal.getHeight(n) / 4;
                a = Number((.9 * a).toFixed(5));
                var s = Number((2 * a).toFixed(5)),
                    o = Number((s * Ct.internal.Bezier_C).toFixed(5)),
                    f = Number((a * Ct.internal.Bezier_C).toFixed(5));
                return i.push("0.749023 g"), i.push("q"), i.push("1 0 0 1 " + En(Ct.internal.getWidth(n) / 2) + " " + En(Ct.internal.getHeight(n) / 2) + " cm"), i.push(s + " 0 m"), i.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), i.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), i.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), i.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), i.push("f"), i.push("Q"), i.push("0 g"), i.push("q"), i.push("1 0 0 1 " + En(Ct.internal.getWidth(n) / 2) + " " + En(Ct.internal.getHeight(n) / 2) + " cm"), i.push(a + " 0 m"), i.push(a + " " + f + " " + f + " " + a + " 0 " + a + " c"), i.push("-" + f + " " + a + " -" + a + " " + f + " -" + a + " 0 c"), i.push("-" + a + " -" + f + " -" + f + " -" + a + " 0 -" + a + " c"), i.push(f + " -" + a + " " + a + " -" + f + " " + a + " 0 c"), i.push("f"), i.push("Q"), e.stream = i.join(`
`), e
            },
            OffPushDown: function(n) {
                var e = rn(n);
                e.scope = n.scope;
                var i = [],
                    a = Ct.internal.getWidth(n) <= Ct.internal.getHeight(n) ? Ct.internal.getWidth(n) / 4 : Ct.internal.getHeight(n) / 4;
                a = Number((.9 * a).toFixed(5));
                var s = Number((2 * a).toFixed(5)),
                    o = Number((s * Ct.internal.Bezier_C).toFixed(5));
                return i.push("0.749023 g"), i.push("q"), i.push("1 0 0 1 " + En(Ct.internal.getWidth(n) / 2) + " " + En(Ct.internal.getHeight(n) / 2) + " cm"), i.push(s + " 0 m"), i.push(s + " " + o + " " + o + " " + s + " 0 " + s + " c"), i.push("-" + o + " " + s + " -" + s + " " + o + " -" + s + " 0 c"), i.push("-" + s + " -" + o + " -" + o + " -" + s + " 0 -" + s + " c"), i.push(o + " -" + s + " " + s + " -" + o + " " + s + " 0 c"), i.push("f"), i.push("Q"), e.stream = i.join(`
`), e
            }
        },
        Cross: {
            createAppearanceStream: function(n) {
                var e = {
                    D: {
                        Off: Ct.RadioButton.Cross.OffPushDown
                    },
                    N: {}
                };
                return e.N[n] = Ct.RadioButton.Cross.YesNormal, e.D[n] = Ct.RadioButton.Cross.YesPushDown, e
            },
            getCA: function() {
                return "8"
            },
            YesNormal: function(n) {
                var e = rn(n);
                e.scope = n.scope;
                var i = [],
                    a = Ct.internal.calculateCross(n);
                return i.push("q"), i.push("1 1 " + Zt(Ct.internal.getWidth(n) - 2) + " " + Zt(Ct.internal.getHeight(n) - 2) + " re"), i.push("W"), i.push("n"), i.push(Zt(a.x1.x) + " " + Zt(a.x1.y) + " m"), i.push(Zt(a.x2.x) + " " + Zt(a.x2.y) + " l"), i.push(Zt(a.x4.x) + " " + Zt(a.x4.y) + " m"), i.push(Zt(a.x3.x) + " " + Zt(a.x3.y) + " l"), i.push("s"), i.push("Q"), e.stream = i.join(`
`), e
            },
            YesPushDown: function(n) {
                var e = rn(n);
                e.scope = n.scope;
                var i = Ct.internal.calculateCross(n),
                    a = [];
                return a.push("0.749023 g"), a.push("0 0 " + Zt(Ct.internal.getWidth(n)) + " " + Zt(Ct.internal.getHeight(n)) + " re"), a.push("f"), a.push("q"), a.push("1 1 " + Zt(Ct.internal.getWidth(n) - 2) + " " + Zt(Ct.internal.getHeight(n) - 2) + " re"), a.push("W"), a.push("n"), a.push(Zt(i.x1.x) + " " + Zt(i.x1.y) + " m"), a.push(Zt(i.x2.x) + " " + Zt(i.x2.y) + " l"), a.push(Zt(i.x4.x) + " " + Zt(i.x4.y) + " m"), a.push(Zt(i.x3.x) + " " + Zt(i.x3.y) + " l"), a.push("s"), a.push("Q"), e.stream = a.join(`
`), e
            },
            OffPushDown: function(n) {
                var e = rn(n);
                e.scope = n.scope;
                var i = [];
                return i.push("0.749023 g"), i.push("0 0 " + Zt(Ct.internal.getWidth(n)) + " " + Zt(Ct.internal.getHeight(n)) + " re"), i.push("f"), e.stream = i.join(`
`), e
            }
        }
    },
    createDefaultAppearanceStream: function(n) {
        var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id,
            i = n.scope.__private__.encodeColorString(n.color);
        return "/" + e + " " + n.fontSize + " Tf " + i
    }
};
Ct.internal = {
    Bezier_C: .551915024494,
    calculateCross: function(n) {
        var e = Ct.internal.getWidth(n),
            i = Ct.internal.getHeight(n),
            a = Math.min(e, i);
        return {
            x1: {
                x: (e - a) / 2,
                y: (i - a) / 2 + a
            },
            x2: {
                x: (e - a) / 2 + a,
                y: (i - a) / 2
            },
            x3: {
                x: (e - a) / 2,
                y: (i - a) / 2
            },
            x4: {
                x: (e - a) / 2 + a,
                y: (i - a) / 2 + a
            }
        }
    }
}, Ct.internal.getWidth = function(n) {
    var e = 0;
    return Se(n) === "object" && (e = Us(n.Rect[2])), e
}, Ct.internal.getHeight = function(n) {
    var e = 0;
    return Se(n) === "object" && (e = Us(n.Rect[3])), e
};
var pl = De.addField = function(n) {
    if (dl(this, n), !(n instanceof Gr)) throw new Error("Invalid argument passed to jsPDF.addField.");
    var e;
    return (e = n).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this
};
De.AcroFormChoiceField = gi, De.AcroFormListBox = vi, De.AcroFormComboBox = mi, De.AcroFormEditBox = ca, De.AcroFormButton = er, De.AcroFormPushButton = fa, De.AcroFormRadioButton = bi, De.AcroFormCheckBox = da, De.AcroFormTextField = qn, De.AcroFormPasswordField = pa, De.AcroFormAppearance = Ct, De.AcroForm = {
    ChoiceField: gi,
    ListBox: vi,
    ComboBox: mi,
    EditBox: ca,
    Button: er,
    PushButton: fa,
    RadioButton: bi,
    CheckBox: da,
    TextField: qn,
    PasswordField: pa,
    Appearance: Ct
}, Mt.AcroForm = {
    ChoiceField: gi,
    ListBox: vi,
    ComboBox: mi,
    EditBox: ca,
    Button: er,
    PushButton: fa,
    RadioButton: bi,
    CheckBox: da,
    TextField: qn,
    PasswordField: pa,
    Appearance: Ct
};
var gl = Mt.AcroForm;

function Ys(n) {
    return n.reduce(function(e, i, a) {
        return e[i] = a, e
    }, {})
}(function(n) {
    var e = "addImage_";
    n.__addimage__ = {};
    var i = "UNKNOWN",
        a = {
            PNG: [
                [137, 80, 78, 71]
            ],
            TIFF: [
                [77, 77, 0, 42],
                [73, 73, 42, 0]
            ],
            JPEG: [
                [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
                [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
                [255, 216, 255, 219],
                [255, 216, 255, 238]
            ],
            JPEG2000: [
                [0, 0, 0, 12, 106, 80, 32, 32]
            ],
            GIF87a: [
                [71, 73, 70, 56, 55, 97]
            ],
            GIF89a: [
                [71, 73, 70, 56, 57, 97]
            ],
            WEBP: [
                [82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]
            ],
            BMP: [
                [66, 77],
                [66, 65],
                [67, 73],
                [67, 80],
                [73, 67],
                [80, 84]
            ]
        },
        s = n.__addimage__.getImageFileTypeByImageData = function(P, M) {
            var F, _, J, W, nt, X = i;
            if ((M = M || i) === "RGBA" || P.data !== void 0 && P.data instanceof Uint8ClampedArray && "height" in P && "width" in P) return "RGBA";
            if (tt(P))
                for (nt in a)
                    for (J = a[nt], F = 0; F < J.length; F += 1) {
                        for (W = !0, _ = 0; _ < J[F].length; _ += 1)
                            if (J[F][_] !== void 0 && J[F][_] !== P[_]) {
                                W = !1;
                                break
                            }
                        if (W === !0) {
                            X = nt;
                            break
                        }
                    } else
                        for (nt in a)
                            for (J = a[nt], F = 0; F < J.length; F += 1) {
                                for (W = !0, _ = 0; _ < J[F].length; _ += 1)
                                    if (J[F][_] !== void 0 && J[F][_] !== P.charCodeAt(_)) {
                                        W = !1;
                                        break
                                    }
                                if (W === !0) {
                                    X = nt;
                                    break
                                }
                            }
            return X === i && M !== i && (X = M), X
        },
        o = function P(M) {
            for (var F = this.internal.write, _ = this.internal.putStream, J = (0, this.internal.getFilters)(); J.indexOf("FlateEncode") !== -1;) J.splice(J.indexOf("FlateEncode"), 1);
            M.objectId = this.internal.newObject();
            var W = [];
            if (W.push({
                    key: "Type",
                    value: "/XObject"
                }), W.push({
                    key: "Subtype",
                    value: "/Image"
                }), W.push({
                    key: "Width",
                    value: M.width
                }), W.push({
                    key: "Height",
                    value: M.height
                }), M.colorSpace === v.INDEXED ? W.push({
                    key: "ColorSpace",
                    value: "[/Indexed /DeviceRGB " + (M.palette.length / 3 - 1) + " " + ("sMask" in M && M.sMask !== void 0 ? M.objectId + 2 : M.objectId + 1) + " 0 R]"
                }) : (W.push({
                    key: "ColorSpace",
                    value: "/" + M.colorSpace
                }), M.colorSpace === v.DEVICE_CMYK && W.push({
                    key: "Decode",
                    value: "[1 0 1 0 1 0 1 0]"
                })), W.push({
                    key: "BitsPerComponent",
                    value: M.bitsPerComponent
                }), "decodeParameters" in M && M.decodeParameters !== void 0 && W.push({
                    key: "DecodeParms",
                    value: "<<" + M.decodeParameters + ">>"
                }), "transparency" in M && Array.isArray(M.transparency) && M.transparency.length > 0) {
                for (var nt = "", X = 0, et = M.transparency.length; X < et; X++) nt += M.transparency[X] + " " + M.transparency[X] + " ";
                W.push({
                    key: "Mask",
                    value: "[" + nt + "]"
                })
            }
            M.sMask !== void 0 && W.push({
                key: "SMask",
                value: M.objectId + 1 + " 0 R"
            });
            var ht = M.filter !== void 0 ? ["/" + M.filter] : void 0;
            if (_({
                    data: M.data,
                    additionalKeyValues: W,
                    alreadyAppliedFilters: ht,
                    objectId: M.objectId
                }), F("endobj"), "sMask" in M && M.sMask !== void 0) {
                var ct, L = (ct = M.sMaskBitsPerComponent) !== null && ct !== void 0 ? ct : M.bitsPerComponent,
                    I = {
                        width: M.width,
                        height: M.height,
                        colorSpace: "DeviceGray",
                        bitsPerComponent: L,
                        data: M.sMask
                    };
                "filter" in M && (I.decodeParameters = "/Predictor ".concat(M.predictor, " /Colors 1 /BitsPerComponent ").concat(L, " /Columns ").concat(M.width), I.filter = M.filter), P.call(this, I)
            }
            if (M.colorSpace === v.INDEXED) {
                var U = this.internal.newObject();
                _({
                    data: Y(new Uint8Array(M.palette)),
                    objectId: U
                }), F("endobj")
            }
        },
        f = function() {
            var P = this.internal.collections[e + "images"];
            for (var M in P) o.call(this, P[M])
        },
        h = function() {
            var P, M = this.internal.collections[e + "images"],
                F = this.internal.write;
            for (var _ in M) F("/I" + (P = M[_]).index, P.objectId, "0", "R")
        },
        c = function() {
            this.internal.collections[e + "images"] || (this.internal.collections[e + "images"] = {}, this.internal.events.subscribe("putResources", f), this.internal.events.subscribe("putXobjectDict", h))
        },
        g = function() {
            var P = this.internal.collections[e + "images"];
            return c.call(this), P
        },
        w = function() {
            return Object.keys(this.internal.collections[e + "images"]).length
        },
        m = function(P) {
            return typeof n["process" + P.toUpperCase()] == "function"
        },
        C = function(P) {
            return Se(P) === "object" && P.nodeType === 1
        },
        d = function(P, M) {
            if (P.nodeName === "IMG" && P.hasAttribute("src")) {
                var F = "" + P.getAttribute("src");
                if (F.indexOf("data:image/") === 0) return Za(unescape(F).split("base64,").pop());
                var _ = n.loadFile(F, !0);
                if (_ !== void 0) return _
            }
            if (P.nodeName === "CANVAS") {
                if (P.width === 0 || P.height === 0) throw new Error("Given canvas must have data. Canvas width: " + P.width + ", height: " + P.height);
                var J;
                switch (M) {
                    case "PNG":
                        J = "image/png";
                        break;
                    case "WEBP":
                        J = "image/webp";
                        break;
                    default:
                        J = "image/jpeg"
                }
                return Za(P.toDataURL(J, 1).split("base64,").pop())
            }
        },
        B = function(P) {
            var M = this.internal.collections[e + "images"];
            if (M) {
                for (var F in M)
                    if (P === M[F].alias) return M[F]
            }
        },
        A = function(P, M, F) {
            return P || M || (P = -96, M = -96), P < 0 && (P = -1 * F.width * 72 / P / this.internal.scaleFactor), M < 0 && (M = -1 * F.height * 72 / M / this.internal.scaleFactor), P === 0 && (P = M * F.width / F.height), M === 0 && (M = P * F.height / F.width), [P, M]
        },
        N = function(P, M, F, _, J, W) {
            var nt = A.call(this, F, _, J),
                X = this.internal.getCoordinateString,
                et = this.internal.getVerticalCoordinateString,
                ht = g.call(this);
            if (F = nt[0], _ = nt[1], ht[J.index] = J, W) {
                W *= Math.PI / 180;
                var ct = Math.cos(W),
                    L = Math.sin(W),
                    I = function(Z) {
                        return Z.toFixed(4)
                    },
                    U = [I(ct), I(L), I(-1 * L), I(ct), 0, 0, "cm"]
            }
            this.internal.write("q"), W ? (this.internal.write([1, "0", "0", 1, X(P), et(M + _), "cm"].join(" ")), this.internal.write(U.join(" ")), this.internal.write([X(F), "0", "0", X(_), "0", "0", "cm"].join(" "))) : this.internal.write([X(F), "0", "0", X(_), X(P), et(M + _), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + J.index + " Do"), this.internal.write("Q")
        },
        v = n.color_spaces = {
            DEVICE_RGB: "DeviceRGB",
            DEVICE_GRAY: "DeviceGray",
            DEVICE_CMYK: "DeviceCMYK",
            CAL_GREY: "CalGray",
            CAL_RGB: "CalRGB",
            LAB: "Lab",
            ICC_BASED: "ICCBased",
            INDEXED: "Indexed",
            PATTERN: "Pattern",
            SEPARATION: "Separation",
            DEVICE_N: "DeviceN"
        };
    n.decode = {
        DCT_DECODE: "DCTDecode",
        FLATE_DECODE: "FlateDecode",
        LZW_DECODE: "LZWDecode",
        JPX_DECODE: "JPXDecode",
        JBIG2_DECODE: "JBIG2Decode",
        ASCII85_DECODE: "ASCII85Decode",
        ASCII_HEX_DECODE: "ASCIIHexDecode",
        RUN_LENGTH_DECODE: "RunLengthDecode",
        CCITT_FAX_DECODE: "CCITTFaxDecode"
    };
    var R = n.image_compression = {
            NONE: "NONE",
            FAST: "FAST",
            MEDIUM: "MEDIUM",
            SLOW: "SLOW"
        },
        z = n.__addimage__.sHashCode = function(P) {
            var M, F, _ = 0;
            if (typeof P == "string")
                for (F = P.length, M = 0; M < F; M++) _ = (_ << 5) - _ + P.charCodeAt(M), _ |= 0;
            else if (tt(P))
                for (F = P.byteLength / 2, M = 0; M < F; M++) _ = (_ << 5) - _ + P[M], _ |= 0;
            return _
        },
        D = n.__addimage__.validateStringAsBase64 = function(P) {
            (P = P || "").toString().trim();
            var M = !0;
            return P.length === 0 && (M = !1), P.length % 4 != 0 && (M = !1), /^[A-Za-z0-9+/]+$/.test(P.substr(0, P.length - 2)) === !1 && (M = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(P.substr(-2)) === !1 && (M = !1), M
        },
        G = n.__addimage__.extractImageFromDataUrl = function(P) {
            if (P == null || !(P = P.trim()).startsWith("data:")) return null;
            var M = P.indexOf(",");
            return M < 0 ? null : P.substring(0, M).trim().endsWith("base64") ? P.substring(M + 1) : null
        };
    n.__addimage__.isArrayBuffer = function(P) {
        return P instanceof ArrayBuffer
    };
    var tt = n.__addimage__.isArrayBufferView = function(P) {
            return P instanceof Int8Array || P instanceof Uint8Array || P instanceof Uint8ClampedArray || P instanceof Int16Array || P instanceof Uint16Array || P instanceof Int32Array || P instanceof Uint32Array || P instanceof Float32Array || P instanceof Float64Array
        },
        st = n.__addimage__.binaryStringToUint8Array = function(P) {
            for (var M = P.length, F = new Uint8Array(M), _ = 0; _ < M; _++) F[_] = P.charCodeAt(_);
            return F
        },
        Y = n.__addimage__.arrayBufferToBinaryString = function(P) {
            for (var M = "", F = tt(P) ? P : new Uint8Array(P), _ = 0; _ < F.length; _ += 8192) M += String.fromCharCode.apply(null, F.subarray(_, _ + 8192));
            return M
        };
    n.addImage = function() {
        var P, M, F, _, J, W, nt, X, et;
        if (typeof arguments[1] == "number" ? (M = i, F = arguments[1], _ = arguments[2], J = arguments[3], W = arguments[4], nt = arguments[5], X = arguments[6], et = arguments[7]) : (M = arguments[1], F = arguments[2], _ = arguments[3], J = arguments[4], W = arguments[5], nt = arguments[6], X = arguments[7], et = arguments[8]), Se(P = arguments[0]) === "object" && !C(P) && "imageData" in P) {
            var ht = P;
            P = ht.imageData, M = ht.format || M || i, F = ht.x || F || 0, _ = ht.y || _ || 0, J = ht.w || ht.width || J, W = ht.h || ht.height || W, nt = ht.alias || nt, X = ht.compression || X, et = ht.rotation || ht.angle || et
        }
        var ct = this.internal.getFilters();
        if (X === void 0 && ct.indexOf("FlateEncode") !== -1 && (X = "SLOW"), isNaN(F) || isNaN(_)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
        c.call(this);
        var L = O.call(this, P, M, nt, X);
        return N.call(this, F, _, J, W, L, et), this
    };
    var O = function(P, M, F, _) {
            var J, W, nt;
            if (typeof P == "string" && s(P) === i) {
                P = unescape(P);
                var X = at(P, !1);
                (X !== "" || (X = n.loadFile(P, !0)) !== void 0) && (P = X)
            }
            if (C(P) && (P = d(P, M)), M = s(P, M), !m(M)) throw new Error("addImage does not support files of type '" + M + "', please ensure that a plugin for '" + M + "' support is added.");
            if (((nt = F) == null || nt.length === 0) && (F = (function(et) {
                    return typeof et == "string" || tt(et) ? z(et) : tt(et.data) ? z(et.data) : null
                })(P)), (J = B.call(this, F)) || (P instanceof Uint8Array || M === "RGBA" || (W = P, P = st(P)), J = this["process" + M.toUpperCase()](P, w.call(this), F, (function(et) {
                    return et && typeof et == "string" && (et = et.toUpperCase()), et in n.image_compression ? et : R.NONE
                })(_), W)), !J) throw new Error("An unknown error occurred whilst processing the image.");
            return J
        },
        at = n.__addimage__.convertBase64ToBinaryString = function(P, M) {
            M = typeof M != "boolean" || M;
            var F, _ = "";
            if (typeof P == "string") {
                var J;
                F = (J = G(P)) !== null && J !== void 0 ? J : P;
                try {
                    _ = Za(F)
                } catch (W) {
                    if (M) throw D(F) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + W.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")
                }
            }
            return _
        };
    n.getImageProperties = function(P) {
        var M, F, _ = "";
        if (C(P) && (P = d(P)), typeof P == "string" && s(P) === i && ((_ = at(P, !1)) === "" && (_ = n.loadFile(P) || ""), P = _), F = s(P), !m(F)) throw new Error("addImage does not support files of type '" + F + "', please ensure that a plugin for '" + F + "' support is added.");
        if (P instanceof Uint8Array || (P = st(P)), !(M = this["process" + F.toUpperCase()](P))) throw new Error("An unknown error occurred whilst processing the image");
        return M.fileType = F, M
    }
})(Mt.API), (function(n) {
    var e = function(i) {
        if (i !== void 0 && i != "") return !0
    };
    Mt.API.events.push(["addPage", function(i) {
        this.internal.getPageInfo(i.pageNumber).pageContext.annotations = []
    }]), n.events.push(["putPage", function(i) {
        for (var a, s, o, f = this.internal.getCoordinateString, h = this.internal.getVerticalCoordinateString, c = this.internal.getPageInfoByObjId(i.objId), g = i.pageContext.annotations, w = !1, m = 0; m < g.length && !w; m++) switch ((a = g[m]).type) {
            case "link":
                (e(a.options.url) || e(a.options.pageNumber)) && (w = !0);
                break;
            case "reference":
            case "text":
            case "freetext":
                w = !0
        }
        if (w != 0) {
            this.internal.write("/Annots [");
            for (var C = 0; C < g.length; C++) {
                a = g[C];
                var d = this.internal.pdfEscape,
                    B = this.internal.getEncryptor(i.objId);
                switch (a.type) {
                    case "reference":
                        this.internal.write(" " + a.object.objId + " 0 R ");
                        break;
                    case "text":
                        var A = this.internal.newAdditionalObject(),
                            N = this.internal.newAdditionalObject(),
                            v = this.internal.getEncryptor(A.objId),
                            R = a.title || "Note";
                        o = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + f(a.bounds.x) + " " + h(a.bounds.y + a.bounds.h) + " " + f(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y) + "] ") + "/Contents (" + d(v(a.contents)) + ")", o += " /Popup " + N.objId + " 0 R", o += " /P " + c.objId + " 0 R", o += " /T (" + d(v(R)) + ") >>", A.content = o;
                        var z = A.objId + " 0 R";
                        o = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + f(a.bounds.x + 30) + " " + h(a.bounds.y + a.bounds.h) + " " + f(a.bounds.x + a.bounds.w + 30) + " " + h(a.bounds.y) + "] ") + " /Parent " + z, a.open && (o += " /Open true"), o += " >>", N.content = o, this.internal.write(A.objId, "0 R", N.objId, "0 R");
                        break;
                    case "freetext":
                        s = "/Rect [" + f(a.bounds.x) + " " + h(a.bounds.y) + " " + f(a.bounds.x + a.bounds.w) + " " + h(a.bounds.y + a.bounds.h) + "] ";
                        var D = a.color || "#000000";
                        o = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + d(B(a.contents)) + ")", o += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + D + ")", o += " /Border [0 0 0]", o += " >>", this.internal.write(o);
                        break;
                    case "link":
                        if (a.options.name) {
                            var G = this.annotations._nameMap[a.options.name];
                            a.options.pageNumber = G.page, a.options.top = G.y
                        } else a.options.top || (a.options.top = 0);
                        if (s = "/Rect [" + a.finalBounds.x + " " + a.finalBounds.y + " " + a.finalBounds.w + " " + a.finalBounds.h + "] ", o = "", a.options.url) o = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /A <</S /URI /URI (" + d(B(a.options.url)) + ") >>";
                        else if (a.options.pageNumber) switch (o = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(a.options.pageNumber).objId + " 0 R", a.options.magFactor = a.options.magFactor || "XYZ", a.options.magFactor) {
                            case "Fit":
                                o += " /Fit]";
                                break;
                            case "FitH":
                                o += " /FitH " + a.options.top + "]";
                                break;
                            case "FitV":
                                a.options.left = a.options.left || 0, o += " /FitV " + a.options.left + "]";
                                break;
                            default:
                                var tt = h(a.options.top);
                                a.options.left = a.options.left || 0, a.options.zoom === void 0 && (a.options.zoom = 0), o += " /XYZ " + a.options.left + " " + tt + " " + a.options.zoom + "]"
                        }
                        o != "" && (o += " >>", this.internal.write(o))
                }
            }
            this.internal.write("]")
        }
    }]), n.createAnnotation = function(i) {
        var a = this.internal.getCurrentPageInfo();
        switch (i.type) {
            case "link":
                this.link(i.bounds.x, i.bounds.y, i.bounds.w, i.bounds.h, i);
                break;
            case "text":
            case "freetext":
                a.pageContext.annotations.push(i)
        }
    }, n.link = function(i, a, s, o, f) {
        var h = this.internal.getCurrentPageInfo(),
            c = this.internal.getCoordinateString,
            g = this.internal.getVerticalCoordinateString;
        h.pageContext.annotations.push({
            finalBounds: {
                x: c(i),
                y: g(a),
                w: c(i + s),
                h: g(a + o)
            },
            options: f,
            type: "link"
        })
    }, n.textWithLink = function(i, a, s, o) {
        var f, h, c = this.getTextWidth(i),
            g = this.internal.getLineHeight() / this.internal.scaleFactor;
        if (o.maxWidth !== void 0) {
            h = o.maxWidth;
            var w = this.splitTextToSize(i, h).length;
            f = Math.ceil(g * w)
        } else h = c, f = g;
        return this.text(i, a, s, o), s += .2 * g, o.align === "center" && (a -= c / 2), o.align === "right" && (a -= c), this.link(a, s - g, h, f, o), c
    }, n.getTextWidth = function(i) {
        var a = this.internal.getFontSize();
        return this.getStringUnitWidth(i) * a / this.internal.scaleFactor
    }
})(Mt.API), (function(n) {
    var e = {
            1569: [65152],
            1570: [65153, 65154],
            1571: [65155, 65156],
            1572: [65157, 65158],
            1573: [65159, 65160],
            1574: [65161, 65162, 65163, 65164],
            1575: [65165, 65166],
            1576: [65167, 65168, 65169, 65170],
            1577: [65171, 65172],
            1578: [65173, 65174, 65175, 65176],
            1579: [65177, 65178, 65179, 65180],
            1580: [65181, 65182, 65183, 65184],
            1581: [65185, 65186, 65187, 65188],
            1582: [65189, 65190, 65191, 65192],
            1583: [65193, 65194],
            1584: [65195, 65196],
            1585: [65197, 65198],
            1586: [65199, 65200],
            1587: [65201, 65202, 65203, 65204],
            1588: [65205, 65206, 65207, 65208],
            1589: [65209, 65210, 65211, 65212],
            1590: [65213, 65214, 65215, 65216],
            1591: [65217, 65218, 65219, 65220],
            1592: [65221, 65222, 65223, 65224],
            1593: [65225, 65226, 65227, 65228],
            1594: [65229, 65230, 65231, 65232],
            1601: [65233, 65234, 65235, 65236],
            1602: [65237, 65238, 65239, 65240],
            1603: [65241, 65242, 65243, 65244],
            1604: [65245, 65246, 65247, 65248],
            1605: [65249, 65250, 65251, 65252],
            1606: [65253, 65254, 65255, 65256],
            1607: [65257, 65258, 65259, 65260],
            1608: [65261, 65262],
            1609: [65263, 65264, 64488, 64489],
            1610: [65265, 65266, 65267, 65268],
            1649: [64336, 64337],
            1655: [64477],
            1657: [64358, 64359, 64360, 64361],
            1658: [64350, 64351, 64352, 64353],
            1659: [64338, 64339, 64340, 64341],
            1662: [64342, 64343, 64344, 64345],
            1663: [64354, 64355, 64356, 64357],
            1664: [64346, 64347, 64348, 64349],
            1667: [64374, 64375, 64376, 64377],
            1668: [64370, 64371, 64372, 64373],
            1670: [64378, 64379, 64380, 64381],
            1671: [64382, 64383, 64384, 64385],
            1672: [64392, 64393],
            1676: [64388, 64389],
            1677: [64386, 64387],
            1678: [64390, 64391],
            1681: [64396, 64397],
            1688: [64394, 64395],
            1700: [64362, 64363, 64364, 64365],
            1702: [64366, 64367, 64368, 64369],
            1705: [64398, 64399, 64400, 64401],
            1709: [64467, 64468, 64469, 64470],
            1711: [64402, 64403, 64404, 64405],
            1713: [64410, 64411, 64412, 64413],
            1715: [64406, 64407, 64408, 64409],
            1722: [64414, 64415],
            1723: [64416, 64417, 64418, 64419],
            1726: [64426, 64427, 64428, 64429],
            1728: [64420, 64421],
            1729: [64422, 64423, 64424, 64425],
            1733: [64480, 64481],
            1734: [64473, 64474],
            1735: [64471, 64472],
            1736: [64475, 64476],
            1737: [64482, 64483],
            1739: [64478, 64479],
            1740: [64508, 64509, 64510, 64511],
            1744: [64484, 64485, 64486, 64487],
            1746: [64430, 64431],
            1747: [64432, 64433]
        },
        i = {
            65247: {
                65154: 65269,
                65156: 65271,
                65160: 65273,
                65166: 65275
            },
            65248: {
                65154: 65270,
                65156: 65272,
                65160: 65274,
                65166: 65276
            },
            65165: {
                65247: {
                    65248: {
                        65258: 65010
                    }
                }
            },
            1617: {
                1612: 64606,
                1613: 64607,
                1614: 64608,
                1615: 64609,
                1616: 64610
            }
        },
        a = {
            1612: 64606,
            1613: 64607,
            1614: 64608,
            1615: 64609,
            1616: 64610
        },
        s = [1570, 1571, 1573, 1575];
    n.__arabicParser__ = {};
    var o = n.__arabicParser__.isInArabicSubstitutionA = function(A) {
            return e[A.charCodeAt(0)] !== void 0
        },
        f = n.__arabicParser__.isArabicLetter = function(A) {
            return typeof A == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(A)
        },
        h = n.__arabicParser__.isArabicEndLetter = function(A) {
            return f(A) && o(A) && e[A.charCodeAt(0)].length <= 2
        },
        c = n.__arabicParser__.isArabicAlfLetter = function(A) {
            return f(A) && s.indexOf(A.charCodeAt(0)) >= 0
        };
    n.__arabicParser__.arabicLetterHasIsolatedForm = function(A) {
        return f(A) && o(A) && e[A.charCodeAt(0)].length >= 1
    };
    var g = n.__arabicParser__.arabicLetterHasFinalForm = function(A) {
        return f(A) && o(A) && e[A.charCodeAt(0)].length >= 2
    };
    n.__arabicParser__.arabicLetterHasInitialForm = function(A) {
        return f(A) && o(A) && e[A.charCodeAt(0)].length >= 3
    };
    var w = n.__arabicParser__.arabicLetterHasMedialForm = function(A) {
            return f(A) && o(A) && e[A.charCodeAt(0)].length == 4
        },
        m = n.__arabicParser__.resolveLigatures = function(A) {
            var N = 0,
                v = i,
                R = "",
                z = 0;
            for (N = 0; N < A.length; N += 1) v[A.charCodeAt(N)] !== void 0 ? (z++, typeof(v = v[A.charCodeAt(N)]) == "number" && (R += String.fromCharCode(v), v = i, z = 0), N === A.length - 1 && (v = i, R += A.charAt(N - (z - 1)), N -= z - 1, z = 0)) : (v = i, R += A.charAt(N - z), N -= z, z = 0);
            return R
        };
    n.__arabicParser__.isArabicDiacritic = function(A) {
        return A !== void 0 && a[A.charCodeAt(0)] !== void 0
    };
    var C = n.__arabicParser__.getCorrectForm = function(A, N, v) {
            return f(A) ? o(A) === !1 ? -1 : !g(A) || !f(N) && !f(v) || !f(v) && h(N) || h(A) && !f(N) || h(A) && c(N) || h(A) && h(N) ? 0 : w(A) && f(N) && !h(N) && f(v) && g(v) ? 3 : h(A) || !f(v) ? 1 : 2 : -1
        },
        d = function(A) {
            var N = 0,
                v = 0,
                R = 0,
                z = "",
                D = "",
                G = "",
                tt = (A = A || "").split("\\s+"),
                st = [];
            for (N = 0; N < tt.length; N += 1) {
                for (st.push(""), v = 0; v < tt[N].length; v += 1) z = tt[N][v], D = tt[N][v - 1], G = tt[N][v + 1], f(z) ? (R = C(z, D, G), st[N] += R !== -1 ? String.fromCharCode(e[z.charCodeAt(0)][R]) : z) : st[N] += z;
                st[N] = m(st[N])
            }
            return st.join(" ")
        },
        B = n.__arabicParser__.processArabic = n.processArabic = function() {
            var A, N = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text,
                v = [];
            if (Array.isArray(N)) {
                var R = 0;
                for (v = [], R = 0; R < N.length; R += 1) Array.isArray(N[R]) ? v.push([d(N[R][0]), N[R][1], N[R][2]]) : v.push([d(N[R])]);
                A = v
            } else A = d(N);
            return typeof arguments[0] == "string" ? A : (arguments[0].text = A, arguments[0])
        };
    n.events.push(["preProcessText", B])
})(Mt.API), Mt.API.autoPrint = function(n) {
    var e;
    return (n = n || {}).variant = n.variant || "non-conform", n.variant === "javascript" ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
        e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj")
    }), this.internal.events.subscribe("putCatalog", function() {
        this.internal.out("/OpenAction " + e + " 0 R")
    })), this
}, (function(n) {
    var e = function() {
        var i = void 0;
        Object.defineProperty(this, "pdf", {
            get: function() {
                return i
            },
            set: function(h) {
                i = h
            }
        });
        var a = 150;
        Object.defineProperty(this, "width", {
            get: function() {
                return a
            },
            set: function(h) {
                a = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 150 : h, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = a + 1)
            }
        });
        var s = 300;
        Object.defineProperty(this, "height", {
            get: function() {
                return s
            },
            set: function(h) {
                s = isNaN(h) || Number.isInteger(h) === !1 || h < 0 ? 300 : h, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = s + 1)
            }
        });
        var o = [];
        Object.defineProperty(this, "childNodes", {
            get: function() {
                return o
            },
            set: function(h) {
                o = h
            }
        });
        var f = {};
        Object.defineProperty(this, "style", {
            get: function() {
                return f
            },
            set: function(h) {
                f = h
            }
        }), Object.defineProperty(this, "parentNode", {})
    };
    e.prototype.getContext = function(i, a) {
        var s;
        if ((i = i || "2d") !== "2d") return null;
        for (s in a) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = a[s]);
        return this.pdf.context2d._canvas = this, this.pdf.context2d
    }, e.prototype.toDataURL = function() {
        throw new Error("toDataURL is not implemented.")
    }, n.events.push(["initialized", function() {
        this.canvas = new e, this.canvas.pdf = this
    }])
})(Mt.API), (function(n) {
    var e = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
        },
        i = !1,
        a = function() {
            this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), s.call(this))
        },
        s = function() {
            this.internal.__cell__.lastCell = new o, this.internal.__cell__.pages = 1
        },
        o = function() {
            var c = arguments[0];
            Object.defineProperty(this, "x", {
                enumerable: !0,
                get: function() {
                    return c
                },
                set: function(A) {
                    c = A
                }
            });
            var g = arguments[1];
            Object.defineProperty(this, "y", {
                enumerable: !0,
                get: function() {
                    return g
                },
                set: function(A) {
                    g = A
                }
            });
            var w = arguments[2];
            Object.defineProperty(this, "width", {
                enumerable: !0,
                get: function() {
                    return w
                },
                set: function(A) {
                    w = A
                }
            });
            var m = arguments[3];
            Object.defineProperty(this, "height", {
                enumerable: !0,
                get: function() {
                    return m
                },
                set: function(A) {
                    m = A
                }
            });
            var C = arguments[4];
            Object.defineProperty(this, "text", {
                enumerable: !0,
                get: function() {
                    return C
                },
                set: function(A) {
                    C = A
                }
            });
            var d = arguments[5];
            Object.defineProperty(this, "lineNumber", {
                enumerable: !0,
                get: function() {
                    return d
                },
                set: function(A) {
                    d = A
                }
            });
            var B = arguments[6];
            return Object.defineProperty(this, "align", {
                enumerable: !0,
                get: function() {
                    return B
                },
                set: function(A) {
                    B = A
                }
            }), this
        };
    o.prototype.clone = function() {
        return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align)
    }, o.prototype.toArray = function() {
        return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
    }, n.setHeaderFunction = function(c) {
        return a.call(this), this.internal.__cell__.headerFunction = typeof c == "function" ? c : void 0, this
    }, n.getTextDimensions = function(c, g) {
        a.call(this);
        var w = (g = g || {}).fontSize || this.getFontSize(),
            m = g.font || this.getFont(),
            C = g.scaleFactor || this.internal.scaleFactor,
            d = 0,
            B = 0,
            A = 0,
            N = this;
        if (!Array.isArray(c) && typeof c != "string") {
            if (typeof c != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
            c = String(c)
        }
        var v = g.maxWidth;
        v > 0 ? typeof c == "string" ? c = this.splitTextToSize(c, v) : Object.prototype.toString.call(c) === "[object Array]" && (c = c.reduce(function(z, D) {
            return z.concat(N.splitTextToSize(D, v))
        }, [])) : c = Array.isArray(c) ? c : [c];
        for (var R = 0; R < c.length; R++) d < (A = this.getStringUnitWidth(c[R], {
            font: m
        }) * w) && (d = A);
        return d !== 0 && (B = c.length), {
            w: d /= C,
            h: Math.max((B * w * this.getLineHeightFactor() - w * (this.getLineHeightFactor() - 1)) / C, 0)
        }
    }, n.cellAddPage = function() {
        a.call(this), this.addPage();
        var c = this.internal.__cell__.margins || e;
        return this.internal.__cell__.lastCell = new o(c.left, c.top, void 0, void 0), this.internal.__cell__.pages += 1, this
    };
    var f = n.cell = function() {
        var c;
        c = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), a.call(this);
        var g = this.internal.__cell__.lastCell,
            w = this.internal.__cell__.padding,
            m = this.internal.__cell__.margins || e,
            C = this.internal.__cell__.tableHeaderRow,
            d = this.internal.__cell__.printHeaders;
        return g.lineNumber !== void 0 && (g.lineNumber === c.lineNumber ? (c.x = (g.x || 0) + (g.width || 0), c.y = g.y || 0) : g.y + g.height + c.height + m.bottom > this.getPageHeight() ? (this.cellAddPage(), c.y = m.top, d && C && (this.printHeaderRow(c.lineNumber, !0), c.y += C[0].height)) : c.y = g.y + g.height || c.y), c.text[0] !== void 0 && (this.rect(c.x, c.y, c.width, c.height, i === !0 ? "FD" : void 0), c.align === "right" ? this.text(c.text, c.x + c.width - w, c.y + w, {
            align: "right",
            baseline: "top"
        }) : c.align === "center" ? this.text(c.text, c.x + c.width / 2, c.y + w, {
            align: "center",
            baseline: "top",
            maxWidth: c.width - w - w
        }) : this.text(c.text, c.x + w, c.y + w, {
            align: "left",
            baseline: "top",
            maxWidth: c.width - w - w
        })), this.internal.__cell__.lastCell = c, this
    };
    n.table = function(c, g, w, m, C) {
        if (a.call(this), !w) throw new Error("No data for PDF table.");
        var d, B, A, N, v = [],
            R = [],
            z = [],
            D = {},
            G = {},
            tt = [],
            st = [],
            Y = (C = C || {}).autoSize || !1,
            O = C.printHeaders !== !1,
            at = C.css && C.css["font-size"] !== void 0 ? 16 * C.css["font-size"] : C.fontSize || 12,
            P = C.margins || Object.assign({
                width: this.getPageWidth()
            }, e),
            M = typeof C.padding == "number" ? C.padding : 3,
            F = C.headerBackgroundColor || "#c8c8c8",
            _ = C.headerTextColor || "#000";
        if (s.call(this), this.internal.__cell__.printHeaders = O, this.internal.__cell__.margins = P, this.internal.__cell__.table_font_size = at, this.internal.__cell__.padding = M, this.internal.__cell__.headerBackgroundColor = F, this.internal.__cell__.headerTextColor = _, this.setFontSize(at), m == null) R = v = Object.keys(w[0]), z = v.map(function() {
            return "left"
        });
        else if (Array.isArray(m) && Se(m[0]) === "object")
            for (v = m.map(function(ht) {
                    return ht.name
                }), R = m.map(function(ht) {
                    return ht.prompt || ht.name || ""
                }), z = m.map(function(ht) {
                    return ht.align || "left"
                }), d = 0; d < m.length; d += 1) G[m[d].name] = .7499990551181103 * m[d].width;
        else Array.isArray(m) && typeof m[0] == "string" && (R = v = m, z = v.map(function() {
            return "left"
        }));
        if (Y || Array.isArray(m) && typeof m[0] == "string")
            for (d = 0; d < v.length; d += 1) {
                for (D[N = v[d]] = w.map(function(ht) {
                        return ht[N]
                    }), this.setFont(void 0, "bold"), tt.push(this.getTextDimensions(R[d], {
                        fontSize: this.internal.__cell__.table_font_size,
                        scaleFactor: this.internal.scaleFactor
                    }).w), B = D[N], this.setFont(void 0, "normal"), A = 0; A < B.length; A += 1) tt.push(this.getTextDimensions(B[A], {
                    fontSize: this.internal.__cell__.table_font_size,
                    scaleFactor: this.internal.scaleFactor
                }).w);
                G[N] = Math.max.apply(null, tt) + M + M, tt = []
            }
        if (O) {
            var J = {};
            for (d = 0; d < v.length; d += 1) J[v[d]] = {}, J[v[d]].text = R[d], J[v[d]].align = z[d];
            var W = h.call(this, J, G);
            st = v.map(function(ht) {
                return new o(c, g, G[ht], W, J[ht].text, void 0, J[ht].align)
            }), this.setTableHeaderRow(st), this.printHeaderRow(1, !1)
        }
        var nt = m.reduce(function(ht, ct) {
            return ht[ct.name] = ct.align, ht
        }, {});
        for (d = 0; d < w.length; d += 1) {
            "rowStart" in C && C.rowStart instanceof Function && C.rowStart({
                row: d,
                data: w[d]
            }, this);
            var X = h.call(this, w[d], G);
            for (A = 0; A < v.length; A += 1) {
                var et = w[d][v[A]];
                "cellStart" in C && C.cellStart instanceof Function && C.cellStart({
                    row: d,
                    col: A,
                    data: et
                }, this), f.call(this, new o(c, g, G[v[A]], X, et, d + 2, nt[v[A]]))
            }
        }
        return this.internal.__cell__.table_x = c, this.internal.__cell__.table_y = g, this
    };
    var h = function(c, g) {
        var w = this.internal.__cell__.padding,
            m = this.internal.__cell__.table_font_size,
            C = this.internal.scaleFactor;
        return Object.keys(c).map(function(d) {
            var B = c[d];
            return this.splitTextToSize(B.hasOwnProperty("text") ? B.text : B, g[d] - w - w)
        }, this).map(function(d) {
            return this.getLineHeightFactor() * d.length * m / C + w + w
        }, this).reduce(function(d, B) {
            return Math.max(d, B)
        }, 0)
    };
    n.setTableHeaderRow = function(c) {
        a.call(this), this.internal.__cell__.tableHeaderRow = c
    }, n.printHeaderRow = function(c, g) {
        if (a.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
        var w;
        if (i = !0, typeof this.internal.__cell__.headerFunction == "function") {
            var m = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
            this.internal.__cell__.lastCell = new o(m[0], m[1], m[2], m[3], void 0, -1)
        }
        this.setFont(void 0, "bold");
        for (var C = [], d = 0; d < this.internal.__cell__.tableHeaderRow.length; d += 1) {
            w = this.internal.__cell__.tableHeaderRow[d].clone(), g && (w.y = this.internal.__cell__.margins.top || 0, C.push(w)), w.lineNumber = c;
            var B = this.getTextColor();
            this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), f.call(this, w), this.setTextColor(B)
        }
        C.length > 0 && this.setTableHeaderRow(C), this.setFont(void 0, "normal"), i = !1
    }
})(Mt.API);
var Js = {
        italic: ["italic", "oblique", "normal"],
        oblique: ["oblique", "italic", "normal"],
        normal: ["normal", "oblique", "italic"]
    },
    Xs = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"],
    Vo = Ys(Xs),
    Ks = [100, 200, 300, 400, 500, 600, 700, 800, 900],
    vl = Ys(Ks);

function Go(n) {
    var e = n.family.replace(/"|'/g, "").toLowerCase(),
        i = (function(o) {
            return Js[o = o || "normal"] ? o : "normal"
        })(n.style),
        a = (function(o) {
            return o ? typeof o == "number" ? o >= 100 && o <= 900 && o % 100 == 0 ? o : 400 : /^\d00$/.test(o) ? parseInt(o) : o === "bold" ? 700 : 400 : 400
        })(n.weight),
        s = (function(o) {
            return typeof Vo[o = o || "normal"] == "number" ? o : "normal"
        })(n.stretch);
    return {
        family: e,
        style: i,
        weight: a,
        stretch: s,
        src: n.src || [],
        ref: n.ref || {
            name: e,
            style: [s, i, a].join(" ")
        }
    }
}

function Zs(n, e, i, a) {
    var s;
    for (s = i; s >= 0 && s < e.length; s += a)
        if (n[e[s]]) return n[e[s]];
    for (s = i; s >= 0 && s < e.length; s -= a)
        if (n[e[s]]) return n[e[s]]
}
var ml = {
        "sans-serif": "helvetica",
        fixed: "courier",
        monospace: "courier",
        terminal: "courier",
        cursive: "times",
        fantasy: "times",
        serif: "times"
    },
    $s = {
        caption: "times",
        icon: "times",
        menu: "times",
        "message-box": "times",
        "small-caption": "times",
        "status-bar": "times"
    };

function Qs(n) {
    return [n.stretch, n.style, n.weight, n.family].join(" ")
}

function tu(n) {
    return n.trimLeft()
}

function bl(n, e) {
    for (var i = 0; i < n.length;) {
        if (n.charAt(i) === e) return [n.substring(0, i), n.substring(i + 1)];
        i += 1
    }
    return null
}

function yl(n) {
    var e = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
    return e === null ? null : [e[0], n.substring(e[0].length)]
}
var eo, eu, ru, Mi, ro, nu, iu, au, Yo = ["times"];

function ou(n, e, i, a, s) {
    var o = 4,
        f = uu;
    switch (s) {
        case Mt.API.image_compression.FAST:
            o = 1, f = su;
            break;
        case Mt.API.image_compression.MEDIUM:
            o = 6, f = lu;
            break;
        case Mt.API.image_compression.SLOW:
            o = 9, f = hu
    }
    n = (function(c, g, w, m) {
        for (var C, d = c.length / g, B = new Uint8Array(c.length + d), A = [wl, su, uu, lu, hu], N = 0; N < d; N += 1) {
            var v = N * g,
                R = c.subarray(v, v + g);
            if (m) B.set(m(R, w, C), v + N);
            else {
                for (var z = A.length, D = [], G = 0; G < z; G += 1) D[G] = A[G](R, w, C);
                var tt = xl(D.concat());
                B.set(D[tt], v + N)
            }
            C = R
        }
        return B
    })(n, e, Math.ceil(i * a / 8), f);
    var h = Do(n, {
        level: o
    });
    return Mt.API.__addimage__.arrayBufferToBinaryString(h)
}

function wl(n) {
    var e = Array.apply([], n);
    return e.unshift(0), e
}

function su(n, e) {
    var i = n.length,
        a = [];
    a[0] = 1;
    for (var s = 0; s < i; s += 1) {
        var o = n[s - e] || 0;
        a[s + 1] = n[s] - o + 256 & 255
    }
    return a
}

function uu(n, e, i) {
    var a = n.length,
        s = [];
    s[0] = 2;
    for (var o = 0; o < a; o += 1) {
        var f = i && i[o] || 0;
        s[o + 1] = n[o] - f + 256 & 255
    }
    return s
}

function lu(n, e, i) {
    var a = n.length,
        s = [];
    s[0] = 3;
    for (var o = 0; o < a; o += 1) {
        var f = n[o - e] || 0,
            h = i && i[o] || 0;
        s[o + 1] = n[o] + 256 - (f + h >>> 1) & 255
    }
    return s
}

function hu(n, e, i) {
    var a = n.length,
        s = [];
    s[0] = 4;
    for (var o = 0; o < a; o += 1) {
        var f = Ll(n[o - e] || 0, i && i[o] || 0, i && i[o - e] || 0);
        s[o + 1] = n[o] - f + 256 & 255
    }
    return s
}

function Ll(n, e, i) {
    if (n === e && e === i) return n;
    var a = Math.abs(e - i),
        s = Math.abs(n - i),
        o = Math.abs(n + e - i - i);
    return a <= s && a <= o ? n : s <= o ? e : i
}

function xl(n) {
    var e = n.map(function(i) {
        return i.reduce(function(a, s) {
            return a + Math.abs(s)
        }, 0)
    });
    return e.indexOf(Math.min.apply(null, e))
}

function Jo(n, e, i) {
    var a = e * i,
        s = Math.floor(a / 8),
        o = 16 - (a - 8 * s + i),
        f = (1 << i) - 1;
    return fu(n, s) >> o & f
}

function cu(n, e, i, a) {
    var s = i * a,
        o = Math.floor(s / 8),
        f = 16 - (s - 8 * o + a),
        h = (1 << a) - 1,
        c = (e & h) << f;
    (function(g, w, m) {
        if (w + 1 < g.byteLength) g.setUint16(w, m, !1);
        else {
            var C = m >> 8 & 255;
            g.setUint8(w, C)
        }
    })(n, o, fu(n, o) & ~(h << f) & 65535 | c)
}

function fu(n, e) {
    return e + 1 < n.byteLength ? n.getUint16(e, !1) : n.getUint8(e) << 8
}

function Al(n) {
    var e = 0;
    if (n[e++] !== 71 || n[e++] !== 73 || n[e++] !== 70 || n[e++] !== 56 || (n[e++] + 1 & 253) != 56 || n[e++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
    var i = n[e++] | n[e++] << 8,
        a = n[e++] | n[e++] << 8,
        s = n[e++],
        o = s >> 7,
        f = 1 << 1 + (7 & s);
    n[e++], n[e++];
    var h = null,
        c = null;
    o && (h = e, c = f, e += 3 * f);
    var g = !0,
        w = [],
        m = 0,
        C = null,
        d = 0,
        B = null;
    for (this.width = i, this.height = a; g && e < n.length;) switch (n[e++]) {
        case 33:
            switch (n[e++]) {
                case 255:
                    if (n[e] !== 11 || n[e + 1] == 78 && n[e + 2] == 69 && n[e + 3] == 84 && n[e + 4] == 83 && n[e + 5] == 67 && n[e + 6] == 65 && n[e + 7] == 80 && n[e + 8] == 69 && n[e + 9] == 50 && n[e + 10] == 46 && n[e + 11] == 48 && n[e + 12] == 3 && n[e + 13] == 1 && n[e + 16] == 0) e += 14, B = n[e++] | n[e++] << 8, e++;
                    else
                        for (e += 12;;) {
                            if (!((P = n[e++]) >= 0)) throw Error("Invalid block size");
                            if (P === 0) break;
                            e += P
                        }
                    break;
                case 249:
                    if (n[e++] !== 4 || n[e + 4] !== 0) throw new Error("Invalid graphics extension block.");
                    var A = n[e++];
                    m = n[e++] | n[e++] << 8, C = n[e++], 1 & A || (C = null), d = A >> 2 & 7, e++;
                    break;
                case 254:
                    for (;;) {
                        if (!((P = n[e++]) >= 0)) throw Error("Invalid block size");
                        if (P === 0) break;
                        e += P
                    }
                    break;
                default:
                    throw new Error("Unknown graphic control label: 0x" + n[e - 1].toString(16))
            }
            break;
        case 44:
            var N = n[e++] | n[e++] << 8,
                v = n[e++] | n[e++] << 8,
                R = n[e++] | n[e++] << 8,
                z = n[e++] | n[e++] << 8,
                D = n[e++],
                G = D >> 6 & 1,
                tt = 1 << 1 + (7 & D),
                st = h,
                Y = c,
                O = !1;
            D >> 7 && (O = !0, st = e, Y = tt, e += 3 * tt);
            var at = e;
            for (e++;;) {
                var P;
                if (!((P = n[e++]) >= 0)) throw Error("Invalid block size");
                if (P === 0) break;
                e += P
            }
            w.push({
                x: N,
                y: v,
                width: R,
                height: z,
                has_local_palette: O,
                palette_offset: st,
                palette_size: Y,
                data_offset: at,
                data_length: e - at,
                transparent_index: C,
                interlaced: !!G,
                delay: m,
                disposal: d
            });
            break;
        case 59:
            g = !1;
            break;
        default:
            throw new Error("Unknown gif block: 0x" + n[e - 1].toString(16))
    }
    this.numFrames = function() {
        return w.length
    }, this.loopCount = function() {
        return B
    }, this.frameInfo = function(M) {
        if (M < 0 || M >= w.length) throw new Error("Frame index out of range.");
        return w[M]
    }, this.decodeAndBlitFrameBGRA = function(M, F) {
        var _ = this.frameInfo(M),
            J = _.width * _.height,
            W = new Uint8Array(J);
        du(n, _.data_offset, W, J);
        var nt = _.palette_offset,
            X = _.transparent_index;
        X === null && (X = 256);
        var et = _.width,
            ht = i - et,
            ct = et,
            L = 4 * (_.y * i + _.x),
            I = 4 * ((_.y + _.height) * i + _.x),
            U = L,
            Z = 4 * ht;
        _.interlaced === !0 && (Z += 4 * i * 7);
        for (var Q = 8, ut = 0, dt = W.length; ut < dt; ++ut) {
            var ft = W[ut];
            if (ct === 0 && (ct = et, (U += Z) >= I && (Z = 4 * ht + 4 * i * (Q - 1), U = L + (et + ht) * (Q << 1), Q >>= 1)), ft === X) U += 4;
            else {
                var yt = n[nt + 3 * ft],
                    Nt = n[nt + 3 * ft + 1],
                    Pt = n[nt + 3 * ft + 2];
                F[U++] = Pt, F[U++] = Nt, F[U++] = yt, F[U++] = 255
            }--ct
        }
    }, this.decodeAndBlitFrameRGBA = function(M, F) {
        var _ = this.frameInfo(M),
            J = _.width * _.height,
            W = new Uint8Array(J);
        du(n, _.data_offset, W, J);
        var nt = _.palette_offset,
            X = _.transparent_index;
        X === null && (X = 256);
        var et = _.width,
            ht = i - et,
            ct = et,
            L = 4 * (_.y * i + _.x),
            I = 4 * ((_.y + _.height) * i + _.x),
            U = L,
            Z = 4 * ht;
        _.interlaced === !0 && (Z += 4 * i * 7);
        for (var Q = 8, ut = 0, dt = W.length; ut < dt; ++ut) {
            var ft = W[ut];
            if (ct === 0 && (ct = et, (U += Z) >= I && (Z = 4 * ht + 4 * i * (Q - 1), U = L + (et + ht) * (Q << 1), Q >>= 1)), ft === X) U += 4;
            else {
                var yt = n[nt + 3 * ft],
                    Nt = n[nt + 3 * ft + 1],
                    Pt = n[nt + 3 * ft + 2];
                F[U++] = yt, F[U++] = Nt, F[U++] = Pt, F[U++] = 255
            }--ct
        }
    }
}

function du(n, e, i, a) {
    for (var s = n[e++], o = 1 << s, f = o + 1, h = f + 1, c = s + 1, g = (1 << c) - 1, w = 0, m = 0, C = 0, d = n[e++], B = new Int32Array(4096), A = null;;) {
        for (; w < 16 && d !== 0;) m |= n[e++] << w, w += 8, d === 1 ? d = n[e++] : --d;
        if (w < c) break;
        var N = m & g;
        if (m >>= c, w -= c, N !== o) {
            if (N === f) break;
            for (var v = N < h ? N : A, R = 0, z = v; z > o;) z = B[z] >> 8, ++R;
            var D = z;
            if (C + R + (v !== N ? 1 : 0) > a) return void _e.log("Warning, gif stream longer than expected.");
            i[C++] = D;
            var G = C += R;
            for (v !== N && (i[C++] = D), z = v; R--;) z = B[z], i[--G] = 255 & z, z >>= 8;
            A !== null && h < 4096 && (B[h++] = A << 8 | D, h >= g + 1 && c < 12 && (++c, g = g << 1 | 1)), A = N
        } else h = f + 1, g = (1 << (c = s + 1)) - 1, A = null
    }
    return C !== a && _e.log("Warning, gif stream shorter than expected."), i
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function Xo(n) {
    var e, i, a, s, o, f = Math.floor,
        h = new Array(64),
        c = new Array(64),
        g = new Array(64),
        w = new Array(64),
        m = new Array(65535),
        C = new Array(65535),
        d = new Array(64),
        B = new Array(64),
        A = [],
        N = 0,
        v = 7,
        R = new Array(64),
        z = new Array(64),
        D = new Array(64),
        G = new Array(256),
        tt = new Array(2048),
        st = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
        Y = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        O = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        at = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
        P = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
        M = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        F = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        _ = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
        J = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

    function W(L, I) {
        for (var U = 0, Z = 0, Q = new Array, ut = 1; ut <= 16; ut++) {
            for (var dt = 1; dt <= L[ut]; dt++) Q[I[Z]] = [], Q[I[Z]][0] = U, Q[I[Z]][1] = ut, Z++, U++;
            U *= 2
        }
        return Q
    }

    function nt(L) {
        for (var I = L[0], U = L[1] - 1; U >= 0;) I & 1 << U && (N |= 1 << v), U--, --v < 0 && (N == 255 ? (X(255), X(0)) : X(N), v = 7, N = 0)
    }

    function X(L) {
        A.push(L)
    }

    function et(L) {
        X(L >> 8 & 255), X(255 & L)
    }

    function ht(L, I, U, Z, Q) {
        for (var ut, dt = Q[0], ft = Q[240], yt = (function(At, Tt) {
                var _t, ie, zt, de, $t, Qt, we, ae, Et, Vt, qt = 0;
                for (Et = 0; Et < 8; ++Et) {
                    _t = At[qt], ie = At[qt + 1], zt = At[qt + 2], de = At[qt + 3], $t = At[qt + 4], Qt = At[qt + 5], we = At[qt + 6];
                    var Pe = _t + (ae = At[qt + 7]),
                        pe = _t - ae,
                        Dt = ie + we,
                        te = ie - we,
                        Le = zt + Qt,
                        Ut = zt - Qt,
                        le = de + $t,
                        ee = de - $t,
                        Re = Pe + le,
                        Xe = Pe - le,
                        xe = Dt + Le,
                        Jt = Dt - Le;
                    At[qt] = Re + xe, At[qt + 4] = Re - xe;
                    var ve = .707106781 * (Jt + Xe);
                    At[qt + 2] = Xe + ve, At[qt + 6] = Xe - ve;
                    var Hn = .382683433 * ((Re = ee + Ut) - (Jt = te + pe)),
                        ur = .5411961 * Re + Hn,
                        on = 1.306562965 * Jt + Hn,
                        Xr = .707106781 * (xe = Ut + te),
                        Wt = pe + Xr,
                        sn = pe - Xr;
                    At[qt + 5] = sn + ur, At[qt + 3] = sn - ur, At[qt + 1] = Wt + on, At[qt + 7] = Wt - on, qt += 8
                }
                for (qt = 0, Et = 0; Et < 8; ++Et) {
                    _t = At[qt], ie = At[qt + 8], zt = At[qt + 16], de = At[qt + 24], $t = At[qt + 32], Qt = At[qt + 40], we = At[qt + 48];
                    var un = _t + (ae = At[qt + 56]),
                        Cr = _t - ae,
                        jr = ie + we,
                        Ie = ie - we,
                        rr = zt + Qt,
                        nr = zt - Qt,
                        Un = de + $t,
                        wn = de - $t,
                        Er = un + Un,
                        Kr = un - Un,
                        qr = jr + rr,
                        zr = jr - rr;
                    At[qt] = Er + qr, At[qt + 32] = Er - qr;
                    var Ir = .707106781 * (zr + Kr);
                    At[qt + 16] = Kr + Ir, At[qt + 48] = Kr - Ir;
                    var Wn = .382683433 * ((Er = wn + nr) - (zr = Ie + Cr)),
                        Zr = .5411961 * Er + Wn,
                        Vn = 1.306562965 * zr + Wn,
                        yi = .707106781 * (qr = nr + Ie),
                        wi = Cr + yi,
                        Li = Cr - yi;
                    At[qt + 40] = Li + Zr, At[qt + 24] = Li - Zr, At[qt + 8] = wi + Vn, At[qt + 56] = wi - Vn, qt++
                }
                for (Et = 0; Et < 64; ++Et) Vt = At[Et] * Tt[Et], d[Et] = Vt > 0 ? Vt + .5 | 0 : Vt - .5 | 0;
                return d
            })(L, I), Nt = 0; Nt < 64; ++Nt) B[st[Nt]] = yt[Nt];
        var Pt = B[0] - U;
        U = B[0], Pt == 0 ? nt(Z[0]) : (nt(Z[C[ut = 32767 + Pt]]), nt(m[ut]));
        for (var kt = 63; kt > 0 && B[kt] == 0;) kt--;
        if (kt == 0) return nt(dt), U;
        for (var gt, H = 1; H <= kt;) {
            for (var ue = H; B[H] == 0 && H <= kt;) ++H;
            var ne = H - ue;
            if (ne >= 16) {
                gt = ne >> 4;
                for (var Ht = 1; Ht <= gt; ++Ht) nt(ft);
                ne &= 15
            }
            ut = 32767 + B[H], nt(Q[(ne << 4) + C[ut]]), nt(m[ut]), H++
        }
        return kt != 63 && nt(dt), U
    }

    function ct(L) {
        L = Math.min(Math.max(L, 1), 100), o != L && ((function(I) {
            for (var U = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], Z = 0; Z < 64; Z++) {
                var Q = f((U[Z] * I + 50) / 100);
                Q = Math.min(Math.max(Q, 1), 255), h[st[Z]] = Q
            }
            for (var ut = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], dt = 0; dt < 64; dt++) {
                var ft = f((ut[dt] * I + 50) / 100);
                ft = Math.min(Math.max(ft, 1), 255), c[st[dt]] = ft
            }
            for (var yt = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], Nt = 0, Pt = 0; Pt < 8; Pt++)
                for (var kt = 0; kt < 8; kt++) g[Nt] = 1 / (h[st[Nt]] * yt[Pt] * yt[kt] * 8), w[Nt] = 1 / (c[st[Nt]] * yt[Pt] * yt[kt] * 8), Nt++
        })(L < 50 ? Math.floor(5e3 / L) : Math.floor(200 - 2 * L)), o = L)
    }
    this.encode = function(L, I) {
        I && ct(I), A = new Array, N = 0, v = 7, et(65496), et(65504), et(16), X(74), X(70), X(73), X(70), X(0), X(1), X(1), X(0), et(1), et(1), X(0), X(0), (function() {
            et(65499), et(132), X(0);
            for (var ie = 0; ie < 64; ie++) X(h[ie]);
            X(1);
            for (var zt = 0; zt < 64; zt++) X(c[zt])
        })(), (function(ie, zt) {
            et(65472), et(17), X(8), et(zt), et(ie), X(3), X(1), X(17), X(0), X(2), X(17), X(1), X(3), X(17), X(1)
        })(L.width, L.height), (function() {
            et(65476), et(418), X(0);
            for (var ie = 0; ie < 16; ie++) X(Y[ie + 1]);
            for (var zt = 0; zt <= 11; zt++) X(O[zt]);
            X(16);
            for (var de = 0; de < 16; de++) X(at[de + 1]);
            for (var $t = 0; $t <= 161; $t++) X(P[$t]);
            X(1);
            for (var Qt = 0; Qt < 16; Qt++) X(M[Qt + 1]);
            for (var we = 0; we <= 11; we++) X(F[we]);
            X(17);
            for (var ae = 0; ae < 16; ae++) X(_[ae + 1]);
            for (var Et = 0; Et <= 161; Et++) X(J[Et])
        })(), et(65498), et(12), X(3), X(1), X(0), X(2), X(17), X(3), X(17), X(0), X(63), X(0);
        var U = 0,
            Z = 0,
            Q = 0;
        N = 0, v = 7, this.encode.displayName = "_encode_";
        for (var ut, dt, ft, yt, Nt, Pt, kt, gt, H, ue = L.data, ne = L.width, Ht = L.height, At = 4 * ne, Tt = 0; Tt < Ht;) {
            for (ut = 0; ut < At;) {
                for (Nt = At * Tt + ut, kt = -1, gt = 0, H = 0; H < 64; H++) Pt = Nt + (gt = H >> 3) * At + (kt = 4 * (7 & H)), Tt + gt >= Ht && (Pt -= At * (Tt + 1 + gt - Ht)), ut + kt >= At && (Pt -= ut + kt - At + 4), dt = ue[Pt++], ft = ue[Pt++], yt = ue[Pt++], R[H] = (tt[dt] + tt[ft + 256 | 0] + tt[yt + 512 | 0] >> 16) - 128, z[H] = (tt[dt + 768 | 0] + tt[ft + 1024 | 0] + tt[yt + 1280 | 0] >> 16) - 128, D[H] = (tt[dt + 1280 | 0] + tt[ft + 1536 | 0] + tt[yt + 1792 | 0] >> 16) - 128;
                U = ht(R, g, U, e, a), Z = ht(z, w, Z, i, s), Q = ht(D, w, Q, i, s), ut += 32
            }
            Tt += 8
        }
        if (v >= 0) {
            var _t = [];
            _t[1] = v + 1, _t[0] = (1 << v + 1) - 1, nt(_t)
        }
        return et(65497), new Uint8Array(A)
    }, n = n || 50, (function() {
        for (var L = String.fromCharCode, I = 0; I < 256; I++) G[I] = L(I)
    })(), e = W(Y, O), i = W(M, F), a = W(at, P), s = W(_, J), (function() {
        for (var L = 1, I = 2, U = 1; U <= 15; U++) {
            for (var Z = L; Z < I; Z++) C[32767 + Z] = U, m[32767 + Z] = [], m[32767 + Z][1] = U, m[32767 + Z][0] = Z;
            for (var Q = -(I - 1); Q <= -L; Q++) C[32767 + Q] = U, m[32767 + Q] = [], m[32767 + Q][1] = U, m[32767 + Q][0] = I - 1 + Q;
            L <<= 1, I <<= 1
        }
    })(), (function() {
        for (var L = 0; L < 256; L++) tt[L] = 19595 * L, tt[L + 256 | 0] = 38470 * L, tt[L + 512 | 0] = 7471 * L + 32768, tt[L + 768 | 0] = -11059 * L, tt[L + 1024 | 0] = -21709 * L, tt[L + 1280 | 0] = 32768 * L + 8421375, tt[L + 1536 | 0] = -27439 * L, tt[L + 1792 | 0] = -5329 * L
    })(), ct(n)
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function Yr(n, e) {
    if (this.pos = 0, this.buffer = n, this.datav = new DataView(n.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
    this.parseHeader(), this.parseBGR()
}

function pu(n) {
    function e(O) {
        if (!O) throw Error("assert :P")
    }

    function i(O, at, P) {
        for (var M = 0; 4 > M; M++)
            if (O[at + M] != P.charCodeAt(M)) return !0;
        return !1
    }

    function a(O, at, P, M, F) {
        for (var _ = 0; _ < F; _++) O[at + _] = P[M + _]
    }

    function s(O, at, P, M) {
        for (var F = 0; F < M; F++) O[at + F] = P
    }

    function o(O) {
        return new Int32Array(O)
    }

    function f(O, at) {
        for (var P = [], M = 0; M < O; M++) P.push(new at);
        return P
    }

    function h(O, at) {
        var P = [];
        return (function M(F, _, J) {
            for (var W = J[_], nt = 0; nt < W && (F.push(J.length > _ + 1 ? [] : new at), !(J.length < _ + 1)); nt++) M(F[nt], _ + 1, J)
        })(P, 0, O), P
    }
    var c = function() {
        var O = this;

        function at(t, r) {
            for (var l = 1 << r - 1 >>> 0; t & l;) l >>>= 1;
            return l ? (t & l - 1) + l : t
        }

        function P(t, r, l, p, y) {
            e(!(p % l));
            do t[r + (p -= l)] = y; while (0 < p)
        }

        function M(t, r, l, p, y) {
            if (e(2328 >= y), 512 >= y) var x = o(512);
            else if ((x = o(y)) == null) return 0;
            return (function(S, k, j, T, K, lt) {
                var E, $, it = k,
                    pt = 1 << j,
                    ot = o(16),
                    vt = o(16);
                for (e(K != 0), e(T != null), e(S != null), e(0 < j), $ = 0; $ < K; ++$) {
                    if (15 < T[$]) return 0;
                    ++ot[T[$]]
                }
                if (ot[0] == K) return 0;
                for (vt[1] = 0, E = 1; 15 > E; ++E) {
                    if (ot[E] > 1 << E) return 0;
                    vt[E + 1] = vt[E] + ot[E]
                }
                for ($ = 0; $ < K; ++$) E = T[$], 0 < T[$] && (lt[vt[E]++] = $);
                if (vt[15] == 1) return (T = new F).g = 0, T.value = lt[0], P(S, it, 1, pt, T), pt;
                var bt, xt = -1,
                    wt = pt - 1,
                    Rt = 0,
                    Ft = 1,
                    oe = 1,
                    It = 1 << j;
                for ($ = 0, E = 1, K = 2; E <= j; ++E, K <<= 1) {
                    if (Ft += oe <<= 1, 0 > (oe -= ot[E])) return 0;
                    for (; 0 < ot[E]; --ot[E])(T = new F).g = E, T.value = lt[$++], P(S, it + Rt, K, It, T), Rt = at(Rt, E)
                }
                for (E = j + 1, K = 2; 15 >= E; ++E, K <<= 1) {
                    if (Ft += oe <<= 1, 0 > (oe -= ot[E])) return 0;
                    for (; 0 < ot[E]; --ot[E]) {
                        if (T = new F, (Rt & wt) != xt) {
                            for (it += It, bt = 1 << (xt = E) - j; 15 > xt && !(0 >= (bt -= ot[xt]));) ++xt, bt <<= 1;
                            pt += It = 1 << (bt = xt - j), S[k + (xt = Rt & wt)].g = bt + j, S[k + xt].value = it - k - xt
                        }
                        T.g = E - j, T.value = lt[$++], P(S, it + (Rt >> j), K, It, T), Rt = at(Rt, E)
                    }
                }
                return Ft != 2 * vt[15] - 1 ? 0 : pt
            })(t, r, l, p, y, x)
        }

        function F() {
            this.value = this.g = 0
        }

        function _() {
            this.value = this.g = 0
        }

        function J() {
            this.G = f(5, F), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = f(ui, _)
        }

        function W(t, r, l, p) {
            e(t != null), e(r != null), e(2147483648 > p), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = r, t.pa = l, t.Jd = r, t.Yc = l + p, t.Zc = 4 <= p ? l + p - 4 + 1 : l, dt(t)
        }

        function nt(t, r) {
            for (var l = 0; 0 < r--;) l |= yt(t, 128) << r;
            return l
        }

        function X(t, r) {
            var l = nt(t, r);
            return ft(t) ? -l : l
        }

        function et(t, r, l, p) {
            var y, x = 0;
            for (e(t != null), e(r != null), e(4294967288 > p), t.Sb = p, t.Ra = 0, t.u = 0, t.h = 0, 4 < p && (p = 4), y = 0; y < p; ++y) x += r[l + y] << 8 * y;
            t.Ra = x, t.bb = p, t.oa = r, t.pa = l
        }

        function ht(t) {
            for (; 8 <= t.u && t.bb < t.Sb;) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << Sn - 8 >>> 0, ++t.bb, t.u -= 8;
            Z(t) && (t.h = 1, t.u = 0)
        }

        function ct(t, r) {
            if (e(0 <= r), !t.h && r <= Ar) {
                var l = U(t) & xr[r];
                return t.u += r, ht(t), l
            }
            return t.h = 1, t.u = 0
        }

        function L() {
            this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0
        }

        function I() {
            this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0
        }

        function U(t) {
            return t.Ra >>> (t.u & Sn - 1) >>> 0
        }

        function Z(t) {
            return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > Sn
        }

        function Q(t, r) {
            t.u = r, t.h = Z(t)
        }

        function ut(t) {
            t.u >= gn && (e(t.u >= gn), ht(t))
        }

        function dt(t) {
            e(t != null && t.oa != null), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(t != null && t.oa != null), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1))
        }

        function ft(t) {
            return nt(t, 1)
        }

        function yt(t, r) {
            var l = t.Ca;
            0 > t.b && dt(t);
            var p = t.b,
                y = l * r >>> 8,
                x = (t.I >>> p > y) + 0;
            for (x ? (l -= y, t.I -= y + 1 << p >>> 0) : l = y + 1, p = l, y = 0; 256 <= p;) y += 8, p >>= 8;
            return p = 7 ^ y + _n[p], t.b -= p, t.Ca = (l << p) - 1, x
        }

        function Nt(t, r, l) {
            t[r + 0] = l >> 24 & 255, t[r + 1] = l >> 16 & 255, t[r + 2] = l >> 8 & 255, t[r + 3] = 255 & l
        }

        function Pt(t, r) {
            return t[r + 0] | t[r + 1] << 8
        }

        function kt(t, r) {
            return Pt(t, r) | t[r + 2] << 16
        }

        function gt(t, r) {
            return Pt(t, r) | Pt(t, r + 2) << 16
        }

        function H(t, r) {
            var l = 1 << r;
            return e(t != null), e(0 < r), t.X = o(l), t.X == null ? 0 : (t.Mb = 32 - r, t.Xa = r, 1)
        }

        function ue(t, r) {
            e(t != null), e(r != null), e(t.Xa == r.Xa), a(r.X, 0, t.X, 0, 1 << r.Xa)
        }

        function ne() {
            this.X = [], this.Xa = this.Mb = 0
        }

        function Ht(t, r, l, p) {
            e(l != null), e(p != null);
            var y = l[0],
                x = p[0];
            return y == 0 && (y = (t * x + r / 2) / r), x == 0 && (x = (r * y + t / 2) / t), 0 >= y || 0 >= x ? 0 : (l[0] = y, p[0] = x, 1)
        }

        function At(t, r) {
            return t + (1 << r) - 1 >>> r
        }

        function Tt(t, r) {
            return ((4278255360 & t) + (4278255360 & r) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & r) >>> 0 & 16711935) >>> 0
        }

        function _t(t, r) {
            O[r] = function(l, p, y, x, S, k, j) {
                var T;
                for (T = 0; T < S; ++T) {
                    var K = O[t](k[j + T - 1], y, x + T);
                    k[j + T] = Tt(l[p + T], K)
                }
            }
        }

        function ie() {
            this.ud = this.hd = this.jd = 0
        }

        function zt(t, r) {
            return ((4278124286 & (t ^ r)) >>> 1) + (t & r) >>> 0
        }

        function de(t) {
            return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0
        }

        function $t(t, r) {
            return de(t + (t - r + .5 >> 1))
        }

        function Qt(t, r, l) {
            return Math.abs(r - l) - Math.abs(t - l)
        }

        function we(t, r, l, p, y, x, S) {
            for (p = x[S - 1], l = 0; l < y; ++l) x[S + l] = p = Tt(t[r + l], p)
        }

        function ae(t, r, l, p, y) {
            var x;
            for (x = 0; x < l; ++x) {
                var S = t[r + x],
                    k = S >> 8 & 255,
                    j = 16711935 & (j = (j = 16711935 & S) + ((k << 16) + k));
                p[y + x] = (4278255360 & S) + j >>> 0
            }
        }

        function Et(t, r) {
            r.jd = 255 & t, r.hd = t >> 8 & 255, r.ud = t >> 16 & 255
        }

        function Vt(t, r, l, p, y, x) {
            var S;
            for (S = 0; S < p; ++S) {
                var k = r[l + S],
                    j = k >>> 8,
                    T = k,
                    K = 255 & (K = (K = k >>> 16) + ((t.jd << 24 >> 24) * (j << 24 >> 24) >>> 5));
                T = 255 & (T = (T += (t.hd << 24 >> 24) * (j << 24 >> 24) >>> 5) + ((t.ud << 24 >> 24) * (K << 24 >> 24) >>> 5)), y[x + S] = (4278255360 & k) + (K << 16) + T
            }
        }

        function qt(t, r, l, p, y) {
            O[r] = function(x, S, k, j, T, K, lt, E, $) {
                for (j = lt; j < E; ++j)
                    for (lt = 0; lt < $; ++lt) T[K++] = y(k[p(x[S++])])
            }, O[t] = function(x, S, k, j, T, K, lt) {
                var E = 8 >> x.b,
                    $ = x.Ea,
                    it = x.K[0],
                    pt = x.w;
                if (8 > E)
                    for (x = (1 << x.b) - 1, pt = (1 << E) - 1; S < k; ++S) {
                        var ot, vt = 0;
                        for (ot = 0; ot < $; ++ot) ot & x || (vt = p(j[T++])), K[lt++] = y(it[vt & pt]), vt >>= E
                    } else O["VP8LMapColor" + l](j, T, it, pt, K, lt, S, k, $)
            }
        }

        function Pe(t, r, l, p, y) {
            for (l = r + l; r < l;) {
                var x = t[r++];
                p[y++] = x >> 16 & 255, p[y++] = x >> 8 & 255, p[y++] = 255 & x
            }
        }

        function pe(t, r, l, p, y) {
            for (l = r + l; r < l;) {
                var x = t[r++];
                p[y++] = x >> 16 & 255, p[y++] = x >> 8 & 255, p[y++] = 255 & x, p[y++] = x >> 24 & 255
            }
        }

        function Dt(t, r, l, p, y) {
            for (l = r + l; r < l;) {
                var x = (S = t[r++]) >> 16 & 240 | S >> 12 & 15,
                    S = 240 & S | S >> 28 & 15;
                p[y++] = x, p[y++] = S
            }
        }

        function te(t, r, l, p, y) {
            for (l = r + l; r < l;) {
                var x = (S = t[r++]) >> 16 & 248 | S >> 13 & 7,
                    S = S >> 5 & 224 | S >> 3 & 31;
                p[y++] = x, p[y++] = S
            }
        }

        function Le(t, r, l, p, y) {
            for (l = r + l; r < l;) {
                var x = t[r++];
                p[y++] = 255 & x, p[y++] = x >> 8 & 255, p[y++] = x >> 16 & 255
            }
        }

        function Ut(t, r, l, p, y, x) {
            if (x == 0)
                for (l = r + l; r < l;) Nt(p, ((x = t[r++])[0] >> 24 | x[1] >> 8 & 65280 | x[2] << 8 & 16711680 | x[3] << 24) >>> 0), y += 32;
            else a(p, y, t, r, l)
        }

        function le(t, r) {
            O[r][0] = O[t + "0"], O[r][1] = O[t + "1"], O[r][2] = O[t + "2"], O[r][3] = O[t + "3"], O[r][4] = O[t + "4"], O[r][5] = O[t + "5"], O[r][6] = O[t + "6"], O[r][7] = O[t + "7"], O[r][8] = O[t + "8"], O[r][9] = O[t + "9"], O[r][10] = O[t + "10"], O[r][11] = O[t + "11"], O[r][12] = O[t + "12"], O[r][13] = O[t + "13"], O[r][14] = O[t + "0"], O[r][15] = O[t + "0"]
        }

        function ee(t) {
            return t == xo || t == Ao || t == Ea || t == No
        }

        function Re() {
            this.eb = [], this.size = this.A = this.fb = 0
        }

        function Xe() {
            this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
        }

        function xe() {
            this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new Re, this.f.kb = new Xe, this.sd = null
        }

        function Jt() {
            this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0]
        }

        function ve() {
            this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
        }

        function Hn(t) {
            return alert("todo:WebPSamplerProcessPlane"), t.T
        }

        function ur(t, r) {
            var l = t.T,
                p = r.ba.f.RGBA,
                y = p.eb,
                x = p.fb + t.ka * p.A,
                S = Tr[r.ba.S],
                k = t.y,
                j = t.O,
                T = t.f,
                K = t.N,
                lt = t.ea,
                E = t.W,
                $ = r.cc,
                it = r.dc,
                pt = r.Mc,
                ot = r.Nc,
                vt = t.ka,
                bt = t.ka + t.T,
                xt = t.U,
                wt = xt + 1 >> 1;
            for (vt == 0 ? S(k, j, null, null, T, K, lt, E, T, K, lt, E, y, x, null, null, xt) : (S(r.ec, r.fc, k, j, $, it, pt, ot, T, K, lt, E, y, x - p.A, y, x, xt), ++l); vt + 2 < bt; vt += 2) $ = T, it = K, pt = lt, ot = E, K += t.Rc, E += t.Rc, x += 2 * p.A, S(k, (j += 2 * t.fa) - t.fa, k, j, $, it, pt, ot, T, K, lt, E, y, x - p.A, y, x, xt);
            return j += t.fa, t.j + bt < t.o ? (a(r.ec, r.fc, k, j, xt), a(r.cc, r.dc, T, K, wt), a(r.Mc, r.Nc, lt, E, wt), l--) : 1 & bt || S(k, j, null, null, T, K, lt, E, T, K, lt, E, y, x + p.A, null, null, xt), l
        }

        function on(t, r, l) {
            var p = t.F,
                y = [t.J];
            if (p != null) {
                var x = t.U,
                    S = r.ba.S,
                    k = S == Ta || S == Ea;
                r = r.ba.f.RGBA;
                var j = [0],
                    T = t.ka;
                j[0] = t.T, t.Kb && (T == 0 ? --j[0] : (--T, y[0] -= t.width), t.j + t.ka + t.T == t.o && (j[0] = t.o - t.j - T));
                var K = r.eb;
                T = r.fb + T * r.A, t = ns(p, y[0], t.width, x, j, K, T + (k ? 0 : 3), r.A), e(l == j), t && ee(S) && ia(K, T, k, x, j, r.A)
            }
            return 0
        }

        function Xr(t) {
            var r = t.ma,
                l = r.ba.S,
                p = 11 > l,
                y = l == Da || l == Ra || l == Ta || l == Lo || l == 12 || ee(l);
            if (r.memory = null, r.Ib = null, r.Jb = null, r.Nd = null, !Ki(r.Oa, t, y ? 11 : 12)) return 0;
            if (y && ee(l) && Ca(), t.da) alert("todo:use_scaling");
            else {
                if (p) {
                    if (r.Ib = Hn, t.Kb) {
                        if (l = t.U + 1 >> 1, r.memory = o(t.U + 2 * l), r.memory == null) return 0;
                        r.ec = r.memory, r.fc = 0, r.cc = r.ec, r.dc = r.fc + t.U, r.Mc = r.cc, r.Nc = r.dc + l, r.Ib = ur, Ca()
                    }
                } else alert("todo:EmitYUV");
                y && (r.Jb = on, p && Or())
            }
            if (p && !ws) {
                for (t = 0; 256 > t; ++t) Du[t] = 89858 * (t - 128) + za >> qa, Eu[t] = -22014 * (t - 128) + za, Tu[t] = -45773 * (t - 128), Ru[t] = 113618 * (t - 128) + za >> qa;
                for (t = oa; t < Po; ++t) r = 76283 * (t - 16) + za >> qa, qu[t - oa] = Be(r, 255), zu[t - oa] = Be(r + 8 >> 4, 15);
                ws = 1
            }
            return 1
        }

        function Wt(t) {
            var r = t.ma,
                l = t.U,
                p = t.T;
            return e(!(1 & t.ka)), 0 >= l || 0 >= p ? 0 : (l = r.Ib(t, r), r.Jb != null && r.Jb(t, r, l), r.Dc += l, 1)
        }

        function sn(t) {
            t.ma.memory = null
        }

        function un(t, r, l, p) {
            return ct(t, 8) != 47 ? 0 : (r[0] = ct(t, 14) + 1, l[0] = ct(t, 14) + 1, p[0] = ct(t, 1), ct(t, 3) != 0 ? 0 : !t.h)
        }

        function Cr(t, r) {
            if (4 > t) return t + 1;
            var l = t - 2 >> 1;
            return (2 + (1 & t) << l) + ct(r, l) + 1
        }

        function jr(t, r) {
            return 120 < r ? r - 120 : 1 <= (l = ((l = xu[r - 1]) >> 4) * t + (8 - (15 & l))) ? l : 1;
            var l
        }

        function Ie(t, r, l) {
            var p = U(l),
                y = t[r += 255 & p].g - 8;
            return 0 < y && (Q(l, l.u + 8), p = U(l), r += t[r].value, r += p & (1 << y) - 1), Q(l, l.u + t[r].g), t[r].value
        }

        function rr(t, r, l) {
            return l.g += t.g, l.value += t.value << r >>> 0, e(8 >= l.g), t.g
        }

        function nr(t, r, l) {
            var p = t.xc;
            return e((r = p == 0 ? 0 : t.vc[t.md * (l >> p) + (r >> p)]) < t.Wb), t.Ya[r]
        }

        function Un(t, r, l, p) {
            var y = t.ab,
                x = t.c * r,
                S = t.C;
            r = S + r;
            var k = l,
                j = p;
            for (p = t.Ta, l = t.Ua; 0 < y--;) {
                var T = t.gc[y],
                    K = S,
                    lt = r,
                    E = k,
                    $ = j,
                    it = (j = p, k = l, T.Ea);
                switch (e(K < lt), e(lt <= T.nc), T.hc) {
                    case 2:
                        Ee(E, $, (lt - K) * it, j, k);
                        break;
                    case 0:
                        var pt = K,
                            ot = lt,
                            vt = j,
                            bt = k,
                            xt = (It = T).Ea;
                        pt == 0 && ($i(E, $, null, null, 1, vt, bt), we(E, $ + 1, 0, 0, xt - 1, vt, bt + 1), $ += xt, bt += xt, ++pt);
                        for (var wt = 1 << It.b, Rt = wt - 1, Ft = At(xt, It.b), oe = It.K, It = It.w + (pt >> It.b) * Ft; pt < ot;) {
                            var he = oe,
                                $e = It,
                                se = 1;
                            for (Fi(E, $, vt, bt - xt, 1, vt, bt); se < xt;) {
                                var Bt = (se & ~Rt) + wt;
                                Bt > xt && (Bt = xt), (0, ta[he[$e++] >> 8 & 15])(E, $ + +se, vt, bt + se - xt, Bt - se, vt, bt + se), se = Bt
                            }
                            $ += xt, bt += xt, ++pt & Rt || (It += Ft)
                        }
                        lt != T.nc && a(j, k - it, j, k + (lt - K - 1) * it, it);
                        break;
                    case 1:
                        for (it = E, ot = $, xt = (E = T.Ea) - (bt = E & ~(vt = ($ = 1 << T.b) - 1)), pt = At(E, T.b), wt = T.K, T = T.w + (K >> T.b) * pt; K < lt;) {
                            for (Rt = wt, Ft = T, oe = new ie, It = ot + bt, he = ot + E; ot < It;) Et(Rt[Ft++], oe), ea(oe, it, ot, $, j, k), ot += $, k += $;
                            ot < he && (Et(Rt[Ft++], oe), ea(oe, it, ot, xt, j, k), ot += xt, k += xt), ++K & vt || (T += pt)
                        }
                        break;
                    case 3:
                        if (E == j && $ == k && 0 < T.b) {
                            for (ot = j, E = it = k + (lt - K) * it - (bt = (lt - K) * At(T.Ea, T.b)), $ = j, vt = k, pt = [], bt = (xt = bt) - 1; 0 <= bt; --bt) pt[bt] = $[vt + bt];
                            for (bt = xt - 1; 0 <= bt; --bt) ot[E + bt] = pt[bt];
                            Ia(T, K, lt, j, it, j, k)
                        } else Ia(T, K, lt, E, $, j, k)
                }
                k = p, j = l
            }
            j != l && a(p, l, k, j, x)
        }

        function wn(t, r) {
            var l = t.V,
                p = t.Ba + t.c * t.C,
                y = r - t.C;
            if (e(r <= t.l.o), e(16 >= y), 0 < y) {
                var x = t.l,
                    S = t.Ta,
                    k = t.Ua,
                    j = x.width;
                if (Un(t, y, l, p), y = k = [k], e((l = t.C) < (p = r)), e(x.v < x.va), p > x.o && (p = x.o), l < x.j) {
                    var T = x.j - l;
                    l = x.j, y[0] += T * j
                }
                if (l >= p ? l = 0 : (y[0] += 4 * x.v, x.ka = l - x.j, x.U = x.va - x.v, x.T = p - l, l = 1), l) {
                    if (k = k[0], 11 > (l = t.ca).S) {
                        var K = l.f.RGBA,
                            lt = (p = l.S, y = x.U, x = x.T, T = K.eb, K.A),
                            E = x;
                        for (K = K.fb + t.Ma * K.A; 0 < E--;) {
                            var $ = S,
                                it = k,
                                pt = y,
                                ot = T,
                                vt = K;
                            switch (p) {
                                case Ma:
                                    ra($, it, pt, ot, vt);
                                    break;
                                case Da:
                                    Pn($, it, pt, ot, vt);
                                    break;
                                case xo:
                                    Pn($, it, pt, ot, vt), ia(ot, vt, 0, pt, 1, 0);
                                    break;
                                case hs:
                                    li($, it, pt, ot, vt);
                                    break;
                                case Ra:
                                    Ut($, it, pt, ot, vt, 1);
                                    break;
                                case Ao:
                                    Ut($, it, pt, ot, vt, 1), ia(ot, vt, 0, pt, 1, 0);
                                    break;
                                case Ta:
                                    Ut($, it, pt, ot, vt, 0);
                                    break;
                                case Ea:
                                    Ut($, it, pt, ot, vt, 0), ia(ot, vt, 1, pt, 1, 0);
                                    break;
                                case Lo:
                                    kn($, it, pt, ot, vt);
                                    break;
                                case No:
                                    kn($, it, pt, ot, vt), rs(ot, vt, pt, 1, 0);
                                    break;
                                case cs:
                                    Fn($, it, pt, ot, vt);
                                    break;
                                default:
                                    e(0)
                            }
                            k += j, K += lt
                        }
                        t.Ma += x
                    } else alert("todo:EmitRescaledRowsYUVA");
                    e(t.Ma <= l.height)
                }
            }
            t.C = r, e(t.C <= t.i)
        }

        function Er(t) {
            var r;
            if (0 < t.ua) return 0;
            for (r = 0; r < t.Wb; ++r) {
                var l = t.Ya[r].G,
                    p = t.Ya[r].H;
                if (0 < l[1][p[1] + 0].g || 0 < l[2][p[2] + 0].g || 0 < l[3][p[3] + 0].g) return 0
            }
            return 1
        }

        function Kr(t, r, l, p, y, x) {
            if (t.Z != 0) {
                var S = t.qd,
                    k = t.rd;
                for (e(In[t.Z] != null); r < l; ++r) In[t.Z](S, k, p, y, p, y, x), S = p, k = y, y += x;
                t.qd = S, t.rd = k
            }
        }

        function qr(t, r) {
            var l = t.l.ma,
                p = l.Z == 0 || l.Z == 1 ? t.l.j : t.C;
            if (p = t.C < p ? p : t.C, e(r <= t.l.o), r > p) {
                var y = t.l.width,
                    x = l.ca,
                    S = l.tb + y * p,
                    k = t.V,
                    j = t.Ba + t.c * p,
                    T = t.gc;
                e(t.ab == 1), e(T[0].hc == 3), tn(T[0], p, r, k, j, x, S), Kr(l, p, r, x, S, y)
            }
            t.C = t.Ma = r
        }

        function zr(t, r, l, p, y, x, S) {
            var k = t.$ / p,
                j = t.$ % p,
                T = t.m,
                K = t.s,
                lt = l + t.$,
                E = lt;
            y = l + p * y;
            var $ = l + p * x,
                it = 280 + K.ua,
                pt = t.Pb ? k : 16777216,
                ot = 0 < K.ua ? K.Wa : null,
                vt = K.wc,
                bt = lt < $ ? nr(K, j, k) : null;
            e(t.C < x), e($ <= y);
            var xt = !1;
            t: for (;;) {
                for (; xt || lt < $;) {
                    var wt = 0;
                    if (k >= pt) {
                        var Rt = lt - l;
                        e((pt = t).Pb), pt.wd = pt.m, pt.xd = Rt, 0 < pt.s.ua && ue(pt.s.Wa, pt.s.vb), pt = k + Nu
                    }
                    if (j & vt || (bt = nr(K, j, k)), e(bt != null), bt.Qb && (r[lt] = bt.qb, xt = !0), !xt)
                        if (ut(T), bt.jc) {
                            wt = T, Rt = r;
                            var Ft = lt,
                                oe = bt.pd[U(wt) & ui - 1];
                            e(bt.jc), 256 > oe.g ? (Q(wt, wt.u + oe.g), Rt[Ft] = oe.value, wt = 0) : (Q(wt, wt.u + oe.g - 256), e(256 <= oe.value), wt = oe.value), wt == 0 && (xt = !0)
                        } else wt = Ie(bt.G[0], bt.H[0], T);
                    if (T.h) break;
                    if (xt || 256 > wt) {
                        if (!xt)
                            if (bt.nd) r[lt] = (bt.qb | wt << 8) >>> 0;
                            else {
                                if (ut(T), xt = Ie(bt.G[1], bt.H[1], T), ut(T), Rt = Ie(bt.G[2], bt.H[2], T), Ft = Ie(bt.G[3], bt.H[3], T), T.h) break;
                                r[lt] = (Ft << 24 | xt << 16 | wt << 8 | Rt) >>> 0
                            }
                        if (xt = !1, ++lt, ++j >= p && (j = 0, ++k, S != null && k <= x && !(k % 16) && S(t, k), ot != null))
                            for (; E < lt;) wt = r[E++], ot.X[(506832829 * wt & 4294967295) >>> ot.Mb] = wt
                    } else if (280 > wt) {
                        if (wt = Cr(wt - 256, T), Rt = Ie(bt.G[4], bt.H[4], T), ut(T), Rt = jr(p, Rt = Cr(Rt, T)), T.h) break;
                        if (lt - l < Rt || y - lt < wt) break t;
                        for (Ft = 0; Ft < wt; ++Ft) r[lt + Ft] = r[lt + Ft - Rt];
                        for (lt += wt, j += wt; j >= p;) j -= p, ++k, S != null && k <= x && !(k % 16) && S(t, k);
                        if (e(lt <= y), j & vt && (bt = nr(K, j, k)), ot != null)
                            for (; E < lt;) wt = r[E++], ot.X[(506832829 * wt & 4294967295) >>> ot.Mb] = wt
                    } else {
                        if (!(wt < it)) break t;
                        for (xt = wt - 280, e(ot != null); E < lt;) wt = r[E++], ot.X[(506832829 * wt & 4294967295) >>> ot.Mb] = wt;
                        wt = lt, e(!(xt >>> (Rt = ot).Xa)), r[wt] = Rt.X[xt], xt = !0
                    }
                    xt || e(T.h == Z(T))
                }
                if (t.Pb && T.h && lt < y) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && ue(t.s.vb, t.s.Wa);
                else {
                    if (T.h) break t;
                    S ? .(t, k > x ? x : k), t.a = 0, t.$ = lt - l
                }
                return 1
            }
            return t.a = 3, 0
        }

        function Ir(t) {
            e(t != null), t.vc = null, t.yc = null, t.Ya = null;
            var r = t.Wa;
            r != null && (r.X = null), t.vb = null, e(t != null)
        }

        function Wn() {
            var t = new Ot;
            return t == null ? null : (t.a = 0, t.xb = ps, le("Predictor", "VP8LPredictors"), le("Predictor", "VP8LPredictors_C"), le("PredictorAdd", "VP8LPredictorsAdd"), le("PredictorAdd", "VP8LPredictorsAdd_C"), Ee = ae, ea = Vt, ra = Pe, Pn = pe, kn = Dt, Fn = te, li = Le, O.VP8LMapColor32b = Qr, O.VP8LMapColor8b = Qi, t)
        }

        function Zr(t, r, l, p, y) {
            var x = 1,
                S = [t],
                k = [r],
                j = p.m,
                T = p.s,
                K = null,
                lt = 0;
            t: for (;;) {
                if (l)
                    for (; x && ct(j, 1);) {
                        var E = S,
                            $ = k,
                            it = p,
                            pt = 1,
                            ot = it.m,
                            vt = it.gc[it.ab],
                            bt = ct(ot, 2);
                        if (it.Oc & 1 << bt) x = 0;
                        else {
                            switch (it.Oc |= 1 << bt, vt.hc = bt, vt.Ea = E[0], vt.nc = $[0], vt.K = [null], ++it.ab, e(4 >= it.ab), bt) {
                                case 0:
                                case 1:
                                    vt.b = ct(ot, 3) + 2, pt = Zr(At(vt.Ea, vt.b), At(vt.nc, vt.b), 0, it, vt.K), vt.K = vt.K[0];
                                    break;
                                case 3:
                                    var xt, wt = ct(ot, 8) + 1,
                                        Rt = 16 < wt ? 0 : 4 < wt ? 1 : 2 < wt ? 2 : 3;
                                    if (E[0] = At(vt.Ea, Rt), vt.b = Rt, xt = pt = Zr(wt, 1, 0, it, vt.K)) {
                                        var Ft, oe = wt,
                                            It = vt,
                                            he = 1 << (8 >> It.b),
                                            $e = o(he);
                                        if ($e == null) xt = 0;
                                        else {
                                            var se = It.K[0],
                                                Bt = It.w;
                                            for ($e[0] = It.K[0][0], Ft = 1; Ft < 1 * oe; ++Ft) $e[Ft] = Tt(se[Bt + Ft], $e[Ft - 1]);
                                            for (; Ft < 4 * he; ++Ft) $e[Ft] = 0;
                                            It.K[0] = null, It.K[0] = $e, xt = 1
                                        }
                                    }
                                    pt = xt;
                                    break;
                                case 2:
                                    break;
                                default:
                                    e(0)
                            }
                            x = pt
                        }
                    }
                if (S = S[0], k = k[0], x && ct(j, 1) && !(x = 1 <= (lt = ct(j, 4)) && 11 >= lt)) {
                    p.a = 3;
                    break t
                }
                var St;
                if (St = x) e: {
                    var ze, re, ce, Ce = p,
                        ar = S,
                        gr = k,
                        Oe = lt,
                        hr = l,
                        vr = Ce.m,
                        Qe = Ce.s,
                        fe = [null],
                        be = 1,
                        Me = 0,
                        ye = Au[Oe];r: for (;;) {
                        if (hr && ct(vr, 1)) {
                            var or = ct(vr, 3) + 2,
                                Wr = At(ar, or),
                                He = At(gr, or),
                                yr = Wr * He;
                            if (!Zr(Wr, He, 0, Ce, fe)) break r;
                            for (fe = fe[0], Qe.xc = or, ze = 0; ze < yr; ++ze) {
                                var Ne = fe[ze] >> 8 & 65535;
                                fe[ze] = Ne, Ne >= be && (be = Ne + 1)
                            }
                        }
                        if (vr.h) break r;
                        for (re = 0; 5 > re; ++re) {
                            var tr = fs[re];
                            !re && 0 < Oe && (tr += 1 << Oe), Me < tr && (Me = tr)
                        }
                        var Sr = f(be * ye, F),
                            mr = be,
                            _r = f(mr, J);
                        if (_r == null) var Pr = null;
                        else e(65536 >= mr), Pr = _r;
                        var wr = o(Me);
                        if (Pr == null || wr == null || Sr == null) {
                            Ce.a = 1;
                            break r
                        }
                        var kr = Sr;
                        for (ze = ce = 0; ze < be; ++ze) {
                            var Fe = Pr[ze],
                                Fr = Fe.G,
                                Vr = Fe.H,
                                ci = 0,
                                bn = 1,
                                sr = 0;
                            for (re = 0; 5 > re; ++re) {
                                tr = fs[re], Fr[re] = kr, Vr[re] = ce, !re && 0 < Oe && (tr += 1 << Oe);
                                i: {
                                    var Ua, ko = tr,
                                        Wa = Ce,
                                        sa = wr,
                                        Wu = kr,
                                        Vu = ce,
                                        Fo = 0,
                                        Bn = Wa.m,
                                        Gu = ct(Bn, 1);
                                    if (s(sa, 0, 0, ko), Gu) {
                                        var Yu = ct(Bn, 1) + 1,
                                            Ju = ct(Bn, 1),
                                            As = ct(Bn, Ju == 0 ? 1 : 8);
                                        sa[As] = 1, Yu == 2 && (sa[As = ct(Bn, 8)] = 1);
                                        var Va = 1
                                    } else {
                                        var Ns = o(19),
                                            Ss = ct(Bn, 4) + 4;
                                        if (19 < Ss) {
                                            Wa.a = 3;
                                            var Ga = 0;
                                            break i
                                        }
                                        for (Ua = 0; Ua < Ss; ++Ua) Ns[Lu[Ua]] = ct(Bn, 3);
                                        var Co = void 0,
                                            ua = void 0,
                                            _s = Wa,
                                            Xu = Ns,
                                            Ya = ko,
                                            Ps = sa,
                                            jo = 0,
                                            On = _s.m,
                                            ks = 8,
                                            Fs = f(128, F);
                                        n: for (; M(Fs, 0, 7, Xu, 19);) {
                                            if (ct(On, 1)) {
                                                var Ku = 2 + 2 * ct(On, 3);
                                                if ((Co = 2 + ct(On, Ku)) > Ya) break n
                                            } else Co = Ya;
                                            for (ua = 0; ua < Ya && Co--;) {
                                                ut(On);
                                                var Cs = Fs[0 + (127 & U(On))];
                                                Q(On, On.u + Cs.g);
                                                var ji = Cs.value;
                                                if (16 > ji) Ps[ua++] = ji, ji != 0 && (ks = ji);
                                                else {
                                                    var Zu = ji == 16,
                                                        js = ji - 16,
                                                        $u = yu[js],
                                                        Is = ct(On, bu[js]) + $u;
                                                    if (ua + Is > Ya) break n;
                                                    for (var Qu = Zu ? ks : 0; 0 < Is--;) Ps[ua++] = Qu
                                                }
                                            }
                                            jo = 1;
                                            break n
                                        }
                                        jo || (_s.a = 3), Va = jo
                                    }(Va = Va && !Bn.h) && (Fo = M(Wu, Vu, 8, sa, ko)),
                                    Va && Fo != 0 ? Ga = Fo : (Wa.a = 3, Ga = 0)
                                }
                                if (Ga == 0) break r;
                                if (bn && wu[re] == 1 && (bn = kr[ce].g == 0), ci += kr[ce].g, ce += Ga, 3 >= re) {
                                    var la, Io = wr[0];
                                    for (la = 1; la < tr; ++la) wr[la] > Io && (Io = wr[la]);
                                    sr += Io
                                }
                            }
                            if (Fe.nd = bn, Fe.Qb = 0, bn && (Fe.qb = (Fr[3][Vr[3] + 0].value << 24 | Fr[1][Vr[1] + 0].value << 16 | Fr[2][Vr[2] + 0].value) >>> 0, ci == 0 && 256 > Fr[0][Vr[0] + 0].value && (Fe.Qb = 1, Fe.qb += Fr[0][Vr[0] + 0].value << 8)), Fe.jc = !Fe.Qb && 6 > sr, Fe.jc) {
                                var Ja, yn = Fe;
                                for (Ja = 0; Ja < ui; ++Ja) {
                                    var Mn = Ja,
                                        Dn = yn.pd[Mn],
                                        Xa = yn.G[0][yn.H[0] + Mn];
                                    256 <= Xa.value ? (Dn.g = Xa.g + 256, Dn.value = Xa.value) : (Dn.g = 0, Dn.value = 0, Mn >>= rr(Xa, 8, Dn), Mn >>= rr(yn.G[1][yn.H[1] + Mn], 16, Dn), Mn >>= rr(yn.G[2][yn.H[2] + Mn], 0, Dn), rr(yn.G[3][yn.H[3] + Mn], 24, Dn))
                                }
                            }
                        }
                        Qe.vc = fe, Qe.Wb = be, Qe.Ya = Pr, Qe.yc = Sr, St = 1;
                        break e
                    }
                    St = 0
                }
                if (!(x = St)) {
                    p.a = 3;
                    break t
                }
                if (0 < lt) {
                    if (T.ua = 1 << lt, !H(T.Wa, lt)) {
                        p.a = 1, x = 0;
                        break t
                    }
                } else T.ua = 0;
                var Bo = p,
                    Bs = S,
                    tl = k,
                    Oo = Bo.s,
                    Mo = Oo.xc;
                if (Bo.c = Bs, Bo.i = tl, Oo.md = At(Bs, Mo), Oo.wc = Mo == 0 ? -1 : (1 << Mo) - 1, l) {
                    p.xb = ju;
                    break t
                }
                if ((K = o(S * k)) == null) {
                    p.a = 1, x = 0;
                    break t
                }
                x = (x = zr(p, K, 0, S, k, k, null)) && !j.h;
                break t
            }
            return x ? (y != null ? y[0] = K : (e(K == null), e(l)), p.$ = 0, l || Ir(T)) : Ir(T), x
        }

        function Vn(t, r) {
            var l = t.c * t.i,
                p = l + r + 16 * r;
            return e(t.c <= r), t.V = o(p), t.V == null ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + l + r, 1)
        }

        function yi(t, r) {
            var l = t.C,
                p = r - l,
                y = t.V,
                x = t.Ba + t.c * l;
            for (e(r <= t.l.o); 0 < p;) {
                var S = 16 < p ? 16 : p,
                    k = t.l.ma,
                    j = t.l.width,
                    T = j * S,
                    K = k.ca,
                    lt = k.tb + j * l,
                    E = t.Ta,
                    $ = t.Ua;
                Un(t, S, y, x), is(E, $, K, lt, T), Kr(k, l, l + S, K, lt, j), p -= S, y += S * t.c, l += S
            }
            e(l == r), t.C = t.Ma = r
        }

        function wi() {
            this.ub = this.yd = this.td = this.Rb = 0
        }

        function Li() {
            this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
        }

        function no() {
            this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4)
        }

        function Di() {
            this.Yb = (function() {
                var t = [];
                return (function r(l, p, y) {
                    for (var x = y[p], S = 0; S < x && (l.push(y.length > p + 1 ? [] : 0), !(y.length < p + 1)); S++) r(l[S], p + 1, y)
                })(t, 0, [3, 11]), t
            })()
        }

        function ga() {
            this.jb = o(3), this.Wc = h([4, 8], Di), this.Xc = h([4, 17], Di)
        }

        function va() {
            this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4)
        }

        function Br() {
            this.ld = this.La = this.dd = this.tc = 0
        }

        function Ri() {
            this.Na = this.la = 0
        }

        function ma() {
            this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0
        }

        function Ti() {
            this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0
        }

        function ba() {
            this.uc = this.M = this.Nb = 0, this.wa = Array(new Br), this.Y = 0, this.ya = Array(new Ti), this.aa = 0, this.l = new xi
        }

        function ya() {
            this.y = o(16), this.f = o(8), this.ea = o(8)
        }

        function wa() {
            this.cb = this.a = 0, this.sc = "", this.m = new L, this.Od = new wi, this.Kc = new Li, this.ed = new va, this.Qa = new no, this.Ic = this.$c = this.Aa = 0, this.D = new ba, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = f(8, L), this.ia = 0, this.pb = f(4, ma), this.Pa = new ga, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new ya), this.Hd = 0, this.rb = Array(new Ri), this.sb = 0, this.wa = Array(new Br), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Ti), this.L = this.aa = 0, this.gd = h([4, 2], Br), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0
        }

        function xi() {
            this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0
        }

        function io() {
            var t = new wa;
            return t != null && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, aa || (aa = ln)), t
        }

        function Ge(t, r, l) {
            return t.a == 0 && (t.a = r, t.sc = l, t.cb = 0), 0
        }

        function La(t, r, l) {
            return 3 <= l && t[r + 0] == 157 && t[r + 1] == 1 && t[r + 2] == 42
        }

        function xa(t, r) {
            if (t == null) return 0;
            if (t.a = 0, t.sc = "OK", r == null) return Ge(t, 2, "null VP8Io passed to VP8GetHeaders()");
            var l = r.data,
                p = r.w,
                y = r.ha;
            if (4 > y) return Ge(t, 7, "Truncated header.");
            var x = l[p + 0] | l[p + 1] << 8 | l[p + 2] << 16,
                S = t.Od;
            if (S.Rb = !(1 & x), S.td = x >> 1 & 7, S.yd = x >> 4 & 1, S.ub = x >> 5, 3 < S.td) return Ge(t, 3, "Incorrect keyframe parameters.");
            if (!S.yd) return Ge(t, 4, "Frame not displayable.");
            p += 3, y -= 3;
            var k = t.Kc;
            if (S.Rb) {
                if (7 > y) return Ge(t, 7, "cannot parse picture header");
                if (!La(l, p, y)) return Ge(t, 3, "Bad code word");
                k.c = 16383 & (l[p + 4] << 8 | l[p + 3]), k.Td = l[p + 4] >> 6, k.i = 16383 & (l[p + 6] << 8 | l[p + 5]), k.Ud = l[p + 6] >> 6, p += 7, y -= 7, t.za = k.c + 15 >> 4, t.Ub = k.i + 15 >> 4, r.width = k.c, r.height = k.i, r.Da = 0, r.j = 0, r.v = 0, r.va = r.width, r.o = r.height, r.da = 0, r.ib = r.width, r.hb = r.height, r.U = r.width, r.T = r.height, s((x = t.Pa).jb, 0, 255, x.jb.length), e((x = t.Qa) != null), x.Cb = 0, x.Bb = 0, x.Fb = 1, s(x.Zb, 0, 0, x.Zb.length), s(x.Lb, 0, 0, x.Lb)
            }
            if (S.ub > y) return Ge(t, 7, "bad partition length");
            W(x = t.m, l, p, S.ub), p += S.ub, y -= S.ub, S.Rb && (k.Ld = ft(x), k.Kd = ft(x)), k = t.Qa;
            var j, T = t.Pa;
            if (e(x != null), e(k != null), k.Cb = ft(x), k.Cb) {
                if (k.Bb = ft(x), ft(x)) {
                    for (k.Fb = ft(x), j = 0; 4 > j; ++j) k.Zb[j] = ft(x) ? X(x, 7) : 0;
                    for (j = 0; 4 > j; ++j) k.Lb[j] = ft(x) ? X(x, 6) : 0
                }
                if (k.Bb)
                    for (j = 0; 3 > j; ++j) T.jb[j] = ft(x) ? nt(x, 8) : 255
            } else k.Bb = 0;
            if (x.Ka) return Ge(t, 3, "cannot parse segment header");
            if ((k = t.ed).zd = ft(x), k.Tb = nt(x, 6), k.wb = nt(x, 3), k.Pc = ft(x), k.Pc && ft(x)) {
                for (T = 0; 4 > T; ++T) ft(x) && (k.vd[T] = X(x, 6));
                for (T = 0; 4 > T; ++T) ft(x) && (k.od[T] = X(x, 6))
            }
            if (t.L = k.Tb == 0 ? 0 : k.zd ? 1 : 2, x.Ka) return Ge(t, 3, "cannot parse filter header");
            var K = y;
            if (y = j = p, p = j + K, k = K, t.Xb = (1 << nt(t.m, 2)) - 1, K < 3 * (T = t.Xb)) l = 7;
            else {
                for (j += 3 * T, k -= 3 * T, K = 0; K < T; ++K) {
                    var lt = l[y + 0] | l[y + 1] << 8 | l[y + 2] << 16;
                    lt > k && (lt = k), W(t.Jc[+K], l, j, lt), j += lt, k -= lt, y += 3
                }
                W(t.Jc[+T], l, j, k), l = j < p ? 0 : 5
            }
            if (l != 0) return Ge(t, l, "cannot parse partitions");
            for (l = nt(j = t.m, 7), y = ft(j) ? X(j, 4) : 0, p = ft(j) ? X(j, 4) : 0, k = ft(j) ? X(j, 4) : 0, T = ft(j) ? X(j, 4) : 0, j = ft(j) ? X(j, 4) : 0, K = t.Qa, lt = 0; 4 > lt; ++lt) {
                if (K.Cb) {
                    var E = K.Zb[lt];
                    K.Fb || (E += l)
                } else {
                    if (0 < lt) {
                        t.pb[lt] = t.pb[0];
                        continue
                    }
                    E = l
                }
                var $ = t.pb[lt];
                $.Sc[0] = So[Be(E + y, 127)], $.Sc[1] = _o[Be(E + 0, 127)], $.Eb[0] = 2 * So[Be(E + p, 127)], $.Eb[1] = 101581 * _o[Be(E + k, 127)] >> 16, 8 > $.Eb[1] && ($.Eb[1] = 8), $.Qc[0] = So[Be(E + T, 117)], $.Qc[1] = _o[Be(E + j, 127)], $.lc = E + j
            }
            if (!S.Rb) return Ge(t, 4, "Not a key frame.");
            for (ft(x), S = t.Pa, l = 0; 4 > l; ++l) {
                for (y = 0; 8 > y; ++y)
                    for (p = 0; 3 > p; ++p)
                        for (k = 0; 11 > k; ++k) T = yt(x, Fu[l][y][p][k]) ? nt(x, 8) : Pu[l][y][p][k], S.Wc[l][y].Yb[p][k] = T;
                for (y = 0; 17 > y; ++y) S.Xc[l][y] = S.Wc[l][Cu[y]]
            }
            return t.kc = ft(x), t.kc && (t.Bd = nt(x, 8)), t.cb = 1
        }

        function ln(t, r, l, p, y, x, S) {
            var k = r[y].Yb[l];
            for (l = 0; 16 > y; ++y) {
                if (!yt(t, k[l + 0])) return y;
                for (; !yt(t, k[l + 1]);)
                    if (k = r[++y].Yb[0], l = 0, y == 16) return 16;
                var j = r[y + 1].Yb;
                if (yt(t, k[l + 2])) {
                    var T = t,
                        K = 0;
                    if (yt(T, (E = k)[(lt = l) + 3]))
                        if (yt(T, E[lt + 6])) {
                            for (k = 0, lt = 2 * (K = yt(T, E[lt + 8])) + (E = yt(T, E[lt + 9 + K])), K = 0, E = Su[lt]; E[k]; ++k) K += K + yt(T, E[k]);
                            K += 3 + (8 << lt)
                        } else yt(T, E[lt + 7]) ? (K = 7 + 2 * yt(T, 165), K += yt(T, 145)) : K = 5 + yt(T, 159);
                    else K = yt(T, E[lt + 4]) ? 3 + yt(T, E[lt + 5]) : 2;
                    k = j[2]
                } else K = 1, k = j[1];
                j = S + _u[y], 0 > (T = t).b && dt(T);
                var lt, E = T.b,
                    $ = (lt = T.Ca >> 1) - (T.I >> E) >> 31;
                --T.b, T.Ca += $, T.Ca |= 1, T.I -= (lt + 1 & $) << E, x[j] = ((K ^ $) - $) * p[(0 < y) + 0]
            }
            return 16
        }

        function Gn(t) {
            var r = t.rb[t.sb - 1];
            r.la = 0, r.Na = 0, s(t.zc, 0, 0, t.zc.length), t.ja = 0
        }

        function Hr(t, r, l, p, y) {
            y = t[r + l + 32 * p] + (y >> 3), t[r + l + 32 * p] = -256 & y ? 0 > y ? 0 : 255 : y
        }

        function Yn(t, r, l, p, y, x) {
            Hr(t, r, 0, l, p + y), Hr(t, r, 1, l, p + x), Hr(t, r, 2, l, p - x), Hr(t, r, 3, l, p - y)
        }

        function Te(t) {
            return (20091 * t >> 16) + t
        }

        function Ei(t, r, l, p) {
            var y, x = 0,
                S = o(16);
            for (y = 0; 4 > y; ++y) {
                var k = t[r + 0] + t[r + 8],
                    j = t[r + 0] - t[r + 8],
                    T = (35468 * t[r + 4] >> 16) - Te(t[r + 12]),
                    K = Te(t[r + 4]) + (35468 * t[r + 12] >> 16);
                S[x + 0] = k + K, S[x + 1] = j + T, S[x + 2] = j - T, S[x + 3] = k - K, x += 4, r++
            }
            for (y = x = 0; 4 > y; ++y) k = (t = S[x + 0] + 4) + S[x + 8], j = t - S[x + 8], T = (35468 * S[x + 4] >> 16) - Te(S[x + 12]), Hr(l, p, 0, 0, k + (K = Te(S[x + 4]) + (35468 * S[x + 12] >> 16))), Hr(l, p, 1, 0, j + T), Hr(l, p, 2, 0, j - T), Hr(l, p, 3, 0, k - K), x++, p += 32
        }

        function ao(t, r, l, p) {
            var y = t[r + 0] + 4,
                x = 35468 * t[r + 4] >> 16,
                S = Te(t[r + 4]),
                k = 35468 * t[r + 1] >> 16;
            Yn(l, p, 0, y + S, t = Te(t[r + 1]), k), Yn(l, p, 1, y + x, t, k), Yn(l, p, 2, y - x, t, k), Yn(l, p, 3, y - S, t, k)
        }

        function oo(t, r, l, p, y) {
            Ei(t, r, l, p), y && Ei(t, r + 16, l, p + 4)
        }

        function so(t, r, l, p) {
            hi(t, r + 0, l, p, 1), hi(t, r + 32, l, p + 128, 1)
        }

        function $r(t, r, l, p) {
            var y;
            for (t = t[r + 0] + 4, y = 0; 4 > y; ++y)
                for (r = 0; 4 > r; ++r) Hr(l, p, r, y, t)
        }

        function Aa(t, r, l, p) {
            t[r + 0] && me(t, r + 0, l, p), t[r + 16] && me(t, r + 16, l, p + 4), t[r + 32] && me(t, r + 32, l, p + 128), t[r + 48] && me(t, r + 48, l, p + 128 + 4)
        }

        function Na(t, r, l, p) {
            var y, x = o(16);
            for (y = 0; 4 > y; ++y) {
                var S = t[r + 0 + y] + t[r + 12 + y],
                    k = t[r + 4 + y] + t[r + 8 + y],
                    j = t[r + 4 + y] - t[r + 8 + y],
                    T = t[r + 0 + y] - t[r + 12 + y];
                x[0 + y] = S + k, x[8 + y] = S - k, x[4 + y] = T + j, x[12 + y] = T - j
            }
            for (y = 0; 4 > y; ++y) S = (t = x[0 + 4 * y] + 3) + x[3 + 4 * y], k = x[1 + 4 * y] + x[2 + 4 * y], j = x[1 + 4 * y] - x[2 + 4 * y], T = t - x[3 + 4 * y], l[p + 0] = S + k >> 3, l[p + 16] = T + j >> 3, l[p + 32] = S - k >> 3, l[p + 48] = T - j >> 3, p += 64
        }

        function Ln(t, r, l) {
            var p, y = r - 32,
                x = Nr,
                S = 255 - t[y - 1];
            for (p = 0; p < l; ++p) {
                var k, j = x,
                    T = S + t[r - 1];
                for (k = 0; k < l; ++k) t[r + k] = j[T + t[y + k]];
                r += 32
            }
        }

        function qi(t, r) {
            Ln(t, r, 4)
        }

        function uo(t, r) {
            Ln(t, r, 8)
        }

        function lo(t, r) {
            Ln(t, r, 16)
        }

        function ho(t, r) {
            var l;
            for (l = 0; 16 > l; ++l) a(t, r + 32 * l, t, r - 32, 16)
        }

        function zi(t, r) {
            var l;
            for (l = 16; 0 < l; --l) s(t, r, t[r - 1], 16), r += 32
        }

        function Jn(t, r, l) {
            var p;
            for (p = 0; 16 > p; ++p) s(r, l + 32 * p, t, 16)
        }

        function xn(t, r) {
            var l, p = 16;
            for (l = 0; 16 > l; ++l) p += t[r - 1 + 32 * l] + t[r + l - 32];
            Jn(p >> 5, t, r)
        }

        function co(t, r) {
            var l, p = 8;
            for (l = 0; 16 > l; ++l) p += t[r - 1 + 32 * l];
            Jn(p >> 4, t, r)
        }

        function Xn(t, r) {
            var l, p = 8;
            for (l = 0; 16 > l; ++l) p += t[r + l - 32];
            Jn(p >> 4, t, r)
        }

        function Hi(t, r) {
            Jn(128, t, r)
        }

        function Xt(t, r, l) {
            return t + 2 * r + l + 2 >> 2
        }

        function fo(t, r) {
            var l, p = r - 32;
            for (p = new Uint8Array([Xt(t[p - 1], t[p + 0], t[p + 1]), Xt(t[p + 0], t[p + 1], t[p + 2]), Xt(t[p + 1], t[p + 2], t[p + 3]), Xt(t[p + 2], t[p + 3], t[p + 4])]), l = 0; 4 > l; ++l) a(t, r + 32 * l, p, 0, p.length)
        }

        function po(t, r) {
            var l = t[r - 1],
                p = t[r - 1 + 32],
                y = t[r - 1 + 64],
                x = t[r - 1 + 96];
            Nt(t, r + 0, 16843009 * Xt(t[r - 1 - 32], l, p)), Nt(t, r + 32, 16843009 * Xt(l, p, y)), Nt(t, r + 64, 16843009 * Xt(p, y, x)), Nt(t, r + 96, 16843009 * Xt(y, x, x))
        }

        function go(t, r) {
            var l, p = 4;
            for (l = 0; 4 > l; ++l) p += t[r + l - 32] + t[r - 1 + 32 * l];
            for (p >>= 3, l = 0; 4 > l; ++l) s(t, r + 32 * l, p, 4)
        }

        function vo(t, r) {
            var l = t[r - 1 + 0],
                p = t[r - 1 + 32],
                y = t[r - 1 + 64],
                x = t[r - 1 - 32],
                S = t[r + 0 - 32],
                k = t[r + 1 - 32],
                j = t[r + 2 - 32],
                T = t[r + 3 - 32];
            t[r + 0 + 96] = Xt(p, y, t[r - 1 + 96]), t[r + 1 + 96] = t[r + 0 + 64] = Xt(l, p, y), t[r + 2 + 96] = t[r + 1 + 64] = t[r + 0 + 32] = Xt(x, l, p), t[r + 3 + 96] = t[r + 2 + 64] = t[r + 1 + 32] = t[r + 0 + 0] = Xt(S, x, l), t[r + 3 + 64] = t[r + 2 + 32] = t[r + 1 + 0] = Xt(k, S, x), t[r + 3 + 32] = t[r + 2 + 0] = Xt(j, k, S), t[r + 3 + 0] = Xt(T, j, k)
        }

        function hn(t, r) {
            var l = t[r + 1 - 32],
                p = t[r + 2 - 32],
                y = t[r + 3 - 32],
                x = t[r + 4 - 32],
                S = t[r + 5 - 32],
                k = t[r + 6 - 32],
                j = t[r + 7 - 32];
            t[r + 0 + 0] = Xt(t[r + 0 - 32], l, p), t[r + 1 + 0] = t[r + 0 + 32] = Xt(l, p, y), t[r + 2 + 0] = t[r + 1 + 32] = t[r + 0 + 64] = Xt(p, y, x), t[r + 3 + 0] = t[r + 2 + 32] = t[r + 1 + 64] = t[r + 0 + 96] = Xt(y, x, S), t[r + 3 + 32] = t[r + 2 + 64] = t[r + 1 + 96] = Xt(x, S, k), t[r + 3 + 64] = t[r + 2 + 96] = Xt(S, k, j), t[r + 3 + 96] = Xt(k, j, j)
        }

        function cn(t, r) {
            var l = t[r - 1 + 0],
                p = t[r - 1 + 32],
                y = t[r - 1 + 64],
                x = t[r - 1 - 32],
                S = t[r + 0 - 32],
                k = t[r + 1 - 32],
                j = t[r + 2 - 32],
                T = t[r + 3 - 32];
            t[r + 0 + 0] = t[r + 1 + 64] = x + S + 1 >> 1, t[r + 1 + 0] = t[r + 2 + 64] = S + k + 1 >> 1, t[r + 2 + 0] = t[r + 3 + 64] = k + j + 1 >> 1, t[r + 3 + 0] = j + T + 1 >> 1, t[r + 0 + 96] = Xt(y, p, l), t[r + 0 + 64] = Xt(p, l, x), t[r + 0 + 32] = t[r + 1 + 96] = Xt(l, x, S), t[r + 1 + 32] = t[r + 2 + 96] = Xt(x, S, k), t[r + 2 + 32] = t[r + 3 + 96] = Xt(S, k, j), t[r + 3 + 32] = Xt(k, j, T)
        }

        function mo(t, r) {
            var l = t[r + 0 - 32],
                p = t[r + 1 - 32],
                y = t[r + 2 - 32],
                x = t[r + 3 - 32],
                S = t[r + 4 - 32],
                k = t[r + 5 - 32],
                j = t[r + 6 - 32],
                T = t[r + 7 - 32];
            t[r + 0 + 0] = l + p + 1 >> 1, t[r + 1 + 0] = t[r + 0 + 64] = p + y + 1 >> 1, t[r + 2 + 0] = t[r + 1 + 64] = y + x + 1 >> 1, t[r + 3 + 0] = t[r + 2 + 64] = x + S + 1 >> 1, t[r + 0 + 32] = Xt(l, p, y), t[r + 1 + 32] = t[r + 0 + 96] = Xt(p, y, x), t[r + 2 + 32] = t[r + 1 + 96] = Xt(y, x, S), t[r + 3 + 32] = t[r + 2 + 96] = Xt(x, S, k), t[r + 3 + 64] = Xt(S, k, j), t[r + 3 + 96] = Xt(k, j, T)
        }

        function bo(t, r) {
            var l = t[r - 1 + 0],
                p = t[r - 1 + 32],
                y = t[r - 1 + 64],
                x = t[r - 1 + 96];
            t[r + 0 + 0] = l + p + 1 >> 1, t[r + 2 + 0] = t[r + 0 + 32] = p + y + 1 >> 1, t[r + 2 + 32] = t[r + 0 + 64] = y + x + 1 >> 1, t[r + 1 + 0] = Xt(l, p, y), t[r + 3 + 0] = t[r + 1 + 32] = Xt(p, y, x), t[r + 3 + 32] = t[r + 1 + 64] = Xt(y, x, x), t[r + 3 + 64] = t[r + 2 + 64] = t[r + 0 + 96] = t[r + 1 + 96] = t[r + 2 + 96] = t[r + 3 + 96] = x
        }

        function Ai(t, r) {
            var l = t[r - 1 + 0],
                p = t[r - 1 + 32],
                y = t[r - 1 + 64],
                x = t[r - 1 + 96],
                S = t[r - 1 - 32],
                k = t[r + 0 - 32],
                j = t[r + 1 - 32],
                T = t[r + 2 - 32];
            t[r + 0 + 0] = t[r + 2 + 32] = l + S + 1 >> 1, t[r + 0 + 32] = t[r + 2 + 64] = p + l + 1 >> 1, t[r + 0 + 64] = t[r + 2 + 96] = y + p + 1 >> 1, t[r + 0 + 96] = x + y + 1 >> 1, t[r + 3 + 0] = Xt(k, j, T), t[r + 2 + 0] = Xt(S, k, j), t[r + 1 + 0] = t[r + 3 + 32] = Xt(l, S, k), t[r + 1 + 32] = t[r + 3 + 64] = Xt(p, l, S), t[r + 1 + 64] = t[r + 3 + 96] = Xt(y, p, l), t[r + 1 + 96] = Xt(x, y, p)
        }

        function Ui(t, r) {
            var l;
            for (l = 0; 8 > l; ++l) a(t, r + 32 * l, t, r - 32, 8)
        }

        function Kn(t, r) {
            var l;
            for (l = 0; 8 > l; ++l) s(t, r, t[r - 1], 8), r += 32
        }

        function Ni(t, r, l) {
            var p;
            for (p = 0; 8 > p; ++p) s(r, l + 32 * p, t, 8)
        }

        function Si(t, r) {
            var l, p = 8;
            for (l = 0; 8 > l; ++l) p += t[r + l - 32] + t[r - 1 + 32 * l];
            Ni(p >> 4, t, r)
        }

        function yo(t, r) {
            var l, p = 4;
            for (l = 0; 8 > l; ++l) p += t[r + l - 32];
            Ni(p >> 3, t, r)
        }

        function Wi(t, r) {
            var l, p = 4;
            for (l = 0; 8 > l; ++l) p += t[r - 1 + 32 * l];
            Ni(p >> 3, t, r)
        }

        function Vi(t, r) {
            Ni(128, t, r)
        }

        function Zn(t, r, l) {
            var p = t[r - l],
                y = t[r + 0],
                x = 3 * (y - p) + wo[1020 + t[r - 2 * l] - t[r + l]],
                S = Oa[112 + (x + 4 >> 3)];
            t[r - l] = Nr[255 + p + Oa[112 + (x + 3 >> 3)]], t[r + 0] = Nr[255 + y - S]
        }

        function $n(t, r, l, p) {
            var y = t[r + 0],
                x = t[r + l];
            return Rr[255 + t[r - 2 * l] - t[r - l]] > p || Rr[255 + x - y] > p
        }

        function Gi(t, r, l, p) {
            return 4 * Rr[255 + t[r - l] - t[r + 0]] + Rr[255 + t[r - 2 * l] - t[r + l]] <= p
        }

        function _i(t, r, l, p, y) {
            var x = t[r - 3 * l],
                S = t[r - 2 * l],
                k = t[r - l],
                j = t[r + 0],
                T = t[r + l],
                K = t[r + 2 * l],
                lt = t[r + 3 * l];
            return 4 * Rr[255 + k - j] + Rr[255 + S - T] > p ? 0 : Rr[255 + t[r - 4 * l] - x] <= y && Rr[255 + x - S] <= y && Rr[255 + S - k] <= y && Rr[255 + lt - K] <= y && Rr[255 + K - T] <= y && Rr[255 + T - j] <= y
        }

        function Yi(t, r, l, p) {
            var y = 2 * p + 1;
            for (p = 0; 16 > p; ++p) Gi(t, r + p, l, y) && Zn(t, r + p, l)
        }

        function Qn(t, r, l, p) {
            var y = 2 * p + 1;
            for (p = 0; 16 > p; ++p) Gi(t, r + p * l, 1, y) && Zn(t, r + p * l, 1)
        }

        function Sa(t, r, l, p) {
            var y;
            for (y = 3; 0 < y; --y) Yi(t, r += 4 * l, l, p)
        }

        function _a(t, r, l, p) {
            var y;
            for (y = 3; 0 < y; --y) Qn(t, r += 4, l, p)
        }

        function fn(t, r, l, p, y, x, S, k) {
            for (x = 2 * x + 1; 0 < y--;) {
                if (_i(t, r, l, x, S))
                    if ($n(t, r, l, k)) Zn(t, r, l);
                    else {
                        var j = t,
                            T = r,
                            K = l,
                            lt = j[T - 2 * K],
                            E = j[T - K],
                            $ = j[T + 0],
                            it = j[T + K],
                            pt = j[T + 2 * K],
                            ot = 27 * (bt = wo[1020 + 3 * ($ - E) + wo[1020 + lt - it]]) + 63 >> 7,
                            vt = 18 * bt + 63 >> 7,
                            bt = 9 * bt + 63 >> 7;
                        j[T - 3 * K] = Nr[255 + j[T - 3 * K] + bt], j[T - 2 * K] = Nr[255 + lt + vt], j[T - K] = Nr[255 + E + ot], j[T + 0] = Nr[255 + $ - ot], j[T + K] = Nr[255 + it - vt], j[T + 2 * K] = Nr[255 + pt - bt]
                    }
                r += p
            }
        }

        function dn(t, r, l, p, y, x, S, k) {
            for (x = 2 * x + 1; 0 < y--;) {
                if (_i(t, r, l, x, S))
                    if ($n(t, r, l, k)) Zn(t, r, l);
                    else {
                        var j = t,
                            T = r,
                            K = l,
                            lt = j[T - K],
                            E = j[T + 0],
                            $ = j[T + K],
                            it = Oa[112 + (4 + (pt = 3 * (E - lt)) >> 3)],
                            pt = Oa[112 + (pt + 3 >> 3)],
                            ot = it + 1 >> 1;
                        j[T - 2 * K] = Nr[255 + j[T - 2 * K] + ot], j[T - K] = Nr[255 + lt + pt], j[T + 0] = Nr[255 + E - it], j[T + K] = Nr[255 + $ - ot]
                    }
                r += p
            }
        }

        function Pa(t, r, l, p, y, x) {
            fn(t, r, l, 1, 16, p, y, x)
        }

        function ka(t, r, l, p, y, x) {
            fn(t, r, 1, l, 16, p, y, x)
        }

        function ti(t, r, l, p, y, x) {
            var S;
            for (S = 3; 0 < S; --S) dn(t, r += 4 * l, l, 1, 16, p, y, x)
        }

        function Fa(t, r, l, p, y, x) {
            var S;
            for (S = 3; 0 < S; --S) dn(t, r += 4, 1, l, 16, p, y, x)
        }

        function u(t, r, l, p, y, x, S, k) {
            fn(t, r, y, 1, 8, x, S, k), fn(l, p, y, 1, 8, x, S, k)
        }

        function b(t, r, l, p, y, x, S, k) {
            fn(t, r, 1, y, 8, x, S, k), fn(l, p, 1, y, 8, x, S, k)
        }

        function q(t, r, l, p, y, x, S, k) {
            dn(t, r + 4 * y, y, 1, 8, x, S, k), dn(l, p + 4 * y, y, 1, 8, x, S, k)
        }

        function V(t, r, l, p, y, x, S, k) {
            dn(t, r + 4, 1, y, 8, x, S, k), dn(l, p + 4, 1, y, 8, x, S, k)
        }

        function rt() {
            this.ba = new xe, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ve, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc"
        }

        function mt() {
            this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0
        }

        function Lt() {
            this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0
        }

        function jt() {
            this.ua = 0, this.Wa = new ne, this.vb = new ne, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new J, this.yc = new F
        }

        function Ot() {
            this.xb = this.a = 0, this.l = new xi, this.ca = new xe, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new I, this.Pb = 0, this.wd = new I, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new jt, this.ab = 0, this.gc = f(4, Lt), this.Oc = 0
        }

        function Yt() {
            this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new xi, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0
        }

        function Kt(t, r, l, p, y, x, S) {
            for (t = t == null ? 0 : t[r + 0], r = 0; r < S; ++r) y[x + r] = t + l[p + r] & 255, t = y[x + r]
        }

        function ge(t, r, l, p, y, x, S) {
            var k;
            if (t == null) Kt(null, null, l, p, y, x, S);
            else
                for (k = 0; k < S; ++k) y[x + k] = t[r + k] + l[p + k] & 255
        }

        function je(t, r, l, p, y, x, S) {
            if (t == null) Kt(null, null, l, p, y, x, S);
            else {
                var k, j = t[r + 0],
                    T = j,
                    K = j;
                for (k = 0; k < S; ++k) T = K + (j = t[r + k]) - T, K = l[p + k] + (-256 & T ? 0 > T ? 0 : 255 : T) & 255, T = j, y[x + k] = K
            }
        }

        function Ye(t, r, l, p) {
            var y = r.width,
                x = r.o;
            if (e(t != null && r != null), 0 > l || 0 >= p || l + p > x) return null;
            if (!t.Cc) {
                if (t.ga == null) {
                    var S;
                    if (t.ga = new Yt, (S = t.ga == null) || (S = r.width * r.o, e(t.Gb.length == 0), t.Gb = o(S), t.Uc = 0, t.Gb == null ? S = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, S = 1), S = !S), !S) {
                        S = t.ga;
                        var k = t.Fa,
                            j = t.P,
                            T = t.qc,
                            K = t.mb,
                            lt = t.nb,
                            E = j + 1,
                            $ = T - 1,
                            it = S.l;
                        if (e(k != null && K != null && r != null), In[0] = null, In[1] = Kt, In[2] = ge, In[3] = je, S.ca = K, S.tb = lt, S.c = r.width, S.i = r.height, e(0 < S.c && 0 < S.i), 1 >= T) r = 0;
                        else if (S.$a = 3 & k[j + 0], S.Z = k[j + 0] >> 2 & 3, S.Lc = k[j + 0] >> 4 & 3, j = k[j + 0] >> 6 & 3, 0 > S.$a || 1 < S.$a || 4 <= S.Z || 1 < S.Lc || j) r = 0;
                        else if (it.put = Wt, it.ac = Xr, it.bc = sn, it.ma = S, it.width = r.width, it.height = r.height, it.Da = r.Da, it.v = r.v, it.va = r.va, it.j = r.j, it.o = r.o, S.$a) t: {
                            e(S.$a == 1),
                            r = Wn();e: for (;;) {
                                if (r == null) {
                                    r = 0;
                                    break t
                                }
                                if (e(S != null), S.mc = r, r.c = S.c, r.i = S.i, r.l = S.l, r.l.ma = S, r.l.width = S.c, r.l.height = S.i, r.a = 0, et(r.m, k, E, $), !Zr(S.c, S.i, 1, r, null) || (r.ab == 1 && r.gc[0].hc == 3 && Er(r.s) ? (S.ic = 1, k = r.c * r.i, r.Ta = null, r.Ua = 0, r.V = o(k), r.Ba = 0, r.V == null ? (r.a = 1, r = 0) : r = 1) : (S.ic = 0, r = Vn(r, S.c)), !r)) break e;
                                r = 1;
                                break t
                            }
                            S.mc = null,
                            r = 0
                        }
                        else r = $ >= S.c * S.i;
                        S = !r
                    }
                    if (S) return null;
                    t.ga.Lc != 1 ? t.Ga = 0 : p = x - l
                }
                e(t.ga != null), e(l + p <= x);
                t: {
                    if (r = (k = t.ga).c, x = k.l.o, k.$a == 0) {
                        if (E = t.rc, $ = t.Vc, it = t.Fa, j = t.P + 1 + l * r, T = t.mb, K = t.nb + l * r, e(j <= t.P + t.qc), k.Z != 0)
                            for (e(In[k.Z] != null), S = 0; S < p; ++S) In[k.Z](E, $, it, j, T, K, r), E = T, $ = K, K += r, j += r;
                        else
                            for (S = 0; S < p; ++S) a(T, K, it, j, r), E = T, $ = K, K += r, j += r;
                        t.rc = E, t.Vc = $
                    } else {
                        if (e(k.mc != null), r = l + p, e((S = k.mc) != null), e(r <= S.i), S.C >= r) r = 1;
                        else if (k.ic || Or(), k.ic) {
                            k = S.V, E = S.Ba, $ = S.c;
                            var pt = S.i,
                                ot = (it = 1, j = S.$ / $, T = S.$ % $, K = S.m, lt = S.s, S.$),
                                vt = $ * pt,
                                bt = $ * r,
                                xt = lt.wc,
                                wt = ot < bt ? nr(lt, T, j) : null;
                            e(ot <= vt), e(r <= pt), e(Er(lt));
                            e: for (;;) {
                                for (; !K.h && ot < bt;) {
                                    if (T & xt || (wt = nr(lt, T, j)), e(wt != null), ut(K), 256 > (pt = Ie(wt.G[0], wt.H[0], K))) k[E + ot] = pt, ++ot, ++T >= $ && (T = 0, ++j <= r && !(j % 16) && qr(S, j));
                                    else {
                                        if (!(280 > pt)) {
                                            it = 0;
                                            break e
                                        }
                                        pt = Cr(pt - 256, K);
                                        var Rt, Ft = Ie(wt.G[4], wt.H[4], K);
                                        if (ut(K), !(ot >= (Ft = jr($, Ft = Cr(Ft, K))) && vt - ot >= pt)) {
                                            it = 0;
                                            break e
                                        }
                                        for (Rt = 0; Rt < pt; ++Rt) k[E + ot + Rt] = k[E + ot + Rt - Ft];
                                        for (ot += pt, T += pt; T >= $;) T -= $, ++j <= r && !(j % 16) && qr(S, j);
                                        ot < bt && T & xt && (wt = nr(lt, T, j))
                                    }
                                    e(K.h == Z(K))
                                }
                                qr(S, j > r ? r : j);
                                break e
                            }!it || K.h && ot < vt ? (it = 0, S.a = K.h ? 5 : 3) : S.$ = ot, r = it
                        } else r = zr(S, S.V, S.Ba, S.c, S.i, r, yi);
                        if (!r) {
                            p = 0;
                            break t
                        }
                    }
                    l + p >= x && (t.Cc = 1),
                    p = 1
                }
                if (!p) return null;
                if (t.Cc && ((p = t.ga) != null && (p.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null
            }
            return t.nb + l * y
        }

        function ke(t, r, l, p, y, x) {
            for (; 0 < y--;) {
                var S, k = t,
                    j = r + (l ? 1 : 0),
                    T = t,
                    K = r + (l ? 0 : 3);
                for (S = 0; S < p; ++S) {
                    var lt = T[K + 4 * S];
                    lt != 255 && (lt *= 32897, k[j + 4 * S + 0] = k[j + 4 * S + 0] * lt >> 23, k[j + 4 * S + 1] = k[j + 4 * S + 1] * lt >> 23, k[j + 4 * S + 2] = k[j + 4 * S + 2] * lt >> 23)
                }
                r += x
            }
        }

        function Ke(t, r, l, p, y) {
            for (; 0 < p--;) {
                var x;
                for (x = 0; x < l; ++x) {
                    var S = t[r + 2 * x + 0],
                        k = 15 & (T = t[r + 2 * x + 1]),
                        j = 4369 * k,
                        T = (240 & T | T >> 4) * j >> 16;
                    t[r + 2 * x + 0] = (240 & S | S >> 4) * j >> 16 & 240 | (15 & S | S << 4) * j >> 16 >> 4 & 15, t[r + 2 * x + 1] = 240 & T | k
                }
                r += y
            }
        }

        function Je(t, r, l, p, y, x, S, k) {
            var j, T, K = 255;
            for (T = 0; T < y; ++T) {
                for (j = 0; j < p; ++j) {
                    var lt = t[r + j];
                    x[S + 4 * j] = lt, K &= lt
                }
                r += l, S += k
            }
            return K != 255
        }

        function ir(t, r, l, p, y) {
            var x;
            for (x = 0; x < y; ++x) l[p + x] = t[r + x] >> 8
        }

        function Or() {
            ia = ke, rs = Ke, ns = Je, is = ir
        }

        function br(t, r, l) {
            O[t] = function(p, y, x, S, k, j, T, K, lt, E, $, it, pt, ot, vt, bt, xt) {
                var wt, Rt = xt - 1 >> 1,
                    Ft = k[j + 0] | T[K + 0] << 16,
                    oe = lt[E + 0] | $[it + 0] << 16;
                e(p != null);
                var It = 3 * Ft + oe + 131074 >> 2;
                for (r(p[y + 0], 255 & It, It >> 16, pt, ot), x != null && (It = 3 * oe + Ft + 131074 >> 2, r(x[S + 0], 255 & It, It >> 16, vt, bt)), wt = 1; wt <= Rt; ++wt) {
                    var he = k[j + wt] | T[K + wt] << 16,
                        $e = lt[E + wt] | $[it + wt] << 16,
                        se = Ft + he + oe + $e + 524296,
                        Bt = se + 2 * (he + oe) >> 3;
                    It = Bt + Ft >> 1, Ft = (se = se + 2 * (Ft + $e) >> 3) + he >> 1, r(p[y + 2 * wt - 1], 255 & It, It >> 16, pt, ot + (2 * wt - 1) * l), r(p[y + 2 * wt - 0], 255 & Ft, Ft >> 16, pt, ot + (2 * wt - 0) * l), x != null && (It = se + oe >> 1, Ft = Bt + $e >> 1, r(x[S + 2 * wt - 1], 255 & It, It >> 16, vt, bt + (2 * wt - 1) * l), r(x[S + 2 * wt + 0], 255 & Ft, Ft >> 16, vt, bt + (2 * wt + 0) * l)), Ft = he, oe = $e
                }
                1 & xt || (It = 3 * Ft + oe + 131074 >> 2, r(p[y + xt - 1], 255 & It, It >> 16, pt, ot + (xt - 1) * l), x != null && (It = 3 * oe + Ft + 131074 >> 2, r(x[S + xt - 1], 255 & It, It >> 16, vt, bt + (xt - 1) * l)))
            }
        }

        function Ca() {
            Tr[Ma] = Iu, Tr[Da] = gs, Tr[hs] = Bu, Tr[Ra] = vs, Tr[Ta] = ms, Tr[Lo] = bs, Tr[cs] = Ou, Tr[xo] = gs, Tr[Ao] = vs, Tr[Ea] = ms, Tr[No] = bs
        }

        function Pi(t) {
            return t & ~Mu ? 0 > t ? 0 : 255 : t >> ys
        }

        function ei(t, r) {
            return Pi((19077 * t >> 8) + (26149 * r >> 8) - 14234)
        }

        function An(t, r, l) {
            return Pi((19077 * t >> 8) - (6419 * r >> 8) - (13320 * l >> 8) + 8708)
        }

        function ri(t, r) {
            return Pi((19077 * t >> 8) + (33050 * r >> 8) - 17685)
        }

        function ni(t, r, l, p, y) {
            p[y + 0] = ei(t, l), p[y + 1] = An(t, r, l), p[y + 2] = ri(t, r)
        }

        function ii(t, r, l, p, y) {
            p[y + 0] = ri(t, r), p[y + 1] = An(t, r, l), p[y + 2] = ei(t, l)
        }

        function lr(t, r, l, p, y) {
            var x = An(t, r, l);
            r = x << 3 & 224 | ri(t, r) >> 3, p[y + 0] = 248 & ei(t, l) | x >> 5, p[y + 1] = r
        }

        function ai(t, r, l, p, y) {
            var x = 240 & ri(t, r) | 15;
            p[y + 0] = 240 & ei(t, l) | An(t, r, l) >> 4, p[y + 1] = x
        }

        function oi(t, r, l, p, y) {
            p[y + 0] = 255, ni(t, r, l, p, y + 1)
        }

        function Ji(t, r, l, p, y) {
            ii(t, r, l, p, y), p[y + 3] = 255
        }

        function Xi(t, r, l, p, y) {
            ni(t, r, l, p, y), p[y + 3] = 255
        }

        function Be(t, r) {
            return 0 > t ? 0 : t > r ? r : t
        }

        function pn(t, r, l) {
            O[t] = function(p, y, x, S, k, j, T, K, lt) {
                for (var E = K + (-2 & lt) * l; K != E;) r(p[y + 0], x[S + 0], k[j + 0], T, K), r(p[y + 1], x[S + 0], k[j + 0], T, K + l), y += 2, ++S, ++j, K += 2 * l;
                1 & lt && r(p[y + 0], x[S + 0], k[j + 0], T, K)
            }
        }

        function ki(t, r, l) {
            return l == 0 ? t == 0 ? r == 0 ? 6 : 5 : r == 0 ? 4 : 0 : l
        }

        function ja(t, r, l, p, y) {
            switch (t >>> 30) {
                case 3:
                    hi(r, l, p, y, 0);
                    break;
                case 2:
                    Dr(r, l, p, y);
                    break;
                case 1:
                    me(r, l, p, y)
            }
        }

        function Mr(t, r) {
            var l, p, y = r.M,
                x = r.Nb,
                S = t.oc,
                k = t.pc + 40,
                j = t.oc,
                T = t.pc + 584,
                K = t.oc,
                lt = t.pc + 600;
            for (l = 0; 16 > l; ++l) S[k + 32 * l - 1] = 129;
            for (l = 0; 8 > l; ++l) j[T + 32 * l - 1] = 129, K[lt + 32 * l - 1] = 129;
            for (0 < y ? S[k - 1 - 32] = j[T - 1 - 32] = K[lt - 1 - 32] = 129 : (s(S, k - 32 - 1, 127, 21), s(j, T - 32 - 1, 127, 9), s(K, lt - 32 - 1, 127, 9)), p = 0; p < t.za; ++p) {
                var E = r.ya[r.aa + p];
                if (0 < p) {
                    for (l = -1; 16 > l; ++l) a(S, k + 32 * l - 4, S, k + 32 * l + 12, 4);
                    for (l = -1; 8 > l; ++l) a(j, T + 32 * l - 4, j, T + 32 * l + 4, 4), a(K, lt + 32 * l - 4, K, lt + 32 * l + 4, 4)
                }
                var $ = t.Gd,
                    it = t.Hd + p,
                    pt = E.ad,
                    ot = E.Hc;
                if (0 < y && (a(S, k - 32, $[it].y, 0, 16), a(j, T - 32, $[it].f, 0, 8), a(K, lt - 32, $[it].ea, 0, 8)), E.Za) {
                    var vt = S,
                        bt = k - 32 + 16;
                    for (0 < y && (p >= t.za - 1 ? s(vt, bt, $[it].y[15], 4) : a(vt, bt, $[it + 1].y, 0, 4)), l = 0; 4 > l; l++) vt[bt + 128 + l] = vt[bt + 256 + l] = vt[bt + 384 + l] = vt[bt + 0 + l];
                    for (l = 0; 16 > l; ++l, ot <<= 2) vt = S, bt = k + Ls[l], Ur[E.Ob[l]](vt, bt), ja(ot, pt, 16 * +l, vt, bt)
                } else if (vt = ki(p, y, E.Ob[0]), jn[vt](S, k), ot != 0)
                    for (l = 0; 16 > l; ++l, ot <<= 2) ja(ot, pt, 16 * +l, S, k + Ls[l]);
                for (l = E.Gc, vt = ki(p, y, E.Dd), mn[vt](j, T), mn[vt](K, lt), ot = pt, vt = j, bt = T, 255 & (E = 0 | l) && (170 & E ? en(ot, 256, vt, bt) : Ae(ot, 256, vt, bt)), E = K, ot = lt, 255 & (l >>= 8) && (170 & l ? en(pt, 320, E, ot) : Ae(pt, 320, E, ot)), y < t.Ub - 1 && (a($[it].y, 0, S, k + 480, 16), a($[it].f, 0, j, T + 224, 8), a($[it].ea, 0, K, lt + 224, 8)), l = 8 * x * t.B, $ = t.sa, it = t.ta + 16 * p + 16 * x * t.R, pt = t.qa, E = t.ra + 8 * p + l, ot = t.Ha, vt = t.Ia + 8 * p + l, l = 0; 16 > l; ++l) a($, it + l * t.R, S, k + 32 * l, 16);
                for (l = 0; 8 > l; ++l) a(pt, E + l * t.B, j, T + 32 * l, 8), a(ot, vt + l * t.B, K, lt + 32 * l, 8)
            }
        }

        function si(t, r, l, p, y, x, S, k, j) {
            var T = [0],
                K = [0],
                lt = 0,
                E = j != null ? j.kd : 0,
                $ = j ? ? new mt;
            if (t == null || 12 > l) return 7;
            $.data = t, $.w = r, $.ha = l, r = [r], l = [l], $.gb = [$.gb];
            t: {
                var it = r,
                    pt = l,
                    ot = $.gb;
                if (e(t != null), e(pt != null), e(ot != null), ot[0] = 0, 12 <= pt[0] && !i(t, it[0], "RIFF")) {
                    if (i(t, it[0] + 8, "WEBP")) {
                        ot = 3;
                        break t
                    }
                    var vt = gt(t, it[0] + 4);
                    if (12 > vt || 4294967286 < vt) {
                        ot = 3;
                        break t
                    }
                    if (E && vt > pt[0] - 8) {
                        ot = 7;
                        break t
                    }
                    ot[0] = vt, it[0] += 12, pt[0] -= 12
                }
                ot = 0
            }
            if (ot != 0) return ot;
            for (vt = 0 < $.gb[0], l = l[0];;) {
                t: {
                    var bt = t;pt = r,
                    ot = l;
                    var xt = T,
                        wt = K,
                        Rt = it = [0];
                    if ((It = lt = [lt])[0] = 0, 8 > ot[0]) ot = 7;
                    else {
                        if (!i(bt, pt[0], "VP8X")) {
                            if (gt(bt, pt[0] + 4) != 10) {
                                ot = 3;
                                break t
                            }
                            if (18 > ot[0]) {
                                ot = 7;
                                break t
                            }
                            var Ft = gt(bt, pt[0] + 8),
                                oe = 1 + kt(bt, pt[0] + 12);
                            if (2147483648 <= oe * (bt = 1 + kt(bt, pt[0] + 15))) {
                                ot = 3;
                                break t
                            }
                            Rt != null && (Rt[0] = Ft), xt != null && (xt[0] = oe), wt != null && (wt[0] = bt), pt[0] += 18, ot[0] -= 18, It[0] = 1
                        }
                        ot = 0
                    }
                }
                if (lt = lt[0], it = it[0], ot != 0) return ot;
                if (pt = !!(2 & it), !vt && lt) return 3;
                if (x != null && (x[0] = !!(16 & it)), S != null && (S[0] = pt), k != null && (k[0] = 0), S = T[0], it = K[0], lt && pt && j == null) {
                    ot = 0;
                    break
                }
                if (4 > l) {
                    ot = 7;
                    break
                }
                if (vt && lt || !vt && !lt && !i(t, r[0], "ALPH")) {
                    l = [l], $.na = [$.na], $.P = [$.P], $.Sa = [$.Sa];
                    t: {
                        Ft = t,
                        ot = r,
                        vt = l;
                        var It = $.gb;xt = $.na,
                        wt = $.P,
                        Rt = $.Sa,
                        oe = 22,
                        e(Ft != null),
                        e(vt != null),
                        bt = ot[0];
                        var he = vt[0];
                        for (e(xt != null), e(Rt != null), xt[0] = null, wt[0] = null, Rt[0] = 0;;) {
                            if (ot[0] = bt, vt[0] = he, 8 > he) {
                                ot = 7;
                                break t
                            }
                            var $e = gt(Ft, bt + 4);
                            if (4294967286 < $e) {
                                ot = 3;
                                break t
                            }
                            var se = 8 + $e + 1 & -2;
                            if (oe += se, 0 < It && oe > It) {
                                ot = 3;
                                break t
                            }
                            if (!i(Ft, bt, "VP8 ") || !i(Ft, bt, "VP8L")) {
                                ot = 0;
                                break t
                            }
                            if (he[0] < se) {
                                ot = 7;
                                break t
                            }
                            i(Ft, bt, "ALPH") || (xt[0] = Ft, wt[0] = bt + 8, Rt[0] = $e), bt += se, he -= se
                        }
                    }
                    if (l = l[0], $.na = $.na[0], $.P = $.P[0], $.Sa = $.Sa[0], ot != 0) break
                }
                l = [l],
                $.Ja = [$.Ja],
                $.xa = [$.xa];t: if (It = t, ot = r, vt = l, xt = $.gb[0], wt = $.Ja, Rt = $.xa, Ft = ot[0], bt = !i(It, Ft, "VP8 "), oe = !i(It, Ft, "VP8L"), e(It != null), e(vt != null), e(wt != null), e(Rt != null), 8 > vt[0]) ot = 7;
                    else {
                        if (bt || oe) {
                            if (It = gt(It, Ft + 4), 12 <= xt && It > xt - 12) {
                                ot = 3;
                                break t
                            }
                            if (E && It > vt[0] - 8) {
                                ot = 7;
                                break t
                            }
                            wt[0] = It, ot[0] += 8, vt[0] -= 8, Rt[0] = oe
                        } else Rt[0] = 5 <= vt[0] && It[Ft + 0] == 47 && !(It[Ft + 4] >> 5), wt[0] = vt[0];
                        ot = 0
                    }if (l = l[0], $.Ja = $.Ja[0], $.xa = $.xa[0], r = r[0], ot != 0) break;
                if (4294967286 < $.Ja) return 3;
                if (k == null || pt || (k[0] = $.xa ? 2 : 1), S = [S], it = [it], $.xa) {
                    if (5 > l) {
                        ot = 7;
                        break
                    }
                    k = S, E = it, pt = x, t == null || 5 > l ? t = 0 : 5 <= l && t[r + 0] == 47 && !(t[r + 4] >> 5) ? (vt = [0], It = [0], xt = [0], et(wt = new I, t, r, l), un(wt, vt, It, xt) ? (k != null && (k[0] = vt[0]), E != null && (E[0] = It[0]), pt != null && (pt[0] = xt[0]), t = 1) : t = 0) : t = 0
                } else {
                    if (10 > l) {
                        ot = 7;
                        break
                    }
                    k = it, t == null || 10 > l || !La(t, r + 3, l - 3) ? t = 0 : (E = t[r + 0] | t[r + 1] << 8 | t[r + 2] << 16, pt = 16383 & (t[r + 7] << 8 | t[r + 6]), t = 16383 & (t[r + 9] << 8 | t[r + 8]), 1 & E || 3 < (E >> 1 & 7) || !(E >> 4 & 1) || E >> 5 >= $.Ja || !pt || !t ? t = 0 : (S && (S[0] = pt), k && (k[0] = t), t = 1))
                }
                if (!t || (S = S[0], it = it[0], lt && (T[0] != S || K[0] != it))) return 3;j != null && (j[0] = $, j.offset = r - j.w, e(4294967286 > r - j.w), e(j.offset == j.ha - l));
                break
            }
            return ot == 0 || ot == 7 && lt && j == null ? (x != null && (x[0] |= $.na != null && 0 < $.na.length), p != null && (p[0] = S), y != null && (y[0] = it), 0) : ot
        }

        function Ki(t, r, l) {
            var p = r.width,
                y = r.height,
                x = 0,
                S = 0,
                k = p,
                j = y;
            if (r.Da = t != null && 0 < t.Da, r.Da && (k = t.cd, j = t.bd, x = t.v, S = t.j, 11 > l || (x &= -2, S &= -2), 0 > x || 0 > S || 0 >= k || 0 >= j || x + k > p || S + j > y)) return 0;
            if (r.v = x, r.j = S, r.va = x + k, r.o = S + j, r.U = k, r.T = j, r.da = t != null && 0 < t.da, r.da) {
                if (!Ht(k, j, l = [t.ib], x = [t.hb])) return 0;
                r.ib = l[0], r.hb = x[0]
            }
            return r.ob = t != null && t.ob, r.Kb = t == null || !t.Sd, r.da && (r.ob = r.ib < 3 * p / 4 && r.hb < 3 * y / 4, r.Kb = 0), 1
        }

        function Zi(t) {
            if (t == null) return 2;
            if (11 > t.S) {
                var r = t.f.RGBA;
                r.fb += (t.height - 1) * r.A, r.A = -r.A
            } else r = t.f.kb, t = t.height, r.O += (t - 1) * r.fa, r.fa = -r.fa, r.N += (t - 1 >> 1) * r.Ab, r.Ab = -r.Ab, r.W += (t - 1 >> 1) * r.Db, r.Db = -r.Db, r.F != null && (r.J += (t - 1) * r.lb, r.lb = -r.lb);
            return 0
        }

        function Nn(t, r, l, p) {
            if (p == null || 0 >= t || 0 >= r) return 2;
            if (l != null) {
                if (l.Da) {
                    var y = l.cd,
                        x = l.bd,
                        S = -2 & l.v,
                        k = -2 & l.j;
                    if (0 > S || 0 > k || 0 >= y || 0 >= x || S + y > t || k + x > r) return 2;
                    t = y, r = x
                }
                if (l.da) {
                    if (!Ht(t, r, y = [l.ib], x = [l.hb])) return 2;
                    t = y[0], r = x[0]
                }
            }
            p.width = t, p.height = r;
            t: {
                var j = p.width,
                    T = p.height;
                if (t = p.S, 0 >= j || 0 >= T || !(t >= Ma && 13 > t)) t = 2;
                else {
                    if (0 >= p.Rd && p.sd == null) {
                        S = x = y = r = 0;
                        var K = (k = j * xs[t]) * T;
                        if (11 > t || (x = (T + 1) / 2 * (r = (j + 1) / 2), t == 12 && (S = (y = j) * T)), (T = o(K + 2 * x + S)) == null) {
                            t = 1;
                            break t
                        }
                        p.sd = T, 11 > t ? ((j = p.f.RGBA).eb = T, j.fb = 0, j.A = k, j.size = K) : ((j = p.f.kb).y = T, j.O = 0, j.fa = k, j.Fd = K, j.f = T, j.N = 0 + K, j.Ab = r, j.Cd = x, j.ea = T, j.W = 0 + K + x, j.Db = r, j.Ed = x, t == 12 && (j.F = T, j.J = 0 + K + 2 * x), j.Tc = S, j.lb = y)
                    }
                    if (r = 1, y = p.S, x = p.width, S = p.height, y >= Ma && 13 > y)
                        if (11 > y) t = p.f.RGBA, r &= (k = Math.abs(t.A)) * (S - 1) + x <= t.size, r &= k >= x * xs[y], r &= t.eb != null;
                        else {
                            t = p.f.kb, k = (x + 1) / 2, K = (S + 1) / 2, j = Math.abs(t.fa), T = Math.abs(t.Ab);
                            var lt = Math.abs(t.Db),
                                E = Math.abs(t.lb),
                                $ = E * (S - 1) + x;
                            r &= j * (S - 1) + x <= t.Fd, r &= T * (K - 1) + k <= t.Cd, r = (r &= lt * (K - 1) + k <= t.Ed) & j >= x & T >= k & lt >= k, r &= t.y != null, r &= t.f != null, r &= t.ea != null, y == 12 && (r &= E >= x, r &= $ <= t.Tc, r &= t.F != null)
                        }
                    else r = 0;
                    t = r ? 0 : 2
                }
            }
            return t != 0 || l != null && l.fd && (t = Zi(p)), t
        }
        var ui = 64,
            xr = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215],
            Ar = 24,
            Sn = 32,
            gn = 8,
            _n = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
        _t("Predictor0", "PredictorAdd0"), O.Predictor0 = function() {
            return 4278190080
        }, O.Predictor1 = function(t) {
            return t
        }, O.Predictor2 = function(t, r, l) {
            return r[l + 0]
        }, O.Predictor3 = function(t, r, l) {
            return r[l + 1]
        }, O.Predictor4 = function(t, r, l) {
            return r[l - 1]
        }, O.Predictor5 = function(t, r, l) {
            return zt(zt(t, r[l + 1]), r[l + 0])
        }, O.Predictor6 = function(t, r, l) {
            return zt(t, r[l - 1])
        }, O.Predictor7 = function(t, r, l) {
            return zt(t, r[l + 0])
        }, O.Predictor8 = function(t, r, l) {
            return zt(r[l - 1], r[l + 0])
        }, O.Predictor9 = function(t, r, l) {
            return zt(r[l + 0], r[l + 1])
        }, O.Predictor10 = function(t, r, l) {
            return zt(zt(t, r[l - 1]), zt(r[l + 0], r[l + 1]))
        }, O.Predictor11 = function(t, r, l) {
            var p = r[l + 0];
            return 0 >= Qt(p >> 24 & 255, t >> 24 & 255, (r = r[l - 1]) >> 24 & 255) + Qt(p >> 16 & 255, t >> 16 & 255, r >> 16 & 255) + Qt(p >> 8 & 255, t >> 8 & 255, r >> 8 & 255) + Qt(255 & p, 255 & t, 255 & r) ? p : t
        }, O.Predictor12 = function(t, r, l) {
            var p = r[l + 0];
            return (de((t >> 24 & 255) + (p >> 24 & 255) - ((r = r[l - 1]) >> 24 & 255)) << 24 | de((t >> 16 & 255) + (p >> 16 & 255) - (r >> 16 & 255)) << 16 | de((t >> 8 & 255) + (p >> 8 & 255) - (r >> 8 & 255)) << 8 | de((255 & t) + (255 & p) - (255 & r))) >>> 0
        }, O.Predictor13 = function(t, r, l) {
            var p = r[l - 1];
            return ($t((t = zt(t, r[l + 0])) >> 24 & 255, p >> 24 & 255) << 24 | $t(t >> 16 & 255, p >> 16 & 255) << 16 | $t(t >> 8 & 255, p >> 8 & 255) << 8 | $t(255 & t, 255 & p)) >>> 0
        };
        var $i = O.PredictorAdd0;
        O.PredictorAdd1 = we, _t("Predictor2", "PredictorAdd2"), _t("Predictor3", "PredictorAdd3"), _t("Predictor4", "PredictorAdd4"), _t("Predictor5", "PredictorAdd5"), _t("Predictor6", "PredictorAdd6"), _t("Predictor7", "PredictorAdd7"), _t("Predictor8", "PredictorAdd8"), _t("Predictor9", "PredictorAdd9"), _t("Predictor10", "PredictorAdd10"), _t("Predictor11", "PredictorAdd11"), _t("Predictor12", "PredictorAdd12"), _t("Predictor13", "PredictorAdd13");
        var Fi = O.PredictorAdd2;
        qt("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
            return t >> 8 & 255
        }, function(t) {
            return t
        }), qt("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
            return t
        }, function(t) {
            return t >> 8 & 255
        });
        var Ee, Ia = O.ColorIndexInverseTransform,
            Qr = O.MapARGB,
            tn = O.VP8LColorIndexInverseTransformAlpha,
            Qi = O.MapAlpha,
            ta = O.VP8LPredictorsAdd = [];
        ta.length = 16, (O.VP8LPredictors = []).length = 16, (O.VP8LPredictorsAdd_C = []).length = 16, (O.VP8LPredictors_C = []).length = 16;
        var ea, ra, Pn, kn, Fn, li, Cn, hi, Dr, en, me, Ae, qe, Ze, vn, na, Ci, Ba, Ko, Zo, $o, Qo, ts, es, ia, rs, ns, is, as = o(511),
            os = o(2041),
            ss = o(225),
            us = o(767),
            ls = 0,
            wo = os,
            Oa = ss,
            Nr = us,
            Rr = as,
            Ma = 0,
            Da = 1,
            hs = 2,
            Ra = 3,
            Ta = 4,
            Lo = 5,
            cs = 6,
            xo = 7,
            Ao = 8,
            Ea = 9,
            No = 10,
            bu = [2, 3, 7],
            yu = [3, 3, 11],
            fs = [280, 256, 256, 256, 40],
            wu = [0, 1, 1, 1, 0],
            Lu = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            xu = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112],
            Au = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
            Nu = 8,
            So = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157],
            _o = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284],
            aa = null,
            Su = [
                [173, 148, 140, 0],
                [176, 155, 140, 135, 0],
                [180, 157, 141, 134, 130, 0],
                [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
            ],
            _u = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
            ds = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
            Pu = [
                [
                    [
                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                    ],
                    [
                        [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
                        [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
                        [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
                    ],
                    [
                        [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
                        [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
                        [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
                    ],
                    [
                        [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
                        [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
                        [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
                    ],
                    [
                        [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
                        [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
                        [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
                    ],
                    [
                        [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
                        [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
                        [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
                    ],
                    [
                        [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
                        [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
                        [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
                    ],
                    [
                        [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                        [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                        [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                    ]
                ],
                [
                    [
                        [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
                        [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
                        [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
                    ],
                    [
                        [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
                        [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
                        [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
                    ],
                    [
                        [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
                        [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
                        [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
                    ],
                    [
                        [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
                        [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
                        [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
                    ],
                    [
                        [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
                        [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
                        [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
                    ],
                    [
                        [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
                        [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
                        [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
                    ],
                    [
                        [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
                        [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
                        [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
                    ],
                    [
                        [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
                        [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                        [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
                    ]
                ],
                [
                    [
                        [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
                        [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
                        [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
                    ],
                    [
                        [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
                        [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
                        [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
                    ],
                    [
                        [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
                        [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
                        [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
                    ],
                    [
                        [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
                        [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
                        [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
                    ],
                    [
                        [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
                        [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
                        [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                    ],
                    [
                        [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                        [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                        [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                    ],
                    [
                        [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
                        [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
                        [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                    ],
                    [
                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
                        [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
                    ]
                ],
                [
                    [
                        [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
                        [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
                        [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
                    ],
                    [
                        [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
                        [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
                        [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
                    ],
                    [
                        [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
                        [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
                        [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
                    ],
                    [
                        [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
                        [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
                        [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
                    ],
                    [
                        [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
                        [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
                        [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
                    ],
                    [
                        [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
                        [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
                        [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
                    ],
                    [
                        [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
                        [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
                        [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
                    ],
                    [
                        [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                        [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
                        [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
                    ]
                ]
            ],
            ku = [
                [
                    [231, 120, 48, 89, 115, 113, 120, 152, 112],
                    [152, 179, 64, 126, 170, 118, 46, 70, 95],
                    [175, 69, 143, 80, 85, 82, 72, 155, 103],
                    [56, 58, 10, 171, 218, 189, 17, 13, 152],
                    [114, 26, 17, 163, 44, 195, 21, 10, 173],
                    [121, 24, 80, 195, 26, 62, 44, 64, 85],
                    [144, 71, 10, 38, 171, 213, 144, 34, 26],
                    [170, 46, 55, 19, 136, 160, 33, 206, 71],
                    [63, 20, 8, 114, 114, 208, 12, 9, 226],
                    [81, 40, 11, 96, 182, 84, 29, 16, 36]
                ],
                [
                    [134, 183, 89, 137, 98, 101, 106, 165, 148],
                    [72, 187, 100, 130, 157, 111, 32, 75, 80],
                    [66, 102, 167, 99, 74, 62, 40, 234, 128],
                    [41, 53, 9, 178, 241, 141, 26, 8, 107],
                    [74, 43, 26, 146, 73, 166, 49, 23, 157],
                    [65, 38, 105, 160, 51, 52, 31, 115, 128],
                    [104, 79, 12, 27, 217, 255, 87, 17, 7],
                    [87, 68, 71, 44, 114, 51, 15, 186, 23],
                    [47, 41, 14, 110, 182, 183, 21, 17, 194],
                    [66, 45, 25, 102, 197, 189, 23, 18, 22]
                ],
                [
                    [88, 88, 147, 150, 42, 46, 45, 196, 205],
                    [43, 97, 183, 117, 85, 38, 35, 179, 61],
                    [39, 53, 200, 87, 26, 21, 43, 232, 171],
                    [56, 34, 51, 104, 114, 102, 29, 93, 77],
                    [39, 28, 85, 171, 58, 165, 90, 98, 64],
                    [34, 22, 116, 206, 23, 34, 43, 166, 73],
                    [107, 54, 32, 26, 51, 1, 81, 43, 31],
                    [68, 25, 106, 22, 64, 171, 36, 225, 114],
                    [34, 19, 21, 102, 132, 188, 16, 76, 124],
                    [62, 18, 78, 95, 85, 57, 50, 48, 51]
                ],
                [
                    [193, 101, 35, 159, 215, 111, 89, 46, 111],
                    [60, 148, 31, 172, 219, 228, 21, 18, 111],
                    [112, 113, 77, 85, 179, 255, 38, 120, 114],
                    [40, 42, 1, 196, 245, 209, 10, 25, 109],
                    [88, 43, 29, 140, 166, 213, 37, 43, 154],
                    [61, 63, 30, 155, 67, 45, 68, 1, 209],
                    [100, 80, 8, 43, 154, 1, 51, 26, 71],
                    [142, 78, 78, 16, 255, 128, 34, 197, 171],
                    [41, 40, 5, 102, 211, 183, 4, 1, 221],
                    [51, 50, 17, 168, 209, 192, 23, 25, 82]
                ],
                [
                    [138, 31, 36, 171, 27, 166, 38, 44, 229],
                    [67, 87, 58, 169, 82, 115, 26, 59, 179],
                    [63, 59, 90, 180, 59, 166, 93, 73, 154],
                    [40, 40, 21, 116, 143, 209, 34, 39, 175],
                    [47, 15, 16, 183, 34, 223, 49, 45, 183],
                    [46, 17, 33, 183, 6, 98, 15, 32, 183],
                    [57, 46, 22, 24, 128, 1, 54, 17, 37],
                    [65, 32, 73, 115, 28, 128, 23, 128, 205],
                    [40, 3, 9, 115, 51, 192, 18, 6, 223],
                    [87, 37, 9, 115, 59, 77, 64, 21, 47]
                ],
                [
                    [104, 55, 44, 218, 9, 54, 53, 130, 226],
                    [64, 90, 70, 205, 40, 41, 23, 26, 57],
                    [54, 57, 112, 184, 5, 41, 38, 166, 213],
                    [30, 34, 26, 133, 152, 116, 10, 32, 134],
                    [39, 19, 53, 221, 26, 114, 32, 73, 255],
                    [31, 9, 65, 234, 2, 15, 1, 118, 73],
                    [75, 32, 12, 51, 192, 255, 160, 43, 51],
                    [88, 31, 35, 67, 102, 85, 55, 186, 85],
                    [56, 21, 23, 111, 59, 205, 45, 37, 192],
                    [55, 38, 70, 124, 73, 102, 1, 34, 98]
                ],
                [
                    [125, 98, 42, 88, 104, 85, 117, 175, 82],
                    [95, 84, 53, 89, 128, 100, 113, 101, 45],
                    [75, 79, 123, 47, 51, 128, 81, 171, 1],
                    [57, 17, 5, 71, 102, 57, 53, 41, 49],
                    [38, 33, 13, 121, 57, 73, 26, 1, 85],
                    [41, 10, 67, 138, 77, 110, 90, 47, 114],
                    [115, 21, 2, 10, 102, 255, 166, 23, 6],
                    [101, 29, 16, 10, 85, 128, 101, 196, 26],
                    [57, 18, 10, 102, 102, 213, 34, 20, 43],
                    [117, 20, 15, 36, 163, 128, 68, 1, 26]
                ],
                [
                    [102, 61, 71, 37, 34, 53, 31, 243, 192],
                    [69, 60, 71, 38, 73, 119, 28, 222, 37],
                    [68, 45, 128, 34, 1, 47, 11, 245, 171],
                    [62, 17, 19, 70, 146, 85, 55, 62, 70],
                    [37, 43, 37, 154, 100, 163, 85, 160, 1],
                    [63, 9, 92, 136, 28, 64, 32, 201, 85],
                    [75, 15, 9, 9, 64, 255, 184, 119, 16],
                    [86, 6, 28, 5, 64, 255, 25, 248, 1],
                    [56, 8, 17, 132, 137, 255, 55, 116, 128],
                    [58, 15, 20, 82, 135, 57, 26, 121, 40]
                ],
                [
                    [164, 50, 31, 137, 154, 133, 25, 35, 218],
                    [51, 103, 44, 131, 131, 123, 31, 6, 158],
                    [86, 40, 64, 135, 148, 224, 45, 183, 128],
                    [22, 26, 17, 131, 240, 154, 14, 1, 209],
                    [45, 16, 21, 91, 64, 222, 7, 1, 197],
                    [56, 21, 39, 155, 60, 138, 23, 102, 213],
                    [83, 12, 13, 54, 192, 255, 68, 47, 28],
                    [85, 26, 85, 85, 128, 128, 32, 146, 171],
                    [18, 11, 7, 63, 144, 171, 4, 4, 246],
                    [35, 27, 10, 146, 174, 171, 12, 26, 128]
                ],
                [
                    [190, 80, 35, 99, 180, 80, 126, 54, 45],
                    [85, 126, 47, 87, 176, 51, 41, 20, 32],
                    [101, 75, 128, 139, 118, 146, 116, 128, 85],
                    [56, 41, 15, 176, 236, 85, 37, 9, 62],
                    [71, 30, 17, 119, 118, 255, 17, 18, 138],
                    [101, 38, 60, 138, 55, 70, 43, 26, 142],
                    [146, 36, 19, 30, 171, 255, 97, 27, 20],
                    [138, 45, 61, 62, 219, 1, 81, 188, 64],
                    [32, 41, 20, 117, 151, 142, 20, 21, 163],
                    [112, 19, 12, 61, 195, 128, 48, 4, 24]
                ]
            ],
            Fu = [
                [
                    [
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                        [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                        [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
                        [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
                        [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ]
                ],
                [
                    [
                        [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
                        [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
                    ],
                    [
                        [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                        [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ]
                ],
                [
                    [
                        [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
                        [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
                        [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
                    ],
                    [
                        [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ]
                ],
                [
                    [
                        [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
                        [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                        [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                        [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
                        [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                        [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                        [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
                        [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ],
                    [
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                        [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
                    ]
                ]
            ],
            Cu = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
            jn = [],
            Ur = [],
            mn = [],
            ju = 1,
            ps = 2,
            In = [],
            Tr = [];
        br("UpsampleRgbLinePair", ni, 3), br("UpsampleBgrLinePair", ii, 3), br("UpsampleRgbaLinePair", Xi, 4), br("UpsampleBgraLinePair", Ji, 4), br("UpsampleArgbLinePair", oi, 4), br("UpsampleRgba4444LinePair", ai, 2), br("UpsampleRgb565LinePair", lr, 2);
        var Iu = O.UpsampleRgbLinePair,
            Bu = O.UpsampleBgrLinePair,
            gs = O.UpsampleRgbaLinePair,
            vs = O.UpsampleBgraLinePair,
            ms = O.UpsampleArgbLinePair,
            bs = O.UpsampleRgba4444LinePair,
            Ou = O.UpsampleRgb565LinePair,
            qa = 16,
            za = 1 << qa - 1,
            oa = -227,
            Po = 482,
            ys = 6,
            Mu = (256 << ys) - 1,
            ws = 0,
            Du = o(256),
            Ru = o(256),
            Tu = o(256),
            Eu = o(256),
            qu = o(Po - oa),
            zu = o(Po - oa);
        pn("YuvToRgbRow", ni, 3), pn("YuvToBgrRow", ii, 3), pn("YuvToRgbaRow", Xi, 4), pn("YuvToBgraRow", Ji, 4), pn("YuvToArgbRow", oi, 4), pn("YuvToRgba4444Row", ai, 2), pn("YuvToRgb565Row", lr, 2);
        var Ls = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
            Ha = [0, 2, 8],
            Hu = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
            Uu = 1;
        this.WebPDecodeRGBA = function(t, r, l, p, y) {
            var x = Da,
                S = new rt,
                k = new xe;
            S.ba = k, k.S = x, k.width = [k.width], k.height = [k.height];
            var j = k.width,
                T = k.height,
                K = new Jt;
            if (K == null || t == null) var lt = 2;
            else e(K != null), lt = si(t, r, l, K.width, K.height, K.Pd, K.Qd, K.format, null);
            if (lt != 0 ? j = 0 : (j != null && (j[0] = K.width[0]), T != null && (T[0] = K.height[0]), j = 1), j) {
                k.width = k.width[0], k.height = k.height[0], p != null && (p[0] = k.width), y != null && (y[0] = k.height);
                t: {
                    if (p = new xi, (y = new mt).data = t, y.w = r, y.ha = l, y.kd = 1, r = [0], e(y != null), ((t = si(y.data, y.w, y.ha, null, null, null, r, null, y)) == 0 || t == 7) && r[0] && (t = 4), (r = t) == 0) {
                        if (e(S != null), p.data = y.data, p.w = y.w + y.offset, p.ha = y.ha - y.offset, p.put = Wt, p.ac = Xr, p.bc = sn, p.ma = S, y.xa) {
                            if ((t = Wn()) == null) {
                                S = 1;
                                break t
                            }
                            if ((function(E, $) {
                                    var it = [0],
                                        pt = [0],
                                        ot = [0];
                                    e: for (;;) {
                                        if (E == null) return 0;
                                        if ($ == null) return E.a = 2, 0;
                                        if (E.l = $, E.a = 0, et(E.m, $.data, $.w, $.ha), !un(E.m, it, pt, ot)) {
                                            E.a = 3;
                                            break e
                                        }
                                        if (E.xb = ps, $.width = it[0], $.height = pt[0], !Zr(it[0], pt[0], 1, E, null)) break e;
                                        return 1
                                    }
                                    return e(E.a != 0), 0
                                })(t, p)) {
                                if (p = (r = Nn(p.width, p.height, S.Oa, S.ba)) == 0) {
                                    e: {
                                        p = t;r: for (;;) {
                                            if (p == null) {
                                                p = 0;
                                                break e
                                            }
                                            if (e(p.s.yc != null), e(p.s.Ya != null), e(0 < p.s.Wb), e((l = p.l) != null), e((y = l.ma) != null), p.xb != 0) {
                                                if (p.ca = y.ba, p.tb = y.tb, e(p.ca != null), !Ki(y.Oa, l, Ra)) {
                                                    p.a = 2;
                                                    break r
                                                }
                                                if (!Vn(p, l.width) || l.da) break r;
                                                if ((l.da || ee(p.ca.S)) && Or(), 11 > p.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), p.ca.f.kb.F != null && Or()), p.Pb && 0 < p.s.ua && p.s.vb.X == null && !H(p.s.vb, p.s.Wa.Xa)) {
                                                    p.a = 1;
                                                    break r
                                                }
                                                p.xb = 0
                                            }
                                            if (!zr(p, p.V, p.Ba, p.c, p.i, l.o, wn)) break r;
                                            y.Dc = p.Ma, p = 1;
                                            break e
                                        }
                                        e(p.a != 0),
                                        p = 0
                                    }
                                    p = !p
                                }
                                p && (r = t.a)
                            } else r = t.a
                        } else {
                            if ((t = new io) == null) {
                                S = 1;
                                break t
                            }
                            if (t.Fa = y.na, t.P = y.P, t.qc = y.Sa, xa(t, p)) {
                                if ((r = Nn(p.width, p.height, S.Oa, S.ba)) == 0) {
                                    if (t.Aa = 0, l = S.Oa, e((y = t) != null), l != null) {
                                        if (0 < (j = 0 > (j = l.Md) ? 0 : 100 < j ? 255 : 255 * j / 100)) {
                                            for (T = K = 0; 4 > T; ++T) 12 > (lt = y.pb[T]).lc && (lt.ia = j * Hu[0 > lt.lc ? 0 : lt.lc] >> 3), K |= lt.ia;
                                            K && (alert("todo:VP8InitRandom"), y.ia = 1)
                                        }
                                        y.Ga = l.Id, 100 < y.Ga ? y.Ga = 100 : 0 > y.Ga && (y.Ga = 0)
                                    }(function(E, $) {
                                        if (E == null) return 0;
                                        if ($ == null) return Ge(E, 2, "NULL VP8Io parameter in VP8Decode().");
                                        if (!E.cb && !xa(E, $)) return 0;
                                        if (e(E.cb), $.ac == null || $.ac($)) {
                                            $.ob && (E.L = 0);
                                            var it = Ha[E.L];
                                            if (E.L == 2 ? (E.yb = 0, E.zb = 0) : (E.yb = $.v - it >> 4, E.zb = $.j - it >> 4, 0 > E.yb && (E.yb = 0), 0 > E.zb && (E.zb = 0)), E.Va = $.o + 15 + it >> 4, E.Hb = $.va + 15 + it >> 4, E.Hb > E.za && (E.Hb = E.za), E.Va > E.Ub && (E.Va = E.Ub), 0 < E.L) {
                                                var pt = E.ed;
                                                for (it = 0; 4 > it; ++it) {
                                                    var ot;
                                                    if (E.Qa.Cb) {
                                                        var vt = E.Qa.Lb[it];
                                                        E.Qa.Fb || (vt += pt.Tb)
                                                    } else vt = pt.Tb;
                                                    for (ot = 0; 1 >= ot; ++ot) {
                                                        var bt = E.gd[it][ot],
                                                            xt = vt;
                                                        if (pt.Pc && (xt += pt.vd[0], ot && (xt += pt.od[0])), 0 < (xt = 0 > xt ? 0 : 63 < xt ? 63 : xt)) {
                                                            var wt = xt;
                                                            0 < pt.wb && (wt = 4 < pt.wb ? wt >> 2 : wt >> 1) > 9 - pt.wb && (wt = 9 - pt.wb), 1 > wt && (wt = 1), bt.dd = wt, bt.tc = 2 * xt + wt, bt.ld = 40 <= xt ? 2 : 15 <= xt ? 1 : 0
                                                        } else bt.tc = 0;
                                                        bt.La = ot
                                                    }
                                                }
                                            }
                                            it = 0
                                        } else Ge(E, 6, "Frame setup failed"), it = E.a;
                                        if (it = it == 0) {
                                            if (it) {
                                                E.$c = 0, 0 < E.Aa || (E.Ic = Uu);
                                                e: {
                                                    it = E.Ic,
                                                    pt = 4 * (wt = E.za);
                                                    var Rt = 32 * wt,
                                                        Ft = wt + 1,
                                                        oe = 0 < E.L ? wt * (0 < E.Aa ? 2 : 1) : 0,
                                                        It = (E.Aa == 2 ? 2 : 1) * wt;
                                                    if ((bt = pt + 832 + (ot = 3 * (16 * it + Ha[E.L]) / 2 * Rt) + (vt = E.Fa != null && 0 < E.Fa.length ? E.Kc.c * E.Kc.i : 0)) != bt) it = 0;
                                                    else {
                                                        if (bt > E.Vb) {
                                                            if (E.Vb = 0, E.Ec = o(bt), E.Fc = 0, E.Ec == null) {
                                                                it = Ge(E, 1, "no memory during frame initialization.");
                                                                break e
                                                            }
                                                            E.Vb = bt
                                                        }
                                                        bt = E.Ec, xt = E.Fc, E.Ac = bt, E.Bc = xt, xt += pt, E.Gd = f(Rt, ya), E.Hd = 0, E.rb = f(Ft + 1, Ri), E.sb = 1, E.wa = oe ? f(oe, Br) : null, E.Y = 0, E.D.Nb = 0, E.D.wa = E.wa, E.D.Y = E.Y, 0 < E.Aa && (E.D.Y += wt), e(!0), E.oc = bt, E.pc = xt, xt += 832, E.ya = f(It, Ti), E.aa = 0, E.D.ya = E.ya, E.D.aa = E.aa, E.Aa == 2 && (E.D.aa += wt), E.R = 16 * wt, E.B = 8 * wt, wt = (Rt = Ha[E.L]) * E.R, Rt = Rt / 2 * E.B, E.sa = bt, E.ta = xt + wt, E.qa = E.sa, E.ra = E.ta + 16 * it * E.R + Rt, E.Ha = E.qa, E.Ia = E.ra + 8 * it * E.B + Rt, E.$c = 0, xt += ot, E.mb = vt ? bt : null, E.nb = vt ? xt : null, e(xt + vt <= E.Fc + E.Vb), Gn(E), s(E.Ac, E.Bc, 0, pt), it = 1
                                                    }
                                                }
                                                if (it) {
                                                    if ($.ka = 0, $.y = E.sa, $.O = E.ta, $.f = E.qa, $.N = E.ra, $.ea = E.Ha, $.Vd = E.Ia, $.fa = E.R, $.Rc = E.B, $.F = null, $.J = 0, !ls) {
                                                        for (it = -255; 255 >= it; ++it) as[255 + it] = 0 > it ? -it : it;
                                                        for (it = -1020; 1020 >= it; ++it) os[1020 + it] = -128 > it ? -128 : 127 < it ? 127 : it;
                                                        for (it = -112; 112 >= it; ++it) ss[112 + it] = -16 > it ? -16 : 15 < it ? 15 : it;
                                                        for (it = -255; 510 >= it; ++it) us[255 + it] = 0 > it ? 0 : 255 < it ? 255 : it;
                                                        ls = 1
                                                    }
                                                    Cn = Na, hi = oo, en = so, me = $r, Ae = Aa, Dr = ao, qe = Pa, Ze = ka, vn = u, na = b, Ci = ti, Ba = Fa, Ko = q, Zo = V, $o = Yi, Qo = Qn, ts = Sa, es = _a, Ur[0] = go, Ur[1] = qi, Ur[2] = fo, Ur[3] = po, Ur[4] = vo, Ur[5] = cn, Ur[6] = hn, Ur[7] = mo, Ur[8] = Ai, Ur[9] = bo, jn[0] = xn, jn[1] = lo, jn[2] = ho, jn[3] = zi, jn[4] = co, jn[5] = Xn, jn[6] = Hi, mn[0] = Si, mn[1] = uo, mn[2] = Ui, mn[3] = Kn, mn[4] = Wi, mn[5] = yo, mn[6] = Vi, it = 1
                                                } else it = 0
                                            }
                                            it && (it = (function(he, $e) {
                                                for (he.M = 0; he.M < he.Va; ++he.M) {
                                                    var se, Bt = he.Jc[he.M & he.Xb],
                                                        St = he.m,
                                                        ze = he;
                                                    for (se = 0; se < ze.za; ++se) {
                                                        var re = St,
                                                            ce = ze,
                                                            Ce = ce.Ac,
                                                            ar = ce.Bc + 4 * se,
                                                            gr = ce.zc,
                                                            Oe = ce.ya[ce.aa + se];
                                                        if (ce.Qa.Bb ? Oe.$b = yt(re, ce.Pa.jb[0]) ? 2 + yt(re, ce.Pa.jb[2]) : yt(re, ce.Pa.jb[1]) : Oe.$b = 0, ce.kc && (Oe.Ad = yt(re, ce.Bd)), Oe.Za = !yt(re, 145) + 0, Oe.Za) {
                                                            var hr = Oe.Ob,
                                                                vr = 0;
                                                            for (ce = 0; 4 > ce; ++ce) {
                                                                var Qe, fe = gr[0 + ce];
                                                                for (Qe = 0; 4 > Qe; ++Qe) {
                                                                    fe = ku[Ce[ar + Qe]][fe];
                                                                    for (var be = ds[yt(re, fe[0])]; 0 < be;) be = ds[2 * be + yt(re, fe[be])];
                                                                    fe = -be, Ce[ar + Qe] = fe
                                                                }
                                                                a(hr, vr, Ce, ar, 4), vr += 4, gr[0 + ce] = fe
                                                            }
                                                        } else fe = yt(re, 156) ? yt(re, 128) ? 1 : 3 : yt(re, 163) ? 2 : 0, Oe.Ob[0] = fe, s(Ce, ar, fe, 4), s(gr, 0, fe, 4);
                                                        Oe.Dd = yt(re, 142) ? yt(re, 114) ? yt(re, 183) ? 1 : 3 : 2 : 0
                                                    }
                                                    if (ze.m.Ka) return Ge(he, 7, "Premature end-of-partition0 encountered.");
                                                    for (; he.ja < he.za; ++he.ja) {
                                                        if (ze = Bt, re = (St = he).rb[St.sb - 1], Ce = St.rb[St.sb + St.ja], se = St.ya[St.aa + St.ja], ar = St.kc ? se.Ad : 0) re.la = Ce.la = 0, se.Za || (re.Na = Ce.Na = 0), se.Hc = 0, se.Gc = 0, se.ia = 0;
                                                        else {
                                                            var Me, ye;
                                                            if (re = Ce, Ce = ze, ar = St.Pa.Xc, gr = St.ya[St.aa + St.ja], Oe = St.pb[gr.$b], ce = gr.ad, hr = 0, vr = St.rb[St.sb - 1], fe = Qe = 0, s(ce, hr, 0, 384), gr.Za) var or = 0,
                                                                Wr = ar[3];
                                                            else {
                                                                be = o(16);
                                                                var He = re.Na + vr.Na;
                                                                if (He = aa(Ce, ar[1], He, Oe.Eb, 0, be, 0), re.Na = vr.Na = (0 < He) + 0, 1 < He) Cn(be, 0, ce, hr);
                                                                else {
                                                                    var yr = be[0] + 3 >> 3;
                                                                    for (be = 0; 256 > be; be += 16) ce[hr + be] = yr
                                                                }
                                                                or = 1, Wr = ar[0]
                                                            }
                                                            var Ne = 15 & re.la,
                                                                tr = 15 & vr.la;
                                                            for (be = 0; 4 > be; ++be) {
                                                                var Sr = 1 & tr;
                                                                for (yr = ye = 0; 4 > yr; ++yr) Ne = Ne >> 1 | (Sr = (He = aa(Ce, Wr, He = Sr + (1 & Ne), Oe.Sc, or, ce, hr)) > or) << 7, ye = ye << 2 | (3 < He ? 3 : 1 < He ? 2 : ce[hr + 0] != 0), hr += 16;
                                                                Ne >>= 4, tr = tr >> 1 | Sr << 7, Qe = (Qe << 8 | ye) >>> 0
                                                            }
                                                            for (Wr = Ne, or = tr >> 4, Me = 0; 4 > Me; Me += 2) {
                                                                for (ye = 0, Ne = re.la >> 4 + Me, tr = vr.la >> 4 + Me, be = 0; 2 > be; ++be) {
                                                                    for (Sr = 1 & tr, yr = 0; 2 > yr; ++yr) He = Sr + (1 & Ne), Ne = Ne >> 1 | (Sr = 0 < (He = aa(Ce, ar[2], He, Oe.Qc, 0, ce, hr))) << 3, ye = ye << 2 | (3 < He ? 3 : 1 < He ? 2 : ce[hr + 0] != 0), hr += 16;
                                                                    Ne >>= 2, tr = tr >> 1 | Sr << 5
                                                                }
                                                                fe |= ye << 4 * Me, Wr |= Ne << 4 << Me, or |= (240 & tr) << Me
                                                            }
                                                            re.la = Wr, vr.la = or, gr.Hc = Qe, gr.Gc = fe, gr.ia = 43690 & fe ? 0 : Oe.ia, ar = !(Qe | fe)
                                                        }
                                                        if (0 < St.L && (St.wa[St.Y + St.ja] = St.gd[se.$b][se.Za], St.wa[St.Y + St.ja].La |= !ar), ze.Ka) return Ge(he, 7, "Premature end-of-file encountered.")
                                                    }
                                                    if (Gn(he), St = $e, ze = 1, se = (Bt = he).D, re = 0 < Bt.L && Bt.M >= Bt.zb && Bt.M <= Bt.Va, Bt.Aa == 0) e: {
                                                        if (se.M = Bt.M, se.uc = re, Mr(Bt, se), ze = 1, se = (ye = Bt.D).Nb, re = (fe = Ha[Bt.L]) * Bt.R, Ce = fe / 2 * Bt.B, be = 16 * se * Bt.R, yr = 8 * se * Bt.B, ar = Bt.sa, gr = Bt.ta - re + be, Oe = Bt.qa, ce = Bt.ra - Ce + yr, hr = Bt.Ha, vr = Bt.Ia - Ce + yr, tr = (Ne = ye.M) == 0, Qe = Ne >= Bt.Va - 1, Bt.Aa == 2 && Mr(Bt, ye), ye.uc)
                                                            for (Sr = (He = Bt).D.M, e(He.D.uc), ye = He.yb; ye < He.Hb; ++ye) {
                                                                or = ye, Wr = Sr;
                                                                var mr = (_r = (sr = He).D).Nb;
                                                                Me = sr.R;
                                                                var _r = _r.wa[_r.Y + or],
                                                                    Pr = sr.sa,
                                                                    wr = sr.ta + 16 * mr * Me + 16 * or,
                                                                    kr = _r.dd,
                                                                    Fe = _r.tc;
                                                                if (Fe != 0)
                                                                    if (e(3 <= Fe), sr.L == 1) 0 < or && Qo(Pr, wr, Me, Fe + 4), _r.La && es(Pr, wr, Me, Fe), 0 < Wr && $o(Pr, wr, Me, Fe + 4), _r.La && ts(Pr, wr, Me, Fe);
                                                                    else {
                                                                        var Fr = sr.B,
                                                                            Vr = sr.qa,
                                                                            ci = sr.ra + 8 * mr * Fr + 8 * or,
                                                                            bn = sr.Ha,
                                                                            sr = sr.Ia + 8 * mr * Fr + 8 * or;
                                                                        mr = _r.ld, 0 < or && (Ze(Pr, wr, Me, Fe + 4, kr, mr), na(Vr, ci, bn, sr, Fr, Fe + 4, kr, mr)), _r.La && (Ba(Pr, wr, Me, Fe, kr, mr), Zo(Vr, ci, bn, sr, Fr, Fe, kr, mr)), 0 < Wr && (qe(Pr, wr, Me, Fe + 4, kr, mr), vn(Vr, ci, bn, sr, Fr, Fe + 4, kr, mr)), _r.La && (Ci(Pr, wr, Me, Fe, kr, mr), Ko(Vr, ci, bn, sr, Fr, Fe, kr, mr))
                                                                    }
                                                            }
                                                        if (Bt.ia && alert("todo:DitherRow"), St.put != null) {
                                                            if (ye = 16 * Ne, Ne = 16 * (Ne + 1), tr ? (St.y = Bt.sa, St.O = Bt.ta + be, St.f = Bt.qa, St.N = Bt.ra + yr, St.ea = Bt.Ha, St.W = Bt.Ia + yr) : (ye -= fe, St.y = ar, St.O = gr, St.f = Oe, St.N = ce, St.ea = hr, St.W = vr), Qe || (Ne -= fe), Ne > St.o && (Ne = St.o), St.F = null, St.J = null, Bt.Fa != null && 0 < Bt.Fa.length && ye < Ne && (St.J = Ye(Bt, St, ye, Ne - ye), St.F = Bt.mb, St.F == null && St.F.length == 0)) {
                                                                ze = Ge(Bt, 3, "Could not decode alpha data.");
                                                                break e
                                                            }
                                                            ye < St.j && (fe = St.j - ye, ye = St.j, e(!(1 & fe)), St.O += Bt.R * fe, St.N += Bt.B * (fe >> 1), St.W += Bt.B * (fe >> 1), St.F != null && (St.J += St.width * fe)), ye < Ne && (St.O += St.v, St.N += St.v >> 1, St.W += St.v >> 1, St.F != null && (St.J += St.v), St.ka = ye - St.j, St.U = St.va - St.v, St.T = Ne - ye, ze = St.put(St))
                                                        }
                                                        se + 1 != Bt.Ic || Qe || (a(Bt.sa, Bt.ta - re, ar, gr + 16 * Bt.R, re), a(Bt.qa, Bt.ra - Ce, Oe, ce + 8 * Bt.B, Ce), a(Bt.Ha, Bt.Ia - Ce, hr, vr + 8 * Bt.B, Ce))
                                                    }
                                                    if (!ze) return Ge(he, 6, "Output aborted.")
                                                }
                                                return 1
                                            })(E, $)), $.bc != null && $.bc($), it &= 1
                                        }
                                        return it ? (E.cb = 0, it) : 0
                                    })(t, p) || (r = t.a)
                                }
                            } else r = t.a
                        }
                        r == 0 && S.Oa != null && S.Oa.fd && (r = Zi(S.ba))
                    }
                    S = r
                }
                x = S != 0 ? null : 11 > x ? k.f.RGBA.eb : k.f.kb.y
            } else x = null;
            return x
        };
        var xs = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
    };

    function g(O, at) {
        for (var P = "", M = 0; M < 4; M++) P += String.fromCharCode(O[at++]);
        return P
    }

    function w(O, at) {
        return O[at + 0] | O[at + 1] << 8
    }

    function m(O, at) {
        return (O[at + 0] | O[at + 1] << 8 | O[at + 2] << 16) >>> 0
    }

    function C(O, at) {
        return (O[at + 0] | O[at + 1] << 8 | O[at + 2] << 16 | O[at + 3] << 24) >>> 0
    }
    new c;
    var d = [0],
        B = [0],
        A = [],
        N = new c,
        v = n,
        R = (function(O, at) {
            var P = {},
                M = 0,
                F = !1,
                _ = 0,
                J = 0;
            if (P.frames = [], !(function(L, I) {
                    for (var U = 0; U < 4; U++)
                        if (L[I + U] != "RIFF".charCodeAt(U)) return !0;
                    return !1
                })(O, at)) {
                for (C(O, at += 4), at += 8; at < O.length;) {
                    var W = g(O, at),
                        nt = C(O, at += 4);
                    at += 4;
                    var X = nt + (1 & nt);
                    switch (W) {
                        case "VP8 ":
                        case "VP8L":
                            P.frames[M] === void 0 && (P.frames[M] = {}), (ct = P.frames[M]).src_off = F ? J : at - 8, ct.src_size = _ + nt + 8, M++, F && (F = !1, _ = 0, J = 0);
                            break;
                        case "VP8X":
                            (ct = P.header = {}).feature_flags = O[at];
                            var et = at + 4;
                            ct.canvas_width = 1 + m(O, et), et += 3, ct.canvas_height = 1 + m(O, et), et += 3;
                            break;
                        case "ALPH":
                            F = !0, _ = X + 8, J = at - 8;
                            break;
                        case "ANIM":
                            (ct = P.header).bgcolor = C(O, at), et = at + 4, ct.loop_count = w(O, et), et += 2;
                            break;
                        case "ANMF":
                            var ht, ct;
                            (ct = P.frames[M] = {}).offset_x = 2 * m(O, at), at += 3, ct.offset_y = 2 * m(O, at), at += 3, ct.width = 1 + m(O, at), at += 3, ct.height = 1 + m(O, at), at += 3, ct.duration = m(O, at), at += 3, ht = O[at++], ct.dispose = 1 & ht, ct.blend = ht >> 1 & 1
                    }
                    W != "ANMF" && (at += X)
                }
                return P
            }
        })(v, 0);
    R.response = v, R.rgbaoutput = !0, R.dataurl = !1;
    var z = R.header ? R.header : null,
        D = R.frames ? R.frames : null;
    if (z) {
        z.loop_counter = z.loop_count, d = [z.canvas_height], B = [z.canvas_width];
        for (var G = 0; G < D.length && D[G].blend != 0; G++);
    }
    var tt = D[0],
        st = N.WebPDecodeRGBA(v, tt.src_off, tt.src_size, B, d);
    tt.rgba = st, tt.imgwidth = B[0], tt.imgheight = d[0];
    for (var Y = 0; Y < B[0] * d[0] * 4; Y++) A[Y] = st[Y];
    return this.width = B, this.height = d, this.data = A, this
}(function(n) {
    var e, i, a, s, o, f, h, c, g, w = function(L) {
        return L = L || {}, this.isStrokeTransparent = L.isStrokeTransparent || !1, this.strokeOpacity = L.strokeOpacity || 1, this.strokeStyle = L.strokeStyle || "#000000", this.fillStyle = L.fillStyle || "#000000", this.isFillTransparent = L.isFillTransparent || !1, this.fillOpacity = L.fillOpacity || 1, this.font = L.font || "10px sans-serif", this.textBaseline = L.textBaseline || "alphabetic", this.textAlign = L.textAlign || "left", this.lineWidth = L.lineWidth || 1, this.lineJoin = L.lineJoin || "miter", this.lineCap = L.lineCap || "butt", this.path = L.path || [], this.transform = L.transform !== void 0 ? L.transform.clone() : new c, this.globalCompositeOperation = L.globalCompositeOperation || "normal", this.globalAlpha = L.globalAlpha || 1, this.clip_path = L.clip_path || [], this.currentPoint = L.currentPoint || new f, this.miterLimit = L.miterLimit || 10, this.lastPoint = L.lastPoint || new f, this.lineDashOffset = L.lineDashOffset || 0, this.lineDash = L.lineDash || [], this.margin = L.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = L.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof L.ignoreClearRect != "boolean" || L.ignoreClearRect, this
    };
    n.events.push(["initialized", function() {
        this.context2d = new m(this), e = this.internal.f2, i = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, f = this.internal.Point, h = this.internal.Rectangle, c = this.internal.Matrix, g = new w
    }]);
    var m = function(L) {
        Object.defineProperty(this, "canvas", {
            get: function() {
                return {
                    parentNode: !1,
                    style: !1
                }
            }
        });
        var I = L;
        Object.defineProperty(this, "pdf", {
            get: function() {
                return I
            }
        });
        var U = !1;
        Object.defineProperty(this, "pageWrapXEnabled", {
            get: function() {
                return U
            },
            set: function(gt) {
                U = !!gt
            }
        });
        var Z = !1;
        Object.defineProperty(this, "pageWrapYEnabled", {
            get: function() {
                return Z
            },
            set: function(gt) {
                Z = !!gt
            }
        });
        var Q = 0;
        Object.defineProperty(this, "posX", {
            get: function() {
                return Q
            },
            set: function(gt) {
                isNaN(gt) || (Q = gt)
            }
        });
        var ut = 0;
        Object.defineProperty(this, "posY", {
            get: function() {
                return ut
            },
            set: function(gt) {
                isNaN(gt) || (ut = gt)
            }
        }), Object.defineProperty(this, "margin", {
            get: function() {
                return g.margin
            },
            set: function(gt) {
                var H;
                typeof gt == "number" ? H = [gt, gt, gt, gt] : ((H = new Array(4))[0] = gt[0], H[1] = gt.length >= 2 ? gt[1] : H[0], H[2] = gt.length >= 3 ? gt[2] : H[0], H[3] = gt.length >= 4 ? gt[3] : H[1]), g.margin = H
            }
        });
        var dt = !1;
        Object.defineProperty(this, "autoPaging", {
            get: function() {
                return dt
            },
            set: function(gt) {
                dt = gt
            }
        });
        var ft = 0;
        Object.defineProperty(this, "lastBreak", {
            get: function() {
                return ft
            },
            set: function(gt) {
                ft = gt
            }
        });
        var yt = [];
        Object.defineProperty(this, "pageBreaks", {
            get: function() {
                return yt
            },
            set: function(gt) {
                yt = gt
            }
        }), Object.defineProperty(this, "ctx", {
            get: function() {
                return g
            },
            set: function(gt) {
                gt instanceof w && (g = gt)
            }
        }), Object.defineProperty(this, "path", {
            get: function() {
                return g.path
            },
            set: function(gt) {
                g.path = gt
            }
        });
        var Nt = [];
        Object.defineProperty(this, "ctxStack", {
            get: function() {
                return Nt
            },
            set: function(gt) {
                Nt = gt
            }
        }), Object.defineProperty(this, "fillStyle", {
            get: function() {
                return this.ctx.fillStyle
            },
            set: function(gt) {
                var H;
                H = C(gt), this.ctx.fillStyle = H.style, this.ctx.isFillTransparent = H.a === 0, this.ctx.fillOpacity = H.a, this.pdf.setFillColor(H.r, H.g, H.b, {
                    a: H.a
                }), this.pdf.setTextColor(H.r, H.g, H.b, {
                    a: H.a
                })
            }
        }), Object.defineProperty(this, "strokeStyle", {
            get: function() {
                return this.ctx.strokeStyle
            },
            set: function(gt) {
                var H = C(gt);
                this.ctx.strokeStyle = H.style, this.ctx.isStrokeTransparent = H.a === 0, this.ctx.strokeOpacity = H.a, H.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (H.a, this.pdf.setDrawColor(H.r, H.g, H.b))
            }
        }), Object.defineProperty(this, "lineCap", {
            get: function() {
                return this.ctx.lineCap
            },
            set: function(gt) {
                ["butt", "round", "square"].indexOf(gt) !== -1 && (this.ctx.lineCap = gt, this.pdf.setLineCap(gt))
            }
        }), Object.defineProperty(this, "lineWidth", {
            get: function() {
                return this.ctx.lineWidth
            },
            set: function(gt) {
                isNaN(gt) || (this.ctx.lineWidth = gt, this.pdf.setLineWidth(gt))
            }
        }), Object.defineProperty(this, "lineJoin", {
            get: function() {
                return this.ctx.lineJoin
            },
            set: function(gt) {
                ["bevel", "round", "miter"].indexOf(gt) !== -1 && (this.ctx.lineJoin = gt, this.pdf.setLineJoin(gt))
            }
        }), Object.defineProperty(this, "miterLimit", {
            get: function() {
                return this.ctx.miterLimit
            },
            set: function(gt) {
                isNaN(gt) || (this.ctx.miterLimit = gt, this.pdf.setMiterLimit(gt))
            }
        }), Object.defineProperty(this, "textBaseline", {
            get: function() {
                return this.ctx.textBaseline
            },
            set: function(gt) {
                this.ctx.textBaseline = gt
            }
        }), Object.defineProperty(this, "textAlign", {
            get: function() {
                return this.ctx.textAlign
            },
            set: function(gt) {
                ["right", "end", "center", "left", "start"].indexOf(gt) !== -1 && (this.ctx.textAlign = gt)
            }
        });
        var Pt = null,
            kt = null;
        Object.defineProperty(this, "fontFaces", {
            get: function() {
                return kt
            },
            set: function(gt) {
                Pt = null, kt = gt
            }
        }), Object.defineProperty(this, "font", {
            get: function() {
                return this.ctx.font
            },
            set: function(gt) {
                var H;
                if (this.ctx.font = gt, (H = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(gt)) !== null) {
                    var ue = H[1];
                    H[2];
                    var ne = H[3],
                        Ht = H[4];
                    H[5];
                    var At = H[6],
                        Tt = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Ht)[2];
                    Ht = Math.floor(Tt === "px" ? parseFloat(Ht) * this.pdf.internal.scaleFactor : Tt === "em" ? parseFloat(Ht) * this.pdf.getFontSize() : parseFloat(Ht) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(Ht);
                    var _t = (function(Vt) {
                        var qt, Pe, pe = [],
                            Dt = Vt.trim();
                        if (Dt === "") return Yo;
                        if (Dt in $s) return [$s[Dt]];
                        for (; Dt !== "";) {
                            switch (Pe = null, qt = (Dt = tu(Dt)).charAt(0)) {
                                case '"':
                                case "'":
                                    Pe = bl(Dt.substring(1), qt);
                                    break;
                                default:
                                    Pe = yl(Dt)
                            }
                            if (Pe === null || (pe.push(Pe[0]), (Dt = tu(Pe[1])) !== "" && Dt.charAt(0) !== ",")) return Yo;
                            Dt = Dt.replace(/^,/, "")
                        }
                        return pe
                    })(At);
                    if (this.fontFaces) {
                        var ie = (function(Vt, qt) {
                                if (Pt === null) {
                                    var Pe = (function(pe) {
                                        var Dt = [];
                                        return Object.keys(pe).forEach(function(te) {
                                            pe[te].forEach(function(Le) {
                                                var Ut = null;
                                                switch (Le) {
                                                    case "bold":
                                                        Ut = {
                                                            family: te,
                                                            weight: "bold"
                                                        };
                                                        break;
                                                    case "italic":
                                                        Ut = {
                                                            family: te,
                                                            style: "italic"
                                                        };
                                                        break;
                                                    case "bolditalic":
                                                        Ut = {
                                                            family: te,
                                                            weight: "bold",
                                                            style: "italic"
                                                        };
                                                        break;
                                                    case "":
                                                    case "normal":
                                                        Ut = {
                                                            family: te
                                                        }
                                                }
                                                Ut !== null && (Ut.ref = {
                                                    name: te,
                                                    style: Le
                                                }, Dt.push(Ut))
                                            })
                                        }), Dt
                                    })(Vt.getFontList());
                                    Pt = (function(pe) {
                                        for (var Dt = {}, te = 0; te < pe.length; ++te) {
                                            var Le = Go(pe[te]),
                                                Ut = Le.family,
                                                le = Le.stretch,
                                                ee = Le.style,
                                                Re = Le.weight;
                                            Dt[Ut] = Dt[Ut] || {}, Dt[Ut][le] = Dt[Ut][le] || {}, Dt[Ut][le][ee] = Dt[Ut][le][ee] || {}, Dt[Ut][le][ee][Re] = Le
                                        }
                                        return Dt
                                    })(Pe.concat(qt))
                                }
                                return Pt
                            })(this.pdf, this.fontFaces),
                            zt = _t.map(function(Vt) {
                                return {
                                    family: Vt,
                                    stretch: "normal",
                                    weight: ne,
                                    style: ue
                                }
                            }),
                            de = (function(Vt, qt, Pe) {
                                for (var pe = (Pe = Pe || {}).defaultFontFamily || "times", Dt = Object.assign({}, ml, Pe.genericFontFamilies || {}), te = null, Le = null, Ut = 0; Ut < qt.length; ++Ut)
                                    if (Dt[(te = Go(qt[Ut])).family] && (te.family = Dt[te.family]), Vt.hasOwnProperty(te.family)) {
                                        Le = Vt[te.family];
                                        break
                                    }
                                if (!(Le = Le || Vt[pe])) throw new Error("Could not find a font-family for the rule '" + Qs(te) + "' and default family '" + pe + "'.");
                                if (Le = (function(le, ee) {
                                        if (ee[le]) return ee[le];
                                        var Re = Vo[le],
                                            Xe = Re <= Vo.normal ? -1 : 1,
                                            xe = Zs(ee, Xs, Re, Xe);
                                        if (!xe) throw new Error("Could not find a matching font-stretch value for " + le);
                                        return xe
                                    })(te.stretch, Le), Le = (function(le, ee) {
                                        if (ee[le]) return ee[le];
                                        for (var Re = Js[le], Xe = 0; Xe < Re.length; ++Xe)
                                            if (ee[Re[Xe]]) return ee[Re[Xe]];
                                        throw new Error("Could not find a matching font-style for " + le)
                                    })(te.style, Le), !(Le = (function(le, ee) {
                                        if (ee[le]) return ee[le];
                                        if (le === 400 && ee[500]) return ee[500];
                                        if (le === 500 && ee[400]) return ee[400];
                                        var Re = vl[le],
                                            Xe = Zs(ee, Ks, Re, le < 400 ? -1 : 1);
                                        if (!Xe) throw new Error("Could not find a matching font-weight for value " + le);
                                        return Xe
                                    })(te.weight, Le))) throw new Error("Failed to resolve a font for the rule '" + Qs(te) + "'.");
                                return Le
                            })(ie, zt);
                        this.pdf.setFont(de.ref.name, de.ref.style)
                    } else {
                        var $t = "";
                        (ne === "bold" || parseInt(ne, 10) >= 700 || ue === "bold") && ($t = "bold"), ue === "italic" && ($t += "italic"), $t.length === 0 && ($t = "normal");
                        for (var Qt = "", we = {
                                arial: "Helvetica",
                                Arial: "Helvetica",
                                verdana: "Helvetica",
                                Verdana: "Helvetica",
                                helvetica: "Helvetica",
                                Helvetica: "Helvetica",
                                "sans-serif": "Helvetica",
                                fixed: "Courier",
                                monospace: "Courier",
                                terminal: "Courier",
                                cursive: "Times",
                                fantasy: "Times",
                                serif: "Times"
                            }, ae = 0; ae < _t.length; ae++) {
                            if (this.pdf.internal.getFont(_t[ae], $t, {
                                    noFallback: !0,
                                    disableWarning: !0
                                }) !== void 0) {
                                Qt = _t[ae];
                                break
                            }
                            if ($t === "bolditalic" && this.pdf.internal.getFont(_t[ae], "bold", {
                                    noFallback: !0,
                                    disableWarning: !0
                                }) !== void 0) Qt = _t[ae], $t = "bold";
                            else if (this.pdf.internal.getFont(_t[ae], "normal", {
                                    noFallback: !0,
                                    disableWarning: !0
                                }) !== void 0) {
                                Qt = _t[ae], $t = "normal";
                                break
                            }
                        }
                        if (Qt === "") {
                            for (var Et = 0; Et < _t.length; Et++)
                                if (we[_t[Et]]) {
                                    Qt = we[_t[Et]];
                                    break
                                }
                        }
                        Qt = Qt === "" ? "Times" : Qt, this.pdf.setFont(Qt, $t)
                    }
                }
            }
        }), Object.defineProperty(this, "globalCompositeOperation", {
            get: function() {
                return this.ctx.globalCompositeOperation
            },
            set: function(gt) {
                this.ctx.globalCompositeOperation = gt
            }
        }), Object.defineProperty(this, "globalAlpha", {
            get: function() {
                return this.ctx.globalAlpha
            },
            set: function(gt) {
                this.ctx.globalAlpha = gt
            }
        }), Object.defineProperty(this, "lineDashOffset", {
            get: function() {
                return this.ctx.lineDashOffset
            },
            set: function(gt) {
                this.ctx.lineDashOffset = gt, ct.call(this)
            }
        }), Object.defineProperty(this, "lineDash", {
            get: function() {
                return this.ctx.lineDash
            },
            set: function(gt) {
                this.ctx.lineDash = gt, ct.call(this)
            }
        }), Object.defineProperty(this, "ignoreClearRect", {
            get: function() {
                return this.ctx.ignoreClearRect
            },
            set: function(gt) {
                this.ctx.ignoreClearRect = !!gt
            }
        })
    };
    m.prototype.setLineDash = function(L) {
        this.lineDash = L
    }, m.prototype.getLineDash = function() {
        return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice()
    }, m.prototype.fill = function() {
        D.call(this, "fill", !1)
    }, m.prototype.stroke = function() {
        D.call(this, "stroke", !1)
    }, m.prototype.beginPath = function() {
        this.path = [{
            type: "begin"
        }]
    }, m.prototype.moveTo = function(L, I) {
        if (isNaN(L) || isNaN(I)) throw _e.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
        var U = this.ctx.transform.applyToPoint(new f(L, I));
        this.path.push({
            type: "mt",
            x: U.x,
            y: U.y
        }), this.ctx.lastPoint = new f(L, I)
    }, m.prototype.closePath = function() {
        var L = new f(0, 0),
            I = 0;
        for (I = this.path.length - 1; I !== -1; I--)
            if (this.path[I].type === "begin" && Se(this.path[I + 1]) === "object" && typeof this.path[I + 1].x == "number") {
                L = new f(this.path[I + 1].x, this.path[I + 1].y);
                break
            }
        this.path.push({
            type: "close"
        }), this.ctx.lastPoint = new f(L.x, L.y)
    }, m.prototype.lineTo = function(L, I) {
        if (isNaN(L) || isNaN(I)) throw _e.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
        var U = this.ctx.transform.applyToPoint(new f(L, I));
        this.path.push({
            type: "lt",
            x: U.x,
            y: U.y
        }), this.ctx.lastPoint = new f(U.x, U.y)
    }, m.prototype.clip = function() {
        this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), D.call(this, null, !0)
    }, m.prototype.quadraticCurveTo = function(L, I, U, Z) {
        if (isNaN(U) || isNaN(Z) || isNaN(L) || isNaN(I)) throw _e.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
        var Q = this.ctx.transform.applyToPoint(new f(U, Z)),
            ut = this.ctx.transform.applyToPoint(new f(L, I));
        this.path.push({
            type: "qct",
            x1: ut.x,
            y1: ut.y,
            x: Q.x,
            y: Q.y
        }), this.ctx.lastPoint = new f(Q.x, Q.y)
    }, m.prototype.bezierCurveTo = function(L, I, U, Z, Q, ut) {
        if (isNaN(Q) || isNaN(ut) || isNaN(L) || isNaN(I) || isNaN(U) || isNaN(Z)) throw _e.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
        var dt = this.ctx.transform.applyToPoint(new f(Q, ut)),
            ft = this.ctx.transform.applyToPoint(new f(L, I)),
            yt = this.ctx.transform.applyToPoint(new f(U, Z));
        this.path.push({
            type: "bct",
            x1: ft.x,
            y1: ft.y,
            x2: yt.x,
            y2: yt.y,
            x: dt.x,
            y: dt.y
        }), this.ctx.lastPoint = new f(dt.x, dt.y)
    }, m.prototype.arc = function(L, I, U, Z, Q, ut) {
        if (isNaN(L) || isNaN(I) || isNaN(U) || isNaN(Z) || isNaN(Q)) throw _e.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
        if (ut = !!ut, !this.ctx.transform.isIdentity) {
            var dt = this.ctx.transform.applyToPoint(new f(L, I));
            L = dt.x, I = dt.y;
            var ft = this.ctx.transform.applyToPoint(new f(0, U)),
                yt = this.ctx.transform.applyToPoint(new f(0, 0));
            U = Math.sqrt(Math.pow(ft.x - yt.x, 2) + Math.pow(ft.y - yt.y, 2))
        }
        Math.abs(Q - Z) >= 2 * Math.PI && (Z = 0, Q = 2 * Math.PI), this.path.push({
            type: "arc",
            x: L,
            y: I,
            radius: U,
            startAngle: Z,
            endAngle: Q,
            counterclockwise: ut
        })
    }, m.prototype.arcTo = function(L, I, U, Z, Q) {
        throw new Error("arcTo not implemented.")
    }, m.prototype.rect = function(L, I, U, Z) {
        if (isNaN(L) || isNaN(I) || isNaN(U) || isNaN(Z)) throw _e.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
        this.moveTo(L, I), this.lineTo(L + U, I), this.lineTo(L + U, I + Z), this.lineTo(L, I + Z), this.lineTo(L, I), this.lineTo(L + U, I), this.lineTo(L, I)
    }, m.prototype.fillRect = function(L, I, U, Z) {
        if (isNaN(L) || isNaN(I) || isNaN(U) || isNaN(Z)) throw _e.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
        if (!d.call(this)) {
            var Q = {};
            this.lineCap !== "butt" && (Q.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (Q.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(L, I, U, Z), this.fill(), Q.hasOwnProperty("lineCap") && (this.lineCap = Q.lineCap), Q.hasOwnProperty("lineJoin") && (this.lineJoin = Q.lineJoin)
        }
    }, m.prototype.strokeRect = function(L, I, U, Z) {
        if (isNaN(L) || isNaN(I) || isNaN(U) || isNaN(Z)) throw _e.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
        B.call(this) || (this.beginPath(), this.rect(L, I, U, Z), this.stroke())
    }, m.prototype.clearRect = function(L, I, U, Z) {
        if (isNaN(L) || isNaN(I) || isNaN(U) || isNaN(Z)) throw _e.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
        this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(L, I, U, Z))
    }, m.prototype.save = function(L) {
        L = typeof L != "boolean" || L;
        for (var I = this.pdf.internal.getCurrentPageInfo().pageNumber, U = 0; U < this.pdf.internal.getNumberOfPages(); U++) this.pdf.setPage(U + 1), this.pdf.internal.out("q");
        if (this.pdf.setPage(I), L) {
            this.ctx.fontSize = this.pdf.internal.getFontSize();
            var Z = new w(this.ctx);
            this.ctxStack.push(this.ctx), this.ctx = Z
        }
    }, m.prototype.restore = function(L) {
        L = typeof L != "boolean" || L;
        for (var I = this.pdf.internal.getCurrentPageInfo().pageNumber, U = 0; U < this.pdf.internal.getNumberOfPages(); U++) this.pdf.setPage(U + 1), this.pdf.internal.out("Q");
        this.pdf.setPage(I), L && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset)
    }, m.prototype.toDataURL = function() {
        throw new Error("toDataUrl not implemented.")
    };
    var C = function(L) {
            var I, U, Z, Q;
            if (L.isCanvasGradient === !0 && (L = L.getColor()), !L) return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                style: L
            };
            if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(L)) I = 0, U = 0, Z = 0, Q = 0;
            else {
                var ut = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(L);
                if (ut !== null) I = parseInt(ut[1]), U = parseInt(ut[2]), Z = parseInt(ut[3]), Q = 1;
                else if ((ut = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(L)) !== null) I = parseInt(ut[1]), U = parseInt(ut[2]), Z = parseInt(ut[3]), Q = parseFloat(ut[4]);
                else {
                    if (Q = 1, typeof L == "string" && L.charAt(0) !== "#") {
                        var dt = new Ds(L);
                        L = dt.ok ? dt.toHex() : "#000000"
                    }
                    L.length === 4 ? (I = L.substring(1, 2), I += I, U = L.substring(2, 3), U += U, Z = L.substring(3, 4), Z += Z) : (I = L.substring(1, 3), U = L.substring(3, 5), Z = L.substring(5, 7)), I = parseInt(I, 16), U = parseInt(U, 16), Z = parseInt(Z, 16)
                }
            }
            return {
                r: I,
                g: U,
                b: Z,
                a: Q,
                style: L
            }
        },
        d = function() {
            return this.ctx.isFillTransparent || this.globalAlpha == 0
        },
        B = function() {
            return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0)
        };
    m.prototype.fillText = function(L, I, U, Z) {
        if (isNaN(I) || isNaN(U) || typeof L != "string") throw _e.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
        if (Z = isNaN(Z) ? void 0 : Z, !d.call(this)) {
            var Q = X(this.ctx.transform.rotation),
                ut = this.ctx.transform.scaleX;
            M.call(this, {
                text: L,
                x: I,
                y: U,
                scale: ut,
                angle: Q,
                align: this.textAlign,
                maxWidth: Z
            })
        }
    }, m.prototype.strokeText = function(L, I, U, Z) {
        if (isNaN(I) || isNaN(U) || typeof L != "string") throw _e.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
        if (!B.call(this)) {
            Z = isNaN(Z) ? void 0 : Z;
            var Q = X(this.ctx.transform.rotation),
                ut = this.ctx.transform.scaleX;
            M.call(this, {
                text: L,
                x: I,
                y: U,
                scale: ut,
                renderingMode: "stroke",
                angle: Q,
                align: this.textAlign,
                maxWidth: Z
            })
        }
    }, m.prototype.measureText = function(L) {
        if (typeof L != "string") throw _e.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
        var I = this.pdf,
            U = this.pdf.internal.scaleFactor,
            Z = I.internal.getFontSize(),
            Q = I.getStringUnitWidth(L) * Z / I.internal.scaleFactor;
        return new function(ut) {
            var dt = (ut = ut || {}).width || 0;
            return Object.defineProperty(this, "width", {
                get: function() {
                    return dt
                }
            }), this
        }({
            width: Q *= Math.round(96 * U / 72 * 1e4) / 1e4
        })
    }, m.prototype.scale = function(L, I) {
        if (isNaN(L) || isNaN(I)) throw _e.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
        var U = new c(L, 0, 0, I, 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(U)
    }, m.prototype.rotate = function(L) {
        if (isNaN(L)) throw _e.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
        var I = new c(Math.cos(L), Math.sin(L), -Math.sin(L), Math.cos(L), 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(I)
    }, m.prototype.translate = function(L, I) {
        if (isNaN(L) || isNaN(I)) throw _e.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
        var U = new c(1, 0, 0, 1, L, I);
        this.ctx.transform = this.ctx.transform.multiply(U)
    }, m.prototype.transform = function(L, I, U, Z, Q, ut) {
        if (isNaN(L) || isNaN(I) || isNaN(U) || isNaN(Z) || isNaN(Q) || isNaN(ut)) throw _e.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
        var dt = new c(L, I, U, Z, Q, ut);
        this.ctx.transform = this.ctx.transform.multiply(dt)
    }, m.prototype.setTransform = function(L, I, U, Z, Q, ut) {
        L = isNaN(L) ? 1 : L, I = isNaN(I) ? 0 : I, U = isNaN(U) ? 0 : U, Z = isNaN(Z) ? 1 : Z, Q = isNaN(Q) ? 0 : Q, ut = isNaN(ut) ? 0 : ut, this.ctx.transform = new c(L, I, U, Z, Q, ut)
    };
    var A = function() {
        return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0
    };
    m.prototype.drawImage = function(L, I, U, Z, Q, ut, dt, ft, yt) {
        var Nt = this.pdf.getImageProperties(L),
            Pt = 1,
            kt = 1,
            gt = 1,
            H = 1;
        Z !== void 0 && ft !== void 0 && (gt = ft / Z, H = yt / Q, Pt = Nt.width / Z * ft / Z, kt = Nt.height / Q * yt / Q), ut === void 0 && (ut = I, dt = U, I = 0, U = 0), Z !== void 0 && ft === void 0 && (ft = Z, yt = Q), Z === void 0 && ft === void 0 && (ft = Nt.width, yt = Nt.height);
        for (var ue, ne = this.ctx.transform.decompose(), Ht = X(ne.rotate.shx), At = new c, Tt = (At = (At = (At = At.multiply(ne.translate)).multiply(ne.skew)).multiply(ne.scale)).applyToRectangle(new h(ut - I * gt, dt - U * H, Z * Pt, Q * kt)), _t = N.call(this, Tt), ie = [], zt = 0; zt < _t.length; zt += 1) ie.indexOf(_t[zt]) === -1 && ie.push(_t[zt]);
        if (z(ie), this.autoPaging)
            for (var de = ie[0], $t = ie[ie.length - 1], Qt = de; Qt < $t + 1; Qt++) {
                this.pdf.setPage(Qt);
                var we = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
                    ae = Qt === 1 ? this.posY + this.margin[0] : this.margin[0],
                    Et = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
                    Vt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
                    qt = Qt === 1 ? 0 : Et + (Qt - 2) * Vt;
                if (this.ctx.clip_path.length !== 0) {
                    var Pe = this.path;
                    ue = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = R(ue, this.posX + this.margin[3], -qt + ae + this.ctx.prevPageLastElemOffset), G.call(this, "fill", !0), this.path = Pe
                }
                var pe = JSON.parse(JSON.stringify(Tt));
                pe = R([pe], this.posX + this.margin[3], -qt + ae + this.ctx.prevPageLastElemOffset)[0];
                var Dt = (Qt > de || Qt < $t) && A.call(this);
                Dt && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], we, Vt, null).clip().discardPath()), this.pdf.addImage(L, "JPEG", pe.x, pe.y, pe.w, pe.h, null, null, Ht), Dt && this.pdf.restoreGraphicsState()
            } else this.pdf.addImage(L, "JPEG", Tt.x, Tt.y, Tt.w, Tt.h, null, null, Ht)
    };
    var N = function(L, I, U) {
            var Z = [];
            I = I || this.pdf.internal.pageSize.width, U = U || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
            var Q = this.posY + this.ctx.prevPageLastElemOffset;
            switch (L.type) {
                default:
                    case "mt":
                    case "lt":
                    Z.push(Math.floor((L.y + Q) / U) + 1);
                break;
                case "arc":
                        Z.push(Math.floor((L.y + Q - L.radius) / U) + 1),
                    Z.push(Math.floor((L.y + Q + L.radius) / U) + 1);
                    break;
                case "qct":
                        var ut = et(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x, L.y);Z.push(Math.floor((ut.y + Q) / U) + 1),
                    Z.push(Math.floor((ut.y + ut.h + Q) / U) + 1);
                    break;
                case "bct":
                        var dt = ht(this.ctx.lastPoint.x, this.ctx.lastPoint.y, L.x1, L.y1, L.x2, L.y2, L.x, L.y);Z.push(Math.floor((dt.y + Q) / U) + 1),
                    Z.push(Math.floor((dt.y + dt.h + Q) / U) + 1);
                    break;
                case "rect":
                        Z.push(Math.floor((L.y + Q) / U) + 1),
                    Z.push(Math.floor((L.y + L.h + Q) / U) + 1)
            }
            for (var ft = 0; ft < Z.length; ft += 1)
                for (; this.pdf.internal.getNumberOfPages() < Z[ft];) v.call(this);
            return Z
        },
        v = function() {
            var L = this.fillStyle,
                I = this.strokeStyle,
                U = this.font,
                Z = this.lineCap,
                Q = this.lineWidth,
                ut = this.lineJoin;
            this.pdf.addPage(), this.fillStyle = L, this.strokeStyle = I, this.font = U, this.lineCap = Z, this.lineWidth = Q, this.lineJoin = ut
        },
        R = function(L, I, U) {
            for (var Z = 0; Z < L.length; Z++) switch (L[Z].type) {
                case "bct":
                    L[Z].x2 += I, L[Z].y2 += U;
                case "qct":
                    L[Z].x1 += I, L[Z].y1 += U;
                default:
                    L[Z].x += I, L[Z].y += U
            }
            return L
        },
        z = function(L) {
            return L.sort(function(I, U) {
                return I - U
            })
        },
        D = function(L, I) {
            for (var U, Z, Q = this.fillStyle, ut = this.strokeStyle, dt = this.lineCap, ft = this.lineWidth, yt = Math.abs(ft * this.ctx.transform.scaleX), Nt = this.lineJoin, Pt = JSON.parse(JSON.stringify(this.path)), kt = JSON.parse(JSON.stringify(this.path)), gt = [], H = 0; H < kt.length; H++)
                if (kt[H].x !== void 0)
                    for (var ue = N.call(this, kt[H]), ne = 0; ne < ue.length; ne += 1) gt.indexOf(ue[ne]) === -1 && gt.push(ue[ne]);
            for (var Ht = 0; Ht < gt.length; Ht++)
                for (; this.pdf.internal.getNumberOfPages() < gt[Ht];) v.call(this);
            if (z(gt), this.autoPaging)
                for (var At = gt[0], Tt = gt[gt.length - 1], _t = At; _t < Tt + 1; _t++) {
                    this.pdf.setPage(_t), this.fillStyle = Q, this.strokeStyle = ut, this.lineCap = dt, this.lineWidth = yt, this.lineJoin = Nt;
                    var ie = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
                        zt = _t === 1 ? this.posY + this.margin[0] : this.margin[0],
                        de = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
                        $t = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
                        Qt = _t === 1 ? 0 : de + (_t - 2) * $t;
                    if (this.ctx.clip_path.length !== 0) {
                        var we = this.path;
                        U = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = R(U, this.posX + this.margin[3], -Qt + zt + this.ctx.prevPageLastElemOffset), G.call(this, L, !0), this.path = we
                    }
                    if (Z = JSON.parse(JSON.stringify(Pt)), this.path = R(Z, this.posX + this.margin[3], -Qt + zt + this.ctx.prevPageLastElemOffset), I === !1 || _t === 0) {
                        var ae = (_t > At || _t < Tt) && A.call(this);
                        ae && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], ie, $t, null).clip().discardPath()), G.call(this, L, I), ae && this.pdf.restoreGraphicsState()
                    }
                    this.lineWidth = ft
                } else this.lineWidth = yt, G.call(this, L, I), this.lineWidth = ft;
            this.path = Pt
        },
        G = function(L, I) {
            if ((L !== "stroke" || I || !B.call(this)) && (L === "stroke" || I || !d.call(this))) {
                for (var U, Z, Q = [], ut = this.path, dt = 0; dt < ut.length; dt++) {
                    var ft = ut[dt];
                    switch (ft.type) {
                        case "begin":
                            Q.push({
                                begin: !0
                            });
                            break;
                        case "close":
                            Q.push({
                                close: !0
                            });
                            break;
                        case "mt":
                            Q.push({
                                start: ft,
                                deltas: [],
                                abs: []
                            });
                            break;
                        case "lt":
                            var yt = Q.length;
                            if (ut[dt - 1] && !isNaN(ut[dt - 1].x) && (U = [ft.x - ut[dt - 1].x, ft.y - ut[dt - 1].y], yt > 0)) {
                                for (; yt >= 0; yt--)
                                    if (Q[yt - 1].close !== !0 && Q[yt - 1].begin !== !0) {
                                        Q[yt - 1].deltas.push(U), Q[yt - 1].abs.push(ft);
                                        break
                                    }
                            }
                            break;
                        case "bct":
                            U = [ft.x1 - ut[dt - 1].x, ft.y1 - ut[dt - 1].y, ft.x2 - ut[dt - 1].x, ft.y2 - ut[dt - 1].y, ft.x - ut[dt - 1].x, ft.y - ut[dt - 1].y], Q[Q.length - 1].deltas.push(U);
                            break;
                        case "qct":
                            var Nt = ut[dt - 1].x + 2 / 3 * (ft.x1 - ut[dt - 1].x),
                                Pt = ut[dt - 1].y + 2 / 3 * (ft.y1 - ut[dt - 1].y),
                                kt = ft.x + 2 / 3 * (ft.x1 - ft.x),
                                gt = ft.y + 2 / 3 * (ft.y1 - ft.y),
                                H = ft.x,
                                ue = ft.y;
                            U = [Nt - ut[dt - 1].x, Pt - ut[dt - 1].y, kt - ut[dt - 1].x, gt - ut[dt - 1].y, H - ut[dt - 1].x, ue - ut[dt - 1].y], Q[Q.length - 1].deltas.push(U);
                            break;
                        case "arc":
                            Q.push({
                                deltas: [],
                                abs: [],
                                arc: !0
                            }), Array.isArray(Q[Q.length - 1].abs) && Q[Q.length - 1].abs.push(ft)
                    }
                }
                Z = I ? null : L === "stroke" ? "stroke" : "fill";
                for (var ne = !1, Ht = 0; Ht < Q.length; Ht++)
                    if (Q[Ht].arc)
                        for (var At = Q[Ht].abs, Tt = 0; Tt < At.length; Tt++) {
                            var _t = At[Tt];
                            _t.type === "arc" ? Y.call(this, _t.x, _t.y, _t.radius, _t.startAngle, _t.endAngle, _t.counterclockwise, void 0, I, !ne) : F.call(this, _t.x, _t.y), ne = !0
                        } else if (Q[Ht].close === !0) this.pdf.internal.out("h"), ne = !1;
                        else if (Q[Ht].begin !== !0) {
                    var ie = Q[Ht].start.x,
                        zt = Q[Ht].start.y;
                    _.call(this, Q[Ht].deltas, ie, zt), ne = !0
                }
                Z && O.call(this, Z), I && at.call(this)
            }
        },
        tt = function(L) {
            var I = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
                U = I * (this.pdf.internal.getLineHeightFactor() - 1);
            switch (this.ctx.textBaseline) {
                case "bottom":
                    return L - U;
                case "top":
                    return L + I - U;
                case "hanging":
                    return L + I - 2 * U;
                case "middle":
                    return L + I / 2 - U;
                default:
                    return L
            }
        },
        st = function(L) {
            return L + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1)
        };
    m.prototype.createLinearGradient = function() {
        var L = function() {};
        return L.colorStops = [], L.addColorStop = function(I, U) {
            this.colorStops.push([I, U])
        }, L.getColor = function() {
            return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1]
        }, L.isCanvasGradient = !0, L
    }, m.prototype.createPattern = function() {
        return this.createLinearGradient()
    }, m.prototype.createRadialGradient = function() {
        return this.createLinearGradient()
    };
    var Y = function(L, I, U, Z, Q, ut, dt, ft, yt) {
            for (var Nt = W.call(this, U, Z, Q, ut), Pt = 0; Pt < Nt.length; Pt++) {
                var kt = Nt[Pt];
                Pt === 0 && (yt ? P.call(this, kt.x1 + L, kt.y1 + I) : F.call(this, kt.x1 + L, kt.y1 + I)), J.call(this, L, I, kt.x2, kt.y2, kt.x3, kt.y3, kt.x4, kt.y4)
            }
            ft ? at.call(this) : O.call(this, dt)
        },
        O = function(L) {
            switch (L) {
                case "stroke":
                    this.pdf.internal.out("S");
                    break;
                case "fill":
                    this.pdf.internal.out("f")
            }
        },
        at = function() {
            this.pdf.clip(), this.pdf.discardPath()
        },
        P = function(L, I) {
            this.pdf.internal.out(i(L) + " " + a(I) + " m")
        },
        M = function(L) {
            var I;
            switch (L.align) {
                case "right":
                case "end":
                    I = "right";
                    break;
                case "center":
                    I = "center";
                    break;
                default:
                    I = "left"
            }
            var U = this.pdf.getTextDimensions(L.text),
                Z = tt.call(this, L.y),
                Q = st.call(this, Z) - U.h,
                ut = this.ctx.transform.applyToPoint(new f(L.x, Z)),
                dt = this.ctx.transform.decompose(),
                ft = new c;
            ft = (ft = (ft = ft.multiply(dt.translate)).multiply(dt.skew)).multiply(dt.scale);
            for (var yt, Nt, Pt, kt = this.ctx.transform.applyToRectangle(new h(L.x, Z, U.w, U.h)), gt = ft.applyToRectangle(new h(L.x, Q, U.w, U.h)), H = N.call(this, gt), ue = [], ne = 0; ne < H.length; ne += 1) ue.indexOf(H[ne]) === -1 && ue.push(H[ne]);
            if (z(ue), this.autoPaging)
                for (var Ht = ue[0], At = ue[ue.length - 1], Tt = Ht; Tt < At + 1; Tt++) {
                    this.pdf.setPage(Tt);
                    var _t = Tt === 1 ? this.posY + this.margin[0] : this.margin[0],
                        ie = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
                        zt = this.pdf.internal.pageSize.height - this.margin[2],
                        de = zt - this.margin[0],
                        $t = this.pdf.internal.pageSize.width - this.margin[1],
                        Qt = $t - this.margin[3],
                        we = Tt === 1 ? 0 : ie + (Tt - 2) * de;
                    if (this.ctx.clip_path.length !== 0) {
                        var ae = this.path;
                        yt = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = R(yt, this.posX + this.margin[3], -1 * we + _t), G.call(this, "fill", !0), this.path = ae
                    }
                    var Et = R([JSON.parse(JSON.stringify(gt))], this.posX + this.margin[3], -we + _t + this.ctx.prevPageLastElemOffset)[0];
                    L.scale >= .01 && (Nt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Nt * L.scale), Pt = this.lineWidth, this.lineWidth = Pt * L.scale);
                    var Vt = this.autoPaging !== "text";
                    if (Vt || Et.y + Et.h <= zt) {
                        if (Vt || Et.y >= _t && Et.x <= $t) {
                            var qt = Vt ? L.text : this.pdf.splitTextToSize(L.text, L.maxWidth || $t - Et.x)[0],
                                Pe = R([JSON.parse(JSON.stringify(kt))], this.posX + this.margin[3], -we + _t + this.ctx.prevPageLastElemOffset)[0],
                                pe = Vt && (Tt > Ht || Tt < At) && A.call(this);
                            pe && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Qt, de, null).clip().discardPath()), this.pdf.text(qt, Pe.x, Pe.y, {
                                angle: L.angle,
                                align: I,
                                renderingMode: L.renderingMode
                            }), pe && this.pdf.restoreGraphicsState()
                        }
                    } else Et.y < zt && (this.ctx.prevPageLastElemOffset += zt - Et.y);
                    L.scale >= .01 && (this.pdf.setFontSize(Nt), this.lineWidth = Pt)
                } else L.scale >= .01 && (Nt = this.pdf.internal.getFontSize(), this.pdf.setFontSize(Nt * L.scale), Pt = this.lineWidth, this.lineWidth = Pt * L.scale), this.pdf.text(L.text, ut.x + this.posX, ut.y + this.posY, {
                    angle: L.angle,
                    align: I,
                    renderingMode: L.renderingMode,
                    maxWidth: L.maxWidth
                }), L.scale >= .01 && (this.pdf.setFontSize(Nt), this.lineWidth = Pt)
        },
        F = function(L, I, U, Z) {
            U = U || 0, Z = Z || 0, this.pdf.internal.out(i(L + U) + " " + a(I + Z) + " l")
        },
        _ = function(L, I, U) {
            return this.pdf.lines(L, I, U, null, null)
        },
        J = function(L, I, U, Z, Q, ut, dt, ft) {
            this.pdf.internal.out([e(s(U + L)), e(o(Z + I)), e(s(Q + L)), e(o(ut + I)), e(s(dt + L)), e(o(ft + I)), "c"].join(" "))
        },
        W = function(L, I, U, Z) {
            for (var Q = 2 * Math.PI, ut = Math.PI / 2; I > U;) I -= Q;
            var dt = Math.abs(U - I);
            dt < Q && Z && (dt = Q - dt);
            for (var ft = [], yt = Z ? -1 : 1, Nt = I; dt > 1e-5;) {
                var Pt = Nt + yt * Math.min(dt, ut);
                ft.push(nt.call(this, L, Nt, Pt)), dt -= Math.abs(Pt - Nt), Nt = Pt
            }
            return ft
        },
        nt = function(L, I, U) {
            var Z = (U - I) / 2,
                Q = L * Math.cos(Z),
                ut = L * Math.sin(Z),
                dt = Q,
                ft = -ut,
                yt = dt * dt + ft * ft,
                Nt = yt + dt * Q + ft * ut,
                Pt = 4 / 3 * (Math.sqrt(2 * yt * Nt) - Nt) / (dt * ut - ft * Q),
                kt = dt - Pt * ft,
                gt = ft + Pt * dt,
                H = kt,
                ue = -gt,
                ne = Z + I,
                Ht = Math.cos(ne),
                At = Math.sin(ne);
            return {
                x1: L * Math.cos(I),
                y1: L * Math.sin(I),
                x2: kt * Ht - gt * At,
                y2: kt * At + gt * Ht,
                x3: H * Ht - ue * At,
                y3: H * At + ue * Ht,
                x4: L * Math.cos(U),
                y4: L * Math.sin(U)
            }
        },
        X = function(L) {
            return 180 * L / Math.PI
        },
        et = function(L, I, U, Z, Q, ut) {
            var dt = L + .5 * (U - L),
                ft = I + .5 * (Z - I),
                yt = Q + .5 * (U - Q),
                Nt = ut + .5 * (Z - ut),
                Pt = Math.min(L, Q, dt, yt),
                kt = Math.max(L, Q, dt, yt),
                gt = Math.min(I, ut, ft, Nt),
                H = Math.max(I, ut, ft, Nt);
            return new h(Pt, gt, kt - Pt, H - gt)
        },
        ht = function(L, I, U, Z, Q, ut, dt, ft) {
            var yt, Nt, Pt, kt, gt, H, ue, ne, Ht, At, Tt, _t, ie, zt, de = U - L,
                $t = Z - I,
                Qt = Q - U,
                we = ut - Z,
                ae = dt - Q,
                Et = ft - ut;
            for (Nt = 0; Nt < 41; Nt++) Ht = (ue = (Pt = L + (yt = Nt / 40) * de) + yt * ((gt = U + yt * Qt) - Pt)) + yt * (gt + yt * (Q + yt * ae - gt) - ue), At = (ne = (kt = I + yt * $t) + yt * ((H = Z + yt * we) - kt)) + yt * (H + yt * (ut + yt * Et - H) - ne), Nt == 0 ? (Tt = Ht, _t = At, ie = Ht, zt = At) : (Tt = Math.min(Tt, Ht), _t = Math.min(_t, At), ie = Math.max(ie, Ht), zt = Math.max(zt, At));
            return new h(Math.round(Tt), Math.round(_t), Math.round(ie - Tt), Math.round(zt - _t))
        },
        ct = function() {
            if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
                var L, I, U = (L = this.ctx.lineDash, I = this.ctx.lineDashOffset, JSON.stringify({
                    lineDash: L,
                    lineDashOffset: I
                }));
                this.prevLineDash !== U && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = U)
            }
        }
})(Mt.API), (function(n) {
    var e = function(f) {
            var h, c, g, w, m, C, d, B, A, N;
            for (/[^\x00-\xFF]/.test(f), c = [], g = 0, w = (f += h = "\0\0\0\0".slice(f.length % 4 || 4)).length; w > g; g += 4)(m = (f.charCodeAt(g) << 24) + (f.charCodeAt(g + 1) << 16) + (f.charCodeAt(g + 2) << 8) + f.charCodeAt(g + 3)) !== 0 ? (C = (m = ((m = ((m = ((m = (m - (N = m % 85)) / 85) - (A = m % 85)) / 85) - (B = m % 85)) / 85) - (d = m % 85)) / 85) % 85, c.push(C + 33, d + 33, B + 33, A + 33, N + 33)) : c.push(122);
            return (function(v, R) {
                for (var z = R; z > 0; z--) v.pop()
            })(c, h.length), String.fromCharCode.apply(String, c) + "~>"
        },
        i = function(f) {
            var h, c, g, w, m, C = String,
                d = "length",
                B = 255,
                A = "charCodeAt",
                N = "slice",
                v = "replace";
            for (f[N](-2), f = f[N](0, -2)[v](/\s/g, "")[v]("z", "!!!!!"), g = [], w = 0, m = (f += h = "uuuuu" [N](f[d] % 5 || 5))[d]; m > w; w += 5) c = 52200625 * (f[A](w) - 33) + 614125 * (f[A](w + 1) - 33) + 7225 * (f[A](w + 2) - 33) + 85 * (f[A](w + 3) - 33) + (f[A](w + 4) - 33), g.push(B & c >> 24, B & c >> 16, B & c >> 8, B & c);
            return (function(R, z) {
                for (var D = z; D > 0; D--) R.pop()
            })(g, h[d]), C.fromCharCode.apply(C, g)
        },
        a = function(f) {
            return f.split("").map(function(h) {
                return ("0" + h.charCodeAt().toString(16)).slice(-2)
            }).join("") + ">"
        },
        s = function(f) {
            var h = new RegExp(/^([0-9A-Fa-f]{2})+$/);
            if ((f = f.replace(/\s/g, "")).indexOf(">") !== -1 && (f = f.substr(0, f.indexOf(">"))), f.length % 2 && (f += "0"), h.test(f) === !1) return "";
            for (var c = "", g = 0; g < f.length; g += 2) c += String.fromCharCode("0x" + (f[g] + f[g + 1]));
            return c
        },
        o = function(f) {
            for (var h = new Uint8Array(f.length), c = f.length; c--;) h[c] = f.charCodeAt(c);
            return (h = Do(h)).reduce(function(g, w) {
                return g + String.fromCharCode(w)
            }, "")
        };
    n.processDataByFilters = function(f, h) {
        var c = 0,
            g = f || "",
            w = [];
        for (typeof(h = h || []) == "string" && (h = [h]), c = 0; c < h.length; c += 1) switch (h[c]) {
            case "ASCII85Decode":
            case "/ASCII85Decode":
                g = i(g), w.push("/ASCII85Encode");
                break;
            case "ASCII85Encode":
            case "/ASCII85Encode":
                g = e(g), w.push("/ASCII85Decode");
                break;
            case "ASCIIHexDecode":
            case "/ASCIIHexDecode":
                g = s(g), w.push("/ASCIIHexEncode");
                break;
            case "ASCIIHexEncode":
            case "/ASCIIHexEncode":
                g = a(g), w.push("/ASCIIHexDecode");
                break;
            case "FlateEncode":
            case "/FlateEncode":
                g = o(g), w.push("/FlateDecode");
                break;
            default:
                throw new Error('The filter: "' + h[c] + '" is not implemented')
        }
        return {
            data: g,
            reverseChain: w.reverse().join(" ")
        }
    }
})(Mt.API), (function(n) {
    n.loadFile = function(e, i, a) {
        return (function(s, o, f) {
            o = o !== !1, f = typeof f == "function" ? f : function() {};
            var h = void 0;
            try {
                h = (function(c, g, w) {
                    var m = new XMLHttpRequest,
                        C = 0,
                        d = function(B) {
                            var A = B.length,
                                N = [],
                                v = String.fromCharCode;
                            for (C = 0; C < A; C += 1) N.push(v(255 & B.charCodeAt(C)));
                            return N.join("")
                        };
                    if (m.open("GET", c, !g), m.overrideMimeType("text/plain; charset=x-user-defined"), g === !1 && (m.onload = function() {
                            m.status === 200 ? w(d(this.responseText)) : w(void 0)
                        }), m.send(null), g && m.status === 200) return d(m.responseText)
                })(s, o, f)
            } catch {}
            return h
        })(e, i, a)
    }, n.loadImageFile = n.loadFile
})(Mt.API), (function(n) {
    function e() {
        return (Gt.html2canvas ? Promise.resolve(Gt.html2canvas) : import ("html2canvas")).catch(function(h) {
            return Promise.reject(new Error("Could not load html2canvas: " + h))
        }).then(function(h) {
            return h.default ? h.default : h
        })
    }

    function i() {
        return (Gt.DOMPurify ? Promise.resolve(Gt.DOMPurify) : import ("dompurify")).catch(function(h) {
            return Promise.reject(new Error("Could not load dompurify: " + h))
        }).then(function(h) {
            return h.default ? h.default : h
        })
    }
    var a = function(h) {
            var c = Se(h);
            return c === "undefined" ? "undefined" : c === "string" || h instanceof String ? "string" : c === "number" || h instanceof Number ? "number" : c === "function" || h instanceof Function ? "function" : h && h.constructor === Array ? "array" : h && h.nodeType === 1 ? "element" : c === "object" ? "object" : "unknown"
        },
        s = function(h, c) {
            var g = document.createElement(h);
            for (var w in c.className && (g.className = c.className), c.innerHTML && c.dompurify && (g.innerHTML = c.dompurify.sanitize(c.innerHTML)), c.style) g.style[w] = c.style[w];
            return g
        },
        o = function h(c, g) {
            for (var w = c.nodeType === 3 ? document.createTextNode(c.nodeValue) : c.cloneNode(!1), m = c.firstChild; m; m = m.nextSibling) g !== !0 && m.nodeType === 1 && m.nodeName === "SCRIPT" || w.appendChild(h(m, g));
            return c.nodeType === 1 && (c.nodeName === "CANVAS" ? (w.width = c.width, w.height = c.height, w.getContext("2d").drawImage(c, 0, 0)) : c.nodeName !== "TEXTAREA" && c.nodeName !== "SELECT" || (w.value = c.value), w.addEventListener("load", function() {
                w.scrollTop = c.scrollTop, w.scrollLeft = c.scrollLeft
            }, !0)), w
        },
        f = function h(c) {
            var g = Object.assign(h.convert(Promise.resolve()), JSON.parse(JSON.stringify(h.template))),
                w = h.convert(Promise.resolve(), g);
            return (w = w.setProgress(1, h, 1, [h])).set(c)
        };
    (f.prototype = Object.create(Promise.prototype)).constructor = f, f.convert = function(h, c) {
        return h.__proto__ = c || f.prototype, h
    }, f.template = {
        prop: {
            src: null,
            container: null,
            overlay: null,
            canvas: null,
            img: null,
            pdf: null,
            pageSize: null,
            callback: function() {}
        },
        progress: {
            val: 0,
            state: null,
            n: 0,
            stack: []
        },
        opt: {
            filename: "file.pdf",
            margin: [0, 0, 0, 0],
            enableLinks: !0,
            x: 0,
            y: 0,
            html2canvas: {},
            jsPDF: {},
            backgroundColor: "transparent"
        }
    }, f.prototype.from = function(h, c) {
        return this.then(function() {
            switch (c = c || (function(g) {
                switch (a(g)) {
                    case "string":
                        return "string";
                    case "element":
                        return g.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
                    default:
                        return "unknown"
                }
            })(h), c) {
                case "string":
                    return this.then(i).then(function(g) {
                        return this.set({
                            src: s("div", {
                                innerHTML: h,
                                dompurify: g
                            })
                        })
                    });
                case "element":
                    return this.set({
                        src: h
                    });
                case "canvas":
                    return this.set({
                        canvas: h
                    });
                case "img":
                    return this.set({
                        img: h
                    });
                default:
                    return this.error("Unknown source type.")
            }
        })
    }, f.prototype.to = function(h) {
        switch (h) {
            case "container":
                return this.toContainer();
            case "canvas":
                return this.toCanvas();
            case "img":
                return this.toImg();
            case "pdf":
                return this.toPdf();
            default:
                return this.error("Invalid target.")
        }
    }, f.prototype.toContainer = function() {
        return this.thenList([function() {
            return this.prop.src || this.error("Cannot duplicate - no source HTML.")
        }, function() {
            return this.prop.pageSize || this.setPageSize()
        }]).then(function() {
            var h = {
                    position: "relative",
                    display: "inline-block",
                    width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
                    left: 0,
                    right: 0,
                    top: 0,
                    margin: "auto",
                    backgroundColor: this.opt.backgroundColor
                },
                c = o(this.prop.src, this.opt.html2canvas.javascriptEnabled);
            c.tagName === "BODY" && (h.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = s("div", {
                className: "html2pdf__overlay",
                style: {
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 1e3,
                    left: "-100000px",
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            }), this.prop.container = s("div", {
                className: "html2pdf__container",
                style: h
            }), this.prop.container.appendChild(c), this.prop.container.firstChild.appendChild(s("div", {
                style: {
                    clear: "both",
                    border: "0 none transparent",
                    margin: 0,
                    padding: 0,
                    height: 0
                }
            })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
        })
    }, f.prototype.toCanvas = function() {
        var h = [function() {
            return document.body.contains(this.prop.container) || this.toContainer()
        }];
        return this.thenList(h).then(e).then(function(c) {
            var g = Object.assign({}, this.opt.html2canvas);
            return delete g.onrendered, c(this.prop.container, g)
        }).then(function(c) {
            (this.opt.html2canvas.onrendered || function() {})(c), this.prop.canvas = c, document.body.removeChild(this.prop.overlay)
        })
    }, f.prototype.toContext2d = function() {
        var h = [function() {
            return document.body.contains(this.prop.container) || this.toContainer()
        }];
        return this.thenList(h).then(e).then(function(c) {
            var g = this.opt.jsPDF,
                w = this.opt.fontFaces,
                m = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth,
                C = Object.assign({
                    async: !0,
                    allowTaint: !0,
                    scale: m,
                    scrollX: this.opt.scrollX || 0,
                    scrollY: this.opt.scrollY || 0,
                    backgroundColor: "#ffffff",
                    imageTimeout: 15e3,
                    logging: !0,
                    proxy: null,
                    removeContainer: !0,
                    foreignObjectRendering: !1,
                    useCORS: !1
                }, this.opt.html2canvas);
            if (delete C.onrendered, g.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, g.context2d.posX = this.opt.x, g.context2d.posY = this.opt.y, g.context2d.margin = this.opt.margin, g.context2d.fontFaces = w, w)
                for (var d = 0; d < w.length; ++d) {
                    var B = w[d],
                        A = B.src.find(function(N) {
                            return N.format === "truetype"
                        });
                    A && g.addFont(A.url, B.ref.name, B.ref.style)
                }
            return C.windowHeight = C.windowHeight || 0, C.windowHeight = C.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : C.windowHeight, g.context2d.save(!0), c(this.prop.container, C)
        }).then(function(c) {
            this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {})(c), this.prop.canvas = c, document.body.removeChild(this.prop.overlay)
        })
    }, f.prototype.toImg = function() {
        return this.thenList([function() {
            return this.prop.canvas || this.toCanvas()
        }]).then(function() {
            var h = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
            this.prop.img = document.createElement("img"), this.prop.img.src = h
        })
    }, f.prototype.toPdf = function() {
        return this.thenList([function() {
            return this.toContext2d()
        }]).then(function() {
            this.prop.pdf = this.prop.pdf || this.opt.jsPDF
        })
    }, f.prototype.output = function(h, c, g) {
        return (g = g || "pdf").toLowerCase() === "img" || g.toLowerCase() === "image" ? this.outputImg(h, c) : this.outputPdf(h, c)
    }, f.prototype.outputPdf = function(h, c) {
        return this.thenList([function() {
            return this.prop.pdf || this.toPdf()
        }]).then(function() {
            return this.prop.pdf.output(h, c)
        })
    }, f.prototype.outputImg = function(h) {
        return this.thenList([function() {
            return this.prop.img || this.toImg()
        }]).then(function() {
            switch (h) {
                case void 0:
                case "img":
                    return this.prop.img;
                case "datauristring":
                case "dataurlstring":
                    return this.prop.img.src;
                case "datauri":
                case "dataurl":
                    return document.location.href = this.prop.img.src;
                default:
                    throw 'Image output type "' + h + '" is not supported.'
            }
        })
    }, f.prototype.save = function(h) {
        return this.thenList([function() {
            return this.prop.pdf || this.toPdf()
        }]).set(h ? {
            filename: h
        } : null).then(function() {
            this.prop.pdf.save(this.opt.filename)
        })
    }, f.prototype.doCallback = function() {
        return this.thenList([function() {
            return this.prop.pdf || this.toPdf()
        }]).then(function() {
            this.prop.callback(this.prop.pdf)
        })
    }, f.prototype.set = function(h) {
        if (a(h) !== "object") return this;
        var c = Object.keys(h || {}).map(function(g) {
            if (g in f.template.prop) return function() {
                this.prop[g] = h[g]
            };
            switch (g) {
                case "margin":
                    return this.setMargin.bind(this, h.margin);
                case "jsPDF":
                    return function() {
                        return this.opt.jsPDF = h.jsPDF, this.setPageSize()
                    };
                case "pageSize":
                    return this.setPageSize.bind(this, h.pageSize);
                default:
                    return function() {
                        this.opt[g] = h[g]
                    }
            }
        }, this);
        return this.then(function() {
            return this.thenList(c)
        })
    }, f.prototype.get = function(h, c) {
        return this.then(function() {
            var g = h in f.template.prop ? this.prop[h] : this.opt[h];
            return c ? c(g) : g
        })
    }, f.prototype.setMargin = function(h) {
        return this.then(function() {
            switch (a(h)) {
                case "number":
                    h = [h, h, h, h];
                case "array":
                    if (h.length === 2 && (h = [h[0], h[1], h[0], h[1]]), h.length === 4) break;
                default:
                    return this.error("Invalid margin array.")
            }
            this.opt.margin = h
        }).then(this.setPageSize)
    }, f.prototype.setPageSize = function(h) {
        function c(g, w) {
            return Math.floor(g * w / 72 * 96)
        }
        return this.then(function() {
            (h = h || Mt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (h.inner = {
                width: h.width - this.opt.margin[1] - this.opt.margin[3],
                height: h.height - this.opt.margin[0] - this.opt.margin[2]
            }, h.inner.px = {
                width: c(h.inner.width, h.k),
                height: c(h.inner.height, h.k)
            }, h.inner.ratio = h.inner.height / h.inner.width), this.prop.pageSize = h
        })
    }, f.prototype.setProgress = function(h, c, g, w) {
        return h != null && (this.progress.val = h), c != null && (this.progress.state = c), g != null && (this.progress.n = g), w != null && (this.progress.stack = w), this.progress.ratio = this.progress.val / this.progress.state, this
    }, f.prototype.updateProgress = function(h, c, g, w) {
        return this.setProgress(h ? this.progress.val + h : null, c || null, g ? this.progress.n + g : null, w ? this.progress.stack.concat(w) : null)
    }, f.prototype.then = function(h, c) {
        var g = this;
        return this.thenCore(h, c, function(w, m) {
            return g.updateProgress(null, null, 1, [w]), Promise.prototype.then.call(this, function(C) {
                return g.updateProgress(null, w), C
            }).then(w, m).then(function(C) {
                return g.updateProgress(1), C
            })
        })
    }, f.prototype.thenCore = function(h, c, g) {
        g = g || Promise.prototype.then;
        var w = this;
        h && (h = h.bind(w)), c && (c = c.bind(w));
        var m = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? w : f.convert(Object.assign({}, w), Promise.prototype),
            C = g.call(m, h, c);
        return f.convert(C, w.__proto__)
    }, f.prototype.thenExternal = function(h, c) {
        return Promise.prototype.then.call(this, h, c)
    }, f.prototype.thenList = function(h) {
        var c = this;
        return h.forEach(function(g) {
            c = c.thenCore(g)
        }), c
    }, f.prototype.catch = function(h) {
        h && (h = h.bind(this));
        var c = Promise.prototype.catch.call(this, h);
        return f.convert(c, this)
    }, f.prototype.catchExternal = function(h) {
        return Promise.prototype.catch.call(this, h)
    }, f.prototype.error = function(h) {
        return this.then(function() {
            throw new Error(h)
        })
    }, f.prototype.using = f.prototype.set, f.prototype.saveAs = f.prototype.save, f.prototype.export = f.prototype.output, f.prototype.run = f.prototype.then, Mt.getPageSize = function(h, c, g) {
        if (Se(h) === "object") {
            var w = h;
            h = w.orientation, c = w.unit || c, g = w.format || g
        }
        c = c || "mm", g = g || "a4", h = ("" + (h || "P")).toLowerCase();
        var m, C = ("" + g).toLowerCase(),
            d = {
                a0: [2383.94, 3370.39],
                a1: [1683.78, 2383.94],
                a2: [1190.55, 1683.78],
                a3: [841.89, 1190.55],
                a4: [595.28, 841.89],
                a5: [419.53, 595.28],
                a6: [297.64, 419.53],
                a7: [209.76, 297.64],
                a8: [147.4, 209.76],
                a9: [104.88, 147.4],
                a10: [73.7, 104.88],
                b0: [2834.65, 4008.19],
                b1: [2004.09, 2834.65],
                b2: [1417.32, 2004.09],
                b3: [1000.63, 1417.32],
                b4: [708.66, 1000.63],
                b5: [498.9, 708.66],
                b6: [354.33, 498.9],
                b7: [249.45, 354.33],
                b8: [175.75, 249.45],
                b9: [124.72, 175.75],
                b10: [87.87, 124.72],
                c0: [2599.37, 3676.54],
                c1: [1836.85, 2599.37],
                c2: [1298.27, 1836.85],
                c3: [918.43, 1298.27],
                c4: [649.13, 918.43],
                c5: [459.21, 649.13],
                c6: [323.15, 459.21],
                c7: [229.61, 323.15],
                c8: [161.57, 229.61],
                c9: [113.39, 161.57],
                c10: [79.37, 113.39],
                dl: [311.81, 623.62],
                letter: [612, 792],
                "government-letter": [576, 756],
                legal: [612, 1008],
                "junior-legal": [576, 360],
                ledger: [1224, 792],
                tabloid: [792, 1224],
                "credit-card": [153, 243]
            };
        switch (c) {
            case "pt":
                m = 1;
                break;
            case "mm":
                m = 72 / 25.4;
                break;
            case "cm":
                m = 72 / 2.54;
                break;
            case "in":
                m = 72;
                break;
            case "px":
                m = .75;
                break;
            case "pc":
            case "em":
                m = 12;
                break;
            case "ex":
                m = 6;
                break;
            default:
                throw "Invalid unit: " + c
        }
        var B, A = 0,
            N = 0;
        if (d.hasOwnProperty(C)) A = d[C][1] / m, N = d[C][0] / m;
        else try {
            A = g[1], N = g[0]
        } catch {
            throw new Error("Invalid format: " + g)
        }
        if (h === "p" || h === "portrait") h = "p", N > A && (B = N, N = A, A = B);
        else {
            if (h !== "l" && h !== "landscape") throw "Invalid orientation: " + h;
            h = "l", A > N && (B = N, N = A, A = B)
        }
        return {
            width: N,
            height: A,
            unit: c,
            k: m,
            orientation: h
        }
    }, n.html = function(h, c) {
        (c = c || {}).callback = c.callback || function() {}, c.html2canvas = c.html2canvas || {}, c.html2canvas.canvas = c.html2canvas.canvas || this.canvas, c.jsPDF = c.jsPDF || this, c.fontFaces = c.fontFaces ? c.fontFaces.map(Go) : null;
        var g = new f(c);
        return c.worker ? g : g.from(h).doCallback()
    }
})(Mt.API), Mt.API.addJS = function(n) {
    return ru = n, this.internal.events.subscribe("postPutResources", function() {
        eo = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (eo + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), eu = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + ru + ")"), this.internal.out(">>"), this.internal.out("endobj")
    }), this.internal.events.subscribe("putCatalog", function() {
        eo !== void 0 && eu !== void 0 && this.internal.out("/Names <</JavaScript " + eo + " 0 R>>")
    }), this
}, (function(n) {
    var e;
    n.events.push(["postPutResources", function() {
        var i = this,
            a = /^(\d+) 0 obj$/;
        if (this.outline.root.children.length > 0)
            for (var s = i.outline.render().split(/\r\n/), o = 0; o < s.length; o++) {
                var f = s[o],
                    h = a.exec(f);
                if (h != null) {
                    var c = h[1];
                    i.internal.newObjectDeferredBegin(c, !1)
                }
                i.internal.write(f)
            }
        if (this.outline.createNamedDestinations) {
            var g = this.internal.pages.length,
                w = [];
            for (o = 0; o < g; o++) {
                var m = i.internal.newObject();
                w.push(m);
                var C = i.internal.getPageInfo(o + 1);
                i.internal.write("<< /D[" + C.objId + " 0 R /XYZ null null null]>> endobj")
            }
            var d = i.internal.newObject();
            for (i.internal.write("<< /Names [ "), o = 0; o < w.length; o++) i.internal.write("(page_" + (o + 1) + ")" + w[o] + " 0 R");
            i.internal.write(" ] >>", "endobj"), e = i.internal.newObject(), i.internal.write("<< /Dests " + d + " 0 R"), i.internal.write(">>", "endobj")
        }
    }]), n.events.push(["putCatalog", function() {
        var i = this;
        i.outline.root.children.length > 0 && (i.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && i.internal.write("/Names " + e + " 0 R"))
    }]), n.events.push(["initialized", function() {
        var i = this;
        i.outline = {
            createNamedDestinations: !1,
            root: {
                children: []
            }
        }, i.outline.add = function(a, s, o) {
            var f = {
                title: s,
                options: o,
                children: []
            };
            return a == null && (a = this.root), a.children.push(f), f
        }, i.outline.render = function() {
            return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = i, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val
        }, i.outline.genIds_r = function(a) {
            a.id = i.internal.newObjectDeferred();
            for (var s = 0; s < a.children.length; s++) this.genIds_r(a.children[s])
        }, i.outline.renderRoot = function(a) {
            this.objStart(a), this.line("/Type /Outlines"), a.children.length > 0 && (this.line("/First " + this.makeRef(a.children[0])), this.line("/Last " + this.makeRef(a.children[a.children.length - 1]))), this.line("/Count " + this.count_r({
                count: 0
            }, a)), this.objEnd()
        }, i.outline.renderItems = function(a) {
            for (var s = this.ctx.pdf.internal.getVerticalCoordinateString, o = 0; o < a.children.length; o++) {
                var f = a.children[o];
                this.objStart(f), this.line("/Title " + this.makeString(f.title)), this.line("/Parent " + this.makeRef(a)), o > 0 && this.line("/Prev " + this.makeRef(a.children[o - 1])), o < a.children.length - 1 && this.line("/Next " + this.makeRef(a.children[o + 1])), f.children.length > 0 && (this.line("/First " + this.makeRef(f.children[0])), this.line("/Last " + this.makeRef(f.children[f.children.length - 1])));
                var h = this.count = this.count_r({
                    count: 0
                }, f);
                if (h > 0 && this.line("/Count " + h), f.options && f.options.pageNumber) {
                    var c = i.internal.getPageInfo(f.options.pageNumber);
                    this.line("/Dest [" + c.objId + " 0 R /XYZ 0 " + s(0) + " 0]")
                }
                this.objEnd()
            }
            for (var g = 0; g < a.children.length; g++) this.renderItems(a.children[g])
        }, i.outline.line = function(a) {
            this.ctx.val += a + `\r
`
        }, i.outline.makeRef = function(a) {
            return a.id + " 0 R"
        }, i.outline.makeString = function(a) {
            return "(" + i.internal.pdfEscape(a) + ")"
        }, i.outline.objStart = function(a) {
            this.ctx.val += `\r
` + a.id + ` 0 obj\r
<<\r
`
        }, i.outline.objEnd = function() {
            this.ctx.val += `>> \r
endobj\r
`
        }, i.outline.count_r = function(a, s) {
            for (var o = 0; o < s.children.length; o++) a.count++, this.count_r(a, s.children[o]);
            return a.count
        }
    }])
})(Mt.API), (function(n) {
    var e = [192, 193, 194, 195, 196, 197, 198, 199];
    n.processJPEG = function(i, a, s, o, f, h) {
        var c, g = this.decode.DCT_DECODE,
            w = null;
        if (typeof i == "string" || this.__addimage__.isArrayBuffer(i) || this.__addimage__.isArrayBufferView(i)) {
            switch (i = f || i, i = this.__addimage__.isArrayBuffer(i) ? new Uint8Array(i) : i, c = (function(m) {
                for (var C, d = 256 * m.charCodeAt(4) + m.charCodeAt(5), B = m.length, A = {
                        width: 0,
                        height: 0,
                        numcomponents: 1
                    }, N = 4; N < B; N += 2) {
                    if (N += d, e.indexOf(m.charCodeAt(N + 1)) !== -1) {
                        C = 256 * m.charCodeAt(N + 5) + m.charCodeAt(N + 6), A = {
                            width: 256 * m.charCodeAt(N + 7) + m.charCodeAt(N + 8),
                            height: C,
                            numcomponents: m.charCodeAt(N + 9)
                        };
                        break
                    }
                    d = 256 * m.charCodeAt(N + 2) + m.charCodeAt(N + 3)
                }
                return A
            })(i = this.__addimage__.isArrayBufferView(i) ? this.__addimage__.arrayBufferToBinaryString(i) : i), c.numcomponents) {
                case 1:
                    h = this.color_spaces.DEVICE_GRAY;
                    break;
                case 4:
                    h = this.color_spaces.DEVICE_CMYK;
                    break;
                case 3:
                    h = this.color_spaces.DEVICE_RGB
            }
            w = {
                data: i,
                width: c.width,
                height: c.height,
                colorSpace: h,
                bitsPerComponent: 8,
                filter: g,
                index: a,
                alias: s
            }
        }
        return w
    }
})(Mt.API), Mt.API.processPNG = function(n, e, i, a) {
    if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
        var s, o = el(n, {
                checkCrc: !0
            }),
            f = o.width,
            h = o.height,
            c = o.channels,
            g = o.palette,
            w = o.depth;
        s = g && c === 1 ? (function(Y) {
            for (var O = Y.width, at = Y.height, P = Y.data, M = Y.palette, F = Y.depth, _ = !1, J = [], W = [], nt = void 0, X = !1, et = 0, ht = 0; ht < M.length; ht++) {
                var ct = Os(M[ht], 4),
                    L = ct[0],
                    I = ct[1],
                    U = ct[2],
                    Z = ct[3];
                J.push(L, I, U), Z != null && (Z === 0 ? (et++, W.length < 1 && W.push(ht)) : Z < 255 && (X = !0))
            }
            if (X || et > 1) {
                _ = !0, W = void 0;
                var Q = O * at;
                nt = new Uint8Array(Q);
                for (var ut = new DataView(P.buffer), dt = 0; dt < Q; dt++) {
                    var ft = Jo(ut, dt, F),
                        yt = Os(M[ft], 4)[3];
                    nt[dt] = yt
                }
            } else et === 0 && (W = void 0);
            return {
                colorSpace: "Indexed",
                colorsPerPixel: 1,
                sMaskBitsPerComponent: _ ? 8 : void 0,
                colorBytes: P,
                alphaBytes: nt,
                needSMask: _,
                palette: J,
                mask: W
            }
        })(o) : c === 2 || c === 4 ? (function(Y) {
            for (var O = Y.data, at = Y.width, P = Y.height, M = Y.channels, F = Y.depth, _ = M === 2 ? "DeviceGray" : "DeviceRGB", J = M - 1, W = at * P, nt = J, X = W * nt, et = 1 * W, ht = Math.ceil(X * F / 8), ct = Math.ceil(et * F / 8), L = new Uint8Array(ht), I = new Uint8Array(ct), U = new DataView(O.buffer), Z = new DataView(L.buffer), Q = new DataView(I.buffer), ut = !1, dt = 0; dt < W; dt++) {
                for (var ft = dt * M, yt = 0; yt < nt; yt++) cu(Z, Jo(U, ft + yt, F), dt * nt + yt, F);
                var Nt = Jo(U, ft + nt, F);
                Nt < (1 << F) - 1 && (ut = !0), cu(Q, Nt, 1 * dt, F)
            }
            return {
                colorSpace: _,
                colorsPerPixel: J,
                sMaskBitsPerComponent: ut ? F : void 0,
                colorBytes: L,
                alphaBytes: I,
                needSMask: ut
            }
        })(o) : (function(Y) {
            var O = Y.data,
                at = Y.channels === 1 ? "DeviceGray" : "DeviceRGB";
            return {
                colorSpace: at,
                colorsPerPixel: at === "DeviceGray" ? 1 : 3,
                colorBytes: O instanceof Uint16Array ? (function(P) {
                    for (var M = P.length, F = new Uint8Array(2 * M), _ = new DataView(F.buffer, F.byteOffset, F.byteLength), J = 0; J < M; J++) _.setUint16(2 * J, P[J], !1);
                    return F
                })(O) : O,
                needSMask: !1
            }
        })(o);
        var m, C, d, B = s,
            A = B.colorSpace,
            N = B.colorsPerPixel,
            v = B.sMaskBitsPerComponent,
            R = B.colorBytes,
            z = B.alphaBytes,
            D = B.needSMask,
            G = B.palette,
            tt = B.mask,
            st = null;
        return a !== Mt.API.image_compression.NONE && typeof Do == "function" ? (st = (function(Y) {
            var O;
            switch (Y) {
                case Mt.API.image_compression.FAST:
                    O = 11;
                    break;
                case Mt.API.image_compression.MEDIUM:
                    O = 13;
                    break;
                case Mt.API.image_compression.SLOW:
                    O = 14;
                    break;
                default:
                    O = 12
            }
            return O
        })(a), m = this.decode.FLATE_DECODE, C = "/Predictor ".concat(st, " /Colors ").concat(N, " /BitsPerComponent ").concat(w, " /Columns ").concat(f), n = ou(R, Math.ceil(f * N * w / 8), N, w, a), D && (d = ou(z, Math.ceil(f * v / 8), 1, v, a))) : (m = void 0, C = void 0, n = R, D && (d = z)), (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (d && this.__addimage__.isArrayBuffer(d) || this.__addimage__.isArrayBufferView(d)) && (d = this.__addimage__.arrayBufferToBinaryString(d)), {
            alias: i,
            data: n,
            index: e,
            filter: m,
            decodeParameters: C,
            transparency: tt,
            palette: G,
            sMask: d,
            predictor: st,
            width: f,
            height: h,
            bitsPerComponent: w,
            sMaskBitsPerComponent: v,
            colorSpace: A
        }
    }
}, (function(n) {
    n.processGIF89A = function(e, i, a, s) {
        var o = new Al(e),
            f = o.width,
            h = o.height,
            c = [];
        o.decodeAndBlitFrameRGBA(0, c);
        var g = {
                data: c,
                width: f,
                height: h
            },
            w = new Xo(100).encode(g, 100);
        return n.processJPEG.call(this, w, i, a, s)
    }, n.processGIF87A = n.processGIF89A
})(Mt.API), Yr.prototype.parseHeader = function() {
    if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
        var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
        this.palette = new Array(n);
        for (var e = 0; e < n; e++) {
            var i = this.datav.getUint8(this.pos++, !0),
                a = this.datav.getUint8(this.pos++, !0),
                s = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0);
            this.palette[e] = {
                red: s,
                green: a,
                blue: i,
                quad: o
            }
        }
    }
    this.height < 0 && (this.height *= -1, this.bottom_up = !1)
}, Yr.prototype.parseBGR = function() {
    this.pos = this.offset;
    try {
        var n = "bit" + this.bitPP,
            e = this.width * this.height * 4;
        this.data = new Uint8Array(e), this[n]()
    } catch (i) {
        _e.log("bit decode error:" + i)
    }
}, Yr.prototype.bit1 = function() {
    var n, e = Math.ceil(this.width / 8),
        i = e % 4;
    for (n = this.height - 1; n >= 0; n--) {
        for (var a = this.bottom_up ? n : this.height - 1 - n, s = 0; s < e; s++)
            for (var o = this.datav.getUint8(this.pos++, !0), f = a * this.width * 4 + 8 * s * 4, h = 0; h < 8 && 8 * s + h < this.width; h++) {
                var c = this.palette[o >> 7 - h & 1];
                this.data[f + 4 * h] = c.blue, this.data[f + 4 * h + 1] = c.green, this.data[f + 4 * h + 2] = c.red, this.data[f + 4 * h + 3] = 255
            }
        i !== 0 && (this.pos += 4 - i)
    }
}, Yr.prototype.bit4 = function() {
    for (var n = Math.ceil(this.width / 2), e = n % 4, i = this.height - 1; i >= 0; i--) {
        for (var a = this.bottom_up ? i : this.height - 1 - i, s = 0; s < n; s++) {
            var o = this.datav.getUint8(this.pos++, !0),
                f = a * this.width * 4 + 2 * s * 4,
                h = o >> 4,
                c = 15 & o,
                g = this.palette[h];
            if (this.data[f] = g.blue, this.data[f + 1] = g.green, this.data[f + 2] = g.red, this.data[f + 3] = 255, 2 * s + 1 >= this.width) break;
            g = this.palette[c], this.data[f + 4] = g.blue, this.data[f + 4 + 1] = g.green, this.data[f + 4 + 2] = g.red, this.data[f + 4 + 3] = 255
        }
        e !== 0 && (this.pos += 4 - e)
    }
}, Yr.prototype.bit8 = function() {
    for (var n = this.width % 4, e = this.height - 1; e >= 0; e--) {
        for (var i = this.bottom_up ? e : this.height - 1 - e, a = 0; a < this.width; a++) {
            var s = this.datav.getUint8(this.pos++, !0),
                o = i * this.width * 4 + 4 * a;
            if (s < this.palette.length) {
                var f = this.palette[s];
                this.data[o] = f.red, this.data[o + 1] = f.green, this.data[o + 2] = f.blue, this.data[o + 3] = 255
            } else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255
        }
        n !== 0 && (this.pos += 4 - n)
    }
}, Yr.prototype.bit15 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), i = this.height - 1; i >= 0; i--) {
        for (var a = this.bottom_up ? i : this.height - 1 - i, s = 0; s < this.width; s++) {
            var o = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var f = (o & e) / e * 255 | 0,
                h = (o >> 5 & e) / e * 255 | 0,
                c = (o >> 10 & e) / e * 255 | 0,
                g = o >> 15 ? 255 : 0,
                w = a * this.width * 4 + 4 * s;
            this.data[w] = c, this.data[w + 1] = h, this.data[w + 2] = f, this.data[w + 3] = g
        }
        this.pos += n
    }
}, Yr.prototype.bit16 = function() {
    for (var n = this.width % 3, e = parseInt("11111", 2), i = parseInt("111111", 2), a = this.height - 1; a >= 0; a--) {
        for (var s = this.bottom_up ? a : this.height - 1 - a, o = 0; o < this.width; o++) {
            var f = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var h = (f & e) / e * 255 | 0,
                c = (f >> 5 & i) / i * 255 | 0,
                g = (f >> 11) / e * 255 | 0,
                w = s * this.width * 4 + 4 * o;
            this.data[w] = g, this.data[w + 1] = c, this.data[w + 2] = h, this.data[w + 3] = 255
        }
        this.pos += n
    }
}, Yr.prototype.bit24 = function() {
    for (var n = this.height - 1; n >= 0; n--) {
        for (var e = this.bottom_up ? n : this.height - 1 - n, i = 0; i < this.width; i++) {
            var a = this.datav.getUint8(this.pos++, !0),
                s = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0),
                f = e * this.width * 4 + 4 * i;
            this.data[f] = o, this.data[f + 1] = s, this.data[f + 2] = a, this.data[f + 3] = 255
        }
        this.pos += this.width % 4
    }
}, Yr.prototype.bit32 = function() {
    for (var n = this.height - 1; n >= 0; n--)
        for (var e = this.bottom_up ? n : this.height - 1 - n, i = 0; i < this.width; i++) {
            var a = this.datav.getUint8(this.pos++, !0),
                s = this.datav.getUint8(this.pos++, !0),
                o = this.datav.getUint8(this.pos++, !0),
                f = this.datav.getUint8(this.pos++, !0),
                h = e * this.width * 4 + 4 * i;
            this.data[h] = o, this.data[h + 1] = s, this.data[h + 2] = a, this.data[h + 3] = f
        }
}, Yr.prototype.getData = function() {
    return this.data
}, (function(n) {
    n.processBMP = function(e, i, a, s) {
        var o = new Yr(e, !1),
            f = o.width,
            h = o.height,
            c = {
                data: o.getData(),
                width: f,
                height: h
            },
            g = new Xo(100).encode(c, 100);
        return n.processJPEG.call(this, g, i, a, s)
    }
})(Mt.API), pu.prototype.getData = function() {
    return this.data
}, (function(n) {
    n.processWEBP = function(e, i, a, s) {
        var o = new pu(e),
            f = o.width,
            h = o.height,
            c = {
                data: o.getData(),
                width: f,
                height: h
            },
            g = new Xo(100).encode(c, 100);
        return n.processJPEG.call(this, g, i, a, s)
    }
})(Mt.API), Mt.API.processRGBA = function(n, e, i) {
    for (var a = n.data, s = a.length, o = new Uint8Array(s / 4 * 3), f = new Uint8Array(s / 4), h = 0, c = 0, g = 0; g < s; g += 4) {
        var w = a[g],
            m = a[g + 1],
            C = a[g + 2],
            d = a[g + 3];
        o[h++] = w, o[h++] = m, o[h++] = C, f[c++] = d
    }
    var B = this.__addimage__.arrayBufferToBinaryString(o);
    return {
        alpha: this.__addimage__.arrayBufferToBinaryString(f),
        data: B,
        index: e,
        alias: i,
        colorSpace: "DeviceRGB",
        bitsPerComponent: 8,
        width: n.width,
        height: n.height
    }
}, Mt.API.setLanguage = function(n) {
    return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), {
        af: "Afrikaans",
        sq: "Albanian",
        ar: "Arabic (Standard)",
        "ar-DZ": "Arabic (Algeria)",
        "ar-BH": "Arabic (Bahrain)",
        "ar-EG": "Arabic (Egypt)",
        "ar-IQ": "Arabic (Iraq)",
        "ar-JO": "Arabic (Jordan)",
        "ar-KW": "Arabic (Kuwait)",
        "ar-LB": "Arabic (Lebanon)",
        "ar-LY": "Arabic (Libya)",
        "ar-MA": "Arabic (Morocco)",
        "ar-OM": "Arabic (Oman)",
        "ar-QA": "Arabic (Qatar)",
        "ar-SA": "Arabic (Saudi Arabia)",
        "ar-SY": "Arabic (Syria)",
        "ar-TN": "Arabic (Tunisia)",
        "ar-AE": "Arabic (U.A.E.)",
        "ar-YE": "Arabic (Yemen)",
        an: "Aragonese",
        hy: "Armenian",
        as: "Assamese",
        ast: "Asturian",
        az: "Azerbaijani",
        eu: "Basque",
        be: "Belarusian",
        bn: "Bengali",
        bs: "Bosnian",
        br: "Breton",
        bg: "Bulgarian",
        my: "Burmese",
        ca: "Catalan",
        ch: "Chamorro",
        ce: "Chechen",
        zh: "Chinese",
        "zh-HK": "Chinese (Hong Kong)",
        "zh-CN": "Chinese (PRC)",
        "zh-SG": "Chinese (Singapore)",
        "zh-TW": "Chinese (Taiwan)",
        cv: "Chuvash",
        co: "Corsican",
        cr: "Cree",
        hr: "Croatian",
        cs: "Czech",
        da: "Danish",
        nl: "Dutch (Standard)",
        "nl-BE": "Dutch (Belgian)",
        en: "English",
        "en-AU": "English (Australia)",
        "en-BZ": "English (Belize)",
        "en-CA": "English (Canada)",
        "en-IE": "English (Ireland)",
        "en-JM": "English (Jamaica)",
        "en-NZ": "English (New Zealand)",
        "en-PH": "English (Philippines)",
        "en-ZA": "English (South Africa)",
        "en-TT": "English (Trinidad & Tobago)",
        "en-GB": "English (United Kingdom)",
        "en-US": "English (United States)",
        "en-ZW": "English (Zimbabwe)",
        eo: "Esperanto",
        et: "Estonian",
        fo: "Faeroese",
        fj: "Fijian",
        fi: "Finnish",
        fr: "French (Standard)",
        "fr-BE": "French (Belgium)",
        "fr-CA": "French (Canada)",
        "fr-FR": "French (France)",
        "fr-LU": "French (Luxembourg)",
        "fr-MC": "French (Monaco)",
        "fr-CH": "French (Switzerland)",
        fy: "Frisian",
        fur: "Friulian",
        gd: "Gaelic (Scots)",
        "gd-IE": "Gaelic (Irish)",
        gl: "Galacian",
        ka: "Georgian",
        de: "German (Standard)",
        "de-AT": "German (Austria)",
        "de-DE": "German (Germany)",
        "de-LI": "German (Liechtenstein)",
        "de-LU": "German (Luxembourg)",
        "de-CH": "German (Switzerland)",
        el: "Greek",
        gu: "Gujurati",
        ht: "Haitian",
        he: "Hebrew",
        hi: "Hindi",
        hu: "Hungarian",
        is: "Icelandic",
        id: "Indonesian",
        iu: "Inuktitut",
        ga: "Irish",
        it: "Italian (Standard)",
        "it-CH": "Italian (Switzerland)",
        ja: "Japanese",
        kn: "Kannada",
        ks: "Kashmiri",
        kk: "Kazakh",
        km: "Khmer",
        ky: "Kirghiz",
        tlh: "Klingon",
        ko: "Korean",
        "ko-KP": "Korean (North Korea)",
        "ko-KR": "Korean (South Korea)",
        la: "Latin",
        lv: "Latvian",
        lt: "Lithuanian",
        lb: "Luxembourgish",
        mk: "North Macedonia",
        ms: "Malay",
        ml: "Malayalam",
        mt: "Maltese",
        mi: "Maori",
        mr: "Marathi",
        mo: "Moldavian",
        nv: "Navajo",
        ng: "Ndonga",
        ne: "Nepali",
        no: "Norwegian",
        nb: "Norwegian (Bokmal)",
        nn: "Norwegian (Nynorsk)",
        oc: "Occitan",
        or: "Oriya",
        om: "Oromo",
        fa: "Persian",
        "fa-IR": "Persian/Iran",
        pl: "Polish",
        pt: "Portuguese",
        "pt-BR": "Portuguese (Brazil)",
        pa: "Punjabi",
        "pa-IN": "Punjabi (India)",
        "pa-PK": "Punjabi (Pakistan)",
        qu: "Quechua",
        rm: "Rhaeto-Romanic",
        ro: "Romanian",
        "ro-MO": "Romanian (Moldavia)",
        ru: "Russian",
        "ru-MO": "Russian (Moldavia)",
        sz: "Sami (Lappish)",
        sg: "Sango",
        sa: "Sanskrit",
        sc: "Sardinian",
        sd: "Sindhi",
        si: "Singhalese",
        sr: "Serbian",
        sk: "Slovak",
        sl: "Slovenian",
        so: "Somani",
        sb: "Sorbian",
        es: "Spanish",
        "es-AR": "Spanish (Argentina)",
        "es-BO": "Spanish (Bolivia)",
        "es-CL": "Spanish (Chile)",
        "es-CO": "Spanish (Colombia)",
        "es-CR": "Spanish (Costa Rica)",
        "es-DO": "Spanish (Dominican Republic)",
        "es-EC": "Spanish (Ecuador)",
        "es-SV": "Spanish (El Salvador)",
        "es-GT": "Spanish (Guatemala)",
        "es-HN": "Spanish (Honduras)",
        "es-MX": "Spanish (Mexico)",
        "es-NI": "Spanish (Nicaragua)",
        "es-PA": "Spanish (Panama)",
        "es-PY": "Spanish (Paraguay)",
        "es-PE": "Spanish (Peru)",
        "es-PR": "Spanish (Puerto Rico)",
        "es-ES": "Spanish (Spain)",
        "es-UY": "Spanish (Uruguay)",
        "es-VE": "Spanish (Venezuela)",
        sx: "Sutu",
        sw: "Swahili",
        sv: "Swedish",
        "sv-FI": "Swedish (Finland)",
        "sv-SV": "Swedish (Sweden)",
        ta: "Tamil",
        tt: "Tatar",
        te: "Teluga",
        th: "Thai",
        tig: "Tigre",
        ts: "Tsonga",
        tn: "Tswana",
        tr: "Turkish",
        tk: "Turkmen",
        uk: "Ukrainian",
        hsb: "Upper Sorbian",
        ur: "Urdu",
        ve: "Venda",
        vi: "Vietnamese",
        vo: "Volapuk",
        wa: "Walloon",
        cy: "Welsh",
        xh: "Xhosa",
        ji: "Yiddish",
        zu: "Zulu"
    }[n] !== void 0 && (this.internal.languageSettings.languageCode = n, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
        this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")")
    }), this.internal.languageSettings.isSubscribed = !0)), this
}, Mi = Mt.API, ro = Mi.getCharWidthsArray = function(n, e) {
    var i, a, s = (e = e || {}).font || this.internal.getFont(),
        o = e.fontSize || this.internal.getFontSize(),
        f = e.charSpace || this.internal.getCharSpace(),
        h = e.widths ? e.widths : s.metadata.Unicode.widths,
        c = h.fof ? h.fof : 1,
        g = e.kerning ? e.kerning : s.metadata.Unicode.kerning,
        w = g.fof ? g.fof : 1,
        m = e.doKerning !== !1,
        C = 0,
        d = n.length,
        B = 0,
        A = h[0] || c,
        N = [];
    for (i = 0; i < d; i++) a = n.charCodeAt(i), typeof s.metadata.widthOfString == "function" ? N.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(a)) + f * (1e3 / o) || 0) / 1e3) : (C = m && Se(g[a]) === "object" && !isNaN(parseInt(g[a][B], 10)) ? g[a][B] / w : 0, N.push((h[a] || A) / c + C)), B = a;
    return N
}, nu = Mi.getStringUnitWidth = function(n, e) {
    var i = (e = e || {}).fontSize || this.internal.getFontSize(),
        a = e.font || this.internal.getFont(),
        s = e.charSpace || this.internal.getCharSpace();
    return Mi.processArabic && (n = Mi.processArabic(n)), typeof a.metadata.widthOfString == "function" ? a.metadata.widthOfString(n, i, s) / i : ro.apply(this, arguments).reduce(function(o, f) {
        return o + f
    }, 0)
}, iu = function(n, e, i, a) {
    for (var s = [], o = 0, f = n.length, h = 0; o !== f && h + e[o] < i;) h += e[o], o++;
    s.push(n.slice(0, o));
    var c = o;
    for (h = 0; o !== f;) h + e[o] > a && (s.push(n.slice(c, o)), h = 0, c = o), h += e[o], o++;
    return c !== o && s.push(n.slice(c, o)), s
}, au = function(n, e, i) {
    i || (i = {});
    var a, s, o, f, h, c, g, w = [],
        m = [w],
        C = i.textIndent || 0,
        d = 0,
        B = 0,
        A = n.split(" "),
        N = ro.apply(this, [" ", i])[0];
    if (c = i.lineIndent === -1 ? A[0].length + 2 : i.lineIndent || 0) {
        var v = Array(c).join(" "),
            R = [];
        A.map(function(D) {
            (D = D.split(/\s*\n/)).length > 1 ? R = R.concat(D.map(function(G, tt) {
                return (tt && G.length ? `
` : "") + G
            })) : R.push(D[0])
        }), A = R, c = nu.apply(this, [v, i])
    }
    for (o = 0, f = A.length; o < f; o++) {
        var z = 0;
        if (a = A[o], c && a[0] == `
` && (a = a.substr(1), z = 1), C + d + (B = (s = ro.apply(this, [a, i])).reduce(function(D, G) {
                return D + G
            }, 0)) > e || z) {
            if (B > e) {
                for (h = iu.apply(this, [a, s, e - (C + d), e]), w.push(h.shift()), w = [h.pop()]; h.length;) m.push([h.shift()]);
                B = s.slice(a.length - (w[0] ? w[0].length : 0)).reduce(function(D, G) {
                    return D + G
                }, 0)
            } else w = [a];
            m.push(w), C = B + c, d = N
        } else w.push(a), C += d + B, d = N
    }
    return g = c ? function(D, G) {
        return (G ? v : "") + D.join(" ")
    } : function(D) {
        return D.join(" ")
    }, m.map(g)
}, Mi.splitTextToSize = function(n, e, i) {
    var a, s = (i = i || {}).fontSize || this.internal.getFontSize(),
        o = (function(w) {
            if (w.widths && w.kerning) return {
                widths: w.widths,
                kerning: w.kerning
            };
            var m = this.internal.getFont(w.fontName, w.fontStyle),
                C = "Unicode";
            return m.metadata[C] ? {
                widths: m.metadata[C].widths || {
                    0: 1
                },
                kerning: m.metadata[C].kerning || {}
            } : {
                font: m.metadata,
                fontSize: this.internal.getFontSize(),
                charSpace: this.internal.getCharSpace()
            }
        }).call(this, i);
    a = Array.isArray(n) ? n : String(n).split(/\r?\n/);
    var f = 1 * this.internal.scaleFactor * e / s;
    o.textIndent = i.textIndent ? 1 * i.textIndent * this.internal.scaleFactor / s : 0, o.lineIndent = i.lineIndent;
    var h, c, g = [];
    for (h = 0, c = a.length; h < c; h++) g = g.concat(au.apply(this, [a[h], f, o]));
    return g
}, (function(n) {
    n.__fontmetrics__ = n.__fontmetrics__ || {};
    for (var e = "0123456789abcdef", i = "klmnopqrstuvwxyz", a = {}, s = {}, o = 0; o < 16; o++) a[i[o]] = e[o], s[e[o]] = i[o];
    var f = function(C) {
            return "0x" + parseInt(C, 10).toString(16)
        },
        h = n.__fontmetrics__.compress = function(C) {
            var d, B, A, N, v = ["{"];
            for (var R in C) {
                if (d = C[R], isNaN(parseInt(R, 10)) ? B = "'" + R + "'" : (R = parseInt(R, 10), B = (B = f(R).slice(2)).slice(0, -1) + s[B.slice(-1)]), typeof d == "number") d < 0 ? (A = f(d).slice(3), N = "-") : (A = f(d).slice(2), N = ""), A = N + A.slice(0, -1) + s[A.slice(-1)];
                else {
                    if (Se(d) !== "object") throw new Error("Don't know what to do with value type " + Se(d) + ".");
                    A = h(d)
                }
                v.push(B + A)
            }
            return v.push("}"), v.join("")
        },
        c = n.__fontmetrics__.uncompress = function(C) {
            if (typeof C != "string") throw new Error("Invalid argument passed to uncompress.");
            for (var d, B, A, N, v = {}, R = 1, z = v, D = [], G = "", tt = "", st = C.length - 1, Y = 1; Y < st; Y += 1)(N = C[Y]) == "'" ? d ? (A = d.join(""), d = void 0) : d = [] : d ? d.push(N) : N == "{" ? (D.push([z, A]), z = {}, A = void 0) : N == "}" ? ((B = D.pop())[0][B[1]] = z, A = void 0, z = B[0]) : N == "-" ? R = -1 : A === void 0 ? a.hasOwnProperty(N) ? (G += a[N], A = parseInt(G, 16) * R, R = 1, G = "") : G += N : a.hasOwnProperty(N) ? (tt += a[N], z[A] = parseInt(tt, 16) * R, R = 1, A = void 0, tt = "") : tt += N;
            return v
        },
        g = {
            codePages: ["WinAnsiEncoding"],
            WinAnsiEncoding: c("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
        },
        w = {
            Unicode: {
                Courier: g,
                "Courier-Bold": g,
                "Courier-BoldOblique": g,
                "Courier-Oblique": g,
                Helvetica: g,
                "Helvetica-Bold": g,
                "Helvetica-BoldOblique": g,
                "Helvetica-Oblique": g,
                "Times-Roman": g,
                "Times-Bold": g,
                "Times-BoldItalic": g,
                "Times-Italic": g
            }
        },
        m = {
            Unicode: {
                "Courier-Oblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-BoldItalic": c("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
                "Helvetica-Bold": c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                Courier: c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-BoldOblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Bold": c("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
                Symbol: c("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
                Helvetica: c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
                "Helvetica-BoldOblique": c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                ZapfDingbats: c("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-Bold": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Italic": c("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
                "Times-Roman": c("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
                "Helvetica-Oblique": c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
            }
        };
    n.events.push(["addFont", function(C) {
        var d = C.font,
            B = m.Unicode[d.postScriptName];
        B && (d.metadata.Unicode = {}, d.metadata.Unicode.widths = B.widths, d.metadata.Unicode.kerning = B.kerning);
        var A = w.Unicode[d.postScriptName];
        A && (d.metadata.Unicode.encoding = A, d.encoding = A.codePages[0])
    }])
})(Mt.API), (function(n) {
    var e = function(i) {
        for (var a = i.length, s = new Uint8Array(a), o = 0; o < a; o++) s[o] = i.charCodeAt(o);
        return s
    };
    n.API.events.push(["addFont", function(i) {
        var a = void 0,
            s = i.font,
            o = i.instance;
        if (!s.isStandardFont) {
            if (o === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
            if (typeof(a = o.existsFileInVFS(s.postScriptName) === !1 ? o.loadFile(s.postScriptName) : o.getFileFromVFS(s.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
            (function(f, h) {
                h = /^\x00\x01\x00\x00/.test(h) ? e(h) : e(Za(h)), f.metadata = n.API.TTFFont.open(h), f.metadata.Unicode = f.metadata.Unicode || {
                    encoding: {},
                    kerning: {},
                    widths: []
                }, f.metadata.glyIdsUsed = [0]
            })(s, a)
        }
    }])
})(Mt), Mt.API.addSvgAsImage = function(n, e, i, a, s, o, f, h) {
    if (isNaN(e) || isNaN(i)) throw _e.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
    if (isNaN(a) || isNaN(s)) throw _e.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
    var c = document.createElement("canvas");
    c.width = a, c.height = s;
    var g = c.getContext("2d");
    g.fillStyle = "#fff", g.fillRect(0, 0, c.width, c.height);
    var w = {
            ignoreMouse: !0,
            ignoreAnimation: !0,
            ignoreDimensions: !0
        },
        m = this;
    return (Gt.canvg ? Promise.resolve(Gt.canvg) : import ("canvg")).catch(function(C) {
        return Promise.reject(new Error("Could not load canvg: " + C))
    }).then(function(C) {
        return C.default ? C.default : C
    }).then(function(C) {
        return C.fromString(g, n, w)
    }, function() {
        return Promise.reject(new Error("Could not load canvg."))
    }).then(function(C) {
        return C.render(w)
    }).then(function() {
        m.addImage(c.toDataURL("image/jpeg", 1), e, i, a, s, f, h)
    })
}, Mt.API.putTotalPages = function(n) {
    var e, i = 0;
    parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(n, "g"), i = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), i = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
    for (var a = 1; a <= this.internal.getNumberOfPages(); a++)
        for (var s = 0; s < this.internal.pages[a].length; s++) this.internal.pages[a][s] = this.internal.pages[a][s].replace(e, i);
    return this
}, Mt.API.viewerPreferences = function(n, e) {
    var i;
    n = n || {}, e = e || !1;
    var a, s, o, f = {
            HideToolbar: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            HideMenubar: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            HideWindowUI: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            FitWindow: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            CenterWindow: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.3
            },
            DisplayDocTitle: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.4
            },
            NonFullScreenPageMode: {
                defaultValue: "UseNone",
                value: "UseNone",
                type: "name",
                explicitSet: !1,
                valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
                pdfVersion: 1.3
            },
            Direction: {
                defaultValue: "L2R",
                value: "L2R",
                type: "name",
                explicitSet: !1,
                valueSet: ["L2R", "R2L"],
                pdfVersion: 1.3
            },
            ViewArea: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
            },
            ViewClip: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
            },
            PrintArea: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
            },
            PrintClip: {
                defaultValue: "CropBox",
                value: "CropBox",
                type: "name",
                explicitSet: !1,
                valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
                pdfVersion: 1.4
            },
            PrintScaling: {
                defaultValue: "AppDefault",
                value: "AppDefault",
                type: "name",
                explicitSet: !1,
                valueSet: ["AppDefault", "None"],
                pdfVersion: 1.6
            },
            Duplex: {
                defaultValue: "",
                value: "none",
                type: "name",
                explicitSet: !1,
                valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
                pdfVersion: 1.7
            },
            PickTrayByPDFSize: {
                defaultValue: !1,
                value: !1,
                type: "boolean",
                explicitSet: !1,
                valueSet: [!0, !1],
                pdfVersion: 1.7
            },
            PrintPageRange: {
                defaultValue: "",
                value: "",
                type: "array",
                explicitSet: !1,
                valueSet: null,
                pdfVersion: 1.7
            },
            NumCopies: {
                defaultValue: 1,
                value: 1,
                type: "integer",
                explicitSet: !1,
                valueSet: null,
                pdfVersion: 1.7
            }
        },
        h = Object.keys(f),
        c = [],
        g = 0,
        w = 0,
        m = 0;

    function C(B, A) {
        var N, v = !1;
        for (N = 0; N < B.length; N += 1) B[N] === A && (v = !0);
        return v
    }
    if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(f)), this.internal.viewerpreferences.isSubscribed = !1), i = this.internal.viewerpreferences.configuration, n === "reset" || e === !0) {
        var d = h.length;
        for (m = 0; m < d; m += 1) i[h[m]].value = i[h[m]].defaultValue, i[h[m]].explicitSet = !1
    }
    if (Se(n) === "object") {
        for (s in n)
            if (o = n[s], C(h, s) && o !== void 0) {
                if (i[s].type === "boolean" && typeof o == "boolean") i[s].value = o;
                else if (i[s].type === "name" && C(i[s].valueSet, o)) i[s].value = o;
                else if (i[s].type === "integer" && Number.isInteger(o)) i[s].value = o;
                else if (i[s].type === "array") {
                    for (g = 0; g < o.length; g += 1)
                        if (a = !0, o[g].length === 1 && typeof o[g][0] == "number") c.push(String(o[g] - 1));
                        else if (o[g].length > 1) {
                        for (w = 0; w < o[g].length; w += 1) typeof o[g][w] != "number" && (a = !1);
                        a === !0 && c.push([o[g][0] - 1, o[g][1] - 1].join(" "))
                    }
                    i[s].value = "[" + c.join(" ") + "]"
                } else i[s].value = i[s].defaultValue;
                i[s].explicitSet = !0
            }
    }
    return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
        var B, A = [];
        for (B in i) i[B].explicitSet === !0 && (i[B].type === "name" ? A.push("/" + B + " /" + i[B].value) : A.push("/" + B + " " + i[B].value));
        A.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + A.join(`
`) + `
>>`)
    }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = i, this
}, (function(n) {
    var e = function() {
            var a = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>',
                s = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
                o = unescape(encodeURIComponent(a)),
                f = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
                h = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
                c = unescape(encodeURIComponent("</x:xmpmeta>")),
                g = o.length + f.length + h.length + s.length + c.length;
            this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + g + " >>"), this.internal.write("stream"), this.internal.write(s + o + f + h + c), this.internal.write("endstream"), this.internal.write("endobj")
        },
        i = function() {
            this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R")
        };
    n.addMetadata = function(a, s) {
        return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
            metadata: a,
            namespaceuri: s || "http://jspdf.default.namespaceuri/"
        }, this.internal.events.subscribe("putCatalog", i), this.internal.events.subscribe("postPutResources", e)), this
    }
})(Mt.API), (function(n) {
    var e = n.API,
        i = e.pdfEscape16 = function(o, f) {
            for (var h, c = f.metadata.Unicode.widths, g = ["", "0", "00", "000", "0000"], w = [""], m = 0, C = o.length; m < C; ++m) {
                if (h = f.metadata.characterToGlyph(o.charCodeAt(m)), f.metadata.glyIdsUsed.push(h), f.metadata.toUnicode[h] = o.charCodeAt(m), c.indexOf(h) == -1 && (c.push(h), c.push([parseInt(f.metadata.widthOfGlyph(h), 10)])), h == "0") return w.join("");
                h = h.toString(16), w.push(g[4 - h.length], h)
            }
            return w.join("")
        },
        a = function(o) {
            var f, h, c, g, w, m, C;
            for (w = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, c = [], m = 0, C = (h = Object.keys(o).sort(function(d, B) {
                    return d - B
                })).length; m < C; m++) f = h[m], c.length >= 100 && (w += `
` + c.length + ` beginbfchar
` + c.join(`
`) + `
endbfchar`, c = []), o[f] !== void 0 && o[f] !== null && typeof o[f].toString == "function" && (g = ("0000" + o[f].toString(16)).slice(-4), f = ("0000" + (+f).toString(16)).slice(-4), c.push("<" + f + "><" + g + ">"));
            return c.length && (w += `
` + c.length + ` beginbfchar
` + c.join(`
`) + `
endbfchar
`), w + `endcmap
CMapName currentdict /CMap defineresource pop
end
end`
        };
    e.events.push(["putFont", function(o) {
        (function(f) {
            var h = f.font,
                c = f.out,
                g = f.newObject,
                w = f.putStream;
            if (h.metadata instanceof n.API.TTFFont && h.encoding === "Identity-H") {
                for (var m = h.metadata.Unicode.widths, C = h.metadata.subset.encode(h.metadata.glyIdsUsed, 1), d = "", B = 0; B < C.length; B++) d += String.fromCharCode(C[B]);
                var A = g();
                w({
                    data: d,
                    addLength1: !0,
                    objectId: A
                }), c("endobj");
                var N = g();
                w({
                    data: a(h.metadata.toUnicode),
                    addLength1: !0,
                    objectId: N
                }), c("endobj");
                var v = g();
                c("<<"), c("/Type /FontDescriptor"), c("/FontName /" + Bi(h.fontName)), c("/FontFile2 " + A + " 0 R"), c("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), c("/Flags " + h.metadata.flags), c("/StemV " + h.metadata.stemV), c("/ItalicAngle " + h.metadata.italicAngle), c("/Ascent " + h.metadata.ascender), c("/Descent " + h.metadata.decender), c("/CapHeight " + h.metadata.capHeight), c(">>"), c("endobj");
                var R = g();
                c("<<"), c("/Type /Font"), c("/BaseFont /" + Bi(h.fontName)), c("/FontDescriptor " + v + " 0 R"), c("/W " + n.API.PDFObject.convert(m)), c("/CIDToGIDMap /Identity"), c("/DW 1000"), c("/Subtype /CIDFontType2"), c("/CIDSystemInfo"), c("<<"), c("/Supplement 0"), c("/Registry (Adobe)"), c("/Ordering (" + h.encoding + ")"), c(">>"), c(">>"), c("endobj"), h.objectNumber = g(), c("<<"), c("/Type /Font"), c("/Subtype /Type0"), c("/ToUnicode " + N + " 0 R"), c("/BaseFont /" + Bi(h.fontName)), c("/Encoding /" + h.encoding), c("/DescendantFonts [" + R + " 0 R]"), c(">>"), c("endobj"), h.isAlreadyPutted = !0
            }
        })(o)
    }]), e.events.push(["putFont", function(o) {
        (function(f) {
            var h = f.font,
                c = f.out,
                g = f.newObject,
                w = f.putStream;
            if (h.metadata instanceof n.API.TTFFont && h.encoding === "WinAnsiEncoding") {
                for (var m = h.metadata.rawData, C = "", d = 0; d < m.length; d++) C += String.fromCharCode(m[d]);
                var B = g();
                w({
                    data: C,
                    addLength1: !0,
                    objectId: B
                }), c("endobj");
                var A = g();
                w({
                    data: a(h.metadata.toUnicode),
                    addLength1: !0,
                    objectId: A
                }), c("endobj");
                var N = g();
                c("<<"), c("/Descent " + h.metadata.decender), c("/CapHeight " + h.metadata.capHeight), c("/StemV " + h.metadata.stemV), c("/Type /FontDescriptor"), c("/FontFile2 " + B + " 0 R"), c("/Flags 96"), c("/FontBBox " + n.API.PDFObject.convert(h.metadata.bbox)), c("/FontName /" + Bi(h.fontName)), c("/ItalicAngle " + h.metadata.italicAngle), c("/Ascent " + h.metadata.ascender), c(">>"), c("endobj"), h.objectNumber = g();
                for (var v = 0; v < h.metadata.hmtx.widths.length; v++) h.metadata.hmtx.widths[v] = parseInt(h.metadata.hmtx.widths[v] * (1e3 / h.metadata.head.unitsPerEm));
                c("<</Subtype/TrueType/Type/Font/ToUnicode " + A + " 0 R/BaseFont/" + Bi(h.fontName) + "/FontDescriptor " + N + " 0 R/Encoding/" + h.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(h.metadata.hmtx.widths) + ">>"), c("endobj"), h.isAlreadyPutted = !0
            }
        })(o)
    }]);
    var s = function(o) {
        var f, h = o.text || "",
            c = o.x,
            g = o.y,
            w = o.options || {},
            m = o.mutex || {},
            C = m.pdfEscape,
            d = m.activeFontKey,
            B = m.fonts,
            A = d,
            N = "",
            v = 0,
            R = "",
            z = B[A].encoding;
        if (B[A].encoding !== "Identity-H") return {
            text: h,
            x: c,
            y: g,
            options: w,
            mutex: m
        };
        for (R = h, A = d, Array.isArray(h) && (R = h[0]), v = 0; v < R.length; v += 1) B[A].metadata.hasOwnProperty("cmap") && (f = B[A].metadata.cmap.unicode.codeMap[R[v].charCodeAt(0)]), f || R[v].charCodeAt(0) < 256 && B[A].metadata.hasOwnProperty("Unicode") ? N += R[v] : N += "";
        var D = "";
        return parseInt(A.slice(1)) < 14 || z === "WinAnsiEncoding" ? D = C(N, A).split("").map(function(G) {
            return G.charCodeAt(0).toString(16)
        }).join("") : z === "Identity-H" && (D = i(N, B[A])), m.isHex = !0, {
            text: D,
            x: c,
            y: g,
            options: w,
            mutex: m
        }
    };
    e.events.push(["postProcessText", function(o) {
        var f = o.text || "",
            h = [],
            c = {
                text: f,
                x: o.x,
                y: o.y,
                options: o.options,
                mutex: o.mutex
            };
        if (Array.isArray(f)) {
            var g = 0;
            for (g = 0; g < f.length; g += 1) Array.isArray(f[g]) && f[g].length === 3 ? h.push([s(Object.assign({}, c, {
                text: f[g][0]
            })).text, f[g][1], f[g][2]]) : h.push(s(Object.assign({}, c, {
                text: f[g]
            })).text);
            o.text = h
        } else o.text = s(Object.assign({}, c, {
            text: f
        })).text
    }])
})(Mt), (function(n) {
    var e = function() {
        return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0
    };
    n.existsFileInVFS = function(i) {
        return e.call(this), this.internal.vFS[i] !== void 0
    }, n.addFileToVFS = function(i, a) {
        return e.call(this), this.internal.vFS[i] = a, this
    }, n.getFileFromVFS = function(i) {
        return e.call(this), this.internal.vFS[i] !== void 0 ? this.internal.vFS[i] : null
    }
})(Mt.API), (function(n) {
    n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(a) {
        var s, o, f, h, c, g, w, m = e,
            C = [
                [0, 3, 0, 1, 0, 0, 0],
                [0, 3, 0, 1, 2, 2, 0],
                [0, 3, 0, 17, 2, 0, 1],
                [0, 3, 5, 5, 4, 1, 0],
                [0, 3, 21, 21, 4, 0, 1],
                [0, 3, 5, 5, 4, 2, 0]
            ],
            d = [
                [2, 0, 1, 1, 0, 1, 0],
                [2, 0, 1, 1, 0, 2, 0],
                [2, 0, 2, 1, 3, 2, 0],
                [2, 0, 2, 33, 3, 1, 1]
            ],
            B = {
                L: 0,
                R: 1,
                EN: 2,
                AN: 3,
                N: 4,
                B: 5,
                S: 6
            },
            A = {
                0: 0,
                5: 1,
                6: 2,
                7: 3,
                32: 4,
                251: 5,
                254: 6,
                255: 7
            },
            N = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "\xAB", "\xBB", "\xAB", "\u2039", "\u203A", "\u2039", "\u2045", "\u2046", "\u2045", "\u207D", "\u207E", "\u207D", "\u208D", "\u208E", "\u208D", "\u2264", "\u2265", "\u2264", "\u2329", "\u232A", "\u2329", "\uFE59", "\uFE5A", "\uFE59", "\uFE5B", "\uFE5C", "\uFE5B", "\uFE5D", "\uFE5E", "\uFE5D", "\uFE64", "\uFE65", "\uFE64"],
            v = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
            R = !1,
            z = 0;
        this.__bidiEngine__ = {};
        var D = function(P) {
                var M = P.charCodeAt(),
                    F = M >> 8,
                    _ = A[F];
                return _ !== void 0 ? m[256 * _ + (255 & M)] : F === 252 || F === 253 ? "AL" : v.test(F) ? "L" : F === 8 ? "R" : "N"
            },
            G = function(P) {
                for (var M, F = 0; F < P.length; F++) {
                    if ((M = D(P.charAt(F))) === "L") return !1;
                    if (M === "R") return !0
                }
                return !1
            },
            tt = function(P, M, F, _) {
                var J, W, nt, X, et = M[_];
                switch (et) {
                    case "L":
                    case "R":
                    case "LRE":
                    case "RLE":
                    case "LRO":
                    case "RLO":
                    case "PDF":
                        R = !1;
                        break;
                    case "N":
                    case "AN":
                        break;
                    case "EN":
                        R && (et = "AN");
                        break;
                    case "AL":
                        R = !0, et = "R";
                        break;
                    case "WS":
                    case "BN":
                        et = "N";
                        break;
                    case "CS":
                        _ < 1 || _ + 1 >= M.length || (J = F[_ - 1]) !== "EN" && J !== "AN" || (W = M[_ + 1]) !== "EN" && W !== "AN" ? et = "N" : R && (W = "AN"), et = W === J ? W : "N";
                        break;
                    case "ES":
                        et = (J = _ > 0 ? F[_ - 1] : "B") === "EN" && _ + 1 < M.length && M[_ + 1] === "EN" ? "EN" : "N";
                        break;
                    case "ET":
                        if (_ > 0 && F[_ - 1] === "EN") {
                            et = "EN";
                            break
                        }
                        if (R) {
                            et = "N";
                            break
                        }
                        for (nt = _ + 1, X = M.length; nt < X && M[nt] === "ET";) nt++;
                        et = nt < X && M[nt] === "EN" ? "EN" : "N";
                        break;
                    case "NSM":
                        if (f && !h) {
                            for (X = M.length, nt = _ + 1; nt < X && M[nt] === "NSM";) nt++;
                            if (nt < X) {
                                var ht = P[_],
                                    ct = ht >= 1425 && ht <= 2303 || ht === 64286;
                                if (J = M[nt], ct && (J === "R" || J === "AL")) {
                                    et = "R";
                                    break
                                }
                            }
                        }
                        et = _ < 1 || (J = M[_ - 1]) === "B" ? "N" : F[_ - 1];
                        break;
                    case "B":
                        R = !1, s = !0, et = z;
                        break;
                    case "S":
                        o = !0, et = "N"
                }
                return et
            },
            st = function(P, M, F) {
                var _ = P.split("");
                return F && Y(_, F, {
                    hiLevel: z
                }), _.reverse(), M && M.reverse(), _.join("")
            },
            Y = function(P, M, F) {
                var _, J, W, nt, X, et = -1,
                    ht = P.length,
                    ct = 0,
                    L = [],
                    I = z ? d : C,
                    U = [];
                for (R = !1, s = !1, o = !1, J = 0; J < ht; J++) U[J] = D(P[J]);
                for (W = 0; W < ht; W++) {
                    if (X = ct, L[W] = tt(P, U, L, W), _ = 240 & (ct = I[X][B[L[W]]]), ct &= 15, M[W] = nt = I[ct][5], _ > 0)
                        if (_ === 16) {
                            for (J = et; J < W; J++) M[J] = 1;
                            et = -1
                        } else et = -1;
                    if (I[ct][6]) et === -1 && (et = W);
                    else if (et > -1) {
                        for (J = et; J < W; J++) M[J] = nt;
                        et = -1
                    }
                    U[W] === "B" && (M[W] = 0), F.hiLevel |= nt
                }
                o && (function(Z, Q, ut) {
                    for (var dt = 0; dt < ut; dt++)
                        if (Z[dt] === "S") {
                            Q[dt] = z;
                            for (var ft = dt - 1; ft >= 0 && Z[ft] === "WS"; ft--) Q[ft] = z
                        }
                })(U, M, ht)
            },
            O = function(P, M, F, _, J) {
                if (!(J.hiLevel < P)) {
                    if (P === 1 && z === 1 && !s) return M.reverse(), void(F && F.reverse());
                    for (var W, nt, X, et, ht = M.length, ct = 0; ct < ht;) {
                        if (_[ct] >= P) {
                            for (X = ct + 1; X < ht && _[X] >= P;) X++;
                            for (et = ct, nt = X - 1; et < nt; et++, nt--) W = M[et], M[et] = M[nt], M[nt] = W, F && (W = F[et], F[et] = F[nt], F[nt] = W);
                            ct = X
                        }
                        ct++
                    }
                }
            },
            at = function(P, M, F) {
                var _ = P.split(""),
                    J = {
                        hiLevel: z
                    };
                return F || (F = []), Y(_, F, J), (function(W, nt, X) {
                    if (X.hiLevel !== 0 && w)
                        for (var et, ht = 0; ht < W.length; ht++) nt[ht] === 1 && (et = N.indexOf(W[ht])) >= 0 && (W[ht] = N[et + 1])
                })(_, F, J), O(2, _, M, F, J), O(1, _, M, F, J), _.join("")
            };
        return this.__bidiEngine__.doBidiReorder = function(P, M, F) {
            if ((function(J, W) {
                    if (W)
                        for (var nt = 0; nt < J.length; nt++) W[nt] = nt;
                    h === void 0 && (h = G(J)), g === void 0 && (g = G(J))
                })(P, M), f || !c || g)
                if (f && c && h ^ g) z = h ? 1 : 0, P = st(P, M, F);
                else if (!f && c && g) z = h ? 1 : 0, P = at(P, M, F), P = st(P, M);
            else if (!f || h || c || g) {
                if (f && !c && h ^ g) P = st(P, M), h ? (z = 0, P = at(P, M, F)) : (z = 1, P = at(P, M, F), P = st(P, M));
                else if (f && h && !c && g) z = 1, P = at(P, M, F), P = st(P, M);
                else if (!f && !c && h ^ g) {
                    var _ = w;
                    h ? (z = 1, P = at(P, M, F), z = 0, w = !1, P = at(P, M, F), w = _) : (z = 0, P = at(P, M, F), P = st(P, M), z = 1, w = !1, P = at(P, M, F), w = _, P = st(P, M))
                }
            } else z = 0, P = at(P, M, F);
            else z = h ? 1 : 0, P = at(P, M, F);
            return P
        }, this.__bidiEngine__.setOptions = function(P) {
            P && (f = P.isInputVisual, c = P.isOutputVisual, h = P.isInputRtl, g = P.isOutputRtl, w = P.isSymmetricSwapping)
        }, this.__bidiEngine__.setOptions(a), this.__bidiEngine__
    };
    var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
        i = new n.__bidiEngine__({
            isInputVisual: !0
        });
    n.API.events.push(["postProcessText", function(a) {
        var s = a.text;
        a.x, a.y;
        var o = a.options || {};
        a.mutex, o.lang;
        var f = [];
        if (o.isInputVisual = typeof o.isInputVisual != "boolean" || o.isInputVisual, i.setOptions(o), Object.prototype.toString.call(s) === "[object Array]") {
            var h = 0;
            for (f = [], h = 0; h < s.length; h += 1) Object.prototype.toString.call(s[h]) === "[object Array]" ? f.push([i.doBidiReorder(s[h][0]), s[h][1], s[h][2]]) : f.push([i.doBidiReorder(s[h])]);
            a.text = f
        } else a.text = i.doBidiReorder(s);
        i.setOptions({
            isInputVisual: !0
        })
    }])
})(Mt), Mt.API.TTFFont = (function() {
    function n(e) {
        var i;
        if (this.rawData = e, i = this.contents = new zn(e), this.contents.pos = 4, i.readString(4) === "ttcf") throw new Error("TTCF not supported.");
        i.pos = 0, this.parse(), this.subset = new Tl(this), this.registerTTF()
    }
    return n.open = function(e) {
        return new n(e)
    }, n.prototype.parse = function() {
        return this.directory = new Nl(this.contents), this.head = new _l(this), this.name = new jl(this), this.cmap = new vu(this), this.toUnicode = {}, this.hhea = new Pl(this), this.maxp = new Il(this), this.hmtx = new Bl(this), this.post = new Fl(this), this.os2 = new kl(this), this.loca = new Rl(this), this.glyf = new Ol(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax]
    }, n.prototype.registerTTF = function() {
        var e, i, a, s, o;
        if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
                var f, h, c, g;
                for (g = [], f = 0, h = (c = this.bbox).length; f < h; f++) e = c[f], g.push(Math.round(e * this.scaleFactor));
                return g
            }).call(this), this.stemV = 0, this.post.exists ? (a = 255 & (s = this.post.italic_angle), 32768 & (i = s >> 16) && (i = -(1 + (65535 ^ i))), this.italicAngle = +(i + "." + a)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (o = this.familyClass) === 1 || o === 2 || o === 3 || o === 4 || o === 5 || o === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font")
    }, n.prototype.characterToGlyph = function(e) {
        var i;
        return ((i = this.cmap.unicode) != null ? i.codeMap[e] : void 0) || 0
    }, n.prototype.widthOfGlyph = function(e) {
        var i;
        return i = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e).advance * i
    }, n.prototype.widthOfString = function(e, i, a) {
        var s, o, f, h;
        for (f = 0, o = 0, h = (e = "" + e).length; 0 <= h ? o < h : o > h; o = 0 <= h ? ++o : --o) s = e.charCodeAt(o), f += this.widthOfGlyph(this.characterToGlyph(s)) + a * (1e3 / i) || 0;
        return f * (i / 1e3)
    }, n.prototype.lineHeight = function(e, i) {
        var a;
        return i == null && (i = !1), a = i ? this.lineGap : 0, (this.ascender + a - this.decender) / 1e3 * e
    }, n
})();
var Jr, zn = (function() {
        function n(e) {
            this.data = e ? ? [], this.pos = 0, this.length = this.data.length
        }
        return n.prototype.readByte = function() {
            return this.data[this.pos++]
        }, n.prototype.writeByte = function(e) {
            return this.data[this.pos++] = e
        }, n.prototype.readUInt32 = function() {
            return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
        }, n.prototype.writeUInt32 = function(e) {
            return this.writeByte(e >>> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e)
        }, n.prototype.readInt32 = function() {
            var e;
            return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e
        }, n.prototype.writeInt32 = function(e) {
            return e < 0 && (e += 4294967296), this.writeUInt32(e)
        }, n.prototype.readUInt16 = function() {
            return this.readByte() << 8 | this.readByte()
        }, n.prototype.writeUInt16 = function(e) {
            return this.writeByte(e >> 8 & 255), this.writeByte(255 & e)
        }, n.prototype.readInt16 = function() {
            var e;
            return (e = this.readUInt16()) >= 32768 ? e - 65536 : e
        }, n.prototype.writeInt16 = function(e) {
            return e < 0 && (e += 65536), this.writeUInt16(e)
        }, n.prototype.readString = function(e) {
            var i, a;
            for (a = [], i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i) a[i] = String.fromCharCode(this.readByte());
            return a.join("")
        }, n.prototype.writeString = function(e) {
            var i, a, s;
            for (s = [], i = 0, a = e.length; 0 <= a ? i < a : i > a; i = 0 <= a ? ++i : --i) s.push(this.writeByte(e.charCodeAt(i)));
            return s
        }, n.prototype.readShort = function() {
            return this.readInt16()
        }, n.prototype.writeShort = function(e) {
            return this.writeInt16(e)
        }, n.prototype.readLongLong = function() {
            var e, i, a, s, o, f, h, c;
            return e = this.readByte(), i = this.readByte(), a = this.readByte(), s = this.readByte(), o = this.readByte(), f = this.readByte(), h = this.readByte(), c = this.readByte(), 128 & e ? -1 * (72057594037927940 * (255 ^ e) + 281474976710656 * (255 ^ i) + 1099511627776 * (255 ^ a) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ o) + 65536 * (255 ^ f) + 256 * (255 ^ h) + (255 ^ c) + 1) : 72057594037927940 * e + 281474976710656 * i + 1099511627776 * a + 4294967296 * s + 16777216 * o + 65536 * f + 256 * h + c
        }, n.prototype.writeLongLong = function(e) {
            var i, a;
            return i = Math.floor(e / 4294967296), a = 4294967295 & e, this.writeByte(i >> 24 & 255), this.writeByte(i >> 16 & 255), this.writeByte(i >> 8 & 255), this.writeByte(255 & i), this.writeByte(a >> 24 & 255), this.writeByte(a >> 16 & 255), this.writeByte(a >> 8 & 255), this.writeByte(255 & a)
        }, n.prototype.readInt = function() {
            return this.readInt32()
        }, n.prototype.writeInt = function(e) {
            return this.writeInt32(e)
        }, n.prototype.read = function(e) {
            var i, a;
            for (i = [], a = 0; 0 <= e ? a < e : a > e; a = 0 <= e ? ++a : --a) i.push(this.readByte());
            return i
        }, n.prototype.write = function(e) {
            var i, a, s, o;
            for (o = [], a = 0, s = e.length; a < s; a++) i = e[a], o.push(this.writeByte(i));
            return o
        }, n
    })(),
    Nl = (function() {
        var n;

        function e(i) {
            var a, s, o;
            for (this.scalarType = i.readInt(), this.tableCount = i.readShort(), this.searchRange = i.readShort(), this.entrySelector = i.readShort(), this.rangeShift = i.readShort(), this.tables = {}, s = 0, o = this.tableCount; 0 <= o ? s < o : s > o; s = 0 <= o ? ++s : --s) a = {
                tag: i.readString(4),
                checksum: i.readInt(),
                offset: i.readInt(),
                length: i.readInt()
            }, this.tables[a.tag] = a
        }
        return e.prototype.encode = function(i) {
            var a, s, o, f, h, c, g, w, m, C, d, B, A;
            for (A in d = Object.keys(i).length, c = Math.log(2), m = 16 * Math.floor(Math.log(d) / c), f = Math.floor(m / c), w = 16 * d - m, (s = new zn).writeInt(this.scalarType), s.writeShort(d), s.writeShort(m), s.writeShort(f), s.writeShort(w), o = 16 * d, g = s.pos + o, h = null, B = [], i)
                for (C = i[A], s.writeString(A), s.writeInt(n(C)), s.writeInt(g), s.writeInt(C.length), B = B.concat(C), A === "head" && (h = g), g += C.length; g % 4;) B.push(0), g++;
            return s.write(B), a = 2981146554 - n(s.data), s.pos = h + 8, s.writeUInt32(a), s.data
        }, n = function(i) {
            var a, s, o, f;
            for (i = mu.call(i); i.length % 4;) i.push(0);
            for (o = new zn(i), s = 0, a = 0, f = i.length; a < f; a = a += 4) s += o.readUInt32();
            return 4294967295 & s
        }, e
    })(),
    Sl = {}.hasOwnProperty,
    an = function(n, e) {
        for (var i in e) Sl.call(e, i) && (n[i] = e[i]);

        function a() {
            this.constructor = n
        }
        return a.prototype = e.prototype, n.prototype = new a, n.__super__ = e.prototype, n
    };
Jr = (function() {
    function n(e) {
        var i;
        this.file = e, i = this.file.directory.tables[this.tag], this.exists = !!i, i && (this.offset = i.offset, this.length = i.length, this.parse(this.file.contents))
    }
    return n.prototype.parse = function() {}, n.prototype.encode = function() {}, n.prototype.raw = function() {
        return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null
    }, n
})();
var _l = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "head", n.prototype.parse = function(e) {
            return e.pos = this.offset, this.version = e.readInt(), this.revision = e.readInt(), this.checkSumAdjustment = e.readInt(), this.magicNumber = e.readInt(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.readLongLong(), this.modified = e.readLongLong(), this.xMin = e.readShort(), this.yMin = e.readShort(), this.xMax = e.readShort(), this.yMax = e.readShort(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort(), this.indexToLocFormat = e.readShort(), this.glyphDataFormat = e.readShort()
        }, n.prototype.encode = function(e) {
            var i;
            return (i = new zn).writeInt(this.version), i.writeInt(this.revision), i.writeInt(this.checkSumAdjustment), i.writeInt(this.magicNumber), i.writeShort(this.flags), i.writeShort(this.unitsPerEm), i.writeLongLong(this.created), i.writeLongLong(this.modified), i.writeShort(this.xMin), i.writeShort(this.yMin), i.writeShort(this.xMax), i.writeShort(this.yMax), i.writeShort(this.macStyle), i.writeShort(this.lowestRecPPEM), i.writeShort(this.fontDirectionHint), i.writeShort(e), i.writeShort(this.glyphDataFormat), i.data
        }, n
    })(),
    gu = (function() {
        function n(e, i) {
            var a, s, o, f, h, c, g, w, m, C, d, B, A, N, v, R, z;
            switch (this.platformID = e.readUInt16(), this.encodingID = e.readShort(), this.offset = i + e.readInt(), m = e.pos, e.pos = this.offset, this.format = e.readUInt16(), this.length = e.readUInt16(), this.language = e.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
                case 0:
                    for (c = 0; c < 256; ++c) this.codeMap[c] = e.readByte();
                    break;
                case 4:
                    for (d = e.readUInt16(), C = d / 2, e.pos += 6, o = (function() {
                            var D, G;
                            for (G = [], c = D = 0; 0 <= C ? D < C : D > C; c = 0 <= C ? ++D : --D) G.push(e.readUInt16());
                            return G
                        })(), e.pos += 2, A = (function() {
                            var D, G;
                            for (G = [], c = D = 0; 0 <= C ? D < C : D > C; c = 0 <= C ? ++D : --D) G.push(e.readUInt16());
                            return G
                        })(), g = (function() {
                            var D, G;
                            for (G = [], c = D = 0; 0 <= C ? D < C : D > C; c = 0 <= C ? ++D : --D) G.push(e.readUInt16());
                            return G
                        })(), w = (function() {
                            var D, G;
                            for (G = [], c = D = 0; 0 <= C ? D < C : D > C; c = 0 <= C ? ++D : --D) G.push(e.readUInt16());
                            return G
                        })(), s = (this.length - e.pos + this.offset) / 2, h = (function() {
                            var D, G;
                            for (G = [], c = D = 0; 0 <= s ? D < s : D > s; c = 0 <= s ? ++D : --D) G.push(e.readUInt16());
                            return G
                        })(), c = v = 0, z = o.length; v < z; c = ++v)
                        for (N = o[c], a = R = B = A[c]; B <= N ? R <= N : R >= N; a = B <= N ? ++R : --R) w[c] === 0 ? f = a + g[c] : (f = h[w[c] / 2 + (a - B) - (C - c)] || 0) !== 0 && (f += g[c]), this.codeMap[a] = 65535 & f
            }
            e.pos = m
        }
        return n.encode = function(e, i) {
            var a, s, o, f, h, c, g, w, m, C, d, B, A, N, v, R, z, D, G, tt, st, Y, O, at, P, M, F, _, J, W, nt, X, et, ht, ct, L, I, U, Z, Q, ut, dt, ft, yt, Nt, Pt;
            switch (_ = new zn, f = Object.keys(e).sort(function(kt, gt) {
                return kt - gt
            }), i) {
                case "macroman":
                    for (A = 0, N = (function() {
                            var kt = [];
                            for (B = 0; B < 256; ++B) kt.push(0);
                            return kt
                        })(), R = {
                            0: 0
                        }, o = {}, J = 0, et = f.length; J < et; J++) R[ft = e[s = f[J]]] == null && (R[ft] = ++A), o[s] = {
                        old: e[s],
                        new: R[e[s]]
                    }, N[s] = R[e[s]];
                    return _.writeUInt16(1), _.writeUInt16(0), _.writeUInt32(12), _.writeUInt16(0), _.writeUInt16(262), _.writeUInt16(0), _.write(N), {
                        charMap: o,
                        subtable: _.data,
                        maxGlyphID: A + 1
                    };
                case "unicode":
                    for (M = [], m = [], z = 0, R = {}, a = {}, v = g = null, W = 0, ht = f.length; W < ht; W++) R[G = e[s = f[W]]] == null && (R[G] = ++z), a[s] = {
                        old: G,
                        new: R[G]
                    }, h = R[G] - s, v != null && h === g || (v && m.push(v), M.push(s), g = h), v = s;
                    for (v && m.push(v), m.push(65535), M.push(65535), at = 2 * (O = M.length), Y = 2 * Math.pow(Math.log(O) / Math.LN2, 2), C = Math.log(Y / 2) / Math.LN2, st = 2 * O - Y, c = [], tt = [], d = [], B = nt = 0, ct = M.length; nt < ct; B = ++nt) {
                        if (P = M[B], w = m[B], P === 65535) {
                            c.push(0), tt.push(0);
                            break
                        }
                        if (P - (F = a[P].new) >= 32768)
                            for (c.push(0), tt.push(2 * (d.length + O - B)), s = X = P; P <= w ? X <= w : X >= w; s = P <= w ? ++X : --X) d.push(a[s].new);
                        else c.push(F - P), tt.push(0)
                    }
                    for (_.writeUInt16(3), _.writeUInt16(1), _.writeUInt32(12), _.writeUInt16(4), _.writeUInt16(16 + 8 * O + 2 * d.length), _.writeUInt16(0), _.writeUInt16(at), _.writeUInt16(Y), _.writeUInt16(C), _.writeUInt16(st), ut = 0, L = m.length; ut < L; ut++) s = m[ut], _.writeUInt16(s);
                    for (_.writeUInt16(0), dt = 0, I = M.length; dt < I; dt++) s = M[dt], _.writeUInt16(s);
                    for (yt = 0, U = c.length; yt < U; yt++) h = c[yt], _.writeUInt16(h);
                    for (Nt = 0, Z = tt.length; Nt < Z; Nt++) D = tt[Nt], _.writeUInt16(D);
                    for (Pt = 0, Q = d.length; Pt < Q; Pt++) A = d[Pt], _.writeUInt16(A);
                    return {
                        charMap: a,
                        subtable: _.data,
                        maxGlyphID: z + 1
                    }
            }
        }, n
    })(),
    vu = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "cmap", n.prototype.parse = function(e) {
            var i, a, s;
            for (e.pos = this.offset, this.version = e.readUInt16(), s = e.readUInt16(), this.tables = [], this.unicode = null, a = 0; 0 <= s ? a < s : a > s; a = 0 <= s ? ++a : --a) i = new gu(e, this.offset), this.tables.push(i), i.isUnicode && this.unicode == null && (this.unicode = i);
            return !0
        }, n.encode = function(e, i) {
            var a, s;
            return i == null && (i = "macroman"), a = gu.encode(e, i), (s = new zn).writeUInt16(0), s.writeUInt16(1), a.table = s.data.concat(a.subtable), a
        }, n
    })(),
    Pl = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "hhea", n.prototype.parse = function(e) {
            return e.pos = this.offset, this.version = e.readInt(), this.ascender = e.readShort(), this.decender = e.readShort(), this.lineGap = e.readShort(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort(), this.minRightSideBearing = e.readShort(), this.xMaxExtent = e.readShort(), this.caretSlopeRise = e.readShort(), this.caretSlopeRun = e.readShort(), this.caretOffset = e.readShort(), e.pos += 8, this.metricDataFormat = e.readShort(), this.numberOfMetrics = e.readUInt16()
        }, n
    })(),
    kl = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "OS/2", n.prototype.parse = function(e) {
            if (e.pos = this.offset, this.version = e.readUInt16(), this.averageCharWidth = e.readShort(), this.weightClass = e.readUInt16(), this.widthClass = e.readUInt16(), this.type = e.readShort(), this.ySubscriptXSize = e.readShort(), this.ySubscriptYSize = e.readShort(), this.ySubscriptXOffset = e.readShort(), this.ySubscriptYOffset = e.readShort(), this.ySuperscriptXSize = e.readShort(), this.ySuperscriptYSize = e.readShort(), this.ySuperscriptXOffset = e.readShort(), this.ySuperscriptYOffset = e.readShort(), this.yStrikeoutSize = e.readShort(), this.yStrikeoutPosition = e.readShort(), this.familyClass = e.readShort(), this.panose = (function() {
                    var i, a;
                    for (a = [], i = 0; i < 10; ++i) a.push(e.readByte());
                    return a
                })(), this.charRange = (function() {
                    var i, a;
                    for (a = [], i = 0; i < 4; ++i) a.push(e.readInt());
                    return a
                })(), this.vendorID = e.readString(4), this.selection = e.readShort(), this.firstCharIndex = e.readShort(), this.lastCharIndex = e.readShort(), this.version > 0 && (this.ascent = e.readShort(), this.descent = e.readShort(), this.lineGap = e.readShort(), this.winAscent = e.readShort(), this.winDescent = e.readShort(), this.codePageRange = (function() {
                    var i, a;
                    for (a = [], i = 0; i < 2; i = ++i) a.push(e.readInt());
                    return a
                })(), this.version > 1)) return this.xHeight = e.readShort(), this.capHeight = e.readShort(), this.defaultChar = e.readShort(), this.breakChar = e.readShort(), this.maxContext = e.readShort()
        }, n
    })(),
    Fl = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "post", n.prototype.parse = function(e) {
            var i, a, s;
            switch (e.pos = this.offset, this.format = e.readInt(), this.italicAngle = e.readInt(), this.underlinePosition = e.readShort(), this.underlineThickness = e.readShort(), this.isFixedPitch = e.readInt(), this.minMemType42 = e.readInt(), this.maxMemType42 = e.readInt(), this.minMemType1 = e.readInt(), this.maxMemType1 = e.readInt(), this.format) {
                case 65536:
                case 196608:
                    break;
                case 131072:
                    var o;
                    for (a = e.readUInt16(), this.glyphNameIndex = [], o = 0; 0 <= a ? o < a : o > a; o = 0 <= a ? ++o : --o) this.glyphNameIndex.push(e.readUInt16());
                    for (this.names = [], s = []; e.pos < this.offset + this.length;) i = e.readByte(), s.push(this.names.push(e.readString(i)));
                    return s;
                case 151552:
                    return a = e.readUInt16(), this.offsets = e.read(a);
                case 262144:
                    return this.map = (function() {
                        var f, h, c;
                        for (c = [], o = f = 0, h = this.file.maxp.numGlyphs; 0 <= h ? f < h : f > h; o = 0 <= h ? ++f : --f) c.push(e.readUInt32());
                        return c
                    }).call(this)
            }
        }, n
    })(),
    Cl = function(n, e) {
        this.raw = n, this.length = n.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID
    },
    jl = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "name", n.prototype.parse = function(e) {
            var i, a, s, o, f, h, c, g, w, m, C;
            for (e.pos = this.offset, e.readShort(), i = e.readShort(), h = e.readShort(), a = [], o = 0; 0 <= i ? o < i : o > i; o = 0 <= i ? ++o : --o) a.push({
                platformID: e.readShort(),
                encodingID: e.readShort(),
                languageID: e.readShort(),
                nameID: e.readShort(),
                length: e.readShort(),
                offset: this.offset + h + e.readShort()
            });
            for (c = {}, o = w = 0, m = a.length; w < m; o = ++w) s = a[o], e.pos = s.offset, g = e.readString(s.length), f = new Cl(g, s), c[C = s.nameID] == null && (c[C] = []), c[s.nameID].push(f);
            this.strings = c, this.copyright = c[0], this.fontFamily = c[1], this.fontSubfamily = c[2], this.uniqueSubfamily = c[3], this.fontName = c[4], this.version = c[5];
            try {
                this.postscriptName = c[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
            } catch {
                this.postscriptName = c[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
            }
            return this.trademark = c[7], this.manufacturer = c[8], this.designer = c[9], this.description = c[10], this.vendorUrl = c[11], this.designerUrl = c[12], this.license = c[13], this.licenseUrl = c[14], this.preferredFamily = c[15], this.preferredSubfamily = c[17], this.compatibleFull = c[18], this.sampleText = c[19]
        }, n
    })(),
    Il = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "maxp", n.prototype.parse = function(e) {
            return e.pos = this.offset, this.version = e.readInt(), this.numGlyphs = e.readUInt16(), this.maxPoints = e.readUInt16(), this.maxContours = e.readUInt16(), this.maxCompositePoints = e.readUInt16(), this.maxComponentContours = e.readUInt16(), this.maxZones = e.readUInt16(), this.maxTwilightPoints = e.readUInt16(), this.maxStorage = e.readUInt16(), this.maxFunctionDefs = e.readUInt16(), this.maxInstructionDefs = e.readUInt16(), this.maxStackElements = e.readUInt16(), this.maxSizeOfInstructions = e.readUInt16(), this.maxComponentElements = e.readUInt16(), this.maxComponentDepth = e.readUInt16()
        }, n
    })(),
    Bl = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "hmtx", n.prototype.parse = function(e) {
            var i, a, s, o, f, h, c;
            for (e.pos = this.offset, this.metrics = [], i = 0, h = this.file.hhea.numberOfMetrics; 0 <= h ? i < h : i > h; i = 0 <= h ? ++i : --i) this.metrics.push({
                advance: e.readUInt16(),
                lsb: e.readInt16()
            });
            for (s = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = (function() {
                    var g, w;
                    for (w = [], i = g = 0; 0 <= s ? g < s : g > s; i = 0 <= s ? ++g : --g) w.push(e.readInt16());
                    return w
                })(), this.widths = (function() {
                    var g, w, m, C;
                    for (C = [], g = 0, w = (m = this.metrics).length; g < w; g++) o = m[g], C.push(o.advance);
                    return C
                }).call(this), a = this.widths[this.widths.length - 1], c = [], i = f = 0; 0 <= s ? f < s : f > s; i = 0 <= s ? ++f : --f) c.push(this.widths.push(a));
            return c
        }, n.prototype.forGlyph = function(e) {
            return e in this.metrics ? this.metrics[e] : {
                advance: this.metrics[this.metrics.length - 1].advance,
                lsb: this.leftSideBearings[e - this.metrics.length]
            }
        }, n
    })(),
    mu = [].slice,
    Ol = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "glyf", n.prototype.parse = function() {
            return this.cache = {}
        }, n.prototype.glyphFor = function(e) {
            var i, a, s, o, f, h, c, g, w, m;
            return e in this.cache ? this.cache[e] : (o = this.file.loca, i = this.file.contents, a = o.indexOf(e), (s = o.lengthOf(e)) === 0 ? this.cache[e] = null : (i.pos = this.offset + a, f = (h = new zn(i.read(s))).readShort(), g = h.readShort(), m = h.readShort(), c = h.readShort(), w = h.readShort(), this.cache[e] = f === -1 ? new Dl(h, g, m, c, w) : new Ml(h, f, g, m, c, w), this.cache[e]))
        }, n.prototype.encode = function(e, i, a) {
            var s, o, f, h, c;
            for (f = [], o = [], h = 0, c = i.length; h < c; h++) s = e[i[h]], o.push(f.length), s && (f = f.concat(s.encode(a)));
            return o.push(f.length), {
                table: f,
                offsets: o
            }
        }, n
    })(),
    Ml = (function() {
        function n(e, i, a, s, o, f) {
            this.raw = e, this.numberOfContours = i, this.xMin = a, this.yMin = s, this.xMax = o, this.yMax = f, this.compound = !1
        }
        return n.prototype.encode = function() {
            return this.raw.data
        }, n
    })(),
    Dl = (function() {
        function n(e, i, a, s, o) {
            var f, h;
            for (this.raw = e, this.xMin = i, this.yMin = a, this.xMax = s, this.yMax = o, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], f = this.raw; h = f.readShort(), this.glyphOffsets.push(f.pos), this.glyphIDs.push(f.readUInt16()), 32 & h;) f.pos += 1 & h ? 4 : 2, 128 & h ? f.pos += 8 : 64 & h ? f.pos += 4 : 8 & h && (f.pos += 2)
        }
        return n.prototype.encode = function() {
            var e, i, a;
            for (i = new zn(mu.call(this.raw.data)), e = 0, a = this.glyphIDs.length; e < a; ++e) i.pos = this.glyphOffsets[e];
            return i.data
        }, n
    })(),
    Rl = (function() {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return an(n, Jr), n.prototype.tag = "loca", n.prototype.parse = function(e) {
            var i, a;
            return e.pos = this.offset, i = this.file.head.indexToLocFormat, this.offsets = i === 0 ? (function() {
                var s, o;
                for (o = [], a = 0, s = this.length; a < s; a += 2) o.push(2 * e.readUInt16());
                return o
            }).call(this) : (function() {
                var s, o;
                for (o = [], a = 0, s = this.length; a < s; a += 4) o.push(e.readUInt32());
                return o
            }).call(this)
        }, n.prototype.indexOf = function(e) {
            return this.offsets[e]
        }, n.prototype.lengthOf = function(e) {
            return this.offsets[e + 1] - this.offsets[e]
        }, n.prototype.encode = function(e, i) {
            for (var a = new Uint32Array(this.offsets.length), s = 0, o = 0, f = 0; f < a.length; ++f)
                if (a[f] = s, o < i.length && i[o] == f) {
                    ++o, a[f] = s;
                    var h = this.offsets[f],
                        c = this.offsets[f + 1] - h;
                    c > 0 && (s += c)
                }
            for (var g = new Array(4 * a.length), w = 0; w < a.length; ++w) g[4 * w + 3] = 255 & a[w], g[4 * w + 2] = (65280 & a[w]) >> 8, g[4 * w + 1] = (16711680 & a[w]) >> 16, g[4 * w] = (4278190080 & a[w]) >> 24;
            return g
        }, n
    })(),
    Tl = (function() {
        function n(e) {
            this.font = e, this.subset = {}, this.unicodes = {}, this.next = 33
        }
        return n.prototype.generateCmap = function() {
            var e, i, a, s, o;
            for (i in s = this.font.cmap.tables[0].codeMap, e = {}, o = this.subset) a = o[i], e[i] = s[a];
            return e
        }, n.prototype.glyphsFor = function(e) {
            var i, a, s, o, f, h, c;
            for (s = {}, f = 0, h = e.length; f < h; f++) s[o = e[f]] = this.font.glyf.glyphFor(o);
            for (o in i = [], s)(a = s[o]) != null && a.compound && i.push.apply(i, a.glyphIDs);
            if (i.length > 0)
                for (o in c = this.glyphsFor(i)) a = c[o], s[o] = a;
            return s
        }, n.prototype.encode = function(e, i) {
            var a, s, o, f, h, c, g, w, m, C, d, B, A, N, v;
            for (s in a = vu.encode(this.generateCmap(), "unicode"), f = this.glyphsFor(e), d = {
                    0: 0
                }, v = a.charMap) d[(c = v[s]).old] = c.new;
            for (B in C = a.maxGlyphID, f) B in d || (d[B] = C++);
            return w = (function(R) {
                var z, D;
                for (z in D = {}, R) D[R[z]] = z;
                return D
            })(d), m = Object.keys(w).sort(function(R, z) {
                return R - z
            }), A = (function() {
                var R, z, D;
                for (D = [], R = 0, z = m.length; R < z; R++) h = m[R], D.push(w[h]);
                return D
            })(), o = this.font.glyf.encode(f, A, d), g = this.font.loca.encode(o.offsets, A), N = {
                cmap: this.font.cmap.raw(),
                glyf: o.table,
                loca: g,
                hmtx: this.font.hmtx.raw(),
                hhea: this.font.hhea.raw(),
                maxp: this.font.maxp.raw(),
                post: this.font.post.raw(),
                name: this.font.name.raw(),
                head: this.font.head.encode(i)
            }, this.font.os2.exists && (N["OS/2"] = this.font.os2.raw()), this.font.directory.encode(N)
        }, n
    })();
Mt.API.PDFObject = (function() {
    var n;

    function e() {}
    return n = function(i, a) {
        return (Array(a + 1).join("0") + i).slice(-a)
    }, e.convert = function(i) {
        var a, s, o, f;
        if (Array.isArray(i)) return "[" + (function() {
            var h, c, g;
            for (g = [], h = 0, c = i.length; h < c; h++) a = i[h], g.push(e.convert(a));
            return g
        })().join(" ") + "]";
        if (typeof i == "string") return "/" + i;
        if (i ? .isString) return "(" + i + ")";
        if (i instanceof Date) return "(D:" + n(i.getUTCFullYear(), 4) + n(i.getUTCMonth(), 2) + n(i.getUTCDate(), 2) + n(i.getUTCHours(), 2) + n(i.getUTCMinutes(), 2) + n(i.getUTCSeconds(), 2) + "Z)";
        if ({}.toString.call(i) === "[object Object]") {
            for (s in o = ["<<"], i) f = i[s], o.push("/" + s + " " + e.convert(f));
            return o.push(">>"), o.join(`
`)
        }
        return "" + i
    }, e
})();
export {
    gl as AcroForm, Ct as AcroFormAppearance, er as AcroFormButton, da as AcroFormCheckBox, gi as AcroFormChoiceField, mi as AcroFormComboBox, ca as AcroFormEditBox, vi as AcroFormListBox, pa as AcroFormPasswordField, fa as AcroFormPushButton, bi as AcroFormRadioButton, qn as AcroFormTextField, ha as GState, Tn as ShadingPattern, di as TilingPattern, Mt as
    default, Mt as jsPDF
};
/*!
 * 
 *               jsPDF AutoTable plugin v5.0.2
 *
 *               Copyright (c) 2025 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *               Licensed under the MIT License.
 *               http://opensource.org/licenses/mit-license
 *
 */
(function(e, i) {
    if (typeof exports == "object" && typeof module == "object") module.exports = i();
    else if (typeof define == "function" && define.amd) define([], i);
    else {
        var a = i();
        for (var s in a)(typeof exports == "object" ? exports : e)[s] = a[s]
    }
})(typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof self < "u" ? self : global, function() {
    return (function() {
        "use strict";
        var n = {
                28: (function(s, o) {
                    var f = this && this.__extends || (function() {
                        var w = function(m, C) {
                            return w = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(d, B) {
                                d.__proto__ = B
                            } || function(d, B) {
                                for (var A in B) Object.prototype.hasOwnProperty.call(B, A) && (d[A] = B[A])
                            }, w(m, C)
                        };
                        return function(m, C) {
                            if (typeof C != "function" && C !== null) throw new TypeError("Class extends value " + String(C) + " is not a constructor or null");
                            w(m, C);

                            function d() {
                                this.constructor = m
                            }
                            m.prototype = C === null ? Object.create(C) : (d.prototype = C.prototype, new d)
                        }
                    })();
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.HtmlRowInput = void 0, o.defaultStyles = c, o.getTheme = g;
                    var h = (function(w) {
                        f(m, w);

                        function m(C) {
                            var d = w.call(this) || this;
                            return d._element = C, d
                        }
                        return m
                    })(Array);
                    o.HtmlRowInput = h;

                    function c(w) {
                        return {
                            font: "helvetica",
                            fontStyle: "normal",
                            overflow: "linebreak",
                            fillColor: !1,
                            textColor: 20,
                            halign: "left",
                            valign: "top",
                            fontSize: 10,
                            cellPadding: 5 / w,
                            lineColor: 200,
                            lineWidth: 0,
                            cellWidth: "auto",
                            minCellHeight: 0,
                            minCellWidth: 0
                        }
                    }

                    function g(w) {
                        var m = {
                            striped: {
                                table: {
                                    fillColor: 255,
                                    textColor: 80,
                                    fontStyle: "normal"
                                },
                                head: {
                                    textColor: 255,
                                    fillColor: [41, 128, 185],
                                    fontStyle: "bold"
                                },
                                body: {},
                                foot: {
                                    textColor: 255,
                                    fillColor: [41, 128, 185],
                                    fontStyle: "bold"
                                },
                                alternateRow: {
                                    fillColor: 245
                                }
                            },
                            grid: {
                                table: {
                                    fillColor: 255,
                                    textColor: 80,
                                    fontStyle: "normal",
                                    lineWidth: .1
                                },
                                head: {
                                    textColor: 255,
                                    fillColor: [26, 188, 156],
                                    fontStyle: "bold",
                                    lineWidth: 0
                                },
                                body: {},
                                foot: {
                                    textColor: 255,
                                    fillColor: [26, 188, 156],
                                    fontStyle: "bold",
                                    lineWidth: 0
                                },
                                alternateRow: {}
                            },
                            plain: {
                                head: {
                                    fontStyle: "bold"
                                },
                                foot: {
                                    fontStyle: "bold"
                                }
                            }
                        };
                        return m[w]
                    }
                }),
                150: (function(s, o) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.default = f;

                    function f(h, c, g, w, m) {
                        w = w || {};
                        var C = 1.15,
                            d = m.internal.scaleFactor,
                            B = m.internal.getFontSize() / d,
                            A = m.getLineHeightFactor ? m.getLineHeightFactor() : C,
                            N = B * A,
                            v = /\r\n|\r|\n/g,
                            R = "",
                            z = 1;
                        if ((w.valign === "middle" || w.valign === "bottom" || w.halign === "center" || w.halign === "right") && (R = typeof h == "string" ? h.split(v) : h, z = R.length || 1), g += B * (2 - C), w.valign === "middle" ? g -= z / 2 * N : w.valign === "bottom" && (g -= z * N), w.halign === "center" || w.halign === "right") {
                            var D = B;
                            if (w.halign === "center" && (D *= .5), R && z >= 1) {
                                for (var G = 0; G < R.length; G++) m.text(R[G], c - m.getStringUnitWidth(R[G]) * D, g), g += N;
                                return m
                            }
                            c -= m.getStringUnitWidth(h) * D
                        }
                        return w.halign === "justify" ? m.text(h, c, g, {
                            maxWidth: w.maxWidth || 100,
                            align: "justify"
                        }) : m.text(h, c, g), m
                    }
                }),
                152: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.calculateWidths = c, o.resizeColumns = w, o.ellipsize = B;
                    var h = f(799);

                    function c(N, v) {
                        g(N, v);
                        var R = [],
                            z = 0;
                        v.columns.forEach(function(G) {
                            var tt = G.getMaxCustomCellWidth(v);
                            tt ? G.width = tt : (G.width = G.wrappedWidth, R.push(G)), z += G.width
                        });
                        var D = v.getWidth(N.pageSize().width) - z;
                        D && (D = w(R, D, function(G) {
                            return Math.max(G.minReadableWidth, G.minWidth)
                        })), D && (D = w(R, D, function(G) {
                            return G.minWidth
                        })), D = Math.abs(D), !v.settings.horizontalPageBreak && D > .1 / N.scaleFactor() && (D = D < 1 ? D : Math.round(D), console.warn("Of the table content, ".concat(D, " units width could not fit page"))), C(v), d(v, N), m(v)
                    }

                    function g(N, v) {
                        var R = N.scaleFactor(),
                            z = v.settings.horizontalPageBreak,
                            D = (0, h.getPageAvailableWidth)(N, v);
                        v.allRows().forEach(function(G) {
                            for (var tt = 0, st = v.columns; tt < st.length; tt++) {
                                var Y = st[tt],
                                    O = G.cells[Y.index];
                                if (O) {
                                    var at = v.hooks.didParseCell;
                                    v.callCellHooks(N, at, O, G, Y, null);
                                    var P = O.padding("horizontal");
                                    O.contentWidth = (0, h.getStringWidth)(O.text, O.styles, N) + P;
                                    var M = (0, h.getStringWidth)(O.text.join(" ").split(/[^\S\u00A0]+/), O.styles, N);
                                    if (O.minReadableWidth = M + O.padding("horizontal"), typeof O.styles.cellWidth == "number") O.minWidth = O.styles.cellWidth, O.wrappedWidth = O.styles.cellWidth;
                                    else if (O.styles.cellWidth === "wrap" || z === !0) O.contentWidth > D ? (O.minWidth = D, O.wrappedWidth = D) : (O.minWidth = O.contentWidth, O.wrappedWidth = O.contentWidth);
                                    else {
                                        var F = 10 / R;
                                        O.minWidth = O.styles.minCellWidth || F, O.wrappedWidth = O.contentWidth, O.minWidth > O.wrappedWidth && (O.wrappedWidth = O.minWidth)
                                    }
                                }
                            }
                        }), v.allRows().forEach(function(G) {
                            for (var tt = 0, st = v.columns; tt < st.length; tt++) {
                                var Y = st[tt],
                                    O = G.cells[Y.index];
                                if (O && O.colSpan === 1) Y.wrappedWidth = Math.max(Y.wrappedWidth, O.wrappedWidth), Y.minWidth = Math.max(Y.minWidth, O.minWidth), Y.minReadableWidth = Math.max(Y.minReadableWidth, O.minReadableWidth);
                                else {
                                    var at = v.styles.columnStyles[Y.dataKey] || v.styles.columnStyles[Y.index] || {},
                                        P = at.cellWidth || at.minCellWidth;
                                    P && typeof P == "number" && (Y.minWidth = P, Y.wrappedWidth = P)
                                }
                                O && (O.colSpan > 1 && !Y.minWidth && (Y.minWidth = O.minWidth), O.colSpan > 1 && !Y.wrappedWidth && (Y.wrappedWidth = O.minWidth))
                            }
                        })
                    }

                    function w(N, v, R) {
                        for (var z = v, D = N.reduce(function(F, _) {
                                return F + _.wrappedWidth
                            }, 0), G = 0; G < N.length; G++) {
                            var tt = N[G],
                                st = tt.wrappedWidth / D,
                                Y = z * st,
                                O = tt.width + Y,
                                at = R(tt),
                                P = O < at ? at : O;
                            v -= P - tt.width, tt.width = P
                        }
                        if (v = Math.round(v * 1e10) / 1e10, v) {
                            var M = N.filter(function(F) {
                                return v < 0 ? F.width > R(F) : !0
                            });
                            M.length && (v = w(M, v, R))
                        }
                        return v
                    }

                    function m(N) {
                        for (var v = {}, R = 1, z = N.allRows(), D = 0; D < z.length; D++)
                            for (var G = z[D], tt = 0, st = N.columns; tt < st.length; tt++) {
                                var Y = st[tt],
                                    O = v[Y.index];
                                if (R > 1) R--, delete G.cells[Y.index];
                                else if (O) O.cell.height += G.height, R = O.cell.colSpan, delete G.cells[Y.index], O.left--, O.left <= 1 && delete v[Y.index];
                                else {
                                    var at = G.cells[Y.index];
                                    if (!at) continue;
                                    if (at.height = G.height, at.rowSpan > 1) {
                                        var P = z.length - D,
                                            M = at.rowSpan > P ? P : at.rowSpan;
                                        v[Y.index] = {
                                            cell: at,
                                            left: M,
                                            row: G
                                        }
                                    }
                                }
                            }
                    }

                    function C(N) {
                        for (var v = N.allRows(), R = 0; R < v.length; R++)
                            for (var z = v[R], D = null, G = 0, tt = 0, st = 0; st < N.columns.length; st++) {
                                var Y = N.columns[st];
                                if (tt -= 1, tt > 1 && N.columns[st + 1]) G += Y.width, delete z.cells[Y.index];
                                else if (D) {
                                    var O = D;
                                    delete z.cells[Y.index], D = null, O.width = Y.width + G
                                } else {
                                    var O = z.cells[Y.index];
                                    if (!O) continue;
                                    if (tt = O.colSpan, G = 0, O.colSpan > 1) {
                                        D = O, G += Y.width;
                                        continue
                                    }
                                    O.width = Y.width + G
                                }
                            }
                    }

                    function d(N, v) {
                        for (var R = {
                                count: 0,
                                height: 0
                            }, z = 0, D = N.allRows(); z < D.length; z++) {
                            for (var G = D[z], tt = 0, st = N.columns; tt < st.length; tt++) {
                                var Y = st[tt],
                                    O = G.cells[Y.index];
                                if (O) {
                                    v.applyStyles(O.styles, !0);
                                    var at = O.width - O.padding("horizontal");
                                    if (O.styles.overflow === "linebreak") O.text = v.splitTextToSize(O.text, at + 1 / v.scaleFactor(), {
                                        fontSize: O.styles.fontSize
                                    });
                                    else if (O.styles.overflow === "ellipsize") O.text = B(O.text, at, O.styles, v, "...");
                                    else if (O.styles.overflow === "hidden") O.text = B(O.text, at, O.styles, v, "");
                                    else if (typeof O.styles.overflow == "function") {
                                        var P = O.styles.overflow(O.text, at);
                                        typeof P == "string" ? O.text = [P] : O.text = P
                                    }
                                    O.contentHeight = O.getContentHeight(v.scaleFactor(), v.getLineHeightFactor());
                                    var M = O.contentHeight / O.rowSpan;
                                    O.rowSpan > 1 && R.count * R.height < M * O.rowSpan ? R = {
                                        height: M,
                                        count: O.rowSpan
                                    } : R && R.count > 0 && R.height > M && (M = R.height), M > G.height && (G.height = M)
                                }
                            }
                            R.count--
                        }
                    }

                    function B(N, v, R, z, D) {
                        return N.map(function(G) {
                            return A(G, v, R, z, D)
                        })
                    }

                    function A(N, v, R, z, D) {
                        var G = 1e4 * z.scaleFactor();
                        if (v = Math.ceil(v * G) / G, v >= (0, h.getStringWidth)(N, R, z)) return N;
                        for (; v < (0, h.getStringWidth)(N + D, R, z) && !(N.length <= 1);) N = N.substring(0, N.length - 1);
                        return N.trim() + D
                    }
                }),
                176: (function(s, o) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.assign = f;

                    function f(h, c, g, w, m) {
                        if (h == null) throw new TypeError("Cannot convert undefined or null to object");
                        for (var C = Object(h), d = 1; d < arguments.length; d++) {
                            var B = arguments[d];
                            if (B != null)
                                for (var A in B) Object.prototype.hasOwnProperty.call(B, A) && (C[A] = B[A])
                        }
                        return C
                    }
                }),
                344: (function(s, o) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.validateInput = f;

                    function f(h, c, g) {
                        for (var w = 0, m = [h, c, g]; w < m.length; w++) {
                            var C = m[w];
                            C && typeof C != "object" && console.error("The options parameter should be of type object, is: " + typeof C), C.startY && typeof C.startY != "number" && (console.error("Invalid value for startY option", C.startY), delete C.startY)
                        }
                    }
                }),
                371: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.parseInput = C;
                    var h = f(799),
                        c = f(643),
                        g = f(660),
                        w = f(344),
                        m = f(176);

                    function C(z, D) {
                        var G = new c.DocHandler(z),
                            tt = G.getDocumentOptions(),
                            st = G.getGlobalOptions();
                        (0, w.validateInput)(st, tt, D);
                        var Y = (0, m.assign)({}, st, tt, D),
                            O;
                        typeof window < "u" && (O = window);
                        var at = d(st, tt, D),
                            P = B(st, tt, D),
                            M = A(G, Y),
                            F = v(G, Y, O);
                        return {
                            id: D.tableId,
                            content: F,
                            hooks: P,
                            styles: at,
                            settings: M
                        }
                    }

                    function d(z, D, G) {
                        for (var tt = {
                                styles: {},
                                headStyles: {},
                                bodyStyles: {},
                                footStyles: {},
                                alternateRowStyles: {},
                                columnStyles: {}
                            }, st = function(P) {
                                if (P === "columnStyles") {
                                    var M = z[P],
                                        F = D[P],
                                        _ = G[P];
                                    tt.columnStyles = (0, m.assign)({}, M, F, _)
                                } else {
                                    var J = [z, D, G],
                                        W = J.map(function(nt) {
                                            return nt[P] || {}
                                        });
                                    tt[P] = (0, m.assign)({}, W[0], W[1], W[2])
                                }
                            }, Y = 0, O = Object.keys(tt); Y < O.length; Y++) {
                            var at = O[Y];
                            st(at)
                        }
                        return tt
                    }

                    function B(z, D, G) {
                        for (var tt = [z, D, G], st = {
                                didParseCell: [],
                                willDrawCell: [],
                                didDrawCell: [],
                                willDrawPage: [],
                                didDrawPage: []
                            }, Y = 0, O = tt; Y < O.length; Y++) {
                            var at = O[Y];
                            at.didParseCell && st.didParseCell.push(at.didParseCell), at.willDrawCell && st.willDrawCell.push(at.willDrawCell), at.didDrawCell && st.didDrawCell.push(at.didDrawCell), at.willDrawPage && st.willDrawPage.push(at.willDrawPage), at.didDrawPage && st.didDrawPage.push(at.didDrawPage)
                        }
                        return st
                    }

                    function A(z, D) {
                        var G, tt, st, Y, O, at, P, M, F, _, J, W, nt = (0, h.parseSpacing)(D.margin, 40 / z.scaleFactor()),
                            X = (G = N(z, D.startY)) !== null && G !== void 0 ? G : nt.top,
                            et;
                        D.showFoot === !0 ? et = "everyPage" : D.showFoot === !1 ? et = "never" : et = (tt = D.showFoot) !== null && tt !== void 0 ? tt : "everyPage";
                        var ht;
                        D.showHead === !0 ? ht = "everyPage" : D.showHead === !1 ? ht = "never" : ht = (st = D.showHead) !== null && st !== void 0 ? st : "everyPage";
                        var ct = (Y = D.useCss) !== null && Y !== void 0 ? Y : !1,
                            L = D.theme || (ct ? "plain" : "striped"),
                            I = !!D.horizontalPageBreak,
                            U = (O = D.horizontalPageBreakRepeat) !== null && O !== void 0 ? O : null;
                        return {
                            includeHiddenHtml: (at = D.includeHiddenHtml) !== null && at !== void 0 ? at : !1,
                            useCss: ct,
                            theme: L,
                            startY: X,
                            margin: nt,
                            pageBreak: (P = D.pageBreak) !== null && P !== void 0 ? P : "auto",
                            rowPageBreak: (M = D.rowPageBreak) !== null && M !== void 0 ? M : "auto",
                            tableWidth: (F = D.tableWidth) !== null && F !== void 0 ? F : "auto",
                            showHead: ht,
                            showFoot: et,
                            tableLineWidth: (_ = D.tableLineWidth) !== null && _ !== void 0 ? _ : 0,
                            tableLineColor: (J = D.tableLineColor) !== null && J !== void 0 ? J : 200,
                            horizontalPageBreak: I,
                            horizontalPageBreakRepeat: U,
                            horizontalPageBreakBehaviour: (W = D.horizontalPageBreakBehaviour) !== null && W !== void 0 ? W : "afterAllRows"
                        }
                    }

                    function N(z, D) {
                        var G = z.getLastAutoTable(),
                            tt = z.scaleFactor(),
                            st = z.pageNumber(),
                            Y = !1;
                        if (G && G.startPageNumber) {
                            var O = G.startPageNumber + G.pageNumber - 1;
                            Y = O === st
                        }
                        return typeof D == "number" ? D : (D == null || D === !1) && Y && G ? .finalY != null ? G.finalY + 20 / tt : null
                    }

                    function v(z, D, G) {
                        var tt = D.head || [],
                            st = D.body || [],
                            Y = D.foot || [];
                        if (D.html) {
                            var O = D.includeHiddenHtml;
                            if (G) {
                                var at = (0, g.parseHtml)(z, D.html, G, O, D.useCss) || {};
                                tt = at.head || tt, st = at.body || tt, Y = at.foot || tt
                            } else console.error("Cannot parse html in non browser environment")
                        }
                        var P = D.columns || R(tt, st, Y);
                        return {
                            columns: P,
                            head: tt,
                            body: st,
                            foot: Y
                        }
                    }

                    function R(z, D, G) {
                        var tt = z[0] || D[0] || G[0] || [],
                            st = [];
                        return Object.keys(tt).filter(function(Y) {
                            return Y !== "_element"
                        }).forEach(function(Y) {
                            var O = 1,
                                at;
                            Array.isArray(tt) ? at = tt[parseInt(Y)] : at = tt[Y], typeof at == "object" && !Array.isArray(at) && (O = at ? .colSpan || 1);
                            for (var P = 0; P < O; P++) {
                                var M = void 0;
                                Array.isArray(tt) ? M = st.length : M = Y + (P > 0 ? "_".concat(P) : "");
                                var F = {
                                    dataKey: M
                                };
                                st.push(F)
                            }
                        }), st
                    }
                }),
                376: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.createTable = C;
                    var h = f(28),
                        c = f(643),
                        g = f(524),
                        w = f(176),
                        m = f(152);

                    function C(z, D) {
                        var G = new c.DocHandler(z),
                            tt = d(D, G.scaleFactor()),
                            st = new g.Table(D, tt);
                        return (0, m.calculateWidths)(G, st), G.applyStyles(G.userStyles), st
                    }

                    function d(z, D) {
                        var G = z.content,
                            tt = v(G.columns);
                        if (G.head.length === 0) {
                            var st = A(tt, "head");
                            st && G.head.push(st)
                        }
                        if (G.foot.length === 0) {
                            var st = A(tt, "foot");
                            st && G.foot.push(st)
                        }
                        var Y = z.settings.theme,
                            O = z.styles;
                        return {
                            columns: tt,
                            head: B("head", G.head, tt, O, Y, D),
                            body: B("body", G.body, tt, O, Y, D),
                            foot: B("foot", G.foot, tt, O, Y, D)
                        }
                    }

                    function B(z, D, G, tt, st, Y) {
                        var O = {},
                            at = D.map(function(P, M) {
                                for (var F = 0, _ = {}, J = 0, W = 0, nt = 0, X = G; nt < X.length; nt++) {
                                    var et = X[nt];
                                    if (O[et.index] == null || O[et.index].left === 0)
                                        if (W === 0) {
                                            var ht = void 0;
                                            Array.isArray(P) ? ht = P[et.index - J - F] : ht = P[et.dataKey];
                                            var ct = {};
                                            typeof ht == "object" && !Array.isArray(ht) && (ct = ht ? .styles || {});
                                            var L = R(z, et, M, st, tt, Y, ct),
                                                I = new g.Cell(ht, L, z);
                                            _[et.dataKey] = I, _[et.index] = I, W = I.colSpan - 1, O[et.index] = {
                                                left: I.rowSpan - 1,
                                                times: W
                                            }
                                        } else W--, J++;
                                    else O[et.index].left--, W = O[et.index].times, F++
                                }
                                return new g.Row(P, M, z, _)
                            });
                        return at
                    }

                    function A(z, D) {
                        var G = {};
                        return z.forEach(function(tt) {
                            if (tt.raw != null) {
                                var st = N(D, tt.raw);
                                st != null && (G[tt.dataKey] = st)
                            }
                        }), Object.keys(G).length > 0 ? G : null
                    }

                    function N(z, D) {
                        if (z === "head") {
                            if (typeof D == "object") return D.header || null;
                            if (typeof D == "string" || typeof D == "number") return D
                        } else if (z === "foot" && typeof D == "object") return D.footer;
                        return null
                    }

                    function v(z) {
                        return z.map(function(D, G) {
                            var tt, st;
                            return typeof D == "object" ? st = (tt = D.dataKey) !== null && tt !== void 0 ? tt : G : st = G, new g.Column(st, D, G)
                        })
                    }

                    function R(z, D, G, tt, st, Y, O) {
                        var at = (0, h.getTheme)(tt),
                            P;
                        z === "head" ? P = st.headStyles : z === "body" ? P = st.bodyStyles : z === "foot" && (P = st.footStyles);
                        var M = (0, w.assign)({}, at.table, at[z], st.styles, P),
                            F = st.columnStyles[D.dataKey] || st.columnStyles[D.index] || {},
                            _ = z === "body" ? F : {},
                            J = z === "body" && G % 2 === 0 ? (0, w.assign)({}, at.alternateRow, st.alternateRowStyles) : {},
                            W = (0, h.defaultStyles)(Y),
                            nt = (0, w.assign)({}, W, M, J, _);
                        return (0, w.assign)(nt, O)
                    }
                }),
                460: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.parseCss = c;
                    var h = f(799);

                    function c(d, B, A, N, v) {
                        var R = {},
                            z = 1.3333333333333333,
                            D = w(B, function(W) {
                                return v.getComputedStyle(W).backgroundColor
                            });
                        D != null && (R.fillColor = D);
                        var G = w(B, function(W) {
                            return v.getComputedStyle(W).color
                        });
                        G != null && (R.textColor = G);
                        var tt = C(N, A);
                        tt && (R.cellPadding = tt);
                        var st = "borderTopColor",
                            Y = z * A,
                            O = N.borderTopWidth;
                        if (N.borderBottomWidth === O && N.borderRightWidth === O && N.borderLeftWidth === O) {
                            var at = (parseFloat(O) || 0) / Y;
                            at && (R.lineWidth = at)
                        } else R.lineWidth = {
                            top: (parseFloat(N.borderTopWidth) || 0) / Y,
                            right: (parseFloat(N.borderRightWidth) || 0) / Y,
                            bottom: (parseFloat(N.borderBottomWidth) || 0) / Y,
                            left: (parseFloat(N.borderLeftWidth) || 0) / Y
                        }, R.lineWidth.top || (R.lineWidth.right ? st = "borderRightColor" : R.lineWidth.bottom ? st = "borderBottomColor" : R.lineWidth.left && (st = "borderLeftColor"));
                        var P = w(B, function(W) {
                            return v.getComputedStyle(W)[st]
                        });
                        P != null && (R.lineColor = P);
                        var M = ["left", "right", "center", "justify"];
                        M.indexOf(N.textAlign) !== -1 && (R.halign = N.textAlign), M = ["middle", "bottom", "top"], M.indexOf(N.verticalAlign) !== -1 && (R.valign = N.verticalAlign);
                        var F = parseInt(N.fontSize || "");
                        isNaN(F) || (R.fontSize = F / z);
                        var _ = g(N);
                        _ && (R.fontStyle = _);
                        var J = (N.fontFamily || "").toLowerCase();
                        return d.indexOf(J) !== -1 && (R.font = J), R
                    }

                    function g(d) {
                        var B = "";
                        return (d.fontWeight === "bold" || d.fontWeight === "bolder" || parseInt(d.fontWeight) >= 700) && (B = "bold"), (d.fontStyle === "italic" || d.fontStyle === "oblique") && (B += "italic"), B
                    }

                    function w(d, B) {
                        var A = m(d, B);
                        if (!A) return null;
                        var N = A.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
                        if (!N || !Array.isArray(N)) return null;
                        var v = [parseInt(N[1]), parseInt(N[2]), parseInt(N[3])],
                            R = parseInt(N[4]);
                        return R === 0 || isNaN(v[0]) || isNaN(v[1]) || isNaN(v[2]) ? null : v
                    }

                    function m(d, B) {
                        var A = B(d);
                        return A === "rgba(0, 0, 0, 0)" || A === "transparent" || A === "initial" || A === "inherit" ? d.parentElement == null ? null : m(d.parentElement, B) : A
                    }

                    function C(d, B) {
                        var A = [d.paddingTop, d.paddingRight, d.paddingBottom, d.paddingLeft],
                            N = 96 / (72 / B),
                            v = (parseInt(d.lineHeight) - parseInt(d.fontSize)) / B / 2,
                            R = A.map(function(D) {
                                return parseInt(D || "0") / N
                            }),
                            z = (0, h.parseSpacing)(R, 0);
                        return v > z.top && (z.top = v), v > z.bottom && (z.bottom = v), z
                    }
                }),
                524: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.Column = o.Cell = o.Row = o.Table = void 0;
                    var h = f(799),
                        c = f(28),
                        g = f(601),
                        w = (function() {
                            function B(A, N) {
                                this.pageNumber = 1, this.id = A.id, this.settings = A.settings, this.styles = A.styles, this.hooks = A.hooks, this.columns = N.columns, this.head = N.head, this.body = N.body, this.foot = N.foot
                            }
                            return B.prototype.getHeadHeight = function(A) {
                                return this.head.reduce(function(N, v) {
                                    return N + v.getMaxCellHeight(A)
                                }, 0)
                            }, B.prototype.getFootHeight = function(A) {
                                return this.foot.reduce(function(N, v) {
                                    return N + v.getMaxCellHeight(A)
                                }, 0)
                            }, B.prototype.allRows = function() {
                                return this.head.concat(this.body).concat(this.foot)
                            }, B.prototype.callCellHooks = function(A, N, v, R, z, D) {
                                for (var G = 0, tt = N; G < tt.length; G++) {
                                    var st = tt[G],
                                        Y = new g.CellHookData(A, this, v, R, z, D),
                                        O = st(Y) === !1;
                                    if (v.text = Array.isArray(v.text) ? v.text : [v.text], O) return !1
                                }
                                return !0
                            }, B.prototype.callEndPageHooks = function(A, N) {
                                A.applyStyles(A.userStyles);
                                for (var v = 0, R = this.hooks.didDrawPage; v < R.length; v++) {
                                    var z = R[v];
                                    z(new g.HookData(A, this, N))
                                }
                            }, B.prototype.callWillDrawPageHooks = function(A, N) {
                                for (var v = 0, R = this.hooks.willDrawPage; v < R.length; v++) {
                                    var z = R[v];
                                    z(new g.HookData(A, this, N))
                                }
                            }, B.prototype.getWidth = function(A) {
                                if (typeof this.settings.tableWidth == "number") return this.settings.tableWidth;
                                if (this.settings.tableWidth === "wrap") {
                                    var N = this.columns.reduce(function(R, z) {
                                        return R + z.wrappedWidth
                                    }, 0);
                                    return N
                                } else {
                                    var v = this.settings.margin;
                                    return A - v.left - v.right
                                }
                            }, B
                        })();
                    o.Table = w;
                    var m = (function() {
                        function B(A, N, v, R, z) {
                            z === void 0 && (z = !1), this.height = 0, this.raw = A, A instanceof c.HtmlRowInput && (this.raw = A._element, this.element = A._element), this.index = N, this.section = v, this.cells = R, this.spansMultiplePages = z
                        }
                        return B.prototype.getMaxCellHeight = function(A) {
                            var N = this;
                            return A.reduce(function(v, R) {
                                var z;
                                return Math.max(v, ((z = N.cells[R.index]) === null || z === void 0 ? void 0 : z.height) || 0)
                            }, 0)
                        }, B.prototype.hasRowSpan = function(A) {
                            var N = this;
                            return A.filter(function(v) {
                                var R = N.cells[v.index];
                                return R ? R.rowSpan > 1 : !1
                            }).length > 0
                        }, B.prototype.canEntireRowFit = function(A, N) {
                            return this.getMaxCellHeight(N) <= A
                        }, B.prototype.getMinimumRowHeight = function(A, N) {
                            var v = this;
                            return A.reduce(function(R, z) {
                                var D = v.cells[z.index];
                                if (!D) return 0;
                                var G = N.getLineHeight(D.styles.fontSize),
                                    tt = D.padding("vertical"),
                                    st = tt + G;
                                return st > R ? st : R
                            }, 0)
                        }, B
                    })();
                    o.Row = m;
                    var C = (function() {
                        function B(A, N, v) {
                            var R;
                            this.contentHeight = 0, this.contentWidth = 0, this.wrappedWidth = 0, this.minReadableWidth = 0, this.minWidth = 0, this.width = 0, this.height = 0, this.x = 0, this.y = 0, this.styles = N, this.section = v, this.raw = A;
                            var z = A;
                            A != null && typeof A == "object" && !Array.isArray(A) ? (this.rowSpan = A.rowSpan || 1, this.colSpan = A.colSpan || 1, z = (R = A.content) !== null && R !== void 0 ? R : A, A._element && (this.raw = A._element)) : (this.rowSpan = 1, this.colSpan = 1);
                            var D = z != null ? "" + z : "",
                                G = /\r\n|\r|\n/g;
                            this.text = D.split(G)
                        }
                        return B.prototype.getTextPos = function() {
                            var A;
                            if (this.styles.valign === "top") A = this.y + this.padding("top");
                            else if (this.styles.valign === "bottom") A = this.y + this.height - this.padding("bottom");
                            else {
                                var N = this.height - this.padding("vertical");
                                A = this.y + N / 2 + this.padding("top")
                            }
                            var v;
                            if (this.styles.halign === "right") v = this.x + this.width - this.padding("right");
                            else if (this.styles.halign === "center") {
                                var R = this.width - this.padding("horizontal");
                                v = this.x + R / 2 + this.padding("left")
                            } else v = this.x + this.padding("left");
                            return {
                                x: v,
                                y: A
                            }
                        }, B.prototype.getContentHeight = function(A, N) {
                            N === void 0 && (N = 1.15);
                            var v = Array.isArray(this.text) ? this.text.length : 1,
                                R = this.styles.fontSize / A * N,
                                z = v * R + this.padding("vertical");
                            return Math.max(z, this.styles.minCellHeight)
                        }, B.prototype.padding = function(A) {
                            var N = (0, h.parseSpacing)(this.styles.cellPadding, 0);
                            return A === "vertical" ? N.top + N.bottom : A === "horizontal" ? N.left + N.right : N[A]
                        }, B
                    })();
                    o.Cell = C;
                    var d = (function() {
                        function B(A, N, v) {
                            this.wrappedWidth = 0, this.minReadableWidth = 0, this.minWidth = 0, this.width = 0, this.dataKey = A, this.raw = N, this.index = v
                        }
                        return B.prototype.getMaxCustomCellWidth = function(A) {
                            for (var N = 0, v = 0, R = A.allRows(); v < R.length; v++) {
                                var z = R[v],
                                    D = z.cells[this.index];
                                D && typeof D.styles.cellWidth == "number" && (N = Math.max(N, D.styles.cellWidth))
                            }
                            return N
                        }, B
                    })();
                    o.Column = d
                }),
                601: (function(s, o) {
                    var f = this && this.__extends || (function() {
                        var g = function(w, m) {
                            return g = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(C, d) {
                                C.__proto__ = d
                            } || function(C, d) {
                                for (var B in d) Object.prototype.hasOwnProperty.call(d, B) && (C[B] = d[B])
                            }, g(w, m)
                        };
                        return function(w, m) {
                            if (typeof m != "function" && m !== null) throw new TypeError("Class extends value " + String(m) + " is not a constructor or null");
                            g(w, m);

                            function C() {
                                this.constructor = w
                            }
                            w.prototype = m === null ? Object.create(m) : (C.prototype = m.prototype, new C)
                        }
                    })();
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.CellHookData = o.HookData = void 0;
                    var h = (function() {
                        function g(w, m, C) {
                            this.table = m, this.pageNumber = m.pageNumber, this.settings = m.settings, this.cursor = C, this.doc = w.getDocument()
                        }
                        return g
                    })();
                    o.HookData = h;
                    var c = (function(g) {
                        f(w, g);

                        function w(m, C, d, B, A, N) {
                            var v = g.call(this, m, C, N) || this;
                            return v.cell = d, v.row = B, v.column = A, v.section = B.section, v
                        }
                        return w
                    })(h);
                    o.CellHookData = c
                }),
                626: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.calculateAllColumnsCanFitInPage = g;
                    var h = f(799);

                    function c(w, m, C) {
                        var d;
                        C === void 0 && (C = {});
                        var B = (0, h.getPageAvailableWidth)(w, m),
                            A = new Map,
                            N = [],
                            v = [],
                            R = [];
                        Array.isArray(m.settings.horizontalPageBreakRepeat) ? R = m.settings.horizontalPageBreakRepeat : (typeof m.settings.horizontalPageBreakRepeat == "string" || typeof m.settings.horizontalPageBreakRepeat == "number") && (R = [m.settings.horizontalPageBreakRepeat]), R.forEach(function(tt) {
                            var st = m.columns.find(function(Y) {
                                return Y.dataKey === tt || Y.index === tt
                            });
                            st && !A.has(st.index) && (A.set(st.index, !0), N.push(st.index), v.push(m.columns[st.index]), B -= st.wrappedWidth)
                        });
                        for (var z = !0, D = (d = C ? .start) !== null && d !== void 0 ? d : 0; D < m.columns.length;) {
                            if (A.has(D)) {
                                D++;
                                continue
                            }
                            var G = m.columns[D].wrappedWidth;
                            if (z || B >= G) z = !1, N.push(D), v.push(m.columns[D]), B -= G;
                            else break;
                            D++
                        }
                        return {
                            colIndexes: N,
                            columns: v,
                            lastIndex: D - 1
                        }
                    }

                    function g(w, m) {
                        for (var C = [], d = 0; d < m.columns.length; d++) {
                            var B = c(w, m, {
                                start: d
                            });
                            B.columns.length && (C.push(B), d = B.lastIndex)
                        }
                        return C
                    }
                }),
                639: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.applyPlugin = d;
                    var h = f(150),
                        c = f(643),
                        g = f(660),
                        w = f(371),
                        m = f(376),
                        C = f(789);

                    function d(B) {
                        B.API.autoTable = function() {
                            for (var A = [], N = 0; N < arguments.length; N++) A[N] = arguments[N];
                            var v = A[0],
                                R = (0, w.parseInput)(this, v),
                                z = (0, m.createTable)(this, R);
                            return (0, C.drawTable)(this, z), this
                        }, B.API.lastAutoTable = !1, B.API.autoTableText = function(A, N, v, R) {
                            (0, h.default)(A, N, v, R, this)
                        }, B.API.autoTableSetDefaults = function(A) {
                            return c.DocHandler.setDefaults(A, this), this
                        }, B.autoTableSetDefaults = function(A, N) {
                            c.DocHandler.setDefaults(A, N)
                        }, B.API.autoTableHtmlToJson = function(A, N) {
                            var v;
                            if (N === void 0 && (N = !1), typeof window > "u") return console.error("Cannot run autoTableHtmlToJson in non browser environment"), null;
                            var R = new c.DocHandler(this),
                                z = (0, g.parseHtml)(R, A, window, N, !1),
                                D = z.head,
                                G = z.body,
                                tt = ((v = D[0]) === null || v === void 0 ? void 0 : v.map(function(st) {
                                    return st.content
                                })) || [];
                            return {
                                columns: tt,
                                rows: G,
                                data: G
                            }
                        }
                    }
                }),
                643: (function(s, o) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.DocHandler = void 0;
                    var f = {},
                        h = (function() {
                            function c(g) {
                                this.jsPDFDocument = g, this.userStyles = {
                                    textColor: g.getTextColor ? this.jsPDFDocument.getTextColor() : 0,
                                    fontSize: g.internal.getFontSize(),
                                    fontStyle: g.internal.getFont().fontStyle,
                                    font: g.internal.getFont().fontName,
                                    lineWidth: g.getLineWidth ? this.jsPDFDocument.getLineWidth() : 0,
                                    lineColor: g.getDrawColor ? this.jsPDFDocument.getDrawColor() : 0
                                }
                            }
                            return c.setDefaults = function(g, w) {
                                w === void 0 && (w = null), w ? w.__autoTableDocumentDefaults = g : f = g
                            }, c.unifyColor = function(g) {
                                return Array.isArray(g) ? g : typeof g == "number" ? [g, g, g] : typeof g == "string" ? [g] : null
                            }, c.prototype.applyStyles = function(g, w) {
                                var m, C, d;
                                w === void 0 && (w = !1), g.fontStyle && this.jsPDFDocument.setFontStyle && this.jsPDFDocument.setFontStyle(g.fontStyle);
                                var B = this.jsPDFDocument.internal.getFont(),
                                    A = B.fontStyle,
                                    N = B.fontName;
                                if (g.font && (N = g.font), g.fontStyle) {
                                    A = g.fontStyle;
                                    var v = this.getFontList()[N];
                                    v && v.indexOf(A) === -1 && this.jsPDFDocument.setFontStyle && (this.jsPDFDocument.setFontStyle(v[0]), A = v[0])
                                }
                                if (this.jsPDFDocument.setFont(N, A), g.fontSize && this.jsPDFDocument.setFontSize(g.fontSize), !w) {
                                    var R = c.unifyColor(g.fillColor);
                                    R && (m = this.jsPDFDocument).setFillColor.apply(m, R), R = c.unifyColor(g.textColor), R && (C = this.jsPDFDocument).setTextColor.apply(C, R), R = c.unifyColor(g.lineColor), R && (d = this.jsPDFDocument).setDrawColor.apply(d, R), typeof g.lineWidth == "number" && this.jsPDFDocument.setLineWidth(g.lineWidth)
                                }
                            }, c.prototype.splitTextToSize = function(g, w, m) {
                                return this.jsPDFDocument.splitTextToSize(g, w, m)
                            }, c.prototype.rect = function(g, w, m, C, d) {
                                return this.jsPDFDocument.rect(g, w, m, C, d)
                            }, c.prototype.getLastAutoTable = function() {
                                return this.jsPDFDocument.lastAutoTable || null
                            }, c.prototype.getTextWidth = function(g) {
                                return this.jsPDFDocument.getTextWidth(g)
                            }, c.prototype.getDocument = function() {
                                return this.jsPDFDocument
                            }, c.prototype.setPage = function(g) {
                                this.jsPDFDocument.setPage(g)
                            }, c.prototype.addPage = function() {
                                return this.jsPDFDocument.addPage()
                            }, c.prototype.getFontList = function() {
                                return this.jsPDFDocument.getFontList()
                            }, c.prototype.getGlobalOptions = function() {
                                return f || {}
                            }, c.prototype.getDocumentOptions = function() {
                                return this.jsPDFDocument.__autoTableDocumentDefaults || {}
                            }, c.prototype.pageSize = function() {
                                var g = this.jsPDFDocument.internal.pageSize;
                                return g.width == null && (g = {
                                    width: g.getWidth(),
                                    height: g.getHeight()
                                }), g
                            }, c.prototype.scaleFactor = function() {
                                return this.jsPDFDocument.internal.scaleFactor
                            }, c.prototype.getLineHeightFactor = function() {
                                var g = this.jsPDFDocument;
                                return g.getLineHeightFactor ? g.getLineHeightFactor() : 1.15
                            }, c.prototype.getLineHeight = function(g) {
                                return g / this.scaleFactor() * this.getLineHeightFactor()
                            }, c.prototype.pageNumber = function() {
                                var g = this.jsPDFDocument.internal.getCurrentPageInfo();
                                return g ? g.pageNumber : this.jsPDFDocument.internal.getNumberOfPages()
                            }, c
                        })();
                    o.DocHandler = h
                }),
                660: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.parseHtml = g;
                    var h = f(28),
                        c = f(460);

                    function g(C, d, B, A, N) {
                        var v, R;
                        A === void 0 && (A = !1), N === void 0 && (N = !1);
                        var z;
                        typeof d == "string" ? z = B.document.querySelector(d) : z = d;
                        var D = Object.keys(C.getFontList()),
                            G = C.scaleFactor(),
                            tt = [],
                            st = [],
                            Y = [];
                        if (!z) return console.error("Html table could not be found with input: ", d), {
                            head: tt,
                            body: st,
                            foot: Y
                        };
                        for (var O = 0; O < z.rows.length; O++) {
                            var at = z.rows[O],
                                P = (R = (v = at ? .parentElement) === null || v === void 0 ? void 0 : v.tagName) === null || R === void 0 ? void 0 : R.toLowerCase(),
                                M = w(D, G, B, at, A, N);
                            M && (P === "thead" ? tt.push(M) : P === "tfoot" ? Y.push(M) : st.push(M))
                        }
                        return {
                            head: tt,
                            body: st,
                            foot: Y
                        }
                    }

                    function w(C, d, B, A, N, v) {
                        for (var R = new h.HtmlRowInput(A), z = 0; z < A.cells.length; z++) {
                            var D = A.cells[z],
                                G = B.getComputedStyle(D);
                            if (N || G.display !== "none") {
                                var tt = void 0;
                                v && (tt = (0, c.parseCss)(C, D, d, G, B)), R.push({
                                    rowSpan: D.rowSpan,
                                    colSpan: D.colSpan,
                                    styles: tt,
                                    _element: D,
                                    content: m(D)
                                })
                            }
                        }
                        var st = B.getComputedStyle(A);
                        if (R.length > 0 && (N || st.display !== "none")) return R
                    }

                    function m(C) {
                        var d = C.cloneNode(!0);
                        return d.innerHTML = d.innerHTML.replace(/\n/g, "").replace(/ +/g, " "), d.innerHTML = d.innerHTML.split(/<br.*?>/).map(function(B) {
                            return B.trim()
                        }).join(`
`), d.innerText || d.textContent || ""
                    }
                }),
                789: (function(s, o, f) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.drawTable = d, o.addPage = P;
                    var h = f(150),
                        c = f(799),
                        g = f(643),
                        w = f(524),
                        m = f(176),
                        C = f(626);

                    function d(F, _) {
                        var J = _.settings,
                            W = J.startY,
                            nt = J.margin,
                            X = {
                                x: nt.left,
                                y: W
                            },
                            et = _.getHeadHeight(_.columns) + _.getFootHeight(_.columns),
                            ht = W + nt.bottom + et;
                        if (J.pageBreak === "avoid") {
                            var ct = _.body,
                                L = ct.reduce(function(Z, Q) {
                                    return Z + Q.height
                                }, 0);
                            ht += L
                        }
                        var I = new g.DocHandler(F);
                        (J.pageBreak === "always" || J.startY != null && ht > I.pageSize().height) && (M(I), X.y = nt.top), _.callWillDrawPageHooks(I, X);
                        var U = (0, m.assign)({}, X);
                        _.startPageNumber = I.pageNumber(), J.horizontalPageBreak ? B(I, _, U, X) : (I.applyStyles(I.userStyles), (J.showHead === "firstPage" || J.showHead === "everyPage") && _.head.forEach(function(Z) {
                            return st(I, _, Z, X, _.columns)
                        }), I.applyStyles(I.userStyles), _.body.forEach(function(Z, Q) {
                            var ut = Q === _.body.length - 1;
                            tt(I, _, Z, ut, U, X, _.columns)
                        }), I.applyStyles(I.userStyles), (J.showFoot === "lastPage" || J.showFoot === "everyPage") && _.foot.forEach(function(Z) {
                            return st(I, _, Z, X, _.columns)
                        })), (0, c.addTableBorder)(I, _, U, X), _.callEndPageHooks(I, X), _.finalY = X.y, F.lastAutoTable = _, I.applyStyles(I.userStyles)
                    }

                    function B(F, _, J, W) {
                        var nt = (0, C.calculateAllColumnsCanFitInPage)(F, _),
                            X = _.settings;
                        if (X.horizontalPageBreakBehaviour === "afterAllRows") nt.forEach(function(L, I) {
                            F.applyStyles(F.userStyles), I > 0 ? P(F, _, J, W, L.columns, !0) : A(F, _, W, L.columns), N(F, _, J, W, L.columns), R(F, _, W, L.columns)
                        });
                        else
                            for (var et = -1, ht = nt[0], ct = function() {
                                    var L = et;
                                    if (ht) {
                                        F.applyStyles(F.userStyles);
                                        var I = ht.columns;
                                        et >= 0 ? P(F, _, J, W, I, !0) : A(F, _, W, I), L = v(F, _, et + 1, W, I), R(F, _, W, I)
                                    }
                                    var U = L - et;
                                    nt.slice(1).forEach(function(Z) {
                                        F.applyStyles(F.userStyles), P(F, _, J, W, Z.columns, !0), v(F, _, et + 1, W, Z.columns, U), R(F, _, W, Z.columns)
                                    }), et = L
                                }; et < _.body.length - 1;) ct()
                    }

                    function A(F, _, J, W) {
                        var nt = _.settings;
                        F.applyStyles(F.userStyles), (nt.showHead === "firstPage" || nt.showHead === "everyPage") && _.head.forEach(function(X) {
                            return st(F, _, X, J, W)
                        })
                    }

                    function N(F, _, J, W, nt) {
                        F.applyStyles(F.userStyles), _.body.forEach(function(X, et) {
                            var ht = et === _.body.length - 1;
                            tt(F, _, X, ht, J, W, nt)
                        })
                    }

                    function v(F, _, J, W, nt, X) {
                        F.applyStyles(F.userStyles), X = X ? ? _.body.length;
                        var et = Math.min(J + X, _.body.length),
                            ht = -1;
                        return _.body.slice(J, et).forEach(function(ct, L) {
                            var I = J + L === _.body.length - 1,
                                U = at(F, _, I, W);
                            ct.canEntireRowFit(U, nt) && (st(F, _, ct, W, nt), ht = J + L)
                        }), ht
                    }

                    function R(F, _, J, W) {
                        var nt = _.settings;
                        F.applyStyles(F.userStyles), (nt.showFoot === "lastPage" || nt.showFoot === "everyPage") && _.foot.forEach(function(X) {
                            return st(F, _, X, J, W)
                        })
                    }

                    function z(F, _, J) {
                        var W = J.getLineHeight(F.styles.fontSize),
                            nt = F.padding("vertical"),
                            X = Math.floor((_ - nt) / W);
                        return Math.max(0, X)
                    }

                    function D(F, _, J, W) {
                        var nt = {};
                        F.spansMultiplePages = !0, F.height = 0;
                        for (var X = 0, et = 0, ht = J.columns; et < ht.length; et++) {
                            var ct = ht[et],
                                L = F.cells[ct.index];
                            if (L) {
                                Array.isArray(L.text) || (L.text = [L.text]);
                                var I = new w.Cell(L.raw, L.styles, L.section);
                                I = (0, m.assign)(I, L), I.text = [];
                                var U = z(L, _, W);
                                L.text.length > U && (I.text = L.text.splice(U, L.text.length));
                                var Z = W.scaleFactor(),
                                    Q = W.getLineHeightFactor();
                                L.contentHeight = L.getContentHeight(Z, Q), L.contentHeight >= _ && (L.contentHeight = _, I.styles.minCellHeight -= _), L.contentHeight > F.height && (F.height = L.contentHeight), I.contentHeight = I.getContentHeight(Z, Q), I.contentHeight > X && (X = I.contentHeight), nt[ct.index] = I
                            }
                        }
                        var ut = new w.Row(F.raw, -1, F.section, nt, !0);
                        ut.height = X;
                        for (var dt = 0, ft = J.columns; dt < ft.length; dt++) {
                            var ct = ft[dt],
                                I = ut.cells[ct.index];
                            I && (I.height = ut.height);
                            var L = F.cells[ct.index];
                            L && (L.height = F.height)
                        }
                        return ut
                    }

                    function G(F, _, J, W) {
                        var nt = F.pageSize().height,
                            X = W.settings.margin,
                            et = X.top + X.bottom,
                            ht = nt - et;
                        _.section === "body" && (ht -= W.getHeadHeight(W.columns) + W.getFootHeight(W.columns));
                        var ct = _.getMinimumRowHeight(W.columns, F),
                            L = ct < J;
                        if (ct > ht) return console.error("Will not be able to print row ".concat(_.index, " correctly since it's minimum height is larger than page height")), !0;
                        if (!L) return !1;
                        var I = _.hasRowSpan(W.columns),
                            U = _.getMaxCellHeight(W.columns) > ht;
                        return U ? (I && console.error("The content of row ".concat(_.index, " will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")), !0) : !(I || W.settings.rowPageBreak === "avoid")
                    }

                    function tt(F, _, J, W, nt, X, et) {
                        var ht = at(F, _, W, X);
                        if (J.canEntireRowFit(ht, et)) st(F, _, J, X, et);
                        else if (G(F, J, ht, _)) {
                            var ct = D(J, ht, _, F);
                            st(F, _, J, X, et), P(F, _, nt, X, et), tt(F, _, ct, W, nt, X, et)
                        } else P(F, _, nt, X, et), tt(F, _, J, W, nt, X, et)
                    }

                    function st(F, _, J, W, nt) {
                        W.x = _.settings.margin.left;
                        for (var X = 0, et = nt; X < et.length; X++) {
                            var ht = et[X],
                                ct = J.cells[ht.index];
                            if (!ct) {
                                W.x += ht.width;
                                continue
                            }
                            F.applyStyles(ct.styles), ct.x = W.x, ct.y = W.y;
                            var L = _.callCellHooks(F, _.hooks.willDrawCell, ct, J, ht, W);
                            if (L === !1) {
                                W.x += ht.width;
                                continue
                            }
                            Y(F, ct, W);
                            var I = ct.getTextPos();
                            (0, h.default)(ct.text, I.x, I.y, {
                                halign: ct.styles.halign,
                                valign: ct.styles.valign,
                                maxWidth: Math.ceil(ct.width - ct.padding("left") - ct.padding("right"))
                            }, F.getDocument()), _.callCellHooks(F, _.hooks.didDrawCell, ct, J, ht, W), W.x += ht.width
                        }
                        W.y += J.height
                    }

                    function Y(F, _, J) {
                        var W = _.styles;
                        if (F.getDocument().setFillColor(F.getDocument().getFillColor()), typeof W.lineWidth == "number") {
                            var nt = (0, c.getFillStyle)(W.lineWidth, W.fillColor);
                            nt && F.rect(_.x, J.y, _.width, _.height, nt)
                        } else typeof W.lineWidth == "object" && (W.fillColor && F.rect(_.x, J.y, _.width, _.height, "F"), O(F, _, J, W.lineWidth))
                    }

                    function O(F, _, J, W) {
                        var nt, X, et, ht;
                        W.top && (nt = J.x, X = J.y, et = J.x + _.width, ht = J.y, W.right && (et += .5 * W.right), W.left && (nt -= .5 * W.left), ct(W.top, nt, X, et, ht)), W.bottom && (nt = J.x, X = J.y + _.height, et = J.x + _.width, ht = J.y + _.height, W.right && (et += .5 * W.right), W.left && (nt -= .5 * W.left), ct(W.bottom, nt, X, et, ht)), W.left && (nt = J.x, X = J.y, et = J.x, ht = J.y + _.height, W.top && (X -= .5 * W.top), W.bottom && (ht += .5 * W.bottom), ct(W.left, nt, X, et, ht)), W.right && (nt = J.x + _.width, X = J.y, et = J.x + _.width, ht = J.y + _.height, W.top && (X -= .5 * W.top), W.bottom && (ht += .5 * W.bottom), ct(W.right, nt, X, et, ht));

                        function ct(L, I, U, Z, Q) {
                            F.getDocument().setLineWidth(L), F.getDocument().line(I, U, Z, Q, "S")
                        }
                    }

                    function at(F, _, J, W) {
                        var nt = _.settings.margin.bottom,
                            X = _.settings.showFoot;
                        return (X === "everyPage" || X === "lastPage" && J) && (nt += _.getFootHeight(_.columns)), F.pageSize().height - W.y - nt
                    }

                    function P(F, _, J, W, nt, X) {
                        nt === void 0 && (nt = []), X === void 0 && (X = !1), F.applyStyles(F.userStyles), _.settings.showFoot === "everyPage" && !X && _.foot.forEach(function(ht) {
                            return st(F, _, ht, W, nt)
                        }), _.callEndPageHooks(F, W);
                        var et = _.settings.margin;
                        (0, c.addTableBorder)(F, _, J, W), M(F), _.pageNumber++, W.x = et.left, W.y = et.top, J.y = et.top, _.callWillDrawPageHooks(F, W), _.settings.showHead === "everyPage" && (_.head.forEach(function(ht) {
                            return st(F, _, ht, W, nt)
                        }), F.applyStyles(F.userStyles))
                    }

                    function M(F) {
                        var _ = F.pageNumber();
                        F.setPage(_ + 1);
                        var J = F.pageNumber();
                        return J === _ ? (F.addPage(), !0) : !1
                    }
                }),
                799: (function(s, o) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.getStringWidth = f, o.addTableBorder = h, o.getFillStyle = c, o.parseSpacing = g, o.getPageAvailableWidth = w;

                    function f(m, C, d) {
                        d.applyStyles(C, !0);
                        var B = Array.isArray(m) ? m : [m],
                            A = B.map(function(N) {
                                return d.getTextWidth(N)
                            }).reduce(function(N, v) {
                                return Math.max(N, v)
                            }, 0);
                        return A
                    }

                    function h(m, C, d, B) {
                        var A = C.settings.tableLineWidth,
                            N = C.settings.tableLineColor;
                        m.applyStyles({
                            lineWidth: A,
                            lineColor: N
                        });
                        var v = c(A, !1);
                        v && m.rect(d.x, d.y, C.getWidth(m.pageSize().width), B.y - d.y, v)
                    }

                    function c(m, C) {
                        var d = m > 0,
                            B = C || C === 0;
                        return d && B ? "DF" : d ? "S" : B ? "F" : null
                    }

                    function g(m, C) {
                        var d, B, A, N;
                        if (m = m || C, Array.isArray(m)) {
                            if (m.length >= 4) return {
                                top: m[0],
                                right: m[1],
                                bottom: m[2],
                                left: m[3]
                            };
                            if (m.length === 3) return {
                                top: m[0],
                                right: m[1],
                                bottom: m[2],
                                left: m[1]
                            };
                            if (m.length === 2) return {
                                top: m[0],
                                right: m[1],
                                bottom: m[0],
                                left: m[1]
                            };
                            m.length === 1 ? m = m[0] : m = C
                        }
                        return typeof m == "object" ? (typeof m.vertical == "number" && (m.top = m.vertical, m.bottom = m.vertical), typeof m.horizontal == "number" && (m.right = m.horizontal, m.left = m.horizontal), {
                            left: (d = m.left) !== null && d !== void 0 ? d : C,
                            top: (B = m.top) !== null && B !== void 0 ? B : C,
                            right: (A = m.right) !== null && A !== void 0 ? A : C,
                            bottom: (N = m.bottom) !== null && N !== void 0 ? N : C
                        }) : (typeof m != "number" && (m = C), {
                            top: m,
                            right: m,
                            bottom: m,
                            left: m
                        })
                    }

                    function w(m, C) {
                        var d = g(C.settings.margin, 0);
                        return m.pageSize().width - (d.left + d.right)
                    }
                })
            },
            e = {};

        function i(s) {
            var o = e[s];
            if (o !== void 0) return o.exports;
            var f = e[s] = {
                exports: {}
            };
            return n[s].call(f.exports, f, f.exports, i), f.exports
        }
        var a = {};
        return (function() {
            var s = a,
                o;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.Table = s.Row = s.HookData = s.Column = s.CellHookData = s.Cell = s.applyPlugin = void 0, s.autoTable = C, s.__createTable = d, s.__drawTable = B;
            var f = i(639);
            Object.defineProperty(s, "applyPlugin", {
                enumerable: !0,
                get: function() {
                    return f.applyPlugin
                }
            });
            var h = i(601);
            Object.defineProperty(s, "CellHookData", {
                enumerable: !0,
                get: function() {
                    return h.CellHookData
                }
            }), Object.defineProperty(s, "HookData", {
                enumerable: !0,
                get: function() {
                    return h.HookData
                }
            });
            var c = i(371),
                g = i(524);
            Object.defineProperty(s, "Cell", {
                enumerable: !0,
                get: function() {
                    return g.Cell
                }
            }), Object.defineProperty(s, "Column", {
                enumerable: !0,
                get: function() {
                    return g.Column
                }
            }), Object.defineProperty(s, "Row", {
                enumerable: !0,
                get: function() {
                    return g.Row
                }
            }), Object.defineProperty(s, "Table", {
                enumerable: !0,
                get: function() {
                    return g.Table
                }
            });
            var w = i(376),
                m = i(789);

            function C(v, R) {
                var z = (0, c.parseInput)(v, R),
                    D = (0, w.createTable)(v, z);
                (0, m.drawTable)(v, D)
            }

            function d(v, R) {
                var z = (0, c.parseInput)(v, R);
                return (0, w.createTable)(v, z)
            }

            function B(v, R) {
                (0, m.drawTable)(v, R)
            }
            try {
                if (typeof window < "u" && window) {
                    var A = window,
                        N = A.jsPDF || ((o = A.jspdf) === null || o === void 0 ? void 0 : o.jsPDF);
                    N && (0, f.applyPlugin)(N)
                }
            } catch (v) {
                console.error("Could not apply autoTable plugin", v)
            }
            s.default = C
        })(), a
    })()
});