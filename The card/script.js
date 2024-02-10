let menuBtn=document.querySelector('.menu');
let submenu=document.querySelector('.submenu');
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
aboutTab.addEventListener('click',function(){
  window.location.href='file:///C:/Users/Negin/Desktop/Projects/The%20card/about/about.html';
})
contactTab.addEventListener('click',function(){
  window.location.href='file:///C:/Users/Negin/Desktop/Projects/The%20card/contact/contact.html';
})
introTab.addEventListener('click',function(){
  window.location.href=location.href;
})