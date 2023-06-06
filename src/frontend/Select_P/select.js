var urlParams = new URLSearchParams(window.location.search);
var userId = urlParams.get('id');

function voltarTela(){
    window.location.href = "/agricultor/agricultor.html?id=" + userId;
}