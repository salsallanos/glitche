(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6659],{1871:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return popup_Popup}});var t=l(7437),a=l(6277),r=l(2265),utility_useClickOutside=e=>{let s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let maybeHandler=l=>{s.current&&!s.current.contains(l.target)&&e()};return document.addEventListener("mousedown",maybeHandler),()=>{document.removeEventListener("mousedown",maybeHandler)}},[e]),s},c=l(429),n=l.n(c);let EmbedPopup_=e=>{let{close:s,videoID:l}=e,a=utility_useClickOutside(()=>{s(!1)});return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,t.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,t.jsxs)("div",{className:"mfp-container popup-container mfp-s-ready mfp-iframe-holder",children:[(0,t.jsx)("div",{className:"mfp-content",ref:a,children:(0,t.jsxs)("div",{className:"mfp-iframe-scaler",children:[(0,t.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:()=>s(),children:"\xd7"}),(0,t.jsx)(n(),{url:l,playing:!0})]})}),(0,t.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})};var popup_EmbedPopup=()=>{let[e,s]=(0,r.useState)(!1),[l,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{(e.href.includes("youtu.be")||e.href.includes("vimeo.com")||e.href.includes("soundcloud.com"))&&e.addEventListener("click",l=>{l.preventDefault(),a(e.href),s(!0)})})},600)},[e]),e&&(0,t.jsx)(EmbedPopup_,{close:()=>s(!1),videoID:l})},i=l(7308),o=l.n(i),popup_ImageGallery=()=>{let{gallery:e,setGallery:s}=(0,r.useContext)(a.context);return(0,t.jsx)(r.Fragment,{children:(0,t.jsx)(o(),{toggler:e,sources:["images/works/work1.jpg","images/works/work2.jpg","images/works/work3.jpg","images/works/work4.jpg"]})})};let ImgViews=e=>{let{close:s,src:l}=e,a=utility_useClickOutside(()=>{s(!1)});return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,t.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,t.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,t.jsx)("div",{className:"mfp-content",ref:a,children:(0,t.jsx)("div",{className:"mfp-iframe-scaler",children:(0,t.jsx)("img",{className:"mfp-img",src:l})})}),(0,t.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})};var popup_ImageView=()=>{let[e,s]=(0,r.useState)(!1),[l,a]=(0,r.useState)(null);return(0,r.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{e.href.includes("images/")&&null===e.getAttribute("download")&&e.addEventListener("click",l=>{l.preventDefault(),a(e.href),s(!0)})})},1500)},[]),(0,t.jsx)(r.Fragment,{children:e&&(0,t.jsx)(ImgViews,{close:()=>s(!1),src:l})})},PopupContainer=e=>{let{children:s,nullValue:l}=e,{modalToggle:c,modal:n}=(0,r.useContext)(a.context),i=utility_useClickOutside(()=>{c(!1),l(null)});return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)("div",{className:"mfp-bg mfp-fade mfp-ready",onClick:e=>{e.preventDefault(),c(!1),l(null)}}),(0,t.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,t.jsxs)("div",{className:"mfp-container mfp-s-ready mfp-inline-holder",children:[(0,t.jsx)("div",{className:"mfp-content",ref:i,children:(0,t.jsxs)("div",{id:"popup-2",className:"popup-box mfp-fade",children:[s,(0,t.jsx)("button",{onClick:e=>{e.preventDefault(),c(!1),l(null)},title:"Close (Esc)",type:"button",className:"mfp-close",children:"\xd7"})]})}),(0,t.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},popup_ProjectPopup=()=>{let{setPortfolioModal:e,portfolioModal:s}=(0,r.useContext)(a.context);return(0,t.jsx)(PopupContainer,{nullValue:e,children:(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("div",{className:"image",children:(0,t.jsx)("img",{src:"images/works/work9.jpg",alt:""})}),(0,t.jsxs)("div",{className:"desc",children:[(0,t.jsx)("div",{className:"category",children:"Graphics"}),(0,t.jsx)("h4",{children:"Hello World Paper"}),(0,t.jsx)("p",{children:"Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo."}),(0,t.jsx)("a",{href:"#",className:"btn","data-text":"View Project",children:"View Project"})]})]})})},popup_Popup=()=>{let{modal:e,portfolioModal:s,blogModal:l}=(0,r.useContext)(a.context);return(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)(popup_EmbedPopup,{}),(0,t.jsx)(popup_ImageView,{}),(0,t.jsx)(popup_ImageGallery,{}),e&&s&&(0,t.jsx)(popup_ProjectPopup,{})]})}},6277:function(e,s,l){"use strict";l.r(s),l.d(s,{context:function(){return o}});var t=l(7437),a=l(2265);let{MODAL:r,PORTFOLIOMODAL:c,BLOGMODAL:n,GALLERY:i}={MODAL:"MODAL",PORTFOLIOMODAL:"PORTFOLIOMODAL",BLOGMODAL:"BLOGMODAL",GALLERY:"GALLERY"},o=(0,a.createContext)(),reducer=(e,s)=>{let{type:l,payload:t}=s;switch(l){case r:return{...e,modal:t};case c:return{...e,portfolioModal:t};case n:return{...e,blogModal:t};case i:return{...e,gallery:t};default:return e}};s.default=e=>{let[s,l]=(0,a.useReducer)(reducer,{modal:!1,portfolioModal:null,blogModal:null,gallery:!1}),d=(0,a.useCallback)(e=>{l({type:r,payload:e})},[]),u=(0,a.useCallback)(e=>{l({type:c,payload:e})},[]),m=(0,a.useCallback)(e=>{l({type:n,payload:e})},[]),p=(0,a.useCallback)(e=>{console.log(e),l({type:i,payload:e})},[]),{modal:f,portfolioModal:h,blogModal:x,gallery:j}=s;return(0,t.jsx)(o.Provider,{value:{modal:f,modalToggle:d,portfolioModal:h,setPortfolioModal:u,blogModal:x,setBlogModal:m,gallery:j,setGallery:p},children:e.children})}},502:function(e,s,l){"use strict";l.r(s);var t=l(7437),a=l(1396),r=l.n(a),c=l(2265);s.default=e=>{let{dark:s}=e,[l,a]=(0,c.useState)(!1),onClick=e=>{e.preventDefault(),document.querySelector("body").classList.toggle("loaded"),a(!l)},[n,i]=(0,c.useState)("home");return(0,c.useEffect)(()=>{i(window.location.pathname)},[]),(0,t.jsx)("header",{className:l?"active":"",children:(0,t.jsxs)("div",{className:"head-top",children:[(0,t.jsx)("a",{href:"#",className:"menu-btn",onClick:e=>onClick(e),children:(0,t.jsx)("span",{})}),(0,t.jsx)("div",{className:"top-menu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:n.includes("resume")?"active":"",children:(0,t.jsx)(r(),{href:"resume-rtl",className:"lnk",children:"استئنف"})}),(0,t.jsx)("li",{className:n.includes("portfolio")?"active":"",children:(0,t.jsx)(r(),{href:"portfolio-rtl",className:"lnk",children:"مكون، ماهية، تصميم"})}),(0,t.jsx)("li",{className:n.includes("blog")?"active":"",children:(0,t.jsx)(r(),{href:"blog-rtl",className:"lnk",children:"مدونة"})}),(0,t.jsx)("li",{className:n.includes("contacts")?"active":"",children:(0,t.jsx)(r(),{href:"contacts-rtl",className:"btn",children:"جهات الاتصال"})})]})})]})})}},810:function(e,s,l){"use strict";l.r(s);var t=l(7437),a=l(2265);s.default=()=>{let[e,s]=(0,a.useState)(!1);(0,a.useEffect)(()=>{window.addEventListener("scroll",()=>{let e=document.querySelectorAll(".section_"),s=document.querySelectorAll(".top-menu li"),l="";e.forEach(e=>{let s=e.offsetTop,t=e.clientHeight;window.scrollY>=s-t/3&&(l=e.getAttribute("id"))}),s.forEach(e=>{null!==l&&e.classList.remove("active"),e.getElementsByTagName("a")[0].getAttribute("href")=="#".concat(l)&&e.classList.add("active")})})},[]);let onClick=l=>{l.preventDefault(),document.querySelector("body").classList.toggle("loaded"),s(!e)};return(0,t.jsx)("header",{className:e?"active":"",children:(0,t.jsxs)("div",{className:"head-top",children:[(0,t.jsx)("a",{href:"#",className:"menu-btn",onClick:e=>onClick(e),children:(0,t.jsx)("span",{})}),(0,t.jsx)("div",{className:"top-menu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"",children:(0,t.jsx)("a",{href:"#section-resume",className:"lnk",children:"استئنف"})}),(0,t.jsx)("li",{className:"",children:(0,t.jsx)("a",{href:"#section-works",className:"lnk",children:"مكون، ماهية، تصميم"})}),(0,t.jsx)("li",{className:"",children:(0,t.jsx)("a",{href:"#section-blog",className:"lnk",children:"مدونة"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#section-contacts",className:"btn",children:"جهات الاتصال"})})]})})]})})}},4655:function(){}}]);