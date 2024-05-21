import logo from './logo.svg';
import './App.css';
import holbertonlogo from './holberton_logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonlogo} className="App-logo" alt="logo" />
	<h1>School dashboard</h1>
	  </header>
	  <div className="App-body">
        <p>login to access the full dashboard</p>
	</div>
	  <footer className="App-footer">
      <p>copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
