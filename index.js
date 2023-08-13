/// ////////    Main-menu    //////////////

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

/// //////// pop up window  ///////////////////

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
        key: 'NextView',
        heading: 'NextView',

        frame: { li1: 'React', li2: 'Front End Dev', li3: '2023' },

        img: 'images/project-img/NextView.png',
        alt: 'Next View',
        para1:
          "This project utilizes 'tvmaze' API to fetch data and show cards, along with another API to retrieve and update likes and comments.",
        para2:
          'The application provides an intuitive interface where users can easily interact with the content and express their preferences by liking specific items. Additionally, users have the ability to leave comments, enabling them to engage in discussions and share their thoughts. ',
        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'Jest',
          li5: 'WebPack',
          li6: 'Github',
        },

        link: 'https://ankitt26.github.io/Second-Capstone-project/dist/',
        code: 'https://github.com/ankitt26/Second-Capstone-project',
      },
      {
        id: 2,
        key: 'CryptoPlace',
        heading: 'CryptoPlace',

        frame: { li1: 'React', li2: 'Front End Dev', li3: '2023' },

        img: 'images/project-img/Crypto.png',
        alt: 'CryptoPlace',
        para1:
          'Crypto-Place is a SPA ,in this project we are fetching the cryptocurrency data from the API, user can see the live data of crypyocurrency and also use search for a specific coin.',
        para2:
          ' Coingecko API is used to fetch data, user can search different crypto currency in the app and get detail for particular coin . ',

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'React.js',
          li5: 'Redux',
          li6: 'Github',
        },

        link: 'https://ankitt26k-crypto-place.onrender.com/',
        code: 'https://github.com/ankitt26/crypto-place',
      },

      {
        id: 3,
        key: 'Math-magician',
        heading: 'Math Magicians',

        frame: { li1: 'React', li2: 'Front End Dev', li3: '2023' },

        img: 'images/project-img/Math-magicians.png',
        alt: 'Math-magicians',
        para1:
          'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
        para2:
          'Math Magician is a web application or software program designed to help users improve their math skills and enhance their mental calculation abilities. It provides a platform for practicing various mathematical operations such as addition, subtraction, multiplication, and division. ',

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'React.js',
          li5: 'jest',
          li6: 'Github',
        },

        link: 'https://math-magician-ankitt26.onrender.com/',
        code: 'https://github.com/ankitt26/Math-magicians',
      },

      {
        id: 5,
        key: 'todo-list',
        heading: 'To-do-List',

        frame: { li1: 'CANOPY', li2: 'Front End Dev', li3: '2023' },

        img: 'images/todo-2.png',
        alt: 'Todo Project project',
        para1:
          'A todo app is a software application that allows users to create and manage lists of tasks or activities they need to complete. Users can create new tasks, set deadlines, assign priorities, and organize them into categories or projects. ',
        para2:
          ' The app can also provide features such as reminders, notifications, and progress tracking to help users stay on top of their tasks and complete them efficiently. Todo apps can be used for personal productivity, team collaboration, project management, or any other situation where task management is required.',

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'Github',
          li5: 'Bootstrap',
          li6: 'react.js',
        },

        link: 'https://ankitt26.github.io/To-do-list/dist/',
        code: 'https://github.com/ankitt26/To-do-list',
      },

      {
        id: 6,
        key: 'two2',
        heading: 'Multipost',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot2.png',
        alt: 'Multipost project',
        para1:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        para2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'bootstrap',
          li5: 'query',
          li6: 'react.js',
        },

        link: 'https://ankitt26.github.io/Portfolio-setup/',
        code: 'https://github.com/ankitt26/Portfolio-setup',
      },

      {
        id: 7,
        key: 'three3',
        heading: 'Tonic',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot3.png',
        alt: 'Tonic project',
        para1:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        para2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'bootstrap',
          li5: 'query',
          li6: 'react.js',
        },

        link: 'https://ankitt26.github.io/Portfolio-setup/',
        code: 'https://github.com/ankitt26/Portfolio-setup',
      },

      {
        id: 8,
        key: 'four4',
        heading: 'Gateway',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot4.png',
        alt: 'gateway project',
        para1:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        para2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",

        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'bootstrap',
          li5: 'query',
          li6: 'react.js',
        },

        link: 'https://ankitt26.github.io/Portfolio-setup/',
        code: 'https://github.com/ankitt26/Portfolio-setup',
      },
    ];

    projects.forEach((value, index) => {
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
          ${projects[index].para2}
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
            <a href=${value.link}><button class="big-btn btn_btn pop-btn">See Live  <i class="bi bi-arrow-up-right-circle-fill"></i> </button></a>
            <a href=${value.code}> <button class="big-btn btn_btn pop-btn">See source  <i class="bi bi-github"></i> </button></a>
            </div>
          </div>
        </div>
        </div>`;
      }
    });

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

// form validation

const form = document.querySelector('form');
const submit = document.querySelector('.contact_button');
const errordiv = document.getElementById('error-div');

submit.addEventListener('click', (event) => {
  if (form.email.value !== form.email.value.toLowerCase()) {
    errordiv.innerHTML = '  <p class="error-message">! error: email must be in lower case </p>';
    event.preventDefault();
  } else {
    errordiv.innerHTML = '';
  }
});

// local storage //

const get = localStorage.getItem('store');

if (get != null) {
  const obj1 = JSON.parse(get);
  form.name.value = obj1.cName;
  form.email.value = obj1.cEmail;
  form.message.value = obj1.cMessage;
}

form.addEventListener('keypress', () => {
  const obj = {
    cName: form.name.value,
    cEmail: form.email.value,
    cMessage: form.message.value,
  };

  const contactStorage = JSON.stringify(obj);
  localStorage.setItem('store', contactStorage);
});
