// Get the user ID from the URL
var urlParams = new URLSearchParams(window.location.search);
var protocoloId = urlParams.get('id');

console.log('Protocolo ID:', protocoloId);

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
      
        console.log(`Pergunta:`, pergunta, `, Id pergunta:`, idPerg);
        console.log(`Tipo:`, tipo, `, Pertence a perg:`, idPerg);
      }      
    
  })



