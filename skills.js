const drop1 = document.getElementById('drop-1');
const list1 = document.getElementById('list-1');
const li1 = document.getElementById('li-1');

drop1.addEventListener('click', () => {
  list1.classList.toggle('hide');
  drop1.classList.toggle('bi-caret-right-fill');
  li1.classList.toggle('hr');
});

const languages = [
  { name: 'JavaScript', image: 'javascript.png' },
  { name: 'Ruby', image: 'Ruby.png' },
  { name: 'HTML', image: 'HTML.png' },
  { name: 'CSS', image: 'css.png' },
];

languages.forEach((lang) => {
  list1.innerHTML += `
    <div class="lan">
      <img class="lan-img" src="images/${lang.image}" alt="${lang.name}" />
      <h3 class="section2-h3">${lang.name}</h3>
    </div>`;
});