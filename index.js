import { languages } from './cats.js';

const page = document.querySelector('.page');
const select = document.createElement('select');
select.classList.add('form-select');
page.appendChild(select);

for (let language of languages) {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;

    select.appendChild(option);
}

const text = document.querySelector('.text');

select.addEventListener('change', (event) => {
    const choiceSelect = event.target.value;
    fetch(`http://localhost:3000/?language=${choiceSelect}`)
        .then(response => response.json())
        .then((data) => {
            text.textContent = `Переводится как "${data.language}"`;
        })
})