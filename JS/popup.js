
$("#btn-open").click(function(){

    overlay.classList.add('active')
    popup.classList.add('active')
    Interfaces.putProductInChart();

})


$('#btn-close').click(function(){

    overlay.classList.remove('active')
    popup.classList.remove('active')

})