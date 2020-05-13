'use strict';

let burger5 = document.getElementById('burger5');
let links = document.getElementsByClassName('header-menu-list-item-link');
let menu = document.getElementById('header-menu');

burger5.addEventListener('click', () => {
  
  burger5.classList.toggle('burger5rotate');
  burger5.classList.toggle('burger5rotate2');
  menu.classList.toggle('header-menu__hide');
  menu.classList.toggle('header-menu__hide2');
  
  for(let link = 0; link < links.length; link++) {
    
    links[link].classList.toggle('header-menu-list-item-link__hide2');
    links[link].classList.toggle('header-menu-list-item-link__hide');
  }

});