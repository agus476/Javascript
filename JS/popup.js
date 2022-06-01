
let btnOpen = document.getElementById ('btn-open')
let overlay = document.getElementById ('overlay')
let popup = document.getElementById ('popup')
let btnClose = document.getElementById ('btn-close')

btnOpen.addEventListener('click' , function(){
  
    overlay.classList.add('active')
    popup.classList.add('active')

})


btnClose.addEventListener('click' , function(){
  
    overlay.classList.remove('active')
    popup.classList.remove('active')


})