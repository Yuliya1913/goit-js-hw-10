import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
// console.log(debounce);
import { fetchCountries } from './fetchCountries';


const DEBOUNCE_DELAY = 500;
let inputValue = "";

// находим inputEl
const inputEl = document.querySelector('#search-box');
const ulEl = document.querySelector('.country-list');
const countryDivEl = document.querySelector('.country-info');
console.log(countryDivEl);

// в inputEl записываем данные с задержкой 300мс
inputEl.addEventListener('input', debounce(handleInputValue, DEBOUNCE_DELAY));

function handleInputValue(event) {
    inputValue = event.target.value.trim();
   
    // если в inputValue нет введенных значений - запроса не будет
    if (inputValue === "") {
        return;
    }
    
    // при вводе данных в инпут вызываем функцию по созданию запроса
    fetchCountries(inputValue)
        .then(data => {
            console.log(data);

            if (data.length > 10) {
                Notiflix.Notify.info('"Too many matches found. Please enter a more specific name."')
                ulEl.innerHTML = '';
                countryDivEl.innerHTML = '';

                return;
               
            }
            else if (data.length >= 2 && data.length <= 10) {
               
                countryDivEl.innerHTML = '';
                renderCountrys(data);

            } else {
                ulEl.innerHTML = '';
                
                renderCountry(data);
            
            }
        })
        .catch((error) => { Notiflix.Notify.failure("Oops, there is no country with that name") });
    
}

function renderCountry(data) {

      const markup = data.map(({ name, capital, population, flags, languages }) => {
     
    return `<img src=${flags.svg} alt = ${name.official} width="50" height="50">
    <h1>${name.official}</h1>
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${languages.ukr}</p>`
    })
    .join('');
    
    
    countryDivEl.innerHTML = markup;
}

function renderCountrys(data) {
const markup = data.map(({ name, flags}) => {
     
    return `<img src=${flags.svg} alt = ${name.official} width="50" height="50">
    <h1>${name.official}</h1>`
    })
    .join('');

    
    ulEl.innerHTML = markup;
}











