import logo from "./logo.svg";
import "./App.css";
import Login from "./Component/LoginPage/Login";

function App() {
  return (
    <div className="App">
              <Login/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          I have a call at 10 <code>PullUpApp</code> Hello, Squiggs
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         //comment 
        </a>
      </header>
    </div>
  );
}

export default App;
