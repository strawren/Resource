/*pub-1|2013-05-22 11:35:28*/(function(){var ab=window,G=document,k=location,aE=true,j=false;var ai=k.href;var aG="//log.mmstat.com/";var i=j;var z=parent!==self;var aA,az,N;var A={};var ar;var q;var s="0.0";var ad=false;var S="::-plain-::";var ae;var Y=!!G.attachEvent;var Z="attachEvent";var n="addEventListener";var al=Y?Z:n;var m;var o;var r=j;var R={};var ay=j;var U;var af="data-spm";var aq="data-spm-protocol";var ac="data-spm-src";var aF="";var at;var X="data-spm-wangpu-module-id";var C="data-spm-anchor-id";function am(aI){var aH,aL;try{aH=[].slice.call(aI);return aH}catch(aK){aH=[];aL=aI.length;for(var aJ=0;aJ<aL;aJ++){aH.push(aI[aJ])}return aH}}function F(aH,aI){return aH&&aH.getAttribute?(aH.getAttribute(aI)||""):""}function y(aH,aK,aI){if(aH&&aH.setAttribute){try{aH.setAttribute(aK,aI)}catch(aJ){}}}function Q(aH,aJ){if(aH&&aH.removeAttribute){try{aH.removeAttribute(aJ)}catch(aI){y(aH,aJ,"")}}}function W(aI,aH){return aI.indexOf(aH)==0}function aB(aH){return typeof aH=="string"}function e(aH){return Object.prototype.toString.call(aH)==="[object Array]"}function aC(aI,aH){return aI.indexOf(aH)>=0}function au(aI,aH){return aI.indexOf(aH)>-1}function B(aK,aH){for(var aJ=0,aI=aH.length;aJ<aI;aJ++){if(au(aK,aH[aJ])){return aE}}return j}function av(aH){return aB(aH)?aH.replace(/^\s+|\s+$/g,""):""}function x(aH){return typeof aH=="undefined"}function f(){m=m||G.getElementsByTagName("head")[0];return o||(m?(o=m.getElementsByTagName("meta")):[])}function ap(){var aL=f(),aJ,aI,aK,aH;for(aJ=0,aI=aL.length;aJ<aI;aJ++){aK=aL[aJ];aH=F(aK,"name");if(aH==af){U=F(aK,aq)}}}function H(aM){var aO=f(),aL,aJ,aI,aN,aH,aK;if(aO){for(aL=0,aJ=aO.length;aL<aJ;aL++){aN=aO[aL];aH=F(aN,"name");if(aH==aM){ar=F(aN,"content");if(ar.indexOf(":")>=0){aI=ar.split(":");U=aI[0]=="i"?"i":"u";ar=aI[1]}aK=F(aN,aq);if(aK){U=(aK=="i"?"i":"u")}q=W(ar,"110");N=(q?s:ar);return aE}}}return j}function ah(){return Math.floor(Math.random()*268435456).toString(16)}function u(aK){var aH=[],aJ,aI;for(aJ in aK){if(aK.hasOwnProperty(aJ)){aI=""+aK[aJ];aH.push(W(aJ,S)?aI:(aJ+"="+encodeURIComponent(aI)))}}return aH.join("&")}function ag(aI){var aJ=[],aL,aK,aM,aH=aI.length;for(aM=0;aM<aH;aM++){aL=aI[aM][0];aK=aI[aM][1];aJ.push(W(aL,S)?aK:(aL+"="+encodeURIComponent(aK)))}return aJ.join("&")}function V(aI){var aH;try{aH=av(aI.getAttribute("href",2))}catch(aJ){}return aH||""}function M(aI,aJ,aH){aI[al]((Y?"on":"")+aJ,function(aL){aL=aL||ab.event;var aK=aL.target||aL.srcElement;aH(aK)},j)}function p(aH){var aI=ab.KISSY;if(aI){aI.ready(aH)}else{if(ab.jQuery){jQuery(G).ready(aH)}else{if(G.readyState==="complete"){aH()}else{M(ab,"load",aH)}}}}function J(aJ,aL){var aI=new Image(),aN="_img_"+Math.random(),aK=aJ.indexOf("?")==-1?"?":"&",aM,aH=aL?(e(aL)?ag(aL):u(aL)):"";ab[aN]=aI;aI.onload=aI.onerror=function(){ab[aN]=null};aI.src=aM=aH?(aJ+aK+aH):aJ;aI=null;return aM}function aw(){var aJ;if(z&&!aF){aJ=ai.match(/^[^?]+\?[^?]*spm=([^&?]+)/);if(aJ){aF=aJ[1]+"_"}}if(!x(N)){return N}if(ab._SPM_a&&ab._SPM_b){aA=ab._SPM_a.replace(/^{(\w+)}$/g,"$1");az=ab._SPM_b.replace(/^{(\w+)}$/g,"$1");r=aE;N=aA+"."+az;ap();return N}H(af)||H("spm-id");if(!N){ad=true;N=s;return s}var aH=G.getElementsByTagName("body");var aK;var aI;aH=aH&&aH.length?aH[0]:null;if(aH){aK=F(aH,af);if(aK){aI=N.split(".");N=aI[0]+"."+aK}}if(!au(N,".")){ad=true;N=s}return N}function ao(aL){var aN=G.getElementsByTagName("*"),aI,aK,aJ,aO,aM,aH;for(aI=[];aL&&aL.nodeType==1;aL=aL.parentNode){if(aH=aL.id){aO=0;for(aK=0;aK<aN.length;aK++){aM=aN[aK];if(aM.id==aH){aO++;break}}if(aO==1){aI.unshift('id("'+aH+'")');return aI.join("/")}else{aI.unshift(aL.tagName.toLowerCase()+'[@id="'+aH+'"]')}}else{for(aK=1,aJ=aL.previousSibling;aJ;aJ=aJ.previousSibling){if(aJ.tagName==aL.tagName){aK++}}aI.unshift(aL.tagName.toLowerCase()+"["+aK+"]")}}return aI.length?"/"+aI.join("/"):null}function b(aH){var aI=R[ao(aH)];return aI?aI.spmc:""}function an(aI){var aP,aN,aL,aH,aO,aM=[],aQ,aK,aJ;aP=am(aI.getElementsByTagName("a"));aN=am(aI.getElementsByTagName("area"));aH=aP.concat(aN);for(aK=0,aJ=aH.length;aK<aJ;aK++){aQ=false;aO=aL=aH[aK];while(aO=aO.parentNode){if(aO==aI){break}if(F(aO,af)){aQ=true;break}}if(!aQ){aM.push(aL)}}return aM}function E(aM,aK,aS){var aJ,aR,aH,aN,aO,aI,aX,aW,aL,aQ,aP,aV,aU,aT;if(F(aM,"data-spm-delay")){aM.setAttribute("data-spm-delay","");return}aK=aK||aM.getAttribute(af)||"";if(!aK){return}aJ=an(aM);aH=aK.split(".");aV=(W(aK,"110")&&aH.length==3);if(aV){aU=aH[2];aH[2]="w"+(aU||"0");aK=aH.join(".")}if(aB(aW=aw())&&aW.match(/^[\w\-\*]+(\.[\w\-\*]+)?$/)){if(!aC(aK,".")){if(!aC(aW,".")){aW+=".0"}aK=aW+"."+aK}else{if(!W(aK,aW)){aN=aW.split(".");aH=aK.split(".");for(aQ=0,aL=aN.length;aQ<aL;aQ++){aH[aQ]=aN[aQ]}aK=aH.join(".")}}}if(!aK.match||!aK.match(/^[\w\-\*]+\.[\w\-\*]+\.[\w\-\*]+$/)){return}aT=parseInt(F(aM,"data-spm-max-idx"))||0;for(aP=0,aO=aT,aL=aJ.length;aP<aL;aP++){aR=aJ[aP];aI=V(aR);if(!aI){continue}if(aV){aR.setAttribute(X,aU)}if(aX=aR.getAttribute(C)){t(aR,aX,aS);continue}aO++;aX=aK+"."+(aD(aR)||aO);t(aR,aX,aS)}aM.setAttribute("data-spm-max-idx",aO)}function a(aJ){var aI=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],aK,aH=aI.length;for(aK=0;aK<aH;aK++){if(aJ.indexOf(aI[aK])!=-1){return true}}return false}function ak(aH){return aH?(!!aH.match(/^[^\?]*\balipay\.(?:com|net)\b/i)):j}function h(aH){return aH?(!!aH.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i)):j}function K(aI){var aH;while((aI=aI.parentNode)&&aI.tagName!="BODY"){aH=F(aI,aq);if(aH){return aH}}return""}function P(aJ,aP){if(aJ&&/&?\bspm=[^&#]*/.test(aJ)){aJ=aJ.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")}if(!aP){return aJ}var aQ,aM,aO,aN="&",aK,aI,aH,aL;if(aJ.indexOf("#")!=-1){aO=aJ.split("#");aJ=aO.shift();aM=aO.join("#")}aK=aJ.split("?");aI=aK.length-1;aO=aK[0].split("//");aO=aO[aO.length-1].split("/");aH=aO.length>1?aO.pop():"";if(aI>0){aQ=aK.pop();aJ=aK.join("?")}if(aQ&&aI>1&&aQ.indexOf("&")==-1&&aQ.indexOf("%")!=-1){aN="%26"}aJ=aJ+"?spm="+aF+aP+(aQ?(aN+aQ):"")+(aM?("#"+aM):"");aL=au(aH,".")?aH.split(".").pop().toLowerCase():"";if(aL){if(({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}).hasOwnProperty(aL)){return 0}if(!aQ&&aI<=1){if(!aM&&!({htm:1,html:1,php:1}).hasOwnProperty(aL)){aJ+="&file="+aH}}}return aJ}function l(aH){return aH&&(ai.split("#")[0]==aH.split("#")[0])}function t(aJ,aL,aK){aJ.setAttribute(C,aL);if(aK){return}ae=ab.g_aplus_pv_id;if(ae){aL+="."+ae}if(!ae&&(!N||N==s)){return}var aI=V(aJ);var aM=(F(aJ,aq)||K(aJ)||U)=="i";var aH=aG+"tbspm.1.1?spm=";if(!aI||a(aI)){return}if(!aM&&(W(aI,"#")||l(aI)||W(aI.toLowerCase(),"javascript:")||ak(aI)||h(aI))){return}if(aM){aH+=aL+"&url="+encodeURIComponent(aI)+"&cache="+ah();if(at==aJ){J(aH)}}else{if(!aK){(aI=P(aI,aL))&&D(aJ,aI)}}}function D(aK,aJ){var aH,aI=aK.innerHTML;if(aI&&aI.indexOf("<")==-1){aH=G.createElement("b");aH.style.display="none";aK.appendChild(aH)}aK.href=aJ;if(aH){aK.removeChild(aH)}}function aD(aI){var aK,aH,aJ;if(ad){aK="0"}else{if(r){aH=ao(aI);aJ=R[aH];if(aJ){aK=aJ.spmd}}else{aK=F(aI,af);if(!aK||!aK.match(/^d\w+$/)){aK=""}}}return aK}function d(aJ){var aK,aI,aH=aJ;while(aJ&&aJ.tagName!="HTML"&&aJ.tagName!="BODY"&&aJ.getAttribute){if(!r){aI=aJ.getAttribute(af)}else{aI=b(aJ)}if(aI){aK=aI;aH=aJ;break}if(!(aJ=aJ.parentNode)){break}}return{spm_c:aK,el:aH}}function O(aI){var aH;return(aI&&(aH=aI.match(/&?\bspm=([^&#]*)/)))?aH[1]:""}function g(aK){var aJ=G.getElementsByTagName("a"),aH=aJ.length,aI;for(aI=0;aI<aH;aI++){if(aJ[aI]==aK){return aI+1}}return 0}function L(aM,aJ){var aH=V(aM),aL=O(aH),aK=aL?aL.split("."):null,aO,aN,aI=N&&(aO=N.split(".")).length==2;if(aK&&aK.length>=4&&aK[3]){if(aK[0]=="1003"||aK[0]=="2006"){}else{if(aI){aK[0]=aO[0];aK[1]=aO[1];if(ad){aK[2]="0"}aN=aD(aM);if(aN){aK[3]=aN}}}t(aM,aK.slice(0,4).join("."),aJ);return}else{if(aI){aK=[N,0,aD(aM)||g(aM)];t(aM,aK.join("."),aJ);return}}if(aH&&aL){aM.href=" "+aH.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"").replace(/\?#/,"#")}}function I(aJ,aH){at=aJ;var aI=F(aJ,C),aK,aL;if(!aI){aK=d(aJ.parentNode);aL=aK.spm_c;if(!aL){L(aJ,aH);return}if(ad){aL="0"}E(aK.el,aL,aH)}else{t(aJ,aI,aH)}}function T(aL){if(!aL||aL.nodeType!=1){return}Q(aL,"data-spm-max-idx");var aI=am(aL.getElementsByTagName("a")),aK=am(aL.getElementsByTagName("area")),aM=aI.concat(aK),aJ,aH=aM.length;for(aJ=0;aJ<aH;aJ++){Q(aM[aJ],C)}}function aa(aI){var aN=aI.parentNode;if(!aN){return""}var aL=aI.getAttribute(af);var aJ=d(aN);var aM=aJ.spm_c||0;if(aM&&aM.indexOf(".")!=-1){aM=aM.split(".");aM=aM[aM.length-1]}var aK=N+"."+aM;var aH=A[aK]||0;aH++;A[aK]=aH;aL=aL||aH;return aK+".i"+aL}function v(aI){var aJ=aI.tagName;var aH;ae=ab.g_aplus_pv_id;if(aJ!="A"&&aJ!="AREA"){aH=aa(aI)}else{I(aI,aE);aH=F(aI,C)}aH=(aH||"0.0.0.0").split(".");return{a:aH[0],b:aH[1],c:aH[2],d:aH[3],e:ae}}function ax(){if(ay){return}if(!ab.spmData){if(!i){setTimeout(arguments.callee,100)}return}ay=aE;var aK=ab.spmData["data"],aJ,aH,aL,aI;if(!aK||!e(aK)){return}for(aJ=0,aH=aK.length;aJ<aH;aJ++){aL=aK[aJ];aI=aL.xpath;R[aI]={spmc:aL.spmc,spmd:aL.spmd}}}function w(){var aL=G.getElementsByTagName("iframe");var aM;var aJ;var aI=aL.length;var aH;var aK;for(aJ=0;aJ<aI;aJ++){aM=aL[aJ];if(aM.src||!(aH=F(aM,ac))){continue}aK=v(aM);if(aK){aK=[aK.a,aK.b,aK.c,aK.d,aK.e].join(".");aM.src=P(aH,aK)}else{aM.src=aH}}}function aj(){var aH=0;var aJ=500;function aI(){aH++;if(aH>10){aJ=3000}w();setTimeout(aI,aJ)}aI()}if(B(ai,["xiaobai.com","admin.taobao.org"])){return}p(function(){i=aE});aw();ax();aj();function c(aH){var aI;while(aH&&(aI=aH.tagName)){if(aI=="A"||aI=="AREA"){I(aH,j);break}else{if(aI=="BODY"||aI=="HTML"){break}}aH=aH.parentNode}}M(G,"mousedown",c);M(G,"keydown",c);ab.g_SPM={resetModule:T,anchorBeacon:I,getParam:v}})();/*pub-1|2013-05-29 11:03:48*/(function(){var i=window,x=document,m=location,o=m.href,s=i._alimm_spmact_on_;if(typeof s=="undefined"){s=1}if(s==1){s=1}if(s==0){s=0}if(!s){return}try{var a=i.g_SPM.getParam}catch(u){a=function(){return{a:0,b:0,c:0,d:0,e:0}}}var j=true;try{j=(self.location!=top.location)}catch(u){}var v="data-spm-act-id";var h=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"];var c=!!x.attachEvent;var b="attachEvent";var n="addEventListener";var f=c?b:n;function r(y,z,e){y[f]((c?"on":"")+z,function(B){B=B||i.event;var A=B.target||B.srcElement;e(B,A)},false)}function p(){if(/&?\bspm=[^&#]*/.test(location.href)){return location.href.match(/&?\bspm=[^&#]*/ig)[0].split("=")[1]}return""}function w(z,F){if(z&&/&?\bspm=[^&#]*/.test(z)){z=z.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")}if(!F){return z}var G,C,E,D="&",A,y,e,B;if(z.indexOf("#")!=-1){E=z.split("#");z=E.shift();C=E.join("#")}A=z.split("?");y=A.length-1;E=A[0].split("//");E=E[E.length-1].split("/");e=E.length>1?E.pop():"";if(y>0){G=A.pop();z=A.join("?")}if(G&&y>1&&G.indexOf("&")==-1&&G.indexOf("%")!=-1){D="%26"}z=z+"?spm="+F+(G?(D+G):"")+(C?("#"+C):"");B=e.indexOf(".")>-1?e.split(".").pop().toLowerCase():"";if(B){if(({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}).hasOwnProperty(B)){return 0}if(!G&&y<=1){if(!C&&!({htm:1,html:1,php:1}).hasOwnProperty(B)){z+="&file="+e}}}return z}function d(z){var E=window.location.href;var y=E.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i);var C=E.match(/[&\?](pvid=[^&]*)/i);var A=new RegExp("%3Dmm_\\d+_\\d+_\\d+","ig");var B=new RegExp("mm_\\d+_\\d+_\\d+","ig");function D(F){F=F.replace(/refpos[=(%3D)]\w*/ig,e).replace(A,"%3D"+y+"%26"+C.replace("=","%3D")).replace(B,y);if(C.length>0){F+="&"+C}return F}if(C&&C[1]){C=C[1]}else{C=""}var e=E.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);if(e&&e[0]){e=e[0]}else{e=""}if(y){y=y[0];return D(z)}return z}function l(e){var y=i.KISSY;if(y){y.ready(e)}else{if(i.jQuery){jQuery(x).ready(e)}else{if(x.readyState==="complete"){e()}else{r(i,"load",e)}}}}function t(e,y){return e&&e.getAttribute?(e.getAttribute(y)||""):""}function q(y){if(!y){return}var z,e=h.length;for(z=0;z<e;z++){if(y.indexOf(h[z])>-1){return true}}return false}function g(z,F){if(z&&/&?\bspm=[^&#]*/.test(z)){z=z.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")}if(!F){return z}var G,C,E,D="&",A,y,e,B;if(z.indexOf("#")!=-1){E=z.split("#");z=E.shift();C=E.join("#")}A=z.split("?");y=A.length-1;E=A[0].split("//");E=E[E.length-1].split("/");e=E.length>1?E.pop():"";if(y>0){G=A.pop();z=A.join("?")}if(G&&y>1&&G.indexOf("&")==-1&&G.indexOf("%")!=-1){D="%26"}z=z+"?spm="+F+(G?(D+G):"")+(C?("#"+C):"");B=e.indexOf(".")>-1?e.split(".").pop().toLowerCase():"";if(B){if(({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}).hasOwnProperty(B)){return 0}if(!G&&y<=1){if(!C&&!({htm:1,html:1,php:1}).hasOwnProperty(B)){z+="&__file="+e}}}return z}function k(y){if(q(y.href)){var z=t(y,v);if(!z){if(!a){return}var A=a(y),B=[A.a,A.b,A.c,A.d,A.e].join(".");if(j){B=[A.a||"0",A.b||"0",A.c||"0",A.d||"0"].join(".");B=(p()||"0.0.0.0.0")+"_"+B}var e=g(y.href,B);y.href=e;y.setAttribute(v,B)}}y=undefined}r(x,"mousedown",function(A,z){var B,y=0;while(z&&(B=z.tagName)&&y<5){if(B=="A"||B=="AREA"){k(z);break}else{if(B=="BODY"||B=="HTML"){break}}z=z.parentNode;y++}});l(function(){var B=document.getElementsByTagName("iframe");var C,e;for(var A=0;A<B.length;A++){C=t(B[A],"mmsrc");e=t(B[A],"mmworked");var z=a(B[A]);var y=[z.a||"0",z.b||"0",z.c||"0",z.d||"0",z.e||"0"].join(".");if(C&&!e){if(j){y=[z.a||"0",z.b||"0",z.c||"0",z.d||"0"].join(".");y=p()+"_"+y}B[A].src=w(d(C),y);B[A].setAttribute("mmworked","mmworked")}else{B[A].setAttribute(v,y)}}})})();