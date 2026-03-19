import {
    d as g,
    e as ot,
    g as Jt
} from "./chunk-UHUXAZ2Y.js";
import {
    a as at,
    b as te,
    c as rt,
    d as ee
} from "./chunk-VILEIW66.js";
import {
    a as ne,
    b as ie
} from "./chunk-NFOL5ITM.js";
import {
    $ as gt,
    $h as Wt,
    Ai as Xt,
    Fa as H,
    Fb as v,
    Fc as E,
    Fh as Ht,
    Ga as x,
    H as yt,
    Ha as X,
    Hg as nt,
    Hh as Vt,
    Ia as C,
    Jg as It,
    Jh as Zt,
    Kb as bt,
    Kg as $t,
    Lb as O,
    Ma as p,
    Md as Dt,
    Mh as Rt,
    Mj as Yt,
    Na as o,
    Oa as i,
    Pa as c,
    Pb as Et,
    Pf as At,
    Qh as qt,
    S as W,
    Sa as _t,
    Ta as Y,
    Th as Kt,
    Ug as $,
    Uh as it,
    Va as tt,
    Wa as M,
    Xh as j,
    Y as wt,
    Yf as L,
    Z as Mt,
    ab as ht,
    ag as S,
    bg as k,
    c as B,
    ca as J,
    cb as r,
    cc as Lt,
    cg as D,
    ci as Qt,
    da as Q,
    eb as G,
    ef as zt,
    eg as z,
    fg as A,
    gg as F,
    hg as T,
    i as Z,
    ig as Ft,
    jg as jt,
    n as R,
    og as Nt,
    p as q,
    pa as Pt,
    pb as y,
    pc as et,
    pg as Tt,
    qa as u,
    qb as w,
    qc as b,
    qg as I,
    rb as Ot,
    rc as St,
    sb as N,
    ta as h,
    td as Ct,
    th as Bt,
    ua as P,
    ub as f,
    ud as kt,
    va as vt,
    vb as _,
    vh as V,
    w as K,
    xh as Gt,
    yb as xt,
    yh as Ut,
    za as ft
} from "./chunk-5MZXJYZL.js";
var me = t => ({
        routeName: "ZIU",
        routeLink: t
    }),
    ue = () => ({
        routeName: "KONTO",
        routeLink: "/zdajacy/moje-konto"
    }),
    pe = () => ({
        routeName: "Tw\xF3j-email"
    }),
    de = (t, n, s) => [t, n, s],
    oe = (() => {
        let n = class n {
            constructor(e) {
                this.store = e, this.sessionEnum = I
            }
            ngOnInit() {
                this.user$ = this.store.select(nt), this.homePage$ = this.store.select($)
            }
            ngOnDestroy() {
                this.store.dispatch(g.changeEmailActions.clear())
            }
        };
        n.\u0275fac = function(a) {
            return new(a || n)(h(E))
        }, n.\u0275cmp = P({
            type: n,
            selectors: [
                ["app-email-send-successfully"]
            ],
            standalone: !1,
            decls: 15,
            vars: 11,
            consts: [
                [1, "w-100", 3, "routes"],
                ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px"],
                ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "50%", 1, "email-changed"],
                ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container w-100", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
                ["src", "../../../assets/icons/potwierdzenie.jfif", "alt", "", 1, "ms-2", "w-50"],
                [1, "login-page-container__login-form-container", "mt-5"],
                [1, "text-center", "mb-4"],
                [1, "email-changed__paragraph"],
                ["mat-button", "", "routerLink", "/zdajacy/moje-konto", 1, "w-100", "mt-4", "ziu-button--green", "text-uppercase", "ft-14", "mb-0"],
                ["fxFlex", "50%", "fxShow", "true", "fxHide.lt-md", "true"],
                ["src", "./../../../assets/icons/side_illustration_my_account.svg", "alt", "", 1, "w-100", "image-margin"]
            ],
            template: function(a, l) {
                a & 1 && (c(0, "app-breadcrumb", 0), f(1, "async"), o(2, "div", 1)(3, "div", 2)(4, "div", 3), c(5, "img", 4), i(), o(6, "div", 5)(7, "h4", 6), r(8, "Link wys\u0142any"), i(), o(9, "div", 7), r(10, " Na podany adres e-mail wys\u0142ali\u015Bmy wiadomo\u015B\u0107 z linkiem potwiedzaj\u0105cym zmian\u0119. "), i(), o(11, "button", 8), r(12, " Powr\xF3t "), i()()(), o(13, "div", 9), c(14, "img", 10), i()()), a & 2 && p("routes", N(7, de, w(3, me, _(1, 1, l.homePage$)), y(5, ue), y(6, pe)))
            },
            dependencies: [v, S, k, z, D, F, A, T, L, j, b, O],
            styles: [".header[_ngcontent-%COMP%], .email-changed__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.email-changed[_ngcontent-%COMP%]{margin-top:50px}.email-changed__header[_ngcontent-%COMP%]{text-align:center;font-weight:400}.email-changed__paragraph[_ngcontent-%COMP%]{font-weight:300;color:#4f4f4f;text-align:center}button[_ngcontent-%COMP%]{background-color:#19a900;width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}.change-data-container[_ngcontent-%COMP%]{max-width:520px;width:100%}.change-data-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}"]
        });
        let t = n;
        return t
    })();
