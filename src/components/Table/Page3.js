import React from 'react';
import ButtonAppBar from '../Navbar/Navbar';
import Parent1 from '../Cards/Parent1';
import Parent2 from '../Cards/Parent2';
import RCard from '../Cards/RCard';
import './page3.css'
import Vector from '../Assests/Vector (3).png';

const Page3 = () => {
  return (
    <>
      <ButtonAppBar />
      
      {/* <C1/>
      <C2/> */}
      <Parent2/>
      {/* <Cards2/>
      <Cards3/> */}
      <Parent1/>
      {/* <img id="Vector" src={Vector} alt='Vector' /> */}
    </>
  );
};

export default Page3;
