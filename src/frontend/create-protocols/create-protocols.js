$(document).ready(() => {
	agricultores();

	$("#modal_bg").on('click', () => {
		hideModals();
	})

	toProtocol();
	updateGroup();
	updateCategories()

	document.addEventListener('dragstart', element => {
		element.target.classList.add('dragging');
	})

	document.addEventListener('dragend', element => {
		element.target.classList.remove('dragging');
	})

	let saveBtn = document.querySelectorAll(".saveBtn, .deleteBtn, .cancelBtn");

	Array.from(saveBtn).forEach(button => {
		button.addEventListener('mouseenter', function () {
			$(button).css('animation', 'changeSize 0.7s ease');
		});
	});

	Array.from(saveBtn).forEach(button => {
		button.addEventListener('mouseleave', function () {
			$(button).css('animation', 'changeSize2 0.7s ease');
		});
		button.addEventListener('animationend', function () {
			$(button).css('animation', '');
		});
	});
})

var selectedButton = null;
var categoriesButton = document.getElementById("categories_button");
var categoriesButtonArrow = document.getElementById("arrow_img");
var categoriesButtonClicked = false;
var isExpanded = false;
var selectedUsers = new Array();
var lastClickedOptionButton;
const params = new URLSearchParams(window.location.search);

function changeColor(button) {
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
		botao1.setAttribute('onclick', 'showCategoryTextModal()');
		var botao2 = document.createElement('button');
		botao2.setAttribute('onclick', 'showCategoryOptionModal(this)');
		var botao3 = document.createElement('button');
		botao3.setAttribute('onclick', 'showCategoryOptionModal(this)');
		var botao4 = document.createElement('button');
		botao4.setAttribute('onclick', 'showCategoryImageModal()');

		botao1.classList.add("category");
		botao2.classList.add("category");
		botao3.classList.add("category");
		botao4.classList.add("category");

		botao1.innerText = 'Parágrafo';
		botao2.innerText = 'Opção única';
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
	$('#protocol_preset').css('color', 'rgb(255, 255, 255, 0.75)');

	$('#recipient_preset').css('background-color', '#1d1d1d');
	$('#recipient_preset').css('color', 'rgb(255, 255, 255, 0.35)');

	$('#historic_preset').css('background-color', '#1d1d1d');
	$('#historic_preset').css('color', 'rgb(255, 255, 255, 0.35)');

	document.querySelectorAll('#colunas > div:first-child > p')[0].innerText = 'Nome';

	$('.recipient_preset_div').css('display', 'none');
	$('.historic_preset_div').css('display', 'none');

	if ($(".protocol_preset_div").children('.preset_div').length == 0) {
		$("#colunas").hide();
		$("#presets_article").find($(".centralize_p")).css('display', 'flex');
		$('.protocol_preset_div').css('display', 'none');
	} else {
		$("#colunas").css('display', 'flex');
		$("#presets_article").find($(".centralize_p")).css('display', 'none');
		$('.protocol_preset_div').css('display', 'block');
	}
}

function toRecipient() {
	$('#recipient_preset').css('background-color', '#EB5E28');
	$('#recipient_preset').css('color', 'rgb(255, 255, 255, 75%)');

	$('#protocol_preset').css('background-color', '#1d1d1d');
	$('#protocol_preset').css('color', 'rgb(255, 255, 255, 35%)');

	$('#historic_preset').css('background-color', '#1d1d1d');
	$('#historic_preset').css('color', 'rgb(255, 255, 255, 35%)');

	document.querySelectorAll('#colunas > div:first-child > p')[0].innerText = 'Grupo';
	updateGroup();

	$('.protocol_preset_div').css('display', 'none');
	$('.historic_preset_div').css('display', 'none');

	if ($(".recipient_preset_div").children('.preset_div').length == 0) {
		$("#colunas").hide();
		$("#presets_article").find($(".centralize_p")).css('display', 'flex');
		$('.recipient_preset_div').css('display', 'none');
	} else {
		$("#colunas").css('display', 'flex');
		$('.recipient_preset_div').css('display', 'block');
		$("#presets_article").find($(".centralize_p")).css('display', 'none');
	}
}

