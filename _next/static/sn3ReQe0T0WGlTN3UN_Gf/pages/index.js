(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7gw2":function(n,e,t){"use strict";var r=t("q1tI");e.a=function(n){var e=Object(r.useState)([]),t=e[0],o=e[1],u=Object(r.useState)([]),i=u[0],l=u[1],a=Object(r.useRef)(null),c=n||{},d=c.root,s=c.rootMargin,f=c.threshold;return Object(r.useEffect)((function(){return t.length&&(a.current=new IntersectionObserver((function(n){l(n)}),{root:d,rootMargin:s,threshold:f}),t.forEach((function(n){a.current.observe(n)}))),function(){a.current&&a.current.disconnect()}}),[t,d,s,f]),[a.current,o,i]}},ODXe:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,o=!1,u=void 0;try{for(var i,l=n[Symbol.iterator]();!(r=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==l.return||l.return()}finally{if(o)throw u}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,"a",(function(){return o}))},RNiq:function(n,e,t){"use strict";t.r(e),t.d(e,"__N_SSG",(function(){return v}));var r=t("ODXe"),o=t("q1tI"),u=t.n(o),i=t("7gw2"),l=t("8Kt/"),a=t.n(l),c=t("a6RD"),d=t.n(c),s=u.a.createElement,f=d()((function(){return t.e(19).then(t.bind(null,"icwr"))}),{loadableGenerated:{webpack:function(){return["icwr"]},modules:["../components/index/IndexMenuBar"]}}),b=d()((function(){return t.e(18).then(t.bind(null,"37xJ"))}),{loadableGenerated:{webpack:function(){return["37xJ"]},modules:["../components/index/IndexHeroBackground"]}}),m=d()((function(){return t.e(15).then(t.bind(null,"AjIk"))}),{loadableGenerated:{webpack:function(){return["AjIk"]},modules:["../components/index/IndexBlogContent"]}}),p=d()((function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,"XMlw"))}),{loadableGenerated:{webpack:function(){return["XMlw"]},modules:["../components/index/IndexPortofolioContent"]}}),w=d()((function(){return t.e(17).then(t.bind(null,"Tun0"))}),{loadableGenerated:{webpack:function(){return["Tun0"]},modules:["../components/index/IndexCoffeeContent"]}}),h=d()((function(){return t.e(16).then(t.bind(null,"v1ip"))}),{loadableGenerated:{webpack:function(){return["v1ip"]},modules:["../components/general/GeneralFooter"]}});var v=!0;e.default=function(n){var e=n.listPortofolio,t=n.listFeaturedArtikel,u=Object(i.a)({threshold:.25,root:null}),l=Object(r.a)(u,3),c=l[0],d=l[1],v=l[2];return Object(o.useEffect)((function(){var n=Array.from(document.querySelectorAll(".lazy-content"));d(n)}),[d]),Object(o.useEffect)((function(){v.forEach((function(n){if(n.isIntersecting){var e=n.target.querySelector(".desc");e&&(e.classList.add("animate__animated"),e.classList.add("animate__zoomIn"))}}))}),[v,c]),s("div",null,s(a.a,null,s("title",null,"Munir AP"),s("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),s(f,null),s(b,null),s(m,{classExtend:"lazy-content",listFeaturedArtikel:t}),s(p,{classExtend:"lazy-content",listPortofolio:e}),s(w,{classExtend:"lazy-content"}),s(h,null))}},vlRD:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,0,2]]]);