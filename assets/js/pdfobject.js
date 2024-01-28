/**
 *  PDFObject v2.2.12
 *  https://github.com/pipwerks/PDFObject
 *  @license
 *  Copyright (c) 2008-2023 Philip Hutchison
 *  MIT-style license: http://pipwerks.mit-license.org/
 *  UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.PDFObject=t()}(this,function(){"use strict";if("undefined"==typeof window||window.navigator===undefined||window.navigator.userAgent===undefined||window.navigator.mimeTypes===undefined)return!1;let e="2.2.12",t=window.navigator,n=window.navigator.userAgent,o="ActiveXObject"in window,i=window.Promise!==undefined,r=t.mimeTypes["application/pdf"]!==undefined,d=t.platform!==undefined&&"MacIntel"===t.platform&&t.maxTouchPoints!==undefined&&t.maxTouchPoints>1||/Mobi|Tablet|Android|iPad|iPhone/.test(n),f=!d&&t.vendor!==undefined&&/Apple/.test(t.vendor)&&/Safari/.test(n),s=!!(!d&&/irefox/.test(n)&&n.split("rv:").length>1)&&parseInt(n.split("rv:")[1].split(".")[0],10)>18,l=function(e){var t;try{t=new ActiveXObject(e)}catch(n){t=null}return t},a=!d&&(i||s||r||o&&function(){return!(!l("AcroPDF.PDF")&&!l("PDF.PdfCtrl"))}()),p=function(e){let t,n="";if(e){for(t in e)e.hasOwnProperty(t)&&(n+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");n&&(n=(n="#"+n).slice(0,n.length-1))}return n},u=function(e,t){return t||console.log("[PDFObject] "+e),!1},c=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},m=function(e){let t=document.body;return"string"==typeof e?t=document.querySelector(e):window.jQuery!==undefined&&e instanceof jQuery&&e.length?t=e.get(0):e.nodeType!==undefined&&1===e.nodeType&&(t=e),t},b=function(e,t,n,o,i,r,d,f,s,l,a){c(t);let p=n;if("pdfjs"===e){p=a+(-1!==a.indexOf("?")?"&":"?")+"file="+encodeURIComponent(n)+o}else p+=o;let u="pdfjs"===e||"iframe"===e?"iframe":"embed",m=document.createElement(u);if(m.className="pdfobject",m.type="application/pdf",m.title=f,m.src=p,d&&(m.id=d),"iframe"===u&&(m.allow="fullscreen",m.frameborder="0"),!s){let e="embed"===u?"overflow: auto;":"border: none;";t!==document.body?e+="width: "+i+"; height: "+r+";":e+="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;",m.style.cssText=e}let b=["className","type","title","src","style","id","allow","frameborder"];return l&&l.key&&-1===b.indexOf(l.key)&&m.setAttribute(l.key,"undefined"!=typeof l.value?l.value:""),t.classList.add("pdfobject-container"),t.appendChild(m),t.getElementsByTagName(u)[0]},y=function(e,t,n){let o=t||!1,i=n||{},r="string"==typeof i.id?i.id:"",s=i.page||!1,l=i.pdfOpenParams||{},c="string"!=typeof i.fallbackLink&&"boolean"!=typeof i.fallbackLink||i.fallbackLink,y=i.width||"100%",w=i.height||"100%",g=i.title||"Embedded PDF",h="boolean"!=typeof i.assumptionMode||i.assumptionMode,P="boolean"==typeof i.forcePDFJS&&i.forcePDFJS,v="boolean"==typeof i.supportRedirect&&i.supportRedirect,D="boolean"==typeof i.omitInlineStyles&&i.omitInlineStyles,j="boolean"==typeof i.suppressConsole&&i.suppressConsole,F="boolean"==typeof i.forceIframe&&i.forceIframe,T=i.PDFJS_URL||!1,C=m(o),k="",A="",I=i.customAttribute||{},x="<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>";if("string"!=typeof e)return u("URL is not valid",j);if(!C)return u("Target element cannot be determined",j);if(s&&(l.page=s),A=p(l),P&&T)return b("pdfjs",C,e,A,y,w,r,g,D,I,T);if(a||h&&!d){return b(F||v||f?"iframe":"embed",C,e,A,y,w,r,g,D,I)}return T?b("pdfjs",C,e,A,y,w,r,g,D,I,T):(c&&(k="string"==typeof c?c:x,C.innerHTML=k.replace(/\[url\]/g,e)),u("This browser does not support embedded PDFs",j))};return{embed:function(e,t,n){return y(e,t,n)},pdfobjectversion:e,supportsPDFs:a}});