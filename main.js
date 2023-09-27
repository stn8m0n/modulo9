$(document).ready(function() {
    $('hearder button').click(function(){
        alert("Expandir fomulário")
    })

    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();
    })

})