var ge = t => ({
        "text-error": t
    }),
    fe = (t, n) => ({
        "ziu-button--gray": t,
        "ziu-button--red": n
    }),
    _e = t => ({
        email: t
    }),
    he = t => [t];

function xe(t, n) {
    t & 1 && _t(0)
}

function Ce(t, n) {
    if (t & 1 && ft(0, xe, 1, 0, "ng-container", 23), t & 2) {
        let s = M();
        M();
        let e = ht(5);
        p("ngTemplateOutlet", e)("ngTemplateOutletContext", w(2, _e, s == null ? null : s.Email))
    }
}

function ye(t, n) {
    if (t & 1 && _t(0, 15), t & 2) {
        M(2);
        let s = ht(3);
        p("ngTemplateOutlet", s)
    }
}

function we(t, n) {
    if (t & 1 && (o(0, "div", 2)(1, "div", 3)(2, "h1", 4), r(3, "Zintegrowany Interfejs u\u017Cytkownika"), i(), o(4, "h2", 5), r(5, "Dane konta"), i(), o(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9), r(10, "Login"), i(), o(11, "div", 10), r(12), i()(), o(13, "div", 11)(14, "div", 12)(15, "div", 9), r(16, "Has\u0142o"), i(), o(17, "div", 10), c(18, "span", 13)(19, "span", 13)(20, "span", 13)(21, "span", 13)(22, "span", 13), i()(), o(23, "div"), c(24, "div", 14), x(25, Ce, 1, 4, "ng-container"), f(26, "async"), X(27, ye, 1, 1, "ng-container", 15), i()()(), o(28, "div", 16)(29, "div")(30, "div", 9), r(31, "Imi\u0119 i nazwisko"), i(), c(32, "div", 17), i()(), o(33, "div", 18)(34, "div")(35, "div", 9), r(36, "adres E-mail"), i(), o(37, "div", 19), r(38), i()(), o(39, "div"), c(40, "div", 14), o(41, "button", 20), r(42), i()()()(), o(43, "app-info-alert"), r(44, " Prosimy o weryfikacj\u0119 lub uzupe\u0142nienie adresu e-mail. Tylko poprawnie wpisany adres e-mail umo\u017Cliwi odzyskanie has\u0142a. "), i()(), o(45, "div", 21), c(46, "img", 22), i()()), t & 2) {
        let s, e = n,
            a = M();
        u(11), H("aria-label", "login to: " + (e == null ? null : e.Login) ? e.Login : "brak"), u(), G(" ", e != null && e.Login ? e.Login : "--", " "), u(13), C((s = _(26, 11, a.loggingMethod$)) === a.authenticationMethodEnum.PZ ? 25 : 27), u(7), p("innerHTML", (e != null && e.Imie ? e.Imie : "--") + " " + (e != null && e.DrugieImie ? e.DrugieImie : "") + " " + (e != null && e.Nazwisko ? e.Nazwisko : ""), Pt), H("aria-label", "Imie i nazwisko to " + (e != null && e.Imie ? e.Imie : "") + " " + (e != null && e.DrugieImie ? e.DrugieImie : "") + " " + (e != null && e.Nazwisko ? e.Nazwisko : "")), u(5), p("ngClass", w(13, ge, !e.Email)), H("aria-label", "email to: " + (e == null ? null : e.Email) ? e.Email : "brak"), u(), G(" ", e.Email ? e.Email : "Brak danych", " "), u(3), p("ngClass", Ot(15, fe, e.Email, !e.Email)), H("aria-label", e.Email ? "Zmie\u0144 E-mail" : "Uzupe\u0142nij"), u(), G(" ", e.Email ? "Zmie\u0144 E-mail" : "Uzupe\u0142nij", " ")
    }
}

