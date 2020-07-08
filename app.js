var menuBtn=document.querySelector('.hamburger');
var menu=document.querySelector('.menu')
var closeBtn=document.querySelector('.close-btn')
menuBtn.addEventListener('click',()=>{
    menu.style.display='block';
    menuBtn.style.display="none";
    closeBtn.style.display='block';
})
closeBtn.addEventListener('click',()=>{
    menu.style.display='none';
    menuBtn.style.display="block";
    closeBtn.style.display='none';

})