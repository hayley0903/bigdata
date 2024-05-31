//Javascript 변수명 (낙타표기법 대문자)

let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.popup-open-btn');
let popupCloseBtn = document.querySelector('.popup-close-btn');


//function () {}

// popupOpenBtn 클릭시 popup에 is-active class Add
popupOpenBtn.addEventListener('click', function(){
    popup.classList.add('is-active');
  })
  
popupCloseBtn.addEventListener('click', function() {
    popup.classList.remove('is-active');
  })


//sidebar
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn');


//sidebarOpenBtn을 클릭했을때 
//sidebar에서 is-active 클레스 추가
sidebarOpenBtn.addEventListener('click',function(){
  sidebar.classList.add('is-active')
})

sidebarCloseBtn.addEventListener('click',function(){
  sidebar.classList.remove('is-active')
})