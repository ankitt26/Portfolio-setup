const work = document.querySelector('.works');
const allCards = [

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
    frame: { li1: 'React', li2: 'Front End Dev', li3: '2023' },
    para: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
    language: {
      li1: 'React.js',
      li2: 'HTML',
      li3: 'CSS',
    },
  },

  {
    id: 'todo-list',
    img: 'images/to-do4.png',
    alt: 'Todo project',
    Name: 'To do list',
    block1: '',
    block2: '',
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
