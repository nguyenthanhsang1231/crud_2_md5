import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function Edit() {
    let { id } = useParams();
    let navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [post, setPost] = useState({content: '', title: '', likes: '', status: '', user: { id: '' }});

    useEffect(() => {
        axios.get(`http://localhost:8080/posts/${id}`)
            .then(res => {
                setPost(res.data);
            });

        axios.get('http://localhost:8080/users')
            .then(res => {
                setUser(res.data);
            });
    }, [id]);

    const handleSubmit = async (values) => {
        try {
            await axios.put(`http://localhost:8080/posts/${id}`, values);
            await axios.put(`http://localhost:8080/users/${values.user.id}`, values.user);
            navigate('/posts');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <>
            <h1>Edit</h1>
            <Formik
                initialValues={
                    {
                        content: post.content,
                        title: post.title,
                        likes: post.likes,
                        status: post.status,
                        user: { id: post.user.id }
                    }}
                onSubmit={handleSubmit}
                enableReinitialize={true}
            >
                <Form>
                    <Field name="content" />
                    <Field name="title" />
                    <Field name="likes" />
                    <Field name="status" />

                    <Field as="select" name="user.username">
                        {user.map((data) =>
                            <option key={data.id} value={data.id}>{data.username}</option>
                        )}
                    </Field>

                    <button type="submit">Edit</button>
                </Form>
            </Formik>
        </>
    );
}
