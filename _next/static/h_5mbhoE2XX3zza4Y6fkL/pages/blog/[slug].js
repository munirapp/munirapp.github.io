(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16],{"1OyB":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},J54I:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var o=n("q1tI"),r=n.n(o),c=n("1OyB"),a=n("vuIU"),i=n("JX7q"),u=n("Ji7U"),l=n("md7G"),s=n("foSv"),f=n("rePB"),m=r.a.createElement;function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(f.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(s.a)(t);if(e){var r=Object(s.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t){Object(u.a)(n,t);var e=d(n);function n(){var t;return Object(c.a)(this,n),t=e.call(this),Object(f.a)(Object(i.a)(t),"handleClick",(function(e){var n=window.localStorage,o=n.getItem("themeMode"),r=document.documentElement.style,c="light_theme"==o?"dark_theme":"light_theme",a=t.state[c].elementStyle;r.setProperty("--theme-color",a.color),r.setProperty("--theme-text-color",a.textColor),t.setState((function(t){return{buttonTheme:b({},t[c].buttonStyle)}})),n.setItem("themeMode",c)})),t.state={buttonTheme:{className:null,icon:null,text:null},light_theme:{buttonStyle:{className:"btn btn-model3",text:"Dark Mode",icon:"\ud83c\udf19"},elementStyle:{color:"white",textColor:"black"}},dark_theme:{buttonStyle:{className:"btn btn-model1",text:"Light Mode",icon:"\u2600\ufe0f"},elementStyle:{color:"#17212b",textColor:"#ecf0f1"}}},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=window.localStorage.getItem("themeMode"),e=t||"light_theme",n=document.documentElement,o=this.state[e].elementStyle;n.style.setProperty("--theme-color",o.color),n.style.setProperty("--theme-text-color",o.textColor),this.setState((function(t){return{buttonTheme:b({},t[e].buttonStyle)}}))}},{key:"render",value:function(){var t=this.state.buttonTheme;return m("button",{className:t.className,onClick:this.handleClick},t.icon,m("span",{className:"theme-button-text"}," ",t.text))}}]),n}(o.Component),h=r.a.createElement;function g(t){var e=t.linkBack,n=t.textBack;return h("div",{className:"menu-blog"},h("a",{href:e},h("span",{className:"text-xl"}," \u2190 ",n)),h("div",{className:"ml-auto"},h(y,null)))}},JX7q:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},Ji7U:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},KTQB:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return p}));var o=n("q1tI"),r=n.n(o),c=n("a6RD"),a=n.n(c),i=n("8Kt/"),u=n.n(i),l=n("J54I"),s=n("v1ip"),f=r.a.createElement,m=a()((function(){return n.e(13).then(n.bind(null,"bZcC"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["bZcC"]},modules:["../../components/blog/BlogContent"]}}),p=!0;e.default=function(t){var e=t.content,n=t.meta;return f("div",null,f(u.a,null,f("title",null,n.title),f("meta",{name:"author",content:n.author}),f("meta",{name:"description",content:n.desc}),f("meta",{property:"og:url",content:"https://munirapp.github.io/blog/".concat(n.date,"-").concat(n.slug)}),f("meta",{property:"og:type",content:"article"}),f("meta",{property:"og:title",content:n.title}),f("meta",{property:"og:description",content:n.desc}),f("meta",{property:"og:image",content:n.image})),f(m,{meta:n}),f(l.a,{linkBack:"/blog",textBack:"Back to Blog"}),f("div",{className:"blog-wrapper"},f("div",{className:"blog-header"},f("div",{className:"title"},n.title),f("div",{className:"desc"},"Author: ",n.author," | Date: ",n.date),f("img",{src:n.image,alt:n.title,className:"animate__animated animate__zoomIn"})),f("div",{className:"containter"},f(m,{content:e}))),f(s.default,null))}},MTnK:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n("KTQB")}])},foSv:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},md7G:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return c}));var r=n("JX7q");function c(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?Object(r.a)(t):e}},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},v1ip:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var o=n("q1tI"),r=n.n(o).a.createElement;function c(){return r("div",{className:"general-footer"},r("p",null,"Made with ",r("span",null,"\u2665"),", created by"," ",r("a",{href:"https://nextjs.org/",target:"__blank"},"Next JS")," ","and"," ",r("a",{href:"https://tailwindcss.com/",target:"__blank"},"TailwindCSS"),". Asset Image and Icon by"," ",r("a",{href:"https://www.freepik.com/",target:"__blank"},"Freepik"," "),"and"," ",r("a",{href:"https://www.flaticon.com/",target:"__blank"},"Flaticon")))}},vuIU:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))}},[["MTnK",1,0,3]]]);