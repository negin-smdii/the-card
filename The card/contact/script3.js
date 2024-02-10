let menuBtn=document.querySelector('.menu');
let submenu=document.querySelector('.submenu');
let submitBtn=document.querySelector('.btn');
let aboutTab=document.querySelector('.about');
let introTab=document.querySelector('.intro');
let contactTab=document.querySelector('.contact');
menuBtn.addEventListener('click',function(){
    submenu.style.cssText='display:block;';
    submenu.classList.toggle('show');
      if(submenu.className.includes('show'))
      {
        submenu.style.cssText='display:block;';
      }
      else
      {
        submenu.style.cssText='display:none;';
      }
})
submitBtn.addEventListener('click',function(){
    window.location.href='file:///C:/Users/Negin/Desktop/Projects/The%20card/index.html';
})
aboutTab.addEventListener('click',function(){
    window.location.href='file:///C:/Users/Negin/Desktop/Projects/The%20card/about/about.html';
  })
  contactTab.addEventListener('click',function(){
    window.location.href=location.href;
  })
  introTab.addEventListener('click',function(){
    window.location.href='file:///C:/Users/Negin/Desktop/Projects/The%20card/index.html';
  })