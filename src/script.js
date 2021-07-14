'use strict';

window.addEventListener('DOMContentLoaded', runScript);

function runScript() {
  const navItems = document.querySelectorAll('nav ul li');

  navItems.forEach( item => item.addEventListener('click', e => changeStyles(e)) );

  function changeStyles(event) {
    const target = event.currentTarget,
          sections = document.querySelectorAll('section');

    navItems.forEach( item => {
      item.classList.remove('active-nav-elem');
    });

    sections.forEach( item => {
      item.classList.remove('active-block');

      if (item.id === target.dataset.id ) {
        item.classList.add('active-block');
      }
    });

    if (target.dataset.id != 'reset') {
      target.classList.add('active-nav-elem');
    }
  }
}