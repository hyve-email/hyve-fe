import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  const [isLoggedIn, setLogin] = useState(true);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setLogin={setLogin} />
      <main className="App-main">{isLoggedIn ? <Dashboard /> : <Login />}</main>
      <Footer />
    </div>
  );
}

export default App;
