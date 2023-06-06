var botaoSelecionado = null;

function mudarCor(botao) {
    if (botaoSelecionado !== null) {
        botaoSelecionado.style.backgroundColor = "";
        botaoSelecionado.style.color = "";
      }
    
      botao.style.backgroundColor = "#161616";
      botao.style.color = "rgba(255, 255, 255, 0.75)";
    
      botaoSelecionado = botao;
}