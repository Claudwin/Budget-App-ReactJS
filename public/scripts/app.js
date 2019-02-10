'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
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
    app.options.length > 0 ? 'Here are your options' : "No options"
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
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Annoymous'
    ),
    (user.age && user.age) >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
