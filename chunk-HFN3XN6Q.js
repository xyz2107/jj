import {
    Nc as e
} from "./chunk-5MZXJYZL.js";
var r = {
        request: e("[declaration] Get additional exam info for exam"),
        requestFail: e("[declaration] Get additional exam info for exam fail"),
        requestSuccess: e("[declaration] Get additional exam for exam info success"),
        requestClear: e("[declaration] Get additional exam for exam info clear")
    },
    o = class {
        constructor() {
            this.type = r.request
        }
    },
    c = class {
        constructor(t) {
            this.payload = t, this.type = r.requestSuccess
        }
    },
    l = class {
        constructor(t) {
            this.payload = t, this.type = r.requestFail
        }
    };
var a = {
        request: e("[declaration] download attachement declaration"),
        requestFail: e("[declaration] download attachement declaration fail"),
        requestSuccess: e("[declaration] download attachement declaration success"),
        requestClear: e("[declaration] download attachement declaration clear")
    },
    i = class {
        constructor(t) {
            this.payload = t, this.type = a.request
        }
    },
    p = class {
        constructor(t) {
            this.payload = t, this.type = a.requestSuccess
        }
    },
    u = class {
        constructor(t) {
            this.payload = t, this.type = a.requestFail
        }
    };
export {
    r as a, o as b, c, l as d, a as e, i as f, p as g, u as h
};