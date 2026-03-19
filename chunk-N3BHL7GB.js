import {
    Dg as s,
    Y as o,
    xa as n
} from "./chunk-5MZXJYZL.js";
import {
    a as l
} from "./chunk-CL3ZJM44.js";
import {
    f,
    g as i
} from "./chunk-GAL4ENT6.js";
var m = (() => {
    let t = class t {
        transform(e, a) {
            return s.formatDate(e, a)
        }
    };
    t.\u0275fac = function(a) {
        return new(a || t)
    }, t.\u0275pipe = n({
        name: "appZiuDate",
        type: t,
        pure: !0
    });
    let r = t;
    return r
})();
var u = f(l());
var k = (() => {
    let t = class t {
        loadPDFMaker() {
            return i(this, null, function*() {
                this.pdfMake || (this.pdfMake = (yield
                    import ("./chunk-H4ZS3LCZ.js")).default, this.fonts = (yield
                    import ("./chunk-SC7Q7T4V.js")).default)
            })
        }
        open(e) {
            return i(this, null, function*() {
                if (!this.pdfMake) try {
                    yield this.loadPDFMaker()
                } catch {
                    console.error("Failed to load pdf maker lib")
                }
                this.pdfMake.createPdf(e, null, null, this.fonts).open()
            })
        }
        download(e, a) {
            return i(this, null, function*() {
                if (!this.pdfMake) try {
                    yield this.loadPDFMaker()
                } catch {
                    console.error("Failed to load pdf maker lib")
                }
                this.pdfMake.createPdf(e, null, null, this.fonts).download(a)
            })
        }
    };
    t.\u0275fac = function(a) {
        return new(a || t)
    }, t.\u0275prov = o({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let r = t;
    return r
})();
export {
    k as a, m as b
};