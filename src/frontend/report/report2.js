var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('idUser');

var urlParams = new URLSearchParams(window.location.search);
var protcolId = urlParams.get('idProtocolo');


console.log('oi', userId, protcolId)

        fetch('http://localhost:2021/protocolo?Id_Usuario_FK=' + userId)
            .then(function (response) {
                if (response.ok) {
                return response.json();
                }
                throw new Error('Request error');
            })
            .then(function (data) {
                data.forEach(element => {
                    var desc = element.Descricao
                    var name = element.Nome_Protocolo

                    document.getElementById('protocol_name').innerHTML = name;
                    document.getElementById('phrase').innerHTML = desc;
                });
            })
            .catch(function(error) {
                console.error('Error:', error.message);
            });

            fetch('http://localhost:2021/perguntas?Id_Protocolo_FK=' + protcolId)
            .then(function (response) {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Request error');
            })
            .then(function (data) {
              var saida = "";
              data.forEach(pergunta => {
                var perguntaId = pergunta.Id_Pergunta;
                if (pergunta.Tipo === 'imagem') {
                  saida += `
                    <div class="category">
                      <div class="category_header">
                        <img src="images/image_category.png" alt="Ícone da categoria de imagem">
                        <h2 class="category_name">${pergunta.Titulo}</h2>
                      </div>
                      <h3 class="category_desc">${pergunta.Pergunta}</h3>
                      <div class="category_inputs">
                        <ul>
                          <!--Buttons for inserted and non-inserted images-->
                          <li><span>Imagem:</span><input name="fileU" type="file" id="respImg_${perguntaId}" class=""></li>
                          <input name="idImage" type="hidden" name="pergID" class="pergID" value="${pergunta.Id_Pergunta}" data-type="Img" />
                        </ul>
                      </div>
                    </div>
                    <div class="line"></div>
                  `;
    
                } else if (pergunta.Tipo === 'texto') {
                  saida += `
                    <div class="category">
                      <div class="category_header">
                        <img src="images/text_category.png" alt="Ícone da categoria de texto">
                        <h2 class="category_name">${pergunta.Titulo}</h2>
                      </div>
                      <h3 class="category_desc">${pergunta.Pergunta}</h3>
                      <div class="category_inputs">
                        <textarea name="inputText" id="respTxt_${perguntaId}" required></textarea>
                        <label>Digite sua resposta aqui.</label>
                        <input type="hidden" name="pergID" class="pergID" value="${pergunta.Id_Pergunta}" data-type="Text" required/>
                      </div>
                    </div>
                    <div class="line"></div>
                  `;
                } else if (pergunta.Tipo === 'checkbox') {
                  saida += `
                    <div class="category">
                      <div class="category_header">
                        <img src="images/check_category.png" alt="Ícone da categoria de checkbox">
                        <h2 class="category_name">${pergunta.Titulo}</h2>
                      </div>
                      <h3 class="category_desc">${pergunta.Pergunta}</h3>
                      <div class="category_inputs_checkbox" id="checkbox_${perguntaId}">
                      </div>
                    </div>
                    <div class="line"></div>
                  `;
                  fetch('http://localhost:2021/option?Id_Pergunta_FK=' + perguntaId)
                    .then(function (response) {
                      if (response.ok) {
                        return response.json();
                      }
                      throw new Error('Request error');
                    })
                    .then(function (options) {
                      var checkboxDiv = document.getElementById('checkbox_' + perguntaId);
                      options.forEach(option => {
                        var optionId = option.Id_Option;
                        var optionLabel = option.nome_option;
                        var optionHTML = `
                          <div class="option_div">
                            <input class="checss" type="checkbox" name="checkbox_${perguntaId}" id="checkbox_${perguntaId}_${optionId}" value="${optionId}">
                            <label for="checkbox_${perguntaId}_${optionId}">${optionLabel}</label>
                          </div>
                        `;
                        checkboxDiv.innerHTML += optionHTML;
                      });
                    })
                    .catch(function (error) {
                      console.error('Erro na requisição das opções:', error);
                    });
                } else if (pergunta.Tipo === 'opcao') {
                  saida += `
                    <div class="category">
                      <div class="category_header">
                        <img src="images/option_category.png" alt="Ícone da categoria de opções">
                        <h2 class="category_name">${pergunta.Titulo}</h2>
                      </div>
                      <h3 class="category_desc">${pergunta.Pergunta}</h3>
                      <div class="category_inputs" id="option_${perguntaId}">
                      </div>
                    </div>
                    <div class="line"></div>
                  `;
                  fetch('http://localhost:2021/option?Id_Pergunta_FK=' + perguntaId)
                    .then(function (response) {
                      if (response.ok) {
                        return response.json();
                      }
                      throw new Error('Request error');
                    })
                    .then(function (options) {
                      var optionDiv = document.getElementById('option_' + perguntaId);
                      options.forEach(option => {
                        var optionId = option.Id_Option;
                        var optionLabel = option.nome_option;
                        var optionHTML = `
                        <!--Options-->
                        <div class="option_div">
                            <input class="radioo" type="radio" name="option_${perguntaId}" id="option_${perguntaId}_${optionId}" value="${optionId}">
                            <label for="option_${perguntaId}_${optionId}">${optionLabel}</label>
                        </div>
                        `;
                        optionDiv.innerHTML += optionHTML;
                      });
                    })
                    .catch(function (error) {
                      console.error('Erro na requisição das opções:', error);
                    });
                }
              });
    
              document.getElementById('scroll').innerHTML += saida;
              
            })
            .catch(function (error) {
              console.error('Erro na requisição das perguntas:', error);
            });


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
    window.location.href = "/report/report.html?idUser=" + userId;
  }
  
  function toReports (){
    window.location.href = "/report/report.html?idUser=" + userId;
  }
  
  function toUser (){
    window.location.href = "/select-user/select-user.html?idUser=" + userId;
  }
  
  function toCad (){
    window.location.href = "/sign-up/sign-up.html?idUser=" + userId;
  }
  
  function toCreate (){
    window.location.href = "/create-protocols/create-protocols.html?idUser=" + userId;
  }


  
