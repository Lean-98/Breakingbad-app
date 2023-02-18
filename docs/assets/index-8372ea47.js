(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const i=async()=>(await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json())[0],c=async o=>{document.querySelector("#app-title").innerHTML="Breaking Bad",o.innerHTML="Loading...";const r=document.createElement("blockquote"),a=document.createElement("h3"),n=document.createElement("button");n.innerText="Next Quote";const e=({quote:t,author:s})=>{r.innerHTML=t,a.innerHTML=s,o.replaceChildren(r,a,n)};n.addEventListener("click",async()=>{o.innerHTML="Loading...";const t=await i();e(t)}),i().then(e)};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://breakingbadquotes.xyz/" target="_blank">
      <img src="./assets/images/danger-heinserberg.jpg" class="logo" alt="Danger Heinserberg logo" />
    </a>
    <a href="https://www.imdb.com/title/tt0903747/" target="_blank">
      <img src="./assets/images/breakingbad-01.png" class="logo vanilla" alt="Breakingbad logo" />
    </a>
    <h1 id="app-title"></h1>
    <div class="card">
      
    </div>

  </div>
`;const l=document.querySelector(".card");c(l);
