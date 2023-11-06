const drop1 = document.getElementById('drop-1');
const list1 = document.getElementById('list-1');
const li1 = document.getElementById('li-1');

drop1.addEventListener('click', () => {
  list1.classList.toggle('hide');
  drop1.classList.toggle('bi-caret-right-fill');
  li1.classList.toggle('hr');
});
