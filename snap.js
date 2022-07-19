let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.section .topmost .header');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   header.classList.toggle('active');
}

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   header.classList.remove('active');
}
