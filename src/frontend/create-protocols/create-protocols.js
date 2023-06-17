$(document).ready(() => {
	var intervalo = setInterval(function() {
		if ($(".categories_main_article").children().length == 0) {
			$(".centrilize").css('display', 'flex');
			$(".categories_main_article").css('display', 'none');
		} else {
			$(".centrilize").css('display', 'block');
		}
		$("#total_categories").text($(".categories_main_article").children().length);
	  }, 500);
})

var selectedButton = null;
var categoriesButton = document.getElementById("categories_button");
var categoriesButtonArrow = document.getElementById("arrow_img");
var categoriesButtonClicked = false;
var isExpanded = false;

function changeColor(button) {
	console.log(selectedButton);
	console.log(categoriesButtonClicked);

	if (selectedButton == categoriesButton && button != categoriesButton) {
		var buttons = document.getElementsByClassName("category");
		while (buttons.length > 0) {
			buttons[0].remove();
		}
		categoriesButtonClicked = false;
		$(categoriesButtonArrow).css('transform', 'rotate(0deg)')
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
		$(categoriesButtonArrow).css('transform', 'rotate(180deg)')
	} else {
		var buttons = document.getElementsByClassName("category");
		while (buttons.length > 0) {
			buttons[0].remove();
		}

		categoriesButtonClicked = false;
		$(categoriesButtonArrow).css('transform', 'rotate(0deg)')
	}
}

document.getElementById("expand_button").addEventListener('mouseover', () => {
	document.getElementById('expand_img').src = 'images/expand_hover.png';
})

document.getElementById("expand_button").addEventListener('mouseout', () => {
	document.getElementById('expand_img').src = 'images/expand.png';
})

function zoom() {
	if (isExpanded == false) {
		$("#new_protocol_article").css('height', '0%')
		$("#categories_article").css('height', '100%')
		$("#expand_button").html('Reduzir<img id="expand_img" src="images/expand.png" alt="icon inside a button that expand the categories section">')
		isExpanded = true;
	} else {
		$("#new_protocol_article").css('height', 'calc(50% - 1px)')
		$("#categories_article").css('height', 'calc(50% + 1px)')
		$("#expand_button").html('Expandir<img id="expand_img" src="images/expand.png" alt="icon inside a button that expand the categories section">')
		isExpanded = false;
	}	
}

function toProtocol() {
	$('#protocol_preset').css('background-color', '#EB5E28');
	$('#protocol_preset').css('color', 'rgb(255, 255, 255, 75%)');

	$('#recipient_preset').css('background-color', '#1d1d1d');
	$('#recipient_preset').css('color', 'rgb(255, 255, 255, 35%)');

	$('#historic_preset').css('background-color', '#1d1d1d');
	$('#historic_preset').css('color', 'rgb(255, 255, 255, 35%)');

	document.querySelectorAll('#colunas > div:first-child > p')[0].innerText = 'Nome';
}

function toRecipient() {
	$('#recipient_preset').css('background-color', '#EB5E28');
	$('#recipient_preset').css('color', 'rgb(255, 255, 255, 75%)');

	$('#protocol_preset').css('background-color', '#1d1d1d');
	$('#protocol_preset').css('color', 'rgb(255, 255, 255, 35%)');

	$('#historic_preset').css('background-color', '#1d1d1d');
	$('#historic_preset').css('color', 'rgb(255, 255, 255, 35%)');

	document.querySelectorAll('#colunas > div:first-child > p')[0].innerText = 'Grupo';
}

function toHistoric() {
	$('#historic_preset').css('background-color', '#EB5E28');
	$('#historic_preset').css('color', 'rgb(255, 255, 255, 75%)');

	$('#recipient_preset').css('background-color', '#1d1d1d');
	$('#recipient_preset').css('color', 'rgb(255, 255, 255, 35%)');

	$('#protocol_preset').css('background-color', '#1d1d1d');
	$('#protocol_preset').css('color', 'rgb(255, 255, 255, 35%)');

	document.querySelectorAll('#colunas > div:first-child > p')[0].innerText = 'Nome';
}