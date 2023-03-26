import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
// console.log(debounce);
import { fetchCountries } from './fetchCountries';


const DEBOUNCE_DELAY = 300;
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
     
    return `<div class=country-info_groop><img src=${flags.svg} class=country-info_img alt = ${name.official} width="160" height="100">
    <h1 class=country-info_name>${name.official}</h1></div>
    <p class=country-info_capital>Capital: <span class=country-info_span>${capital}</span></p>
    <p class=country-info_population>Population: <span class=country-info_span>${population}</span></p>
    <p class=country-info_languages>Languages: <span class=country-info_span>${languages.ukr}</span></p>`
    })
    .join('');
    
    
    countryDivEl.innerHTML = markup;
}

function renderCountrys(data) {
const markup = data.map(({ name, flags}) => {
     
    return `<li class=country-list_item><img src=${flags.svg} class=country-list_img alt = ${name.official} width="40" height="30">
    <h1>${name.official}</h1></li>`
    })
    .join('');
    
    ulEl.innerHTML = markup;
}











