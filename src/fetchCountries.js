export const fetchCountries = (name) => {
    
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(responce => {
            if (!responce.ok) {
                throw new Error(responce.status);
            }
            return responce.json();
                       
        })
        
}





// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
// // console.log(debounce);
// import { fetchCountries } from './fetchCountries';


// const DEBOUNCE_DELAY = 500;
// let inputValue = "";

// // находим inputEl
// const inputEl = document.querySelector('#search-box');
// const ulEl = document.querySelector('.country-list');
// const countryDivEl = document.querySelector('.country-info');
// console.log(countryDivEl);

// // в inputEl записываем данные с задержкой 300мс
// inputEl.addEventListener('input', debounce(handleInputValue, DEBOUNCE_DELAY));

// function handleInputValue(event) {
//     inputValue = event.target.value.trim();
   
//     // если в inputValue нет введенных значений - запроса не будет
//     if (inputValue === "") {
//         return;
//     }
    
//     // при вводе данных в инпут вызываем функцию по созданию запроса
//     fetchCountries(inputValue)
//         .then(data => {
//             console.log(data);

//             if (data.length > 10) {
//             Notiflix.Notify.info('"Too many matches found. Please enter a more specific name."')
//                 return;
               
//             } else if (data.length >= 2 && data.length <= 10) {
//                 renderCountrys(data);

//             } else {
//             renderCountry(data);
//             }
            
//         })
//         .catch((error) => { Notiflix.Notify.failure("Oops, there is no country with that name") });

    
// }

// function renderCountry(data) {

//       const markup = data.map(({ name, capital, population, flags, languages }) => {
     
//     return `<img src=${flags.svg} alt = ${name.official} width="50" height="50">
//     <h1>${name.official}</h1>
//     <p>Capital: ${capital}</p>
//     <p>Population: ${population}</p>
//     <p>Languages: ${languages.ukr}</p>`
//     })
//     .join('');
    
//     countryDivEl.insertAdjacentHTML('beforeend', markup);
// }

// function renderCountrys(data) {
// const markup = data.map(({ name, capital, population, flags, languages}) => {
     
//     return `<img src=${flags.svg} alt = ${name.official} width="50" height="50">
//     <h1>${name.official}</h1>`
//     })
//     .join('');
    
//     countryDivEl.insertAdjacentHTML('beforeend', markup);
// }

























// console.log(fetchCountries);
    // console.log(name)
    // const params = new URLSearchParams({
    //     name: name,
    //     capital:
    //     population,
    //     flag: "https://restcountries.eu/data/col.svg",
    //     languages:

    // })

// &fullText=true&capital/{capital}&lang/{currency}&flag"https://restcountries.eu/data/col.svg"&population{population}')