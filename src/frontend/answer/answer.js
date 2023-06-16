var urlParams1 = new URLSearchParams(window.location.search);
var protocoloId = urlParams1.get('idProtocol');

var urlParams2 = new URLSearchParams(window.location.search);
var userId = urlParams2.get('idUser'); 

fetch('http://localhost:2021/perguntas?Id_Protocolo_FK=' + protocoloId)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
  .then(function(data) {
    var saida = "";
    data.forEach(pergunta => {
      console.log(pergunta);
      if (pergunta.Tipo === 'Img') {
        saida += `
          <div class="category">
            <div class="category_header">
              <img src="images/image_category.png" alt="Ícone da categoria de imagem">
              <h2 class="category_name">${pergunta.Titulo}</h2>
            </div>
            <h3 class="category_desc">${pergunta.Pergunta}</h3>
            <div class="category_inputs">
              <ul>
                <!--Buttons for inserted and non-inserted images-->
                <li><span>Imagem:</span><input type="file" class=""></li>
              </ul>
            </div>
          </div>
          <div class="line"></div>
        `;
      } else if (pergunta.Tipo === 'Text') {
        saida += `
          <div class="category">
            <div class="category_header">
              <img src="images/text_category.png" alt="Ícone da categoria de texto">
              <h2 class="category_name">${pergunta.Titulo}</h2>
            </div>
            <h3 class="category_desc">${pergunta.Pergunta}</h3>
            <div class="category_inputs">
              <textarea required></textarea>
              <label>Digite sua resposta aqui.</label>
            </div>
          </div>
          <div class="line"></div>
        `;
      } else if (pergunta.Tipo === 'Checkbox') {
        saida += `
          <div class="category">
            <div class="category_header">
              <img src="images/check_category.png" alt="Ícone da categoria de checkbox">
              <h2 class="category_name">${pergunta.Tipo}</h2>
            </div>
            <h3 class="category_desc">${pergunta.Pergunta}</h3>
            <div class="category_inputs_checkbox">
              <!--Options-->
              <div class="option_div">
                <input type="checkbox" name="option" id="checkbox_1">
                <label for="checkbox_1">Fiz isso</label>
              </div>
              <div class="option_div">
                <input type="checkbox" name="option" id="checkbox_2">
                <label for="checkbox_2">Fiz isso</label>
              </div>
              <div class="option_div">
                <input type="checkbox" name="option" id="checkbox_3">
                <label for="checkbox_3">Fiz isso</label>
              </div>
            </div>
          </div>
          <div class="line"></div>
        `;
      } else if (pergunta.Tipo === 'Option') {
        saida += `
          <div class="category">
            <div class="category_header">
              <img src="images/option_category.png" alt="Ícone da categoria de opções">
              <h2 class="category_name">${pergunta.Tipo}</h2>
            </div>
            <h3 class="category_desc">${pergunta.Pergunta}</h3>
            <div class="category_inputs">
              <!--Options-->
              <div class="option_div">
                <input type="radio" name="option" id="option_1">
                <label for="option_1">Opção</label>
              </div>
              <div class="option_div">
                <input type="radio" name="option" id="option_2">
                <label for="option_2">Opção</label>
              </div>
              <div class="option_div">
                <input type="radio" name="option" id="option_3">
                <label for="option_3">Opção</label>
              </div>
            </div>
          </div>
          <div class="line"></div>
        `;
      }
    });
    document.getElementById('scroll').innerHTML += saida;

    fetch('http://localhost:2021/protocolo2?Id_Protocolo=' + protocoloId)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request error');
    })
    .then(function(data) {
      for (let i = 0; i < data.length; i++) {
        const titulo = data[i].Nome_Protocolo;
        const desc = data[i].Descricao;

        document.getElementById('desc').innerHTML = desc;
        document.getElementById('protocol_name').innerHTML = titulo;
      }
    })
    
    });