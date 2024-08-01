import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Create() {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const header = {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = (event) => {
        event.preventDefault();
        // const values = { id, name, email };
        axios.post('https://jsonplaceholder.typicode.com/users', {
            id: id,
            name: name ,
            email : email,
            header,
        })
            .then(res => {
                console.log(res); 
                navigate('/page1');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 bordr bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='id'>ID:</label>
                        <input
                            type='text'
                            name='id'
                            className='form-control'
                            placeholder='Enter ID'
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            placeholder='Enter UserName'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='text'
                            name='email'
                            className='form-control'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/page1" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Create;
