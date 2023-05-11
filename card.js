const work = document.querySelector('.works');
const allCards = [
  {
    id: 'one1',
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

  {
    id: 'two2',
    img: 'images/Snapshoot2.png',
    alt: 'Multipost project',
    Name: 'Multipost',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },
    para: ` A daily selection of privately personalized reads; no accounts or
       sign-ups required.`,
    language: {
      li1: 'HTML',
      li2: 'Css',
      li3: 'JavaScript',
    },
  },

  {
    id: 'three3',
    img: 'images/Snapshoot3.png',
    alt: 'Tonic project',
    Name: 'Tonic',
    block1: '',
    block2: '',
    frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },
    para: ` A daily selection of privately personalized reads; no accounts or
       sign-ups required.`,
    language: {
      li1: 'HTML',
      li2: 'Css',
      li3: 'JavaScript',
    },
  },

  {
    id: 'four4',
    img: 'images/Snapshoot4.png',
    alt: 'Gateway project',
    Name: 'Gateway',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },
    para: ` A daily selection of privately personalized reads; no accounts or
       sign-ups required.`,
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
