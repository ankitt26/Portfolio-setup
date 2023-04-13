const union = document.querySelector('.union');
const navbar = document.querySelector('.top_navbar');
const logo = document.querySelector('#logo');
const main = document.querySelector('.main-section');

union.addEventListener('click', () => {
  const cross = document.createElement('li');
  cross.id = 'cross';
  cross.innerHTML = '×';

  navbar.classList.add('mobile-menu');
  logo.classList.add('all');
  main.classList.add('all');
  union.classList.add('img_remove');
  navbar.prepend(cross);

  const cross2 = document.querySelector('#cross');
  cross2.addEventListener('click', () => {
    // alert("go for it");
    navbar.classList.remove('mobile-menu');
    logo.classList.remove('all');
    main.classList.remove('all');
    union.classList.remove('img_remove');
    cross2.remove();
  });
  navbar.addEventListener('click', () => {
    navbar.classList.remove('mobile-menu');
    logo.classList.remove('all');
    main.classList.remove('all');
    union.classList.remove('img_remove');
    cross2.remove();
  });
});

//  pop up window day-2

const popup = document.querySelectorAll('.big-btn');

const doc = document.createElement('div');
doc.setAttribute('id', 'popup_window');

doc.innerHTML = `<div class="popup">
<button id="pop-close">x</button>
<div class="">
  <h2 class="title1">Tonic</h2>
  <ul class="frame1" id="pop-frame">
    <li class="A Li">CANOPY</li>
    <li class="BC Li">
      <i class="bi bi-circle-fill icon"></i> Back End dev
    </li>
    <li class="BC Li"><i class="bi bi-circle-fill icon"></i> 2019</li>
  </ul>
  <img
    class="card-img"
    id="pop-img"
    src="images/Snapshoot3.png"
    alt="Tonic project"
  />
</div>
<div class="pop-box1">
  <p class="pop-para">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti
    nisi sit neque minus est voluptate, repudiandae accusantium voluptatem
    sint atque illum pariatur? Animi magni mollitia quaerat ad atque sint
    beatae omnis, harum minima consequatur accusantium repudiandae facilis
    consectetur vel, fugit itaque adipisci aut veritatis ullam expedita
    alias odit suscipit incidunt! Tenetur officia inventore iure
    temporibus dolores quae omnis ipsa quis doloremque, expedita debitis
    hic nesciunt consequatur quia, voluptatibus voluptatem! Repellendus,
    molestiae ullam aperiam iste praesentium autem nostrum voluptate
    quidem maxime reiciendis in totam, nulla perferendis rerum soluta
    fugit omnis. Reiciendis, tempora. Eaque ipsa debitis tempore provident
    quas tempora soluta.
  </p>
  <div class="small-box">
    <ul class="box2-ul pop-ul">
      <li class="box2-li pop-li">HTML</li>
      <li class="box2-li pop-li">Css</li>
      <li class="box2-li pop-li">JavaScript</li>
      <li class="box2-li pop-li">HTML</li>
      <li class="box2-li pop-li">Css</li>
      <li class="box2-li pop-li">JavaScript</li>
    </ul>
    <div class="pop-buttons">
      <button class="big-btn btn_btn">See Live</button>
      <button class="big-btn btn_btn pop-btn">See source</button>
    </div>
  </div>
</div>
</div>`;

// function blur() {
//   const header = document.querySelector(".header");
//   const mainSection = document.querySelector(".main-section");
//   const works = document.querySelector(".works");
//   const about = document.querySelector("#about");
//   const contact = document.querySelector("#contact");

// header.classList.toggle("all");
// mainSection.classList.toggle("all");
// works.classList.toggle("all");
// about.classList.toggle("all");
// contact.classList.toggle("all");
// }

const header = document.querySelector('.header');
const mainSection = document.querySelector('.main-section');
const works = document.querySelector('.works');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

for (let i = 0; i < popup.length; i++) {
  popup[i].addEventListener('click', () => {
    header.classList.add('all');
    mainSection.classList.add('all');
    works.classList.add('all');
    about.classList.add('all');
    contact.classList.add('all');

    document.body.prepend(doc);

    const popclose = document.body.querySelector('#pop-close');
    popclose.addEventListener('click', () => {
      header.classList.remove('all');
      mainSection.classList.remove('all');
      works.classList.remove('all');
      about.classList.remove('all');
      contact.classList.remove('all');
      doc.remove();
    });
  });
}
