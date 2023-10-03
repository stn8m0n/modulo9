$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#bt-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();
    })

})