const work = document.querySelector('.works');
const allCards = [

  {
    id: 'Health-book',
    img: 'images/project-img/healthbook.png',
    alt: 'Health book',
    Name: 'Health Book',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'Capstone', li2: 'Full Stack Dev', li3: '2023' },
    para: 'Health-Book is a software application for making appointments with doctors for a specific date and time duration at the lowest fees.',
    language: {
      li1: 'React',
      li2: 'PostgreSQL',
      li3: 'Ruby on Rails',
    },
  },

  {
    id: 'SaveIt',
    img: 'images/project-img/saveit.png',
    alt: 'Saveit',
    Name: 'SaveIt',
    block1: '',
    block2: '',
    frame: { li1: 'Capstone', li2: 'Full Stack Dev', li3: '2023' },
    para: 'SaveIt app is a mobile web application where you can manage your budget, manage list of transactions associated with a category and money they spent.',
    language: {
      li1: 'ERB',
      li2: 'PostgreSQL',
      li3: 'Ruby on Rails',
    },
  },

  {
    id: 'Recipe-app',
    img: 'images/project-img/Recipe-app.png',
    alt: 'Recipe app',
    Name: 'Recipe app',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'Capstone', li2: 'Full Stack Dev', li3: '2023' },
    para: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. Create recipes, and generate a shopping list.',
    language: {
      li1: 'ERB',
      li2: 'PostgreSQL',
      li3: 'Ruby on Rails',
    },
  },

  {
    id: 'NextView',
    img: 'images/project-img/NextView.png',
    alt: 'Next View',
    Name: 'Next View',
    block1: '',
    block2: '',
    frame: { li1: 'Javascript', li2: 'Front End Dev', li3: '2023' },
    para: 'This project utilizes \'tvmaze\' API to fetch data and show cards, along with another API to retrieve and update likes and comments.',
    language: {
      li1: 'Javascript',
      li2: 'HTML/CSS',
      li3: 'Jest',
    },
  },

  {
    id: 'CryptoPlace',
    img: 'images/project-img/Crypto.png',
    alt: 'Crypto Place',
    Name: 'Crypto Place',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'React', li2: 'Front End Dev', li3: '2023' },
    para: 'Crypto-Place is a SPA ,in this project we are fetching the cryptocurrency data from the API, user can see the live details and search for a specific coin.',
    language: {
      li1: 'React/Redux',
      li2: 'JavaScript',
      li3: 'Jest',
    },
  },

  {
    id: 'Math-magician',
    img: 'images/project-img/Math-magicians.png',
    alt: 'Math-magicians',
    Name: 'Math Magicians',
    block1: '',
    block2: '',
    frame: { li1: 'MATHS', li2: 'Front End Dev', li3: '2023' },
    para: 'Math magicians is a (SPA) for all fans of mathematics. It allows users to: Make simple calculations. Read a random math-related quote.',
    language: {
      li1: 'React.js',
      li2: 'HTML',
      li3: 'CSS',
    },
  },

  {
    id: 'Space',
    img: 'images/project-img/space.png',
    alt: 'Space-Travelers-Hub',
    Name: 'Space Travelers',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'RESEARCH', li2: 'Front End Dev', li3: '2023' },
    para: '\'The Space Travelers\' Hub consists of Rockets, Missions, and the My Profile section. we will be working with the real live data from the SpaceX API.',
    language: {
      li1: 'React.js',
      li2: 'Redux',
      li3: 'HTML/CSS',
    },
  },

  {
    id: 'Quill-pen',
    img: 'images/project-img/quill-pen.png',
    alt: 'Quill pen',
    Name: 'Quill pen',
    block1: '',
    block2: '',
    frame: { li1: 'SOFTWARE', li2: 'Front End Dev', li3: '2023' },
    para: 'Learn complete Full stack Web development with React and Node by doing it the way a full-stack professional would do it.',
    language: {
      li1: 'HTML',
      li2: 'CSS',
      li3: 'JavaScript',
    },
  },

  {
    id: 'bookstore',
    img: 'images/project-img/Bookstore.png',
    alt: 'Book Store',
    Name: 'Bookstore',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'SOFTWARE', li2: 'Front End Dev', li3: '2023' },
    para: 'A web application designed to facilitate book management, with features for adding, removing, and displaying a catalog of books.',
    language: {
      li1: 'React',
      li2: 'Redux',
      li3: 'HTML/CSS',
    },
  },

  {
    id: 'tindog',
    img: 'images/project-img/Tindog.png',
    alt: 'tindog',
    Name: 'Tindog',
    block1: '',
    block2: '',
    frame: { li1: 'SOFTWARE', li2: 'Front End Dev', li3: '2023' },
    para: 'A software application that similar to Tinder, for Connecting with Fellow Dog Lovers - Where Canine Enthusiasts Meet, Match, and Mingle! ',
    language: {
      li1: 'HTML',
      li2: 'Css',
      li3: 'JavaScript',
    },
  },

  {
    id: 'todo-list',
    img: 'images/to-do4.png',
    alt: 'Todo project',
    Name: 'To do list',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'CANOPY', li2: 'Front End Dev', li3: '2023' },
    para: ' A todo app is a software application that allows users to create and manage lists of tasks or activities they need to complete. ',
    language: {
      li1: 'HTML',
      li2: 'Css',
      li3: 'JavaScript',
    },
  },
];

allCards.forEach((value) => {
  const cardd = document.createElement('div');
  cardd.classList.add('cards');
  cardd.id = value.id;

  cardd.innerHTML = `
   <div class="block1 ${value.block1}">
          <img
            class="card-img"
            src=${value.img}
            alt=${value.alt}
          />
        </div>
        <div class="block2  ${value.block2}">
          <div class="box1">
            <h2 class="title1">${value.Name}</h2>
            <ul class="frame1">
              <li class="A Li">${value.frame.li1}</li>
              <li class="BC Li">
                <i class="bi bi-circle-fill icon"></i> ${value.frame.li2}
              </li>
              <li class="BC Li"><i class="bi bi-circle-fill icon"></i> ${value.frame.li3}</li>
            </ul>
          </div>

          <div class="box2">
            <p class="card-para">
            ${value.para}
            </p>
            <ul class="box2-ul">
              <li class="box2-li">${value.language.li1}</li>
              <li class="box2-li">${value.language.li2}</li>
              <li class="box2-li">${value.language.li3}</li>
            </ul>
            <button class="big-btn btn_btn">See project</button>
          </div>
        </div>
      </div> 
   `;
  work.append(cardd);
});
