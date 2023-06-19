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
      // ...

// Check if the login was successful
if (emailExistente && senhaExistente) {
// Login successful
  console.log("Login feito");

// Get the user ID
  var userID = usuarios[i].Id_Usuario; // Supondo que a propriedade do ID do usuário seja chamada de "ID"

// Proceed to the next screen and pass the userid through the URL
  if (tipoA === "agricultor") {
    window.location.href = "/agricultor/agricultor.html?idUser=" + userID;
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