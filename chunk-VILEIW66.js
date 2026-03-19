import {
    $ as s,
    A as _,
    B as P,
    Dc as k,
    E as $,
    Fc as y,
    G as N,
    I as R,
    Ic as j,
    J as U,
    Jc as T,
    Y as h,
    Z as g,
    _ as c,
    aa as v,
    b as w,
    c as A,
    ha as G,
    n as E,
    p as I,
    t as O,
    v as p,
    va as F,
    vc as H,
    w as x
} from "./chunk-5MZXJYZL.js";
import {
    a as l
} from "./chunk-GAL4ENT6.js";
var nt = {
        dispatch: !0,
        functional: !1,
        useEffectsErrorHandler: !0
    },
    m = "__@ngrx/effects_create__";

function Gt(t, e = {}) {
    let o = e.functional ? t : t(),
        n = l(l({}, nt), e);
    return Object.defineProperty(o, m, {
        value: n
    }), o
}

function rt(t) {
    return Object.getOwnPropertyNames(t).filter(n => t[n] && t[n].hasOwnProperty(m) ? t[n][m].hasOwnProperty("dispatch") : !1).map(n => {
        let r = t[n][m];
        return l({
            propertyName: n
        }, r)
    })
}

function ot(t) {
    return rt(t)
}

function K(t) {
    return Object.getPrototypeOf(t)
}

function st(t) {
    return !!t.constructor && t.constructor.name !== "Object" && t.constructor.name !== "Function"
}

function Y(t) {
    return typeof t == "function"
}

function V(t) {
    return t.filter(Y)
}

function it(t) {
    return t instanceof c || Y(t)
}

function ft(t, e, o) {
    let n = K(t),
        f = !!n && n.constructor.name !== "Object" ? n.constructor.name : null,
        i = ot(t).map(({
            propertyName: u,
            dispatch: a,
            useEffectsErrorHandler: b
        }) => {
            let d = typeof t[u] == "function" ? t[u]() : t[u],
                D = b ? o(d, e) : d;
            return a === !1 ? D.pipe(P()) : D.pipe(U()).pipe(E(et => ({
                effect: t[u],
                notification: et,
                propertyName: u,
                sourceName: f,
                sourceInstance: t
            })))
        });
    return O(...i)
}
var ct = 10;

