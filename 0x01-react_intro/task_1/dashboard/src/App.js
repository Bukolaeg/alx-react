import React from 'react';
import './App.css';
import holbertonLogo from './holberton_logo.png';
import { getFullYear, getFooterCopy } from './utils';

function App() {
	  return (
		      <div className="App">
		        <header className="App-header">
		          <img src={holbertonLogo} className="App-logo" alt="logo" />
		          <h1>School dashboard</h1>
		        </header>
		        <div className="App-body">
		          <p>Login to access the full dashboard</p>
		        </div>
		        <footer className="App-footer">
		          <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
		        </footer>
		      </div>
		    );
}

export default App;
