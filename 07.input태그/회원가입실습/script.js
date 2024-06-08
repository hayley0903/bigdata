let year = document.querySelector('.year');
let month = document.querySelector('.month');
let date = document.querySelector('.date');

let kst = new Date();

for (let i = 1920; i <=2024; i++) {
    let options = document.createElement('option')
    options.innerHTML = i;
    year.appendChild(options);
}

for (let a = 1; a <=12; a++){
    let options = document.createElement('option')
    options.innerHTML = a;
    month.appendChild(options);
}

for (let b = 1; b <=31; b++){
    let options = document.createElement('option')
    options.innerHTML = b;
    date.appendChild(options);
}