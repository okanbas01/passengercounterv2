const countEl = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');
const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');

let count = 0;

// Check if there is a saved count in localStorage
if (localStorage.getItem('count')) {
  count = localStorage.getItem('count');
} else {
  localStorage.setItem('count', count);
}

countEl.textContent = count;

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  saveEl.textContent += count + ' - ';
  localStorage.setItem('count', count);
  count = 0;
  countEl.textContent = count;
}
