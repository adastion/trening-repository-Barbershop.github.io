!function(){const e=document.querySelector(".header__burger"),t=document.querySelector(".header__nav");e.addEventListener("click",(function(){t.classList.toggle("header__nav--active")}))}(),function(){const e=document.querySelector("#loginBtn"),t=document.querySelector("#loginModal"),c=document.querySelector(".footer__link"),o=document.querySelector("#mapModal"),l=document.querySelectorAll(".modal__close");e.addEventListener("click",(()=>{t.classList.add("modal--active")})),c.addEventListener("click",(e=>{e.preventDefault(),o.classList.add("modal--active")})),l[0].addEventListener("click",(()=>{t.classList.remove("modal--active")})),l[1].addEventListener("click",(()=>{o.classList.remove("modal--active")}))}();