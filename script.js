//import { format } from 'prettier';

window.onload = function() {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
  });

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 4) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  var menBtn = document.querySelector('#menu-men');
  var womenBtn = document.querySelector('#menu-women');
  var kidBtn = document.querySelector('#menu-kids');
  var menItems = document.querySelector('.men');
  var womenItems = document.querySelector('.women');
  var kidsItems = document.querySelector('.kids');
  // Menu button
  menBtn.addEventListener('click', function() {
    if (menItems.classList.contains('hidden')) {
      menItems.classList.remove('hidden');
    }
    womenItems.classList.add('hidden');
    kidsItems.classList.add('hidden');
  });

  womenBtn.addEventListener('click', function() {
    if (womenItems.classList.contains('hidden')) {
      womenItems.classList.remove('hidden');
    }
    menItems.classList.add('hidden');
    kidsItems.classList.add('hidden');
  });

  kidBtn.addEventListener('click', function() {
    if (kidsItems.classList.contains('hidden')) {
      kidsItems.classList.remove('hidden');
    }
    womenItems.classList.add('hidden');
    menItems.classList.add('hidden');
  });
  // Display Order-number input
  var ele = document.querySelector('.input-problems');
  ele.addEventListener('change', () => {
    var order = document.querySelector('.order');
    if (ele.value === 'order-problem') {
      order.classList.remove('hidden');
    } else {
      order.classList.add('hidden');
    }
  });
  // form on submit
  const form = document.querySelector('#appointed-form');
  form.onsubmit = function(event) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
  };
};
