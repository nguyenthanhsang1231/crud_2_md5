import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from "./home/Home";
import List from "./post/List";
import Add from "./post/Add";
import Edit from "./post/Edit";
import Login from "./home/Login";
import Register from "./home/Register";
import {Provider} from "react-redux";


function App() {
    return (
        <>
            <div className='container-fluid'>

                        <Routes>
                            <Route path={'/'} element={<Home/>}>
                                <Route path={'/posts'} element={<List/>}></Route>
                                <Route path={'/add-posts'} element={<Add/>}></Route>
                                <Route path={'/edit-posts/:id'} element={<Edit/>}></Route>
                                <Route path={'/login'} element={<Login/>}></Route>
                                <Route path={'/register'} element={<Register/>}></Route>
                            </Route>
                        </Routes>
                    </div>
        </>
    );
}

export default App;
