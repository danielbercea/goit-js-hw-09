!function(){let t=document.querySelector("body"),e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");a.disabled=!0;let d=null,o={DELAY:1e3,getRandomHexColor:()=>`#${Math.floor(16777215*Math.random()).toString(16)}`,interval(){d=setInterval(()=>{t.style.backgroundColor=`${o.getRandomHexColor()}`},this.DELAY),a.disabled=!1},start(){e.addEventListener("click",()=>{this.interval(),e.disabled=!0,a.disabled=!1}),a.addEventListener("click",this.stop)},stop(){clearInterval(d),a.disabled=!0,e.disabled=!1}};o.start()}();//# sourceMappingURL=01-color-switcher.1caa9527.js.map

//# sourceMappingURL=01-color-switcher.1caa9527.js.map
