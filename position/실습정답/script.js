//Javascript 변수명 (낙타표기법 대문자)

let popupOpenBtn = document.querySelector('.popup-open-btn');

let popUp = document.querySelector('.popup');

let popupCloseBtn = document.querySelector('.popup-close-btn');

//function () {}

//popupOpenBtn 클릭시 popup에 is-active class Add
popupOpenBtn.addEventListener('click', function(){popup.classList.add('is-active')})

popupCloseBtn.addEventListener('click', function(){popup.classList.remove('is-active')})