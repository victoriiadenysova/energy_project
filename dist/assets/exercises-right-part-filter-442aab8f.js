var N=Object.defineProperty;var F=(t,e,s)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var S=(t,e,s)=>(F(t,typeof e!="symbol"?e+"":e,s),s);import{i as D,g as U,a as J,d as P,b as R,c as z,e as K,s as V,f as p}from"./vendor-295897c2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();function G(){document.querySelector(".filter-list-js").classList.add("hidden-form");const e=document.querySelector(".wrap-js"),s=document.createElement("p");s.className="favorite-text",e.appendChild(s),s.textContent="It appears that you haven`t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future."}const c="/Your-Energy/assets/sprite-9db62079.svg",f=(t,e)=>t.length<=e?t:`${t.slice(0,e)}...`;function Q(t){const e=document.querySelector(".filter-list-js");e.classList.remove("hidden-form"),t.length>6?e.classList.add("scroll"):e.classList.remove("scroll");const s=t.map(({_id:a,target:o,name:i,bodyPart:n,burnedCalories:l,time:w})=>`
  <li class="favourites_list_item" id=${a}>
    <div class="favourites_list_item_up">
      <div class="favourites_list_item_up_left">
        <span class="favourites_btn_workout">${f(o,6)}</span>
        <button id="btnTrash" class="favourites_btn_trash_icon favourites_btn_trash" data-id=${a}>
          <svg class="favourites_btn_trash_icon" width="16" height="16" aria-label="trash" data-id=${a}>
            <use class="favourites_btn_trash_icon" href="${c}#icon-trash" data-id=${a}></use>
          </svg>
        </button>
      </div>
      <div class="favourites_list_item_up_right">
        <button class="favourites_btn_start" data-id=${a}>
          <p class="favourites_btn_start_text" data-id=${a}>start</p>
          <svg class="favourites_btn_start_icon" width="16" height="16" aria-label="arrow" data-id=${a}>
            <use href="${c}#icon-arrow" data-id=${a}></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="favourites_list_item_middle">
      <div class="favourites_list_item_middle_icon">
        <svg class="favourites_list_item_middle_icon_svg">
          <use href="${c}#icon-run-man"></use>
        </svg>
      </div>
      <h3 class="favourites_list_item_middle_title">${f(i,16)}</h3>
    </div>
    <div class="favourites_list_item_bottom">
      <ul class="favourites_list_item_bottom_list">
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Burned calories: <span>${l}/${w}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">
            Body part: <span>${f(n,5)}</span>
          </p>
        </li>
        <li class="favourites_list_item_bottom_list_item">
          <p class="favourites_list_item_bottom_list_item_text">Target: <span>${f(o,7)}</span></p>
        </li>
      </ul>
    </div>
  </li>`).join("");e.innerHTML=s}const Y={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN,projectId:{}.VITE_FIREBASE_PROJECT_ID,storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID,measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID};console.log("Усі змінні середовища:",{BASE_URL:"/Your-Energy/",MODE:"production",DEV:!1,PROD:!0});const M=D(Y),X=U(M),L=J(M),Z=async t=>{const e=X.currentUser;if(e)try{V(R(L,e.email,t._id),t)}catch(s){console.log(s.message)}},W=async t=>{const e=localStorage.getItem("user");if(e)try{P(R(L,e,t))}catch(s){console.log(s.message)}},ee=async()=>{const t=localStorage.getItem("user"),e=[];if(!t)return;(await z(K(L,t))).forEach(a=>{e.push(a.data())}),localStorage.setItem("favorites",JSON.stringify(e))};function y(){ee();const t=JSON.parse(localStorage.getItem("favorites"));if(!(t!=null&&t.length)){G();return}Q(t)}const x=document.getElementById("home"),$=document.getElementById("favorites"),I=document.getElementById("home-text"),B=document.getElementById("favorites-text");document.getElementById("navigation");const te=window.location.href.toString();let se=te.slice(-14);const ae=()=>{se==="favorites.html"?(x.classList.remove("active"),I.classList.remove("black"),$.classList.add("active"),B.classList.add("black"),y()):(x.classList.add("active"),I.classList.add("black"),$.classList.remove("active"),B.classList.remove("black"))};ae();document.getElementById("burger-button");const oe=document.getElementById("burger");document.getElementById("burger-button-close");const ie=t=>{t.key==="Escape"&&oe.classList.add("visually-hidden"),document.body.classList.remove("disable-scroll")};document.addEventListener("keydown",ie);const q=document.getElementById("sign-in"),re=document.getElementById("sign-out"),ne=document.getElementById("user");ne.innerHTML=localStorage.getItem("user");window.location.href.toString();localStorage.getItem("user")&&(re.classList.remove("display-none"),q.classList.add("display-none"),q.style.display="none");class le{constructor(){this.overlay=null,this.modal=null,this.closeButton=null,this.closeButtonHandler=()=>this.close(),this.escapeKeyHandler=e=>this.closeEsc(e),this.overlayClickHandler=e=>this.closeBack(e)}initElements(){this.overlay=document.querySelector(".overlay"),this.modal=document.querySelector(".modal-info")||document.querySelector(".modal-get-raiting")}open(e){var s;if(this.initElements(),!this.overlay||!this.modal){console.error("Елементи модального вікна не знайдені в DOM!");return}this.overlay.innerHTML=e,this.overlay.style.zIndex="3",this.overlay.style.display="flex",this.modal.classList.remove("visually-hidden"),this.closeButton=document.querySelector(".modal-button-close"),document.body.classList.add("no-scroll"),(s=this.closeButton)==null||s.addEventListener("click",this.closeButtonHandler),document.addEventListener("keydown",this.escapeKeyHandler),this.overlay.addEventListener("click",this.overlayClickHandler)}close(){var e;this.initElements(),!(!this.overlay||!this.modal)&&(this.overlay.style.display="none",this.overlay.style.zIndex="-1",this.modal.classList.add("visually-hidden"),document.body.classList.remove("no-scroll"),(e=this.closeButton)==null||e.removeEventListener("click",this.closeButtonHandler),document.removeEventListener("keydown",this.escapeKeyHandler),this.overlay.removeEventListener("click",this.overlayClickHandler))}closeEsc(e){e.key==="Escape"&&this.close()}closeBack(e){e.target===this.overlay&&this.close()}}const _=new le,r=class{static handleErrors(e){return async()=>{try{return await e()}catch(s){console.error("Помилка при запиті: ",s.message)}}}static async fetchJson(e,s){return(await fetch(e,s)).json()}async getQuotes(){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/quote`))()}async getByFilterName(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/filters?${a}`)})()}async getByFilterCategory(e){return await r.handleErrors(async()=>{const a=new URLSearchParams({...e});return await r.fetchJson(`${r.BASE_URL}/exercises?${a}`)})()}async getOneExercises(e){return await r.handleErrors(async()=>await r.fetchJson(`${r.BASE_URL}/exercises/${e}`))()}async addExercisesRate(e,s){return await r.handleErrors(async()=>{const o={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await r.fetchJson(`${r.BASE_URL}/exercises/${e}/rating`,o)})()}async addSubscription(e){return await r.handleErrors(async()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await r.fetchJson(`${r.BASE_URL}/subscription`,a)})()}};let g=r;S(g,"BASE_URL","https://your-energy.b.goit.study/api");const E=new g,u=class{open(){(!u.loaderEl||u.loaderEl.classList.contains("js-loader"))&&(u.loaderEl.style.display="block")}close(){u.loaderEl&&(u.loaderEl.style.display="none")}};let v=u;S(v,"loaderEl",document.querySelector(".js-loader"));const d=new v,b={quoteText:document.querySelector(".quote-text"),quoteAuthor:document.querySelector(".quote-author")};document.addEventListener("DOMContentLoaded",ce);async function ce(){const t=localStorage.getItem("quote");if(t){const e=new Date().toDateString(),{date:s,quote:a,author:o}=JSON.parse(t);e!==s?j():(b.quoteText.innerHTML=a,b.quoteAuthor.innerHTML=o)}else j()}async function j(){d.open();const t=await E.getQuotes();d.close();const{author:e,quote:s}=t,a={author:e,quote:s,date:new Date().toDateString()};localStorage.setItem("quote",JSON.stringify(a)),b.quoteText.innerHTML=s,b.quoteAuthor.innerHTML=e}function de(){const t=document.createElement("button");t.className="scroll-up-button hidden";const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox","0 0 32 32"),e.setAttribute("class","button-icon");const s=document.createElementNS("http://www.w3.org/2000/svg","use");s.setAttributeNS("http://www.w3.org/1999/xlink","href",`${c}#icon-arrow`),e.appendChild(s),t.appendChild(e),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",function(){window.scrollY>50?t.classList.remove("hidden"):t.classList.add("hidden")}),document.body.appendChild(t)}de();function ue(t){if(t)return t[0].toUpperCase()+t.slice(1)}function me(t){const e=(t%1).toFixed(1)*100;let s='<div class="rating-container-not-cursore" data-rating="0">';for(let a=1;a<=t+1;a+=1)a<=t?s+=`<span class="star-js selected" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js selected">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>`:e>0&&(s+=`<span class="last-star-js" data-value="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 20 19" fill="none">
                    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="url(#paint0_linear_126_18474)"/>
                    <defs>
                    <linearGradient id="paint0_linear_126_18474" x1="20" y1="10" x2="-1.99998" y2="10.0209" gradientUnits="userSpaceOnUse">
                    <stop offset="${100-e}%" stop-color="rgba(244, 244, 244, 0.20)" />
                    <stop offset="${e}%" stop-color="#EEA10C" />
                    </linearGradient>
                    </defs>
                  </svg></span>`);for(let a=t+1;a<=5;a+=1)s+=`<span class="star-js" data-value="${a}"><svg class="exercises_btn_start_icon_modal star-js">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>`;return s+"</div>"}function fe(t){return t?`<button class="add-favorite-js" type="button" style="font-size: 14px;">
              <span class="remote-favorites">Remove from favorites</span>
              <svg class="trash-icon-img" width="15" height="15" aria-label="trash-icon">
                  <use href="${c}#icon-trash"></use>
              </svg>
          </button>`:`<button class="add-favorite-js" type="button" style="font-size: 14px;">
                <span>Add to favorites</span>
                <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                    <use href="${c}#icon-heart"></use>
                </svg>
              </button>`}function he(t){return`<div class="modal-info" data-id="${t._id}">
     <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="modal-image-vrapper">
      <img loading="lazy" class="modal-img" src="${t.gifUrl}" alt="${t.name}" />
    </div>
    <div class="modal-content-wrapper">
      <div class="card-wrapper">
        <h3 class="title-card-modal">${ue(t.name)}</h3>
        <div class="rating-modal-container-wrapper"><p>${t.rating.toFixed(1)}</p>${me(t.rating)}</div>
      </div>
      <hr class="modal-decoration-line" />
      <ul class="modal-table">
        <li>
          <h4 class="title-collum">Target</h4>
          <p class="data-collumn">${t.target}</p>
        </li>
        <li>
          <h4 class="title-collum">Body Part</h4>
          <p class="data-collumn">${t.bodyPart}</p>
        </li>
        <li>
          <h4 class="title-collum">Equipment</h4>
          <p class="data-collumn">${t.equipment}</p>
        </li>
        <li>
          <h4 class="title-collum">Popular</h4>
          <p class="data-collumn">${t.popularity}</p>
        </li>
        <li>
          <h4 class="title-collum">Burned Calories</h4>
          <p class="data-collumn">${t.burnedCalories}/${t.time} min</p>
        </li>
      </ul>
      <hr class="modal-decoration-line" />
      <p class="about-exercise">
        ${t.description}
      </p>
      <div class="button-section-modal">
        <div class="refresh-button-js" data-favorite="${t.favorite}">
          ${fe(t.favorite)}
        </div>
        <button class="add-rating" type="button" style="font-size: 14px;">Give a rating</button>
      </div>`}function pe(t){return`<div class="modal-get-raiting" data-id="${t}">
    <button class="modal-button-close" id="button-close">
      <svg class="close-icon-img" width="20" height="20" aria-label="close-icon">
        <use href="${c}#icon-close"></use>
      </svg>
    </button>
    <div class="get-rating-container">
      <div class="get-rating-choise">
        <h3 class="title-card-get-rating">Rating</h3>
        <div class="rating-container-js rating-container" data-rating="" data-id="">
          <p class="user-rating-js">0</p>
          <span class="star-js" data-value="1"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="2"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="3"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="4"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
          <span class="star-js" data-value="5"><svg class="exercises_btn_start_icon_rating star-js" wirth="15px" height="15px">
              <use xlink:href="${c}#icon-star"></use>
              />
            </svg></span>
        </div>
      <form class="form raiting-form">
        <label class="raiting-form-field">
          <input
            type="Email"
            class="raiting-form-field-input"
            name="user_email"
            placeholder="Email"
            required
          />
        </label>
        <label class="form-comment">
          <textarea
            class="raiting-form-field-comment"
            name="user_comment"
            placeholder="Your comment"
          ></textarea>
        </label>
        <button class="raiting-form-submit" type="submit">Send</button>
      </form>
    </div>
  </div>`}function ge(){const t=document.querySelector(".rating-container-js"),e=t.querySelectorAll(".exercises_btn_start_icon_rating");let s=t.querySelector(".user-rating-js");e.forEach((n,l)=>{n.addEventListener("mouseover",()=>a(l)),n.addEventListener("mouseout",o),n.addEventListener("click",()=>i(l+1))});function a(n){o();for(let l=0;l<=n;l++)e[l].classList.add("hovered"),s.textContent=`${l+1}`}function o(){e.forEach(n=>{const l=t.dataset.rating;n.classList.remove("hovered"),s.textContent=`${l||0}`})}function i(n){t.setAttribute("data-rating",n),e.forEach((l,w)=>{w+1<=n?l.classList.add("selected"):l.classList.remove("selected")})}}let m=[];const h=JSON.parse(localStorage.getItem("favorites"));h!=null&&h.length&&m.push(...h);function ve(t){Z(t),m.push(t),localStorage.setItem("favorites",JSON.stringify(m))}const H=t=>{W(t),m=m.filter(e=>e._id!==t),localStorage.setItem("favorites",JSON.stringify([...m]))};p.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class ye{error(e){p.error({title:"Error",message:e})}success(e){p.success({title:"OK",message:e})}info(e){p.info({title:"Info",message:e})}}const k=new ye,_e=document.querySelector(".filter-list-js");let T="";const be=["BUTTON","svg","use","P"];let C,O,A;async function Ee(t){t.preventDefault();const e=document.querySelector(".modal-get-raiting").dataset.id,a=document.querySelector(".rating-container-js").dataset.rating,o=document.querySelector(".raiting-form-field-input").value,i=document.querySelector(".raiting-form-field-comment").value,n={rate:Number(a),email:o,review:i};d.open();const l=await E.addExercisesRate(e,n);d.close(),l.message?k.error(`${l.message}`):(k.success(`Thank you for your mark - ${n.rate} for ${l.name}`),_.close())}async function we(){const t=document.querySelector(".modal-info").dataset.id;_.close(),_.open(pe(t)),ge(),A=document.querySelector(".raiting-form"),A.addEventListener("submit",Ee)}async function Se(t){const e=document.querySelector(".refresh-button-js"),s=document.querySelector(".modal-info").dataset.id;let o=window.location.href.toString().slice(-14);if(e.dataset.favorite==="false"){e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span class="remote-favorites">Remove from favorites</span>
                                        <svg class="trash-icon-img" width="18" height="18" aria-label="trash-icon">
                                            <use href="${c}#icon-trash"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="true",d.open();let i=await E.getOneExercises(s);d.close(),ve(i),o==="favorites.html"&&y()}else e.innerHTML=`<button class="add-favorite-js" type="button">
                                        <span>Add to favorites</span>
                                        <svg class="heart-icon-img" width="20" height="20" aria-label="heart-icon">
                                            <use href="${c}#icon-heart"></use>
                                        </svg>
                                    </button>`,e.dataset.favorite="false",H(s),o==="favorites.html"&&y()}function Le({target:t}){if(be.includes(t.nodeName)&&t.classList[0]!=="favourites_btn_trash_icon"&&t.classList[0]!=="favourites_btn_workout")return T=t.dataset.id,xe(T);if(t.classList[0]==="favourites_btn_trash_icon"){const e=t.dataset.id;H(e),y()}}_e.addEventListener("click",Le);const xe=async t=>{d.open();let e=await E.getOneExercises(t);d.close();const s=localStorage.getItem("favorites");s!==null&&JSON.parse(s).find(({_id:i})=>i===t)?e.favorite=!0:e.favorite=!1,_.open(he(e)),O=document.querySelector(".refresh-button-js"),C=document.querySelector(".add-rating"),C.addEventListener("click",we),O.addEventListener("click",Se)};export{f as a,ue as c,E as f,d as l,k as m,c as s};
//# sourceMappingURL=exercises-right-part-filter-442aab8f.js.map
