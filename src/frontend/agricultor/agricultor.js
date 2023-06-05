window.onload = function(){
    getNotificationNumber();
}

let request = new XMLHttpRequest();

function getNotificationNumber(){
    let notificationNumber = 5;
    request.onreadystatechange = function() {
        document.getElementById('notification').innerHTML = notificationNumber;
    }
    request.open('GET', '/numeroProtocolos', true);
    request.send();
}