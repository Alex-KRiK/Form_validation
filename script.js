var form = document.querySelector('.formWithValidation');

var validateBtn = form.querySelector('.validateBtn');
var from = document.querySelector('.from');
var password = document.querySelector('.password');
var passwordConfirmation = document.querySelector('.passwordConfirmation');
var where = document.querySelector('.where');
var message = document.querySelector('.message');

var fields = document.querySelectorAll('.field');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    for(var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            var error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = 'cannot be blank';
            fields[i].parentElement.insertBefore(error, fields[i]);
        }
    }
});
