import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    fetchTransactionTawar,
    transactionSelectors,
} from "../redux/transactionSlice";
import IDR from "../utils/IDR";
import { Swiper, SwiperSlide } from "swiper/react";

const HistoryTransaksi = () => {
    const dispatch = useDispatch();
    const [status] = useState("");
    const [as] = useState("buyer");

    const transaction = useSelector(transactionSelectors.selectAll);

    // const clicked = () => {
    //     setModalOn(true);
    // };

    useEffect(() => {
        dispatch(fetchTransactionTawar({ status, as }));
    }, [status, as, dispatch]);

    return (
        <>
            <div className="w-full px-5 space-y-5 mt-4">
                <p className="font-medium">History Pembelian Produk</p>
                {transaction?.map((tx) => (
                    <div key={tx.id} className="w-full space-y-7">
                        <div className="flex gap-6 rounded-xl">
                            <Swiper className="h-14 w-16 rounded-xl object-cover">
                                {tx.product.pictures.map((picture) => (
                                    <SwiperSlide key={picture}>
                                        <img
                                            className="h-14 w-14 rounded-xl object-cover"
                                            src={picture}
                                            alt=""
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* <img
                                src="/img/jam-2.png"
                                alt=""
                                className="h-14 w-14 rounded-xl object-cover"
                            /> */}
                            <div className="w-full space-y-1">
                                <div className="flex justify-between text-xs text-neutral-03">
                                    <p>Penawaran Produk</p>
                                    <p>{dayjs(tx.updatedAt).format("D MMM, HH:mm")}</p>
                                </div>
                                <p className="">{tx?.product.name}</p>
                                <p className=""><IDR price={tx?.product.price} /></p>
                                <p className="">Ditawar <IDR price={tx?.price} /></p>
                            </div>
                        </div>
                        <div className="h-px bg-[#E5E5E5]"></div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default HistoryTransaksi