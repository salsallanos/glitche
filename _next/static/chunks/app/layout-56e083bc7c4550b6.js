(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{6763:function(e,t,n){Promise.resolve().then(n.t.bind(n,2853,23)),Promise.resolve().then(n.bind(n,6277)),Promise.resolve().then(n.bind(n,7825)),Promise.resolve().then(n.t.bind(n,6090,23)),Promise.resolve().then(n.t.bind(n,3377,23)),Promise.resolve().then(n.t.bind(n,9730,23)),Promise.resolve().then(n.t.bind(n,8782,23)),Promise.resolve().then(n.t.bind(n,5383,23)),Promise.resolve().then(n.t.bind(n,6659,23)),Promise.resolve().then(n.t.bind(n,3603,23))},6277:function(e,t,n){"use strict";n.r(t),n.d(t,{context:function(){return c}});var r=n(7437),o=n(2265);let{MODAL:l,PORTFOLIOMODAL:a,BLOGMODAL:s,GALLERY:i}={MODAL:"MODAL",PORTFOLIOMODAL:"PORTFOLIOMODAL",BLOGMODAL:"BLOGMODAL",GALLERY:"GALLERY"},c=(0,o.createContext)(),reducer=(e,t)=>{let{type:n,payload:r}=t;switch(n){case l:return{...e,modal:r};case a:return{...e,portfolioModal:r};case s:return{...e,blogModal:r};case i:return{...e,gallery:r};default:return e}};t.default=e=>{let[t,n]=(0,o.useReducer)(reducer,{modal:!1,portfolioModal:null,blogModal:null,gallery:!1}),u=(0,o.useCallback)(e=>{n({type:l,payload:e})},[]),d=(0,o.useCallback)(e=>{n({type:a,payload:e})},[]),f=(0,o.useCallback)(e=>{n({type:s,payload:e})},[]),p=(0,o.useCallback)(e=>{console.log(e),n({type:i,payload:e})},[]),{modal:_,portfolioModal:b,blogModal:y,gallery:v}=t;return(0,r.jsx)(c.Provider,{value:{modal:_,modalToggle:u,portfolioModal:b,setPortfolioModal:d,blogModal:y,setBlogModal:f,gallery:v,setGallery:p},children:e.children})}},7825:function(e,t,n){"use strict";n.r(t);var r=n(7437),o=n(2265);t.default=()=>{(0,o.useEffect)(()=>{fadeOut(document.querySelector(".preloader .pre-inner"),800,function(){document.querySelector(".preloader").style.display="none",document.body.classList.add("loaded")});function fadeOut(e,t,n){var r=1,o=1/(t/(1e3/60)),l=setInterval(function(){r-=o,e.style.opacity=r,r<=0&&(clearInterval(l),"function"==typeof n&&n())},1e3/60)}},[]);let[e,t]=(0,o.useState)("loading ...");return(0,o.useEffect)(()=>{window.location.pathname.includes("rtl")&&t("جار التحميل...")},[]),(0,r.jsx)("div",{className:"preloader",children:(0,r.jsx)("div",{className:"centrize full-width",children:(0,r.jsx)("div",{className:"vertical-center",children:(0,r.jsxs)("div",{className:"pre-inner",children:[(0,r.jsx)("div",{className:"load typing-load",children:(0,r.jsx)("p",{children:e})}),(0,r.jsx)("span",{className:"typed-load"})]})})})})}},2853:function(){},6090:function(){},3377:function(){},9730:function(){},8782:function(){},5383:function(){},3603:function(){},6659:function(e){e.exports={style:{fontFamily:"'__Roboto_Mono_e5e9bb', '__Roboto_Mono_Fallback_e5e9bb'",fontStyle:"normal"},className:"__className_e5e9bb",variable:"__variable_e5e9bb"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:a.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[2971,2472,1744],function(){return e(e.s=6763)}),_N_E=e.O()}]);