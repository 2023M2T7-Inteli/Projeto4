// Function to verify the user
function verificaUsuario() {
  // Get the email and password from the form
  var email = document.getElementById('idEMail').value;
  var senha = document.getElementById('idSEnha').value;

  email = String(email);
  senha = String(senha);
  
  // Variables to store the user type
  var tipoA = "";
  var tipoP = "";
  var emailExistente = false;
  var senhaExistente = false;
  
  // Create an AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:2021/usuarios', false);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Convert the response into a JSON object
      var usuarios = JSON.parse(xhr.responseText);
  
      // Check if the email and password exist in the database
      for (var i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i].Email);
        console.log(email);
        console.log(usuarios[i].Senha);
        console.log(senha);
        if (usuarios[i].Email === email && String(usuarios[i].Senha) === senha) {
          emailExistente = true;
          senhaExistente = true;
    
          // Set the category variable based on the found user
          if (usuarios[i].Categoria === "agricultor") {
            tipoA = "agricultor";
          } else if (usuarios[i].Categoria === "pesquisador") {
            tipoP = "pesquisador";
          }

          break; // Terminate the loop after finding the corresponding user
        }
      }

// Check if the login was successful
if (emailExistente && senhaExistente) {
// Login successful
  console.log("Login feito");

// Get the user ID
  var userID = usuarios[i].Id_Usuario; // Supondo que a propriedade do ID do usuário seja chamada de "ID"

// Proceed to the next screen and pass the userid through the URL
  if (tipoA === "agricultor") {
    window.location.href = "/farmer/farmer.html?idUser=" + userID;
  } else if (tipoP === "pesquisador") {
    window.location.href = "/create-protocols/create-protocols.html?idUser=" + userID;
  }
      } else {
        // Login failed
        exibirToast00();
        console.log("Login failed");
      }
          
    } else {
      console.log('Request error: ' + xhr.status);
    }
  };
  
  // Send the request
  xhr.send();
}

// Function to display a toast for failed login
function exibirToast00() {
  Toastify({
    text: "LOGIN ERRADO, VERIFIQUE SEUS DADOS!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Toast position (top, bottom, left, right)
    position: "right", // Toast alignment (left, center, right)
  }).showToast();
}

function mostrarSenha() {
  var passwordField = document.getElementById("idSEnha");
  var passwordIcon = document.getElementById("seepassword_icon2");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordIcon.src = "images/hide.png";
  } else {
    passwordField.type = "password";
    passwordIcon.src = "images/hide.png";
  }
}

function telaNDesenvolida() {
  Toastify({
    text: "TELA NÃO DESENVOLVIDA, CONTATE O SUPORTE PARA RECUPERAR SUA SENHA!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Toast position (top, bottom, left, right)
    position: "right", // Toast alignment (left, center, right)
  }).showToast();
}

function verificaUsuario2() {
  console.log('oi');
  
  // Get the email and password from the form
  var email = document.getElementById('idEmail2').value;
  var senha = document.getElementById('idSenha2').value;
  console.log(email);
  console.log(senha);

  email = String(email);
  senha = String(senha);

  // Variables to store the user type
  var tipoA = "";
  var tipoP = "";
  var emailExistente = false;
  var senhaExistente = false;

  // Create an AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:2021/usuarios', false);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Convert the response into a JSON object
      var usuarios = JSON.parse(xhr.responseText);

      // Check if the email and password exist in the database
      for (var i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i].Email);
        console.log(email);
        console.log(usuarios[i].Senha);
        console.log(senha);
        if (usuarios[i].Email === email && String(usuarios[i].Senha) === senha) {
          emailExistente = true;
          senhaExistente = true;

          // Set the category variable based on the found user
          if (usuarios[i].Categoria === "agricultor") {
            tipoA = "agricultor";
          } else if (usuarios[i].Categoria === "pesquisador") {
            tipoP = "pesquisador";
          }

          break; // Terminate the loop after finding the corresponding user
        }
      }
      
      // Check if the login was successful
      if (emailExistente && senhaExistente) {
        // Login successful
        console.log("Login feito");

        // Get the user ID
        var userID = usuarios[i].Id_Usuario; // Supondo que a propriedade do ID do usuário seja chamada de "Id_Usuario"

        // Proceed to the next screen and pass the user ID through the URL
        if (tipoA === "agricultor") {
          window.location.href = "/farmer/farmer.html?idUser=" + userID;
        } else if (tipoP === "pesquisador") {
          window.location.href = "/create-protocols/create-protocols.html?idUser=" + userID;
        }
      } else {
        // Login failed
        exibirToast00();
        console.log("Login failed");
      }
    } else {
      console.log('Request error: ' + xhr.status);
    }
  };

  // Send the AJAX request
  xhr.send();
}

function mostrarSenha2() {
  var passwordField = document.getElementById("idSenha2");
  var passwordIcon = document.getElementById("seepassword_icon2");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordIcon.src = "images/hide.png";
  } else {
    passwordField.type = "password";
    passwordIcon.src = "images/hide.png";
  }
}

function telaNDesenvolida2() {
  Toastify({
    text: "TELA NÃO DESENVOLVIDA, CONTATE O SUPORTE PARA RECUPERAR SUA SENHA!",
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Toast position (top, bottom, left, right)
    position: "right", // Toast alignment (left, center, right)
  }).showToast();
}

