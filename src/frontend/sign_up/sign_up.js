var nome = "";
var email = "";
var senha = "";
var tipoDePlantacao = "";
var telefone = "";

function inserirResposta(nome, email, senha, tipoDePlantacao, telefone, categoria) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:2021/insereUsuario', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // A requisição foi concluída e a resposta está pronta
      if (xhr.status === 200) {
        // A requisição foi bem-sucedida (status 200)
        console.log('Requisição bem-sucedida');
        // Aqui você pode realizar qualquer lógica adicional com a resposta recebida do servidor
      } else {
        // A requisição falhou com um status diferente de 200
        console.log('Erro na requisição: ' + xhr.status);
      }
    }
  };

  if (nome === "" || email === "" || senha === "" || tipoDePlantacao === "" || telefone === "") {
    console.log("não foi possível cadastrar o usuário");
    exibirToast03();
  } else {
    var params = new URLSearchParams();
    params.append('Nome', nome);
    params.append('Email', email);
    params.append('Senha', senha);
    params.append('TipoDePlantacao', tipoDePlantacao);
    params.append('Telefone', telefone);
    params.append('Categoria', categoria);

    console.log("cadastro feito com sucesso");

    setTimeout(() => {xhr.send(params.toString())}, 3000)

    exibirToast();
  }
}

function criarConta() {
  var nome = document.getElementById('idNome').value;
  var email = document.getElementById('idEmail').value;
  var senha = document.getElementById('idSenha').value;
  var tipoDePlantacao = document.getElementById('idPla').value;
  var telefone = document.getElementById('idTel').value;
  var categoria = "Agricultor";

  inserirResposta(nome, email, senha, tipoDePlantacao, telefone, categoria);
}

function exibirToast () {
  exibirToast02();
}

function exibirToast02() {
  Toastify({
    text: "CADASTRO FEITO COM SUCESSO!",
    duration: 3000, // Duração em milissegundos
    close: true, // Mostrar botão de fechar
    gravity: "top", // Posição do toast (top, bottom, left, right)
    position: "right", // Alinhamento do toast (left, center, right)
  }).showToast();
}

function exibirToast03() {
  Toastify({
    text: "CADASTRO NÃO REALIZADO, VERIFIQUE SE FORAM PREENCHIDOS TODOS OS CAMPOS!",
    duration: 3000, // Duração em milissegundos
    close: true, // Mostrar botão de fechar
    gravity: "top", // Posição do toast (top, bottom, left, right)
    position: "right", // Alinhamento do toast (left, center, right)
  }).showToast();
}

