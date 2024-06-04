//검색창
let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.search-btn');
let searchCloseBtn = document.querySelector('.search-close-btn');


// search한테 is-open class add (검색창 열기)
// 대상.classlist.add ('클래스명') 
function searchOpen(){
  search.classList.add('is-open')
}

function searchClose(){
  search.classList.remove('is-open')
}


//search-btn 클릭했을 때 클릭이벤트 추가
searchOpenBtn.addEventListener('click', searchOpen);
searchCloseBtn.addEventListener('click', searchClose);



//사이드바
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let overlay = document.querySelector('.overlay');



//sidebar active class add/overlay active class add
function sidebarOpen(){
  sidebar.classList.add('active');
  overlay.classList.add('active');
}

//sidebar active class add/overlay active class remove
function sidebarClose(){
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

//sidebar click했을때 open, overlay click 했을 때 close
sidebarOpenBtn.addEventListener('click', sidebarOpen);
overlay.addEventListener('click', sidebarClose);