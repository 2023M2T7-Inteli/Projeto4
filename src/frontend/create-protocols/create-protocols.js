var selectedButton = null;
var categoriesButton = document.getElementById("categories_button");
var categoriesButtonClicked = false;

function changeColor(button) {
    console.log(selectedButton);
    console.log(categoriesButtonClicked);

    if (selectedButton == categoriesButton && button != categoriesButton) {
      var buttons = document.getElementsByClassName("category");
      while (buttons.length > 0) {
        buttons[0].remove();
      }
      categoriesButtonClicked = false;
    }

    if (selectedButton !== null) {
        selectedButton.style.backgroundColor = "";
        selectedButton.style.color = "";
      }

    if (button == selectedButton && button == categoriesButton) {
      selectedButton.style.backgroundColor = "";
      selectedButton.style.color = "";
      selectedButton = null;
    } else {
      button.style.backgroundColor = "#161616";
      button.style.color = "rgba(255, 255, 255, 0.75)";
      selectedButton = button;
    }
}

categoriesButton.onclick = () => {
    changeColor(categoriesButton);
    if (categoriesButtonClicked == false) {
      var container = document.getElementsByTagName("aside")[0];
      var botao1 = document.createElement('button');
      var botao2 = document.createElement('button');
      var botao3 = document.createElement('button');
      var botao4 = document.createElement('button');

      botao1.classList.add("category");
      botao2.classList.add("category");
      botao3.classList.add("category");
      botao4.classList.add("category");

      botao1.innerText = 'Parágrafo';
      botao2.innerText = 'Selecionar opção';
      botao3.innerText = 'Checkbox';
      botao4.innerText = 'Imagem';

      container.insertBefore(botao4, categoriesButton.nextSibling);
      container.insertBefore(botao3, categoriesButton.nextSibling);
      container.insertBefore(botao2, categoriesButton.nextSibling);
      container.insertBefore(botao1, categoriesButton.nextSibling);

      categoriesButtonClicked = true;
    } else {
      var buttons = document.getElementsByClassName("category");
      while (buttons.length > 0) {
        buttons[0].remove();
      }
  
      categoriesButtonClicked = false;
    }
}

document.getElementById("expand_button").addEventListener('mouseover', () => {
    document.getElementById('expand_img').src = 'images/expand_hover.png';
})

document.getElementById("expand_button").addEventListener('mouseout', () => {
  document.getElementById('expand_img').src = 'images/expand.png';
})