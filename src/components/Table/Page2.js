// import React from 'react';
// import TableComponent from './TableComponent';

// const Page2 = () => {
//   const data = [
//     { id: 1, title: 'Product A', price: 100 },
//     { id: 2, title: 'Product B', price: 150 },
//   ];

//   const columns = ['id', 'title', 'price'];

//   return (
//     <div>
//       <h1>Page 2</h1>
//       <TableComponent data={data} columns={columns} />
//     </div>
//   );
// };

// export default Page2;

import React from 'react';
import FetchData2 from '../Home/FetchData2';
import { Link } from 'react-router-dom';
import ButtonAppBar from '../Navbar/Navbar';
import Vector from '../Assests/BlueVector2.png';
import './Page2.css';

const Page2 = () => {
  return (
    <>
      <ButtonAppBar />
      <div className='d-flex justify-content-end my-10' style={{ marginRight: '25px' }}>
        <Link to='/create' className='btn btn-success mt-4' style={{ marginRight: '25px' }}>Create</Link>
      </div>
      <div className='tablecontainerpage'>
        <FetchData2 />
      </div>
      {/* <img id="vector" src={Vector} alt='Vector' /> */}
    </>
  );
};

export default Page2;

