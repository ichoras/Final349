import logo from './logo.svg';
import './App.css';

function App() {
  const RenderList = props => {
    const animals = [
      { id: 1, animal: "Dog" },
      { id: 2, animal: "Bird" },
      { id: 3, animal: "Cat" },
      { id: 4, animal: "Mouse" },
      { id: 5, animal: "Horse" }
    ];
  }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}
  export default App;