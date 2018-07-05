window.addEventListener('DOMContentLoaded', init, false);

function init() {

    var firstName = document.querySelector('[id="firstName"]');
    var lastName = document.querySelector('[id="lastName"]');
    var email = document.querySelector('[id="email"]');
    
    var form = document.querySelector('form');


    form.addEventListener('submit', function (e) {
        check(firstName);
        // check(lastName);
        //check(email);
        e.preventDefault();
    }, false);


    function check(input) {

        var chars = input.value.split('');


        for (var i = 0; i < chars.length; i++) {
            console.log(chars[i]);
        }

            
    }
}