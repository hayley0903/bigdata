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
} )

// let item = document.querySelector('.item') --> 첫번째 item 요소만 선택함
// item.style.color = 'red'; --> 변화없음, 어떤요소를 바꿀지 지정해줘야함

let items = document.querySelectorAll('.item');

//Vanila Js --> 선택하고자 하는 것을 모두 작성

 document.querySelectorAll('.item')[0].style.color = 'red';
 document.querySelectorAll('.item')[1].style.color = 'red';
 document.querySelectorAll('.item')[2].style.color = 'red';

//j-Query (javascript를 편하게 사용할 수 있는 도구) j-query cdn검색 후 연결이 필요
//모든 item에 한번에 적용
$('.item').css('color' , 'red');


//배열 반복 forEach
// 배열.forEach((item)=> {}) 

items.forEach((item)=>{
  item.innerHTML= '반복문';
})

// //반복문 for

// for(let i = 0; i <= items.length; i++) {
//   items[i].innerHTML ='for 반복문';
// }

//자료형
//Number 
let num = 5;

console.log(typeof(num))

//String
let num1 = '5';
console.log(num1)
console.log(typeof(num1))

//숫자, 문자, 변수는 ' ' 안에 넣지 않고
//문자열만 ' ' 안에 넣는다
let txt ='안녕하세요'
console.log(txt)
console.log(typeof(txt))
console.log('txt')
console.log(typeof('txt'))


//Array(배열), Object
//여러 자료를 한번에 담을 때 
//Array : []
//Object : {}

// arr = [문자, 변수, 숫자 등..]
let arr = ['hyejeong', 1234, 'ㅋㅋㅋ', txt]
console.log(arr[1])
console.log(arr[3]) 
// --> 대괄호 안에 가져오고 싶은 값의 번호적기


// obj = {key : value}

// -->변수 지정
let phone = 987654321;

let obj = {
  name: 'hyejeong',
  tel: phone,
  address: 'Daejeon'
}
console.log(obj)
console.log(obj.name)
console.log(obj.tel)


//1. 변수, 문자열
let hi = '안녕하세요 저는';
let name = '이혜정';

let my = hi + name + '입니다';
console.log(my)
console.log(typeof(my))


//2.  ``backtick  ${변수명}
let my1 = `안녕하세요 저는 ${name}입니다`;

console.log(my1)
console.log(typeof(my1))


//매개변수(parametor)로 이름값
function info(myName) {
  console.log(`안녕하세요 저는 ${myName}입니다`)
}

info('아무개');



//summary//

//Array [], Object {}
//Array에서 원하는 값 / 배열이름 [num] / 배열의 시작은 0부터

//Object에서 원하는 값 / obj.키값
//key : value, key: value
//여러값을 입력하고 싶을 때는 , 로 구분한다  

//변수, 문자열
//문자열 : ' ', " ", ``
//문자열 사이에 변수 바인딩하는 방법 두가지
//1. + : 변수 + 변수 
//2. `` : backtick, $ {변수}

//parameter (매개변수)
//함수를 호출할 때 함수를 넘겨주는 값
