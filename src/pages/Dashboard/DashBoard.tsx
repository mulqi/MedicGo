import React from 'react';
import { IconType } from '@/component/core/icons';
import HeaderDashboard from '@/component/Header/HeaderDashboard/HeaderDasboard';
import Card from '@/component/core/Cards/CardField/Card';
import CardShop from '@/component/core/Cards/CardShop/Card';

export default function DashBoard() {
  return (
    <main>
      <HeaderDashboard />
      <div className="relative m-[20px] mt-[20px] top-20 md:top-0">
        <div className="w-[200px] p-1 md:w-[200px] rounded-lg bg-zinc-300 bg-opacity-90">
          <h1 className="font-bold text-black font-['Jaldi'] text-[25px]">Layanan apotek</h1>
        </div>
        <div className="flex items-center lg:flex-row flex-col md:flex-row md:flex-wrap justify-start">
          <Card logo={IconType.Apoteker} title="Chat apoteker" />
          <Card logo={IconType.Resep} title="Tebus Resep" />
          <Card logo={IconType.Obat} title="Obat kulit" />
          <Card logo={IconType.Vitamin} title="vitamin & Supelmen" />
        </div>
      </div>
      <div className="relative m-[20px] top-20 md:top-0">
        <div className="w-full p-1 md:w-[300px] rounded-lg bg-zinc-300 bg-opacity-90">
          <h1 className="font-bold text-black font-['Jaldi'] text-[25px]">Layanan laboratorium</h1>
        </div>
        <div className="flex items-center lg:flex-row flex-col md:flex-row md:flex-wrap justify-start">
          <Card logo={IconType.Kolestrol} title="Kolestrol" />
          <Card logo={IconType.AsamUrat} title="Asam urat" />
          <Card logo={IconType.ObatTulang} title="Obat tulang & sendi" />
        </div>
      </div>
      <div className="relative m-[20px] top-20 md:top-0">
        <div className="w-full p-1 md:w-[100px] rounded-lg bg-zinc-300 bg-opacity-90">
          <h1 className="font-bold text-black font-['Jaldi'] text-[25px]">Produk</h1>
        </div>
        <div className="flex items-center lg:flex-row flex-col md:flex-row md:flex-wrap justify-start gap-4">
          <CardShop logo={IconType.Produk1} title="Kolestrol" />
          <CardShop logo={IconType.Produk2} title="Asam urat" />
          <CardShop logo={IconType.Produk3} title="Obat tulang & sendi" />
        </div>
      </div>
    </main>
  );
}
