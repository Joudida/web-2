
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-dark bg -dark">
            <div className="container">
                <Link className="navbar-brand" to='/'> myproject</Link>
                                <Link className="navbar-brand" to='/'> Dashboard</Link>

                <button className="navbar-toggler"type="button"data-bs-toggle="#navbarnav">
                    <span classname ="navbar-toggler-icon"></span>
                </button>
            
            </div>
        </nav>
    )
}

export default Navbar