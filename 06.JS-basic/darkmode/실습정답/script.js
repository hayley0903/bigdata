//mode-btn class안 텍스트를 가져온다
//텍스트가 dark일 경우 (조건)
//mode-btn 클릭하면 (클릭이벤트) 텍스트를 'light'로 바꾼다. 
//header 태그에 dark class add 추가

// let modeBtn = document.querySelector('.mode-btn');
// let count = 0;

// function modeToggle () {
//   let modeTxt = modeBtn.innerHTML;
//   let header = document.querySelector('header');

//   if(modeTxt == 'Dark') {
//     //텍스트를 'light'로 바꾼다
//     modeBtn.innerHTML = 'Light';
//     //header 태그에 dark class add
//     header.classList.add('dark');
//     } else {
//     //텍스트를 'dark'로 바꾼다
//     modeBtn.innerHTML = 'Dark';
//     //header 태그에 dark clss remove
//     header.classList.remove('dark');
//     }
// }

// modeBtn.addEventListener('click', modeToggle);


let modeBtn = document.querySelector('.mode-btn');
let count = 0;

function modeToggle () {
  let modeTxt = modeBtn.innerHTML;
  let header = document.querySelector('header');
  count += 1;

  //1, 3, 5, 7 = > Darkmode
  //2, 4, 6, 8 = > Lightmode

if (count % 2 == 0) {
  this.innerHTML = 'Dark';
  header.classList.remove('dark');
} else {
  this.innerHTML = 'Light';
  header.classList.add('dark');
}
}
modeBtn.addEventListener('click', modeToggle);