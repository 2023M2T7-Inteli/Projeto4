function verificaUsuario() {
    var email = document.getElementById('idEMail').value;
    var senha = document.getElementById('idSEnha').value;
    var tipoA = "";
    var tipoP = "";
  
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:2021/usuarios', false);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var usuarios = JSON.parse(xhr.responseText);
  
        var emailExistente = false;
        var senhaExistente = false;
  
        // Verificar se o email e senha existem no banco de dados
        for (var i = 0; i < usuarios.length; i++) {
          if (usuarios[i].Email === email && usuarios[i].Senha === senha) {
            emailExistente = true;
            senhaExistente = true;
            break;
          }
        }

        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].Categoria === "agricultor") {
                tipoA = "agricultor"
            }
            else if (usuarios[i].Categoria === "pesquisador") {
                tipoP = "pesquisador"
            }
        }
  
        if (emailExistente && senhaExistente) {
            // Login bem-sucedido
            console.log("Login feito");
            // Prosseguir para a próxima tela
            if (tipoA === "agricultor") {
              window.location.href = "agricultor.html";
              console.log('tchau')
            } else if (tipoP === "pesquisador") {
              window.location.href = "create_protocolos.html";
              console.log('oi');
            }
          } else {
            // Login falhou
            exibirToast00();
            console.log("Login falho");
          }
          
      } else {
        console.log('Erro na requisição: ' + xhr.status);
      }
    };
    xhr.send();
  }

  function exibirToast00() {
    Toastify({
      text: "LOGIN NÃO REALIZADO, VERIFIQUE SEUS DADOS!",
      duration: 3000, // Duração em milissegundos
      close: true, // Mostrar botão de fechar
      gravity: "top", // Posição do toast (top, bottom, left, right)
      position: "right", // Alinhamento do toast (left, center, right)
    }).showToast();
  }
  