console.log('build-it-visible.js is running');
const appRoot = document.getElementById('app');

let visibility = false;
const showDetails = () => {
  visibility = !visibility;
  render()
};

const render = () => {
const template = (
  <div>
    <h1>Visibility Toggle</h1>
    <button onClick={showDetails}>
      {visibility ? "Hide details" : "Show details"}
    </button>
    { visibility && (
      <div>
        <p>These are some details</p>
      </div>
    )
    }
  </div>
)
ReactDOM.render(template, appRoot)
};

render();

