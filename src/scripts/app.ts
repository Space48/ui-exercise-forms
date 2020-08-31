/* FORM VALIDATION */

var successMsg = document.getElementById('alerts_success');
var noAccMsg = document.getElementById('alerts_noAcc');

/* BOOTSTRAP FRONT END */

(function formValidation() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

/* SEND DATA */

document.getElementById('newPasswordForm').addEventListener('submit', sendEmail);
//console.log(1);

function sendEmail(){
    var userEmail = document.getElementById('email').value;

    //console.log(2);
    var xholder = new XMLHttpRequest();

    //console.log(3);
    event.preventDefault();
    event.stopPropagation();
    xholder.onreadystatechange = function(){
        if(xholder.readyState == 4){
            //console.log(xholder.responseText);
            var response = JSON.parse(xholder.responseText);
            //console.log(response);
            //console.log(response.errors.title);
            if (!response.errors.length) {
                //console.log(response.errors);
                successMsg.classList.remove('d-none');
                noAccMsg.classList.add('d-none');
            } else {
                noAccMsg.classList.remove('d-none');
                successMsg.classList.add('d-none');
            }
        } else {
            //something needs to go here... error message required
        }
    }
    xholder.open("post","http://localhost:3005/customer/account/resetPassword",true);
    xholder.setRequestHeader("Content-type","application/json;charset=UTF-8");
    //console.log(JSON.stringify({"email":userEmail}));
    xholder.send(JSON.stringify({"email":userEmail}));
}