var urlParams1 = new URLSearchParams(window.location.search);
var protocoloId = urlParams1.get('idProtocol');

var urlParams2 = new URLSearchParams(window.location.search);
var userId = urlParams2.get('idUser');

var atualizacao2 = {}
var atualizacao3 = {}
var atualizacaoP2 = []
var atualizacaoRadio = []
var atualizacaoCheck = []

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
      const dataP = data[i].Data;
      const horaP = data[i].Horario;
      const visuP = data[i].Visualizado;

      var atualizacaoProtocolo = {
        Id_Protocolo: protocoloId,
        Atividade: "Concluido",
        Id_Usuario_FK: userId,
        Nome_Protocolo: titulo,
        Descricao: desc,
        Data: dataP,
        Horario: horaP,
        Visualizado: visuP
        }
        
      atualizacaoP2.push(atualizacaoProtocolo)
      document.getElementById('desc').innerHTML = desc;
      document.getElementById('protocol_name').innerHTML = titulo;
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

          document.getElementById('scroll2').innerHTML = saida;
          
        })
        .catch(function (error) {
          console.error('Erro na requisição das perguntas:', error);
        });
      });

function voltarTela() {
  window.location.href = "/select-protocol/select-protocol.html?idUser=" + userId;
}

function enviarForms() {
  var atualizacao = []
  const checkboxes2 = document.querySelectorAll('.checss');
  Array.from(checkboxes2).map( check => {
    var oi = check.value
    // var varia = document.getElementById(id);
    if (check.checked) {
      console.log('marcado');
      atualizacao2 = {
        Id_Option: oi,
        resposta: 'marcado'
      }
      atualizacao.push(atualizacao2)
      atualizacaoCheck.push(atualizacao2)
    } else {
      atualizacao3 = {
        Id_Option: oi,
        resposta: 'desmarcado'
    }
    atualizacao.push(atualizacao3)
    atualizacaoCheck.push(atualizacao3)
    }
   })

   const optionboxes2 = document.querySelectorAll('.radioo');
   Array.from(optionboxes2).map( check => {
    
     var oi = check.value
     // var varia = document.getElementById(id);
     if (check.checked) {
       console.log('marcado');
       atualizacao2 = {
         Id_Option: oi,
         resposta: 'marcado',
         Id_Pergunta_FK: perguntaId
       }
       atualizacao.push(atualizacao2)
       atualizacaoRadio.push(atualizacao2) 
       } else {
       atualizacao3 = {
         Id_Option: oi,
         resposta: 'desmarcado',
         Id_Pergunta_FK: perguntaId
     }
     atualizacao.push(atualizacao3)
     atualizacaoRadio.push(atualizacao3)
     }
    })

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

      var isFormValid = true;
      var isFormValid2 = false;
      var isFormValid3 = false;

      var inputs = document.querySelectorAll('input[type="text"], input[type="file"], textarea');

      for (var i = 0; i < inputs.length; i++) {
        console.log('entrei: ', inputs[i].value)
        if (inputs[i].value === '') {
          isFormValid = false;
          console.log('input', isFormValid)
          break;
        }
      }

      for(var i = 0; i < atualizacaoRadio.length; i++){
        var marcacao = atualizacaoRadio[i].resposta;
    
        if (marcacao === 'marcado') {
          isFormValid2 = true;
          console.log("aquii Radio", isFormValid2)
          break
        }
      }
      console.log(optionboxes2);
      for(var i = 0; i < atualizacaoCheck.length; i++){
        var marcacao2 = atualizacaoCheck[i].resposta;
        console.log("marcacao2:", marcacao2);
        if (marcacao2 === 'marcado') {
          isFormValid3 = true;
          console.log("aquii Check", isFormValid3)
          break
        }
      }
    
        console.log("is form 1: ", isFormValid);
        console.log("is form 2: ", isFormValid2);
        console.log("is form 3: ", isFormValid3);

        console.log("atualiza check: ", atualizacaoCheck);
        console.log("Atualização radio: ", atualizacaoRadio);

      if (isFormValid === false && isFormValid2 === true && isFormValid3 === true) {
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

        fetch('http://localhost:2021/atualizaOption', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(atualizacao)
        })
          .then(response => {
            if (response.ok) {
              console.log('Respostas enviadas com sucesso!', atualizacao);
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
              console.log('Respostas enviadas com sucesso!', formData);
            } else {
              throw new Error('Erro ao enviar a imagem. Código de status: ' + response.status);
            }
          })
          .catch(error => {
            console.error('Erro ao enviar a imagem:', error);
          });

        window.location.href = "/select-protocol/select-protocol.html?idUser=" + userId;

      fetch('http://localhost:2021/atualizaProtocolo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(atualizacaoP2)
        })
          .then(response => {
            if (response.ok) {
              console.log('Respostas enviadas com sucesso!', atualizacaoP2);
            } else {
              throw new Error('Erro ao enviar as respostas. Código de status: ' + response.status);
            }
          })
          .catch(error => {
            console.error('Erro na requisição:', error);
          });
      }
      else {
        console.log('Por favor, preencha todos os campos antes de enviar o formulário.');
        exibirToast00();
        return;
      }
}

function exibirToast00() {
  Toastify({
    text: "PREENCHA TUDO PARA ENVIAR!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Toast position (top, bottom, left, right)
    position: "right", // Toast alignment (left, center, right)
  }).showToast();
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
