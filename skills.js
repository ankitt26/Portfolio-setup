const drop1 = document.getElementById('drop-1');
const list1 = document.getElementById('list-1');
const li1 = document.getElementById('li-1');

const drop2 = document.getElementById('drop-2');
const list2 = document.getElementById('list-2');
const li2 = document.getElementById('li-2');

const drop3 = document.getElementById('drop-3');
const list3 = document.getElementById('list-3');
const li3 = document.getElementById('li-3');

drop1.addEventListener('click', () => {
  list1.classList.toggle('hide');
  drop1.classList.toggle('bi-caret-right-fill');
  li1.classList.toggle('hr');
});

drop2.addEventListener('click', () => {
  list2.classList.toggle('hide');
  drop2.classList.toggle('bi-caret-down-fill');
  drop2.classList.toggle('bi-caret-right-fill');
  li2.classList.toggle('hr');
});

drop3.addEventListener('click', () => {
  list3.classList.toggle('hide');
  drop3.classList.toggle('bi-caret-down-fill');
  drop3.classList.toggle('bi-caret-right-fill');
  li3.classList.toggle('hr');
});

const languages = [
  { name: 'JavaScript', image: 'javascript.png' },
  { name: 'Ruby', image: 'Ruby.png' },
  { name: 'HTML', image: 'HTML.png' },
  { name: 'CSS', image: 'css.png' },
];

const frameworks = [
  { name: 'Ruby on Rails', image: 'Ror.png' },
  { name: 'React.js', image: 'React.png' },
  { name: 'Redux', image: 'Redux.png' },
];

const skills = [
  { name: 'OOPs', image: 'oops.png' },
  { name: 'MVC', image: 'mvc.png' },
  { name: 'PostgreSQL', image: 'postgres.png' },
  { name: 'API', image: 'Api.png' },
  { name: 'API Building', image: 'Api-building.png' },
  { name: 'Bootstrap', image: 'bootstrap.png' },
  { name: 'Webpack', image: 'web-pack.png' },
  { name: 'Git', image: 'git.png' },
  { name: 'GitHub', image: 'github.png' },
  { name: 'Gitflow', image: 'gitflow.png' },
  { name: 'JWT', image: 'jwt.png' },
  { name: 'Devise', image: 'devise.png' },
  { name: 'Jest', image: 'jest.png' },
  { name: 'RSpec', image: 'rspec.png' },
  { name: 'Render', image: 'render.png' },
  { name: 'Postman', image: 'postman.png' },
  { name: 'VSCode', image: 'vs-code.png' },
  { name: 'Chrome DevTools', image: 'devtools.png' },
];

languages.forEach((lang) => {
  list1.innerHTML += `
    <div class="lan">
      <img class="lan-img" src="images/${lang.image}" alt="${lang.name}" />
      <h3 class="section2-h3">${lang.name}</h3>
    </div>`;
});

frameworks.forEach((fram) => {
  list2.innerHTML += `
    <div class="lan">
      <img class="lan-img" src="images/${fram.image}" alt="${fram.name}" />
      <h3 class="section2-h3">${fram.name}</h3>
    </div>`;
});

skills.forEach((skill) => {
  list3.innerHTML += `
    <div class="lan"><img class="lan-img" src="images/skills/${skill.image}" alt="${skill.name}" />
         <h5 class="section2-h3">${skill.name}</h5>
    </div>`;
});
