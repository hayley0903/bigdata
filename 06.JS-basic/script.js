//html #hello 찾아오기

//querySelector('.클래스명')
//getElementById('ID명')

let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-change-btn');

//변경할요소.innerHTML
hello.innerHTML = '안녕?'

//변경할요소.style(css).color(색변경)
hello.style.color = 'blue'

//changeBtn클릭했을 때, html 'Hello' color -> blue

changeBtn.addEventListener('click', () => {
  hello.innerHTML = 'Hello';
  hello.style.color = 'blue';
})

// let item = document.querySelector('.item') --> 첫번째 item 요소만 선택함
// item.style.color = 'red'; --> 변화없음, 어떤요소를 바꿀지 지정해줘야함

let item = document.querySelectorAll('.item');

//Vanila Js

 document.querySelectorAll('.item')[0].style.color = 'red';
 document.querySelectorAll('.item')[1].style.color = 'red';
 document.querySelectorAll('.item')[2].style.color = 'red';

//j-Query (javascript를 편하게 사용할 수 있는 도구) j-query cdn검색 후 연결이 필요

$('.item').css('color' , 'red');