console.log('App.js is running');



const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : "No options"}</p>
    </div>
);

const user = {
    name: 'Claude',
    age: 31,
    location: 'Edmonton'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

let count = 0;
const addOne = () => {
    count++; 
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
 const template2 = ( 
    <div>
        <h1> Count: {count}</h1>
        <button onClick={addOne}>+1</button><br/>
        <button onClick={minusOne}>-1</button><br/>
        <button onClick={reset}>reset</button>
    </div>
);
 ReactDOM.render(template2, appRoot);
};

renderCounterApp();