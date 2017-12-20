var form = document.querySelector('.formWithValidation');

var validateBtn = form.querySelector('.validateBtn');
var from = document.querySelector('.from');
var password = document.querySelector('.password');
var passwordConfirmation = document.querySelector('.passwordConfirmation');
var where = document.querySelector('.where');
var message = document.querySelector('.message');

var fields = document.querySelectorAll('.field');

var generateError = function (text) {
    var error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
};

var removeValidation = function () {
    var errors = document.querySelectorAll('.error');
    for(var i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
};

var checkFieldPresence = function () {
    for(var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            var error = generateError('cannot be blank');
            fields[i].parentElement.insertBefore(error, fields[i]);
        }
    }
};

var checkPasswordMath = function () {
    if (password.value !== passwordConfirmation.value) {
        var error = generateError('Passwords doesnt match');
        password.parentElement.insertBefore(error, password);
    }
};

form.addEventListener('submit', function (event) {
    event.preventDefault();

    removeValidation();

    checkFieldPresence();

    checkPasswordMath();
});
