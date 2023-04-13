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

const popup = document.querySelectorAll('.big-btn');

const doc = document.createElement('div');
doc.setAttribute('id', 'popup_window');

const header = document.querySelector('.header');
const mainSection = document.querySelector('.main-section');
const works = document.querySelector('.works');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

for (let i = 0; i < popup.length; i += 1) {
  popup[i].addEventListener('click', () => {
    const cardid = document.querySelectorAll('.cards')[i].id;

    header.classList.add('all');
    mainSection.classList.add('all');
    works.classList.add('all');
    about.classList.add('all');
    contact.classList.add('all');

    const projects = [
      {
        id: 1,
        key: 'one1',
        heading: 'Tonic',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot.png',
        alt: 'Tonic project',
        para1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        para2: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'bootstrap',
          li5: 'query',
          li6: 'react.js',
        },
      },

      {
        id: 2,
        key: 'two2',
        heading: 'Multipost',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot2.png',
        alt: 'Multipost project',
        para1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        para2: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'bootstrap',
          li5: 'query',
          li6: 'react.js',
        },
      },

      {
        id: 3,
        key: 'three3',
        heading: 'Tonic',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot3.png',
        alt: 'Tonic project',
        para1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        para2: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'bootstrap',
          li5: 'query',
          li6: 'react.js',
        },
      },

      {
        id: 4,
        key: 'four4',
        heading: 'Gateway',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot4.png',
        alt: 'gateway project',
        para1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        para2: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'bootstrap',
          li5: 'query',
          li6: 'react.js',
        },
      },
    ];

    projects.forEach((value, index) => {
      // console.log(value.key , index)
      if (value.key === cardid) {
        doc.innerHTML = `<div class="popup">
        <button id="pop-close">&times;</button>
        <div class="">
          <h2 class="title1"> ${projects[index].heading}</h2>
          <ul class="frame1" id="pop-frame">
            <li class="A Li">${projects[index].frame.li1}</li>
            <li class="BC Li">
              <i class="bi bi-circle-fill icon"></i> ${projects[index].frame.li2}
            </li>
            <li class="BC Li"><i class="bi bi-circle-fill icon"></i> ${projects[index].frame.li3}</li>
          </ul>
          <img
            class="card-img"
            id="pop-img"
            src=${projects[index].img}
            alt=${projects[index].alt}
          />
        </div>
        <div class="pop-box1">
          <p class="pop-para">
          ${projects[index].para1}
          <br>
          <br>
          ${projects[index].para1}
          </p>
          <div class="small-box">
            <ul class="box2-ul pop-ul">
              <li class="box2-li pop-li">${projects[index].language.li1}</li>
              <li class="box2-li pop-li">${projects[index].language.li2}</li>
              <li class="box2-li pop-li">${projects[index].language.li3}</li>
              </ul>
              <ul class="box2-ul pop-ul">
              <li class="box2-li pop-li">${projects[index].language.li4}</li>
              <li class="box2-li pop-li">${projects[index].language.li5}</li>
              <li class="box2-li pop-li">${projects[index].language.li6}</li>
            </ul>
            <div class="pop-buttons">
              <button class="big-btn btn_btn pop-btn">See Live  <i class="bi bi-arrow-up-right-circle-fill"></i> </button>
              <button class="big-btn btn_btn pop-btn">See source  <i class="bi bi-github"></i> </button>
            </div>
          </div>
        </div>
        </div>`;
      }
    });

    // console.log(projects[0].id)
    // console.log(projects[0].key)
    // console.log(projects[0].heading)
    // console.log(projects[0].frame.li1)
    // console.log(projects[0].frame.li2)
    // console.log(projects[0].frame.li3)
    // console.log(projects[0].img)
    // console.log(projects[0].alt)
    // console.log(projects[0].para)
    // console.log(projects[0].language.li1)
    // console.log(projects[0].language.li2)
    // console.log(projects[0].language.li3)
    // console.log(projects[0].language.li4)
    // console.log(projects[0].language.li5)
    // console.log(projects[0].language.li6)

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