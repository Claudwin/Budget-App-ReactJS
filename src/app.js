console.log('App.js is running');



var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}


var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? 'Here are your options' : "No options"}
    </div>
);

var user = {
    name: 'Claude',
    age: 31,
    location: 'Edmonton'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Annoymous'}</h1>
        {(user.age && user.age) >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);