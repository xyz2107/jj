import {
    F as V,
    Fb as ne,
    Fc as le,
    Fh as Fe,
    Ga as m,
    Gc as k,
    Ha as K,
    Hh as Ie,
    Ia as c,
    Ja as J,
    Jg as Me,
    Jh as $e,
    Ka as Q,
    La as X,
    Lb as ae,
    Lc as We,
    Ma as p,
    Md as me,
    Mh as De,
    Na as n,
    Oa as i,
    Pa as w,
    Pf as L,
    Qh as ze,
    S as y,
    Ta as I,
    Th as qe,
    U as F,
    Ug as Le,
    Va as M,
    Vg as _,
    Wa as g,
    Wg as Ne,
    Wh as A,
    Xf as pe,
    Xh as je,
    Yf as ge,
    Yh as Be,
    Zh as He,
    _g as Oe,
    _h as Ue,
    ag as he,
    ai as Ze,
    bg as fe,
    c as R,
    ca as S,
    cb as d,
    cg as _e,
    da as v,
    db as Y,
    dh as ke,
    eb as ee,
    ef as ce,
    eg as we,
    fg as Ce,
    gg as Pe,
    ig as xe,
    jf as ue,
    jg as ye,
    lg as be,
    nb as te,
    og as Se,
    pb as $,
    pc as re,
    pg as ve,
    qa as l,
    qb as oe,
    qc as se,
    qg as Ee,
    sb as ie,
    t as O,
    ta as E,
    td as D,
    th as Te,
    ua as W,
    ub as h,
    ud as de,
    vb as f,
    vh as C,
    xh as Ae,
    yh as Ve,
    zd as T
} from "./chunk-5MZXJYZL.js";
import {
    a as Z,
    e as G,
    f as Re
} from "./chunk-GAL4ENT6.js";
var z = {};
G(z, {
    changeEmailActions: () => Qe,
    changePasswordActions: () => Ke,
    setPasswordActions: () => Je
});
var Ke = T("[Account] Change password"),
    Je = T("[Account] Set password"),
    Qe = T("[Account] Change email");
var H = {};
G(H, {
    getChangeEmailError: () => nt,
    getChangeEmailLoading: () => ot,
    getChangeEmailSuccess: () => it,
    getChangePasswordError: () => et,
    getChangePasswordLoading: () => Xe,
    getChangePasswordSuccess: () => Ye,
    getSetPasswordState: () => tt
});
var q = e => e.accountModuleState,
    j = k(q, e => e ? .changePassword),
    Xe = _(j).selectLoading,
    Ye = _(j).selectSuccess,
    et = _(j).selectError,
    tt = _(k(q, e => e.setPassword)),
    B = k(q, e => e ? .changeEmail),
    ot = _(B).selectLoading,
    it = _(B).selectSuccess,
    nt = _(B).selectError;
var N = z,
    P = Z({}, H);
var U = Re(We());
var at = e => ({
        routeName: "ZIU",
        routeLink: e
    }),
    rt = () => ({
        routeName: "KONTO",
        routeLink: "/zdajacy/moje-konto"
    }),
    st = () => ({
        routeName: "Zmiana has\u0142a"
    }),
    lt = (e, a, s) => [e, a, s];

function dt(e, a) {
    e & 1 && (n(0, "mat-error"), d(1, "Pole nie mo\u017Ce by\u0107 puste"), i())
}

function mt(e, a) {
    e & 1 && (n(0, "mat-error"), d(1, "Pole mo\u017Ce zawiera\u0107 maksymalnie 32 znaki"), i())
}

function ct(e, a) {
    if (e & 1) {
        let s = I();
        n(0, "mat-form-field")(1, "mat-label"), d(2, "Stare has\u0142o"), i(), n(3, "input", 23), M("keyup", function() {
            S(s);
            let o = g(2);
            return v(o.updateValidation("oldPassword"))
        }), i(), n(4, "button", 24)(5, "mat-icon", 12), d(6, "remove_red_eye"), i()(), m(7, dt, 2, 0, "mat-error"), m(8, mt, 2, 0, "mat-error"), i()
    }
    if (e & 2) {
        let s, t, o = g(2);
        l(7), c(!(o.form == null || (s = o.form.get("oldPassword")) == null) && s.hasError("required") ? 7 : -1), l(), c(!(o.form == null || (t = o.form.get("oldPassword")) == null) && t.hasError("maxlength") ? 8 : -1)
    }
}

