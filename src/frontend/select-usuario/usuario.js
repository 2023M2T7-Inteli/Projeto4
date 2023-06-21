window.onload = function() {
    let buttons = document.querySelectorAll('.user-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            let img = this.querySelector('.profile-picture');
            img.setAttribute('src', 'images/profile3.png');
        });

        button.addEventListener('mouseleave', function() {
            let img = this.querySelector('.profile-picture');
            img.setAttribute('src', 'images/profile.png');
        });
    });
};

fetch('http://localhost:2021/usuarios')
.then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
    .then(function(data) {
        for(i=0;i<data.length;i++){
            let name = data[i].Nome
            let email = data[i].Email
            let product = data[i].TipoDePlantacao
            let html = `<button class="user-button">
            <div class="user-info">
                <div class="name">
                    <img src="images/profile.png" alt="Profile Picture" class="profile-picture">
                    <p class="user-name">${name}</p>
                </div>
                <div class="email">
                    <p class="user-email">${email}</p>
                </div>
                <div class="product">
                    <p class="user-product">${product}</p>
                </div>
            </div>
            </button>`
            $('#button-container').append(html);
            $('#results').text('Resultados encontrados: '+(i+1));
        }
  
})
