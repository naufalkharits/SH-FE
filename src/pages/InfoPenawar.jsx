import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import orang from "../images/orang.png";

const InfoPenawar = () => {
  return (
    <div className="sm:w-[650px] w-full mx-auto space-y-7 sm:mt-10 mt-4 px-4">
      <div className="flex items-center gap-6 rounded-2xl border border-neutral-200 p-4 shadow-low">
        <img src={orang} alt="" />
        <div className="space-y-1">
          <div>Nama Pembeli</div>
          <div className="text-xs text-neutral-03">Kota</div>
        </div>
      </div>
      <p className="font-medium">
        Daftar Produkmu yang Ditawar
      </p>
      <div className="flex gap-6 rounded-2xl">
        <img src='/img/jam-2.png' alt="" className='w-14 h-14 object-cover rounded-xl' />
        <div className="space-y-1 w-full">
          <div className="flex text-neutral-03 text-xs justify-between">
            <p>Penawaran Produk</p>
            <p>20 Apr, 14:04</p>
          </div>
          <p className="">Jam Tangan Casio</p>
          <p className="">Rp 250.000</p>
          <p className="">Ditawar Rp 200.000</p>
          <div className="flex justify-end">
            <button className='border border-primary-purple-04 rounded-2xl py-2 w-1/3 mr-4'>Tolak</button>
            <button className='bg-primary-purple-04 text-white rounded-2xl py-2 w-1/3'>Terima</button>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#E5E5E5]"></div>
    </div>
  )
}

export default InfoPenawar