let lightMode = document.getElementById('lightmode');
let txtChangeBtn = document.getElementById('txt-change-btn');
let darkButton = document.getElementById('darkbutton')

darkButton.addEventListener('click', () => {
  lightmode.style.backgroundColor = 'black';
  txtChangeBtn.style.color = 'white';
  darkButton.style.backgroundColor = 'black';
  darkButton.innerHTML = 'light'
})