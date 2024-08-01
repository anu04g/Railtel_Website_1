// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Button, Table } from 'react-bootstrap';
// import { useLocation } from "react-router-dom";
// import './FetchData.css';


// function FetchData2() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     };

//     const handleDelete = (id) => {
//         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then(() => {
//                 setData(data.filter(user => user.id !== id));
//             })
//             .catch(err => console.log(err));
//     };

//     const setToLocalStorage = (id,name,email) => {
//         localStorage.setItem("id",id);
//         localStorage.setItem("name",name);
//         localStorage.setItem("email",email);
//     }

//     const location = useLocation();
//     const { updatedUsers } = location.state || { updatedUsers: [] };

//     return (
//         <div className='container'>
//             <div className='mt-3'>
//                 <h1>List 2</h1>
//                 <Table striped bordered hover size='sm'>
//                     <thead>
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">Username</th>
//                             <th scope="col">Email</th>
//                             <th scope="col"></th>
//                             <th scope="col"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>
//                                     <Link to = "/update">
//                                         <button className="btn-success" onClick={() => setToLocalStorage(
//                                             user.id,
//                                             user.name,
//                                             user.email
//                                             )}>Edit</button>
//                                     </Link>
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </div>
//             <div>
//             <h2>Updated Users</h2>
//             {updatedUsers.length > 0 ? (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {updatedUsers.map(user => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No users found.</p>
//             )}
//         </div>
//         </div>
        
//     );
// }

// export default FetchData2;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import './FetchData.css';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                setData(data.filter(user => user.id !== id));
            })
            .catch(err => console.log(err));
    };

    const updateUser = (updatedUser) => {
        const updatedData = data.map(user => user.id === updatedUser.id ? updatedUser : user);
        setData(updatedData);
    };

    return (
        <div className='container'>
            <div className='mt-3'>
                {/* <h1>List 2</h1> */}
                <div className='table-container'>
                    <Table striped bordered hover size='sm' className='custom-table'>
                    <thead className='custom-head'>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {data.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={{ pathname: '/update', state: { user, updateUser } }}>
                                            <Button>Edit</Button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default FetchData;
