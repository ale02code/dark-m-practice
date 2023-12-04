"use strict"

const HTML = document.body;
const textChange = document.getElementById('text-change');

function change() {
  const clases = HTML.classList;
  const firstClass = clases[0];

  if (firstClass === undefined) {
    HTML.classList.add("dark");
    textChange.textContent = "Light Mode";
  } else {
    HTML.classList.remove("dark");
    textChange.textContent = "Dark Mode";
  }
}

textChange.addEventListener('click', function () {
  change()
});