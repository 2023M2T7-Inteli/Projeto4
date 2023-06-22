var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('idUser');

    console.log('oi', userId)
    fetch('http://localhost:2021/protocolo?Id_Usuario_FK=' + userId)
            .then(function (response) {
                if (response.ok) {
                return response.json();
                }
                throw new Error('Request error');
            })
            .then(function (data) {
                var saida = '';
                data.forEach(element => {
                    var date = element.Data
                    var name = element.Nome_Protocolo
                    var status = element.Atividade 
                    var id = element.Id_Protocolo

                    saida += `
                <button onclick="entrar(${id})" class="protocols">
                        <p class="p1">${date}</p>
                        <p class="p2">${name}</p>
                        <p class="p3">${status}</p>
                        <p class="p4">4</p>
                        <p class="p5">4</p>
                </button>
                `
                });
                document.getElementById('protocols').innerHTML = saida;
            })
            .catch(function(error) {
                console.error('Error:', error.message);
            });

function entrar(idProtocolo) {
    window.location.href = "section2.html?idProtocolo=" + idProtocolo + "&idUser=" + userId;
    console.log('aquiui')

    fetch('http://localhost:2021/perguntas?Id_Protocolo_FK=' + idProtocolo)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request error');
        })
        .then(function (data) {
            console.log("perguntas: ", data);
        })
        .catch(function(error) {
            console.error('Error:', error.message);
        });
}


function section3() {
    window.location.href = "section3.html";
}

function back2() {
    window.location.href = "section2.html";
}

function sendToCreateProtocols() {
	window.location.href = '../create-protocols/create-protocols.html?idUser=' + params.get('idUser');
}

function sendToUsers() {
	window.location.href = '../select-user/select-user.html?idUser=' + params.get('idUser');
}

function sendToSignUp() {
	window.location.href = '../sign-up/sign-up.html?idUser=' + params.get('idUser');
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

function changeBackground(button) {
    $(button).prev().css('background', 'linear-gradient(90.09deg, #FF7541 0%, #E04C13 100%)')
    $(button).prev().find('p').css('color', '#FFFFFF')
}

function changeBackground2(button) {
    $(button).prev().css('background', '')
    $(button).prev().find('p').css('color', '#535353')
}

$(document).ready(() => {
    let saveBtn = document.querySelectorAll(".deleteBtn, .cancelBtn");
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

function hideModals() {
    $("#modal_bg").css('display', 'none');
    let modals = $(".modal");
    modals.hide();
    let saveBtn = document.querySelectorAll(".deleteBtn, .cancelBtn");
    Array.from(saveBtn).forEach(button => {
        $(button).css('animation', '');
    });
}

function showModals() {
    $("#modal_bg").css('display', 'block');
    $("#delete_all_modal").css('display', 'block');
}

function back() {
    window.location.href = "/reports/index.html?idUser=" + userId;
  }
  
  function toCad() {
    window.location.href = "/sign-up/sign-up.html?idUser=" + userId;
  }
  
  function toCreate() {
    window.location.href = "/create-protocols/create-protocols.html?idUser=" + userId;
  }
  
