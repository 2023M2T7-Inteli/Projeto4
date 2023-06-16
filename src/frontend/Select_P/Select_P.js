// Get the user ID from the URL
var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('idUser');

function voltarTela(){
  window.location.href = "/agricultor/agricultor.html?idUser=" + userId;
}

fetch('http://localhost:2021/protocolo?Id_Usuario_FK=' + userId)
.then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
  .then(function(data) {

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = dataAtual.getMonth() + 1;
    var anoAtual = dataAtual.getFullYear();
    var horaAtual = dataAtual.getHours();
    var minutoAtual = dataAtual.getMinutes();

    //creates a representation of the protocols present in the database in the front end 
    for(i=0;i<data.length;i++){
     
      let nomeProtocolo = data[i].Nome_Protocolo;
      let descProtocolo = data[i].Descricao;
      let dataProtocolo = data[i].Data;
      // let horarioProtocolo = data[i].Horario;
      let dataProtocoloPartes = dataProtocolo.split("/");
      let vizualizadoProtocolo = data[i].Vizualizado;
      let diaProtocolo = dataProtocoloPartes[0];
      let mesProtocolo = dataProtocoloPartes[1];
      let anoProtocolo = dataProtocoloPartes[2];
      let idP = data[i].Id_Protocolo;

        // Create the div element with the class "button_div"
        const buttonDiv = document.createElement("div");
        buttonDiv.className = "button_div";
      
        // Create the div element with the class "circle"
        const circleDiv = document.createElement("div");
        circleDiv.className = "circle";
      
        // Create the button element with the class "indicator"
        const buttonElement = document.createElement("button");
        buttonElement.className = "indicator";

        var vencido = false;

        // Comparação do ano
        if (anoAtual > anoProtocolo) {
          vencido = true;
        } else if (anoAtual == anoProtocolo) {
          // Comparação do mês
          if (mesAtual > mesProtocolo) {
            vencido = true;
          } else if (mesAtual == mesProtocolo) {
            // Comparação do dia
            if (diaAtual > diaProtocolo) {
              vencido = true;
            }
          }
        }

        if(vencido==true){
          buttonElement.style.backgroundColor='red';
        }

        // Add a click event listener to each button
        buttonElement.addEventListener('click', function() {
          window.location.href = "/answer/answer.html?idProtocol=" + idP + "&idUser=" + userId;

          // Hide the corresponding circle
          circleDiv.style.display = "none";
        });
        
        if(vizualizadoProtocolo=="True"){
          circleDiv.style.display = "none";
        }

        // Create the div element with the class "button-info"
        const buttonInfoDiv = document.createElement("div");
        buttonInfoDiv.className = "button-info";
      
        // Create the div element with the class "text-container"
        const textContainerDiv = document.createElement("div");
        textContainerDiv.className = "text-container";
      
        // Create the h2 element for the title
        const h2Element = document.createElement("h2");
        h2Element.textContent = nomeProtocolo;
      
        // Create the p element for the text
        const pElement = document.createElement("p");
        pElement.textContent = descProtocolo;
      
        // Create the div element with the class "date-container"
        const dateContainerDiv = document.createElement("div");
        dateContainerDiv.className = "date-container";
      
        // Create the image
        const imgElement = document.createElement("img");
        imgElement.src = "images/time_copy.png";
        imgElement.alt = "Imagem do botão 1";
      
        // Create the p element for the date
        const pDateElement = document.createElement("p");
        pDateElement.textContent = dataProtocolo;
      
        // Add the created elements to the HTML structure
        textContainerDiv.appendChild(h2Element);
        textContainerDiv.appendChild(pElement);
      
        dateContainerDiv.appendChild(imgElement);
        dateContainerDiv.appendChild(pDateElement);
      
        buttonInfoDiv.appendChild(textContainerDiv);
        buttonInfoDiv.appendChild(dateContainerDiv);
      
        buttonElement.appendChild(buttonInfoDiv);
      
        buttonDiv.appendChild(circleDiv);
        buttonDiv.appendChild(buttonElement);
      
        // Find the parent element where the snippet will be added
        const container = document.getElementById("buttons");
      
        // Add the snippet to the parent element
        container.appendChild(buttonDiv);

      }

    })

    
        

// Select all elements with the class 'indicator' that are children of elements with class 'buttons'
document.querySelectorAll('.buttons .indicator').forEach(button => {
    // Select the image within the 'date-container' child of each 'indicator'
    const img = button.querySelector('.date-container img');
    // Store the original source of the image
    const originalSrc = img.src;

    // Add event listener for mouseenter event on each 'indicator'
    button.addEventListener('mouseenter', () => {
        // On mouseenter, change the source of the image
        img.src = 'images/time__1_.png'; // path to new image
    });

    // Add event listener for mouseleave event on each 'indicator'
    button.addEventListener('mouseleave', () => {
        // On mouseleave, restore the original source of the image
        img.src = originalSrc; // restore the original image
    });
});

// function changeVisualizationStatus(circleDiv) {
  
//   fetch('http://localhost:2021/atualizaProtocolo', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'Vizualizado=True'
//   })
//   .then(function(response) {
//     if (response.ok) {
//       console.log('Status updated successfully');
//     } else {
//       throw new Error('Status update failed');
//     }
//   })
//   .catch(function(error) {
//     console.log('Error:', error.message);
    
//   });
// }