function ut(e, a) {
    e & 1 && (n(0, "mat-error"), d(1, "Pole nie mo\u017Ce by\u0107 puste"), i())
}

function pt(e, a) {
    e & 1 && (n(0, "mat-error"), d(1, "Pole mo\u017Ce zawiera\u0107 maksymalnie 32 znaki"), i())
}

function gt(e, a) {
    e & 1 && (n(0, "mat-error"), d(1, "Pole nie mo\u017Ce by\u0107 puste"), i())
}

function ht(e, a) {
    e & 1 && (n(0, "mat-error"), d(1, "Pole mo\u017Ce zawiera\u0107 maksymalnie 32 znaki"), i())
}

function ft(e, a) {
    e & 1 && (n(0, "mat-error"), d(1, "Pole musi by\u0107 takie samo jak 'Nowe has\u0142o'"), i())
}

function _t(e, a) {
    e & 1 && (n(0, "mat-form-field", 9)(1, "mat-label"), d(2, "Adres e-mail"), i(), w(3, "input", 25), i())
}

function wt(e, a) {
    if (e & 1 && (n(0, "span"), d(1), i()), e & 2) {
        let s = a.$implicit;
        l(), Y(s.Message)
    }
}

function Ct(e, a) {
    e & 1 && (n(0, "mat-error", 14), Q(1, wt, 2, 1, "span", null, J), i()), e & 2 && (l(), X(a.error.Errors))
}

function Pt(e, a) {
    e & 1 && (n(0, "div", 22), w(1, "mat-spinner", 26), i()), e & 2 && (l(), p("diameter", 24)("strokeWidth", 3))
}

function xt(e, a) {
    if (e & 1 && (d(0), h(1, "async")), e & 2) {
        let s = g(2);
        ee(" ", f(1, 1, s.loggingMethod$) !== s.authenticationMethodEnum.PZ ? "Zmie\u0144" : "Ustaw has\u0142o", " ")
    }
}

