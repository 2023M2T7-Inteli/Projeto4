var nome = ""; // Variable to store the name
var email = ""; // Variable to store the email
var senha = ""; // Variable to store the password
var tipoDePlantacao = ""; // Variable to store the type of plantation
var senha2 = ""; // Variable to confirm the password

function inserirResposta(nome, email, senha, tipoDePlantacao, categoria, senha2) {
  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:2021/insereUsuario', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // The request has been completed and the response is ready
      if (xhr.status === 200) {
        // The request was successful (status 200)
        console.log('Successful request');
      } else {
        // The request failed with a status other than 200
        console.log('Request error: ' + xhr.status);
      }
    }
  };

  if (nome === "" || email === "" || senha === "" || senha2 === "" || tipoDePlantacao === "") {
    exibirToast03(); // Display an error message
    return;
  } else if (senha !== senha2) {
    exibirToast04(); // Display an error message
    return;
  } else if (!/@.+/.test(email)) {
    exibirToast05(); // Display an error message
    return;
  }

  // If all checks pass, proceed with the registration
  var params = new URLSearchParams();
  params.append('Nome', nome);
  params.append('Email', email);
  params.append('Senha', senha);
  params.append('ConfirmarSenha', senha2);
  params.append('TipoDePlantacao', tipoDePlantacao);
  params.append('Categoria', categoria);

  console.log("Registration successful");

  setTimeout(() => {
    xhr.send(params.toString()); // Send the request after a delay of 3 seconds
  }, 3000);

  exibirToast02(); // Display a success message
}

function criarConta() {
  // Retrieve user input values from the form
  var nome = document.getElementById('idNome').value;
  var email = document.getElementById('idEmail').value;
  var senha = document.getElementById('idSenha').value;
  var senha2 = document.getElementById('idSenha2').value;
  var tipoDePlantacao = document.getElementById('idPla').value;
  var categoria = "agricultor";

  // Call the inserirResposta() function to handle the registration process
  inserirResposta(nome, email, senha, tipoDePlantacao, categoria, senha2);
}

function exibirToast02() {
  limparDados();
  Toastify({
    text: "REGISTRO CONCLUIDO!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Toast position (top, bottom, left, right)
    position: "right", // Toast alignment (left, center, right)
  }).showToast();
}

function exibirToast03() {
  Toastify({
    text: "REGISTRO NÃO CONCLUIDO, VERIFIQUE SE TODOS OS CAMPOS FORAM PREENCHIDOS!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Toast position (top, bottom, left, right)
    position: "right", // Toast alignment (left, center, right)
  }).showToast();
}

function exibirToast05() {
  Toastify({
    text: "ISSO NÃO É UM EMAIL!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Toast position (top, bottom, left, right)
    position: "right", // Toast alignment (left, center, right)
  }).showToast();
}

function exibirToast04() {
  Toastify({
    text: "SENHAS DIFERENTES!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Toast position (top, bottom, left, right)
    position: "right", // Toast alignment (left, center, right)
  }).showToast();
}

function limparDados() {
  // Retrieve DOM elements for the form fields
  var idNome = document.getElementById("idNome");
  var idEmail = document.getElementById("idEmail");
  var idSenha = document.getElementById("idSenha");
  var idSenha2 = document.getElementById("idSenha2");
  var idPla = document.getElementById("idPla");

  // Check if all DOM elements exist
  if (idNome && idEmail && idSenha && idSenha2 && idPla) {
    // Clear the values of the form fields
    idNome.value = "";
    idEmail.value = "";
    idSenha.value = "";
    idSenha2.value = "";
    idPla.value = "";
  }
}