function Me(t, n) {
    t & 1 && (o(0, "button", 24), r(1, " Zmie\u0144 Has\u0142o "), i(), c(2, "div"))
}

function Pe(t, n) {
    t & 1 && (o(0, "div", 26), r(1, "Aby ustawi\u0107 nowe has\u0142o uzupe\u0142nij adres e-mail"), i())
}

function ve(t, n) {
    if (t & 1) {
        let s = Y();
        o(0, "button", 25), tt("click", function() {
            let a = J(s).email,
                l = M();
            return Q(l.onSetPasswordClicked(a))
        }), r(1, " Ustaw Has\u0142o "), i(), x(2, Pe, 2, 0, "div", 26)
    }
    if (t & 2) {
        let s = n.email,
            e = M();
        p("ngClass", w(2, he, s ? "ziu-button--blue" : "ziu-button--red")), u(2), C(e.showNoEmailError ? 2 : -1)
    }
}
var ae = (() => {
    let n = class n {
        constructor(e, a, l) {
            this.store = e, this._sitetTitle = a, this.router = l, this.destroyed$ = new B, this.sessionEnum = I, this.authenticationMethodEnum = At, this.showNoEmailError = !1
        }
        ngOnInit() {
            this.user$ = this.store.select(ie.getUserDetailsData), this.loggingMethod$ = this.store.select(zt), this.loadUserDetails(), this.setPageTitle()
        }
        ngOnDestroy() {
            this.destroyed$.next(!0), this.destroyed$.complete()
        }
        onSetPasswordClicked(e) {
            e ? this.router.navigateByUrl("/zdajacy/moje-konto/zmiana-hasla") : this.showNoEmailError = !0
        }
        setPageTitle() {
            this._sitetTitle.setTitle("Konto - Zintegrowany Interfejs U\u017Cytkownika")
        }
        loadUserDetails() {
            this.store.dispatch(ne.loadUserDetailsActions.send())
        }
    };
    n.\u0275fac = function(a) {
        return new(a || n)(h(E), h(Lt), h(et))
    }, n.\u0275cmp = P({
        type: n,
        selectors: [
            ["app-my-account"]
        ],
        standalone: !1,
        decls: 6,
        vars: 3,
        consts: [
            ["authMethodLogin", ""],
            ["authMethodPZ", ""],
            ["ngStyle.xs", "account account--mobile", "fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "100px", "role", "group", 1, "account", "account--account-information-list-container"],
            ["fxFlex", "50%", "fxFlex.lt-md", "100%", 1, "mb-5"],
            [1, "sr-only"],
            ["fxShow", "", "fxHide.xs", "true", 1, "list-header", "mb-4"],
            ["fxLayout", "column", "fxLayoutAlign", "space-between start", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "10px"],
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "20px", "fxLayout.lt-sm", "column", "fxFlex", "100%", "fxLayoutGap.lt-md", "10px", 1, "w-100"],
            ["fxFlex", "30%"],
            [1, "account-information__subheader", "account-detail__heading", "mt-3"],
            ["role", "listitem", 1, "account-information__paragraph", "mt-1"],
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "20px", "fxFlex", "100%", "fxLayoutGap.lt-md", "10px", 1, "w-100"],
            ["fxFlex", "50%"],
            [1, "dot"],
            [1, "account-information__subheader", "mt-4"],
            [3, "ngTemplateOutlet"],
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "10px"],
            ["role", "listitem", 1, "account-information__paragraph", "mt-1", 3, "innerHTML"],
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "10px", 1, "w-100"],
            ["role", "listitem", 1, "account-information__paragraph", "mt-1", 3, "ngClass"],
            ["mat-button", "", "routerLink", "/zdajacy/moje-konto/zmiana-emaila", "type", "button", 1, "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0", 3, "ngClass"],
            ["fxFlex", "50%", "fxHide.lt-md", "true", "fxShow", "true"],
            ["src", "./../../../assets/icons/side_illustration_login_page.svg", "alt", "", 1, "image-margin", "w-100"],
            [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
            ["mat-button", "", "routerLink", "/zdajacy/moje-konto/zmiana-hasla", "type", "button", "aria-label", "Zmie\u0144 has\u0142o", 1, "ziu-button--gray", "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0"],
            ["mat-button", "", "type", "button", "aria-label", "Ustaw has\u0142o", 1, "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0", 3, "click", "ngClass"],
            [1, "text-error"]
        ],
        template: function(a, l) {
            if (a & 1 && (x(0, we, 47, 18, "div", 2), f(1, "async"), ft(2, Me, 3, 0, "ng-template", null, 0, xt)(4, ve, 3, 4, "ng-template", null, 1, xt)), a & 2) {
                let m;
                C((m = _(1, 1, l.user$)) ? 0 : -1, m)
            }
        },
        dependencies: [v, bt, S, k, z, D, F, A, T, L, Qt, b, O],
        styles: [".header[_ngcontent-%COMP%], .account-information__header[_ngcontent-%COMP%], .account-settings__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%], .account-information__subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .account-information__paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.account--account-information-list-container[_ngcontent-%COMP%]{margin-top:72px}.account--mobile[_ngcontent-%COMP%]{margin-top:40px}.account-detail__heading[_ngcontent-%COMP%]{font-weight:700!important;font-size:10px!important;letter-spacing:.06em!important;text-transform:uppercase!important;color:var(--on-background-session-details-heading)!important}.account-information__header[_ngcontent-%COMP%]{font-weight:400}.account__account-settings[_ngcontent-%COMP%]{margin-top:50px}.account-settings__option[_ngcontent-%COMP%]{margin-top:16px;padding:8px 16px;cursor:pointer;border-radius:10px;font-size:18px;background:var(--on-background-list-item);color:var(--on-background-primary-light-colored-bg);transition:.25s}.account-settings__option[_ngcontent-%COMP%]:hover{background:var(--on-background-list-item-hover)}.account-settings__option--bad-choose[_ngcontent-%COMP%]{color:#f35544}.bg-info-konto[_ngcontent-%COMP%]{background:rgba(var(--on-background-primary-light),.1);border-radius:23px}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}@media only screen and (max-width: 600px){.mat-mdc-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;border-radius:0!important}}.no-padding[_ngcontent-%COMP%]{width:calc(100% + 40px);transform:translate(-20px)}.text-error[_ngcontent-%COMP%]{color:var(--on-background-error)}"]
    });
    let t = n;
    return t
})();
var re = (() => {
    let n = class n {
        constructor(e, a) {
            this.actions$ = e, this.service = a, this.changePassword$ = at(() => this.actions$.pipe(rt(g.changePasswordActions.send), q(l => this.service.changePassword(l ? .payload).pipe(R(m => g.changePasswordActions.success({
                res: m
            })), K(m => Z(g.changePasswordActions.fail({
                error: m
            }))))))), this.setPassword$ = at(() => this.actions$.pipe(rt(g.setPasswordActions.send), q(l => this.service.setPassword(l ? .payload).pipe(R(m => g.setPasswordActions.success({
                res: m
            })), K(m => Z(g.setPasswordActions.fail({
                error: m
            }))))))), this.changeEmail$ = at(() => this.actions$.pipe(rt(g.changeEmailActions.send), q(l => this.service.changeEmail(l ? .payload).pipe(R(m => g.changeEmailActions.success({
                res: m
            })), K(m => Z(g.changeEmailActions.fail({
                error: m
            })))))))
        }
    };
    n.\u0275fac = function(a) {
        return new(a || n)(gt(te), gt(it))
    }, n.\u0275prov = wt({
        token: n,
        factory: n.\u0275fac
    });
    let t = n;
    return t
})();
var Oe = t => ({
        routeName: "ZIU",
        routeLink: t
    }),
    be = () => ({
        routeName: "KONTO",
        routeLink: "/zdajacy/moje-konto"
    }),
    Ee = () => ({
        routeName: "Twoje has\u0142o"
    }),
    Le = (t, n, s) => [t, n, s],
    se = (() => {
        let n = class n {
            constructor(e) {
                this.store = e, this.sessionEnum = I, this.destroyed$ = new B
            }
            ngOnInit() {
                this.hideNavigationIfLayoutIsMobileAndShowIfItsNot(), this.homePage$ = this.store.select($), this.user$ = this.store.select(nt)
            }
            ngOnDestroy() {
                this.store.dispatch(g.changePasswordActions.clear()), this.store.dispatch(new Ct), this.destroyed$.next(!0), this.destroyed$.complete()
            }
            hideNavigationIfLayoutIsMobileAndShowIfItsNot() {
                this.store.select(Dt).pipe(W(this.destroyed$)).subscribe(e => {
                    e === "xs" ? setTimeout(() => {
                        this.store.dispatch(new kt)
                    }, 0) : this.store.dispatch(new Ct)
                })
            }
        };
        n.\u0275fac = function(a) {
            return new(a || n)(h(E))
        }, n.\u0275cmp = P({
            type: n,
            selectors: [
                ["app-password-changed-successfully"]
            ],
            standalone: !1,
            decls: 15,
            vars: 11,
            consts: [
                [1, "w-100", 3, "routes"],
                ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px"],
                ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "50%", 1, "password-changed"],
                ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container w-100", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
                ["src", "../../../assets/icons/potwierdzenie.jfif", "alt", "", 1, "w-50"],
                [1, "login-page-container__login-form-container", "mt-5"],
                [1, "password-changed__header"],
                [1, "password-changed__paragraph", "mt-4"],
                ["mat-button", "", "routerLink", "/zdajacy/moje-konto", 1, "w-100", "mt-4", "ziu-login-button", "text-uppercase"],
                ["fxFlex", "50%", "fxShow", "true", "fxHide.lt-md", "true"],
                ["src", "./../../../assets/icons/side_illustration_my_account.svg", "alt", "", 1, "w-100", "image-margin"]
            ],
            template: function(a, l) {
                a & 1 && (c(0, "app-breadcrumb", 0), f(1, "async"), o(2, "div", 1)(3, "div", 2)(4, "div", 3), c(5, "img", 4), i(), o(6, "div", 5)(7, "h3", 6), r(8, "Has\u0142o zosta\u0142o zmienione"), i(), o(9, "div", 7), r(10, "Poprawnie zmienili\u015Bmy has\u0142o do Twojego konta."), i(), o(11, "button", 8), r(12, " Powr\xF3t "), i()()(), o(13, "div", 9), c(14, "img", 10), i()()), a & 2 && p("routes", N(7, Le, w(3, Oe, _(1, 1, l.homePage$)), y(5, be), y(6, Ee)))
            },
            dependencies: [v, S, k, z, D, F, A, T, L, j, b, O],
            styles: [".header[_ngcontent-%COMP%], .password-changed__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.password-changed[_ngcontent-%COMP%]{margin-top:50px}.password-changed__header[_ngcontent-%COMP%]{text-align:center;font-weight:400}.password-changed__paragraph[_ngcontent-%COMP%]{font-weight:300;color:#4f4f4f;text-align:center}button[_ngcontent-%COMP%]{color:var(--always-white)!important;background:var(--on-background-success)!important;width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}"]
        });
        let t = n;
        return t
    })();
