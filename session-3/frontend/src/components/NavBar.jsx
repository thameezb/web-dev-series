import { Link } from 'react-router-dom';

const Navbar = ({setToken}) => {
    const handleClick = () => {
        setToken('')
    }

    return ( 
        <nav className="navbar">
            <h1>Blog Demo App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
                <Link to="/" onClick={handleClick}>Logout</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;