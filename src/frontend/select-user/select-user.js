var entry=""
var emailOrdered=false
var nomeOrdered=false
var plantacaoOrdered=false
const params = new URLSearchParams(window.location.search);

//called when the window loads
window.onload = function() {
    endpoint();
};
//change screen
function sendToCreateProtocols() {
	window.location.href = '../create-protocols/create-protocols.html?idUser=' + params.get('idUser');
}
//change screen
function sendToReport() {
	window.location.href = '../report/report.html?idUser=' + params.get('idUser');
}
//change screen
function sendToSignUp() {
	window.location.href = '../sign-up/sign-up.html?idUser=' + params.get('idUser');
}
//acess the 'usuarios' endpoint
function endpoint(){
    fetch('http://localhost:2021/usuarios')
    .then(function(response) {
        if (response.ok) {
        return response.json();
        }
        throw new Error('Request error');
    })
        .then(function(data) {
            //show users on screen
            let count=0;
            for(i=0;i<data.length;i++){
                
                let categoria= data[i].Categoria
                if(categoria=='agricultor'){
                    //show the number of users found
                    count++;
                    $('#results').text('Resultados encontrados: '+count);
                    let id =data[i].Id_Usuario
                    let name = data[i].Nome
                    let email = data[i].Email
                    let product = data[i].TipoDePlantacao
                    let html = `<button onclick="userDetails(${id})" id ="user-button"class="user-button">
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
            }
            //calls the function ordenar when entry is not a empty string
            if(entry!=""){
                ordenar(data, entry);
            }
    
    })
}
//reorder users based on the criterion and calls the changeHTML function
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
//change the displayed information based on the data recieved
function changeHTML(data){ 
    let count =0; 
    for(i=0;i<data.length;i++){
        let categoria= data[i].Categoria

        if(categoria=='agricultor'){
            //show the number of users found
            count++;
            $('#results').text('Resultados encontrados: '+count);
            let id =data[i].Id_Usuario
            let name = data[i].Nome
            let email = data[i].Email
            let product = data[i].TipoDePlantacao
            let html = `<button onclick="userDetails(${id})" id ="user-button"class="user-button">
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
             
    }
}
//changes entry variable value
function changeEntry(input){
    entry=input;
    endpoint();

}

//changes the displayed users when the searchbar information changes
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

function userDetails(id){
    window.location.href = "/users/users.html?idAgricultor=" +id;
}