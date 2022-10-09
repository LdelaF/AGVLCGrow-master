
/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//Animacion TimeLine--------------------------------


document.addEventListener('scroll', () => {
    
    const panel1 = document.querySelector('#lista1');
    const panel2 = document.querySelector('#lista2');
    const panel3 = document.querySelector('#lista3');
    const panel4 = document.querySelector('#lista4');

    const screenSize = window.innerHeight;


    if (panel1.getBoundingClientRect().top < screenSize){

        lista1.classList.add('animate__animated', 'animate__fadeInLeft');
    
    } else {
    lista1.classList.remove('animate__animated', 'animate__fadeInLeft');
  };


    /*if (panel2.getBoundingClientRect().top < screenSize){

        lista2.classList.add('animate__animated', 'animate__fadeInRight');
    } else {
        lista2.classList.remove('animate__animated', 'animate__fadeInRight');
      };*/


    if (panel3.getBoundingClientRect().top < screenSize){

        lista3.classList.add('animate__animated', 'animate__fadeInLeft');
    } else {
        lista3.classList.remove('animate__animated', 'animate__fadeInLeft');
      };


   /* if (panel4.getBoundingClientRect().top < screenSize){

        lista4.classList.add('animate__animated', 'animate__fadeInRight');
    } else {
        lista4.classList.remove('animate__animated', 'animate__fadeInRight');
      };*/
    

});
