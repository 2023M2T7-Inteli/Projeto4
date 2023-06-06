// Function to verify the user
function verificaUsuario() {
  // Get the email and password from the form
  var email = document.getElementById('idEMail').value;
  var senha = document.getElementById('idSEnha').value;
  
  // Variables to store the user type
  var tipoA = "";
  var tipoP = "";
  
  // Create an AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:2021/usuarios', false);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Convert the response into a JSON object
      var usuarios = JSON.parse(xhr.responseText);
  
      // Variables to check if the email and password exist
      var emailExistente = false;
      var senhaExistente = false;
  
      // Check if the email and password exist in the database
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].Email === email && usuarios[i].Senha === senha) {
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
      // ...

// Verificar se o login foi bem-sucedido
if (emailExistente && senhaExistente) {
  // Login bem-sucedido
  console.log("Login feito");

  // Obter o ID do usuário
  var userID = usuarios[i].Id_Usuario; // Supondo que a propriedade do ID do usuário seja chamada de "ID"

  // Prosseguir para a próxima tela e passar o ID do usuário pela URL
  if (tipoA === "agricultor") {
    window.location.href = "/agricultor/agricultor.html?id=" + userID;
  } else if (tipoP === "pesquisador") {
    window.location.href = "/create-protocols/create-protocols.html?id=" + userID;
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
