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


// //sidebar
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn');


// // //sidebarOpenBtn을 클릭했을때 
// // //sidebar에서 is-active 클레스 추가
// sidebarOpenBtn.addEventListener('click',function(){
//   sidebar.classList.add('is-active')})

// sidebarCloseBtn.addEventListener('click',function(){
//  sidebar.classList.remove('is-active')})


//함수이용하여 sidebar 호출
function openSidebar(){
  //1.sidebar라는 클래스에 is-active 클래스 추가
  sidebar.classList.add('is-active');
}

function closeSidebar() {
  //1.sidebar라는 클래스에 is-active 클래스 제거
  sidebar.classList.remove('is-active');
}

sidebarOpenBtn.addEventListener('click', openSidebar);
sidebarCloseBtn.addEventListener('click', closeSidebar);




//함수 소괄호 안 : 매개변수
function plus (num1, num2) {
  console.log(num1,)
  console.log(num1 + num2)
  //실행 할 코드
}

//함수는 호출을 해야 실행됨
plus (10, 10);