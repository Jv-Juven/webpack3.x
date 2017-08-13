import _ from 'lodash';
// import printMe from './print.js';
const printMe = require('./print');
const util1 = require('./util1');
const util2 = require('./util2');

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    console.log(util1);

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./library', function () {
        console.log('Accepting the updated library module!');
        Library.log();
    });
}
