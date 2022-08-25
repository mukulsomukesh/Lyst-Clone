// import React from 'react';

// document.querySelector('.owl-carousel').owlCarousel({
//     loop:false,
//     margin:10,
//     responsiveClass:true,
// 				dots: false,
// 				lazyLoad : true,
//     responsive:{
//         0:{
//             items:2,
//             nav:false,
// 												dots:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
// 								900:{
//             items:4,
//             nav:false
//         },
//         1200:{
//             items:5,
//             nav:false,
//         },
//     }
// })

// // const slider = document.querySelector('.scrolling-wrapper');
// // let isDown = false;
// // let startX;
// // let scrollLeft;

// // slider.addEventListener('mousedown', (e) => {
// //   let rect = slider.getBoundingClientRect();
// //   isDown = true;
// //   slider.classList.add('active');
// //   // Get initial mouse position
// //   startX = e.pageX - rect.left;
// //   // Get initial scroll position in pixels from left
// //   scrollLeft = slider.scrollLeft;
// //   console.log(startX, scrollLeft);
// // });

// // slider.addEventListener('mouseleave', () => {
// //   isDown = false;
// //   slider.dataset.dragging = false;
// //   slider.classList.remove('active');
// // });

// // slider.addEventListener('mouseup', () => {
// //   isDown = false;
// //   slider.dataset.dragging = false;
// //   slider.classList.remove('active');
// // });

// // slider.addEventListener('mousemove', (e) => {
// //   if (!isDown) return;
// //   let rect = slider.getBoundingClientRect();
// //   e.preventDefault();
// //   slider.dataset.dragging = true;
// //   // Get new mouse position
// //   const x = e.pageX - rect.left;
// //   // Get distance mouse has moved (new mouse position minus initial mouse position)
// //   const walk = (x - startX);
// //   // Update scroll position of slider from left (amount mouse has moved minus initial scroll position)
// //   slider.scrollLeft = scrollLeft - walk;
// //   console.log(x, walk, slider.scrollLeft);
// // });