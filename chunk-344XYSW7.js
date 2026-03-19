import {
    Nc as t
} from "./chunk-5MZXJYZL.js";
var r = {
        request: t("[declaration] Get session for application structure"),
        requestFail: t("[declaration] Get session for application structure fail"),
        requestSuccess: t("[declaration] Get session for application structure success"),
        requestClear: t("[declaration] Get session for application structure clear")
    },
    c = class {
        constructor() {
            this.type = r.request
        }
    },
    l = class {
        constructor(s) {
            this.payload = s, this.type = r.requestSuccess
        }
    },
    p = class {
        constructor(s) {
            this.payload = s, this.type = r.requestFail
        }
    };
var a = {
        request: t("[declaration] Get student type for declaration type"),
        requestFail: t("[declaration] Get student type for declaration type fail"),
        requestSuccess: t("[declaration] Get student type for declaration type success"),
        requestClear: t("[declaration] Get student type for declaration type clear")
    },
    u = class {
        constructor() {
            this.type = a.request
        }
    },
    i = class {
        constructor(s) {
            this.payload = s, this.type = a.requestSuccess
        }
    },
    d = class {
        constructor(s) {
            this.payload = s, this.type = a.requestFail
        }
    };
var o = {
        request: t("[declaration] Get declaration type"),
        requestFail: t("[declaration] Get declaration type fail"),
        requestSuccess: t("[declaration] Get declaration type success"),
        requestClear: t("[declaration] Get declaration type clear")
    },
    y = class {
        constructor(s) {
            this.payload = s, this.type = o.request
        }
    },
    q = class {
        constructor(s) {
            this.payload = s, this.type = o.requestSuccess
        }
    },
    h = class {
        constructor(s) {
            this.payload = s, this.type = o.requestFail
        }
    };
export {
    r as a, c as b, l as c, p as d, u as e, i as f, d as g, y as h, q as i, h as j
};