// CartField.tsx
import React, { FC, useState } from 'react';
import CartAdress from '../CartAddress/CartFiels';
import Button from '@/component/core/action/Button';
import { Handle } from '@/component/core/action/Handle';
import { IconType } from '@/component/core/icons';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  order: number;
}

interface CartFieldProps {
  initialOrder: number;
}

const CartField: FC<CartFieldProps> = (props) => {
  const { order: initialOrder } = Handle({ initialOrder: props.initialOrder });

  const [cart, setCart] = useState<Product[]>([{ id: 0, name: 'Imboost', price: 6000, quantity: 0, order: initialOrder }]);

  const handleHapus = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity, order: newQuantity };
      }
      return product;
    });

    setCart(updatedCart);
  };

  return (
    <div className="flex-wrap md:flex gap-4">
      {cart.map((product) => (
        <div key={product.id} className="w-full mt-[150px] md:m-1 md:p-4 md:w-[832px] h-[102px] bg-[#D9D9D9] rounded-md flex justify-between">
          <div className="flex items-center">
            <img className="w-[82px] h-[68px] m-4 bg-[#ffffff78] rounded-md" alt="logo" src={IconType.Produk1} />
            <h1>{product.name}</h1>
          </div>
          <div className="flex-warp md:flex">
            <p className="">Total harga :</p>
            <p>Rp.{product.price * product.quantity}</p>
          </div>
          <div>
            <div className="bg-[#D42F2F] h-[22px] text-center m-2 md:m-0 text-white rounded-md">
              <button onClick={() => handleHapus(product.id)}>hapus</button>
              <div className="flex justify-center pt-10 md:pt-6 text-black">
                <Button onPlus={() => handleUpdateQuantity(product.id, product.quantity + 1)} onMinus={() => handleUpdateQuantity(product.id, Math.max(1, product.quantity - 1))} order={product.order} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <CartAdress cart={cart} />
    </div>
  );
};

export default CartField;
