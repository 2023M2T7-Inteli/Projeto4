var tabela; // Variável global para referenciar a tabela

// Função para exibir uma nova linha com as informações na tabela
function exibirNovaLinha(idPergunta, pergunta, idResposta, resposta) {
  var novaLinha = document.createElement('tr');

  var colunaIdPergunta = document.createElement('td');
  colunaIdPergunta.textContent = idPergunta;

  var colunaPergunta = document.createElement('td');
  colunaPergunta.textContent = pergunta;

  var colunaIdResposta = document.createElement('td');
  colunaIdResposta.textContent = idResposta;

  var colunaResposta = document.createElement('td');
  colunaResposta.textContent = resposta;

  novaLinha.appendChild(colunaIdPergunta);
  novaLinha.appendChild(colunaPergunta);
  novaLinha.appendChild(colunaIdResposta);
  novaLinha.appendChild(colunaResposta);

  tabela.appendChild(novaLinha);
}

// Função para fazer uma requisição AJAX para obter os IDs de resposta
function obterDados() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://127.0.0.1:2021/JOIN_Pergunta_Resposta', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var respostas = JSON.parse(xhr.responseText);

        respostas.map(resposta => {
          console.log(resposta)
          exibirNovaLinha(resposta.Id_Pergunta, resposta.Pergunta, resposta.Id_Resposta, resposta.Resposta)
        })

      } else {
        console.error('Erro ao obter as respostas:', xhr.status);
      }
    }
  };
  xhr.send();
}

// Função para inserir uma resposta no banco de dados
function inserirResposta(resposta, idPergunta) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:2021/insereResposta', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    
  };

  var params = 'Resposta=' + encodeURIComponent(resposta) + '&Id_Pergunta_FK=' + encodeURIComponent(idPergunta);
  xhr.send(params);
}

// Função para carregar as perguntas do banco de dados
function carregarBanco() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:2021/perguntas', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var perguntas = JSON.parse(xhr.responseText);

      tabela = document.getElementById('table-01');
      tabela.innerHTML = '';

      perguntas.forEach(function (pergunta) {
        var novaLinha = document.createElement('tr');
        novaLinha.setAttribute('data-pergunta-id', pergunta.Id_Pergunta);

        var colunaIdPergunta = document.createElement('td');
        colunaIdPergunta.textContent = pergunta.Id_Pergunta;

        var colunaPergunta = document.createElement('td');
        colunaPergunta.textContent = pergunta.Pergunta;

        var colunaIdResposta = document.createElement('td');
        var respostaIdSpan = document.createElement('span');
        respostaIdSpan.textContent = ''; // Será preenchido com o ID da resposta ao clicar no botão "Enviar Dados"
        colunaIdResposta.appendChild(respostaIdSpan);

        var colunaResposta = document.createElement('td');
        var inputResposta = document.createElement('input');
        inputResposta.type = 'text';
        inputResposta.name = 'resposta_' + pergunta.Id_Pergunta;
        colunaResposta.appendChild(inputResposta);

        novaLinha.appendChild(colunaIdPergunta);
        novaLinha.appendChild(colunaPergunta);
        novaLinha.appendChild(colunaIdResposta);
        novaLinha.appendChild(colunaResposta);

        tabela.appendChild(novaLinha);
      });

      var enviarDadosBtn = document.getElementById('enviarDados');
      enviarDadosBtn.addEventListener('click', function () {
        var linhas = tabela.getElementsByTagName('tr');
        var respostas = [];

        for (var i = 0; i < linhas.length; i++) {
          var linha = linhas[i];
          var perguntaId = linha.getAttribute('data-pergunta-id');
          var inputResposta = linha.querySelector('input[type="text"]');
          var resposta = inputResposta.value;

          respostas.push({ perguntaId: perguntaId, resposta: resposta });
        }

        respostas.forEach(function (resposta) {
          var perguntaId = resposta.perguntaId;
          var respostaTexto = resposta.resposta;

          //Chama a função para inserir a resposta no banco de dados
          inserirResposta(respostaTexto, perguntaId);
        });

        //Chama a função para obter os IDs de resposta após inserir as respostas
        setTimeout(() => {obterDados()}, 100)
      });
    }
  };
  xhr.send();
}

// Chama a função para carregar as perguntas do banco de dados
carregarBanco();

  