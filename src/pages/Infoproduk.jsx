import React from "react";
import { FiPlus, FiChevronDown } from "react-icons/fi";

const Infoproduk = () => {
  return (
    <div className="space-y-4 p-5 sm:mx-auto sm:w-[650px] w-full sm:mt-10 mt-4">
      <div className="space-y-2">
        <label className="block">Nama Produk</label>
        <input
          className="w-full rounded-2xl border border-neutral-02 py-3 px-4 text-neutral-03 focus:outline-none"
          type="text"
          placeholder="Nama Produk"
        />
      </div>
      <div className="space-y-2">
        <label className="block">Harga Produk</label>
        <input
          className="w-full rounded-2xl border border-neutral-02 py-3 px-4 text-neutral-03 focus:outline-none"
          type="number"
          placeholder="Rp 0,00"
        />
      </div>
      <div className="space-y-2">
        <label className="block">Category</label>
        <label className="relative block">
          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
            <FiChevronDown />
          </span>
          <select className=" w-full rounded-2xl appearance-none border border-neutral-02 bg-neutral-01 py-3 pr-10 pl-3 focus:outline-none text-neutral-03 sm:text-sm">
            <option value="">Pilih Kategori</option>
            <option value="Hobi">Hobi</option>
            <option value="Kendaraan">Kendaraan</option>
            <option value="Baju">Baju</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Kesehatan">Kesehatan</option>
          </select>
        </label>
      </div>
      <div className="space-y-2">
        <label className="block">Deskripsi</label>
        <textarea
          id=""
          name=""
          rows="2"
          className="w-full rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 text-neutral-03 focus:outline-none resize-none"
          placeholder="Contoh: Jalan Ikan Hiu 33"
        />
      </div>
      <div className="space-y-2">
        <label className="block">Foto Produk</label>
        <label
          className="flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-neutral-02 text-neutral-03 text-2xl"
          htmlFor="file"
        >
          <input
            className="hidden h-full w-full"
            type="file"
            id="file"
            accept="image/png, image/jpeg"
            multiple
          />
          <FiPlus />
        </label>
      </div>
      <div className="flex justify-between">
        <button className="rounded-xl border border-primary-purple-04 py-3 font-medium  sm:w-74 w-[48%]">
          Preview
        </button>
        <button className="rounded-xl bg-primary-purple-04 py-3 font-medium text-white sm:w-74 w-[48%]">
          Terbitkan
        </button>
      </div>
    </div>
  );
};

export default Infoproduk;
