import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";


export default function Add() {
    const [user, setUser] = useState([]);
    console.log("user", user)
    let navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/users').then(res => {
            setUser(res.data)
        })
    }, []);

    const handlesubmit = (values) => {
        axios.post('http://localhost:8080/posts', values).then(res => {
            console.log(res.data)
            navigate('/')
        })
    }
    return (
        <>
            <h1>add</h1>
            <Formik initialValues={{
                content: '',
                title: '',
                likes: '',
                status: '',
                user: {
                    id: ''
                }
            }} onSubmit={handlesubmit}>
                <Form>
                    <Field name={'content'}></Field>
                    <Field name={'title'}></Field>
                    <Field name={'likes'}></Field>
                    <Field name={'status'}></Field>
                    <Field as={'select'} name={'user.id'} defaultValue={'user[0].id'}>
                        {user.map((data) =>
                            <option key={data.id} value={data.id}>{data.username}</option>
                        )}
                    </Field>
                    <button>save</button>
                </Form>
            </Formik>
        </>
    )
}