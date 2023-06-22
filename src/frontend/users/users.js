
var urlParams = new URLSearchParams(window.location.search);
var idAgricultor = urlParams.get('idAgricultor');

window.onload = function() {
    protocols();
    user();
}
function protocols() {
    fetch('http://localhost:2021/protocolo?Id_Usuario_FK=' + idAgricultor)
    .then(function(response) {
        if (response.ok) {
        return response.json();
        }
        throw new Error('Request error');
        })
        .then(function(data) {
            console.log(data);
            data.forEach(element => {
                let html = `<button class="user-button">
                <p class="date">${element.Data_de_Criacao}</p>
                <p class="protocol">${element.Nome_Protocolo}</p>
                <p class="status">${element.Atividade}</p>
                <p class="permission">${element.Data_de_Criacao}</p>
                </button>`
                $('#button-container').append(html);
            });
            
        })
}

function user(){
    fetch('http://localhost:2021/usuarios')
    .then(function(response) {
            if (response.ok) {
            return response.json();
            }
            throw new Error('Request error');
            })
            .then(function(data) {
                showData(data);
            })
    }

function showData(data){
    var user;
    data.forEach(element => {
        if(element.Id_Usuario==idAgricultor){
            user=element;
        }
    });
    console.log(user);
    document.querySelector('#nome').textContent = user.Nome;
    document.querySelector('#email').textContent = 'Email: '+ user.Email;
    document.querySelector('#tipo').textContent =  user.TipoDePlantacao;
    document.querySelector('#id').textContent = 'ID: ' + user.Id_Usuario;
}