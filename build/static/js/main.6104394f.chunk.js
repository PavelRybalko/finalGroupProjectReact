(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[6],{12:function(e,t,n){e.exports={link:"Navigation_link__1ytlp",text:"Navigation_text__DTEAD",activeLink:"Navigation_activeLink__8ykUx",signOutBtn:"Navigation_signOutBtn__3sxBr",signOutBtnLg:"Navigation_signOutBtnLg__23GS8",wrapper:"Navigation_wrapper__26jP-",navMenu:"Navigation_navMenu__3vYzl",navMenuActive:"Navigation_navMenuActive__zsw6v Navigation_navMenu__3vYzl",container:"Navigation_container__z_lSr"}},13:function(e,t,n){e.exports={container:"UserInfo_container___Y-0C",signOutBtnLg:"UserInfo_signOutBtnLg__2Gbd4",userInfo:"UserInfo_userInfo__AQZQm",avatar:"UserInfo_avatar__2OgJ1",userInfoModal:"UserInfo_userInfoModal__CYOns",userInfoModalActive:"UserInfo_userInfoModalActive__2372L UserInfo_userInfoModal__CYOns",userInfoModalText:"UserInfo_userInfoModalText__3HFG-",customFileUpload:"UserInfo_customFileUpload__3wUUb",customNameUpload:"UserInfo_customNameUpload__19DAd",avatarImg:"UserInfo_avatarImg__1R8gl",dropdownCaret:"UserInfo_dropdownCaret__3go-z",name:"UserInfo_name__U0MbK",nameUpload:"UserInfo_nameUpload__3rD82 UserInfo_userInfoModalText__3HFG-",inputWrapper:"UserInfo_inputWrapper__3wvGO",addBtn:"UserInfo_addBtn__3OXKA",addIcon:"UserInfo_addIcon__KF5lE",loading:"UserInfo_loading__3PLUY",initial:"UserInfo_initial__13WIQ"}},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return O})),n.d(t,"h",(function(){return l}));var r=n(3),a=n.n(r),c=n(10),s=n(22),o=n.n(s),u=n(5);o.a.defaults.baseURL="https://final-group-project-node.herokuapp.com";var i={set:function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},unset:function(){o.a.defaults.headers.common.Authorization=""}},l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,o.a.get("/auth/refresh-token/".concat(t));case 4:return n=e.sent,r=n.data.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/test/".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),u.a.updateRefreshToken(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,{answers:n,nameTest:t};case 3:return r=e.sent,e.next=6,o.a.post("/test/result",r);case 6:return c=e.sent,s=c.data,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(0),u.a.updateRefreshToken(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.prev=1,e.next=4,o.a.post("/auth/register",{email:n,password:r});case 4:return c=e.sent,s=c.data,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(1),u.a.updateRefreshToken(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,r=t.password,e.next=3,o.a.post("/auth/login",{email:n,password:r});case 3:return c=e.sent,s=c.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("auth/logout");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),u.a.updateRefreshToken(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/users/current");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),u.a.updateRefreshToken(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n(6),a=Object(r.b)("questions/add",(function(e){return{payload:e}})),c=Object(r.b)("questions/update",(function(e){return{payload:e}})),s=Object(r.b)("questions/setName",(function(e){return{payload:e}})),o=Object(r.b)("answers/reset",(function(e){return{payload:e}}))},29:function(e,t,n){e.exports={header:"Header_header__3VG2V",container:"Header_container__3jjlE",line:"Header_line__1QzwE",lineLogin:"Header_lineLogin__1Tus1",wrapper:"Header_wrapper__3F6DJ"}},33:function(e,t,n){e.exports={link:"Logo_link__3_JLG",logo:"Logo_logo__r7vO_",darkText:"Logo_darkText__38iG9",whiteText:"Logo_whiteText__1sGeR"}},34:function(e,t,n){e.exports={toggle:"Burger_toggle__2GhZM",active:"Burger_active__3MXqf",burger:"Burger_burger__3Emiz"}},35:function(e,t,n){e.exports={footer:"Footer_footer__2sWxk",description:"Footer_description__2uD2Y",icon:"Footer_icon__3FPkO",link:"Footer_link__2GcjP"}},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return y}));var r,a,c,s,o=n(3),u=n.n(o),i=n(10),l=n(6),d=n(20),f=n(16),j=Object(l.c)("auth/registerUser",function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r,a,c,s,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,c=n.rejectWithValue,e.prev=2,e.next=5,Object(f.f)({email:r,password:a});case 5:return s=e.sent,o=s.data.avatar,i={user:{name:null,email:r,avatarURL:o}},d.b.dark("User ".concat(r," was created , please follow to your email and confirm request")),e.abrupt("return",i);case 12:return e.prev=12,e.t0=e.catch(2),d.b.dark(e.t0),e.abrupt("return",c(e.t0));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(l.c)("auth/loginUser",function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r,a,c,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,c=n.rejectWithValue,e.prev=2,e.next=6,Object(f.c)({email:r,password:a});case 6:return s=e.sent,o=s.data,f.g.set(o.accessToken),localStorage.setItem("refreshToken",o.refreshToken),e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(2),d.b.dark("Wrong credentials"),e.abrupt("return",c(e.t0));case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(l.c)("auth/loginGoogle",function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r,a,c,s,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.name,c=t.picture,s=t.refreshToken,o=t.token,i=n.rejectWithValue,e.prev=2,f.g.set(o),localStorage.setItem("refreshToken",s),l={user:{name:a,email:r,avatarURL:c}},d.b.dark("Hello dear ".concat(a)),e.abrupt("return",l);case 10:return e.prev=10,e.t0=e.catch(2),d.b.dark("Wrong credentials"),e.abrupt("return",i(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(l.c)("auth/logoutUser",function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,Object(f.d)();case 4:f.g.unset(),localStorage.removeItem("refreshToken"),d.b.dark("Goodbye"),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),d.b.dark("Ups Something wrong:)"),e.abrupt("return",r(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(l.c)("updateTokenByCode",function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,e.prev=1,"401"===t.slice(-3)){e.next=4;break}return e.abrupt("return");case 4:if(null!==(a=localStorage.getItem("refreshToken"))){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,Object(f.h)(a);case 9:c=e.sent,f.g.set(c.accessToken),localStorage.setItem("refreshToken",c.refreshToken),e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(1),d.b.dark("Ups Something wrong:)"),e.abrupt("return",r(e.t0));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}()),g={register:j,logIn:p,logInGoogle:b,logOut:O,fetchCurrentUser:Object(l.c)("fetchCurrentUser",function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.g.set(t),e.next=4,Object(f.b)();case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),d.b.dark("Please, log in"),e.abrupt("return",n.rejectWithValue(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),updateTokenByCode:h},v={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserEmail:function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t.email},getUserName:function(e){var t;return null===(t=e.auth.user)||void 0===t?void 0:t.name},getToken:function(e){return e.auth.accessToken}},_=n(2),m=n(18),x=Object(l.d)({name:null,email:null,avatarURL:null},(r={},Object(_.a)(r,g.register.fulfilled,(function(e,t){return t.payload.user})),Object(_.a)(r,g.fetchCurrentUser.fulfilled,(function(e,t){return t.payload.user})),Object(_.a)(r,g.logIn.fulfilled,(function(e,t){return t.payload.user})),Object(_.a)(r,g.logOut.fulfilled,(function(){return null})),r)),k=Object(l.d)(null,(a={},Object(_.a)(a,g.logIn.fulfilled,(function(e,t){return t.payload.accessToken})),Object(_.a)(a,g.updateTokenByCode.fulfilled,(function(e,t){return t.payload.accessToken})),Object(_.a)(a,g.updateTokenByCode.rejected,(function(){return null})),Object(_.a)(a,g.fetchCurrentUser.rejected,(function(){return null})),Object(_.a)(a,g.logOut.fulfilled,(function(){return null})),a)),I=Object(l.d)(!1,(c={},Object(_.a)(c,g.logIn.fulfilled,(function(){return!0})),Object(_.a)(c,g.logIn.rejected,(function(){return!1})),Object(_.a)(c,g.logOut.fulfilled,(function(){return!1})),Object(_.a)(c,g.fetchCurrentUser.fulfilled,(function(){return!0})),Object(_.a)(c,g.fetchCurrentUser.rejected,(function(){return!1})),Object(_.a)(c,g.updateTokenByCode.rejected,(function(){return!1})),c)),w=Object(l.d)(!1,(s={},Object(_.a)(s,g.register.pending,(function(){return!0})),Object(_.a)(s,g.register.fulfilled,(function(){return!1})),Object(_.a)(s,g.register.rejected,(function(){return!1})),Object(_.a)(s,g.logIn.pending,(function(){return!0})),Object(_.a)(s,g.logIn.fulfilled,(function(){return!1})),Object(_.a)(s,g.logIn.rejected,(function(){return!1})),Object(_.a)(s,g.logOut.pending,(function(){return!0})),Object(_.a)(s,g.logOut.fulfilled,(function(){return!1})),Object(_.a)(s,g.logOut.rejected,(function(){return!1})),Object(_.a)(s,g.fetchCurrentUser.pending,(function(){return!0})),Object(_.a)(s,g.fetchCurrentUser.fulfilled,(function(){return!1})),Object(_.a)(s,g.fetchCurrentUser.rejected,(function(){return!1})),Object(_.a)(s,g.updateTokenByCode.pending,(function(){return!0})),Object(_.a)(s,g.updateTokenByCode.fulfilled,(function(){return!1})),Object(_.a)(s,g.updateTokenByCode.rejected,(function(){return!1})),s)),y=Object(m.b)({user:x,accessToken:k,isLoggedIn:I,loading:w})},54:function(e,t,n){e.exports={lds_dual_ring:"Loader_lds_dual_ring__17bXh","lds-dual-ring":"Loader_lds-dual-ring__3anv8"}},56:function(e,t,n){e.exports={google__wrapper:"GoogleRedirect_google__wrapper__35VYk"}},69:function(e,t,n){},9:function(e,t,n){"use strict";t.a={GOOGLE_LOGIN:"/google-auth",AUTH_VIEW:"/auth",MAIN_VIEW:"/",TEST_VIEW:"/test",RESULT_VIEW:"/result",USEFUL_INFO_VIEW:"/useful-info",CONTACTS_VIEW:"/contacts"}},96:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),s=n.n(c),o=n(8),u=n(53),i=(n(68),n(69),n(20)),l=n(9),d=n(11),f=n(7),j=(n(70),n(5)),p=n(26),b=n(33),O=n.n(b),h=n(1);var g,v,_=function(e){var t=e.to,n=e.onOpenMobileMenu;return Object(h.jsx)(d.c,{to:t,className:O.a.link,onClick:function(){return n(!1)},children:Object(h.jsxs)("div",{className:O.a.logo,children:[Object(h.jsx)("p",{className:O.a.whiteText,children:"Pro"}),Object(h.jsx)("p",{className:O.a.darkText,children:"[Test_]"})]})})},m=n(3),x=n.n(m),k=n(10);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){var n=e.title,a=e.titleId,c=w(e,["title","titleId"]);return r.createElement("svg",I({width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,g||(g=r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("path",{d:"M23.7122 8.71216L22.3866 10.0378L26.4112 14.0625H13.1251V15.9375H26.4112L22.3866 19.9622L23.7122 21.2878L30.0001 15L23.7122 8.71216Z"}),r.createElement("path",{d:"M20.6251 28.125H1.87508V1.87502H20.6251V3.75004H22.5001V0.93751C22.5001 0.419302 22.0808 0 21.5626 0H0.937571C0.419363 0 6.10352e-05 0.419302 6.10352e-05 0.93751V29.0625C6.10352e-05 29.5807 0.419363 30 0.937571 30H21.5626C22.0808 30 22.5001 29.5807 22.5001 29.0625V26.25H20.6251V28.125Z"}))),v||(v=r.createElement("defs",null,r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{width:30,height:30})))))}var N,T=r.forwardRef(y);n.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function E(e,t){var n=e.title,a=e.titleId,c=C(e,["title","titleId"]);return r.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,N||(N=r.createElement("path",{d:"M27 4l-15 15-7-7-5 5 12 12 20-20z"})))}var L=r.forwardRef(E),M=(n.p,n.p+"static/media/default-avatar.b59675d9.png"),V=n(13),S=n.n(V);var W=function(e){var t=e.onOpenMobileMenu,n=Object(o.b)(),a=Object(o.c)(j.c.getUserName),c=M,s=Object(r.useState)(!1),u=Object(p.a)(s,2),i=u[0],f=u[1],b=Object(r.useState)(""),O=Object(p.a)(b,2),g=O[0],v=O[1],_=Object(r.useState)(""),m=Object(p.a)(_,2),I=m[0],w=m[1],y=Object(r.useState)(""),N=Object(p.a)(y,2),U=N[0],C=N[1],E=Object(r.useState)(!1),V=Object(p.a)(E,2),W=V[0],A=V[1],B=Object(r.useCallback)((function(){f((function(e){return!e}))}),[]);Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&B()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[B]);var G=function(){var e=Object(k.a)(x.a.mark((function e(t){var n,r,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files,(r=new FormData).append("file",n[0]),r.append("upload_preset","kyhvjqja"),A(!0),e.next=7,fetch("\thttps://api.cloudinary.com/v1_1/andray838/image/upload",{method:"POST",body:r,api_key:914256646727944});case 7:return a=e.sent,e.next=10,a.json();case 10:c=e.sent,v(c.secure_url),A(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(r.useCallback)((function(e){w(e.currentTarget.value)}),[]),H=Object(r.useCallback)((function(e){e.preventDefault()}),[]);return Object(h.jsxs)("div",{className:S.a.container,children:[Object(h.jsxs)("div",{className:S.a.userInfo,children:[Object(h.jsxs)("div",{className:S.a.avatar,onClick:B,children:[W?Object(h.jsx)("h3",{className:S.a.loading,children:"Loading..."}):Object(h.jsx)("img",{src:g||c,alt:"avatar",width:"40",className:S.a.avatarImg}),Object(h.jsx)("span",{className:S.a.dropdownCaret}),Object(h.jsxs)("div",{className:i?S.a.userInfoModalActive:S.a.userInfoModal,children:[Object(h.jsx)("label",{htmlFor:"fileUpload",name:"file",className:S.a.customFileUpload,children:"Change avatar"}),Object(h.jsx)("input",{type:"file",name:"file",id:"fileUpload",placeholder:"Upload an image",onChange:G,onClick:B}),Object(h.jsxs)("form",{onSubmit:H,children:[Object(h.jsx)("label",{htmlFor:"nameUpload",name:"name",className:S.a.customNameUpload,children:"Change name"}),Object(h.jsxs)("div",{className:S.a.inputWrapper,children:[Object(h.jsx)("input",{type:"name",name:"name",id:"nameUpload",value:I,placeholder:"Change name",onClick:B,onChange:F,className:S.a.nameUpload,autoComplete:"off",autoFocus:!0}),I&&Object(h.jsx)("button",{className:S.a.addBtn,type:"submit",onClick:function(){C(I.length<12?I:I.slice(0,12)+"..."),w("")},children:Object(h.jsx)(L,{className:S.a.addIcon})})]})]})]})]}),Object(h.jsxs)("span",{className:S.a.name,children:[U||a," "]})]}),Object(h.jsx)(d.c,{to:l.a.AUTH_VIEW,onClick:function(){return t(!1)},children:Object(h.jsx)(T,{className:S.a.signOutBtnLg,width:"16px",height:"16px",onClick:function(){return n(j.a.logOut())}})})]})},A=n(12),B=n.n(A);var G=function(e){var t=e.isOpen,n=e.onOpenMobileMenu,r=Object(o.c)(j.c.getIsLoggedIn),a=Object(o.b)();return Object(h.jsxs)("div",{className:B.a.container,children:[Object(h.jsx)("nav",{className:t?B.a.navMenuActive:B.a.navMenu,children:r?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:B.a.wrapper,children:[Object(h.jsx)(d.c,{to:l.a.MAIN_VIEW,exact:!0,className:B.a.link,activeClassName:B.a.activeLink,onClick:function(){return n(!1)},children:Object(h.jsx)("span",{className:B.a.text,children:"Home"})}),Object(h.jsx)(d.c,{to:l.a.USEFUL_INFO_VIEW,exact:!0,className:B.a.link,activeClassName:B.a.activeLink,onClick:function(){return n(!1)},children:Object(h.jsx)("span",{className:B.a.text,children:"Materials"})}),Object(h.jsx)(d.c,{to:l.a.CONTACTS_VIEW,exact:!0,className:B.a.link,activeClassName:B.a.activeLink,onClick:function(){return n(!1)},children:Object(h.jsx)("span",{className:B.a.text,children:"Contacts"})})]}),Object(h.jsx)(d.c,{to:l.a.AUTH_VIEW,onClick:function(){return n(!1)},children:Object(h.jsx)(T,{className:B.a.signOutBtn,width:"16px",height:"16px",onClick:function(){return a(j.a.logOut())}})})]}):Object(h.jsx)(d.c,{to:l.a.CONTACTS_VIEW,exact:!0,className:B.a.link,activeClassName:B.a.activeLink,onClick:function(){return n(!1)},children:Object(h.jsx)("span",{className:B.a.text,children:"Contacts"})})}),r&&Object(h.jsx)(W,{onOpenMobileMenu:n})]})},F=n(34),H=n.n(F);n.p;n.p;var R=function(e){var t=e.isOpen,n=e.onOpenMobileMenu;return Object(h.jsx)("div",{className:H.a.burger,children:Object(h.jsxs)("div",{className:t?"".concat(H.a.toggle," + ' ' + ").concat(H.a.active):H.a.toggle,type:"button",onClick:function(){return n(!t)},children:[Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{}),Object(h.jsx)("span",{})]})})},z=n(29),P=n.n(z);var q=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(o.c)(j.c.getIsLoggedIn);return Object(h.jsx)("header",{className:P.a.header,children:Object(h.jsxs)("div",{className:P.a.container,children:[Object(h.jsx)(_,{to:l.a.MAIN_VIEW,onOpenMobileMenu:a}),Object(h.jsxs)("div",{className:P.a.wrapper,children:[Object(h.jsx)(G,{isOpen:n,onOpenMobileMenu:a}),Object(h.jsx)(R,{isOpen:n,onOpenMobileMenu:a})]}),Object(h.jsx)("div",{className:c?P.a.lineLogin:P.a.line})]})})},D=n(54),Y=n.n(D),J=function(){return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(h.jsx)("div",{className:Y.a.lds_dual_ring})})},Q=n(35),Z=n.n(Q),K=function(){return Object(h.jsx)("footer",{className:Z.a.footer,children:Object(h.jsxs)("p",{className:Z.a.description,children:["\xa9 2021 | All Rights Reserved | Developed with"," ",Object(h.jsx)("span",{className:Z.a.icon,children:"\u2764"})," by"," ",Object(h.jsx)(d.c,{to:l.a.CONTACTS_VIEW,className:Z.a.link,children:"GoIT Students"})]})})},X=n(55),$=n.n(X),ee=n(56),te=n.n(ee);function ne(){var e=Object(o.b)(),t=Object(f.g)(),n=$.a.parse(t.search),a=Object(o.c)((function(e){return e.auth})).isLoggedIn;return Object(r.useEffect)((function(){e(j.a.logInGoogle(n))}),[n,e]),a&&Object(h.jsx)("div",{className:te.a.google__wrapper,children:Object(h.jsx)(f.b,{children:Object(h.jsx)(f.a,{to:"/"})})})}var re=n(28),ae=n(38);function ce(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,a=Object(ae.a)(e,["children","restricted"]),c=Object(o.c)(j.c.getIsLoggedIn)&&r;return Object(h.jsxs)(f.b,Object(re.a)(Object(re.a)({},a),{},{children:[" ",c?Object(h.jsx)(f.a,{to:"/"}):t," "]}))}function se(e){var t=e.children,n=Object(ae.a)(e,["children"]),r=Object(o.c)(j.c.getIsLoggedIn);return Object(h.jsx)(f.b,Object(re.a)(Object(re.a)({},n),{},{children:r?t:Object(h.jsx)(f.a,{to:"/auth"})}))}var oe=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,244))})),ue=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,248))})),ie=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,243))})),le=Object(r.lazy)((function(){return Promise.all([n.e(8),n.e(3)]).then(n.bind(null,245))})),de=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,246))})),fe=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,247))}));var je,pe=function(){var e=Object(o.b)(),t=Object(o.c)(j.c.getToken),n=Object(o.c)(j.c.getIsLoggedIn),a=localStorage.getItem("refreshToken");return Object(r.useEffect)((function(){a&&!n&&e(j.a.fetchCurrentUser(t))}),[e,a,t,n]),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(q,{}),Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)(J,{}),children:Object(h.jsx)("main",{className:"contentWrapper",children:Object(h.jsxs)(f.d,{children:[Object(h.jsx)(ce,{exact:!0,path:l.a.GOOGLE_LOGIN,restricted:!0,children:Object(h.jsx)(ne,{children:Object(h.jsx)(J,{})})}),Object(h.jsx)(se,{exact:!0,path:l.a.USEFUL_INFO_VIEW,children:Object(h.jsx)(ue,{})}),Object(h.jsx)(ce,{exact:!0,path:l.a.CONTACTS_VIEW,children:Object(h.jsx)(ie,{})}),Object(h.jsx)(ce,{exact:!0,path:l.a.AUTH_VIEW,restricted:!0,children:Object(h.jsx)(fe,{})}),Object(h.jsx)(se,{exact:!0,path:l.a.RESULT_VIEW,children:Object(h.jsx)(le,{})}),Object(h.jsx)(se,{exact:!0,path:l.a.MAIN_VIEW,children:Object(h.jsx)(oe,{})}),Object(h.jsx)(se,{exact:!0,path:l.a.TEST_VIEW,children:Object(h.jsx)(de,{})})]})})}),Object(h.jsx)(K,{}),Object(h.jsx)(i.a,{})]})},be=n(32),Oe=n(6),he=n(57),ge=n.n(he),ve=n(42),_e=n.n(ve),me=n(24),xe=n(2),ke=n(18),Ie=n(27),we=n(16),ye={asyncActionGetTest:Object(Oe.c)("data/getTest",function(){var e=Object(k.a)(x.a.mark((function e(t,n){var r,a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,Object(we.a)(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",r(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),asyncActionPostTest:Object(Oe.c)("data/postName",function(){var e=Object(k.a)(x.a.mark((function e(t,n,r){var a,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.rejectWithValue,e.prev=1,e.next=4,Object(we.e)(t,n);case 4:return c=e.sent,s=c.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n,r){return e.apply(this,arguments)}}()),asyncActionResetAnswers:function(e){return function(t){t(Object(Ie.b)(e))}}},Ne=Object(Oe.d)([],(je={},Object(xe.a)(je,Ie.a,(function(e,t){var n=t.payload;return[].concat(Object(be.a)(e),[n])})),Object(xe.a)(je,Ie.d,(function(e,t){var n=t.payload;return[].concat(Object(be.a)(e.filter((function(e){return e.questionId!==n.questionId}))),[n])})),Object(xe.a)(je,Ie.b,(function(e,t){return t.payload})),je)),Te=Object(Oe.d)("",Object(xe.a)({},Ie.c,(function(e,t){return t.payload}))),Ue=Object(Oe.d)([],Object(xe.a)({},ye.asyncActionGetTest.fulfilled,(function(e,t){return t.payload}))),Ce=Object(ke.b)({answers:Ne,nameTest:Te,questions:Ue}),Ee=[].concat(Object(be.a)(Object(Oe.e)({serializableCheck:{ignoredActions:[me.a,me.f,me.b,me.c,me.d,me.e]}})),[ge.a]),Le={key:"auth",storage:_e.a,whitelist:["accessToken"]},Me={key:"questions",storage:_e.a,whitelist:"nameTest"},Ve=Object(Oe.a)({reducer:{questions:Object(me.g)(Me,Ce),auth:Object(me.g)(Le,j.b)},devTools:!1,middleware:Ee}),Se=Object(me.h)(Ve);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(o.a,{store:Ve,children:Object(h.jsx)(u.a,{loading:null,persistor:Se,children:Object(h.jsx)(pe,{})})})}),document.getElementById("root"))}},[[96,7,9]]]);
//# sourceMappingURL=main.6104394f.chunk.js.map