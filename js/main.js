// search bar
let search = document.querySelector('form.center')
let searchIcon = document.querySelector('header > i')
searchIcon.addEventListener('click', ()=> {
  search.classList.toggle('hidden')
})


// open right menu in smoll screens
let user = document.querySelector('.user img')
let rightMenu = document.querySelector('main .right')
user.addEventListener('click', ()=> {
  rightMenu.classList.toggle('opened')
})


// navigation icon
let sections = document.querySelectorAll('.sections .sec')
let content = document.querySelector('main .center')
let mainContent = content.innerHTML;
sections.forEach((ele) => {
  ele.addEventListener('click', ()=> {
    sections.forEach((el) => {
      el.classList.remove('selected')
    })
    ele.classList.add('selected')
    if (ele.classList.contains('home') === false){
      content.innerHTML = 
        `<h3 class="auto-cont text-center pt-5 mt-5"> No (${ele.dataset.cont}) yet</h3>`
    } else {
      content.innerHTML = mainContent
    }
  })
})


// popUp bar
let closePop = document.querySelector('.popup img:last-child')
let popup = document.querySelector('.popup')
closePop.addEventListener('click', ()=> {
  popup.classList.add('closed')
})