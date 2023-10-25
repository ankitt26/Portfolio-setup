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
          'Math magicians is a SPA for all fans of mathematics. It allows users to: Make simple calculations. Read a random math-related quote.',
        para2:
          ' It is designed to help users improve their math skills and enhance their mental calculation abilities. It provides a platform for practicing various mathematical operations such as addition, subtraction, multiplication, and division. ',

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
        id: 4,
        key: 'Space',
        heading: 'Space Travelers',

        frame: { li1: 'RESEARCH', li2: 'Front End Dev', li3: '2023' },

        img: 'images/project-img/space.png',
        alt: 'Space-Travelers-Hub',
        para1:
        '\'The Space Travelers\' Hub consists of Rockets, Missions, and the My Profile section. we will be working with the real live data from the SpaceX API.',
        para2:
        'We build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'React.js',
          li5: 'Redux',
          li6: 'jest test',
        },

        link: 'https://ankitt-26k-space-travelers-hub.onrender.com/',
        code: 'https://github.com/ankitt26/Space-Travelers-Hub',
      },

      {
        id: 5,
        key: 'Quill-pen',
        heading: 'Quill pen',

        frame: { li1: 'SOFTWARE', li2: 'Front End Dev', li3: '2023' },

        img: 'images/project-img/quill-pen.png',
        alt: 'CryptoPlace',
        para1:
        'Learn complete Full stack Web development with React and Node by doing it the way a full-stack professional would do it.',
        para2:
        'Learn how to create whole web apps from start to finish with one of the most trending tech stacks available. You can learn how to create data-driven applications, as well as how to test, protect, and deploy your code, in this thorough study path.',
        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'Git',
          li5: 'Github',
          li6: '',
        },

        link: 'https://ankitt26.github.io/First-Capstone-project/index.html',
        code: 'https://github.com/ankitt26/First-Capstone-project',
      },

      {
        id: 6,
        key: 'bookstore',
        heading: 'Bookstore',

        frame: { li1: 'SOFTWARE', li2: 'Front End Dev', li3: '2023' },

        img: 'images/project-img/Bookstore.png',
        alt: 'Bookstore',
        para1:
        'With Bookstore, organizing your book collection becomes a breeze. You can effortlessly categorize your books, keep track of their availability, and share your catalog with friends and fellow book enthusiasts',
        para2:
        'Bookstore also offers advanced search and sorting options, making it easy to find specific titles or genres within your collection. Whether you\'re a book collector or a small library owner, Bookstore is your ultimate tool for efficient book management.',
        language: {
          li1: 'HTML',
          li2: 'CSS',
          li3: 'React',
          li4: 'Redux',
          li5: 'Github',
          li6: '',
        },

        link: 'https://bookstore-ankitt26k.onrender.com/',
        code: 'https://github.com/ankitt26/Bookstore',
      },

      {
        id: 7,
        key: 'tindog',
        heading: 'Tindog',

        frame: { li1: 'SOFTWARE', li2: 'Front End Dev', li3: '2022' },

        img: 'images/project-img/Tindog.png',
        alt: 'Tindog',
        para1:
        'Experience the perfect platform to forge connections and share your love for dogs. Our app not only helps you find potential matches but also offers a vibrant community where you can exchange tips, stories, and arrange dog-friendly meetups.',
        para2:
        'Tindog is more than just a dating app; it\'s a social hub for the canine-obsessed. Whether you\'re looking for a new four-legged friend for your furry companion or seeking love with a fellow dog enthusiast, Tindog brings the dog-loving community together in one paw-sitively fun space.',
        language: {
          li1: 'HTML',
          li2: 'Css',
          li3: 'JavaScript',
          li4: 'Git',
          li5: 'Github',
          li6: '',
        },

        link: 'https://ankitt26.github.io/TindogbyA/',
        code: 'https://github.com/ankitt26/TindogbyA',
      },

      {
        id: 8,
        key: 'todo-list',
        heading: 'To-do-List',

        frame: { li1: 'CANOPY', li2: 'Front End Dev', li3: '2023' },

        img: 'images/to-do4.png',
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
        id: 9,
        key: 'Health-book',
        heading: 'Health-book',

        frame: {  li1: 'Capstone', li2: 'Full Stack Dev', li3: '2023' },

        img: 'images/project-img/health-book.png',
        alt: 'health book',
        para1:
          "Health-Book is a software application for making appointments with doctors for a specific date and time duration at the lowest fees.",
        para2:
          'The application provides an intuitive interface where users can easily interact with the content and express their preferences by creating Appointment with specific doctors with different diversity. Additionally, users have the ability to see and create Many Appointments, Appointments and Facilities Fees may vary doctor by doctor ',
        language: {
          li1: 'React',
          li2: 'Redux',
          li3: 'Ruby on Rails',
          li4: 'Jest',
          li5: 'HTML/CSS',
          li6: 'PostgreSQL',
        },

        link: 'https://health-book-doc.onrender.com/',
        code: 'https://github.com/ankitt26/Doctors_Appointment_Backend',
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
