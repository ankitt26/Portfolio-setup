const union = document.querySelector('.union');
const navbar = document.querySelector('.top_navbar');
const logo = document.querySelector('#logo');
const main = document.querySelector('.main-section');

union.addEventListener('click', () => {
  // alert("javascript working");

  const cross = document.createElement('li');
  cross.id = 'cross';
  cross.innerHTML = '×';

  navbar.classList.add('mobile-menu');
  logo.classList.add('mobile-back');
  main.classList.add('mobile-back');
  union.classList.add('img_remove');
  navbar.prepend(cross);

  const cross2 = document.querySelector('#cross');
  cross2.addEventListener('click', () => {
    // alert("go for it");
    navbar.classList.remove('mobile-menu');
    logo.classList.remove('mobile-back');
    main.classList.remove('mobile-back');
    union.classList.remove('img_remove');
    cross2.remove();
  });
});
