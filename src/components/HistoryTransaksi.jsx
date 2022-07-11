import React from 'react'
import {
    fetchTransactionTawar,
    transactionSelectors,
} from "../redux/transactionSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import IDR from "../utils/IDR";


const HistoryTransaksi = () => {
    const dispatch = useDispatch();
    const [status] = useState("");
    const [as] = useState("seller");

    const transaction = useSelector(transactionSelectors.selectAll);

    useEffect(() => {
        dispatch(fetchTransactionTawar({ status, as }));
    }, [status, as, dispatch]);

    return (
        <>
        {transaction?.map((tx) => (
        <div className="w-full space-y-7 px-5 mt-4">
            <p className="font-medium">History Pembelian Produk</p>
            <div className="flex gap-6 rounded-xl">
                <img
                    src="/img/jam-2.png"
                    alt=""
                    className="h-14 w-14 rounded-xl object-cover"
                />
                <div key={tx.id}className="w-full space-y-1">
                    <div className="flex justify-between text-xs text-neutral-03">
                        <p>Penawaran Produk</p>
                        <p>                     
                            {dayjs(tx.updatedAt).format("D MMM, HH:mm")}
                        </p>
                    </div>
                    <p className="">{tx?.product.name}</p>
                    <p className="">
                        <IDR price={tx?.product.price} />
                    </p>
                    <p className="">
                        Ditawar <IDR price={tx?.price} />
                        </p>
                </div>
            </div>
            <div className="h-px bg-[#E5E5E5]"></div>
        </div>
        ))}
        </>
    )
}

export default HistoryTransaksi