function yt(e, a) {
    if (e & 1) {
        let s = I();
        n(0, "form", 8), M("ngSubmit", function() {
            S(s);
            let o = g();
            return v(o.changePassword())
        }), m(1, ct, 9, 2, "mat-form-field"), h(2, "async"), n(3, "mat-form-field", 9)(4, "mat-label"), d(5, "Nowe has\u0142o"), i(), n(6, "input", 10, 0), M("keyup", function() {
            S(s);
            let o = g();
            return v(o.updateValidation("repeatedNewPassword"))
        }), i(), n(8, "button", 11)(9, "mat-icon", 12), d(10, "remove_red_eye"), i()(), m(11, ut, 2, 0, "mat-error"), m(12, pt, 2, 0, "mat-error"), i(), n(13, "mat-form-field", 9)(14, "mat-label"), d(15, "Powt\xF3rz nowe has\u0142o"), i(), n(16, "input", 13), M("keyup", function() {
            S(s);
            let o = g();
            return v(o.updateValidation("newPassword"))
        }), i(), m(17, gt, 2, 0, "mat-error"), m(18, ht, 2, 0, "mat-error"), m(19, ft, 2, 0, "mat-error"), i(), m(20, _t, 4, 0, "mat-form-field", 9), h(21, "async"), m(22, Ct, 3, 0, "mat-error", 14), h(23, "async"), n(24, "div", 15), w(25, "app-password-strength-bar", 16), i(), n(26, "div", 17), w(27, "app-validators-list", 18), i(), n(28, "div", 19)(29, "button", 20), d(30, " Anuluj "), i(), n(31, "button", 21), h(32, "async"), m(33, Pt, 2, 2, "div", 22), h(34, "async"), K(35, xt, 2, 3), i()()()
    }
    if (e & 2) {
        let s, t, o, u, x, b, r = g();
        p("formGroup", r.form), l(), c(f(2, 15, r.loggingMethod$) !== r.authenticationMethodEnum.PZ ? 1 : -1), l(10), c(!(r.form == null || (s = r.form.get("newPassword")) == null) && s.hasError("required") ? 11 : -1), l(), c(!(r.form == null || (t = r.form.get("newPassword")) == null) && t.hasError("maxlength") ? 12 : -1), l(5), c(!(r.form == null || (o = r.form.get("repeatedNewPassword")) == null) && o.hasError("required") ? 17 : -1), l(), c(!(r.form == null || (u = r.form.get("repeatedNewPassword")) == null) && u.hasError("maxlength") ? 18 : -1), l(), c(!(!(r.form == null || (x = r.form.get("repeatedNewPassword")) == null) && x.hasError("required")) && (!(r.form == null || (x = r.form.get("repeatedNewPassword")) == null) && x.hasError("otherThanNewPassword")) ? 19 : -1), l(), c(f(21, 17, r.loggingMethod$) === r.authenticationMethodEnum.PZ ? 20 : -1), l(2), c((b = f(23, 19, r.sendErrors$)) ? 22 : -1, b), l(3), p("errors", r.form.controls.newPassword.errors), l(2), p("form", r.form), l(2), p("routerLink", "/zdajacy/moje-konto"), l(2), p("disabled", f(32, 21, r.sendLoading$))("ngClass", r.form.valid ? "button--enabled" : ""), l(2), c(f(34, 23, r.sendLoading$) ? 33 : 35)
    }
}
var Ge = class {
        isErrorState(a, s) {
            return s && s.submitted && !a.dirty
        }
    },
    ao = (() => {
        let a = class a {
            constructor(t, o, u, x) {
                this.store = t, this.router = o, this.fb = u, this.formValidators = x, this.sessionEnum = Ee, this.authenticationMethodEnum = L, this.destroyed$ = new R, this.haveMinLength = b => b.value ? b.value.length < 12 ? {
                    dontHaveMinLength: !0
                } : null : {
                    dontHaveMinLength: !0
                }
            }
            ngOnInit() {
                this.hideNavigationIfLayoutIsMobileAndShowIfItsNot(), this.user$ = this.store.select(Ne), this.loggingMethod$ = this.store.select(ce), this.sendSuccess$ = O(this.store.select(P.getChangePasswordSuccess), this.store.select(P.getSetPasswordState.selectSuccess)), this.homePage$ = this.store.select(Le), this.sendLoading$ = O(this.store.select(P.getChangePasswordLoading), this.store.select(P.getSetPasswordState.selectLoading)), this.sendErrors$ = O(this.store.select(P.getChangePasswordError), this.store.select(P.getSetPasswordState.selectError)), this.setFormValidators(), this.redirectOnSuccess()
            }
            ngOnDestroy() {
                this.store.dispatch(N.changePasswordActions.clear()), this.store.dispatch(N.setPasswordActions.clear()), this.store.dispatch(new D), this.destroyed$.next(!0), this.destroyed$.complete()
            }
            createForm() {
                this.user$.pipe(V(U.isEqual), y(this.destroyed$)).subscribe(t => {
                    this.form = this.fb.group({
                        oldPassword: "",
                        newPassword: "",
                        repeatedNewPassword: "",
                        email: this.fb.control({
                            value: t ? .Email || "",
                            disabled: !0
                        })
                    })
                })
            }
            updateValidation(t) {
                this.form.controls[t].updateValueAndValidity()
            }
            changePassword() {
                this.loggingMethod$.pipe(V(U.isEqual), y(this.destroyed$)).subscribe(t => {
                    this.form.valid && (t !== L.PZ ? this.changePasswordForLogin() : this.setPasswordForPZ())
                })
            }
            setFormValidators() {
                this.store.select(Me).pipe(F(this.store.select(ue), this.loggingMethod$), y(this.destroyed$)).subscribe(([t, o, u]) => {
                    this.login = t, this.createForm(), this.form.get("repeatedNewPassword").setValidators([this.isNewRepeatedPasswordEqualToNewPassword(this.form.get("newPassword")), C.maxLength(32)]), u !== L.PZ && this.form.get("oldPassword").setValidators([C.maxLength(32), C.required, C.minLength(3)]), this.form.get("newPassword").setValidators([C.required, this.haveMinLength, this.isOtherThanLogin(this.login), this.formValidators.haveAtLeastOneSpecialChar, this.formValidators.firstAndLastIsNotSpecialOrNumber, this.formValidators.includesForbiddenWords, this.formValidators.haveLowerAndUpperCaseLetters, this.isNewPasswordEqualToNewRepeatedPassword(this.form.get("repeatedNewPassword")), C.maxLength(32)]), this.ssoAddress = o
                })
            }
            changePasswordForLogin() {
                let t = {
                    Haslo: this.form.controls.oldPassword.value,
                    NoweHaslo: this.form.controls.newPassword.value
                };
                this.store.dispatch(N.changePasswordActions.send({
                    payload: t
                }))
            }
            setPasswordForPZ() {
                this.store.dispatch(N.setPasswordActions.send({
                    payload: {
                        Password: this.form.controls.newPassword.value
                    }
                }))
            }
            redirectOnSuccess() {
                this.sendSuccess$.pipe(F(this.loggingMethod$), y(this.destroyed$)).subscribe(([t, o]) => {
                    if (t) {
                        let u = o !== L.PZ ? "/zdajacy/moje-konto/haslo-zmienione" : "/zdajacy/moje-konto/potwierdz-haslo";
                        this.router.navigateByUrl(u)
                    }
                })
            }
            isNewPasswordEqualToNewRepeatedPassword(t) {
                return o => t && t ? .value !== "" && o.value !== t ? .value ? {
                    otherThanRepeatedNewPassword: !0
                } : null
            }
            isNewRepeatedPasswordEqualToNewPassword(t) {
                return o => t && o.value !== t.value ? {
                    otherThanNewPassword: !0
                } : null
            }
            isOtherThanLogin(t) {
                return o => o.value === t || o.value === "" ? {
                    sameAsLogin: !0
                } : null
            }
            hideNavigationIfLayoutIsMobileAndShowIfItsNot() {
                this.store.select(me).pipe(y(this.destroyed$)).subscribe(t => {
                    t === "xs" ? this.store.dispatch(new de) : this.store.dispatch(new D)
                })
            }
        };
        a.\u0275fac = function(o) {
            return new(o || a)(E(le), E(re), E(ze), E(A))
        }, a.\u0275cmp = W({
            type: a,
            selectors: [
                ["app-password-change"]
            ],
            standalone: !1,
            features: [te([A])],
            decls: 9,
            vars: 12,
            consts: [
                ["password", ""],
                [1, "w-100", 3, "routes"],
                ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutAlign.gt-xs", "center start", "fxLayoutGap", "100px", 1, "mb-4"],
                ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex", "100%", "fxFlex.gt-xs", "50%", 1, "password"],
                [1, "account-information__subheader", "my-5"],
                ["fxLayout", "column", "autocomplete", "off", 3, "formGroup"],
                ["fxFlex", "50%", "fxShow", "true", "fxHide.lt-md", "true"],
                ["src", "./../../../assets/icons/wk-side-image.svg", "alt", "", 1, "w-100", "image-margin-with-header"],
                ["fxLayout", "column", "autocomplete", "off", 3, "ngSubmit", "formGroup"],
                [1, "mt-1"],
                ["tabindex", "7", "id", "newPassword", "type", "password", "formControlName", "newPassword", "matInput", "", "showHideInput", "", "autocomplete", "off", "required", "", 3, "keyup"],
                ["tabindex", "7", "type", "button", "mat-icon-button", "", "aria-label", "Poka\u017C has\u0142o", "matSuffix", "", "showHideTrigger", "newPassword", "matTooltip", "Poka\u017C has\u0142o", 1, "button-sm", "app-border-rounded-focus"],
                [1, "input-icon", "material-icons", "ft-19"],
                ["tabindex", "7", "id", "repeatedNewPassword", "type", "password", "formControlName", "repeatedNewPassword", "matInput", "", "autocomplete", "off", "required", "", 3, "keyup"],
                ["role", "alert", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "error-message"],
                [1, "mt-3"],
                [3, "errors"],
                ["role", "alert", 1, "validators"],
                [3, "form"],
                ["fxLayoutAlign", "space-between start", "fxLayoutGap", "20px", "fxLayout", "row", 1, "mt-5"],
                ["fxFlex", "50%", "type", "button", "mat-flat-button", "", 1, "mt-1", "ziu-button--gray", "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0", 3, "routerLink"],
                ["fxFlex", "50%", "type", "submit", "mat-flat-button", "", 1, "mt-1", "ziu-button--green", "btn-lg", "w-100", "text-uppercase", "ft-14", "mb-0", 3, "disabled", "ngClass"],
                [1, "app-button-spinner-pos-absolute", "d-flex", "justify-content-center", "align-items-center"],
                ["tabindex", "7", "id", "oldPassword", "type", "password", "formControlName", "oldPassword", "matInput", "", "autocomplete", "off", "showHideInput", "", "required", "", 3, "keyup"],
                ["tabindex", "7", "type", "button", "mat-icon-button", "", "aria-label", "Poka\u017C has\u0142o", "matSuffix", "", "showHideTrigger", "oldPassword", "matTooltip", "Poka\u017C has\u0142o", 1, "button-sm", "app-border-rounded-focus"],
                ["tabindex", "7", "formControlName", "email", "matInput", "", "autocomplete", "off", "disabled", "", "required", ""],
                [3, "diameter", "strokeWidth"]
            ],
            template: function(o, u) {
                o & 1 && (w(0, "app-breadcrumb", 1), h(1, "async"), n(2, "div", 2)(3, "div", 3)(4, "h5", 4), d(5, "Ustaw nowe has\u0142o"), i(), m(6, yt, 36, 25, "form", 5), i(), n(7, "div", 6), w(8, "img", 7), i()()), o & 2 && (p("routes", ie(8, lt, oe(4, at, f(1, 2, u.homePage$)), $(6, rt), $(7, st))), l(6), c(u.form ? 6 : -1))
            },
            dependencies: [ne, he, fe, we, _e, Pe, Ce, ge, pe, Se, xe, ye, be, qe, ve, Oe, ke, Fe, Te, Ae, Ve, De, Ie, $e, je, He, Be, Ue, Ze, se, ae],
            styles: [".header[_ngcontent-%COMP%], .account-information__header[_ngcontent-%COMP%], .menu__header[_ngcontent-%COMP%]{color:var(--on-background-header);font-size:21px}.subheader[_ngcontent-%COMP%]{font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#949494}.paragraph[_ngcontent-%COMP%], .account-information__paragraph[_ngcontent-%COMP%], .menu__paragraph[_ngcontent-%COMP%]{color:var(--on-background-paragraph);font-weight:300}.button[_ngcontent-%COMP%]{padding:3px 0;border-radius:24px;font-size:14px;text-transform:uppercase;color:#fff}.side-illustration--my-account[_ngcontent-%COMP%]{margin-top:171px}.side-illustration--email-change[_ngcontent-%COMP%], .side-illustration--email-changed-successfully[_ngcontent-%COMP%], .side-illustration--password-change[_ngcontent-%COMP%], .side-illustration--password-changed-successfully[_ngcontent-%COMP%]{margin-top:55px}.menu--dont-have-exams[_ngcontent-%COMP%], .menu--exam-type-details[_ngcontent-%COMP%], .menu--certifications[_ngcontent-%COMP%], .menu--test-details[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-list-container[_ngcontent-%COMP%]{margin-top:163px}.menu__side-illustration--exams-not-found[_ngcontent-%COMP%]{margin-top:0}.menu__side-illustration--exam-type-details[_ngcontent-%COMP%], .menu__side-illustration--test-details[_ngcontent-%COMP%], .menu__side-illustration--certifications[_ngcontent-%COMP%]{margin-top:111px}.login-page-container__login-form-container[_ngcontent-%COMP%]{max-width:320px;width:100%}.login-page-container__login-form-container--mobile[_ngcontent-%COMP%]{margin-top:0;width:80%}[_nghost-%COMP%]   mat-spinner[_ngcontent-%COMP%]{width:20px!important;height:20px!important}[_nghost-%COMP%]     mat-spinner svg{width:20px!important;height:20px!important}[_nghost-%COMP%]     .mat-mdc-progress-spinner circle, .mat-mdc-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#fff}button[_ngcontent-%COMP%]{width:100%;height:44px;line-height:19px;font-weight:700;letter-spacing:.06em}.account-information__header[_ngcontent-%COMP%]{font-weight:400!important}.account-information__subheader[_ngcontent-%COMP%]{font-weight:500;font-size:19px;letter-spacing:.06em;text-align:center}"]
        });
        let e = a;
        return e
    })();
export {
    Ke as a, Je as b, Qe as c, N as d, P as e, Ge as f, ao as g
};