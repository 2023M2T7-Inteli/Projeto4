fetch('http://localhost:2021/protocolo')
.then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
  .then(function(data) {
    
    for(i=0;i<data.length;i++){
     
      let nomeProtocolo = data[i].Nome_Protocolo;
      let descProtocolo = data[i].Descricao;
      let dataProtocolo = data[i].Data;
        
        // Cria o elemento div com a classe "button_div"
        const buttonDiv = document.createElement("div");
        buttonDiv.className = "button_div";
      
        // Cria o elemento div com a classe "circle"
        const circleDiv = document.createElement("div");
        circleDiv.className = "circle";
      
        // Cria o elemento button com a classe "indicator"
        const buttonElement = document.createElement("button");
        buttonElement.className = "indicator";
      
        // Cria o elemento div com a classe "button-info"
        const buttonInfoDiv = document.createElement("div");
        buttonInfoDiv.className = "button-info";
      
        // Cria o elemento div com a classe "text-container"
        const textContainerDiv = document.createElement("div");
        textContainerDiv.className = "text-container";
      
        // Cria o elemento h2 para o título
        const h2Element = document.createElement("h2");
        h2Element.textContent = nomeProtocolo;
      
        // Cria o elemento p para o texto
        const pElement = document.createElement("p");
        pElement.textContent = descProtocolo;
      
        // Cria o elemento div com a classe "date-container"
        const dateContainerDiv = document.createElement("div");
        dateContainerDiv.className = "date-container";
      
        // Cria a imagem
        const imgElement = document.createElement("img");
        imgElement.src = "images/time_copy.png";
        imgElement.alt = "Imagem do botão 1";
      
        // Cria o elemento p para a data
        const pDateElement = document.createElement("p");
        pDateElement.textContent = dataProtocolo;
      
        // Adiciona os elementos criados à estrutura HTML
        textContainerDiv.appendChild(h2Element);
        textContainerDiv.appendChild(pElement);
      
        dateContainerDiv.appendChild(imgElement);
        dateContainerDiv.appendChild(pDateElement);
      
        buttonInfoDiv.appendChild(textContainerDiv);
        buttonInfoDiv.appendChild(dateContainerDiv);
      
        buttonElement.appendChild(buttonInfoDiv);
      
        buttonDiv.appendChild(circleDiv);
        buttonDiv.appendChild(buttonElement);
      
        // Encontra o elemento pai onde o trecho será adicionado
        const container = document.getElementById("buttons");
      
        // Adiciona o trecho ao elemento pai
        container.appendChild(buttonDiv);

      }

    })
        
      
      

      

// Select all elements with the class 'button_div'
document.querySelectorAll('.button_div').forEach(buttonDiv => {
    // Add event listener for click event on the 'indicator' child of each 'button_div'
    buttonDiv.querySelector('.indicator').addEventListener('click', () => {
        // On click, hide the 'circle' child of 'button_div'
        buttonDiv.querySelector('.circle').style.display = 'none';
    });
});

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

var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('id');

function voltarTela(){
    window.location.href = "/agricultor/agricultor.html?id=" + userId;
}