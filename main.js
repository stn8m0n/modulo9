$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#bt-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $ ('endereço-imagem-nova').val();
        console.log(enderecoDaNovaImagem);
        const novoItem = $ ('<li></li>');
        $(`<img src=" ${enderecoDaNovaImagem}" /`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link"`).appendTo(novoItem) ;
    })

})