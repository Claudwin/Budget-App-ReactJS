'use strict';

console.log('build-it-visible.js is running');
var appRoot = document.getElementById('app');

var visibility = false;
var showDetails = function showDetails() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: showDetails },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'These are some details'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
