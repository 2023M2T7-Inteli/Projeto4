// Get the user ID from the URL
var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('idUser');

// Now you can use the user ID as needed
console.log('User ID:', userId);

fetch('http://localhost:2021/protocolo?Id_Usuario_FK=' + userId)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
  .then(function(data) {
    console.log('Protocols:', data);
    data.forEach(function(protocol) {
      let atividade = protocol.Atividade;

      var elemento = document.getElementById('btn_1');
      var h1 = document.getElementById('title1_btn');
      var p = document.getElementById('text1_btn');

      fetch('http://localhost:2021/numeroProtocolos?Id_Usuario_FK=' + userId)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request error');
      })
      .then(function(data) {
        console.log('Number of protocols:', data);

        // Display the number of protocols in the browser console
        console.log('Number of protocols:', data[0].quantidade_campos);
        let notification = data[0].quantidade_campos;
        console.log('Notification:', notification)
        document.getElementById('notification').textContent = notification;
      })
      .catch(function(error) {
        console.error('Error:', error.message);
      });

      if (atividade === 'Ativo') {
        elemento.style.background = 'linear-gradient(93.1deg, #1F8C69 0.35%, #0E4936 100%';
        p.textContent = 'Você possui alguns protocolos pendentes, clique aqui para verificar.';
      } else {
        h1.style.color = '#000000';
        p.style.color = '#000000';
        elemento.style.background = 'linear-gradient(93.1deg, #1F8C69 0.35%, #0E4936 100%';
        notification = 0;
        document.getElementById('notification').textContent = notification;
      }
    });
  })

// AJAX request to get the number of protocols for a user


function redirecionarTela01() {
  // Redirect to another page with the user ID in the URL
  window.location.href = "/select-protocol/select-protocol.html?idUser=" + userId;
}
