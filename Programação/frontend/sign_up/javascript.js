/*Este código usa jQuery para manipular eventos de clique
nos botões de rádio. Com base no botão selecionado, os elementos com a classe "option1"
são mostrados se for a opção 1 selecionada, caso contrário, são ocultados. Os elementos com a classe "option2"
são mostrados se não for a opção 1 selecionada, caso contrário, são ocultados.*/

$(document).ready(function() {
  $('input[type="radio"]').click(function() {
    var selectedValue = $(this).attr('id');
    if (selectedValue === "option1") {
      $('.option1').show();
      $('.option2').hide();
    } else {
      $('.option1').hide();
      $('.option2').show();
    }
  });
});
