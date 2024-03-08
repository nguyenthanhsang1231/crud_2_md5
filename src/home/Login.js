import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Field, Form, Formik} from "formik";
import {LoginUser} from "../services/userService";
export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (values) => {
        await dispatch(LoginUser(values))
        if (LoginUser === true) {
             navigate('/posts')

        } else {
            await navigate('/login')
        }

    }
    return (
        <div className={'row'}>
            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <Formik initialValues={{username: '', password: ''}} onSubmit={(values) => {
                    handleLogin(values).then()
                }}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address/Username</label>
                            <Field type="text" className={'form-control'} name={'username'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <Field type="text" className={'form-control'} name={'password'}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
                If you don't have a account <Link to={"/register"}>Register</Link>
            </div>
        </div>
    )
}