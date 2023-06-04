var nome = ""; // Variável para armazenar o nome
var email = ""; // Variável para armazenar o email
var senha = ""; // Variável para armazenar a senha
var tipoDePlantacao = ""; // Variável para armazenar o tipo de plantação
var telefone = ""; // Variável para armazenar o telefone

function inserirResposta(nome, email, senha, tipoDePlantacao, telefone, categoria) {
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

  if (nome === "" || email === "" || senha === "" || tipoDePlantacao === "" || telefone === "") {
    // Verifica se algum campo está vazio
    console.log("não foi possível cadastrar o usuário");
    exibirToast03(); // Exibe uma mensagem de erro
  } else {
    var params = new URLSearchParams();
    params.append('Nome', nome);
    params.append('Email', email);
    params.append('Senha', senha);
    params.append('TipoDePlantacao', tipoDePlantacao);
    params.append('Telefone', telefone);
    params.append('Categoria', categoria);

    console.log("cadastro feito com sucesso");

    setTimeout(() => {
      xhr.send(params.toString()); // Envia a requisição após um atraso de 3 segundos
    }, 3000);

    exibirToast(); // Exibe uma mensagem de sucesso
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
  exibirToast02(); // Chama a função para exibir um toast de sucesso
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
