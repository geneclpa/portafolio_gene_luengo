'use strict';

/*  Menu  */
((d) => {

    const $btn_menu = d.querySelector('.menu_btn'),
        $menu = d.querySelector('.menu');

    $btn_menu.addEventListener('click', (e) => {
        $btn_menu.firstElementChild.classList.toggle('none');
        $btn_menu.lastElementChild.classList.toggle('none');

        $menu.classList.toggle('is_active');
    });

    d.addEventListener('click', (e) => {
        if(!e.target.matches('.menu a')) return false;

        $btn_menu.firstElementChild.classList.remove('none');
        $btn_menu.lastElementChild.classList.add('none');

        $menu.classList.remove('is_active');
    });

})(document);