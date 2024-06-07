let year = document.querySelector('.year');

// 한국 표준시 (Korea Standard Time)
let kst = new Date();
console.log(kst);

let getYear = kst.getFullYear(); // 년도
let getMonth = kst.getMonth() + 1; // 월
let getDate = kst.getDate(); // 일


for(let i = 1920; i <= getYear; i++) {
  // document.createElement()로 새로운 요소 생성
  // appendChild()를 통해 생성된 요소를 삽입
  // innerHTML르 사용해 문자열 추가
  // let options = document.createElement('option');
  // options.innerHTML = i;
  // year.appendChild(options);

  let options = `<option>${i}</option>`;
  // afterbegin, beforebegin, afterend, beforend
  // 추가하고싶은곳.insertAdjacentHTML('위치', 추가할요소)
  year.insertAdjacentHTML('beforeend', options);

  // jQuery
  $('.year').append('<option>' + i + '</option>');
}