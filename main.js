(()=>{"use strict";const e=function(e,t){for(let r=0;r<100;r++){const o=document.createElement("div");o.classList.add("cell"),o.dataset.id=r,e.appendChild(o),t.push(o)}};document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".grid-user"),r=document.querySelector(".grid-cpu");document.querySelector(".ship-display"),document.querySelectorAll(".ship"),document.querySelectorAll(".carrier-container"),document.querySelectorAll(".battleship-container"),document.querySelectorAll(".cruiser-container"),document.querySelectorAll(".submarine-container"),document.querySelectorAll(".destroyer-container"),document.querySelector("#start"),document.querySelector("#rotate"),document.querySelector("#turn"),document.querySelector("#game-status");let o=[];e(t,[]),e(r,o);const c=[{name:"carrier",directions:[[0,1,2,3,4],[0,10,20,30,40]]},{name:"battleship",directions:[[0,1,2,3],[0,10,20,30]]},{name:"submarine",directions:[[0,1,2],[0,10,20]]},{name:"cruiser",directions:[[0,1,2],[0,10,20]]},{name:"destroyer",directions:[[0,1],[0,10]]}];function n(e){let t=Math.floor(Math.random()*e.directions.length),r=e.directions[t];const c=0===t?1:10;let i=Math.floor(Math.random()*o.length-e.directions[0].length*c);const s=r.some((e=>o[i+e].classList.contains("occupied"))),d=r.some((e=>(i+e)%10==9)),l=r.some((e=>(i+e)%10==0));s||d||l?n(e):r.forEach((t=>o[i+t].classList.add("occupied",e.name)))}n(c[0]),n(c[1]),n(c[2]),n(c[3]),n(c[4])}))})();