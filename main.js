"use strict";

let bread = $('.bread');
let txt = $('.txt');

txt.hide();
 
bread.hover(
  function () {
    txt = $(this).find('div');
    txt.stop().fadeIn(200);
  },
  function () {
    txt.stop().fadeOut(200);
  });


let navItem = $('.footer-nav-item');
let line = $('.footer-nav-item-line');

navItem.hover(
  function () {
    line = $(this).find('span');
    line.toggleClass('active');
});


