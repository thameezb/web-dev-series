import Navbar from './components/NavBar';
import Home from './components/Home/Home';
import Create from './components/CreateBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import Login from './components/Login/Login';
import useToken from './components/useToken';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
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
        <div className="content">
          <Routes>
            <Route exact path="/"     element={<Home />} />
            <Route path="/create"     element={<Create token={token}/>} />
            <Route path="/blogs/:id"  element={<BlogDetails token={token}/>} />
            <Route path="*"           element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;