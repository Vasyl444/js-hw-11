import{S as f,i as d}from"./assets/vendor-f33cd494.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m=function(t){const a=t.hits,s=[];return a.forEach(e=>{s.push(`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
            <div class="wrapper">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
            <div class="title-wrapper">
            <p class="title">Likes<span>${e.likes}</span></p>
            <p class="title">Views<span>${e.views}</span></p>
            <p class="title">Comments<span>${e.comments}</span></p>
            <p class="title">Downloads<span>${e.downloads}</span></p>
            </div>
            </div>
            </a>
            </li>`)}),s.join("")},g=function(o){return`https://pixabay.com/api/?${new URLSearchParams({key:"43830110-6528f7a21182a7b65b70041af",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0})}`};function h(o){return fetch(o).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const i=document.querySelector(".form-input"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");let p=new f(".gallery a",{overlayOpacity:.8,captionSelector:"img",captionDelay:250,captionPosition:"bottom",captionsData:"alt",className:"simple-lightbox"});const l=document.querySelector(".form");l.addEventListener("submit",o=>{if(o.preventDefault(),i.value===""){l.reset();return}else c.innerHTML="",u.classList.remove("is-hidden"),h(g(i.value)).then(t=>{t.total===0?d.show({id:null,class:".izi-toast",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"14px",messageLineHeight:"",backgroundColor:"#EF4040",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:"",maxWidth:430,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"topRight",target:"",targetFirst:!0,timeout:3e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}}):(c.insertAdjacentHTML("afterbegin",m(t)),p.refresh(),p.on("open.simplelightbox"))}).catch(console.error()).finally(()=>{u.classList.add("is-hidden"),i.value="",l.reset()})});
//# sourceMappingURL=commonHelpers.js.map
