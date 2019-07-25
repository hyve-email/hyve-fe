import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import './App.css';

function App() {
  const [isLoggedIn, setLogin] = useState(true);

  return (
    <div className="App">
      <main className="App-main">
        {isLoggedIn ? <Dashboard /> : <Login />}
        {isLoggedIn ? (
          <button onClick={() => setLogin(!isLoggedIn)}>Logout</button>
        ) : (
          <button onClick={() => setLogin(!isLoggedIn)}>Login</button>
        )}
      </main>
    </div>
  );
}

export default App;