function updateGroup() {
	let xhr = new XMLHttpRequest();
	xhr.open('get', '/catchGroup', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function () {
		if (xhr.status == 200) {
			let html = '';
			JSON.parse(xhr.responseText).forEach(group => {
				html += `<button class="preset_div">
						<p>${group.Grupo}</p>
						<p>${group.Data}</p>
						</button>`
			});
			$(".recipient_preset_div").html(html);
		} else {
			console.log('ERROR: ' + xhr.status);
		}
	}
	xhr.send()
}

function updateUsers() {
	if ($(".category_inputs_profile").children('.flex').length == 0) {
		$(".category_inputs_profile").hide();
		$("#recipient_article").find('.centralize_p').css('display', 'flex');
	} else {
		$(".category_inputs_profile").css('display', 'block');
		$("#recipient_article").find('.centralize_p').hide();
	}
}

function updateCategories() {
	if ($(".categories_main_article").children('.category_div').length == 0) {
		$(".categories_main_article").hide();
		$('.centralize').css('display', 'flex');
	} else {
		$(".categories_main_article").css('display', 'block');
		$('.centralize').css('display', 'flex').hide();
	}
}

function toHistoric() {
	$('#historic_preset').css('background-color', '#EB5E28');
	$('#historic_preset').css('color', 'rgb(255, 255, 255, 75%)');

	$('#recipient_preset').css('background-color', '#1d1d1d');
	$('#recipient_preset').css('color', 'rgb(255, 255, 255, 35%)');

	$('#protocol_preset').css('background-color', '#1d1d1d');
	$('#protocol_preset').css('color', 'rgb(255, 255, 255, 35%)');

	document.querySelectorAll('#colunas > div:first-child > p')[0].innerText = 'Nome';

	$('.protocol_preset_div').css('display', 'none');
	$('.recipient_preset_div').css('display', 'none');

	if ($(".historic_preset_div").children('.preset_div').length == 0) {
		$("#colunas").hide();
		$("#presets_article").find($(".centralize_p")).css('display', 'flex');
		$('.historic_preset_div').css('display', 'none');
	} else {
		$("#colunas").css('display', 'flex');
		$("#presets_article").find($(".centralize_p")).css('display', 'none');
		$('.historic_preset_div').css('display', 'block');
	}
}

// Requisição para pegar os agricultores
function agricultores() {
	let xhr = new XMLHttpRequest();
	xhr.open('get', '/agricultores', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function () {
		if (xhr.status == 200) {
			let html = '';
			JSON.parse(xhr.responseText).forEach(usuario => {
				html += `<div class="flex" onmouseover="toInfo(this)" onmouseout="toProfile(this)">
							<button onclick="goUserInfo(this)" class="user_profile_button" data-plantation="${usuario.TipoDePlantacao}" data-id="${usuario.Id_Usuario}"><img src="images/profile.png" alt="User's profile picture"></button>
							<button onclick="selectUser(this.id)" class="user_div" id=userId${usuario.Id_Usuario} data-plantation="${usuario.TipoDePlantacao}" data-id="${usuario.Id_Usuario}">
								<p>${usuario.Nome}</p>
							</button>
						</div>`
			});
			$("#users").html(html);
			sortUsers();
			// updateUsers();
		} else {
			console.log('Ocorreu um erro: ' + xhr.status);
		}
	}
	xhr.send();
}

function selectUser(id) {
	let userButton = $('#' + id);
	let userName = userButton.find('p').text();
	let userId = userButton.data('id');
	let userPlantation = userButton.data('plantation');
	if (selectedUsers.includes(userId)) {
		let usersDiv = $("#users");
		selectedUsers.splice(selectedUsers.indexOf(userId), 1);
		usersDiv.append(`<div class="flex" onmouseover="toInfo(this)" onmouseout="toProfile(this)">
		<button onclick="goUserInfo(this)" class="user_profile_button"><img src="images/profile.png" alt="User's profile picture"></button>
		<button onclick="selectUser(this.id)" class="user_div" id="${id}" data-plantation="${userPlantation}" data-id="${userId}">
			<p>${userName}</p>
		</button>
	</div>`);
		userButton.parent().remove();
		sortUsers();
	} else {
		selectedUsers.push(userId);
		let selectedUsersDiv = $("#selectedUsers");
		selectedUsersDiv.append(`<div class="flex" onmouseover="toInfo(this)" onmouseout="toProfile(this)">
		<button onclick="goUserInfo(this)" class="user_profile_button" data-plantation="${userPlantation}" data-id="${userId}"><img src="images/profile.png" alt="User's profile picture"></button>
		<button onclick="selectUser(this.id)" class="user_div" id="${id}" data-plantation="${userPlantation}" data-id="${userId}">
			<p>${userName}</p>
		</button>
	</div>`);
		userButton.parent().remove();
		sortSelectedUsers();
	}
	canSave();
}

function sortUsers() {
	let container = $("#users");
	var elements = $(container).children('.flex');
	elements.sort(function (a, b) {
		var pA = $(a).find('.user_div').find('p').text().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');;
		var pB = $(b).find('.user_div').find('p').text().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');;
		return (pA < pB) ? -1 : (pA > pB) ? 1 : 0;
	});
	elements.detach().appendTo(container);
}

function sortSelectedUsers() {
	let container = $("#selectedUsers");
	var elements = $(container).children('.flex');
	elements.sort(function (a, b) {
		var pA = $(a).find('.user_div').find('p').text().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');;
		var pB = $(b).find('.user_div').find('p').text().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');;
		return (pA < pB) ? -1 : (pA > pB) ? 1 : 0;
	});
	elements.detach().appendTo(container);
}

$("#searchUserInput").on('input', () => {
	let users = $("#users").children('.flex');
	Array.from(users).forEach(user => {
		let userName = String($(user).find('.user_div').find('p').text());
		let userId = String($(user).find('.user_div').data('id'));
		let userPlantation = String($(user).find('.user_div').data('plantation'));
		if ($("#searchUserInput").val() == '') {
			$(user).show();
		} else if (userName.toLowerCase().startsWith($("#searchUserInput").val().toLowerCase()) || userId.toLowerCase().startsWith($("#searchUserInput").val().toLowerCase()) || userPlantation.toLowerCase().startsWith($("#searchUserInput").val().toLowerCase())) {
			$(user).show();
		} else {
			$(user).hide();
		}
	});
});

$("#searchPresetInput").on('input', () => {
	let presets = $(".presets_div").children('.preset_div');
	Array.from(presets).forEach(preset => {
		let presetName = String($(preset).find('p:first').text());
		if ($("#searchPresetInput").val() == '') {
			$(preset).show();
		} else if (presetName.toLowerCase().startsWith($("#searchPresetInput").val().toLowerCase())) {
			$(preset).show();
		} else {
			$(preset).hide();
		}
	});
});

function toInfo(button) {
	$(button).find('img').attr('src', 'images/black_info.png');
}

function toProfile(button) {
	$(button).find('img').attr('src', 'images/profile.png');
}

function canSave() {
	if (selectedUsers.length > 0) {
		saveToDefault($("#save"));
		return true;
	} else {
		saveToDefault($("#save"));
		return false;
	}
}

function saveRecipients() {
	if (canSave()) {
		$("#modal_bg").css('display', 'block');
		$("#save_recipients_modal").show();
	}
}

function saveRecipients2() {
	if ($("#save_modal_input").val() != '') {
		let xhr = new XMLHttpRequest();
		xhr.open('get', '/catchGroup', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function () {
			if (xhr.status == 200) {
				let existGroup = false;
				JSON.parse(xhr.responseText).forEach(group => {
					if ($("#save_modal_input").val().toLowerCase() == group.Grupo.toLowerCase()) {
						existGroup = true;
					}
				})
				if (!existGroup) {
					let xhr = new XMLHttpRequest();
					xhr.open('post', '/insertGroup', true);
					xhr.setRequestHeader('Content-Type', 'application/json');
					xhr.onload = function () {
						if (xhr.status == 200) {
							showToast('Grupo criado com sucesso!', 'green');
							hideModals();
							updateGroup();
						}
					}
					const currentDate = new Date();
					const day = currentDate.getDate();
					let month = currentDate.getMonth() + 1;
					if (month < 10) {
						month = `0${month}`;
					}
					const year = currentDate.getFullYear();
					const date = `${day}/${month}/${year}`
					let data = {
						id_searcher: params.get('idUser'),
						group: $("#save_modal_input").val().charAt(0).toUpperCase() + $("#save_modal_input").val().slice(1).toLowerCase(),
						ids: selectedUsers,
						date: date
					}
					xhr.send(JSON.stringify(data));
				} else {
					showToast('Erro: o nome do grupo já existe.', 'red');
					hideModals();
				}
			} else {
				console.log('ERROR: ' + xhr.status);
			}
		}
		xhr.send();
	} else {
		$("#save_modal_input").css('border-color', '#EA3535')
	}
}

function saveToOrange(button) {
	if (selectedUsers.length > 0) {
		$(button).css({
			'background': 'linear-gradient(92.83deg, #FF7541 0%, #E04C13 100%)',
			'color': '#ffffff',
		});
	}
}

function saveToDefault(button) {
	if (selectedUsers.length > 0) {
		$(button).css({
			'background': 'linear-gradient(94deg, #1F8C69 0%, #0E4936 100%)',
			'color': '#ffffff',
			'cursor': 'pointer'
		})
	} else {
		$(button).css({
			'background': 'none',
			'background-color': '#9F9F9F',
			'color': 'rgb(255, 255, 255, 75%)',
			'cursor': 'default'
		});
	}
}

function hideModals() {
	$("#modal_bg").css('display', 'none');

	let modals = $(".modal");
	modals.hide();

	$(".modal_input").css('border-color', '#E7E7E7').val('');

	$("#title_image_category").css('border-color', '#E7E7E7').val('');
	$("#qnt_image_category").css('border-color', '#E7E7E7').val('');
	$("#desc_image_category").val('');

	$("#title_text_category").css('border-color', '#E7E7E7').val('');
	$("#qnt_text_category").css('border-color', '#E7E7E7').val('');
	$("#desc_text_category").val('');

	$("#title_option_category").css('border-color', '#E7E7E7').val('');
	$("#desc_option_category").val('');
	$(".options").each((index, option) => {
		$(option).css('border-color', '#E7E7E7').val('');
		if (index > 1) {
			option.closest('li').remove()
		}
	});

	let saveBtn = document.querySelectorAll(".saveBtn, .deleteBtn, .cancelBtn");
	Array.from(saveBtn).forEach(button => {
		$(button).css('animation', '');
	});
}

function showToast(text, color) {
	if ($('.toast').hasClass('turn_visible')) {
	} else {
		if (color == 'green') {
			color = '#1F8C69';
		} else if (color == 'red') {
			color = '#EA3535';
		}
		$(".toast_text").text(text);
		$(".toast_color").css('background-color', color);
		$('.toast').addClass('turn_visible');
		$(".toast_line").addClass('line_transition');
		$('.toast_line').one('transitionend', function () {
			$('.toast').addClass('turn_invisible');
			$('.toast').one('transitionend', function () {
				$('.toast').removeClass('turn_visible turn_invisible');
				$('.toast_line').removeClass('line_transition');
			});
		});
	}
}

function goUserInfo(button) {
	window.location.href = '../por-enquanto/user-info.html?userId=' + $(button).data("id");
}

function showCategoryImageModal() {
	$("#modal_bg").css('display', 'block');
	$("#add_image_modal").css('display', 'block');
}

function showCategoryTextModal() {
	$("#modal_bg").css('display', 'block');
	$("#add_text_modal").css('display', 'block');
}

function showCategoryOptionModal(button) {
	lastClickedOptionButton = button;
	if ($(button).text() == "Checkbox") {
		$("#add_option_modal").find('h1').text('Adicionar checkbox')
	} else {
		$("#add_option_modal").find('h1').text('Adicionar opção única')
	}
	$("#modal_bg").css('display', 'block');
	$("#add_option_modal").css('display', 'block');
}

function showSaveProtocolsModal(button) {
	$("#modal_bg").css('display', 'block');
	$("#save_protocols_modal").css('display', 'block');
}

function showDeleteAllModal() {
	$("#modal_bg").css('display', 'block');
	$("#delete_all_modal").css('display', 'block');
}

function addImage() {
	if ($("#title_image_category").val() != '' && $("#qnt_image_category").val() > 0) {
		let span;
		if ($("#desc_image_category").val() != '') {
			span = `(<span>${$("#desc_image_category").val().charAt(0).toUpperCase() + $("#desc_image_category").val().slice(1)}</span>)`;
		} else {
			span = '<span></span>';
		}
		for (let i = 0; i < parseInt($("#qnt_image_category").val()); i++) {
			let html = `<button class="category_div" onmouseover="whiteImage(this)" onmouseout="blackImage(this)" draggable="true">
						<img src="images/image_category.png" alt="image category">
						<p class="category_name">${$("#title_image_category").val().charAt(0).toUpperCase() + $("#title_image_category").val().slice(1).toLowerCase()}</p>
						<p class="category_description">${span}</p>
						</button>`;
			$(".categories_main_article").append(html);
			$("#total_categories").text(parseInt($("#total_categories").text()) + 1)
		}
		if ($("#qnt_image_category").val() == 1) {
			showToast('Categoria inserida com sucesso!', 'green');
		} else {
			showToast('Categorias inseridas com sucesso!', 'green');
		}
		hideModals();
	} else {
		if ($("#title_image_category").val() == '') {
			$("#title_image_category").css('border-color', '#EA3535');
		}
		if ($("#qnt_image_category").val() < 1) {
			$("#qnt_image_category").css('border-color', '#EA3535');
		}
	}
	updateCategories();
}

function addText() {
	if ($("#title_text_category").val() != '') {
		let span;
		if ($("#desc_text_category").val() != '') {
			span = `(<span>${$("#desc_text_category").val().charAt(0).toUpperCase() + $("#desc_text_category").val().slice(1)}</span>)`;
		} else {
			span = '<span></span>';
		}
		let html = `<button class="category_div" onmouseover="whiteImage(this)" onmouseout="blackImage(this)" draggable="true">
						<img src="images/text_category.png" alt="text category">
						<p class="category_name">${$("#title_text_category").val().charAt(0).toUpperCase() + $("#title_text_category").val().slice(1).toLowerCase()}</p>
						<p class="category_description">${span}</p>
					</button>`;
		$(".categories_main_article").append(html);
		showToast('Categoria inserida com sucesso!', 'green');
		hideModals();
		$("#total_categories").text(parseInt($("#total_categories").text()) + 1)
	} else {
		$("#title_text_category").css('border-color', '#EA3535');
	}
	updateCategories();
}

function addOptionCategory() {
	let buttonName;
	if ($(lastClickedOptionButton).text() == 'Checkbox') {
		buttonName = 'check';
	} else {
		buttonName = 'option';
	}
	let filledOptions = 0;
	$(".options").each((index, option) => {
		if ($(option).val() != '') {
			filledOptions += 1;
		}
	});
	if (filledOptions < 2) {
		let qntRedOptions = 0 + filledOptions;
		$(".options").each((index, option) => {
			if ($(option).val() == '') {
				if (qntRedOptions < 2) {
					qntRedOptions += 1;
					$(option).css('border-color', '#EA3535');
				}
			}
		});
	}
	if ($("#title_option_category").val() != '' && filledOptions >= 2) {
		let span;
		if ($("#desc_option_category").val() != '') {
			span = `(<span>${$("#desc_option_category").val().charAt(0).toUpperCase() + $("#desc_option_category").val().slice(1)}</span>)`;
		} else {
			span = '<span></span>';
		}
		let html = `<button class="category_div" onmouseover="whiteImage(this)" onmouseout="blackImage(this)" draggable="true">
						<img src="images/${buttonName}_category.png" alt="${buttonName} category">
						<p class="category_name">${$("#title_option_category").val().charAt(0).toUpperCase() + $("#title_option_category").val().slice(1).toLowerCase()}</p>
						<p class="category_description">${span}</p>
					</button>`;
		$(".categories_main_article").append(html);
		hideModals();
		showToast('Categoria inserida com sucesso!', 'green');
		$("#total_categories").text(parseInt($("#total_categories").text()) + 1)
	} else {
		if ($("#title_option_category").val() == '') {
			$("#title_option_category").css('border-color', '#EA3535');
		}
	}
	updateCategories();
}

function deleteAll() {
	$("#protocol_title").val('');
	$("#protocol_desc").val('');
	$("#protocol_date").val('');
	$("#protocol_time").val('');
	$("#selectedUsers").children('.flex').each((index, user) => {
		selectUser($(user).find('.user_div').attr('id'))
	})
	hideModals()
	showToast('Informações do protocolo apagadas!', 'green')
}

function whiteImage(button) {
	let alt = $(button).find('img').attr('alt');
	if (alt == 'image category') {
		$(button).find('img').attr('src', 'images/image_category_white.png')
	} else if (alt == 'text category') {
		$(button).find('img').attr('src', 'images/text_category_white.png')
	} else if (alt == 'option category') {
		$(button).find('img').attr('src', 'images/option_category_white.png')
	} else if (alt == 'check category') {
		$(button).find('img').attr('src', 'images/check_category_white.png')
	}
}

function blackImage(button) {
	let alt = $(button).find('img').attr('alt');
	if (alt == 'image category') {
		$(button).find('img').attr('src', 'images/image_category.png')
	} else if (alt == 'text category') {
		$(button).find('img').attr('src', 'images/text_category.png')
	} else if (alt == 'option category') {
		$(button).find('img').attr('src', 'images/option_category.png')
	} else if (alt == 'check category') {
		$(button).find('img').attr('src', 'images/check_category.png')
	}
}

function addOption() {
	let length = $("#add_option_modal").find('li').length;
	let html = `<li>
					<div class="label_div"><label>Opção ${length + 1}:</label><input onclick="toGray(this)" type="text" placeholder="Digite o nome da opção" class="option${length + 1} options"></div>
				</li>`;
	let scrollDiv = $("#modal_scroll");
	$('#add_option_modal').find('ul').append(html);
	let modalHeight = scrollDiv.prop("scrollHeight");

	if (scrollDiv.scrollTop() == 0) {
		scrollDiv.animate({ scrollTop: modalHeight }, 1500);
	} else {
		scrollDiv.animate({ scrollTop: modalHeight }, 0);
	}
}

function toGray(input) {
	$(input).css('border-color', '#E7E7E7');
}