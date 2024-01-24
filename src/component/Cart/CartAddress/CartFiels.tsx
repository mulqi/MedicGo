import { IconType } from '@/component/core/icons';
import React, { useState } from 'react';
import Point from '@/assets/icons/point.png';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartAdressProps {
  cart: Product[];
}

export default function CartAdress({ cart }: CartAdressProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [address, setAddress] = useState('jl.bojong Kacor rt 05/ rw 12');
  const [newAddress, setNewAddress] = useState('');

  const handleBuatPesanan = () => {
    console.log('Pesanan dibuat dengan alamat:', editMode ? newAddress : address);
    setShowPopup(true);
  };

  const handleEditAlamat = () => {
    setEditMode(true);
    setNewAddress(address);
  };

  const handleSaveAlamat = () => {
    setAddress(newAddress);
    setEditMode(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setEditMode(false);
  };

  return (
    <div className="md:w-[470px] h-[302px] rounded-md bg-[#D9D9D9] mt-4 md:mt-1 relative">
      <div>
        <h1 className="text-center font-bold pt-2">Alamat</h1>
        <div className={`h-auto md:w-[462px] m-1 md:h-[70px] p-5 bg-[#ffffff78] rounded-lg flex items-center justify-between ${editMode ? 'border-2 border-blue-500' : ''}`}>
          <img src={Point} alt="logo" />
          {editMode ? <input type="text" className="flex-grow ml-4" placeholder="Masukkan alamat baru" value={newAddress} onChange={(e) => setNewAddress(e.target.value)} /> : <h1>{address}</h1>}
          <div>
            {editMode ? (
              <button className="bg-green-800 w-[65px] h-[22px] text-center text-white rounded-md" onClick={handleSaveAlamat}>
                simpan
              </button>
            ) : (
              <button className="bg-red-800 w-[50px] h-[22px] text-center text-white rounded-md" onClick={handleEditAlamat}>
                edit
              </button>
            )}
          </div>
        </div>
        <div className="w-[328px] md:h-[125px] m-4 flex gap-2">
          <img className="w-[161px] h-[112px] bg-[#ffffff78] rounded-md" alt="logo" src={IconType.Produk1} />
          <div className="text-center">
            <p>Imboost</p>
            <p>Jumlah : {cart.reduce((total, product) => total + product.quantity, 0)}</p>
            <p>Rp.{cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-[124px] h-[30px] bg-[#54b427c4] rounded-md text-white" onClick={handleBuatPesanan}>
            Buat pesanan
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md w-[400px]">
            <p className="text-lg font-bold mb-4">Pesanan berhasil!</p>
            <div className="mb-4">
              <p className="text-sm font-semibold">Alamat Pengiriman:</p>
              <p>{editMode ? newAddress : address}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Detail Produk:</p>
              <div className="flex items-center gap-2">
                <img className="w-[40px] h-[40px] bg-[#ffffff78]" alt="logo" src={IconType.Produk1} />
                <div>
                  <p>Imboost</p>
                  <p>Jumlah : {cart.reduce((total, product) => total + product.quantity, 0)}</p>
                  <p>Rp.{cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
                </div>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4" onClick={handleClosePopup}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
