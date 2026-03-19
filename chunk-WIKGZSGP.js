import {
    f as Xn
} from "./chunk-UHUXAZ2Y.js";
import {
    a as Ht,
    b as ni,
    c as Gt,
    d as ii
} from "./chunk-VILEIW66.js";
import {
    $ as T,
    $c as Rt,
    A as ne,
    Aa as ln,
    Ah as ge,
    Bd as kn,
    Bh as Wn,
    Cd as Mn,
    Ch as fe,
    Dg as Ut,
    Dh as Jt,
    Ed as Oe,
    Fb as j,
    Fc as b,
    Fd as se,
    Fh as ut,
    Ga as _,
    Gb as un,
    Gc as rt,
    Gh as Hn,
    H as it,
    Ha as Ot,
    Hc as xn,
    Hd as Ln,
    Hg as Rn,
    Hh as St,
    Ia as x,
    Id as On,
    Jd as En,
    Jh as kt,
    Kc as wn,
    Lb as M,
    Ma as d,
    Mh as Gn,
    Mj as ei,
    Na as o,
    Oa as r,
    Pa as p,
    Pb as gn,
    Qa as Et,
    Qc as Cn,
    Qd as Pt,
    Qh as Kn,
    Ra as Dt,
    Rb as Le,
    Rf as pe,
    Rh as Zn,
    S as tt,
    Ta as vt,
    Tb as fn,
    Tc as yn,
    Th as gt,
    U as on,
    Va as P,
    Vg as F,
    Wa as h,
    Wh as he,
    Xa as mn,
    Xc as zt,
    Y as U,
    Ya as pn,
    Yf as L,
    Yh as qn,
    Z as rn,
    Zh as Yn,
    _b as oe,
    _c as vn,
    _f as jn,
    _g as $n,
    _h as Jn,
    aa as ot,
    ab as Nt,
    ag as S,
    ah as lt,
    ai as Qn,
    bg as E,
    c as Z,
    ca as Y,
    cb as s,
    cc as re,
    cg as z,
    ci as ti,
    d as tn,
    da as J,
    db as _t,
    dd as Pn,
    dg as bt,
    eb as B,
    eg as v,
    eh as Bn,
    fa as ie,
    ff as Dn,
    fg as N,
    gf as zn,
    gg as at,
    gh as Wt,
    hg as R,
    i as yt,
    if as Fn,
    ig as st,
    jg as W,
    kc as Q,
    kd as bn,
    kf as An,
    kg as de,
    l as en,
    lc as ae,
    lf as Tn,
    lg as ue,
    ma as an,
    mf as In,
    n as k,
    nb as dn,
    nf as ce,
    o as nn,
    of as le,
    og as ct,
    p as It,
    pa as sn,
    pc as D,
    pf as Vt,
    pg as X,
    qa as l,
    qc as O,
    qf as me,
    qg as Nn,
    qh as Vn,
    rc as hn,
    ta as w,
    td as Sn,
    th as mt,
    ua as f,
    ub as u,
    v as q,
    va as cn,
    vb as g,
    vh as H,
    w as jt,
    xh as pt,
    yb as et,
    yd as $t,
    yh as dt,
    za as I,
    zc as _n,
    zd as Bt,
    zh as Un
} from "./chunk-5MZXJYZL.js";
import {
    a as Ct,
    e as Me,
    g as ee
} from "./chunk-GAL4ENT6.js";
var Qt = (() => {
    let t = class t {
        constructor(n) {
            this.store = n
        }
        canActivate(n, i) {
            return nn([this.store.select(ce), this.store.select(se)]).pipe(on(this.store.select(Ln)), q(([
                [a, m], K
            ]) => !!m), it(), k(([
                [a, m], K
            ]) => (!a && K && this.store.dispatch(new bn), !0)))
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(T(b))
    }, t.\u0275prov = U({
        token: t,
        factory: t.\u0275fac
    });
    let e = t;
    return e
})();
var oi = (() => {
    let t = class t {
        constructor() {
            this.document = ot(ie), this.store = ot(b), this.siteKey = null, this.scriptLoadedPromise = null
        }
        init() {
            return this.scriptLoadedPromise || (this.scriptLoadedPromise = this.loadScriptFromStore()), this.scriptLoadedPromise
        }
        execute(n) {
            return ee(this, null, function*() {
                return yield this.init(), new Promise(i => {
                    grecaptcha.ready(() => ee(this, null, function*() {
                        let a = yield grecaptcha.execute(this.siteKey, {
                            action: n
                        });
                        i(a)
                    }))
                })
            })
        }
        loadScriptFromStore() {
            return ee(this, null, function*() {
                return this.siteKey = yield en(this.store.select(Fn).pipe(k(n => n ? .recaptchaKey), q(n => !!n))), new Promise((n, i) => {
                    let a = this.document.createElement("script");
                    a.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`, a.async = !0, a.defer = !0, a.onload = () => n(), a.onerror = () => i(new Error("Failed to load reCAPTCHA script")), this.document.head.appendChild(a)
                })
            })
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275prov = U({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
})();

function Di(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Pole login nie mo\u017Ce zosta\u0107 puste"), r())
}

function zi(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Wymagane minimum 4 znaki"), r())
}

function Fi(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Pole has\u0142o nie mo\u017Ce zosta\u0107 puste"), r())
}

function Ai(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Wymagane minimum 8 znak\xF3w"), r())
}

function Ti(e, t) {
    if (e & 1 && (o(0, "mat-error", 9)(1, "span"), s(2), u(3, "async"), r()()), e & 2) {
        let c = h();
        l(2), _t(g(3, 1, c.authError$))
    }
}

function Ii(e, t) {
    if (e & 1) {
        let c = vt();
        o(0, "button", 11), u(1, "async"), P("click", function() {
            Y(c);
            let i = h();
            return J(i.selectLoggingMethod())
        }), s(2, " DALEJ "), r(), Et(3), o(4, "div", 12), s(5, "lub wybierz inny spos\xF3b logowania"), r(), o(6, "button", 13), P("click", function() {
            Y(c);
            let i = h();
            return J(i.loginWithWk())
        }), o(7, "div", 14), p(8, "div", 15), o(9, "div", 16), s(10, "profil zaufany, e-dow\xF3d lub bankowo\u015B\u0107 elektroniczna"), r()()(), Dt()
    }
    if (e & 2) {
        let c = h();
        d("disabled", g(1, 1, c.isLoading$))
    }
}
var Ee = (() => {
    let t = class t {
        constructor() {
            this.captchaLoading = new ln(!1), this.destroyed$ = new Z, this.recaptchaService = ot(oi), this.store = ot(b), this._router = ot(D), this._sitetTitle = ot(re), this.authService = ot(pe), this.formBuilder = ot(Kn)
        }
        ngOnInit() {
            this.setPageTitle(), this.createLoginForm(), this.startListenForAuthErrors(), this.startListenForLoginTokenErrors(), this.recaptchaService.init(), this.appVersion$ = this.store.select(se), this.isLoading$ = this.store.select(Vt), this.isLogged$ = this.store.select(Dn)
        }
        loginToken(n) {
            let i = {
                Login: this.form.value.login,
                Zeton: this.form.value.token,
                recaptcha: ""
            };
            this.store.dispatch(new Rt(!0)), this.recaptchaService.execute("loginSSO").then(a => {
                this.store.dispatch(new Rt(!1)), i.recaptcha = a, this.store.dispatch(new Cn({
                    credentials: i,
                    appVersion: n
                }))
            })
        }
        loginSSO() {
            let n = {
                username: this.form.value.login,
                password: this.form.value.token,
                recaptcha: ""
            };
            this.store.dispatch(new Rt(!0)), this.store.dispatch(new Rt(!0)), this.recaptchaService.execute("loginSSO").then(i => {
                this.store.dispatch(new Rt(!1)), n.recaptcha = i, this.store.dispatch(new zt({
                    sso: !0,
                    credentials: n
                }))
            })
        }
        isServerErrorCodeReturned(n) {
            return n.toString().charAt(0) === "5"
        }
        setPageTitle() {
            this._sitetTitle.setTitle("Logowanie - Zintegrowany Interfejs U\u017Cytkownika")
        }
        createLoginForm() {
            this.form = this.formBuilder.group({
                login: ["", [H.required, H.minLength(4)]],
                token: ["", [H.required, H.minLength(8)]],
                recaptcha: [""]
            })
        }
        startListenForLoginTokenErrors() {
            this.loginTokenErrors$ = this.store.select(An).pipe(k(n => {
                if (n && n.status && this.isServerErrorCodeReturned(n.status)) this._router.navigate(["/wyniki-wkrotce"], {
                    queryParams: {
                        heading: "Trwa przesy\u0142anie Twoich wynik\xF3w.",
                        paragraph: "Spr\xF3buj ponownie p\xF3\u017Aniej."
                    }
                });
                else return n && n.status === 404 ? "Niepoprawny login lub has\u0142o" : ""
            }))
        }
        startListenForAuthErrors() {
            this.authError$ = this.store.select(le)
        }
        selectLoggingMethod() {
            this.store.dispatch(new vn), this.store.dispatch(new yn), this.store.dispatch(new Pn), this.appVersion$.pipe(q(n => !!n), tt(this.destroyed$)).subscribe(n => {
                if (!this.form.valid) this.authError$ = yt("Niepoprawny login lub has\u0142o");
                else switch (n) {
                    case Oe.ZIUZM:
                        this.loginSSO();
                        break;
                    case Oe.ZIUZM_ZIUZW:
                        this.loginToken(n);
                        break
                }
            })
        }
        loginWithWk() {
            this.authService.loginWithWK()
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-login-form"]
        ],
        outputs: {
            captchaLoading: "captchaLoading"
        },
        standalone: !1,
        decls: 27,
        vars: 14,
        consts: [
            ["fxLayout", "row p0"],
            ["fxLayout", "column", "autocomplete", "off", "tabindex", "7", 1, "w-100", "position-relative", 3, "keyup.enter", "formGroup"],
            ["id", "login", "formControlName", "login", "aria-describedby", "login_description", "matInput", "", "tabindex", "7"],
            ["id", "login_description", 1, "sr-only"],
            [1, "mt-2"],
            ["id", "password", "formControlName", "token", "aria-describedby", "password_description", "matInput", "", "type", "password", "tabindex", "8", "autocomplete", "off"],
            ["id", "password_description", 1, "sr-only"],
            ["fxLayout", "row", "fxLayoutAlign", "end end", 1, "w-100"],
            ["mat-button", "", "tabindex", "9", 1, "reset-passowrd-button", 3, "routerLink"],
            ["role", "alert", "fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "10px", 1, "error-message"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "mt-5", "w-100"],
            ["id", "login-button", "mat-button", "", "tabindex", "11", 1, "ziu-login-button", 3, "click", "disabled"],
            [1, "buttons-divider"],
            ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "13px", "tabindex", "12", 1, "wk-login-button", 3, "click"],
            ["fxLayout", "row", "fxLayoutAlign", "space-around center"],
            ["ngClass", "wk-image", "ngStyle.xs", "wk-image wk-image--mobile"],
            ["ngClass", "ft-13 fw-bold", "ngStyle.xs", "ft-10"]
        ],
        template: function(i, a) {
            if (i & 1 && (o(0, "div", 0)(1, "form", 1), P("keyup.enter", function() {
                    return a.selectLoggingMethod()
                }), o(2, "mat-form-field")(3, "mat-label"), s(4, "Login"), r(), p(5, "input", 2), o(6, "mat-hint", 3), s(7, "Wpisz sw\xF3j login, kt\xF3ry otrzyma\u0142e\u015B od Dyrektora Szko\u0142y"), r(), _(8, Di, 2, 0, "mat-error"), _(9, zi, 2, 0, "mat-error"), r(), o(10, "mat-form-field", 4)(11, "mat-label"), s(12, "Has\u0142o"), r(), p(13, "input", 5), o(14, "mat-hint", 6), s(15, "Wpisz swoje has\u0142o"), r(), _(16, Fi, 2, 0, "mat-error"), _(17, Ai, 2, 0, "mat-error"), r()(), o(18, "div", 7)(19, "button", 8), s(20, " Nie pami\u0119tam has\u0142a "), r()(), _(21, Ti, 4, 3, "mat-error", 9), u(22, "async"), u(23, "async"), o(24, "div", 10), _(25, Ii, 11, 3), u(26, "async"), r()()), i & 2) {
                let m, K, A, Qe, Xe;
                l(), d("formGroup", a.form), l(7), x(!(a.form == null || (m = a.form.get("login")) == null) && m.hasError("required") ? 8 : -1), l(), x(!(a.form == null || (K = a.form.get("login")) == null) && K.hasError("minlength") ? 9 : -1), l(7), x(!(a.form == null || (A = a.form.get("token")) == null) && A.hasError("required") ? 16 : -1), l(), x(!(a.form == null || (Qe = a.form.get("token")) == null) && Qe.hasError("minlength") ? 17 : -1), l(2), d("routerLink", "/konto/odzyskanie-hasla"), l(2), x(g(22, 8, a.authError$) && !g(23, 10, a.isLoading$) ? 21 : -1), l(4), x((Xe = g(26, 12, a.appVersion$)) ? 25 : -1, Xe)
            }
        },
        dependencies: [j, S, E, v, N, R, L, ct, st, de, W, gt, ut, mt, pt, dt, St, kt, O, M],
        styles: ['[_nghost-%COMP%]{width:100%;max-width:340px}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}.ziu-login-button[_ngcontent-%COMP%]{margin-bottom:20px;border-radius:23px;background:var(--on-background-success);color:#fff!important;cursor:pointer;transition:.25s;min-height:43px}.ziu-login-button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}.ziu-login-button--disabled[_ngcontent-%COMP%]{background:#ccc;box-shadow:none}.ziu-login-button--disabled[_ngcontent-%COMP%]:hover{background:#ccc}.wk-login-button[_ngcontent-%COMP%]{font-family:Nunito,sans-serif;margin-bottom:20px;margin-top:20px;color:#202020;background:#fff;padding:0 20px;border:2px solid var(--on-background-success);border-radius:100px}.wk-login-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}.wk-image[_ngcontent-%COMP%]{background-image:url("./media/wk-logo-RVAIQHJD.png");background-size:contain;background-repeat:no-repeat;width:90px;height:43px;margin-top:2px}.wk-image--mobile[_ngcontent-%COMP%]{width:70px;height:30px}.icons__info[_ngcontent-%COMP%]{position:absolute;margin-left:5px;color:var(--on-background-info-icon)}.icons__info--first[_ngcontent-%COMP%]{margin-top:17px}.icons__info--second[_ngcontent-%COMP%]{margin-top:92px}.error-message[_ngcontent-%COMP%]{padding:11px 0}.tooltip[_ngcontent-%COMP%]{position:absolute;width:150px;padding:3px 7px;background:#000000de;border-radius:6px;color:#fff;font-size:11px}.tooltip--login[_ngcontent-%COMP%]{top:-19px;left:28px}.tooltip--password[_ngcontent-%COMP%]{top:85px;left:28px}.buttons-divider[_ngcontent-%COMP%]{font-size:12px;color:var(--on-background-grey)}.reset-passowrd-button[_ngcontent-%COMP%]{width:120px;height:20px;font-weight:400;font-size:12px;font-family:Nunito,sans-serif;letter-spacing:normal;padding:0;margin-top:-19px;margin-right:-7px;color:var(--on-background-grey)!important}']
    });
    let e = t;
    return e
})();

function Ni(e, t) {
    e & 1 && (o(0, "div", 9)(1, "div", 13)(2, "h4"), s(3, "Logowanie do ZIU"), r(), o(4, "div", 14), s(5, "Logowanie do ZIU b\u0119dzie mo\u017Cliwe dopiero w dniu publikacji wynik\xF3w."), r(), o(6, "div", 14), s(7, " Publikacja wynik\xF3w egzaminu: "), p(8, "br"), s(9, " \xF3smoklasisty - od 1 lipca godz. 10.00, "), p(10, "br"), s(11, " maturalnego - od 5 lipca godz 8.30. "), r()(), s(12, " . "), r())
}

function Ri(e, t) {
    e & 1 && p(0, "mat-spinner", 18), e & 2 && d("diameter", 26)("strokeWidth", 2)
}

function $i(e, t) {
    if (e & 1 && (o(0, "div", 16)(1, "div", 17), s(2), u(3, "async"), r(), _(4, Ri, 1, 2, "mat-spinner", 18), u(5, "async"), r()), e & 2) {
        let c = h(2);
        l(2), B(" ", g(3, 2, c.loadingLabel$), " "), l(2), x(g(5, 4, c.isLoading$) ? 4 : -1)
    }
}

function Bi(e, t) {
    if (e & 1 && (o(0, "div", 10)(1, "div", 15), p(2, "app-login-form"), r(), _(3, $i, 6, 6, "div", 16), u(4, "async"), u(5, "async"), r()), e & 2) {
        let c = h();
        l(3), x(!g(4, 1, c.authError$) && g(5, 3, c.isLoading$) ? 3 : -1)
    }
}

function Vi(e, t) {
    e & 1 && (o(0, "div", 10)(1, "div", 16), p(2, "mat-spinner", 18), r()()), e & 2 && (l(2), d("diameter", 26)("strokeWidth", 2))
}
var xt = (() => {
    let t = class t {
        constructor(n, i, a) {
            this._document = n, this._platformId = i, this.store = a
        }
        ngOnInit() {
            Le(this._platformId) && this._document.body.classList.add("recaptcha"), this.isLoading$ = this.store.select(Vt), this.loadingLabel$ = this.store.select(me), this.isLogged$ = this.store.select(zn).pipe(k(n => n ? .data ? .userLogged)), this.isHightContrast$ = this.store.select(Pt), this.appVersionIsStop$ = this.store.select(On)
        }
        ngOnDestroy() {
            Le(this._platformId) && this._document.body.classList.remove("recaptcha")
        }
        loginSSO() {
            this.store.dispatch(new zt({
                sso: !0
            }))
        }
        forceLogin() {
            this.store.dispatch(new zt({
                sso: !0,
                forceLogin: !0
            }))
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(ie), w(an), w(b))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-sso-login"]
        ],
        inputs: {
            loggedOutInfo: "loggedOutInfo",
            loggoutProgress: "loggoutProgress"
        },
        standalone: !1,
        decls: 25,
        vars: 13,
        consts: [
            ["ngClass", "login-page-container", "ngStyle.xs", "login-page-container--mobile"],
            ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "w-100"],
            ["fxLayout", "row", "fxFlexAlign", "end", 1, "mt-1"],
            ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "90px", 1, "w-100"],
            ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "50%"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
            ["src", "./../../../../assets/icons/ziu-sioeo-logo.svg", "alt", "logo Zintegrowanego Interfejsu u\u017Cytkownika", 3, "fxShow"],
            ["src", "./../../../../assets/icons/ziu-sioeo-logo-black.svg", "alt", "logo Zintegrowanego Interfejsu u\u017Cytkownika", 3, "fxShow"],
            [1, "sr-only"],
            ["fxLayout", "column", 1, "w-100"],
            ["fxLayout", "column", 1, "mt-5", "w-100"],
            ["fxHide", "", "fxShow.gt-sm", "true", "fxFlex", "50%", 1, "mt-5"],
            ["src", "./../../../../assets/icons/wk-side-image.svg", "alt", "", 1, "w-100", "login-page-container__side_illustration"],
            [1, "mt-5", "pt-3", "text-center"],
            [1, "mt-4"],
            ["fxLayout", "column", "fxLayoutAlign", "start center"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "w-100"],
            [1, "mat-subtitle-1", "text-center"],
            ["matSuffix", "", 3, "diameter", "strokeWidth"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0), p(1, "app-skip-link-button"), o(2, "div", 1)(3, "div", 2), p(4, "app-system-switch")(5, "app-theme-settings"), r(), o(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div"), p(10, "img", 6), u(11, "async"), p(12, "img", 7), u(13, "async"), r(), o(14, "h1", 8), s(15, "Zintegrowany Interfejs u\u017Cytkownika"), r(), o(16, "h2", 8), s(17, "Zaloguj si\u0119"), r(), _(18, Ni, 13, 0, "div", 9), u(19, "async"), _(20, Bi, 6, 5, "div", 10), u(21, "async"), _(22, Vi, 3, 2, "div", 10), r()(), o(23, "div", 11), p(24, "img", 12), r()()()()), i & 2 && (l(10), d("fxShow", !g(11, 5, a.isHightContrast$)), l(2), d("fxShow", g(13, 7, a.isHightContrast$)), l(6), x(g(19, 9, a.appVersionIsStop$) ? 18 : -1), l(2), x(!a.loggoutProgress && !g(21, 11, a.appVersionIsStop$) ? 20 : -1), l(2), x(a.loggoutProgress ? 22 : -1))
        },
        dependencies: [j, S, E, v, bt, z, at, N, R, ue, X, lt, Bn, Wt, Ee, M],
        styles: [".login-page-container[_ngcontent-%COMP%]{max-width:1000px;min-width:300px;padding:0 10px;margin:0 auto}.login-page-container--mobile[_ngcontent-%COMP%]{padding:0 10px}.login-page-container__login-form-container[_ngcontent-%COMP%]{margin-top:30px;max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.login-page-container__side_illustration[_ngcontent-%COMP%]{margin-top:90px}.login-form-container__ziu-logo-subheader[_ngcontent-%COMP%]{color:var(--on-background-primary-light);font-size:16px;text-align:center;font-weight:700}.login-info[_ngcontent-%COMP%]{text-align:center;color:var(--on-background-primary-light)}"]
    });
    let e = t;
    return e
})();
var At = (() => {
    let t = class t {
        constructor() {
            this.openKaptalLudzki = () => {
                window.open("https://www.rozwojspoleczny.gov.pl/")
            }, this.openRP = () => {
                window.open("https://www.prezydent.pl/")
            }, this.openUE = () => {
                window.open("https://europa.eu/european-union/index_pl")
            }, this.openCIE = () => {
                window.open("https://cie.gov.pl/")
            }
        }
        openAccessibilityDeclaration() {
            window.open("https://ksdo.gov.pl/deklaracja-dostepnosci-ziu/", "_blank")
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-start-page-footer"]
        ],
        standalone: !1,
        decls: 12,
        vars: 0,
        consts: [
            [1, "full-width", "d-flex", "flex-row", "align-items-center", "justify-content-center", "flex-wrap", "mt-3", "pb-3"],
            [1, "d-flex", "align-items-center", "justify-content-center"],
            ["tabindex", "0", 1, "logo-kapital-ludzki", 3, "click", "keydown.enter", "keydown.space"],
            ["tabindex", "0", 1, "logo-rp", 3, "click", "keydown.enter", "keydown.space"],
            ["tabindex", "0", 1, "logo-ue", 3, "click", "keydown.enter", "keydown.space"],
            [1, "divider"],
            ["tabindex", "0", 1, "logo-cie", 3, "click", "keydown.enter", "keydown.space"],
            [1, "d-flex", "justify-content-center", "pb-2"],
            ["role", "button", "tabindex", "0", 1, "text-gray", "ft-14", 3, "click", "keydown.enter", "keydown.space"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2), P("click", function() {
                return a.openKaptalLudzki()
            })("keydown.enter", function() {
                return a.openKaptalLudzki()
            })("keydown.space", function() {
                return a.openKaptalLudzki()
            }), r(), o(4, "div", 3), P("click", function() {
                return a.openRP()
            })("keydown.enter", function() {
                return a.openRP()
            })("keydown.space", function() {
                return a.openRP()
            }), r()(), o(5, "div", 1)(6, "div", 4), P("click", function() {
                return a.openUE()
            })("keydown.enter", function() {
                return a.openUE()
            })("keydown.space", function() {
                return a.openUE()
            }), r(), p(7, "div", 5), o(8, "div", 6), P("click", function() {
                return a.openCIE()
            })("keydown.enter", function() {
                return a.openCIE()
            })("keydown.space", function() {
                return a.openCIE()
            }), r()()(), o(9, "div", 7)(10, "span", 8), P("click", function() {
                return a.openAccessibilityDeclaration()
            })("keydown.enter", function() {
                return a.openAccessibilityDeclaration()
            })("keydown.space", function() {
                return a.openAccessibilityDeclaration()
            }), s(11, "Deklaracja dost\u0119pno\u015Bci"), r()()())
        },
        styles: ['.logo-kapital-ludzki[_ngcontent-%COMP%]{background:url("./media/funduszeeuropejskie-NWMTNTK3.svg") no-repeat center;background-size:contain;width:150px;height:40px;margin-right:20px;float:left;margin-top:16px;cursor:pointer}.logo-rp[_ngcontent-%COMP%]{background:url("./media/rp-KZQEZLAE.svg") no-repeat center;width:150px;height:30px;margin-right:20px;float:left;margin-top:16px;cursor:pointer}.logo-ue[_ngcontent-%COMP%]{background:url("./media/ue-GTAZKGFD.svg") no-repeat center;background-size:contain;width:150px;height:30px;float:left;margin-top:16px;cursor:pointer}.logo-cie[_ngcontent-%COMP%]{background:url("./media/cie-EBCDMWJR.svg") no-repeat center;background-size:contain;width:150px;height:30px;float:right;margin-top:16px;cursor:pointer}.divider[_ngcontent-%COMP%]{height:30px;border-left:1.5px #000 solid;margin:16px 30px 0}']
    });
    let e = t;
    return e
})();
var si = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-logout-page"]
        ],
        standalone: !1,
        decls: 2,
        vars: 1,
        consts: [
            [3, "loggedOutInfo"]
        ],
        template: function(i, a) {
            i & 1 && p(0, "app-sso-login", 0)(1, "app-start-page-footer"), i & 2 && d("loggedOutInfo", !0)
        },
        dependencies: [xt, At],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]
    });
    let e = t;
    return e
})();
var ci = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-login-page"]
        ],
        standalone: !1,
        decls: 2,
        vars: 0,
        template: function(i, a) {
            i & 1 && p(0, "app-sso-login")(1, "app-start-page-footer")
        },
        dependencies: [xt, At],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]
    });
    let e = t;
    return e
})();
var li = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-logged-page"]
        ],
        standalone: !1,
        decls: 1,
        vars: 0,
        template: function(i, a) {
            i & 1 && p(0, "app-sso-login")
        },
        dependencies: [xt],
        encapsulation: 2
    });
    let e = t;
    return e
})();
var mi = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-logout-progress-page"]
        ],
        standalone: !1,
        decls: 1,
        vars: 1,
        consts: [
            [3, "loggoutProgress"]
        ],
        template: function(i, a) {
            i & 1 && p(0, "app-sso-login", 0), i & 2 && d("loggoutProgress", !0)
        },
        dependencies: [xt],
        encapsulation: 2
    });
    let e = t;
    return e
})();
var pi = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-account-deleted"]
        ],
        standalone: !1,
        decls: 10,
        vars: 0,
        consts: [
            ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "account-deleted", "text-center"],
            ["src", "./../../../../assets/icons/account_deleted.svg", "alt", ""],
            [1, "account-deleted__header"],
            [1, "account-deleted__paragraph"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0), p(1, "img", 1), o(2, "div", 2), s(3, "Konto usuni\u0119te :("), r(), o(4, "div", 3), s(5, " Mamy nadziej\u0119, \u017Ce jeszcze kiedy\u015B do nas wr\xF3cisz."), p(6, "br"), s(7, " Wystarczy, \u017Ce zalogujesz si\u0119 korzystaj\u0105c"), p(8, "br"), s(9, " z danych, kt\xF3re otrzyma\u0142e\u015B od dyrektora plac\xF3wki. "), r()())
        },
        dependencies: [S, v],
        styles: ["[_nghost-%COMP%]{width:100vh;height:100vh}.account-deleted[_ngcontent-%COMP%]{width:100%;height:100%;color:#202020}.account-deleted__header[_ngcontent-%COMP%]{font-size:21px}.account-deleted__paragraph[_ngcontent-%COMP%]{margin-top:16px;font-weight:300}"]
    });
    let e = t;
    return e
})();

function Ui(e, t) {
    if (e & 1 && (o(0, "div", 8), s(1), r()), e & 2) {
        let c = h();
        l(), _t(c.heading)
    }
}

function Wi(e, t) {
    if (e & 1 && (o(0, "div", 9), s(1), r()), e & 2) {
        let c = h();
        l(), _t(c.paragraph)
    }
}
var di = (() => {
    let t = class t {
        constructor(n, i, a) {
            this.route = n, this.pageSiteTitle = i, this.router = a
        }
        ngOnInit() {
            this.pageSiteTitle.setTitle("Wyniki wkr\xF3tce - Zintegrowany interfejs u\u017Cytkownika"), this.subscription = this.route.queryParamMap.subscribe(n => {
                this.heading = n.get("heading"), this.paragraph = n.get("paragraph")
            })
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
        navigateToMainPage() {
            this.router.navigate(["/login"])
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(Q), w(re), w(D))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-error-view"]
        ],
        standalone: !1,
        decls: 12,
        vars: 2,
        consts: [
            [1, "error-view-container"],
            ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "error-view-container__navigation"],
            ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "7px", "tabindex", "1", 1, "navigation__link", 3, "click", "keyup.enter"],
            ["src", "./../../../../assets/icons/nav_ziu_logo.svg", "alt", "logo Zintegrowany interfejs u\u017Cytkownika", 1, "link__ziu-logo"],
            ["src", "./../../../../assets/icons/nav_ziu_subtitle.svg", "alt", "Skr\xF3t ZIU", 1, "link__ziu-subtitle"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "error-view-container__content"],
            ["src", "./../../../../assets/icons/side_illustration_dont_have_exams.svg", "alt", ""],
            [1, "content__message"],
            [1, "message__heading"],
            [1, "message__pargraph"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0)(1, "div", 1)(2, "div", 2), P("click", function() {
                return a.navigateToMainPage()
            })("keyup.enter", function() {
                return a.navigateToMainPage()
            }), p(3, "img", 3)(4, "img", 4), r(), o(5, "div"), p(6, "app-theme-settings"), r()(), o(7, "div", 5), p(8, "img", 6), o(9, "div", 7), _(10, Ui, 2, 1, "div", 8), _(11, Wi, 2, 1, "div", 9), r()()()), i & 2 && (l(10), x(a.heading ? 10 : -1), l(), x(a.paragraph ? 11 : -1))
        },
        dependencies: [S, E, v, lt],
        styles: [".error-view-container[_ngcontent-%COMP%]{max-width:1000px;min-width:300px;padding:0 40px;margin:0 auto}.error-view-container__navigation[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:16px;font-weight:800}.navigation__link[_ngcontent-%COMP%]{cursor:pointer}.link__ziu-logo[_ngcontent-%COMP%]{max-width:30px;max-height:32px}.link__ziu-subtitle[_ngcontent-%COMP%]{max-width:51px;max-height:25px}.content__message[_ngcontent-%COMP%]{max-width:309px;text-align:center;color:var(--on-background-paragraph)}.message__heading[_ngcontent-%COMP%]{font-weight:400;font-size:21px;line-height:25px}.message__pargraph[_ngcontent-%COMP%]{margin-top:13px;font-weight:300;font-size:16px;line-height:22px}"]
    });
    let e = t;
    return e
})();
var Fe = {};
Me(Fe, {
    getConfirmWkAccountDataSelectors: () => Zi,
    getCreateAccountSelectors: () => Gi,
    getWkAccountState: () => ze
});
var ze = rt(Mn, e => e && e.wkAccount),
    Hi = rt(ze, e => e.createWkAccount),
    Gi = F(Hi),
    Ki = rt(ze, e => e.confirmWkAccountData),
    Zi = F(Ki);
var ye = kn,
    te = Ct({}, Fe);
var Ae = (function(e) {
    return e[e.PeselNotExists = -1] = "PeselNotExists", e[e.FamilyNameNotExists = -2] = "FamilyNameNotExists", e[e.PreviousFamilyNameNotExists = -3] = "PreviousFamilyNameNotExists", e[e.HistoryScoresNotExists = -4] = "HistoryScoresNotExists", e[e.CreatingAccountNotSuccess = -5] = "CreatingAccountNotSuccess", e[e.UnrecognizedError = -6] = "UnrecognizedError", e
})(Ae || {});
var Kt = class {
    static getErrorMessage(t) {
        return t ? .error ? .Code === Ae.PreviousFamilyNameNotExists ? "Wprowadzono nieprawid\u0142owe poprzednie nazwisko." : "Wyst\u0105pi\u0142 b\u0142\u0105d podczas przetwarzania danych"
    }
};

function qi(e, t) {
    if (e & 1 && (o(0, "mat-error"), s(1), u(2, "async"), r()), e & 2) {
        let c = h();
        l(), B(" ", g(2, 1, c.errorMessage$), " ")
    }
}
var ve = (() => {
    let t = class t {
        constructor(n) {
            this.store = n, this.isHighContrast = !1
        }
        createWkAccount() {
            this.store.dispatch(ye.createWkAccountActions.send()), this.errors$ = this.store.select(te.getCreateAccountSelectors.selectError), this.errorMessage$ = this.errors$.pipe(k(Kt.getErrorMessage))
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(b))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-user-not-found"]
        ],
        inputs: {
            isHighContrast: "isHighContrast"
        },
        standalone: !1,
        decls: 14,
        vars: 3,
        consts: [
            [1, "d-flex", "flex-column", "w-100", "align-items-center"],
            [1, "my-5", "text-center"],
            [1, "header-section"],
            [1, "start-from-new-line", "mt-5"],
            [1, "start-from-new-line"],
            ["mat-button", "", 1, "ziu-login-button", 3, "click"],
            ["mat-button", "", "routerLink", "/login", 1, "ziu-login-button", "ziu-button--gray"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0)(1, "div", 1)(2, "span", 2), s(3, "Logowanie do ZIU"), r(), o(4, "p", 3), s(5, "Nie posiadasz konta w systemie ZIU."), r(), o(6, "p", 4), s(7, "Czy chcesz z\u0142o\u017Cy\u0107 e-deklaracj\u0119 maturaln\u0105?"), r()(), o(8, "button", 5), P("click", function() {
                return a.createWkAccount()
            }), s(9, "TAK"), r(), o(10, "button", 6), s(11, "NIE"), r(), _(12, qi, 3, 3, "mat-error"), u(13, "async"), r()), i & 2 && (l(12), x(g(13, 1, a.errors$) ? 12 : -1))
        },
        dependencies: [L, W, O, M],
        styles: [".start-from-new-line[_ngcontent-%COMP%]{white-space:pre-wrap;margin-bottom:0}.unauthorized-info-section[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.header-section[_ngcontent-%COMP%]{font-weight:600;font-size:30px}.login-page-container[_ngcontent-%COMP%]{max-width:1000px;min-width:300px;padding:0 10px;margin:0 auto}.login-page-container--mobile[_ngcontent-%COMP%]{padding:0 10px}.login-page-container__login-form-container[_ngcontent-%COMP%]{margin-top:66px;max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.login-form-container__ziu-logo-subheader[_ngcontent-%COMP%]{color:var(--on-background-primary-light);font-size:16px;text-align:center;font-weight:700}.ziu-login-button[_ngcontent-%COMP%]{margin-bottom:20px;border-radius:23px;background:var(--on-background-success);color:#fff!important;cursor:pointer;transition:.25s;width:250px;min-height:43px}.ziu-login-button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}.ziu-login-button--disabled[_ngcontent-%COMP%]{background:#ccc;box-shadow:none}.ziu-login-button--disabled[_ngcontent-%COMP%]:hover{background:#ccc}"],
        changeDetection: 0
    });
    let e = t;
    return e
})();
var Ji = ["*"],
    ui = (() => {
        let t = class t {};
        t.\u0275fac = function(i) {
            return new(i || t)
        }, t.\u0275cmp = f({
            type: t,
            selectors: [
                ["app-wk-content-wrapper"]
            ],
            inputs: {
                isHighContrast: "isHighContrast"
            },
            standalone: !1,
            ngContentSelectors: Ji,
            decls: 5,
            vars: 2,
            consts: [
                ["ngClass", "login-page-container__login-form-container", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile", 1, "d-flex", "flex-column", "align-items-center", "justify-content-center"],
                ["src", "../../../../../assets/icons/ziu_logo_with_subtitle.svg", "alt", "logo Zintegrowanego Interfejsu u\u017Cytkownika", 3, "fxShow"],
                ["src", "../../../../../assets/icons/ziu_logo_with_subtitle-black.svg", "alt", "logo Zintegrowanego Interfejsu u\u017Cytkownika", 3, "fxShow"]
            ],
            template: function(i, a) {
                i & 1 && (mn(), o(0, "div", 0)(1, "div"), p(2, "img", 1)(3, "img", 2), r(), pn(4), r()), i & 2 && (l(2), d("fxShow", !a.isHighContrast), l(), d("fxShow", a.isHighContrast))
            },
            dependencies: [j, at, N, R],
            styles: [".unauthorized-info-section[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.header-section[_ngcontent-%COMP%]{font-weight:600;font-size:30px}"]
        });
        let e = t;
        return e
    })();

function Xi(e, t) {
    if (e & 1) {
        let c = vt();
        o(0, "div", 10)(1, "mat-error", 11)(2, "span"), s(3), u(4, "async"), r()(), o(5, "button", 12), P("click", function() {
            Y(c);
            let i = h();
            return J(i.navigateToLoginForm())
        }), s(6, "Powr\xF3t do logowania"), r()()
    }
    if (e & 2) {
        let c = h();
        l(3), _t(g(4, 1, c.authError$))
    }
}

function to(e, t) {
    if (e & 1 && (p(0, "app-user-not-found", 13), u(1, "async")), e & 2) {
        let c = h();
        d("isHighContrast", g(1, 1, c.isHighContrast$))
    }
}

function eo(e, t) {
    e & 1 && (o(0, "div", 14), p(1, "mat-spinner", 15), r()), e & 2 && (l(), d("diameter", 90)("strokeWidth", 10))
}
var gi = (() => {
    let t = class t {
        constructor(n, i, a) {
            this.route = n, this.store = i, this.authService = a, this.destroyed$ = new Z
        }
        ngOnInit() {
            this.isHighContrast$ = this.store.select(Pt), this.samlArtParam = this.route.snapshot.queryParams ? .SAMLart, this.startListeningForWkClientId(), this.isLoading$ = this.store.select(Vt), this.loadingLabel$ = this.store.select(me), this.isLogged$ = this.store.select(ce), this.authError$ = this.store.select(le), this.authConfigFetched$ = this.store.select(Tn), this.error$ = this.store.select(In).pipe(k(n => {
                if (n) return n.error.error.error_description
            }))
        }
        ngOnDestroy() {
            this.destroyed$.next(!0), this.destroyed$.complete()
        }
        navigateToLoginForm() {
            window.location.pathname = "/"
        }
        startListeningForWkClientId() {
            this.store.select(En).pipe(tt(this.destroyed$)).subscribe(n => {
                n && (this.wkClientId = n, this.tryLoginUsingSamlartParam())
            })
        }
        tryLoginUsingSamlartParam() {
            this.samlArtParam && this.loginSSO()
        }
        loginSSO() {
            this.authService.restoreRedirectUrlForPz();
            let n = {
                username: this.wkClientId,
                password: this.samlArtParam,
                recaptcha: ""
            };
            this.authConfigFetched$.pipe(q(i => !!i), tt(this.destroyed$), it()).subscribe(() => this.store.dispatch(new zt({
                sso: !0,
                credentials: n
            })))
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(Q), w(b), w(pe))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-wk"]
        ],
        standalone: !1,
        decls: 15,
        vars: 0,
        consts: [
            ["errorTemplate", ""],
            ["userNotFound", ""],
            ["spinner", ""],
            [1, "wk-container"],
            ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "w-100"],
            ["fxFlexAlign", "end", 1, "mt-1"],
            ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "90px", 1, "w-100"],
            [1, "wk-container__body"],
            ["fxHide", "", "fxShow.gt-sm", "true", "fxFlex", "50%", 1, "wk-container__side-img"],
            ["alt", "", "ngSrc", "../../../../assets/icons/wk-side-image.svg", "height", "248", "width", "297", 1, "w-100"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "body__error-container"],
            ["role", "alert", "fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "10px", 1, "error-message"],
            ["mat-button", "", 1, "error__button", 3, "click"],
            [3, "isHighContrast"],
            [1, "mt-5", "app-button-spinner-pos-absolute", "d-flex", "justify-content-center", "align-items-center"],
            [3, "diameter", "strokeWidth"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 3)(1, "div", 4), p(2, "app-theme-settings", 5), o(3, "div", 6)(4, "div", 7)(5, "app-wk-content-wrapper"), p(6, "router-outlet"), r()(), o(7, "div", 8), p(8, "img", 9), r()()()(), I(9, Xi, 7, 3, "ng-template", null, 0, et)(11, to, 2, 3, "ng-template", null, 1, et)(13, eo, 2, 2, "ng-template", null, 2, et))
        },
        dependencies: [S, E, v, bt, z, at, L, W, X, lt, ae, fn, ve, ui, M],
        styles: [".wk-container[_ngcontent-%COMP%]{max-width:1000px;min-width:300px;padding:0 40px;margin:0 auto}.wk-container__body[_ngcontent-%COMP%]{margin-top:74px}.wk-container__side-img[_ngcontent-%COMP%]{margin-top:250px}.body__header[_ngcontent-%COMP%]{color:var(--on-background-primary-light);font-size:16px;text-align:center;font-weight:700}.body__progress[_ngcontent-%COMP%]{margin-top:100px}.body__error-container[_ngcontent-%COMP%]{margin-top:100px;text-align:center}.error-container__error[_ngcontent-%COMP%]{width:85%;padding:11px 13px;border-radius:15px;background-color:#f355440d;color:#f44336;font-size:18px}.error__button[_ngcontent-%COMP%]{margin-top:90px;height:44px;margin-bottom:16px;border-radius:23px;text-transform:uppercase;background:var(--on-background-success);line-height:19px;font-weight:700;letter-spacing:.06em;color:#fff!important;transition:.25s}.error__subheader[_ngcontent-%COMP%]{position:relative;cursor:help;color:#2e59ff;font-size:16px}.subheader__tooltip[_ngcontent-%COMP%]{display:none;position:absolute;width:400px;left:130px;top:11px;padding:8px 5px;border-radius:15px;background:#2c57ffcc;text-align:center;z-index:1;color:#fff}.error__subheader[_ngcontent-%COMP%]:hover   .subheader__tooltip[_ngcontent-%COMP%]{display:block}.error-message[_ngcontent-%COMP%]{max-width:250px}"]
    });
    let e = t;
    return e
})();
var Tt = (function(e) {
        return e[e.State = 0] = "State", e[e.Transition = 1] = "Transition", e[e.Sequence = 2] = "Sequence", e[e.Group = 3] = "Group", e[e.Animate = 4] = "Animate", e[e.Keyframes = 5] = "Keyframes", e[e.Style = 6] = "Style", e[e.Trigger = 7] = "Trigger", e[e.Reference = 8] = "Reference", e[e.AnimateChild = 9] = "AnimateChild", e[e.AnimateRef = 10] = "AnimateRef", e[e.Query = 11] = "Query", e[e.Stagger = 12] = "Stagger", e
    })(Tt || {}),
    no = "*";

function je(e, t) {
    return {
        type: Tt.Trigger,
        name: e,
        definitions: t,
        options: {}
    }
}

function Pe(e, t = null) {
    return {
        type: Tt.Animate,
        styles: t,
        timings: e
    }
}

function _a(e, t = null) {
    return {
        type: Tt.Sequence,
        steps: e,
        options: t
    }
}

function Zt(e) {
    return {
        type: Tt.Style,
        styles: e,
        offset: null
    }
}

function be(e, t, c = null) {
    return {
        type: Tt.Transition,
        expr: e,
        animation: t,
        options: c
    }
}
var Te = class {
        _onDoneFns = [];
        _onStartFns = [];
        _onDestroyFns = [];
        _originalOnDoneFns = [];
        _originalOnStartFns = [];
        _started = !1;
        _destroyed = !1;
        _finished = !1;
        _position = 0;
        parentPlayer = null;
        totalTime;
        constructor(t = 0, c = 0) {
            this.totalTime = t + c
        }
        _onFinish() {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
        }
        onStart(t) {
            this._originalOnStartFns.push(t), this._onStartFns.push(t)
        }
        onDone(t) {
            this._originalOnDoneFns.push(t), this._onDoneFns.push(t)
        }
        onDestroy(t) {
            this._onDestroyFns.push(t)
        }
        hasStarted() {
            return this._started
        }
        init() {}
        play() {
            this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
        }
        triggerMicrotask() {
            queueMicrotask(() => this._onFinish())
        }
        _onStart() {
            this._onStartFns.forEach(t => t()), this._onStartFns = []
        }
        pause() {}
        restart() {}
        finish() {
            this._onFinish()
        }
        destroy() {
            this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
        }
        reset() {
            this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
        }
        setPosition(t) {
            this._position = this.totalTime ? t * this.totalTime : 1
        }
        getPosition() {
            return this.totalTime ? this._position / this.totalTime : 1
        }
        triggerCallback(t) {
            let c = t == "start" ? this._onStartFns : this._onDoneFns;
            c.forEach(n => n()), c.length = 0
        }
    },
    Ie = class {
        _onDoneFns = [];
        _onStartFns = [];
        _finished = !1;
        _started = !1;
        _destroyed = !1;
        _onDestroyFns = [];
        parentPlayer = null;
        totalTime = 0;
        players;
        constructor(t) {
            this.players = t;
            let c = 0,
                n = 0,
                i = 0,
                a = this.players.length;
            a == 0 ? queueMicrotask(() => this._onFinish()) : this.players.forEach(m => {
                m.onDone(() => {
                    ++c == a && this._onFinish()
                }), m.onDestroy(() => {
                    ++n == a && this._onDestroy()
                }), m.onStart(() => {
                    ++i == a && this._onStart()
                })
            }), this.totalTime = this.players.reduce((m, K) => Math.max(m, K.totalTime), 0)
        }
        _onFinish() {
            this._finished || (this._finished = !0, this._onDoneFns.forEach(t => t()), this._onDoneFns = [])
        }
        init() {
            this.players.forEach(t => t.init())
        }
        onStart(t) {
            this._onStartFns.push(t)
        }
        _onStart() {
            this.hasStarted() || (this._started = !0, this._onStartFns.forEach(t => t()), this._onStartFns = [])
        }
        onDone(t) {
            this._onDoneFns.push(t)
        }
        onDestroy(t) {
            this._onDestroyFns.push(t)
        }
        hasStarted() {
            return this._started
        }
        play() {
            this.parentPlayer || this.init(), this._onStart(), this.players.forEach(t => t.play())
        }
        pause() {
            this.players.forEach(t => t.pause())
        }
        restart() {
            this.players.forEach(t => t.restart())
        }
        finish() {
            this._onFinish(), this.players.forEach(t => t.finish())
        }
        destroy() {
            this._onDestroy()
        }
        _onDestroy() {
            this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(t => t.destroy()), this._onDestroyFns.forEach(t => t()), this._onDestroyFns = [])
        }
        reset() {
            this.players.forEach(t => t.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
        }
        setPosition(t) {
            let c = t * this.totalTime;
            this.players.forEach(n => {
                let i = n.totalTime ? Math.min(1, c / n.totalTime) : 1;
                n.setPosition(i)
            })
        }
        getPosition() {
            let t = this.players.reduce((c, n) => c === null || n.totalTime > c.totalTime ? n : c, null);
            return t != null ? t.getPosition() : 0
        }
        beforeDestroy() {
            this.players.forEach(t => {
                t.beforeDestroy && t.beforeDestroy()
            })
        }
        triggerCallback(t) {
            let c = t == "start" ? this._onStartFns : this._onDoneFns;
            c.forEach(n => n()), c.length = 0
        }
    },
    io = "!";
var Ue = {};
Me(Ue, {
    confirmChangeEmailActions: () => Be,
    confirmNewPasswordKeyActions: () => Ve,
    confirmResetPasswordActions: () => Re,
    confirmSetPasswordActions: () => $e,
    resetPasswordActions: () => Ne
});
var Ne = Bt("[Unauthorized] Reset password"),
    Re = Bt("[Unauthorized] Confirm reset password"),
    $e = Bt("[Unauthorized] Confirm set password"),
    Be = Bt("[Unauthorized] Confirm change email"),
    Ve = Bt("[Unauthorized] Confirm key for new password");
var Ye = {};
Me(Ye, {
    getConfirmChangeEmailError: () => fo,
    getConfirmChangeEmailLoading: () => uo,
    getConfirmChangeEmailSuccess: () => go,
    getConfirmNewPasswordKeyValidationError: () => qe,
    getConfirmNewPasswordKeyValidationLoading: () => Ze,
    getConfirmNewPasswordKeyValidationSuccess: () => ho,
    getConfirmResetPassowrdError: () => mo,
    getConfirmResetPassowrdLoading: () => co,
    getConfirmResetPassowrdSuccess: () => lo,
    getConfirmSetPasswordState: () => po,
    getResetPassowrdError: () => so,
    getResetPassowrdLoading: () => ro,
    getResetPassowrdSuccess: () => ao,
    selectUnauthorizedState: () => qt
});
var Se = "unauthorized",
    oo = {
        resetPassword: {},
        confirmResetPassword: {},
        confirmSetPassword: {},
        confirmChangeEmail: {},
        confirmNewPasswordKeyValidation: {}
    },
    fi = _n({
        resetPassword: $t(Ne),
        confirmResetPassword: $t(Re),
        confirmSetPassword: $t($e),
        confirmChangeEmail: $t(Be),
        confirmNewPasswordKeyValidation: $t(Ve)
    }, oo);
var qt = xn(Se),
    We = rt(qt, e => e ? .resetPassword),
    ro = F(We).selectLoading,
    ao = F(We).selectSuccess,
    so = F(We).selectError,
    He = rt(qt, e => e ? .confirmResetPassword),
    co = F(He).selectLoading,
    lo = F(He).selectSuccess,
    mo = F(He).selectError,
    po = F(rt(qt, e => e ? .confirmSetPassword)),
    Ge = rt(qt, e => e ? .confirmChangeEmail),
    uo = F(Ge).selectLoading,
    go = F(Ge).selectSuccess,
    fo = F(Ge).selectError,
    Ke = rt(qt, e => e ? .confirmNewPasswordKeyValidation),
    Ze = F(Ke).selectLoading,
    ho = F(Ke).selectSuccess,
    qe = F(Ke).selectError;
var y = Ue,
    $ = Ct({}, Ye);

function _o(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Wymagane"), r())
}

function xo(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Wpisz poprawny e-mail"), r())
}

function wo(e, t) {
    if (e & 1 && (o(0, "mat-error", 5), s(1), u(2, "async"), r()), e & 2) {
        let c, n = h();
        l(), B(" ", (c = g(2, 1, n.sendErrors$)) == null || c.error == null || c.error.Errors[0] == null ? null : c.error.Errors[0].Message, " ")
    }
}

function Co(e, t) {
    e & 1 && (o(0, "div", 9), p(1, "mat-spinner", 10), r()), e & 2 && (l(), d("diameter", 24)("strokeWidth", 3))
}

function yo(e, t) {
    e & 1 && s(0, " WY\u015ALIJ ")
}
var _i = (() => {
    let t = class t {
        constructor(n, i) {
            this.router = n, this.store = i, this.destroyed$ = new Z
        }
        ngOnInit() {
            this.createLoginForm(), this.sendSuccess$ = this.store.select($.getResetPassowrdSuccess), this.sendLoading$ = this.store.select($.getResetPassowrdLoading), this.sendErrors$ = this.store.select($.getResetPassowrdError)
        }
        ngOnDestroy() {
            this.store.dispatch(y.resetPasswordActions.clear()), this.destroyed$.next(!0), this.destroyed$.complete()
        }
        createLoginForm() {
            this.form = new ge({
                Email: new Jt("", [H.required, H.email])
            })
        }
        sendEmail() {
            if (this.form.valid) {
                let n = {
                    Email: this.form.value.Email
                };
                this.store.dispatch(y.resetPasswordActions.send({
                    payload: n
                }))
            }
            this.sendSuccess$.pipe(tt(this.destroyed$)).subscribe(n => {
                n && this.router.navigate(["./konto/odzyskanie-hasla-potwierdzenie"])
            })
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(D), w(b))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-send-mail-to-reset-password"]
        ],
        standalone: !1,
        decls: 22,
        vars: 13,
        consts: [
            ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mr-auto", "ml-auto"],
            [1, "text-center"],
            ["fxLayout", "column", 1, "w-100", "position-relative", "mt-4", 3, "formGroup"],
            ["id", "login", "formControlName", "Email", "aria-describedby", "login_description", "matInput", "", "autocomplete", "off", "tabindex", "7"],
            ["id", "login_description", 1, "sr-only"],
            ["role", "alert", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "error-message"],
            ["fxLayoutAlign", "space-between start", "fxLayoutAlign.xs", "center start", "fxLayoutGap", "20px", "fxLayout", "row", 1, "mt-5"],
            ["fxFlex", "50%", "type", "button", "mat-flat-button", "", 1, "mt-1", "ziu-button--gray", "text-uppercase", 3, "routerLink"],
            ["fxFlex", "50%", "mat-flat-button", "", 1, "mt-1", "ziu-button--green", 3, "click", "disabled"],
            [1, "app-button-spinner-pos-absolute", "d-flex", "justify-content-center", "align-items-center"],
            [3, "diameter", "strokeWidth"]
        ],
        template: function(i, a) {
            if (i & 1 && (o(0, "div", 0)(1, "div", 1), s(2, " Wpisz e-mail powi\u0105zany z kontem ZIU. Je\u015Bli nie przypisywa\u0142e\u015B adresu e-mail, skontaktuj si\u0119 z dyrektorem szko\u0142y lub OKE. "), r(), o(3, "form", 2)(4, "mat-form-field")(5, "mat-label"), s(6, "Adres e-mail"), r(), p(7, "input", 3), o(8, "mat-hint", 4), s(9, "Wpisz sw\xF3j login, kt\xF3ry otrzyma\u0142e\u015B od Dyrektora Szko\u0142y"), r(), _(10, _o, 2, 0, "mat-error"), _(11, xo, 2, 0, "mat-error"), r(), _(12, wo, 3, 3, "mat-error", 5), u(13, "async"), o(14, "div", 6)(15, "button", 7), s(16, " Anuluj "), r(), o(17, "button", 8), u(18, "async"), P("click", function() {
                    return a.sendEmail()
                }), _(19, Co, 2, 2, "div", 9), u(20, "async"), Ot(21, yo, 1, 0), r()()()()), i & 2) {
                let m, K, A;
                l(3), d("formGroup", a.form), l(7), x(!(a.form == null || (m = a.form.get("Email")) == null) && m.hasError("required") ? 10 : -1), l(), x(!(a.form == null || (K = a.form.get("Email")) == null) && K.hasError("email") ? 11 : -1), l(), x(!((A = g(13, 7, a.sendErrors$)) == null || A.error == null) && A.error.Errors ? 12 : -1), l(3), d("routerLink", "/login"), l(2), d("disabled", g(18, 9, a.sendLoading$)), l(2), x(g(20, 11, a.sendLoading$) ? 19 : 21)
            }
        },
        dependencies: [S, E, v, z, L, ct, st, de, W, gt, X, ut, mt, pt, dt, St, kt, O, M],
        styles: [".ziu-login-button[_ngcontent-%COMP%]{margin-bottom:30px;border-radius:23px;background:var(--on-background-success);color:#fff!important;transition:.25s;min-height:43px}.ziu-login-button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}.ziu-login-button--disabled[_ngcontent-%COMP%]{background:#ccc;box-shadow:none}.ziu-login-button--disabled[_ngcontent-%COMP%]:hover{background:#ccc}.error-message[_ngcontent-%COMP%]{padding:0;border-radius:15px}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}[_nghost-%COMP%]     .mat-mdc-progress-spinner circle, .mat-mdc-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#fff}"],
        data: {
            animation: [je("slideInOut", [be(":enter", [Zt({
                transform: "translateX(-1000px)",
                opacity: 0
            }), Pe("0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)", Zt({
                transform: "translateX(0)",
                opacity: 1
            }))]), be(":leave", [Zt({
                transform: "translateX(0)",
                opacity: 1
            }), Pe("0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)", Zt({
                transform: "translateX(1000px)",
                opacity: 0
            }))])])]
        }
    });
    let e = t;
    return e
})();
var xi = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-send-mail-to-reset-password-success"]
        ],
        standalone: !1,
        decls: 9,
        vars: 0,
        consts: [
            ["fxLayoutAlign", "center center"],
            ["fxLayout", "row"],
            [1, "text-center", "mb-4"],
            [1, "email-changed__paragraph", "text-center"],
            ["mat-flat-button", "", "routerLink", "/login", 1, "w-100", "mt-4", "ziu-login-button", "text-uppercase"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0)(1, "div", 1)(2, "div")(3, "h4", 2), s(4, "Link wys\u0142any"), r(), o(5, "div", 3), s(6, " Na podany adres e-mail wys\u0142ali\u015Bmy wiadomo\u015B\u0107 z linkiem zmiany has\u0142a. "), r(), o(7, "button", 4), s(8, " wr\xF3\u0107 do logowania "), r()()()())
        },
        dependencies: [S, v, L, O],
        styles: [".ziu-login-button[_ngcontent-%COMP%]{margin-bottom:30px;border-radius:23px;background:var(--on-background-success);color:#fff!important;transition:.25s;min-height:43px}.ziu-login-button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}.ziu-login-button--disabled[_ngcontent-%COMP%]{background:#ccc;box-shadow:none}.ziu-login-button--disabled[_ngcontent-%COMP%]:hover{background:#ccc}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}"]
    });
    let e = t;
    return e
})();
var Lt = class {
    static isKeyLengthCorrect(t, c = 32) {
        return t.length === c
    }
};

function vo(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Pole has\u0142o nie mo\u017Ce zosta\u0107 puste"), r())
}

function Po(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Pole nie mo\u017Ce by\u0107 puste"), r())
}

function bo(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Pole powt\xF3rz has\u0142o powinno by\u0107 takie same jak nowe has\u0142o"), r())
}

function So(e, t) {
    if (e & 1 && (o(0, "mat-error", 19), s(1), u(2, "async"), r()), e & 2) {
        let c, n = h(5);
        l(), B(" ", ((c = g(2, 1, n.sendErrors$)) == null || c.error == null ? null : c.error.Errors)[0] == null ? null : ((c = c) == null || c.error == null ? null : c.error.Errors)[0].Message, " ")
    }
}

function ko(e, t) {
    e & 1 && (Et(0), o(1, "div", 20), p(2, "mat-spinner", 21), r(), Dt()), e & 2 && (l(2), d("diameter", 24)("strokeWidth", 3))
}

function Mo(e, t) {
    e & 1 && s(0, " Zmie\u0144 has\u0142o ")
}

function Lo(e, t) {
    if (e & 1) {
        let c = vt();
        Et(0), o(1, "form", 8), P("ngSubmit", function() {
            Y(c);
            let i = h(4);
            return J(i.changePassword())
        }), o(2, "mat-form-field", 9)(3, "mat-label"), s(4, "Nowe has\u0142o"), r(), o(5, "input", 10), P("keyup", function() {
            Y(c);
            let i = h(4);
            return J(i.updateValidation("repeatedNewPassword"))
        }), r(), o(6, "mat-icon", 11), s(7, "remove_red_eye"), r(), I(8, vo, 2, 0, "mat-error", 7), r(), o(9, "mat-form-field", 9)(10, "mat-label"), s(11, "Powt\xF3rz nowe has\u0142o"), r(), o(12, "input", 12), P("keyup", function() {
            Y(c);
            let i = h(4);
            return J(i.updateValidation("newPassword"))
        }), r(), I(13, Po, 2, 0, "mat-error", 7)(14, bo, 2, 0, "mat-error", 7), r(), I(15, So, 3, 3, "mat-error", 13), u(16, "async"), o(17, "div", 14), p(18, "app-password-strength-bar", 15), r(), o(19, "div", 16), p(20, "app-validators-list", 17), r(), o(21, "button", 18), u(22, "async"), I(23, ko, 3, 2, "ng-container", 4), u(24, "async"), I(25, Mo, 1, 0, "ng-template", null, 2, et), r()(), Dt()
    }
    if (e & 2) {
        let c, n, i, a = Nt(26),
            m = h(4);
        l(), d("formGroup", m.form), l(7), d("ngIf", m.form == null || (c = m.form.get("newPassword")) == null ? null : c.hasError("required")), l(5), d("ngIf", m.form == null || (n = m.form.get("repeatedNewPassword")) == null ? null : n.hasError("required")), l(), d("ngIf", m.form == null || (i = m.form.get("repeatedNewPassword")) == null ? null : i.hasError("otherThanNewPassword")), l(), d("ngIf", g(16, 10, m.sendErrors$)), l(3), d("errors", m.form.controls.newPassword.errors), l(2), d("form", m.form), l(), d("disabled", g(22, 12, m.sendLoading$)), l(2), d("ngIf", g(24, 14, m.sendLoading$))("ngIfElse", a)
    }
}

function Oo(e, t) {
    if (e & 1 && (Et(0), I(1, Lo, 27, 16, "ng-container", 7), Dt()), e & 2) {
        let c = h(3);
        l(), d("ngIf", c.form)
    }
}

function Eo(e, t) {
    if (e & 1 && (o(0, "div", 6), I(1, Oo, 2, 1, "ng-container", 4), u(2, "async"), r()), e & 2) {
        let c = h(2),
            n = Nt(4);
        l(), d("ngIf", !g(2, 2, c.emailValidationErrors$))("ngIfElse", n)
    }
}

function Do(e, t) {
    if (e & 1 && (Et(0), I(1, Eo, 3, 4, "div", 5), u(2, "async"), Dt()), e & 2) {
        let c = h(),
            n = Nt(2);
        l(), d("ngIf", !g(2, 2, c.emailValidationLoading$))("ngIfElse", n)
    }
}

function zo(e, t) {
    e & 1 && (o(0, "div", 22), p(1, "mat-spinner"), r())
}

function Fo(e, t) {
    e & 1 && (o(0, "span"), s(1, " Podany link do zmiany has\u0142a jest nieprawid\u0142owy "), r())
}

function Ao(e, t) {
    e & 1 && s(0, "Link aktywacyjny do zmiany has\u0142a wygas\u0142")
}

function To(e, t) {
    if (e & 1 && (o(0, "div", 23), p(1, "div", 24), o(2, "div", 25)(3, "h4", 26), I(4, Fo, 2, 0, "span", 4), r(), I(5, Ao, 1, 0, "ng-template", null, 3, et), o(7, "button", 27), s(8, " WR\xD3\u0106 DO LOGOWANIA "), r()()()), e & 2) {
        let c = Nt(6),
            n = h();
        l(4), d("ngIf", n.incorrectLink)("ngIfElse", c)
    }
}
var wi = (() => {
    let t = class t {
        constructor(n, i, a, m, K) {
            this.store = n, this.router = i, this.snackBar = a, this.route = m, this.formValidators = K, this.matcher = new Xn, this.passwordStrength = 0, this.passwordStrengthColor = "accent", this.incorrectLink = !1, this.destroyed$ = new Z, this.isNewPasswordEqualToNewRepeatedPassword = () => this.form.controls.repeatedNewPassword.value !== "" && this.form.controls.newPassword.value !== this.form.controls.repeatedNewPassword.value ? {
                otherThanRepeatedNewPassword: !0
            } : null, this.isNewRepeatedPasswordEqualToNewPassword = A => A.value !== this.form.controls.newPassword.value || A.value === "" || A.value === null ? {
                otherThanNewPassword: !0
            } : null, this.isOtherThanLogin = A => A.value === this.login || A.value === "" ? {
                sameAsLogin: !0
            } : null, this.haveMinLength = A => A.value ? A.value.length < 12 ? {
                dontHaveMinLength: !0
            } : null : {
                dontHaveMinLength: !0
            }
        }
        ngOnInit() {
            this.route.queryParams.pipe().subscribe(n => {
                Lt.isKeyLengthCorrect(n ? .Key) ? this.store.dispatch(y.confirmNewPasswordKeyActions.send({
                    payload: n
                })) : this.incorrectLink = !0
            }), this.form = new ge({
                newPassword: new Jt("", []),
                repeatedNewPassword: new Jt("")
            }), this.sendSuccess$ = this.store.select($.getConfirmResetPassowrdSuccess), this.sendLoading$ = this.store.select($.getConfirmResetPassowrdLoading), this.sendErrors$ = this.store.select($.getConfirmResetPassowrdError), this.emailValidationErrors$ = this.store.select(qe), this.emailValidationLoading$ = this.store.select(Ze), this.form.controls.repeatedNewPassword.setValidators([H.required, this.isNewRepeatedPasswordEqualToNewPassword]), this.form.controls.newPassword.setValidators([H.required, this.haveMinLength, this.isOtherThanLogin, this.isNewPasswordEqualToNewRepeatedPassword, this.formValidators.haveAtLeastOneSpecialChar, this.formValidators.firstAndLastIsNotSpecialOrNumber, this.formValidators.isNotOnBlacklist, this.formValidators.includesForbiddenWords, this.formValidators.haveLowerAndUpperCaseLetters]), this.startListenToRequesFail(), this.startListenToRequestSuccess()
        }
        ngOnDestroy() {
            this.store.dispatch(y.confirmResetPasswordActions.clear()), this.store.dispatch(y.confirmNewPasswordKeyActions.clear()), this.store.dispatch(new Sn), this.destroyed$.next(!0), this.destroyed$.complete()
        }
        updateValidation(n) {
            this.form.controls[n].updateValueAndValidity()
        }
        changePassword() {
            this.form.valid && this.route.queryParams.pipe(q(n => !!n), it()).subscribe(n => {
                let i = Ct({
                    Password: this.form.value.newPassword
                }, n);
                this.store.dispatch(y.confirmResetPasswordActions.send({
                    payload: i
                }))
            }), this.sendSuccess$.pipe(tt(this.destroyed$)).subscribe(n => {
                n && this.router.navigate(["./konto/nowe-haslo-potwierdzenie"])
            })
        }
        handleErrorResponse() {
            this.snackBar.open("Stare has\u0142o jest niepoprawne", "OK", {
                duration: 4e3
            }), this.form.reset()
        }
        handlePasswordChange() {
            this.router.navigate(["..", "zresetowano-haslo"], {
                relativeTo: this.route
            })
        }
        startListenToRequesFail() {}
        startListenToRequestSuccess() {}
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(b), w(D), w(jn), w(Q), w(he))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-reset-password"]
        ],
        standalone: !1,
        features: [dn([he])],
        decls: 5,
        vars: 2,
        consts: [
            ["pageSpinner", ""],
            ["errorView", ""],
            ["nonLoading", ""],
            ["emailExpired", ""],
            [4, "ngIf", "ngIfElse"],
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px", 4, "ngIf", "ngIfElse"],
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px"],
            [4, "ngIf"],
            ["fxLayout", "column", 3, "ngSubmit", "formGroup"],
            [1, "mt-1"],
            ["tabindex", "7", "id", "newPassword", "type", "password", "formControlName", "newPassword", "matInput", "", "autocomplete", "off", "showHideInput", "", 3, "keyup"],
            ["showHideTrigger", "newPassword", "matSuffix", "", 1, "input-icon", "material-icons", "pointer-event"],
            ["tabindex", "7", "id", "repeatedNewPassword", "type", "password", "autocomplete", "off", "formControlName", "repeatedNewPassword", "matInput", "", 3, "keyup"],
            ["class", "error-message my-3", "role", "alert", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 4, "ngIf"],
            [1, "mt-3"],
            [3, "errors"],
            ["role", "alert", 1, "validators"],
            [3, "form"],
            ["type", "submit", "fxLayout", "row", "fxLayoutAlign", "center center", "mat-button", "", 1, "mt-5", "mb-5", 3, "disabled"],
            ["role", "alert", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "error-message", "my-3"],
            [1, "app-button-spinner-pos-absolute", "d-flex", "justify-content-center", "align-items-center"],
            [3, "diameter", "strokeWidth"],
            [1, "page-spinner-container", "d-flex", "justify-content-center", "justify-content-center"],
            ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "100%", 1, "password-changed"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container w-100", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
            [1, "login-page-container__login-form-container"],
            [1, "text-center", "mb-4"],
            ["mat-button", "", "routerLink", "/zdajacy/moje-konto", 1, "w-100", "mt-4", "btn-lg", "text-uppercase", "ft-14", "mb-0", "ziu-login-button"]
        ],
        template: function(i, a) {
            if (i & 1 && I(0, Do, 3, 4, "ng-container", 4)(1, zo, 2, 0, "ng-template", null, 0, et)(3, To, 9, 2, "ng-template", null, 1, et), i & 2) {
                let m = Nt(4);
                d("ngIf", !a.incorrectLink)("ngIfElse", m)
            }
        },
        dependencies: [j, un, S, E, v, z, N, R, L, ct, st, W, ue, gt, X, $n, ut, mt, pt, dt, St, kt, Yn, qn, Jn, Qn, O, M],
        styles: [".header[_ngcontent-%COMP%], .password-changed__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}.ziu-login-button[_ngcontent-%COMP%]{margin-bottom:20px;border-radius:23px;background:var(--on-background-success);color:#fff!important;cursor:pointer;transition:.25s;min-height:43px}.ziu-login-button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}.ziu-login-button--disabled[_ngcontent-%COMP%]{background:#ccc;box-shadow:none}.ziu-login-button--disabled[_ngcontent-%COMP%]:hover{background:#ccc}.password-changed[_ngcontent-%COMP%]{margin-top:50px}.password-changed__header[_ngcontent-%COMP%]{text-align:center;font-weight:400}.password-changed__paragraph[_ngcontent-%COMP%]{font-weight:300;color:#4f4f4f;text-align:center}form[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]{color:var(--on-background-inactive)}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--on-background-success);box-shadow:0 8px 16px #1cbe0026;color:#fff!important;font-weight:700;letter-spacing:.06em;transition:.25s;height:39px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}form[_ngcontent-%COMP%]   button.disabled[_ngcontent-%COMP%]{background:#ccc;box-shadow:none}form[_ngcontent-%COMP%]   button.disabled[_ngcontent-%COMP%]:hover{background:#ccc}form[_ngcontent-%COMP%]   .validators__header[_ngcontent-%COMP%]{font-size:1rem;color:var(--on-background-grey)}form[_ngcontent-%COMP%]   .validators__list[_ngcontent-%COMP%]{margin-left:13px;margin-top:5px;color:var(--on-background-validator-list-items)}form[_ngcontent-%COMP%]   .validators__list[_ngcontent-%COMP%]   .validator-icon[_ngcontent-%COMP%]{margin-top:5px;margin-right:9px;font-size:12px;color:var(--on-background-inactive)}form[_ngcontent-%COMP%]   .validators__list[_ngcontent-%COMP%]   .validator-icon--fail[_ngcontent-%COMP%]{color:var(--on-background-inactive)}form[_ngcontent-%COMP%]   .validators__list[_ngcontent-%COMP%]   .validator-icon--success[_ngcontent-%COMP%]{color:var(--on-background-success-dark)}[_nghost-%COMP%]   mat-spinner[_ngcontent-%COMP%]{width:20px!important;height:20px!important}[_nghost-%COMP%]     mat-spinner svg{width:20px!important;height:20px!important}[_nghost-%COMP%]     .mat-mdc-progress-spinner circle, .mat-mdc-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#fff}"]
    });
    let e = t;
    return e
})();
var Ci = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-reset-password-success"]
        ],
        standalone: !1,
        decls: 9,
        vars: 0,
        consts: [
            ["fxLayoutAlign", "center center"],
            ["fxLayout", "row", "fxFlex", "75%", "fxFlex.lt-md", "100%"],
            [1, "text-center", "mb-4"],
            [1, "text-center"],
            ["mat-button", "", "routerLink", "/login", 1, "w-100", "mt-4", "ziu-login-button", "text-uppercase"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0)(1, "div", 1)(2, "div")(3, "h4", 2), s(4, "Has\u0142o zosta\u0142o zmienione"), r(), o(5, "div", 3), s(6, "Poprawnie zmienili\u015Bmy has\u0142o do Twojego konta."), r(), o(7, "button", 4), s(8, " wr\xF3\u0107 do logowania "), r()()()())
        },
        dependencies: [S, v, z, L, O],
        styles: [".ziu-login-button[_ngcontent-%COMP%]{margin-bottom:30px;border-radius:23px;background:var(--on-background-success);color:#fff!important;transition:.25s;min-height:43px}.ziu-login-button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}.ziu-login-button--disabled[_ngcontent-%COMP%]{background:#ccc;box-shadow:none}.ziu-login-button--disabled[_ngcontent-%COMP%]:hover{background:#ccc}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}"]
    });
    let e = t;
    return e
})();

function Io(e, t) {
    e & 1 && (o(0, "div", 6), p(1, "img", 11), r())
}

function jo(e, t) {
    if (e & 1 && (o(0, "div"), p(1, "img", 12), u(2, "async"), p(3, "img", 13), u(4, "async"), r()), e & 2) {
        let c = h();
        l(), d("fxShow", !g(2, 2, c.isHighContrast$)), l(2), d("fxShow", g(4, 4, c.isHighContrast$))
    }
}

function No(e, t) {
    e & 1 && p(0, "img", 9)
}

function Ro(e, t) {
    e & 1 && p(0, "img", 10)
}
var yi = (() => {
    let t = class t {
        constructor(n, i) {
            this.store = n, this.router = i
        }
        ngOnInit() {
            this.isHighContrast$ = this.store.select(Pt)
        }
        successView() {
            return this.router.url.includes("potwierdzenie") && !this.router.url.includes("zmiana-hasla-potwierdzenie?")
        }
        setPasswordSuccessView() {
            return this.router.url.includes("/konto/zmiana-hasla-potwierdzenie-sukces")
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(b), w(D))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-reset"]
        ],
        standalone: !1,
        decls: 14,
        vars: 4,
        consts: [
            ["ngClass", "login-page-container", "ngStyle.xs", "login-page-container--mobile"],
            ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "w-100"],
            ["fxFlexAlign", "end", 1, "mt-1"],
            ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "90px", 1, "w-100", "mt-5"],
            ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "50%"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container mt-4 w-100", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
            ["fxLayoutAlign", "center center"],
            ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mt-4", "w-100"],
            ["fxHide.lt-md", "true", "fxFlex", "50%"],
            ["src", "./../../../../assets/icons/wk-side-image.svg", "alt", "", 1, "w-100", "image-margin"],
            ["src", "./../../../../assets/icons/side_illustration_my_account.svg", "alt", "", 1, "w-100", "image-margin"],
            ["src", "../../../../assets/icons/potwierdzenie.jfif", "alt", "", 1, "ms-2", "w-50"],
            ["src", "./../../../../assets/icons/ziu_logo_with_subtitle.svg", "alt", "logo Zintegrowanego Interfejsu u\u017Cytkownika", 3, "fxShow"],
            ["src", "./../../../../assets/icons/ziu_logo_with_subtitle-black.svg", "alt", "logo Zintegrowanego Interfejsu u\u017Cytkownika", 3, "fxShow"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0), p(1, "app-skip-link-button"), o(2, "div", 1), p(3, "app-theme-settings", 2), o(4, "div", 3)(5, "div", 4)(6, "div", 5), _(7, Io, 2, 0, "div", 6), _(8, jo, 5, 6, "div"), o(9, "div", 7), p(10, "router-outlet"), r()()(), o(11, "div", 8), _(12, No, 1, 0, "img", 9), _(13, Ro, 1, 0, "img", 10), r()()()()), i & 2 && (l(7), x(a.successView() ? 7 : -1), l(), x(a.successView() ? -1 : 8), l(4), x(a.setPasswordSuccessView() ? -1 : 12), l(), x(a.setPasswordSuccessView() ? 13 : -1))
        },
        dependencies: [j, S, E, v, bt, z, at, N, R, lt, Wt, ae, M],
        styles: [".ziu-login-button[_ngcontent-%COMP%]{margin-bottom:30px;border-radius:23px;background:var(--on-background-success);color:#fff!important;box-shadow:0 8px 16px #1cbe0026;transition:.25s;min-height:43px}.ziu-login-button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}.ziu-login-button--disabled[_ngcontent-%COMP%]{background:#ccc;box-shadow:none}.ziu-login-button--disabled[_ngcontent-%COMP%]:hover{background:#ccc}.login-page-container[_ngcontent-%COMP%]{max-width:1000px;min-width:300px;padding:0 40px;margin:0 auto}.login-page-container--mobile[_ngcontent-%COMP%]{padding:0 20px}.error-message[_ngcontent-%COMP%]{padding:11px 13px;border-radius:15px;background-color:#f355440d}.login-form-container__ziu-logo-subheader[_ngcontent-%COMP%]{color:var(--on-background-primary-light);font-size:16px;text-align:center;font-weight:700}.login-page-container__login-form-container[_ngcontent-%COMP%]{margin-top:66px;max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}"]
    });
    let e = t;
    return e
})();

function $o(e, t) {
    e & 1 && (o(0, "div", 2)(1, "div", 3)(2, "h4", 4), s(3, "Adres e-mail zosta\u0142 zmieniony"), r(), o(4, "div", 5), s(5, "Poprawnie zmienili\u015Bmy adres e-mail powi\u0105zany z Twoim kontem ZIU."), r(), o(6, "button", 6), s(7, " Wr\xF3\u0107 do logowania "), r()()())
}

function Bo(e, t) {
    e & 1 && (o(0, "span"), s(1, " Podany link do zmiany adresu e-mail jest nieprawid\u0142owy "), r())
}

function Vo(e, t) {
    if (e & 1 && (s(0), u(1, "async")), e & 2) {
        let c, n = h(3);
        B(" ", (c = g(1, 1, n.sendErrors$)) == null || c.error == null || c.error.Errors[0] == null ? null : c.error.Errors[0].Message, " ")
    }
}

function Uo(e, t) {
    if (e & 1 && (o(0, "div", 2), p(1, "div", 7), o(2, "div", 8)(3, "h4", 4), s(4, " B\u0142\u0105d: "), _(5, Bo, 2, 0, "span")(6, Vo, 2, 3), r(), o(7, "button", 6), s(8, " WR\xD3\u0106 DO LOGOWANIA "), r()()()), e & 2) {
        let c = h(2);
        l(5), x(c.incorrectLink ? 5 : 6)
    }
}

function Wo(e, t) {
    if (e & 1 && (o(0, "div", 0), _(1, $o, 8, 0, "div", 2), u(2, "async"), Ot(3, Uo, 9, 1, "div", 2), r()), e & 2) {
        let c = h();
        l(), x(g(2, 1, c.sendSuccess$) ? 1 : 3)
    }
}

function Ho(e, t) {
    e & 1 && (o(0, "div", 1), p(1, "mat-spinner"), r())
}
var vi = (() => {
    let t = class t {
        constructor(n, i) {
            this.store = n, this.route = i, this.sessionEnum = Nn, this.incorrectLink = !1
        }
        ngOnInit() {
            this.user$ = this.store.select(Rn), this.route.queryParams.pipe(it()).subscribe(n => {
                Lt.isKeyLengthCorrect(n ? .Key) ? this.store.dispatch(y.confirmChangeEmailActions.send({
                    payload: n
                })) : this.incorrectLink = !0
            }), this.sendSuccess$ = this.store.select($.getConfirmChangeEmailSuccess), this.sendLoading$ = this.store.select($.getConfirmChangeEmailLoading), this.sendErrors$ = this.store.select($.getConfirmChangeEmailError)
        }
        ngOnDestroy() {
            this.store.dispatch(y.confirmChangeEmailActions.clear())
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(b), w(Q))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-email-changed-successfully"]
        ],
        standalone: !1,
        decls: 3,
        vars: 3,
        consts: [
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px"],
            [1, "page-spinner-container", "d-flex", "justify-content-center", "justify-content-center"],
            ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "100%", 1, "email-changed"],
            [1, "change-data-container"],
            [1, "text-center", "mb-4"],
            [1, "email-changed__paragraph"],
            ["mat-flat-button", "", "routerLink", "/zdajacy/moje-konto", 1, "w-100", "mt-4", "btn-lg", "text-uppercase", "ft-14", "mb-0", "button-bg-color"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container w-100", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
            [1, "login-page-container__login-form-container"]
        ],
        template: function(i, a) {
            i & 1 && (_(0, Wo, 4, 3, "div", 0), u(1, "async"), Ot(2, Ho, 2, 0, "div", 1)), i & 2 && x(g(1, 1, a.sendLoading$) ? 2 : 0)
        },
        dependencies: [j, S, E, v, z, N, R, L, X, O, M],
        styles: [".header[_ngcontent-%COMP%], .email-changed__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.email-changed[_ngcontent-%COMP%]{margin-top:50px}.email-changed__header[_ngcontent-%COMP%]{text-align:center;font-weight:400}.email-changed__paragraph[_ngcontent-%COMP%]{font-weight:300;color:#4f4f4f;text-align:center}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}.button-bg-color[_ngcontent-%COMP%]{background-color:var(--on-background-success)!important;color:var(--always-white)!important}"]
    });
    let e = t;
    return e
})();
var Yt = (() => {
    let t = class t {
        constructor(n, i) {
            this.http = n, this.router = i, this.notification$ = new tn(null), this.startNotificationRefresher(0)
        }
        loadServiceInfoConfig() {
            return this.http.get("/ziuzshared/_prace_serwisowe.json").pipe(k(i => ({
                Komunikat: i.Komunikat,
                Do: new Date(i.Do),
                InfoOd: new Date(i.InfoOd),
                BlokadaOd: new Date(i.BlokadaOd)
            })))
        }
        isBlocked() {
            let n = this.notification$.value;
            return n && Ut.isBetween(n.BlokadaOd, n.Do, "minute")
        }
        isInfo() {
            let n = this.notification$.value;
            return n && !this.isBlocked() && Ut.isBetween(n.InfoOd, n.Do, "minute")
        }
        isLessThanTenMinToEnd() {
            let n = this.notification$.value;
            return n && Ut.isSameOrBefore(n.Do) && this.timeDiffWithCurrentTime() < 6e4
        }
        timeDiffWithCurrentTime() {
            let n = this.notification$.value;
            return Ut.diffBetweenNumber(Ut.getCurrentDate(), n.Do, "milliseconds")
        }
        startNotificationRefresher(n) {
            setTimeout(() => {
                this.loadServiceInfoConfig().pipe(ne(1)).subscribe(i => {
                    this.notification$.next(i), this.isLessThanTenMinToEnd() ? (this.redirectToMainPage(this.timeDiffWithCurrentTime()), this.startNotificationRefresher(this.timeDiffWithCurrentTime())) : this.isBlocked() ? (this.router.navigate(["prace-serwisowe"]), this.startNotificationRefresher(6e4)) : this.isInfo() ? this.startNotificationRefresher(6e4) : this.startNotificationRefresher(36e5)
                }, () => {
                    this.notification$.next(null), this.startNotificationRefresher(6e4)
                })
            }, n)
        }
        redirectToMainPage(n) {
            setTimeout(() => {
                this.router.navigate(["/"])
            }, n)
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(T(oe), T(D))
    }, t.\u0275prov = U({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
})();

function Ko(e, t) {
    if (e & 1 && (p(0, "div", 10), u(1, "async"), u(2, "appSafeHtml")), e & 2) {
        let c, n = h();
        d("innerHTML", g(2, 3, (c = g(1, 1, n.notification$)) == null ? null : c.Komunikat), sn)
    }
}
var Pi = (() => {
    let t = class t {
        constructor(n, i) {
            this.maintenanceNotificationsService = n, this.store = i, this.notification$ = new Z
        }
        ngOnInit() {
            this.notification$ = this.maintenanceNotificationsService.notification$, this.isHightContrast$ = this.store.select(Pt)
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(Yt), w(b))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-maintenance-page"]
        ],
        standalone: !1,
        decls: 24,
        vars: 9,
        consts: [
            ["ngClass", "login-page-container", "ngStyle.xs", "login-page-container--mobile", 1, "mb-5"],
            ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "w-100"],
            ["fxFlexAlign", "end", 1, "mt-1"],
            ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "90px", 1, "w-100"],
            ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "50%"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
            ["src", "../../../../assets/icons/ziu_logo_with_subtitle.svg", "alt", "logo Zintegrowanego Interfejsu u\u017Cytkownika", 3, "fxShow"],
            ["src", "../../../../assets/icons/ziu_logo_with_subtitle-black.svg", "alt", "logo Zintegrowanego Interfejsu u\u017Cytkownika", 3, "fxShow"],
            [1, "sr-only"],
            [1, "mt-5", "pt-3", "text-center"],
            [1, "mt-4", 3, "innerHTML"],
            ["fxHide", "", "fxShow.gt-sm", "true", "fxFlex", "50%", 1, "mt-5"],
            ["src", "../../../../assets/icons/wk-side-image.svg", "alt", "", 1, "w-100", "login-page-container__side_illustration"]
        ],
        template: function(i, a) {
            if (i & 1 && (o(0, "div", 0), p(1, "app-skip-link-button"), o(2, "div", 1), p(3, "app-theme-settings", 2), o(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div"), p(8, "img", 6), u(9, "async"), p(10, "img", 7), u(11, "async"), r(), o(12, "h1", 8), s(13, "Zintegrowany Interfejs u\u017Cytkownika"), r(), o(14, "h2", 8), s(15, "Zaloguj si\u0119"), r(), o(16, "div", 9)(17, "h4"), s(18, "Prace serwisowe ZIU"), r(), _(19, Ko, 3, 5, "div", 10), u(20, "async"), r()()(), o(21, "div", 11), p(22, "img", 12), r()()()(), p(23, "app-start-page-footer")), i & 2) {
                let m;
                l(8), d("fxShow", !g(9, 3, a.isHightContrast$)), l(2), d("fxShow", g(11, 5, a.isHightContrast$)), l(9), x((m = g(20, 7, a.notification$)) != null && m.Komunikat ? 19 : -1)
            }
        },
        dependencies: [j, S, E, v, bt, z, at, N, R, lt, Wt, At, M, Vn],
        styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}.login-page-container[_ngcontent-%COMP%]{max-width:1000px;min-width:300px;padding:0 10px;margin:0 auto}.login-page-container--mobile[_ngcontent-%COMP%]{padding:0 10px}.login-page-container__login-form-container[_ngcontent-%COMP%]{margin-top:66px;max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.login-page-container__side_illustration[_ngcontent-%COMP%]{margin-top:90px}.login-form-container__ziu-logo-subheader[_ngcontent-%COMP%]{color:var(--on-background-primary-light);font-size:16px;text-align:center;font-weight:700}.login-info[_ngcontent-%COMP%]{text-align:center;color:var(--on-background-primary-light)}"]
    });
    let e = t;
    return e
})();
var wt = (() => {
    let t = class t {
        constructor(n, i) {
            this.maintenanceNotificationsService = n, this.router = i
        }
        canActivate() {
            return this.maintenanceNotificationsService.isBlocked() ? (this.router.navigate(["prace-serwisowe"]), !1) : !0
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(T(Yt), T(D))
    }, t.\u0275prov = U({
        token: t,
        factory: t.\u0275fac
    });
    let e = t;
    return e
})();
var bi = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-user-and-results-not-found"]
        ],
        standalone: !1,
        decls: 3,
        vars: 0,
        consts: [
            [1, "d-flex", "flex-column", "w-100", "align-items-center"],
            [1, "mt-5"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0)(1, "app-info-alert", 1), s(2, " Nie mo\u017Cna z\u0142o\u017Cy\u0107 e-deklaracji. Nale\u017Cy skontaktowa\u0107 si\u0119 ze szko\u0142\u0105 macierzyst\u0105 w celu dodania danych osobowych do sesji egzaminacyjnej w SIOEO. "), r()())
        },
        dependencies: [ti],
        encapsulation: 2
    });
    let e = t;
    return e
})();

function Zo(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Pole nie mo\u017Ce by\u0107 puste"), r())
}

function qo(e, t) {
    if (e & 1 && (o(0, "mat-error"), s(1), u(2, "async"), r()), e & 2) {
        let c = h();
        l(), B(" ", g(2, 1, c.errorMessage$), " ")
    }
}
var Si = (() => {
    let t = class t {
        constructor(n, i) {
            this.store = n, this.route = i, this.isHighContrast = !1, this.pesel = this.route.snapshot.queryParams.data, this.form = new Un({
                PoprzednieNazwisko: new fe("")
            })
        }
        ngOnInit() {
            this.errors$ = this.store.select(te.getConfirmWkAccountDataSelectors.selectError), this.errorMessage$ = this.errors$.pipe(k(Kt.getErrorMessage)), this.loading$ = this.store.select(te.getConfirmWkAccountDataSelectors.selectLoading)
        }
        onSubmit() {
            this.form.valid && this.store.dispatch(ye.confirmWkAccountDataActions.send({
                payload: this.form.value
            }))
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(b), w(Q))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-confirm-user-surname-form"]
        ],
        inputs: {
            isHighContrast: "isHighContrast"
        },
        standalone: !1,
        decls: 15,
        vars: 6,
        consts: [
            [1, "my-5", "text-center"],
            [1, "mb-5", 3, "submit", "formGroup"],
            [1, "w-100"],
            ["matInput", "", "required", "", "formControlName", "PoprzednieNazwisko", "autocomplete", "off"],
            [1, "d-flex", "flex-row", "mt-5"],
            ["mat-button", "", "type", "button", "routerLink", "/login", 1, "ziu-button--gray", "text-uppercase", "me-3"],
            ["mat-button", "", "type", "submit", 1, "ziu-button--green", "text-uppercase"]
        ],
        template: function(i, a) {
            if (i & 1 && (o(0, "h4", 0), s(1), r(), o(2, "form", 1), P("submit", function() {
                    return a.onSubmit()
                }), o(3, "mat-form-field", 2)(4, "mat-label"), s(5, "Poprzednie nazwisko"), r(), p(6, "input", 3), _(7, Zo, 2, 0, "mat-error"), r(), o(8, "div", 4)(9, "button", 5), s(10, "Anuluj"), r(), o(11, "button", 6), s(12, "Zmie\u0144"), r()(), _(13, qo, 3, 3, "mat-error"), u(14, "async"), r()), i & 2) {
                let m;
                l(), B(" W historii wynik\xF3w dla numeru PESEL: ", a.pesel || "", ` istnieje inne nazwisko. Nale\u017Cy wprowadzi\u0107 poprzednie nazwisko.
`), l(), d("formGroup", a.form), l(5), x(!(a.form == null || (m = a.form.get("PoprzednieNazwisko")) == null) && m.hasError("required") ? 7 : -1), l(6), x(g(14, 4, a.errors$) ? 13 : -1)
            }
        },
        dependencies: [L, ct, st, W, gt, ut, mt, pt, dt, Gn, St, kt, O, M],
        styles: [".header-section[_ngcontent-%COMP%]{font-weight:600;font-size:30px}"]
    });
    let e = t;
    return e
})();

function Yo(e, t) {
    e & 1 && (o(0, "mat-error"), s(1, "Pole nie mo\u017Ce by\u0107 puste"), r())
}

function Jo(e, t) {
    if (e & 1 && (o(0, "div", 8), s(1), r()), e & 2) {
        let c = t;
        l(), _t(c == null || c.error == null || c.error.Errors[0] == null ? null : c.error.Errors[0].Message)
    }
}

function Qo(e, t) {
    e & 1 && (o(0, "div", 12), p(1, "mat-spinner", 13), r()), e & 2 && (l(), d("diameter", 24)("strokeWidth", 3))
}

function Xo(e, t) {
    e & 1 && s(0, " Wy\u015Blij ")
}

function tr(e, t) {
    if (e & 1) {
        let c = vt();
        o(0, "div", 2)(1, "div", 3)(2, "div", 4), s(3, "Wpisz ustalone wcze\u015Bniej has\u0142o, aby potwierdzi\u0107 operacj\u0119"), r(), o(4, "form", 5), P("ngSubmit", function() {
            Y(c);
            let i = h();
            return J(i.onSubmit())
        }), o(5, "mat-form-field", 6)(6, "mat-label"), s(7, "Has\u0142o"), r(), p(8, "input", 7), _(9, Yo, 2, 0, "mat-error"), r()(), _(10, Jo, 2, 1, "div", 8), u(11, "async"), o(12, "div", 9)(13, "button", 10), s(14, " Anuluj "), r(), o(15, "button", 11), u(16, "async"), P("click", function() {
            Y(c);
            let i = h();
            return J(i.onSubmit())
        }), _(17, Qo, 2, 2, "div", 12), u(18, "async"), Ot(19, Xo, 1, 0), r()()()()
    }
    if (e & 2) {
        let c, n = h();
        l(8), d("formControl", n.Password), l(), x(n.Password != null && n.Password.hasError("required") ? 9 : -1), l(), x((c = g(11, 7, n.sendErrors$)) ? 10 : -1, c), l(3), d("routerLink", "/zdajacy/moje-konto"), l(2), d("disabled", g(16, 9, n.sendLoading$))("ngClass", n.Password.valid ? "button--enabled" : ""), l(2), x(g(18, 11, n.sendLoading$) ? 17 : 19)
    }
}

function er(e, t) {
    e & 1 && (o(0, "span"), s(1, " Podany link do zmiany has\u0142a jest nieprawid\u0142owy "), r())
}

function nr(e, t) {
    if (e & 1 && (s(0), u(1, "async")), e & 2) {
        let c, n = h(2);
        B(" ", (c = g(1, 1, n.sendErrors$)) == null || c.error == null || c.error.Errors[0] == null ? null : c.error.Errors[0].Message, " ")
    }
}

function ir(e, t) {
    if (e & 1 && (o(0, "div", 2), p(1, "div", 14), o(2, "div", 15)(3, "h4", 16), s(4, " B\u0142\u0105d: "), _(5, er, 2, 0, "span")(6, nr, 2, 3), r(), o(7, "button", 17), s(8, " WR\xD3\u0106 DO LOGOWANIA "), r()()()), e & 2) {
        let c = h();
        l(5), x(c.incorrectLink ? 5 : 6)
    }
}

function or(e, t) {
    e & 1 && (o(0, "div", 18), p(1, "mat-spinner"), r())
}
var ki = (() => {
    let t = class t {
        constructor(n, i, a) {
            this.store = n, this.route = i, this.router = a, this.incorrectLink = !1, this.destroyed$ = new Z
        }
        ngOnInit() {
            this.createForm(), this.route.queryParams.pipe(it()).subscribe(n => {
                Lt.isKeyLengthCorrect(n ? .Key) || (this.incorrectLink = !0)
            }), this.sendSuccess$ = this.store.select($.getConfirmSetPasswordState.selectSuccess), this.sendLoading$ = this.store.select($.getConfirmSetPasswordState.selectLoading), this.sendErrors$ = this.store.select($.getConfirmSetPasswordState.selectError), this.redirectOnSuccess()
        }
        ngOnDestroy() {
            this.store.dispatch(y.confirmSetPasswordActions.clear()), this.destroyed$.next(!0), this.destroyed$.complete()
        }
        onSubmit() {
            this.Password.valid && this.route.queryParams.pipe(q(n => !!n), ne(1)).subscribe(n => {
                let i = Ct({
                    Password: this.Password.value
                }, n);
                this.store.dispatch(y.confirmSetPasswordActions.send({
                    payload: i
                }))
            })
        }
        createForm() {
            this.Password = new fe("", [H.required])
        }
        redirectOnSuccess() {
            this.sendSuccess$.pipe(tt(this.destroyed$)).subscribe(n => {
                n && this.router.navigateByUrl("/konto/zmiana-hasla-potwierdzenie-sukces")
            })
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(w(b), w(Q), w(D))
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-confirm-send-password"]
        ],
        standalone: !1,
        decls: 5,
        vars: 1,
        consts: [
            ["pageSpinner", ""],
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px"],
            ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "100%", 1, "email-changed"],
            [1, "change-data-container"],
            [1, "email-changed__paragraph"],
            [3, "ngSubmit"],
            ["fxFlex", "100%", 1, "mt-1"],
            ["type", "password", "matInput", "", "autocomplete", "off", 3, "formControl"],
            [1, "error-message"],
            ["fxLayoutAlign", "space-between start", "fxLayoutGap", "20px", "fxLayout", "row", 1, "mt-5"],
            ["fxFlex", "50%", "type", "button", "mat-flat-button", "", 1, "mt-1", "ziu-button--gray", "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0", 3, "routerLink"],
            ["fxFlex", "50%", "type", "submit", "mat-flat-button", "", 1, "mt-1", "ziu-button--green", "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0", 3, "click", "disabled", "ngClass"],
            [1, "app-button-spinner-pos-absolute", "d-flex", "justify-content-center", "align-items-center"],
            [3, "diameter", "strokeWidth"],
            ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container w-100", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
            [1, "login-page-container__login-form-container"],
            [1, "text-center", "mb-4"],
            ["mat-flat-button", "", "routerLink", "/zdajacy/moje-konto", 1, "w-100", "mt-4", "btn-lg", "text-uppercase", "ft-14", "mb-0", "button-bg-color"],
            [1, "page-spinner-container", "d-flex", "justify-content-center", "justify-content-center"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 1), _(1, tr, 20, 13, "div", 2)(2, ir, 9, 1, "div", 2), r(), I(3, or, 2, 0, "ng-template", null, 0, et)), i & 2 && (l(), x(a.incorrectLink ? 2 : 1))
        },
        dependencies: [j, S, E, v, z, N, R, L, ct, st, W, gt, X, ut, mt, pt, dt, Hn, O, Wn, M],
        styles: ['@charset "UTF-8";.header[_ngcontent-%COMP%], .email-changed__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%], \\f3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.email-changed[_ngcontent-%COMP%]{margin-top:50px}.email-changed__header[_ngcontent-%COMP%]{text-align:center;font-weight:400}.email-changed__paragraph[_ngcontent-%COMP%]{font-weight:300;color:#4f4f4f;text-align:center}\\f3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}.button-bg-color[_ngcontent-%COMP%]{background-color:var(--on-background-success)!important;color:#fff}.error-message[_ngcontent-%COMP%]{color:#f35544}']
    });
    let e = t;
    return e
})();
var Mi = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275cmp = f({
        type: t,
        selectors: [
            ["app-confirm-set-password-success"]
        ],
        standalone: !1,
        decls: 8,
        vars: 0,
        consts: [
            ["fxLayoutAlign", "center center"],
            [1, "login-page-container__login-form-container", "mt-5"],
            [1, "password-changed__header"],
            [1, "password-changed__paragraph", "mt-4"],
            ["mat-button", "", "routerLink", "/login", 1, "w-100", "mt-4", "ziu-login-button", "text-uppercase"]
        ],
        template: function(i, a) {
            i & 1 && (o(0, "div", 0)(1, "div", 1)(2, "h3", 2), s(3, "Has\u0142o zosta\u0142o zmienione"), r(), o(4, "div", 3), s(5, "Poprawnie zmienili\u015Bmy has\u0142o do Twojego konta."), r(), o(6, "button", 4), s(7, "Powr\xF3t"), r()()())
        },
        dependencies: [v, L, O],
        styles: [".header[_ngcontent-%COMP%], .password-changed__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.password-changed[_ngcontent-%COMP%]{margin-top:50px}.password-changed__header[_ngcontent-%COMP%]{text-align:center;font-weight:400}.password-changed__paragraph[_ngcontent-%COMP%]{font-weight:300;color:#4f4f4f;text-align:center}.ziu-login-button[_ngcontent-%COMP%]{margin-bottom:30px;border-radius:23px;background:var(--on-background-success);color:var(--on-color-black)!important;transition:.25s;min-height:43px}.ziu-login-button[_ngcontent-%COMP%]:hover{background:var(--on-background-button-login-hover)}"]
    });
    let e = t;
    return e
})();
var Li = (() => {
    let t = class t {
        constructor(n, i) {
            this.maintenanceNotificationsService = n, this.router = i
        }
        canActivate() {
            return this.maintenanceNotificationsService.isBlocked() ? !0 : (this.router.navigate(["/"]), !1)
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(T(Yt), T(D))
    }, t.\u0275prov = U({
        token: t,
        factory: t.\u0275fac
    });
    let e = t;
    return e
})();
var Oi = [{
    path: "login",
    canActivate: [Qt, wt],
    component: ci
}, {
    path: "wk",
    canActivate: [Qt, wt],
    component: gi,
    children: [{
        path: "brak-konta",
        component: ve
    }, {
        path: "brak-konta-i-wynikow",
        component: bi
    }, {
        path: "potwierdzenie-danych",
        component: Si
    }]
}, {
    path: "wylogowany",
    canActivate: [Qt, wt],
    component: si
}, {
    path: "wylogowywanie",
    canActivate: [wt],
    component: mi
}, {
    path: "prace-serwisowe",
    canActivate: [Li],
    component: Pi
}, {
    path: "konto-usuniete",
    canActivate: [wt],
    component: pi
}, {
    path: "zalogowany",
    canActivate: [Qt, wt],
    component: li
}, {
    path: "wyniki-wkrotce",
    canActivate: [wt],
    component: di
}, {
    path: "konto",
    component: yi,
    canActivate: [wt],
    children: [{
        path: "odzyskanie-hasla",
        component: _i
    }, {
        path: "odzyskanie-hasla-potwierdzenie",
        component: xi
    }, {
        path: "nowe-haslo",
        component: wi
    }, {
        path: "nowe-haslo-potwierdzenie",
        component: Ci
    }, {
        path: "zmiana-hasla-potwierdzenie",
        component: ki
    }, {
        path: "zmiana-hasla-potwierdzenie-sukces",
        component: Mi
    }, {
        path: "nowy-email-potwierdzenie",
        component: vi
    }]
}, {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
}];
var ke = (() => {
    let t = class t {
        constructor(n) {
            this.https = n
        }
        resetPassword(n) {
            return this.https.post("/api/ZIUZM/Uzytkownik/ResetPass", n)
        }
        confirmResetPassword(n) {
            return this.https.post("/api/ZIUZM/Uzytkownik/ConfirmResetPass", n)
        }
        confirmSetPassword(n) {
            return this.https.post("/api/ZIUZM/Uzytkownik/Password/Confirm", n)
        }
        confirmChangeEmail(n) {
            return this.https.post("/api/ZIUZM/Uzytkownik/ConfirmEmail", n)
        }
        confirmNewPasswordKeyValidation(n) {
            return this.https.post("api/ZIUZM/Uzytkownik/OperationValidation", n)
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(T(oe))
    }, t.\u0275prov = U({
        token: t,
        factory: t.\u0275fac
    });
    let e = t;
    return e
})();
var Ei = (() => {
    let t = class t {
        constructor(n, i) {
            this.actions$ = n, this.service = i, this.resetPassword$ = Ht(() => this.actions$.pipe(Gt(y.resetPasswordActions.send), It(a => this.service.resetPassword(a ? .payload).pipe(k(m => y.resetPasswordActions.success({
                res: m
            })), jt(m => yt(y.resetPasswordActions.fail({
                error: m
            }))))))), this.confirmResetPassword$ = Ht(() => this.actions$.pipe(Gt(y.confirmResetPasswordActions.send), It(a => this.service.confirmResetPassword(a ? .payload).pipe(k(m => y.confirmResetPasswordActions.success({
                res: m
            })), jt(m => yt(y.confirmResetPasswordActions.fail({
                error: m
            }))))))), this.confirmSetPassword$ = Ht(() => this.actions$.pipe(Gt(y.confirmSetPasswordActions.send), It(a => this.service.confirmSetPassword(a ? .payload).pipe(k(m => y.confirmSetPasswordActions.success({
                res: m
            })), jt(m => yt(y.confirmSetPasswordActions.fail({
                error: m
            }))))))), this.confirmChangeEmail$ = Ht(() => this.actions$.pipe(Gt(y.confirmChangeEmailActions.send), It(a => this.service.confirmChangeEmail(a ? .payload).pipe(k(m => y.confirmChangeEmailActions.success({
                res: m
            })), jt(m => yt(y.confirmChangeEmailActions.fail({
                error: m
            }))))))), this.confirmNewPasswordKeyIsValid$ = Ht(() => this.actions$.pipe(Gt(y.confirmNewPasswordKeyActions.send), It(a => this.service.confirmNewPasswordKeyValidation(a ? .payload).pipe(k(m => y.confirmNewPasswordKeyActions.success({
                res: m
            })), jt(m => yt(y.confirmNewPasswordKeyActions.fail({
                error: m
            })))))))
        }
    };
    t.\u0275fac = function(i) {
        return new(i || t)(T(ni), T(ke))
    }, t.\u0275prov = U({
        token: t,
        factory: t.\u0275fac
    });
    let e = t;
    return e
})();
var rl = (() => {
    let t = class t {};
    t.\u0275fac = function(i) {
        return new(i || t)
    }, t.\u0275mod = cn({
        type: t
    }), t.\u0275inj = rn({
        providers: [ke],
        imports: [gn, ei, hn.forChild(Oi), wn.forFeature(Se, fi), ii.forFeature([Ei]), Zn]
    });
    let e = t;
    return e
})();
export {
    Yt as a, wt as b, Qt as c, ye as d, Ae as e, Tt as f, no as g, _a as h, Zt as i, Te as j, Ie as k, io as l, Li as m, rl as n
};