var Se = t => ({
        routeName: "ZIU",
        routeLink: t
    }),
    ke = () => ({
        routeName: "KONTO",
        routeLink: "/zdajacy/moje-konto"
    }),
    De = () => ({
        routeName: "Zmiana adresu e-mail"
    }),
    ze = (t, n, s) => [t, n, s];

function Ae(t, n) {
    t & 1 && (o(0, "mat-error"), r(1, "Pole nie mo\u017Ce by\u0107 puste"), i())
}

function Fe(t, n) {
    t & 1 && (o(0, "mat-error"), r(1, "Nieprawid\u0142owy email."), i())
}

function je(t, n) {
    t & 1 && (o(0, "mat-error"), r(1, "Pole nie mo\u017Ce by\u0107 puste"), i())
}

function Ne(t, n) {
    t & 1 && (o(0, "mat-error"), r(1, "Pole musi by\u0107 takie samo jak 'Adres e-mail'"), i())
}

function Te(t, n) {
    if (t & 1 && (o(0, "mat-error", 11), r(1), f(2, "async"), i()), t & 2) {
        let s, e = M(2);
        u(), G(" ", (s = _(2, 1, e.sendErrors$)) == null || s.error == null || s.error.Errors[0] == null ? null : s.error.Errors[0].Message, " ")
    }
}

