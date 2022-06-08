
const btnOpen = document.getElementById ('btn-open')
const btnClose = document.getElementById ('btn-close')

btnOpen.addEventListener('click' , function(){
  
    overlay.classList.add('active')
    popup.classList.add('active')

})


btnClose.addEventListener('click' , function(){
  
    
    overlay.classList.remove('active')
    popup.classList.remove('active')

})
