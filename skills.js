const drop1 = document.getElementById('drop-1');
const list1 = document.getElementById('list-1');
const li1 = document.getElementById('li-1');

const drop2 = document.getElementById('drop-2');
const list2 = document.getElementById('list-2');
const li2 = document.getElementById('li-2');

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