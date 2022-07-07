import { useEffect } from "react";
import { fetchTransactionTawar, transactionSelectors } from "../redux/transactionSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

const TransactionCard = () => {
    const dispatch = useDispatch();
    const [status] = useState("");
    const [as] = useState("seller");

    var moment = require('moment');

    const transaction = useSelector(transactionSelectors.selectAll)

    // const clicked = () => {
    //     setModalOn(true);
    // };

    useEffect(() => {
        dispatch(fetchTransactionTawar({ status, as }));
    }, [status, as, dispatch]);

    return (
        <>
            {transaction?.map((tx) => (
                <div key={tx.id} className="space-y-6 mb-5">
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
                        src={tx.product.pictures[0]}
                        alt=""
                        className="h-14 w-14 rounded-xl object-cover"
                    /> */}
                        <div className="w-full space-y-1">
                            <div className="flex justify-between text-xs text-neutral-03">
                                <p>{tx.status}</p>
                                <p>{moment(tx.updatedAt).format('D MMM, HH:mm')}</p>
                            </div>
                            <p className="">{tx?.product.name}</p>
                            <p className="">Rp. {tx?.product.price.toLocaleString("id-ID")}</p>
                            <p className="">Ditawar Rp. {tx?.price.toLocaleString("id-ID")}</p>
                        </div>
                    </div>
                    {tx.status === "PENDING" &&
                        <div className="flex sm:justify-end justify-evenly">
                            <button className="mr-4 sm:w-[28%] w-[45%] rounded-2xl border border-primary-purple-04 py-2">
                                Tolak
                            </button>
                            <button
                                // onClick={clicked}
                                className="sm:w-[28%] w-[45%] rounded-2xl bg-primary-purple-04 py-2 text-white"
                            >
                                Terima
                            </button>
                        </div>
                    }
                    <div className="h-px bg-[#E5E5E5]"></div>
                </div>
            ))}
        </>

    );
};

export default TransactionCard;
