!function(e){var t={};function n(d){if(t[d])return t[d].exports;var i=t[d]={i:d,l:!1,exports:{}};return e[d].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(d,i,function(t){return e[t]}.bind(null,i));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/js/",n(n.s=267)}({267:function(e,n){function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){"use strict";function e(){var e=document.getElementById("srgdev-ncfp_fbtn");this.checked?e.hasAttribute("shade")&&e.removeAttribute("shade"):e.hasAttribute("shade")||e.setAttribute("shade","1"),this.hasAttribute("err")&&this.removeAttribute("err"),this.hasAttribute("required")&&this.removeAttribute("required")}function n(){this.setCustomValidity(""),this.getAttribute("err")?(this.removeAttribute("err"),this.removeEventListener("focus",n,!1)):this.removeEventListener("input",n,!1)}function i(e){var d=0,i=document.getElementById("srgdev-ncfp_fbtn");if(!0===i.disabled)return e.preventDefault(),e.stopPropagation(),!1;var r,a=(i=document.getElementById("srgdev-ncfp_sel-hidden")).selectedIndex;if(-1===a||""===i.value?((i=document.getElementById("srgdev-ncfp_sel-dummy")).setAttribute("err","err"),i.addEventListener("focus",n,!1),d=1):r=i.dataRef[a].tzi,null!==(i=document.getElementById("srgdev-ncfp_talk_type"))&&1!==(a=i.selectedIndex)&&2!==a&&(i.setAttribute("err","err"),i.addEventListener("focus",n,!1),d=1),(i=document.getElementById("srgdev-ncfp_fname")).value.length<3&&(i.setCustomValidity(t("appointments","Name is required.")),i.addEventListener("input",n,!1),d=1),((i=document.getElementById("srgdev-ncfp_femail")).value.length<5||-1===i.value.indexOf("@")||i.value.indexOf("@")>i.value.lastIndexOf("."))&&(i.setCustomValidity(t("appointments","Email is required.")),i.addEventListener("input",n,!1),d=1),null!==(i=document.getElementById("srgdev-ncfp_fphone"))&&(""===i.value||i.value.length<9||!1===/^[0-9 .()\-+,/]*$/.test(i.value))&&(i.setCustomValidity(t("appointments","Phone number is required.")),i.addEventListener("input",n,!1),d=1),null!==(i=document.getElementById("appt_gdpr_id"))&&!1===i.checked&&(i.setAttribute("err","err"),i.setAttribute("required","1"),d=1),0!==d)return e.preventDefault(),e.stopPropagation(),!1;document.getElementById("srgdev-ncfp_fbtn-spinner").style.display="inline-block",(i=document.createElement("input")).type="hidden",i.name="tzi",i.value=r,this.appendChild(i)}function r(e){var t=document.getElementById("srgdev-dpu_main-cont");return null===t.getAttribute("data-open")?t.setAttribute("data-open",""):t.removeAttribute("data-open"),e.preventDefault(),!1}function a(e){var t=this.id.slice(13),n=this.parentElement.curActive;n!==t&&(document.getElementById("srgdev-dpu_dc"+n).removeAttribute("data-active"),document.getElementById("srgdev-dpu_dc"+t).setAttribute("data-active",""),this.parentElement.curActive=t,"e"===t.slice(-1)&&(t="e"),"e"===n.slice(-1)&&(n="e"),document.getElementById("srgdev-dpu_tc"+n).removeAttribute("data-active"),document.getElementById("srgdev-dpu_tc"+t).setAttribute("data-active",""),e.stopPropagation())}function s(e){var t=e.target;if(void 0!==t.parentElement.dpuClickID&&(t=t.parentElement),void 0!==t.dpuClickID){document.getElementById("srgdev-ncfp_sel-dummy").value=t.parentElement.getAttribute("data-dm")+" - "+t.timeAt;var n=document.getElementById("srgdev-ncfp_sel-hidden");n.selectedIndex=t.dpuClickID,n.value=n.dataRef[t.dpuClickID].d,document.getElementById("srgdev-dpu_main-cont").removeAttribute("data-open")}}function u(e){var t;void 0!==e.target?(t=e.target.parentElement,"srgdev-dpu_bf-back"===e.target.id?t.curDP>0&&t.curDP--:(t.curDP<t.maxDP&&t.curDP++,t.curDP===t.maxDP?e.target.setAttribute("disabled",""):e.target.removeAttribute("disabled"))):t=e,0===t.curDP?t.firstElementChild.setAttribute("disabled",""):t.firstElementChild.removeAttribute("disabled"),t.curDP===t.maxDP?t.lastElementChild.setAttribute("disabled",""):t.lastElementChild.removeAttribute("disabled"),document.getElementById("srgdev-dpu_main-date").style.left="-"+5*t.curDP*4.6+"em"}function o(e){if(void 0!==e.changedTouches&&e.changedTouches.length>0){var t=e.changedTouches[0],n=this.touchInfo;n.x=t.clientX,n.y=t.clientY,n.id=t.identifier}}function l(e){if(void 0!==e.changedTouches&&e.changedTouches.length>0){var t=e.changedTouches[0],n=this.touchInfo;if(t.identifier===n.id){var d=t.clientX-n.x|0,i=t.clientY-n.y|0,r=d>>31,a=d+r^r;a>(i+(r=i>>31)^r)&&a>50&&(d<0?this.bfNav.lastElementChild.click():this.bfNav.firstElementChild.click())}n.id=-1}}window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("appt_gdpr_id");null!==t&&(t.addEventListener("change",e),e.apply(t));var n=document.getElementById("srgdev-ncfp_frm");n.addEventListener("submit",i),setTimeout((function(){n.autocomplete="on"}),1e3),function(e){for(var t,n="nbrWeeks",i="showEmpty",r="startFNED",c="showWeekends",m="showTZ",p="time2Cols",v="endTime",f={},g=e.split("."),h=g.length,b=0;b<h;b++)f[(t=g[b].split(":"))[0]]=+t[1];var y=7*f[n],E=document.getElementById("srgdev-ncfp_sel-hidden");if("2"!==E.getAttribute("data-state"))return void console.log("data-state: ",E.getAttribute("data-state"));var C,A,T=E.getAttribute("data-hdr"),_=E.getAttribute("data-tr-back"),I=E.getAttribute("data-tr-next"),D=E.getAttribute("data-tr-not-available");C=void 0!==window.monthNames?window.monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"];A=void 0!==window.dayNames?window.dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var x,w,N,k,B,P,S=window.Intl&&"object"===d(window.Intl);if(S){x=new Intl.DateTimeFormat([],{hour:"numeric",minute:"2-digit"}).format}else x=function(e){return e.toLocaleTimeString()};if(S){w=new Intl.DateTimeFormat([],{hour:"numeric",minute:"2-digit",timeZoneName:"short"}).format}else w=function(e){return e.toLocaleTimeString()};if(S){var L=new Intl.DateTimeFormat([],{month:"long"});N=L.format}else N=function(e){return C[e.getMonth()]};if(S){var O=new Intl.DateTimeFormat([],{weekday:"short"});k=O.format}else k=function(e){return A[e.getDay()]};if(S){B=new Intl.DateTimeFormat([],{weekday:"short",month:"long",day:"2-digit"}).format}else B=function(e){return e.toDateString()};if(S){P=new Intl.DateTimeFormat([],{weekday:"long",month:"long",day:"numeric",year:"numeric"}).format}else P=function(e){return e.toLocaleDateString()};var M=[],F=void 0;if(S){try{F=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){console.log("no Intl timeZone ",e)}"string"!=typeof F&&(F=void 0)}for(var j,q,z,H,R,V,Z,J,W,X,Y=new Date,$=f[v],G=f[m],K=E.getAttribute("data-info").split(","),Q=K.length,U=0;U<Q;U++){if(V=(X=K[U]).indexOf(":",8),Y.setTime(1e3*+X.substr(1,V-1)),j=Y.getTimezoneOffset(),J=0,"F"===(z=X.charAt(0))?(J=6e4*j,Y.setTime(Y.getTime()+J),H=R=x(Y)):0===G?H=R=x(Y):(H=R=w(Y),1===$&&(H=x(Y))),W=Y.getTime(),1===$&&(Z=V+1,V=X.indexOf(":",Z),Z=1e3*+X.substr(Z,V-Z),Y.setTime(W+(Z+J-W)),H+="F"===z||0===G?" - "+x(Y):" - "+w(Y)),void 0!==F)q=z+F;else{var ee=Math.abs(j),te=Math.floor(ee/60),ne=ee-60*te;q=z+(j>0?"-":"+")+(te<10?"0"+te:te)+(ne<10?"0"+ne:ne)}V++,Z=X.indexOf(":",V),M[U]={rts:W,d:X.substr(V,Z-V),t:X.substr(Z+2),tzi:q,time:H,timeAt:R}}M.sort((function(e,t){return e.rts>t.rts?1:-1})),M.push({rts:0,d:"",t:"",tzi:"",time:""}),E.dataRef=M;var de=M.length,ie=document.createElement("div");ie.id="srgdev-dpu_main-cont",ie.className="srgdev-dpu-bkr-cls";var re=document.createElement("div");re.id="srgdev-dpu_main-header",re.appendChild(document.createTextNode(T));var ae=document.createElement("div");ae.id="srgdev-dpu_main-hdr-icon",ae.className="icon-close",ae.addEventListener("click",(function(){document.getElementById("srgdev-dpu_main-cont").removeAttribute("data-open")})),re.appendChild(ae),ie.appendChild(re),(ae=document.createElement("div")).maxDP=0,ae.curDP=0,ae.id="srgdev-dpu_bf-cont",ae.appendChild(document.createElement("span")),ae.appendChild(document.createElement("span")),ae.firstElementChild.id="srgdev-dpu_bf-back",ae.firstElementChild.appendChild(document.createTextNode(_)),ae.firstElementChild.addEventListener("click",u),ae.firstElementChild.setAttribute("disabled",""),ae.lastElementChild.id="srgdev-dpu_bf-next",ae.lastElementChild.appendChild(document.createTextNode(I)),ae.lastElementChild.addEventListener("click",u),ie.appendChild(ae),(re=document.createElement("div")).id="srgdev-dpu_main-date",re.className="srgdev-dpu-bkr-cls",re.style.left="0em",function(e,t){e.touchInfo={x:0,y:0,id:-1},e.bfNav=t,e.addEventListener("touchstart",o),e.addEventListener("touchend",l)}(re,ae),ie.appendChild(re);var se=document.createElement("div");se.id="srgdev-dpu_main-time",ie.appendChild(se);var ue,oe=0,le=5,ce=new Date,me=-1,pe=-1,ve=!1,fe=function(e,t){var n=document.createElement("div");n.id="srgdev-dpu_dc"+oe+(t?"e":""),n.className="srgdev-dpu-date-cont"+(t?" srgdev-dpu-dc-empty":"");var d=document.createElement("span");return d.className=0!==e.getDay()?"srgdev-dpu-date-wd":"srgdev-dpu-date-wd srgdev-dpu-date-wd-sunday",d.appendChild(document.createTextNode(k(e))),n.appendChild(d),(d=document.createElement("span")).className="srgdev-dpu-date-dn",d.appendChild(document.createTextNode(e.getDate())),n.appendChild(d),(d=document.createElement("span")).className="srgdev-dpu-date-md",d.appendChild(document.createTextNode(N(e))),n.appendChild(d),n.addEventListener("click",a),oe===le&&(le+=5,ae.maxDP++,oe>y&&(ve=!0)),++oe,n},ge=new Date;if(ge.setSeconds(1),ge.setMinutes(0),ge.setHours(0),1===f[i]&&0===f[r]){var he=M[0].rts;ce.setTime(he),ce.setSeconds(1),ce.setMinutes(0),ce.setHours(0);var be=ce.getDay();be>0&&be<6&&ge.setTime(ce.getTime()-864e5*(be-1))}ue=0===f[p]||1===f[v]?"srgdev-dpu-time-unit"+(1===f[v]?"_tn":""):"srgdev-dpu-time-unit2";for(var ye,Ee,Ce,Ae,Te,_e,Ie,De,xe=0;xe<de&&0!==(Ee=(De=M[xe]).rts);xe++){ce.setTime(Ee);var we=ce.getDate();if(me!==we){if(Te=ge.getTime(),ge.setTime(ce.getTime()),ge.setSeconds(1),ge.setMinutes(0),ge.setHours(0),Ae=ge.getTime(),1===f[i])for(;Te<Ae&&(ge.setTime(Te),0===(Ce=0===f[c]?ge.getDay():1)||6===Ce||(re.appendChild(fe(ge,!0)),!ve));)Te+=864e5;if(ve){ce=ge;break}ge.setTime(Te+864e5),_e=fe(ce,!1),-1===pe&&(pe=oe-1,_e.setAttribute("data-active","")),re.appendChild(_e),(_e=document.createElement("div")).id="srgdev-dpu_tc"+(oe-1),_e.className="srgdev-dpu-time-cont",(Ie=document.createElement("div")).className="srgdev-dpu-tc-full-date",Ie.appendChild(document.createTextNode(P(ce))),_e.appendChild(Ie),(Ie=document.createElement("div")).setAttribute("data-dm",B(ce)),Ie.className="srgdev-dpu-tc-tu-wrap",_e.appendChild(Ie),se.appendChild(_e),me=we}(_e=document.createElement("span")).className=ue,_e.dpuClickID=xe,_e.timeAt=De.timeAt,_e.appendChild(document.createTextNode(De.time)),""!==De.t&&((ye=document.createElement("span")).className="srgdev-dpu-appt-title",ye.appendChild(document.createTextNode(De.t)),_e.appendChild(ye)),Ie.appendChild(_e)}if(ce.setSeconds(0),ce.setMinutes(0),ce.setHours(1),ce.setTime(ce.getTime()+864e5),oe%5>0)for(var Ne,ke=5-oe%5,Be=0;Be<ke;Be++)Ne=ce.getDay(),0!==(Ne=0===f[c]?ce.getDay():1)&&6!==Ne?re.appendChild(fe(ce,!0)):Be--,ce.setTime(ce.getTime()+864e5);var Pe=document.createElement("div");Pe.id="srgdev-dpu_tce",Pe.className="srgdev-dpu-time-cont",Pe.appendChild(document.createTextNode(D)),se.appendChild(Pe),se.firstElementChild.setAttribute("data-active",""),re.curActive=pe.toString(),ie.addEventListener("click",s),document.getElementById("srgdev-ncfp_sel_cont").appendChild(ie);var Se=Math.floor(pe/5);Se>0&&(ae.curDP=Se,u(ae))}(n.getAttribute("data-pps")),document.getElementById("srgdev-ncfp_sel-dummy").addEventListener("click",r),setTimeout((function(){var e,t=document.getElementById("srgdev-ncfp_fbtn");e=t.hasAttribute("data-tr-ses-to")?t.getAttribute("data-tr-ses-to"):"Session Timeout. Reload.",t.disabled=!0,t.textContent=e}),9e5)}))}()}});