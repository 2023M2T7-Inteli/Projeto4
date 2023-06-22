
var entry=""
var criadoEmOrdered=false
var statusOrdered=false
var nomeOrdered=false
var urlParams = new URLSearchParams(window.location.search);
var idAgricultor = urlParams.get('idAgricultor');

//called when the window loads
window.onload = function() {
    protocols();
    user();
}
//acess the 'protocolo' endpoint
function protocols() {
    fetch('http://localhost:2021/protocolo?Id_Usuario_FK=' + idAgricultor)
    .then(function(response) {
        if (response.ok) {
        return response.json();
        }
        throw new Error('Request error');
        })
        //show protocols on screen
        .then(function(data) {
            data.forEach(element => {
                let html = `<button id ="user-button" class="user-button">
                <p class="date">${element.Data_de_Criacao}</p>
                <p class="protocol">${element.Nome_Protocolo}</p>
                <p class="status">${element.Atividade}</p>
                </button>`
                $('#button-container').append(html);
            });
            //calls the function ordenar when entry is not a empty string
            if(entry!=""){
                ordenar(data, entry);
            } 
        })
}

//acess the 'usuarios' endpoint
function user(){
    fetch('http://localhost:2021/usuarios')
    .then(function(response) {
            if (response.ok) {
            return response.json();
            }
            throw new Error('Request error');
            })
            //cals showUser function with data as an argument
            .then(function(data) {
                showUser(data);
            })
    }
//finds the corresponding user and changes the screen display based on it
function showUser(data){
    var user;
    data.forEach(element => {
        if(element.Id_Usuario==idAgricultor){
            user=element;
        }
    });
    document.querySelector('#nome').textContent = user.Nome;
    document.querySelector('#email').textContent = 'Email: '+ user.Email;
    document.querySelector('#tipo').textContent =  user.TipoDePlantacao;
    document.querySelector('#id').textContent = 'ID: ' + user.Id_Usuario;
}
//reorder protocols based on the criterion and calls the changeHTML function
function ordenar(data, criterion){
    
    var element = document.querySelectorAll("#user-button");
    element.forEach(function(element) {
    element.parentNode.removeChild(element);
    });
    if(criterion=="criadoem"){
        if(criadoEmOrdered==false){
            data.sort(function (a, b) {
                let ae = a.Data_de_Criacao.toLowerCase();
                let be = b.Data_de_Criacao.toLowerCase();
                if (ae < be) {
                  return -1;
                } else if (ae > be) {
                  return 1;
                } else {
                  return 0;
                }
                });
                criadoEmOrdered=true;
                changeHTML(data);
                
        }else if(criadoEmOrdered==true){
            data.sort(function (a, b) {
                let ae = a.Data_de_Criacao.toLowerCase();
                let be = b.Data_de_Criacao.toLowerCase();
                if (ae > be) {
                  return -1;
                } else if (ae < be) {
                  return 1;
                } else {
                  return 0;
                }
                });
            criadoEmOrdered=false;
            changeHTML(data);
           
        }
        
    }else if(criterion=="status"){
        if(statusOrdered==false){
            data.sort(function (a, b) {
                let ap = a.Atividade.toLowerCase();
                let bp = b.Atividade.toLowerCase();
                if (ap < bp) {
                  return -1;
                } else if (ap > bp) {
                  return 1;
                } else {
                  return 0;
                }
            });
            changeHTML(data);
            statusOrdered=true;
        }else if(statusOrdered==true){
            data.sort(function (a, b) {
                let ap = a.Atividade.toLowerCase();
                let bp = b.Atividade.toLowerCase();
                if (ap > bp) {
                  return -1;
                } else if (ap < bp) {
                  return 1;
                } else {
                  return 0;
                }
            });
            changeHTML(data);
            statusOrdered=false;
        }
        

    }else if(criterion=="nome"){
        if(nomeOrdered==false){
            data.sort(function (a, b) {
                let an = a.Nome_Protocolo.toLowerCase();
                let bn = b.Nome_Protocolo.toLowerCase();
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
                let an = a.Nome_Protocolo.toLowerCase();
                let bn = b.Nome_Protocolo.toLowerCase();
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
//changes entry variable value
function changeEntry(input){
    entry=input;
    protocols();

}
//change the displayed information based on the data recieved
function changeHTML(data){

    data.forEach(element => {
    let html = `<button id ="user-button" class="user-button">
    <p class="date">${element.Data_de_Criacao}</p>
    <p class="protocol">${element.Nome_Protocolo}</p>
    <p class="status">${element.Atividade}</p>
    </button>`
    $('#button-container').append(html);
    });
                
}
