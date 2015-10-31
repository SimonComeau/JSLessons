document.addEventListener("DOMContentLoaded", contentLoaded);

function displayFooter() {
    'use strict';
    document.getElementById('footer').style.display = '';
    document.getElementById('footer').children[0].children[0].text = 'Table of Contents';
}

function contentLoaded() {
    'use strict';
    // setTimeout(displayRedDiv, 2000);
    setTimeout(displayFooter, 2000);
}

// document.addEventListener("DOMContentLoaded", contentLoaded);

function changeRedDiv() {
    'use strict';
    var property = document.getElementById('redDiv');
    if (property.style.backgroundColor === 'red') {
        property.style.backgroundColor = 'blue';
    } else {
        property.style.backgroundColor = 'red';
    }
    var textValue = document.getElementById('redDiv');
    if (textValue.children[0].innerHTML === 'Brian') {
        textValue.children[0].innerHTML = 'Simon';
    } else {
        textValue.children[0].innerHTML = 'Brian';
    }
    // document.getElementById('redDiv').style.background = 'blue';
    // document.getElementById('redDiv').children[0].innerHTML = 'Simon';
}
// document.addEventListener("DOMContentLoaded", function () {
//     "use strict";
//     setTimeout(function () {
//         document.getElementById('footer').style.display = '';
//         document.getElementById('footer').children[0].children[0].text = "Table of Contents";
//     };, 5000);
// }); **exact same code**
