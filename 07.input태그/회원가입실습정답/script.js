//복합대입연산자
let idVeri = pwVeri = pwChkVeri = false;



let userid = document.getElementById('userid');
let idWarn = document.querySelector('.id-warn');

//keyup 이라는 이벤트는 키를 눌렀다가 떼었을 때 발생
//focusout
userid.addEventListener('focusout', function(){
  if(userid.value.length >= 8){
    idWarn.innerHTML = '멋진 아이디네요!';
    idWarn.style.color = 'green';
    idVeri = true;

  } else {
    idWarn.innerHTML = '아이디를 8글자 이상 입력하세요';
    idWarn.style.color = 'red';
  }

})

//css에서 text-green/text-red 설정한다면, 
// userid.addEventListener('focusout', function(){
//   if(userid.value.length >= 8){
//     idWarn.innerHTML = `<span class="txt-green">멋진 아이디네요!</span>';
//     } else {
//     idWarn.innerHTML = `<span class ="txt-red">아이디를 8글자 이상 입력하세요</span>';
//   }

// })


//자바스크립트 비밀번호 정규식 검색 후 복사
// let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
// 1. 비밀번호 자릿수 (최소 8자에서 16자까지)
// 2. 최소 하나 이상의 영문자 (소문자 or 대문자)
// 3. 최소 하나 이상의 숫자
// 4. 최소 하나 이상의 특수문자 (!@#$%^&*?_)

let userpw = document.getElementById('userpw');
let pwWarn = document.querySelector('.pw-warn');
let userPwchk = document.getElementById('user-pwchk');
let pwWarnChk = document.querySelector('.pw-warn-chk');


userpw.addEventListener('focusout', function(){
  let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
  //pwExp.test(userpw.value);
  //test(): 정규식 일치 여부를 boolean 값으로 반환한다. (true/false)
  if (!pwExp.test(userpw.value)){
    pwWarn.innerHTML = `<span class ="text-red">8-16자리를 입력하시오</span>`;
  } else{
  pwWarn.innerHTML = '';
  pwVeri = true;}
})


userPwchk.addEventListener('focusout', function(){
  if (userpw.value != userPwchk.value) {
    pwWarnChk.innerHTML =  `<span class ="text-red"> 비밀번호가 일치하지 않습니다.</span>`;
  } else {
    pwWarnChk.innerHTML = ''
    pwChkVeri = true;
  }
})




let year = document.getElementById('year');
let month = document.getElementById('month');
let date = document.getElementById('date');

let kst = new Date();
let getYear = kst.getFullYear();

for (let i = 1920; i<=getYear; i++) {
  let option = `<option>${i}</option>`;
  year.insertAdjacentHTML('beforeend', option);

}

for (let i = 1; i<=12; i++) {
  let option = `<option>${i}</option>`;
  month.insertAdjacentHTML('beforeend', option);

}

for (let i = 1; i<=31; i++) {
  let option = `<option>${i}</option>`;
  date.insertAdjacentHTML('beforeend', option);

}
let checkBoxs = document.querySelectorAll('input[type="checkbox"][name="hobby"]');
let maxCount = 5;

checkBoxs.forEach((item) => {
  item.addEventListener('change', () => {
    let checkCount = document.querySelectorAll('input[type="checkbox"][name="hobby"]:checked').length;
    if (checkCount > maxCount) {
      item.checked = false; //다섯개 이상부터 체크 되지 않게 설정
      alert('최대 5개까지만 선택할 수 있습니다.'); 
    }
  })
})

let submitBtn = document.getElementById('submit-btn');
let joinForm = document.getElementById('join-form');

submitBtn.addEventListener('click', (e) => {
  if(idVeri && pwVeri && pwChkVeri) {
    joinForm.submit();
  } else {
    // 기본 속성 제거
    e.preventDefault();
  }
})
