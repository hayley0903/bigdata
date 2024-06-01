let sidebar = document.querySelector('.sidebar')
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn')
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn')

// function openSidebar(){
//     sidebar.classList.add('is-active');
// }

// function closeSidebar(){
//     sidebar.classList.remove('is-active');
// }

// sidebarOpenBtn.addEventLister('click', openSidebar);
// sidebarCloseBtn.addEventListener ('click', closeSidebar);

sidebarOpenBtn.addEventListener('click', function(){
    sidebar.classList.add('is-active')
})

sidebarCloseBtn.addEventListener('click', function(){
    sidebar.classList.remove('is-active')
})


let search = document.querySelector('.search')
let searchOpenBtn = document.querySelector('.search-open-btn')
let searchCloseBtn = document.querySelector('.search-close-btn')

searchOpenBtn.addEventListener('click', function(){
    search.classList.add('is-active')
})

searchCloseBtn.addEventListener('click', function(){
    search.classList.remove('is-active')
})