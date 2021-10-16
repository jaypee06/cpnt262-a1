 
 const firstToggle = document.querySelector('.inside-toggle')
 const body = document.querySelector('body')
 const title = document.querySelector('.title')



    firstToggle.addEventListener('click', function(event){
    event.preventDefault();
    firstToggle.classList.toggle('toggle-change')
    body.classList.toggle('body-color')
    title.classList.toggle('text-color')
})