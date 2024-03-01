import {Link} from "react-router-dom";
import Register from "../home/Register";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar() {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/posts">List</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/add-posts">Add<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="form-inline my-2 my-lg-0">

                        </div>
                            <h1>
                                | <Link to={'/'}>Home</Link> |
                                <Link to={'/login'}>Login</Link>|
                                <Link to={'/register'}>Register</Link>
                            </h1>
                    </nav>
                </div>
            </div>
        </>
    )
}