function Ie(t, n) {
    t & 1 && (o(0, "div", 15), c(1, "mat-spinner", 16), i()), t & 2 && (u(), p("diameter", 24)("strokeWidth", 3))
}

function $e(t, n) {
    t & 1 && r(0, " Wy\u015Blij ")
}

function Be(t, n) {
    if (t & 1) {
        let s = Y();
        o(0, "form", 7), tt("ngSubmit", function() {
            J(s);
            let a = M();
            return Q(a.onSubmit())
        }), o(1, "mat-form-field")(2, "mat-label"), r(3, "Adres e-mail"), i(), c(4, "input", 8), x(5, Ae, 2, 0, "mat-error"), x(6, Fe, 2, 0, "mat-error"), i(), o(7, "mat-form-field", 9)(8, "mat-label"), r(9, "Powt\xF3rz adres e-mail"), i(), c(10, "input", 10), x(11, je, 2, 0, "mat-error"), x(12, Ne, 2, 0, "mat-error"), i(), x(13, Te, 3, 3, "mat-error", 11), f(14, "async"), o(15, "div", 12)(16, "button", 13), r(17, " Anuluj "), i(), o(18, "button", 14), f(19, "async"), x(20, Ie, 2, 2, "div", 15), f(21, "async"), X(22, $e, 1, 0), i()()()
    }
    if (t & 2) {
        let s, e, a, l, m, d = M();
        p("formGroup", d.form), u(5), C(!(d.form == null || (s = d.form.get("email")) == null) && s.hasError("required") ? 5 : -1), u(), C(!(!(d.form == null || (e = d.form.get("email")) == null) && e.hasError("required")) && (!(d.form == null || (e = d.form.get("email")) == null) && e.hasError("email")) ? 6 : -1), u(5), C(!(d.form == null || (a = d.form.get("repeatedEmail")) == null) && a.hasError("required") ? 11 : -1), u(), C(!(!(d.form == null || (l = d.form.get("repeatedEmail")) == null) && l.hasError("required")) && (!(d.form == null || (l = d.form.get("repeatedEmail")) == null) && l.hasError("otherThanNewEmail")) ? 12 : -1), u(), C(!((m = _(14, 10, d.sendErrors$)) == null || m.error == null) && m.error.Errors ? 13 : -1), u(3), p("routerLink", "/zdajacy/moje-konto"), u(2), p("disabled", _(19, 12, d.sendLoading$))("ngClass", d.form.valid ? "button--enabled" : ""), u(2), C(_(21, 14, d.sendLoading$) ? 20 : 22)
    }
}
var le = (() => {
    let n = class n {
        constructor(e, a, l) {
            this.store = e, this.router = a, this.fb = l, this.sessionEnum = I, this.destroyed$ = new B, this.isRepeatedEmailEqualToNewEmail = m => m.value !== this.form.controls.email.value || m.value === "" || m.value === null ? {
                otherThanNewEmail: !0
            } : null
        }
        ngOnInit() {
            this.homePage$ = this.store.select($), this.createForm(), this.form.controls.repeatedEmail.setValidators([this.isRepeatedEmailEqualToNewEmail]), this.userLogin$ = this.store.select(It), this.email$ = this.store.select($t), this.sendSuccess$ = this.store.select(ot.getChangeEmailSuccess), this.sendLoading$ = this.store.select(ot.getChangeEmailLoading), this.sendErrors$ = this.store.select(ot.getChangeEmailError)
        }
        ngOnDestroy() {
            this.store.dispatch(g.changeEmailActions.clear()), this.destroyed$.next(!0), this.destroyed$.complete()
        }
        createForm() {
            this.form = this.fb.group({
                email: ["", [V.required, V.email]],
                repeatedEmail: ["", [V.required, V.email]]
            })
        }
        onSubmit() {
            this.form.updateValueAndValidity(), this.form.valid && this.userLogin$.pipe(yt()).subscribe(e => {
                let a = {
                    Email: this.form.value.email,
                    Login: e
                };
                this.store.dispatch(g.changeEmailActions.send({
                    payload: a
                }))
            }), this.sendSuccess$.pipe(W(this.destroyed$)).subscribe(e => {
                e && this.router.navigateByUrl("/zdajacy/moje-konto/email-zmieniony")
            })
        }
    };
    n.\u0275fac = function(a) {
        return new(a || n)(h(E), h(et), h(qt))
    }, n.\u0275cmp = P({
        type: n,
        selectors: [
            ["app-email-change"]
        ],
        standalone: !1,
        decls: 9,
        vars: 12,
        consts: [
            [1, "w-100", 3, "routes"],
            ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px", 1, "mb-4"],
            ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "50%", 1, "email"],
            [1, "account-information__subheader", "my-5"],
            ["fxLayout", "column", 1, "min-w-300", 3, "formGroup"],
            ["fxFlex", "50%", "fxHide.lt-md", "true", "fxShow", "true"],
            ["src", "./../../../assets/icons/side_illustration_login_page.svg", "alt", "", 1, "image-margin-with-header", "w-100"],
            ["fxLayout", "column", 1, "min-w-300", 3, "ngSubmit", "formGroup"],
            ["matInput", "", "required", "", "formControlName", "email", "appEmailValidator", "", "autocomplete", "off"],
            [1, "mt-3"],
            ["required", "", "matInput", "", "autocomplete", "off", "formControlName", "repeatedEmail"],
            ["role", "alert", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "error-message"],
            ["fxLayoutAlign", "space-between start", "fxLayoutAlign.xs", "center start", "fxLayoutGap", "20px", "fxLayout", "row", 1, "mt-5"],
            ["fxFlex", "50%", "type", "button", "mat-flat-button", "", 1, "mt-1", "ziu-button--gray", "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0", 3, "routerLink"],
            ["fxFlex", "50%", "type", "submit", "mat-flat-button", "", 1, "mt-1", "ziu-button--green", "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0", 3, "disabled", "ngClass"],
            [1, "app-button-spinner-pos-absolute", "d-flex", "justify-content-center", "align-items-center"],
            [3, "diameter", "strokeWidth"]
        ],
        template: function(a, l) {
            a & 1 && (c(0, "app-breadcrumb", 0), f(1, "async"), o(2, "div", 1)(3, "div", 2)(4, "h5", 3), r(5, "Podaj nam sw\xF3j adres e-mail"), i(), x(6, Be, 23, 16, "form", 4), i(), o(7, "div", 5), c(8, "img", 6), i()()), a & 2 && (p("routes", N(8, ze, w(4, Se, _(1, 2, l.homePage$)), y(6, ke), y(7, De))), u(6), C(l.form ? 6 : -1))
        },
        dependencies: [v, S, k, z, D, F, A, L, Nt, Ft, jt, Kt, Tt, Ht, Bt, Gt, Ut, Rt, Vt, Zt, Xt, j, b, O],
        styles: [".header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%], .email__subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .email__paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.mb-40[_ngcontent-%COMP%]{margin-bottom:40px}.email__subheader[_ngcontent-%COMP%]{font-weight:500;font-size:19px;letter-spacing:.06em;text-align:center}[_nghost-%COMP%]     .mat-mdc-progress-spinner circle, .mat-mdc-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#fff}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}.error-message[_ngcontent-%COMP%]{padding:11px 0}"]
    });
    let t = n;
    return t
})();
var Ge = t => ({
        routeName: "ZIU",
        routeLink: t
    }),
    Ue = () => ({
        routeName: "KONTO",
        routeLink: "/zdajacy/moje-konto"
    }),
    He = () => ({
        routeName: "Twoje has\u0142o"
    }),
    Ve = (t, n, s) => [t, n, s],
    ce = (() => {
        let n = class n {
            constructor(e) {
                this.store = e
            }
            ngOnInit() {
                this.homePage$ = this.store.select($)
            }
        };
        n.\u0275fac = function(a) {
            return new(a || n)(h(E))
        }, n.\u0275cmp = P({
            type: n,
            selectors: [
                ["app-confirm-password"]
            ],
            standalone: !1,
            decls: 15,
            vars: 11,
            consts: [
                [1, "w-100", 3, "routes"],
                ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px"],
                ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "50%", 1, "email-changed"],
                ["fxLayout", "column", "fxLayoutAlign", "start center", "ngClass", "login-page-container__login-form-container w-100", "ngStyle.xs", "login-page-container__login-form-container login-page-container__login-form-container--mobile"],
                ["src", "../../../assets/icons/potwierdzenie.jfif", "alt", "", 1, "ms-2", "w-50"],
                [1, "login-page-container__login-form-container", "mt-5"],
                [1, "text-center", "mb-4"],
                [1, "email-changed__paragraph"],
                ["mat-button", "", "routerLink", "/zdajacy/moje-konto", 1, "w-100", "mt-4", "ziu-button--green", "text-uppercase", "ft-14", "mb-0"],
                ["fxFlex", "50%", "fxShow", "true", "fxHide.lt-md", "true"],
                ["src", "./../../../assets/icons/side_illustration_my_account.svg", "alt", "", 1, "w-100", "image-margin"]
            ],
            template: function(a, l) {
                a & 1 && (c(0, "app-breadcrumb", 0), f(1, "async"), o(2, "div", 1)(3, "div", 2)(4, "div", 3), c(5, "img", 4), i(), o(6, "div", 5)(7, "h4", 6), r(8, "Potwierd\u017A has\u0142o"), i(), o(9, "div", 7), r(10, " Na podany adres e-mail wys\u0142ali\u015Bmy wiadomo\u015B\u0107 z linkiem potwiedzaj\u0105cym zmian\u0119 has\u0142a. "), i(), o(11, "button", 8), r(12, " Powr\xF3t "), i()()(), o(13, "div", 9), c(14, "img", 10), i()()), a & 2 && p("routes", N(7, Ve, w(3, Ge, _(1, 1, l.homePage$)), y(5, Ue), y(6, He)))
            },
            dependencies: [v, S, k, z, D, F, A, T, L, j, b, O],
            styles: [".header[_ngcontent-%COMP%], .email-changed__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}.email-changed[_ngcontent-%COMP%]{margin-top:50px}.email-changed__header[_ngcontent-%COMP%]{text-align:center;font-weight:400}.email-changed__paragraph[_ngcontent-%COMP%]{font-weight:300;color:#4f4f4f;text-align:center}button[_ngcontent-%COMP%]{background-color:#19a900;width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}.change-data-container[_ngcontent-%COMP%]{max-width:520px;width:100%}.change-data-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}"]
        });
        let t = n;
        return t
    })();
var Ze = [{
        path: "zmiana-emaila",
        component: le
    }, {
        path: "zmiana-hasla",
        component: Jt
    }, {
        path: "email-zmieniony",
        component: oe
    }, {
        path: "potwierdz-haslo",
        component: ce
    }, {
        path: "haslo-zmienione",
        component: se
    }, {
        path: "",
        component: ae
    }],
    Yn = (() => {
        let n = class n {};
        n.\u0275fac = function(a) {
            return new(a || n)
        }, n.\u0275mod = vt({
            type: n
        }), n.\u0275inj = Mt({
            providers: [it],
            imports: [Et, Yt, St.forChild(Ze), ee.forFeature([re]), Wt]
        });
        let t = n;
        return t
    })();
export {
    Yn as a
};