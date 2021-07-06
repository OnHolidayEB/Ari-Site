(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(645),a=t.n(i)()((function(e){return e[1]}));a.push([e.id,"\n#content{\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n\n}\n/*homepage*/\n\n.title{\n    font-weight: 900;\n    font-family: Helvetica;\n    font-size: 56px;\n    margin: 4vh 0px 0px 0px;\n    text-align: center;\n    \n}\n\n.titleLink{\n    \n    margin: 2.3vh 0px 0px 2vw;\n    text-align: center;\n    color: black;\n    display: block;\n    width: fit-content;\n    font-weight: 700;\n    font-family: Helvetica;\n    font-size: 18px;\n}\n\n.menuWrapper{\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n    position: absolute;\n    top: 2vh;\n    left: 2vw;\n    z-index: 1001;\n   \n}\n\n.linkWrapper{\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n    padding-left: 3vw;\n    padding-top: .75vh;\n    line-height: 1.5;\n\n    animation-name: fadeIn;\n    animation-duration: .5s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.linkWrapperFadeOut{\n    animation-name: fadeOut;\n    animation-duration: .5s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n\n\n.menu-link{\n    color: black;\n    text-decoration: none;\n\n}\n\n\n#splashWrapper{\n    display: flex;\n    flex-direction: column;\n    width: 60vw;\n    margin: 6vw auto 0 auto;\n    align-items: center;\n}\n\n#splashImg{\n    width: 40vw;\n    height: auto;\n}\n\n#linkWrapper{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin: 5vh;\n}\n\n.link{\n    \n    font-size: 18px;\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\n    color: black;\n    text-decoration: none;\n    padding: 0px 10px;\n}\n\n\n\n.link:hover{\n    cursor: pointer;\n}\n\n.thumbWrapper{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n.thumbnail{\n    height: 150px;\n    width: auto;\n\n    animation-name: fadeIn;\n    animation-duration: 1s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n}\n\n.thumbnail:hover{\n    cursor:pointer;\n}\n\n.thumbCaption{\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\n    text-align: center;\n    color: black;\n    text-decoration: none;\n}\n\n.thumbCaption:hover{\n    cursor: pointer;\n}\n\n#editorialWrapper{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 5vh;\n}\n\n.edThumbnail{\n    height: 250px;\n    width: auto;\n}\n\na:hover, a:visited, a:link, a:active\n{\n    text-decoration: none;\n}\n\n/* about page */\n\n.aboutText{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 14px;\n    height: 80vh;\n    margin: 0px auto;\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\n    text-align: center;\n    line-height: 2;\n}\n\n\n/* photo gallery */\n\n.gallery-title{\n    font-weight: 700;\n    font-family: Helvetica;\n    font-size: 18px;\n    margin: 0px;\n    padding-left: 1.25vw;\n    padding-top: 1vh;\n    text-decoration: none;\n    color: black;\n}\n    \n.arrow-left{\n    display: flex;\n    width: 0;\n    height: 0;\n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent;\n    border-right: 10px solid black;\n    margin-left: 15px;\n    justify-self: center;\n    \n}\n\n.arrow-right{\n  width: 0; \n  height: 0; \n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid black;\n  margin-right: 15px;\n}\n\n.gallery-img{\n    display: flex;\n    height: 80vh;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n    opacity: 0;\n    \n    \n\n    animation-name: fadeIn;\n    animation-duration: 1.5s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    \n    -webkit-animation-name: fadeIn;\n    -webkit-animation-duration: 1.5s;\n    -webkit-animation-iteration-count: 1;\n    -webkit-animation-fill-mode: forwards;\n}\n\n.img-fadeOut{\n    \n\n    animation-name: fadeOut;\n    animation-duration: 1s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    \n    -webkit-animation-name: fadeOut;\n    -webkit-animation-duration: 1.5s;\n    -webkit-animation-iteration-count: 1;\n    -webkit-animation-fill-mode: forwards;\n}\n\n@keyframes fadeIn{\n    0%{\n        opacity: 0%;\n        -webkit-opacity: 0%\n    }\n\n    100%{\n        opacity: 100%;\n        -webkit-opacity: 100%;\n\n    }\n}\n\n@keyframes fadeOut {\n    0% {\n        opacity: 100%;\n        -webkit-opacity: 100%;\n\n    }\n\n    100%{\n        opacity: 0%;\n        -webkit-opacity: 0%\n\n    }\n    \n}\n\n.galleryWrapper{\n    \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    height: 84vh;\n    width: 95vw;\n    margin: 0 auto;\n    justify-content: space-between;\n    justify-self: center;\n    align-self: center;\n    \n    \n    /*display: flex;\n    flex-direction: row;\n    align-items: center;\n    \n    height: 100vh;\n    margin: 0 auto;\n    justify-content: space-between;*/\n}\n\n.clickbox{\n    height: 84vh;\n    width: 50vw;\n    z-index: 1000;\n}\n\n\n.gallery-caption{\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\n    margin-top: 10px;\n}\n\n.gallery-figure{\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 80vh;\n    flex-direction: column;\n    align-items: center;\n    margin: auto;\n    width: fit-content;\n\n\n    /*\n    display: flex;\n    position: static;\n    height: 80vh;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;*/\n}\n\n.click-caption{\n    display: none;\n    font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\n    font-size: 10px;\n    margin-top: 10px;\n}\n\n\n@media only screen and (max-width: 500px){\n    /* homepage */\n    \n    .title{\n        font-weight: 900;\n        font-family: Helvetica;\n        font-size: 36px;\n        margin: 4vh 0px 0px 0px;\n        text-align: center;\n        \n    }\n    \n    \n    #splashWrapper {\n        display: flex;\n        flex-direction: column;\n        width: 90vw;\n        margin: 6vw auto 0 auto;\n    }    \n\n    #splashImg{\n        width: 90vw;\n        height: auto;\n    }\n\n    #linkWrapper{\n        display: flex;\n        flex-direction: row;\n        justify-content: space-evenly;\n        align-items: center;\n        margin: 5vh;\n    }\n\n    .link{\n        margin: 0px;\n    }\n\n    /* menu bar */\n\n    .menuWrapper{\n        background-color: rgba(255, 255, 255, .65);\n        z-index: 40;\n    }\n\n    /* about page*/\n\n    .aboutText{\n        width: 75vw;\n    }\n\n    /* gallery */\n\n    .gallery-figure {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin: 0 auto;\n        justify-content: center;\n        height: auto;\n    }\n    .galleryWrapper {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin-top: 0px;\n        justify-content: center;\n        height: 90vh;\n    }\n\n    .gallery-img {\n        max-width: 95vw;\n        height: fit-content;\n        margin: 0 auto;\n        max-height: 65vh;\n        object-fit: contain;\n    }\n\n    .gallery-caption{\n        \n        font-size: 14px;\n        position: absolute;\n        bottom: 8vh;\n\n    }\n\n    .arrow-left {\n        display:none;\n    }\n\n    .arrow-right{\n        display: none;\n    }\n\n    .click-caption{\n        display: block;\n        font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif;\n        font-size: 10px;\n        margin-top: 10px;\n        position: absolute;\n        bottom: 4vh;\n    }\n\n\n        \n\n}\n\n",""]);const r=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var i,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function o(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},i=[],a=0;a<e.length;a++){var l=e[a],d=n.base?l[0]+n.base:l[0],c=t[d]||0,s="".concat(d," ").concat(c);t[d]=c+1;var m=o(s),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==m?(r[m].references++,r[m].updater(p)):r.push({identifier:s,updater:g(p,n),references:1}),i.push(s)}return i}function d(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var c,s=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function m(e,n,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=s(n,a);else{var r=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r)}}function p(e,n,t){var i=t.css,a=t.media,r=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,f=0;function g(e,n){var t,i,a;if(n.singleton){var r=f++;t=u||(u=d(n)),i=m.bind(null,t,r,!1),a=m.bind(null,t,r,!0)}else t=d(n),i=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var a=o(t[i]);r[a].references--}for(var d=l(e,n),c=0;c<t.length;c++){var s=o(t[c]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}t=d}}}}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),i=t(426);n()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=t.p+"img/2e172b1568330393f412fc50cabdc3c9.jpeg",r=e=>{const n=document.createElement("a");return n.classList.add("link"),n.innerHTML=`${e}`,n},o=()=>{const e=document.getElementById("content");e.appendChild((()=>{const e=(()=>{const e=document.createElement("div");return e.id="splashWrapper",e})(),n=(()=>{const e=document.createElement("img");return e.id="splashImg",e.src=a,e})();return e.appendChild(n),e.appendChild((e=>{const n=document.createElement("h1");return n.classList.add("title"),n.innerHTML="ARIEL SADOK",n})()),e})()),e.appendChild((()=>{const e=(()=>{const e=document.createElement("div");return e.id="linkWrapper",e})(),n=e.appendChild(r("Portfolios"));n.id="portfolio",n.href="#thumbWrapper";const t=e.appendChild(r("Contact"));return t.id="bio",t.href="about.html",e})())},l=t.p+"img/69b4864ae23daea7a8e57dcb27bca12c.jpeg",d=t.p+"img/9985edefc7b1b6ec2ae52884c3186668.jpeg";function c(){switch(this.id){case"portfolio":m();break;case"bio":bio()}}const s=(e,n,t)=>{const i=document.createElement("a"),a=document.createElement("figure"),r=document.createElement("img"),o=document.createElement("figcaption");return i.href=`${t}`,r.src=e,r.classList.add("thumbnail"),o.innerHTML=`${n}`,o.classList.add("thumbCaption"),i.appendChild(a),a.appendChild(r),a.appendChild(o),i},m=()=>{if(!document.body.contains(document.getElementById("thumbWrapper"))){const e=document.getElementById("content").appendChild((()=>{const e=document.createElement("div");return e.classList.add("thumbWrapper"),e.id="thumbWrapper",e})());e.appendChild(s(l,"Portrait","portrait.html")),e.appendChild(s(d,"Editorial","editorial.html"))}},p=()=>{document.querySelectorAll(".link").forEach((e=>{e.addEventListener("click",c)}))},u=t.p+"img/d01c9292ca060f6cd2a4f0457df624bb.jpg",f=t.p+"img/c84b4aa0c03eb31696909119f7d98df8.jpg",g=t.p+"img/54ccfb610dcb4b67a472c0ba53fc6ca8.jpg",h=t.p+"img/30569323de4f757616ec8c01e171c582.jpg",y=t.p+"img/df4bffd4e49b8b76d95cf316675e2c4c.jpg",b=t.p+"img/dbb0339fff648b9e21bb8ca8325e4d77.jpg",x=t.p+"img/3dbe3068a3a334d05594b62d3cdad23e.jpg",v=t.p+"img/d813de1ecf4a791c2d2e26ffbad35992.jpg",w=t.p+"img/3d49716453bf49ad5cedb999e553e5af.jpg",k=t.p+"img/2119cafa12861c76315f6c56f2759c78.jpg",E=t.p+"img/317c83c92b748427141814a2ab1c2e16.jpg",L=t.p+"img/b387dcf5ae34302b5c7f67b58829f875.jpg",I=t.p+"img/4766e6705533bc7f32af4988b2028c80.jpg",C=t.p+"img/24d22e435318daa396a07a86d671155f.jpg",S=t.p+"img/423df677332c2e4878cc3fe3043fa4ff.jpg",j=t.p+"img/8e8b419234e9050982866819c86655e9.jpg",T=t.p+"img/b626c427de7e3cac7899179e1c6db5cd.jpg",D=e=>{const n=document.createElement("div");return n.classList.add(`${e}`),n},B=(e,n,t)=>({img:e,caption:n,idNumber:t}),A=()=>{const e=B(u,"Emma Kate Boyd","0"),n=B(f,"Emma Kate Boyd","1"),t=B(g,"Emma Kate Boyd","2"),i=B(h,"Emma Kate Boyd","3"),a=B(y,"Destiny Strudwick","4"),r=B(b,"Destiny Strudwick","5"),o=B(x,"Destiny Strudwick","6"),l=B(v,"Destiny Strudwick","7"),d=B(w,"Destiny Strudwick","8"),c=B(k,"Dustin Heath","9"),s=B(E,"Dustin Heath","10"),m=B(L,"Dustin Heath","11"),p=B(I,"Dustin Heath","12"),D=B(C,"Foster James","13"),A=B(S,"Foster James","14"),z=B(j,"Foster James","15"),W=B(T,"Foster James","16"),N=(()=>{const e=[];return{populateArray:function(...n){n.forEach((n=>e.push(n)))},getArray:()=>e}})();N.populateArray(e,n,t,i,a,r,o,l,d,c,s,m,p,D,A,z,W);const O=N.getArray();return{getGalleryDom:function(){return O}}};function z(){const e=A().getGalleryDom(),n=O(),t=parseInt(n.dataset.idNumber),i=t-1,a=document.querySelector(`.gallery-figure[data-id-number="${i}"]`);if(n.style.zIndex=0,n.classList.toggle("img-fadeOut"),n.addEventListener("animationend",(e=>{"fadeIn"!=e.animationName&&(n.style.display="none",n.classList.remove("img-fadeOut"))})),0==t){const t=document.querySelector(`.gallery-figure[data-id-number= '${e.length-1}']`);t.style.zIndex=30,t.style.display="flex",t.id="current-figure",n.id=""}else"gallery-figure img-fadeOut"==a.className?(a.classList.remove("img-fadeOut"),a.style.display="flex",a.style.zIndex=30,n.id="",a.id="current-figure",a.querySelector(".gallery-img").id="current-image"):(n.id="",a.style.zIndex=30,a.style.display="flex",a.id="current-figure",a.querySelector(".gallery-img").id="current-image")}function W(){const e=A().getGalleryDom(),n=O(),t=parseInt(n.dataset.idNumber),i=t+1,a=document.querySelector(`.gallery-figure[data-id-number="${i}"]`);if(n.style.zIndex=0,n.classList.toggle("img-fadeOut"),n.addEventListener("animationend",(e=>{"fadeIn"!=e.animationName&&(n.style.display="none",n.classList.remove("img-fadeOut"))})),t==e.length-1){const e=document.querySelector('.gallery-figure[data-id-number="0"]');e.style.zIndex=30,e.style.display="flex",e.id="current-figure",n.id=""}else"gallery-figure img-fadeOut"==a.className?(a.classList.remove("img-fadeOut"),a.style.display="flex",a.style.zIndex=30,n.id="",a.id="current-figure",a.querySelector(".gallery-img").id="current-image"):(n.id="",a.style.zIndex=30,a.style.display="flex",a.id="current-figure",null!=document.getElementById("click-caption")&&N())}const N=()=>{document.getElementById("click-caption").remove()},O=()=>document.getElementById("current-figure"),M=()=>{const e=document.getElementById("content"),n=D("galleryWrapper"),t=D("arrow-left");t.id="arrow-left";const i=D("clickbox");i.id="clickboxLeft";const a=D("clickbox");a.id="clickboxRight";const r=D("arrow-right");r.id="arrow-right";const o=A().getGalleryDom(),l=D("figureWrapper");l.id="figureWrapper";const d=D("click-caption");d.id="click-caption",d.innerHTML="Click Image to Scroll",e.appendChild(n),n.appendChild(t),n.appendChild(i),n.appendChild(a),n.appendChild(l),o.forEach(((e,n)=>{e=((e,n,t)=>{const i=document.createElement("figure");i.classList.add("gallery-figure"),i.id="gallery-figure",i.dataset.idNumber=t;const a=document.createElement("img");a.classList.add("gallery-img"),a.src=e;const r=document.createElement("figcaption");return r.classList.add("gallery-caption"),r.innerHTML=n,i.appendChild(a),i.appendChild(r),i})(o[n].img,o[n].caption,o[n].idNumber),l.appendChild(e),e.style.zIndex=0,e.style.display="none"})),n.appendChild(r),n.appendChild(d);const c=document.querySelector('.gallery-figure[data-id-number="0"]');c.style.zIndex=30,c.style.display="flex",c.id="current-figure",c.querySelector(".gallery-img").id="current-image",(()=>{const e=document.getElementById("arrow-left"),n=document.getElementById("arrow-right"),t=(document.querySelectorAll("img.gallery-img"),document.getElementById("clickboxLeft")),i=document.getElementById("clickboxRight");e.addEventListener("click",z),t.addEventListener("click",z),n.addEventListener("click",W),i.addEventListener("click",W)})()},H=t.p+"img/d8abcaf87571a31d19b929ae2ce00f5a.jpg",q=t.p+"img/ad90287a9b9daf42660d7dc44402c148.jpg",$=t.p+"img/76a983df316febbb968eda9da3a37db0.jpg",G=t.p+"img/3211a63b00a207058c2ac7dfd6af40a3.jpg",R=t.p+"img/269b3ebea778fa80cc8edc3ed1ebaaf1.jpg",F=t.p+"img/7899fb09302eef70321bf4b87cbb6dd7.jpg",P=t.p+"img/a58b37983ce6740665a676b99803a919.jpg",J=t.p+"img/837f260c83fa20f943def71d1f76ae6e.jpg",U=t.p+"img/c32982de22225bbc6c5841a4f0daa2a8.jpg",_=t.p+"img/afccfd99935de385d85b5a758c1219be.jpg",K=t.p+"img/8dd95af67a3046cb9886f63fd36e7583.jpg",Z=t.p+"img/85af10762b9cdbfeabe31b54d2d77ce9.jpg",V=t.p+"img/e0143a349410bc4fc7ba0aebf92baa2f.jpg",Y=t.p+"img/2e93fe4040ddd44bfb3e9017d5523e32.jpg",Q=e=>{const n=document.createElement("div");return n.classList.add(`${e}`),n},X=(e,n,t)=>({img:e,caption:n,idNumber:t}),ee=()=>{const e=X(H,"Johnny Donohoe","0"),n=X(q,"Johnny Donohoe","1"),t=X($,"Dimphy Janse","2"),i=X(G,"Dimphy Janse","3"),a=X(R,"Dimphy Janse","4"),r=X(F,"Milo Matthieu","5"),o=X(P,"Milo Matthieu","6"),l=X(J,"Alexia","7"),d=X(U,"Alexia","8"),c=X(_,"Beastie Vee","9"),s=X(K,"Brion Starr","10"),m=X(Z,"Brion Starr","11"),p=X(V,"Ian Weglarz","12"),u=X(Y,"Ian Weglarz","13"),f=(()=>{const e=[];return{populateArray:function(...n){n.forEach((n=>e.push(n)))},getArray:()=>e}})();f.populateArray(e,n,t,i,a,r,o,l,d,c,s,m,p,u);const g=f.getArray();return{getGalleryDom:function(){return g}}};function ne(){const e=ee().getGalleryDom(),n=ae(),t=parseInt(n.dataset.idNumber),i=t-1,a=document.querySelector(`.gallery-figure[data-id-number="${i}"]`);if(n.style.zIndex=0,n.classList.toggle("img-fadeOut"),n.addEventListener("animationend",(e=>{"fadeIn"!=e.animationName&&(n.style.display="none",n.classList.remove("img-fadeOut"))})),0==t){const t=document.querySelector(`.gallery-figure[data-id-number= '${e.length-1}']`);t.style.zIndex=30,t.style.display="flex",t.id="current-figure",n.id=""}else"gallery-figure img-fadeOut"==a.className?(a.classList.remove("img-fadeOut"),a.style.display="flex",a.style.zIndex=30,n.id="",a.id="current-figure",a.querySelector(".gallery-img").id="current-image"):(n.id="",a.style.zIndex=30,a.style.display="flex",a.id="current-figure",a.querySelector(".gallery-img").id="current-image")}function te(){const e=ee().getGalleryDom(),n=ae(),t=parseInt(n.dataset.idNumber),i=t+1,a=document.querySelector(`.gallery-figure[data-id-number="${i}"]`);if(n.style.zIndex=0,n.classList.toggle("img-fadeOut"),n.addEventListener("animationend",(e=>{"fadeIn"!=e.animationName&&(n.style.display="none",n.classList.remove("img-fadeOut"))})),t==e.length-1){const e=document.querySelector('.gallery-figure[data-id-number="0"]');e.style.zIndex=30,e.style.display="flex",e.id="current-figure",n.id=""}else"gallery-figure img-fadeOut"==a.className?(a.classList.remove("img-fadeOut"),a.style.display="flex",a.style.zIndex=30,n.id="",a.id="current-figure",a.querySelector(".gallery-img").id="current-image"):(n.id="",a.style.zIndex=30,a.style.display="flex",a.id="current-figure",null!=document.getElementById("click-caption")&&ie())}const ie=()=>{document.getElementById("click-caption").remove()},ae=()=>document.getElementById("current-figure"),re=()=>{const e=document.getElementById("content"),n=Q("galleryWrapper"),t=Q("clickbox");t.id="clickboxLeft";const i=Q("clickbox");i.id="clickboxRight";const a=Q("arrow-left");a.id="arrow-left";const r=Q("arrow-right");r.id="arrow-right";const o=ee().getGalleryDom(),l=Q("figureWrapper");l.id="figureWrapper";const d=Q("click-caption");d.id="click-caption",d.innerHTML="Click Image to Scroll",e.appendChild(n),n.appendChild(a),n.appendChild(t),n.appendChild(i),n.appendChild(l),o.forEach(((e,n)=>{e=((e,n,t)=>{const i=document.createElement("figure");i.classList.add("gallery-figure"),i.dataset.idNumber=t;const a=document.createElement("img");a.classList.add("gallery-img"),a.src=e;const r=document.createElement("figcaption");return r.classList.add("gallery-caption"),r.innerHTML=n,i.appendChild(a),i.appendChild(r),i})(o[n].img,o[n].caption,o[n].idNumber),l.appendChild(e),e.style.zIndex=0,e.style.display="none"})),n.appendChild(r),n.appendChild(d);const c=document.querySelector('.gallery-figure[data-id-number="0"]');c.style.zIndex=30,c.style.display="flex",c.id="current-figure",c.querySelector(".gallery-img").id="current-image",(()=>{const e=document.getElementById("arrow-left"),n=document.getElementById("arrow-right"),t=(document.querySelectorAll("img.gallery-img"),document.getElementById("clickboxLeft")),i=document.getElementById("clickboxRight");e.addEventListener("click",ne),t.addEventListener("click",ne),n.addEventListener("click",te),i.addEventListener("click",te)})()},oe=()=>{const e=document.getElementById("content"),n=(e=>{const n=document.createElement("div");return n.classList.add("aboutText"),n})();n.innerHTML="Fashion and portrait photographer based in New York City. <br/a> For inquiries email Ariel.Sadok@gmail.com",e.appendChild(n)},le=e=>{const n=document.createElement("div");return n.classList.add(`${e}`),n},de=(e,n)=>{const t=document.createElement("a");return t.classList.add("menu-link"),t.innerHTML=e,t.href=`${n}.html`,t},ce=()=>{if(!document.body.contains(document.getElementById("about-link"))){const e=document.getElementById("menuWrapper"),n=le("linkWrapper");n.id="menu-link-wrapper";const t=document.getElementById("title-anchor"),i=de("Editorial","editorial"),a=de("Portrait","portrait"),r=de("Contact","about");r.id="about-link",n.appendChild(i),n.appendChild(a),n.appendChild(r),e.appendChild(n),t.addEventListener("click",(()=>{t.href="index.html"}))}},se=()=>{const e=document.getElementById("menu-link-wrapper");e.addEventListener("animationend",(()=>{e.remove()})),e.classList.toggle("linkWrapperFadeOut")},me=()=>{const e=document.getElementById("content"),n=le("menuWrapper");n.id="menuWrapper";const t=(e=>{const n=document.createElement("a");n.id="title-anchor";const t=document.createElement("h1");return t.classList.add("gallery-title"),t.innerHTML="ARIEL SADOK",n.appendChild(t),n})();n.appendChild(t),e.appendChild(n),t.addEventListener("mouseover",ce),t.addEventListener("touchstart",ce),n.addEventListener("mouseleave",se)};function pe(){return window.location.href}switch(console.log(`${pe()}`),pe()){case"https://www.arielsadok.com/":case"https://www.arielsadok.com/index.html":case"https://www.arielsadok.com/index.html#thumbWrapper":ue(),o(),p();break;case"https://www.arielsadok.com/portrait.html":ue(),me(),re();break;case"https://www.arielsadok.com/editorial.html":ue(),me(),M();break;case"https://www.arielsadok.com/about.html":ue(),me(),oe();break;case"https://onholidayeb.github.io/Ari-Site/":case"https://onholidayeb.github.io/Ari-Site/index.html":ue(),o(),p();break;case"https://onholidayeb.github.io/Ari-Site/portrait.html":ue(),me(),re();break;case"https://onholidayeb.github.io/Ari-Site/index.html#thumbWrapper":ue(),o(),p();break;case"https://onholidayeb.github.io/Ari-Site/editorial.html":ue(),me(),M();break;case"https://onholidayeb.github.io/Ari-Site/about.html":ue(),me(),oe();break;case"file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html":ue(),o(),p();break;case"file:///Users/ericbouthiller/Projects/Ari_Site/dist/portrait.html":ue(),me(),re();break;case"file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html#thumbWrapper":ue(),o(),p();break;case"file:///Users/ericbouthiller/Projects/Ari_Site/dist/editorial.html":ue(),me(),M();break;case"file:///Users/ericbouthiller/Projects/Ari_Site/dist/about.html":ue(),me(),oe()}function ue(){document.getElementById("content").querySelectorAll("div").forEach((e=>e.remove()))}})()})();