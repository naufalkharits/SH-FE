import React from 'react'
import orang from "../images/orang.png";
const HistoryTransaksi = () => {
    return (
        <div className="w-full space-y-7 px-5 mt-4">
            <p className="font-medium">History Pembelian Produk</p>
            <div className="flex gap-6 rounded-xl">
                <img
                    src="/img/jam-2.png"
                    alt=""
                    className="h-14 w-14 rounded-xl object-cover"
                />
                <div className="w-full space-y-1">
                    <div className="flex justify-between text-xs text-neutral-03">
                        <p>Penawaran Produk</p>
                        <p>20 Apr, 14:04</p>
                    </div>
                    <p className="">Jam Tangan Casio</p>
                    <p className="">Rp 250.000</p>
                    <p className="">Ditawar Rp 200.000</p>
                </div>
            </div>
            <div className="h-px bg-[#E5E5E5]"></div>
        </div>
    )
}

export default HistoryTransaksi