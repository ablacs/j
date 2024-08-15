$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })
    $('#cancelar').click(function(){
        $('form').slideUp()
    })
    $('form').on('submit', function(e){
        e.preventDefault()
        const endereco=$('#nova-imagem').val()
        const novoItem=$('<li style="display: none"></li>')
        $(`<img src='${endereco}'/>`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">
            <a href="${endereco}" target="_blank" tittle="Ver imagem em tamanho real"> Ver imagem em tamanho real</a></div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#nova-imagem').val('')
    })
})