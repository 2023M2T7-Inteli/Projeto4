// AJAX request to get protocols information
fetch('http://localhost:2021/protocolo')
.then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
  .then(function(data) {
    //creates a representation of the protocols present in the database in the front end 
    for(i=0;i<data.length;i++){
     
      let nomeProtocolo = data[i].Nome_Protocolo;
      let descProtocolo = data[i].Descricao;
      let dataProtocolo = data[i].Data;
      let vizualizadoProtocolo = data[i].Vizualizado;
        
        // Create the div element with the class "button_div"
        const buttonDiv = document.createElement("div");
        buttonDiv.className = "button_div";
      
        // Create the div element with the class "circle"
        const circleDiv = document.createElement("div");
        circleDiv.className = "circle";
      
        // Create the button element with the class "indicator"
        const buttonElement = document.createElement("button");
        buttonElement.className = "indicator";

        // Add a click event listener to each button
        buttonElement.addEventListener('click', function() {
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