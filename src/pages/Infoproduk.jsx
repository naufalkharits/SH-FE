import React from 'react'
import { FiPlus, FiArrowLeft } from 'react-icons/fi'

const Infoproduk = () => {
  return (
    <div className="lg:w-1/3 p-5 space-y-4 lg:m-auto sm:w-full">
        <div className="space-y-2">
          <label className='block'>Nama Produk</label>
          <input className='w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none text-neutral-03' type="text" placeholder='Nama Produk' />
        </div>
        <div className="space-y-2">
          <label className="block">Harga Produk</label>
          <input className='w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none text-neutral-03' type="number" placeholder='Rp 0,00' />
        </div>
        <div className="space-y-2">
          <label className="block">Category</label>
          <select className='w-full rounded-2xl bg-neutral-01 border border-neutral-02 py-3 px-4 focus:outline-none text-neutral-03'>
            <option value="">Pilih Kategori</option>
            <option value="Hobi">Hobi</option>
            <option value="Kendaraan">Kendaraan</option>
            <option value="Baju">Baju</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Kesehatan">Kesehatan</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className='block'>Deskripsi</label>
          <textarea id="" name="" rows="3" className='w-full rounded-2xl bg-neutral-01 border border-neutral-02 py-3 px-4 focus:outline-none text-neutral-03' placeholder='Contoh: Jalan Ikan Hiu 33' />
        </div>
        <div className="space-y-2">
          <label className='block'>Foto Produk</label>
          <label className="flex w-24 h-24 rounded-xl border border-dashed border-neutral-02 justify-center items-center text-neutral-03" htmlFor='file'>
            <input className='w-full h-full hidden' type="file" id='file' accept="image/png, image/jpeg" multiple/>
            <FiPlus />
          </label>
        </div>
        <div className="flex justify-between">
          <button className="border border-primary-purple-04 rounded-xl px-6 py-3 lg:w-72  font-medium">Preview</button>
          <button className="bg-primary-purple-04 rounded-xl px-6 py-3 lg:w-72 font-medium text-white">Terbitkan</button>
        </div>
    </div>
  )
}

export default Infoproduk