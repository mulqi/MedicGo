import React from 'react';
import HeaderDashboard from '@/component/Header/HeaderDashboard/HeaderDasboard';
import CartField from '@/component/Cart/Cartfiled/CartField';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderDashboard />;
      <div className="bg-[#332941] absolute top-[140px] md:top-[81px] w-full  md:w-[832px] text-center rounded-md p-1 md:ml-1 text-white font-bold">
        <button onClick={() => navigate('/dashboard')}> ~DashBoard~ </button>
      </div>
      <CartField initialOrder={0} /> ;
    </>
  );
}
