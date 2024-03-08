import React, {useEffect, useState} from "react";
import axios from "axios";

import {Link} from "react-router-dom";



export default function List() {
    const [list, setLish] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/posts').then(res => {
            console.log(res.data)
            setLish(res.data);
        })
    }, []);

    return (
        <>
            <h1>LIST</h1>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <div className={'row'}>
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Content</th>
                            <th scope="col">Like</th>
                            <th scope="col">Status</th>
                            <th scope="col">Title</th>
                            <th scope="col">User name</th>
                            <th scope="col">Button</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list.map((item, key) => {
                            return (

                                <tr>
                                    <th scope="row">{key + 1}</th>
                                    <td>{item.content}</td>
                                    <td>{item.title}</td>
                                    <td>{item.likes}</td>
                                    <td>{item.status}</td>
                                    <td>{item.user.username}</td>
                                    <td>
                                        <button onClick={() => {
                                            axios.delete('http://localhost:8080/posts/' + item.id).then(() => {
                                                axios.get('http://localhost:8080/posts').then(res => {
                                                    console.log(res.data)
                                                    setLish(res.data);
                                                })
                                                alert("ban co chac k")
                                                setLish();
                                            })
                                        }}>delete
                                        </button>
                                    </td>
                                    <td>
                                        <Link to={'/edit-posts/' + item.id}>edit</Link>
                                    </td>
                                </tr>

                            )
                        })}
                        <Link to={'/'}>Back</Link>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}