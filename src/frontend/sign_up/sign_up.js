var nome = ""; // Variável para armazenar o nome
var email = ""; // Variável para armazenar o email
var senha = ""; // Variável para armazenar a senha
var tipoDePlantacao = ""; // Variável para armazenar o tipo de plantação
var telefone = ""; // Variável para armazenar o telefone
var senha2 = ""; // Variável para confirmar senha

function inserirResposta(nome, email, senha, tipoDePlantacao, telefone, categoria, senha2) {
  // Cria um objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:2021/insereUsuario', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // A requisição foi concluída e a resposta está pronta
      if (xhr.status === 200) {
        // A requisição foi bem-sucedida (status 200)
        console.log('Requisição bem-sucedida');
      } else {
        // A requisição falhou com um status diferente de 200
        console.log('Erro na requisição: ' + xhr.status);
      }
    }
  };

  if (nome === "" || email === "" || senha === "" || senha2 === "" || tipoDePlantacao === "" || telefone === "") {
    exibirToast03(); // Exibe uma mensagem de erro
    return;
  } else if (senha !== senha2) {
    exibirToast04(); // Exibe uma mensagem de erro
    return;
  } else if (!/@.+/.test(email)) {
    exibirToast05(); // Exibe uma mensagem de erro
    return;
  }

  // Se todas as verificações passarem, prossegue com o cadastro
  var params = new URLSearchParams();
  params.append('Nome', nome);
  params.append('Email', email);
  params.append('Senha', senha);
  params.append('ConfirmarSenha', senha2);
  params.append('TipoDePlantacao', tipoDePlantacao);
  params.append('Telefone', telefone);
  params.append('Categoria', categoria);

  console.log("Cadastro feito com sucesso");

  setTimeout(() => {
    xhr.send(params.toString()); // Envia a requisição após um atraso de 3 segundos
  }, 3000);

  exibirToast02(); // Exibe uma mensagem de sucesso
}


function criarConta() {
  var nome = document.getElementById('idNome').value;
  var email = document.getElementById('idEmail').value;
  var senha = document.getElementById('idSenha').value;
  var senha2 = document.getElementById('idSenha2').value;
  var tipoDePlantacao = document.getElementById('idPla').value;
  var telefone = document.getElementById('idTel').value;
  var categoria = "agricultor";

  inserirResposta(nome, email, senha, tipoDePlantacao, telefone, categoria, senha2);
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

function exibirToast05() {
  Toastify({
    text: "ISSO NÃO É UM EMAIL!",
    duration: 3000, // Duração em milissegundos
    close: true, // Mostrar botão de fechar
    gravity: "top", // Posição do toast (top, bottom, left, right)
    position: "right", // Alinhamento do toast (left, center, right)
  }).showToast();
}

function exibirToast04() {
  Toastify({
    text: "SENHAS DIFERENTES!",
    duration: 3000, // Duração em milissegundos
    close: true, // Mostrar botão de fechar
    gravity: "top", // Posição do toast (top, bottom, left, right)
    position: "right", // Alinhamento do toast (left, center, right)
  }).showToast();
}
