import"./hoisted.f47fbe38.js";const u="modulepreload",h=function(r){return"/"+r},d={},f=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=h(t),t in d)return;d[t]=!0;const a=t.endsWith(".css"),m=a?'[rel="stylesheet"]':"";if(!!s)for(let l=i.length-1;l>=0;l--){const c=i[l];if(c.href===t&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${m}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":u,a||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),a)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>e())};async function g(r){const{default:e}=await f(()=>import("./mermaid.core.bf6b6852.js").then(n=>n.aP),[]);e.initialize({startOnLoad:!1,fontFamily:"var(--sans-font)",theme:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default"});for(const n of r){const s=n.getAttribute("data-content");if(!s)continue;let i=document.createElement("svg");const t=i.id="mermaid-"+Math.round(Math.random()*1e5);n.appendChild(i),e.render(t,s).then(a=>{n.innerHTML=a.svg,document.getElementById(t).style.margin="0 auto",document.getElementById(t).style["margin-bottom"]="20px"})}}const p=document.getElementsByClassName("mermaid");document.getElementsByClassName("mermaid").length>0&&g(p);let v=document.querySelectorAll("pre");v.forEach(r=>{if(!navigator.clipboard)return;const e=document.createElement("button");e.className="button has-icon size-tiny button-copy",e.innerHTML='<svg viewBox="0 0 512 512" class="astro-BBE6DXRZ" astro-icon="ion:copy"><path fill="currentColor" d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72z"></path><path fill="currentColor" d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80z"></path></svg>',r.appendChild(e);const n=document.createElement("span");n.innerText="copied",e.appendChild(n),e.addEventListener("click",async()=>{const s=r.querySelector("code");await navigator.clipboard.writeText(s.innerText)}),e.addEventListener("mouseleave",()=>{e.blur()})});export{f as _};
