document.addEventListener('DOMContentLoaded', function () {

  let header = document.querySelector('.container-header');
  let burger = document.querySelector('.burger');
  let burgerLines = document.querySelector('.burger__lines');
  let mainLogo = document.querySelector('.logo');
  let openLogo = document.querySelector('.logo--white');
  let mobileNav = window.matchMedia('(max-width: 850px)');

  burger.addEventListener('click', () => {
    burgerLines.classList.toggle('burger__lines--open');
    header.classList.toggle('container-header--open');
    mainLogo.classList.toggle('dsp-n');
    openLogo.classList.toggle('dsp-b');
    if(mobileNav.matches){
      header.classList.toggle('container-header--mobile');
    }
  })

 });


