import{L as H,c as w,d as Z,M as j,h as L,l as x,u as U,I as F}from"./mermaid.core.bf6b6852.js";import{c as P}from"./createText-a49d2d2a.1b3e14c2.js";import{p as Q}from"./svgDraw-95adee0a.9d5e8ec2.js";import{l as et}from"./line.5f77a4bf.js";const st=(t,r,e,a)=>{r.forEach((r=>{yt[r](t,e,a)}))},it=(t,r,e)=>{x.trace("Making markers for ",e),t.append("defs").append("marker").attr("id",r+"-extensionStart").attr("class","marker extension "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",r+"-extensionEnd").attr("class","marker extension "+r).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},nt=(t,r)=>{t.append("defs").append("marker").attr("id",r+"-compositionStart").attr("class","marker composition "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"-compositionEnd").attr("class","marker composition "+r).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},lt=(t,r)=>{t.append("defs").append("marker").attr("id",r+"-aggregationStart").attr("class","marker aggregation "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"-aggregationEnd").attr("class","marker aggregation "+r).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},ct=(t,r)=>{t.append("defs").append("marker").attr("id",r+"-dependencyStart").attr("class","marker dependency "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",r+"-dependencyEnd").attr("class","marker dependency "+r).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},ht=(t,r)=>{t.append("defs").append("marker").attr("id",r+"-lollipopStart").attr("class","marker lollipop "+r).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},ot=(t,r)=>{t.append("marker").attr("id",r+"-pointEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"-pointStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},ft=(t,r)=>{t.append("marker").attr("id",r+"-circleEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"-circleStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},pt=(t,r)=>{t.append("marker").attr("id",r+"-crossEnd").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",r+"-crossStart").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},dt=(t,r)=>{t.append("defs").append("marker").attr("id",r+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},yt={extension:it,composition:nt,aggregation:lt,dependency:ct,lollipop:ht,point:ot,circle:ft,cross:pt,barb:dt},Kt=st;function bt(t,r){r&&t.attr("style",r)}function xt(t){const r=L(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),e=r.append("xhtml:div"),a=t.label,n=t.isNode?"nodeLabel":"edgeLabel";return e.html('<span class="'+n+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+a+"</span>"),bt(e,t.labelStyle),e.style("display","inline-block"),e.style("white-space","nowrap"),e.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}const gt=(t,r,e,a)=>{let n=t||"";if("object"==typeof n&&(n=n[0]),H(w().flowchart.htmlLabels)){n=n.replace(/\\n|\n/g,"<br />"),x.info("vertexText"+n);return xt({isNode:a,label:j(n).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:r.replace("fill:","color:")})}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",r.replace("color:","fill:"));let a=[];a="string"==typeof n?n.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(n)?n:[];for(const r of a){const a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),e?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=r.trim(),t.appendChild(a)}return t}},T=gt,S=async(t,r,e,a)=>{let n;const i=r.useHtmlLabels||H(w().flowchart.htmlLabels);n=e||"node default";const s=t.insert("g").attr("class",n).attr("id",r.domId||r.id),l=s.insert("g").attr("class","label").attr("style",r.labelStyle);let o;o=void 0===r.labelText?"":"string"==typeof r.labelText?r.labelText:r.labelText[0];const d=l.node();let c;c="markdown"===r.labelType?P(l,Z(j(o),w()),{useHtmlLabels:i,width:r.width||w().flowchart.wrappingWidth,classes:"markdown-node-label"}):d.appendChild(T(Z(j(o),w()),r.labelStyle,!1,a));let h=c.getBBox();const p=r.padding/2;if(H(w().flowchart.htmlLabels)){const t=c.children[0],r=L(c),e=t.getElementsByTagName("img");if(e){const t=""===o.replace(/<img[^>]*>/g,"").trim();await Promise.all([...e].map((r=>new Promise((e=>r.addEventListener("load",(function(){if(r.style.display="flex",r.style.flexDirection="column",t){const t=w().fontSize?w().fontSize:window.getComputedStyle(document.body).fontSize,e=5;r.style.width=parseInt(t,10)*e+"px"}else r.style.width="100%";e(r)})))))))}h=t.getBoundingClientRect(),r.attr("width",h.width),r.attr("height",h.height)}return i?l.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"):l.attr("transform","translate(0, "+-h.height/2+")"),r.centerLabel&&l.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),l.insert("rect",":first-child"),{shapeSvg:s,bbox:h,halfPadding:p,label:l}},k=(t,r)=>{const e=r.node().getBBox();t.width=e.width,t.height=e.height};function N(t,r,e,a){return t.insert("polygon",":first-child").attr("points",a.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-r/2+","+e/2+")")}function ut(t,r){return t.intersect(r)}function tt(t,r,e,a){var n=t.x,i=t.y,s=n-a.x,l=i-a.y,o=Math.sqrt(r*r*l*l+e*e*s*s),d=Math.abs(r*e*s/o);a.x<n&&(d=-d);var c=Math.abs(r*e*l/o);return a.y<i&&(c=-c),{x:n+d,y:i+c}}function wt(t,r,e){return tt(t,r,r,e)}function mt(t,r,e,a){var n,i,s,l,o,d,c,h,p,g,y,f,x;if(n=r.y-t.y,s=t.x-r.x,o=r.x*t.y-t.x*r.y,p=n*e.x+s*e.y+o,g=n*a.x+s*a.y+o,!(0!==p&&0!==g&&V(p,g)||(i=a.y-e.y,l=e.x-a.x,d=a.x*e.y-e.x*a.y,c=i*t.x+l*t.y+d,h=i*r.x+l*r.y+d,0!==c&&0!==h&&V(c,h)||(y=n*l-i*s,0===y))))return f=Math.abs(y/2),{x:(x=s*d-l*o)<0?(x-f)/y:(x+f)/y,y:(x=i*o-n*d)<0?(x-f)/y:(x+f)/y}}function V(t,r){return t*r>0}function kt(t,r,e){var a=t.x,n=t.y,i=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof r.forEach?r.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,r.x),l=Math.min(l,r.y));for(var o=a-t.width/2-s,d=n-t.height/2-l,c=0;c<r.length;c++){var h=r[c],p=r[c<r.length-1?c+1:0],g=mt(t,e,{x:o+h.x,y:d+h.y},{x:o+p.x,y:d+p.y});g&&i.push(g)}return i.length?(i.length>1&&i.sort((function(t,r){var a=t.x-e.x,n=t.y-e.y,i=Math.sqrt(a*a+n*n),s=r.x-e.x,l=r.y-e.y,o=Math.sqrt(s*s+l*l);return i<o?-1:i===o?0:1})),i[0]):t}const vt=(t,r)=>{var e,a,n=t.x,i=t.y,s=r.x-n,l=r.y-i,o=t.width/2,d=t.height/2;return Math.abs(l)*o>Math.abs(s)*d?(l<0&&(d=-d),e=0===l?0:d*s/l,a=d):(s<0&&(o=-o),e=o,a=0===s?0:o*l/s),{x:n+e,y:i+a}},Lt=vt,m={node:ut,circle:wt,ellipse:tt,polygon:kt,rect:Lt},St=async(t,r)=>{r.useHtmlLabels||w().flowchart.htmlLabels||(r.centerLabel=!0);const{shapeSvg:e,bbox:a,halfPadding:n}=await S(t,r,"node "+r.classes,!0);x.info("Classes = ",r.classes);const i=e.insert("rect",":first-child");return i.attr("rx",r.rx).attr("ry",r.ry).attr("x",-a.width/2-n).attr("y",-a.height/2-n).attr("width",a.width+r.padding).attr("height",a.height+r.padding),k(r,i),r.intersect=function(t){return m.rect(r,t)},e},Et=St,J=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding+(a.height+r.padding),i=[{x:n/2,y:0},{x:n,y:-n/2},{x:n/2,y:-n},{x:0,y:-n/2}];x.info("Question main (Circle)");const s=N(e,n,n,i);return s.attr("style",r.style),k(r,s),r.intersect=function(t){return x.warn("Intersect called"),m.polygon(r,i,t)},e},Bt=(t,r)=>{const e=t.insert("g").attr("class","node default").attr("id",r.domId||r.id),a=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return e.insert("polygon",":first-child").attr("points",a.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),r.width=28,r.height=28,r.intersect=function(t){return m.circle(r,14,t)},e},Mt=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.height+r.padding,i=n/4,s=a.width+2*i+r.padding,l=[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],o=N(e,s,n,l);return o.attr("style",r.style),k(r,o),r.intersect=function(t){return m.polygon(r,l,t)},e},Ct=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding,i=a.height+r.padding,s=[{x:-i/2,y:0},{x:n,y:0},{x:n,y:-i},{x:-i/2,y:-i},{x:0,y:-i/2}];return N(e,n,i,s).attr("style",r.style),r.width=n+i,r.height=i,r.intersect=function(t){return m.polygon(r,s,t)},e},Tt=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding,i=a.height+r.padding,s=[{x:-2*i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:i/6,y:-i}],l=N(e,n,i,s);return l.attr("style",r.style),k(r,l),r.intersect=function(t){return m.polygon(r,s,t)},e},Rt=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding,i=a.height+r.padding,s=[{x:2*i/6,y:0},{x:n+i/6,y:0},{x:n-2*i/6,y:-i},{x:-i/6,y:-i}],l=N(e,n,i,s);return l.attr("style",r.style),k(r,l),r.intersect=function(t){return m.polygon(r,s,t)},e},It=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding,i=a.height+r.padding,s=[{x:-2*i/6,y:0},{x:n+2*i/6,y:0},{x:n-i/6,y:-i},{x:i/6,y:-i}],l=N(e,n,i,s);return l.attr("style",r.style),k(r,l),r.intersect=function(t){return m.polygon(r,s,t)},e},Ht=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding,i=a.height+r.padding,s=[{x:i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:-2*i/6,y:-i}],l=N(e,n,i,s);return l.attr("style",r.style),k(r,l),r.intersect=function(t){return m.polygon(r,s,t)},e},$t=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding,i=a.height+r.padding,s=[{x:0,y:0},{x:n+i/2,y:0},{x:n,y:-i/2},{x:n+i/2,y:-i},{x:0,y:-i}],l=N(e,n,i,s);return l.attr("style",r.style),k(r,l),r.intersect=function(t){return m.polygon(r,s,t)},e},Nt=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding,i=n/2,s=i/(2.5+n/50),l=a.height+s+r.padding,o="M 0,"+s+" a "+i+","+s+" 0,0,0 "+n+" 0 a "+i+","+s+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+i+","+s+" 0,0,0 "+n+" 0 l 0,"+-l,d=e.attr("label-offset-y",s).insert("path",":first-child").attr("style",r.style).attr("d",o).attr("transform","translate("+-n/2+","+-(l/2+s)+")");return k(r,d),r.intersect=function(t){const e=m.rect(r,t),a=e.x-r.x;if(0!=i&&(Math.abs(a)<r.width/2||Math.abs(a)==r.width/2&&Math.abs(e.y-r.y)>r.height/2-s)){let n=s*s*(1-a*a/(i*i));0!=n&&(n=Math.sqrt(n)),n=s-n,t.y-r.y>0&&(n=-n),e.y+=n}return e},e},_t=async(t,r)=>{const{shapeSvg:e,bbox:a,halfPadding:n}=await S(t,r,"node "+r.classes,!0),i=e.insert("rect",":first-child"),s=a.width+r.padding,l=a.height+r.padding;if(i.attr("class","basic label-container").attr("style",r.style).attr("rx",r.rx).attr("ry",r.ry).attr("x",-a.width/2-n).attr("y",-a.height/2-n).attr("width",s).attr("height",l),r.props){const t=new Set(Object.keys(r.props));r.props.borders&&(rt(i,r.props.borders,s,l),t.delete("borders")),t.forEach((t=>{x.warn(`Unknown node property ${t}`)}))}return k(r,i),r.intersect=function(t){return m.rect(r,t)},e},Wt=async(t,r)=>{const{shapeSvg:e}=await S(t,r,"label",!0);x.trace("Classes = ",r.classes);const a=e.insert("rect",":first-child");if(a.attr("width",0).attr("height",0),e.attr("class","label edgeLabel"),r.props){const t=new Set(Object.keys(r.props));r.props.borders&&(rt(a,r.props.borders,0,0),t.delete("borders")),t.forEach((t=>{x.warn(`Unknown node property ${t}`)}))}return k(r,a),r.intersect=function(t){return m.rect(r,t)},e};function rt(t,r,e,a){const n=[],i=t=>{n.push(t,0)},s=t=>{n.push(0,t)};r.includes("t")?(x.debug("add top border"),i(e)):s(e),r.includes("r")?(x.debug("add right border"),i(a)):s(a),r.includes("b")?(x.debug("add bottom border"),i(e)):s(e),r.includes("l")?(x.debug("add left border"),i(a)):s(a),t.attr("stroke-dasharray",n.join(" "))}const Xt=(t,r)=>{let e;e=r.classes?"node "+r.classes:"node default";const a=t.insert("g").attr("class",e).attr("id",r.domId||r.id),n=a.insert("rect",":first-child"),i=a.insert("line"),s=a.insert("g").attr("class","label"),l=r.labelText.flat?r.labelText.flat():r.labelText;let o="";o="object"==typeof l?l[0]:l,x.info("Label text abc79",o,l,"object"==typeof l);const d=s.node().appendChild(T(o,r.labelStyle,!0,!0));let c={width:0,height:0};if(H(w().flowchart.htmlLabels)){const t=d.children[0],r=L(d);c=t.getBoundingClientRect(),r.attr("width",c.width),r.attr("height",c.height)}x.info("Text 2",l);const h=l.slice(1,l.length);let p=d.getBBox();const g=s.node().appendChild(T(h.join?h.join("<br/>"):h,r.labelStyle,!0,!0));if(H(w().flowchart.htmlLabels)){const t=g.children[0],r=L(g);c=t.getBoundingClientRect(),r.attr("width",c.width),r.attr("height",c.height)}const y=r.padding/2;return L(g).attr("transform","translate( "+(c.width>p.width?0:(p.width-c.width)/2)+", "+(p.height+y+5)+")"),L(d).attr("transform","translate( "+(c.width<p.width?0:-(p.width-c.width)/2)+", 0)"),c=s.node().getBBox(),s.attr("transform","translate("+-c.width/2+", "+(-c.height/2-y+3)+")"),n.attr("class","outer title-state").attr("x",-c.width/2-y).attr("y",-c.height/2-y).attr("width",c.width+r.padding).attr("height",c.height+r.padding),i.attr("class","divider").attr("x1",-c.width/2-y).attr("x2",c.width/2+y).attr("y1",-c.height/2-y+p.height+y).attr("y2",-c.height/2-y+p.height+y),k(r,n),r.intersect=function(t){return m.rect(r,t)},a},Yt=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.height+r.padding,i=a.width+n/4+r.padding,s=e.insert("rect",":first-child").attr("style",r.style).attr("rx",n/2).attr("ry",n/2).attr("x",-i/2).attr("y",-n/2).attr("width",i).attr("height",n);return k(r,s),r.intersect=function(t){return m.rect(r,t)},e},Ut=async(t,r)=>{const{shapeSvg:e,bbox:a,halfPadding:n}=await S(t,r,void 0,!0),i=e.insert("circle",":first-child");return i.attr("style",r.style).attr("rx",r.rx).attr("ry",r.ry).attr("r",a.width/2+n).attr("width",a.width+r.padding).attr("height",a.height+r.padding),x.info("Circle main"),k(r,i),r.intersect=function(t){return x.info("Circle intersect",r,a.width/2+n,t),m.circle(r,a.width/2+n,t)},e},At=async(t,r)=>{const{shapeSvg:e,bbox:a,halfPadding:n}=await S(t,r,void 0,!0),i=e.insert("g",":first-child"),s=i.insert("circle"),l=i.insert("circle");return i.attr("class",r.class),s.attr("style",r.style).attr("rx",r.rx).attr("ry",r.ry).attr("r",a.width/2+n+5).attr("width",a.width+r.padding+10).attr("height",a.height+r.padding+10),l.attr("style",r.style).attr("rx",r.rx).attr("ry",r.ry).attr("r",a.width/2+n).attr("width",a.width+r.padding).attr("height",a.height+r.padding),x.info("DoubleCircle main"),k(r,s),r.intersect=function(t){return x.info("DoubleCircle intersect",r,a.width/2+n+5,t),m.circle(r,a.width/2+n+5,t)},e},Dt=async(t,r)=>{const{shapeSvg:e,bbox:a}=await S(t,r,void 0,!0),n=a.width+r.padding,i=a.height+r.padding,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-i},{x:0,y:-i},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-i},{x:-8,y:-i},{x:-8,y:0}],l=N(e,n,i,s);return l.attr("style",r.style),k(r,l),r.intersect=function(t){return m.polygon(r,s,t)},e},Ot=(t,r)=>{const e=t.insert("g").attr("class","node default").attr("id",r.domId||r.id),a=e.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),k(r,a),r.intersect=function(t){return m.circle(r,7,t)},e},q=(t,r,e)=>{const a=t.insert("g").attr("class","node default").attr("id",r.domId||r.id);let n=70,i=10;"LR"===e&&(n=10,i=70);const s=a.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return k(r,s),r.height=r.height+r.padding/2,r.width=r.width+r.padding/2,r.intersect=function(t){return m.rect(r,t)},a},jt=(t,r)=>{const e=t.insert("g").attr("class","node default").attr("id",r.domId||r.id),a=e.insert("circle",":first-child"),n=e.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),k(r,n),r.intersect=function(t){return m.circle(r,7,t)},e},zt=(t,r)=>{const e=r.padding/2;let a;a=r.classes?"node "+r.classes:"node default";const n=t.insert("g").attr("class",a).attr("id",r.domId||r.id),i=n.insert("rect",":first-child"),s=n.insert("line"),l=n.insert("line");let o=0,d=4;const c=n.insert("g").attr("class","label");let h=0;const p=r.classData.annotations&&r.classData.annotations[0],g=r.classData.annotations[0]?"«"+r.classData.annotations[0]+"»":"",y=c.node().appendChild(T(g,r.labelStyle,!0,!0));let f=y.getBBox();if(H(w().flowchart.htmlLabels)){const t=y.children[0],r=L(y);f=t.getBoundingClientRect(),r.attr("width",f.width),r.attr("height",f.height)}r.classData.annotations[0]&&(d+=f.height+4,o+=f.width);let x=r.classData.label;void 0!==r.classData.type&&""!==r.classData.type&&(w().flowchart.htmlLabels?x+="&lt;"+r.classData.type+"&gt;":x+="<"+r.classData.type+">");const b=c.node().appendChild(T(x,r.labelStyle,!0,!0));L(b).attr("class","classTitle");let u=b.getBBox();if(H(w().flowchart.htmlLabels)){const t=b.children[0],r=L(b);u=t.getBoundingClientRect(),r.attr("width",u.width),r.attr("height",u.height)}d+=u.height+4,u.width>o&&(o=u.width);const S=[];r.classData.members.forEach((t=>{const e=Q(t);let a=e.displayText;w().flowchart.htmlLabels&&(a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const n=c.node().appendChild(T(a,e.cssStyle?e.cssStyle:r.labelStyle,!0,!0));let i=n.getBBox();if(H(w().flowchart.htmlLabels)){const t=n.children[0],r=L(n);i=t.getBoundingClientRect(),r.attr("width",i.width),r.attr("height",i.height)}i.width>o&&(o=i.width),d+=i.height+4,S.push(n)})),d+=8;const v=[];if(r.classData.methods.forEach((t=>{const e=Q(t);let a=e.displayText;w().flowchart.htmlLabels&&(a=a.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const n=c.node().appendChild(T(a,e.cssStyle?e.cssStyle:r.labelStyle,!0,!0));let i=n.getBBox();if(H(w().flowchart.htmlLabels)){const t=n.children[0],r=L(n);i=t.getBoundingClientRect(),r.attr("width",i.width),r.attr("height",i.height)}i.width>o&&(o=i.width),d+=i.height+4,v.push(n)})),d+=8,p){let t=(o-f.width)/2;L(y).attr("transform","translate( "+(-1*o/2+t)+", "+-1*d/2+")"),h=f.height+4}let M=(o-u.width)/2;return L(b).attr("transform","translate( "+(-1*o/2+M)+", "+(-1*d/2+h)+")"),h+=u.height+4,s.attr("class","divider").attr("x1",-o/2-e).attr("x2",o/2+e).attr("y1",-d/2-e+8+h).attr("y2",-d/2-e+8+h),h+=8,S.forEach((t=>{L(t).attr("transform","translate( "+-o/2+", "+(-1*d/2+h+4)+")"),h+=u.height+4})),h+=8,l.attr("class","divider").attr("x1",-o/2-e).attr("x2",o/2+e).attr("y1",-d/2-e+8+h).attr("y2",-d/2-e+8+h),h+=8,v.forEach((t=>{L(t).attr("transform","translate( "+-o/2+", "+(-1*d/2+h)+")"),h+=u.height+4})),i.attr("class","outer title-state").attr("x",-o/2-e).attr("y",-d/2-e).attr("width",o+r.padding).attr("height",d+r.padding),k(r,i),r.intersect=function(t){return m.rect(r,t)},n},K={rhombus:J,question:J,rect:_t,labelRect:Wt,rectWithTitle:Xt,choice:Bt,circle:Ut,doublecircle:At,stadium:Yt,hexagon:Mt,rect_left_inv_arrow:Ct,lean_right:Tt,lean_left:Rt,trapezoid:It,inv_trapezoid:Ht,rect_right_inv_arrow:$t,cylinder:Nt,start:Ot,end:jt,note:Et,subroutine:Dt,fork:q,join:q,class_box:zt};let W={};const Gt=async(t,r,e)=>{let a,n;if(r.link){let i;"sandbox"===w().securityLevel?i="_top":r.linkTarget&&(i=r.linkTarget||"_blank"),a=t.insert("svg:a").attr("xlink:href",r.link).attr("target",i),n=await K[r.shape](a,r,e)}else n=await K[r.shape](t,r,e),a=n;return r.tooltip&&n.attr("title",r.tooltip),r.class&&n.attr("class","node default "+r.class),W[r.id]=a,r.haveCallback&&W[r.id].attr("class",W[r.id].attr("class")+" clickable"),a},Pt=(t,r)=>{W[r.id]=t},tr=()=>{W={}},rr=t=>{const r=W[t.id];x.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const e=t.diff||0;return t.clusterNode?r.attr("transform","translate("+(t.x+e-t.width/2)+", "+(t.y-t.height/2-8)+")"):r.attr("transform","translate("+t.x+", "+t.y+")"),e};let D={},v={};const ar=()=>{D={},v={}},er=(t,r)=>{const e=H(w().flowchart.htmlLabels),a="markdown"===r.labelType?P(t,r.label,{style:r.labelStyle,useHtmlLabels:e,addSvgBackground:!0}):T(r.label,r.labelStyle);x.info("abc82",r,r.labelType);const n=t.insert("g").attr("class","edgeLabel"),i=n.insert("g").attr("class","label");i.node().appendChild(a);let s,l=a.getBBox();if(e){const t=a.children[0],r=L(a);l=t.getBoundingClientRect(),r.attr("width",l.width),r.attr("height",l.height)}if(i.attr("transform","translate("+-l.width/2+", "+-l.height/2+")"),D[r.id]=n,r.width=l.width,r.height=l.height,r.startLabelLeft){const e=T(r.startLabelLeft,r.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");s=n.node().appendChild(e);const i=e.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),v[r.id]||(v[r.id]={}),v[r.id].startLeft=a,A(s,r.startLabelLeft)}if(r.startLabelRight){const e=T(r.startLabelRight,r.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");s=a.node().appendChild(e),n.node().appendChild(e);const i=e.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),v[r.id]||(v[r.id]={}),v[r.id].startRight=a,A(s,r.startLabelRight)}if(r.endLabelLeft){const e=T(r.endLabelLeft,r.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");s=n.node().appendChild(e);const i=e.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),a.node().appendChild(e),v[r.id]||(v[r.id]={}),v[r.id].endLeft=a,A(s,r.endLabelLeft)}if(r.endLabelRight){const e=T(r.endLabelRight,r.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");s=n.node().appendChild(e);const i=e.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),a.node().appendChild(e),v[r.id]||(v[r.id]={}),v[r.id].endRight=a,A(s,r.endLabelRight)}return a};function A(t,r){w().flowchart.htmlLabels&&t&&(t.style.width=9*r.length+"px",t.style.height="12px")}const sr=(t,r)=>{x.info("Moving label abc78 ",t.id,t.label,D[t.id]);let e=r.updatedPath?r.updatedPath:r.originalPath;if(t.label){const a=D[t.id];let n=t.x,i=t.y;if(e){const a=U.calcLabelPosition(e);x.info("Moving label "+t.label+" from (",n,",",i,") to (",a.x,",",a.y,") abc78"),r.updatedPath&&(n=a.x,i=a.y)}a.attr("transform","translate("+n+", "+i+")")}if(t.startLabelLeft){const r=v[t.id].startLeft;let a=t.x,n=t.y;if(e){const r=U.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",e);a=r.x,n=r.y}r.attr("transform","translate("+a+", "+n+")")}if(t.startLabelRight){const r=v[t.id].startRight;let a=t.x,n=t.y;if(e){const r=U.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",e);a=r.x,n=r.y}r.attr("transform","translate("+a+", "+n+")")}if(t.endLabelLeft){const r=v[t.id].endLeft;let a=t.x,n=t.y;if(e){const r=U.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",e);a=r.x,n=r.y}r.attr("transform","translate("+a+", "+n+")")}if(t.endLabelRight){const r=v[t.id].endRight;let a=t.x,n=t.y;if(e){const r=U.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",e);a=r.x,n=r.y}r.attr("transform","translate("+a+", "+n+")")}},Zt=(t,r)=>{const e=t.x,a=t.y,n=Math.abs(r.x-e),i=Math.abs(r.y-a),s=t.width/2,l=t.height/2;return n>=s||i>=l},Ft=(t,r,e)=>{x.warn(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(r)}\n  insidePoint : ${JSON.stringify(e)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);const a=t.x,n=t.y,i=Math.abs(a-e.x),s=t.width/2;let l=e.x<r.x?s-i:s+i;const o=t.height/2,d=Math.abs(r.y-e.y),c=Math.abs(r.x-e.x);if(Math.abs(n-r.y)*s>Math.abs(a-r.x)*o){let t=e.y<r.y?r.y-o-n:n-o-r.y;l=c*t/d;const a={x:e.x<r.x?e.x+l:e.x-c+l,y:e.y<r.y?e.y+d-t:e.y-d+t};return 0===l&&(a.x=r.x,a.y=r.y),0===c&&(a.x=r.x),0===d&&(a.y=r.y),x.warn(`abc89 topp/bott calc, Q ${d}, q ${t}, R ${c}, r ${l}`,a),a}{l=e.x<r.x?r.x-s-a:a-s-r.x;let t=d*l/c,n=e.x<r.x?e.x+c-l:e.x-c+l,i=e.y<r.y?e.y+t:e.y-t;return x.warn(`sides calc abc89, Q ${d}, q ${t}, R ${c}, r ${l}`,{_x:n,_y:i}),0===l&&(n=r.x,i=r.y),0===c&&(n=r.x),0===d&&(i=r.y),{x:n,y:i}}},G=(t,r)=>{x.warn("abc88 cutPathAtIntersect",t,r);let e=[],a=t[0],n=!1;return t.forEach((t=>{if(x.info("abc88 checking point",t,r),Zt(r,t)||n)x.warn("abc88 outside",t,a),a=t,n||e.push(t);else{const i=Ft(r,a,t);x.warn("abc88 inside",t,a,i),x.warn("abc88 intersection",i);let s=!1;e.forEach((t=>{s=s||t.x===i.x&&t.y===i.y})),e.some((t=>t.x===i.x&&t.y===i.y))?x.warn("abc88 no intersect",i,e):e.push(i),n=!0}})),x.warn("abc88 returning points",e),e},ir=function(t,r,e,a,n,i){let s=e.points,l=!1;const o=i.node(r.v);var d=i.node(r.w);x.info("abc88 InsertEdge: ",e),d.intersect&&o.intersect&&(s=s.slice(1,e.points.length-1),s.unshift(o.intersect(s[0])),x.info("Last point",s[s.length-1],d,d.intersect(s[s.length-1])),s.push(d.intersect(s[s.length-1]))),e.toCluster&&(x.info("to cluster abc88",a[e.toCluster]),s=G(e.points,a[e.toCluster].node),l=!0),e.fromCluster&&(x.info("from cluster abc88",a[e.fromCluster]),s=G(s.reverse(),a[e.fromCluster].node).reverse(),l=!0);const c=s.filter((t=>!Number.isNaN(t.y)));let h;h=("graph"===n||"flowchart"===n)&&e.curve||F;const p=et().x((function(t){return t.x})).y((function(t){return t.y})).curve(h);let g;switch(e.thickness){case"normal":g="edge-thickness-normal";break;case"thick":case"invisible":g="edge-thickness-thick";break;default:g=""}switch(e.pattern){case"solid":g+=" edge-pattern-solid";break;case"dotted":g+=" edge-pattern-dotted";break;case"dashed":g+=" edge-pattern-dashed"}const y=t.append("path").attr("d",p(c)).attr("id",e.id).attr("class"," "+g+(e.classes?" "+e.classes:"")).attr("style",e.style);let f="";switch((w().flowchart.arrowMarkerAbsolute||w().state.arrowMarkerAbsolute)&&(f=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,f=f.replace(/\(/g,"\\("),f=f.replace(/\)/g,"\\)")),x.info("arrowTypeStart",e.arrowTypeStart),x.info("arrowTypeEnd",e.arrowTypeEnd),e.arrowTypeStart){case"arrow_cross":y.attr("marker-start","url("+f+"#"+n+"-crossStart)");break;case"arrow_point":y.attr("marker-start","url("+f+"#"+n+"-pointStart)");break;case"arrow_barb":y.attr("marker-start","url("+f+"#"+n+"-barbStart)");break;case"arrow_circle":y.attr("marker-start","url("+f+"#"+n+"-circleStart)");break;case"aggregation":y.attr("marker-start","url("+f+"#"+n+"-aggregationStart)");break;case"extension":y.attr("marker-start","url("+f+"#"+n+"-extensionStart)");break;case"composition":y.attr("marker-start","url("+f+"#"+n+"-compositionStart)");break;case"dependency":y.attr("marker-start","url("+f+"#"+n+"-dependencyStart)");break;case"lollipop":y.attr("marker-start","url("+f+"#"+n+"-lollipopStart)")}switch(e.arrowTypeEnd){case"arrow_cross":y.attr("marker-end","url("+f+"#"+n+"-crossEnd)");break;case"arrow_point":y.attr("marker-end","url("+f+"#"+n+"-pointEnd)");break;case"arrow_barb":y.attr("marker-end","url("+f+"#"+n+"-barbEnd)");break;case"arrow_circle":y.attr("marker-end","url("+f+"#"+n+"-circleEnd)");break;case"aggregation":y.attr("marker-end","url("+f+"#"+n+"-aggregationEnd)");break;case"extension":y.attr("marker-end","url("+f+"#"+n+"-extensionEnd)");break;case"composition":y.attr("marker-end","url("+f+"#"+n+"-compositionEnd)");break;case"dependency":y.attr("marker-end","url("+f+"#"+n+"-dependencyEnd)");break;case"lollipop":y.attr("marker-end","url("+f+"#"+n+"-lollipopEnd)")}let b={};return l&&(b.updatedPath=s),b.originalPath=e.points,b};export{Gt as a,er as b,ir as c,sr as d,tr as e,ar as f,T as g,Lt as h,Kt as i,S as l,rr as p,Pt as s,k as u};