console.log('App.js is running');

class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>Indecision App</h1>
            <h2>Put your life in the hands of a comnputer.</h2>
            </div>
        ) 
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options components here</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>Option</p>
        )
    }
}
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <button>Add Option</button>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));