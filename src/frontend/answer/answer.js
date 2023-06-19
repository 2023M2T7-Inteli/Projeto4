var urlParams1 = new URLSearchParams(window.location.search);
var protocoloId = urlParams1.get('idProtocol');

var urlParams2 = new URLSearchParams(window.location.search);
var userId = urlParams2.get('idUser');

fetch('http://localhost:2021/protocolo2?Id_Protocolo=' + protocoloId)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      const titulo = data[i].Nome_Protocolo;
      const desc = data[i].Descricao;

      document.getElementById('desc').innerHTML = desc;
      document.getElementById('protocol_name').innerHTML = titulo;

      console.log('oi', desc, titulo);
    }

      fetch('http://localhost:2021/perguntas?Id_Protocolo_FK=' + protocoloId)
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
            console.log(pergunta, perguntaId);
            if (pergunta.Tipo === 'Img') {
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
                      <li><span>Imagem:</span><input  name="fileU" type="file" id="respImg_${perguntaId}" class=""></li>
                      <input name="idImage" type="hidden" name="pergID" class="pergID" value="${pergunta.Id_Pergunta}" data-type="Img" />
                    </ul>
                  </div>
                </div>
                <div class="line"></div>
              `;
            } else if (pergunta.Tipo === 'Text') {
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
                    <input type="hidden" name="pergID" class="pergID" value="${pergunta.Id_Pergunta}" data-type="Text" />
                  </div>
                </div>
                <div class="line"></div>
              `;
            } else if (pergunta.Tipo === 'Checkbox') {
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
                        <input type="checkbox" name="checkbox_${perguntaId}" id="checkbox_${perguntaId}_${optionId}">
                        <label for="checkbox_${perguntaId}_${optionId}">${optionLabel}</label>
                      </div>
                    `;
                    checkboxDiv.innerHTML += optionHTML;
                  });
                })
                .catch(function (error) {
                  console.error('Erro na requisição das opções:', error);
                });
            } else if (pergunta.Tipo === 'Option') {
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
                        <input type="radio" name="option_${perguntaId}" id="option_${perguntaId}_${optionId}">
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

          document.getElementById('scroll2').innerHTML = saida;
          
        })
        .catch(function (error) {
          console.error('Erro na requisição das perguntas:', error);
        });
      });

function voltarTela() {
  window.location.href = "/select_P/select_P.html?idUser=" + userId;
}

function enviarForms() {
  var pergIdElements = document.getElementsByClassName('pergID');
  var data = []; // Array para armazenar os dados das respostas
  var formData = new FormData(); // FormData para enviar a imagem
  var idPerguntaImg; // Variável separada para o ID da pergunta relacionada à imagem

  for (var i = 0; i < pergIdElements.length; i++) {
    var pergIdElement = pergIdElements[i];
    var pergId = pergIdElement.value;
    var pergtype = pergIdElement.dataset.type;

    var perguntaId = pergId;
    var resposta = {};

    if (pergtype === 'Text') {
      var respostaTxt = document.getElementById('respTxt_' + perguntaId).value;
      resposta.Respostatxt = respostaTxt;
      resposta.Id_Pergunta_FK = pergId; // Chave estrangeira para respostas de texto
      data.push(resposta);
    }

    if (pergtype === 'Img') {
      var respostaImg = document.getElementById('respImg_' + perguntaId).files[0];
      formData.append('file', respostaImg);
      idPerguntaImg = pergId; // Armazena o ID da pergunta para respostas de imagem

      // Adiciona a chave estrangeira apenas para respostas de imagem no formData
      formData.append('Id_Pergunta_FK', idPerguntaImg);
    }
  }

  console.log('Dados do formulário:', data);
  console.log('Img:', formData, respostaImg, idPerguntaImg);
  
  fetch('http://localhost:2021/insereResposta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        console.log('Respostas enviadas com sucesso!', data);
      } else {
        throw new Error('Erro ao enviar as respostas. Código de status: ' + response.status);
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });

  fetch('http://localhost:2021/respImg', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        console.log('Imagem enviada com sucesso!');
      } else {
        throw new Error('Erro ao enviar a imagem. Código de status: ' + response.status);
      }
    })
    .catch(error => {
      console.error('Erro ao enviar a imagem:', error);
    });
}