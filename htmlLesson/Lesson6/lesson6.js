document.addEventListener("DOMContentLoaded", contentLoaded);

function displayFooter() {
    'use strict';
    document.getElementById('footer').style.display = '';
    document.getElementById('footer').children[0].children[0].text = 'Table of Contents';
}

function contentLoaded() {
    'use strict';
    setTimeout(displayFooter, 5000);
}

// document.addEventListener("DOMContentLoaded", function () {
//     "use strict";
//     setTimeout(function () {
//         document.getElementById('footer').style.display = '';
//         document.getElementById('footer').children[0].children[0].text = "Table of Contents";
//     };, 5000);
// }); **exact same code**