function J(t, e, o = ct) {
    return t.pipe(x(n => (e && e.handleError(n), o <= 1 ? t : J(t, e, o - 1))))
}
var Ht = (() => {
    let e = class e extends w {
        constructor(n) {
            super(), n && (this.source = n)
        }
        lift(n) {
            let r = new e;
            return r.source = this, r.operator = n, r
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(s(k))
    }, e.\u0275prov = h({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function kt(...t) {
    return p(e => t.some(o => typeof o == "string" ? o === e.type : o.type === e.type))
}
var L = new c("@ngrx/effects Internal Root Guard"),
    S = new c("@ngrx/effects User Provided Effects"),
    M = new c("@ngrx/effects Internal Root Effects"),
    X = new c("@ngrx/effects Internal Root Effects Instances"),
    B = new c("@ngrx/effects Internal Feature Effects"),
    q = new c("@ngrx/effects Internal Feature Effects Instance Groups"),
    ut = new c("@ngrx/effects Effects Error Handler", {
        providedIn: "root",
        factory: () => J
    }),
    Q = "@ngrx/effects/init",
    Vt = H(Q);

function at(t, e) {
    if (t.notification.kind === "N") {
        let o = t.notification.value;
        !dt(o) && e.handleError(new Error(`Effect ${lt(t)} dispatched an invalid action: ${Et(o)}`))
    }
}

function dt(t) {
    return typeof t != "function" && t && t.type && typeof t.type == "string"
}

function lt({
    propertyName: t,
    sourceInstance: e,
    sourceName: o
}) {
    let n = typeof e[t] == "function";
    return !!o ? `"${o}.${String(t)}${n?"()":""}"` : `"${String(t)}()"`
}

function Et(t) {
    try {
        return JSON.stringify(t)
    } catch {
        return t
    }
}
var pt = "ngrxOnIdentifyEffects";

function ht(t) {
    return C(t, pt)
}
var gt = "ngrxOnRunEffects";

function vt(t) {
    return C(t, gt)
}
var Ft = "ngrxOnInitEffects";

function yt(t) {
    return C(t, Ft)
}

function C(t, e) {
    return t && e in t && typeof t[e] == "function"
}
var W = (() => {
    let e = class e extends A {
        constructor(n, r) {
            super(), this.errorHandler = n, this.effectsErrorHandler = r
        }
        addEffects(n) {
            this.next(n)
        }
        toActions() {
            return this.pipe(R(n => st(n) ? K(n) : n), I(n => n.pipe(R(St))), I(n => {
                let r = n.pipe(N(i => mt(this.errorHandler, this.effectsErrorHandler)(i)), E(i => (at(i, this.errorHandler), i.notification)), p(i => i.kind === "N" && i.value != null), $()),
                    f = n.pipe(_(1), p(yt), E(i => i.ngrxOnInitEffects()));
                return O(r, f)
            }))
        }
    };
    e.\u0275fac = function(r) {
        return new(r || e)(s(G), s(ut))
    }, e.\u0275prov = h({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function St(t) {
    return ht(t) ? t.ngrxOnIdentifyEffects() : ""
}

function mt(t, e) {
    return o => {
        let n = ft(o, t, e);
        return vt(o) ? o.ngrxOnRunEffects(n) : n
    }
}
var Z = (() => {
        let e = class e {
            get isStarted() {
                return !!this.effectsSubscription
            }
            constructor(n, r) {
                this.effectSources = n, this.store = r, this.effectsSubscription = null
            }
            start() {
                this.effectsSubscription || (this.effectsSubscription = this.effectSources.toActions().subscribe(this.store))
            }
            ngOnDestroy() {
                this.effectsSubscription && (this.effectsSubscription.unsubscribe(), this.effectsSubscription = null)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(s(W), s(y))
        }, e.\u0275prov = h({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    tt = (() => {
        let e = class e {
            constructor(n, r, f, i, u, a, b) {
                this.sources = n, r.start();
                for (let d of i) n.addEffects(d);
                f.dispatch({
                    type: Q
                })
            }
            addEffects(n) {
                this.sources.addEffects(n)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(s(W), s(Z), s(y), s(X), s(j, 8), s(T, 8), s(L, 8))
        }, e.\u0275mod = F({
            type: e
        }), e.\u0275inj = g({});
        let t = e;
        return t
    })(),
    It = (() => {
        let e = class e {
            constructor(n, r, f, i) {
                let u = r.flat();
                for (let a of u) n.addEffects(a)
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)(s(tt), s(q), s(j, 8), s(T, 8))
        }, e.\u0275mod = F({
            type: e
        }), e.\u0275inj = g({});
        let t = e;
        return t
    })(),
    Bt = (() => {
        let e = class e {
            static forFeature(...n) {
                let r = n.flat(),
                    f = V(r);
                return {
                    ngModule: It,
                    providers: [f, {
                        provide: B,
                        multi: !0,
                        useValue: r
                    }, {
                        provide: S,
                        multi: !0,
                        useValue: []
                    }, {
                        provide: q,
                        multi: !0,
                        useFactory: z,
                        deps: [B, S]
                    }]
                }
            }
            static forRoot(...n) {
                let r = n.flat(),
                    f = V(r);
                return {
                    ngModule: tt,
                    providers: [f, {
                        provide: M,
                        useValue: [r]
                    }, {
                        provide: L,
                        useFactory: Ot
                    }, {
                        provide: S,
                        multi: !0,
                        useValue: []
                    }, {
                        provide: X,
                        useFactory: z,
                        deps: [M, S]
                    }]
                }
            }
        };
        e.\u0275fac = function(r) {
            return new(r || e)
        }, e.\u0275mod = F({
            type: e
        }), e.\u0275inj = g({});
        let t = e;
        return t
    })();

function z(t, e) {
    let o = [];
    for (let n of t) o.push(...n);
    for (let n of e) o.push(...n);
    return o.map(n => it(n) ? v(n) : n)
}

function Ot() {
    let t = v(Z, {
            optional: !0,
            skipSelf: !0
        }),
        e = v(M, {
            self: !0
        });
    if (!(e.length === 1 && e[0].length === 0) && t) throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");
    return "guarded"
}
export {
    Gt as a, Ht as b, kt as c, Bt as d
};