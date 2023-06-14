// Get the user ID from the URL
var urlParams1 = new URLSearchParams(window.location.search);
var protocoloId = urlParams1.get('idProtocol');

var urlParams2 = new URLSearchParams(window.location.search);
var userId = urlParams2.get('idUser'); 

var urlParams3 = new URLSearchParams(window.location.search);
var nomeProtocolo = urlParams3.get('nomeProtocolo');

console.log('Protocolo ID:', protocoloId, 'nomeProtocolo:', nomeProtocolo, 'User ID:', userId);

fetch('http://localhost:2021/perguntas?Id_Protocolo_FK=' + protocoloId)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
  .then(function(data) {
    for (let i = 0; i < data.length; i++) {
        const idPerg = data[i].Id_Pergunta;
        const pergunta = data[i].Pergunta;
        const tipo = data[i].Tipo;
        const titulo = data[i].Titulo;
      
        console.log(`Pergunta:`, pergunta, `, Id pergunta:`, idPerg);
        console.log(`Tipo:`, tipo, `, Pertence a perg:`, idPerg);
        console.log(`Titulo:`, titulo, `, Pertence a perg:`, idPerg);
      }      
    
  })



