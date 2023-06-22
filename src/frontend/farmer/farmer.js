// Get the user ID from the URL
var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('idUser');

// Now you can use the user ID as needed
console.log('User ID:', userId);

// AJAX request to get the number of protocols for a user
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
    document.getElementById('notification').textContent = notification;

    var elemento = document.getElementById('btn_1');
    var h1 = document.getElementById('title1_btn');
    var p = document.getElementById('text1_btn');

    if (notification > 0) {
      elemento.style.background = 'linear-gradient(93.1deg, #1F8C69 0.35%, #0E4936 100%';
      p.textContent = 'Você possui alguns protocolos pendentes, clique aqui para verificar.';
    } else {
      h1.style.color = '#000000';
      p.style.color = '#000000';
    }
  })
  .catch(function(error) {
    console.error('Error:', error.message);
  });

function redirecionarTela01() {
  // Redirect to another page with the user ID in the URL
  window.location.href = "/select_P/select_P.html?idUser=" + userId;
}
