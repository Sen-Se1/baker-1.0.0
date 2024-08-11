
function afficherAlertSuccess(message) {

    var alertSuccess = document.getElementById("alert-success");
    alertSuccess.innerHTML = `<i class="bi bi-check"></i> &nbsp;&nbsp;${message}`;
    $(alertSuccess).fadeIn(300);
    setTimeout(function() {
        $(alertSuccess).fadeOut(400);
    }, 1500); 

    return message;
}

function afficherAlertWarning(message) {

    var alertWarning = document.getElementById("alert-warning");
    alertWarning.innerHTML = `<i class="bi bi-exclamation-triangle"></i> &nbsp;&nbsp;${message}`;
    $(alertWarning).fadeIn(300);
    setTimeout(function() {
        $(alertWarning).fadeOut(400);
    }, 1500); 

    return message;
}

function afficherAlerteSucces() {
    var alertSuccess = document.getElementById("alert-success");
    $(alertSuccess).fadeIn(300);
    setTimeout(function() {
        $(alertSuccess).fadeOut(400);
    }, 1500); 
}