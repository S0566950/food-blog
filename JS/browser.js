window.addEventListener('DOMContentLoaded', init, false);

function init() {

    var
        texts = document.querySelectorAll('[type="text"]'),
        radios = document.querySelectorAll('[type="email"]');
    
    var form = document.querySelector('form');


    form.addEventListener('submit', function (e) {
        check(texts);
        check(radios);
        e.preventDefault();
    }, false);


    function check(arr) {

        var checkedArr = [];

        var len = arr.length;
        var i = 0;

        for (i; i < len; i++) {
            if (arr[i].checked) {
                checkedArr.push(arr[i].id);
            }
        }

        var typeOfCheck = arr[0].type;

        if (checkedArr.length == 0) {

            alert('no check at ' + typeOfCheck);
        } else {
            console.log(checkedArr);
            return checkedArr;
        }

    }
}