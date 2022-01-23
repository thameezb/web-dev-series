import Navbar from './components/NavBar';
import Login from './components/Login/Login';
import useToken from './components/useToken';
import { BrowserRouter as Router} from 'react-router-dom'; 
import React from 'react';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="App">
        <Navbar setToken={setToken}/>
      </div>
  );
}

export default App;