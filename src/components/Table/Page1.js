// import React from 'react';
// import TableComponent from './TableComponent';

// const Page1 = () => {
//   const data = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Doe', age: 25 },
//   ];

//   const columns = ['id', 'name', 'age'];

//   return (
//     <div>
//       <h1>Page 1</h1>
//       <TableComponent data={data} columns={columns} />
//     </div>
//   );
// };


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import ButtonAppBar from '../Navbar/Navbar';
import FetchData from '../Home/FetchData';
import Vector from '../Assests/BlueVector2.png';


const Page1 = () => {
    return ( 
        <>
            <ButtonAppBar />
            <div className='d-flex justify-content-end my-10' style={{ marginRight: '25px' }}>
              <Link to='/create' className='btn btn-success mt-4' style={{ marginRight: '25px' }}>Create</Link>
            </div>
            <FetchData />
        </>
    );
};

export default Page1;


  
  