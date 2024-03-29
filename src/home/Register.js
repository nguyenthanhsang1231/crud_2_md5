import {Link} from "react-router-dom";

export default function Register() {
    return (
        <div className={'row'}>
            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Register</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address/Username</label>
                        <input type="text" className={'form-control'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="text" className={'form-control'}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="submit" className="ml-3 btn btn-secondary">
                        <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>Login</Link>
                    </button>

                </form>
            </div>
        </div>
    )
}