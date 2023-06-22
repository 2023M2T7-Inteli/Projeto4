var entry=""
var emailOrdered=false
var nomeOrdered=false
var plantacaoOrdered=false

window.onload = function() {
    endpoint();
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

function endpoint(){
    fetch('http://localhost:2021/usuarios')
    .then(function(response) {
        if (response.ok) {
        return response.json();
        }
        throw new Error('Request error');
    })
        .then(function(data) {
            for(i=0;i<data.length;i++){
                if(i==0){
                    $('#results').text('Resultados encontrados: 0');
                }else{
                    $('#results').text('Resultados encontrados: '+(i+1));
                }
                
                let name = data[i].Nome
                let email = data[i].Email
                let product = data[i].TipoDePlantacao
                let html = `<button id ="user-button"class="user-button">
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
                
            }
            if(entry!=""){
                ordenar(data, entry);
            }
    
    })
}

function ordenar(data, criterion){
    
    var element = document.querySelectorAll("#user-button");
    element.forEach(function(element) {
    element.parentNode.removeChild(element);
    });
    if(criterion=="email"){
        if(emailOrdered==false){
            data.sort(function (a, b) {
                let ae = a.Email.toLowerCase();
                let be = b.Email.toLowerCase();
                if (ae < be) {
                  return -1;
                } else if (ae > be) {
                  return 1;
                } else {
                  return 0;
                }
                });
                emailOrdered=true;
                changeHTML(data);
                
        }else if(emailOrdered==true){
            data.sort(function (a, b) {
                let ae = a.Email.toLowerCase();
                let be = b.Email.toLowerCase();
                if (ae > be) {
                  return -1;
                } else if (ae < be) {
                  return 1;
                } else {
                  return 0;
                }
                });
            emailOrdered=false;
            changeHTML(data);
           
        }
        
    }else if(criterion=="plantacao"){
        if(plantacaoOrdered==false){
            data.sort(function (a, b) {
                let ap = a.TipoDePlantacao.toLowerCase();
                let bp = b.TipoDePlantacao.toLowerCase();
                if (ap < bp) {
                  return -1;
                } else if (ap > bp) {
                  return 1;
                } else {
                  return 0;
                }
            });
            changeHTML(data);
            plantacaoOrdered=true;
        }else if(plantacaoOrdered==true){
            data.sort(function (a, b) {
                let ap = a.TipoDePlantacao.toLowerCase();
                let bp = b.TipoDePlantacao.toLowerCase();
                if (ap > bp) {
                  return -1;
                } else if (ap < bp) {
                  return 1;
                } else {
                  return 0;
                }
            });
            changeHTML(data);
            plantacaoOrdered=false;
        }
        

    }else if(criterion=="nome"){
        if(nomeOrdered==false){
            data.sort(function (a, b) {
                let an = a.Nome.toLowerCase();
                let bn = b.Nome.toLowerCase();
                if (an < bn) {
                  return -1;
                } else if (an > bn) {
                  return 1;
                } else {
                  return 0;
                }
            });
            changeHTML(data);
            nomeOrdered=true;
            
        }else if(nomeOrdered==true){
            data.sort(function (a, b) {
                let an = a.Nome.toLowerCase();
                let bn = b.Nome.toLowerCase();
                if (an > bn) {
                  return -1;
                } else if (an < bn) {
                  return 1;
                } else {
                  return 0;
                }
            });
            changeHTML(data);
            nomeOrdered=false;
        }
        }
        
}
function changeHTML(data){
    for(i=0;i<data.length;i++){

        let categoria= data[i].categoria

        if(categoria=='agricultor'){
            let name = data[i].Nome
            let email = data[i].Email
            let product = data[i].TipoDePlantacao
            let html = `<button id ="user-button"class="user-button">
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
        }

        if(i==0){
            $('#results').text('Resultados encontrados: 0');
        }else{
            $('#results').text('Resultados encontrados: '+(i+1));
        }
        
        
        
    }
}
function changeEntry(input){
    console.log("entrous")
    entry=input;
    endpoint();

}

$("#search").on('input', () => {
	let presets = $("#button-container").children('#user-button');
	Array.from(presets).forEach(preset => {
		let presetName = String($(preset).find('p:first').text());
		if ($("#search").val() == '') {
			$(preset).show();
		} else if (presetName.toLowerCase().startsWith($("#search").val().toLowerCase())) {
			$(preset).show();
		} else {
			$(preset).hide();
		}
	});
});