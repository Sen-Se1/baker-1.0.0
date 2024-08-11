
function afficherAlertSuccess(message) {

    var alertSuccess = document.getElementById("alert-success");
    alertSuccess.innerHTML = `<i class="bi bi-check2-circle"></i> &nbsp;&nbsp;${message}`;
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

function afficherAlertFailure(message) {

    var alertfailue = document.getElementById("alert-failure");
    alertfailue.innerHTML = `<i class="bi bi-x-circle-fill"></i> &nbsp;&nbsp;${message}`;
    $(alertfailue).fadeIn(300);
    setTimeout(function() {
        $(alertfailue).fadeOut(400);
    }, 3000); 

    return message;
}
