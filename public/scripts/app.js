'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : "No options"
    )
);

var user = {
    name: 'Claude',
    age: 31,
    location: 'Edmonton'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
