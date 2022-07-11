import { useEffect } from "react";
import {
    fetchTransactionTawar,
    transactionSelectors,
} from "../redux/transactionSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import dayjs from "dayjs";
import IDR from "../utils/IDR";
import { updateTransactionTawar } from "../redux/transactionSlice";

const TransactionCard = () => {
    const dispatch = useDispatch();
    const [status] = useState("");
    const [as] = useState("seller");

    const [transactionValue, setTransactionValue] = useState({
        status:"",
    });

    const transaction = useSelector(transactionSelectors.selectAll);

    // const clicked = () => {
    //     setModalOn(true);
    // };

    const onChange = (e) => {
        setTransactionValue({
            ...transactionValue,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        transactionValue.name && status.set("status", transactionValue.status);
        dispatch(updateTransactionTawar({ status }));
    };

    useEffect(() => {
        dispatch(fetchTransactionTawar({ status, as }));
    }, [status, as, dispatch]);

    return (
        <>
            {transaction?.map((tx) => (
                <div key={tx.id} className="mb-5 space-y-6">
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
                    {tx.status === "PENDING" && (
                        <div className="flex justify-evenly sm:justify-end">
                            <button className="mr-4 w-[45%] rounded-2xl border border-primary-purple-04 py-2 sm:w-[28%]">
                                Tolak
                            </button>
                            <button
                                // onClick={clicked}
                                className="w-[45%] rounded-2xl bg-primary-purple-04 py-2 text-white sm:w-[28%]"
                            >
                                Terima
                            </button>
                        </div>
                    )}

                    {tx.status === "ACCEPTED" && (
                        <div className="flex justify-evenly sm:justify-end">
                            <button className="mr-4 w-[45%] rounded-2xl border border-primary-purple-04 py-2 sm:w-[28%]">
                                Status
                            </button>
                            <button
                                // onClick={clicked}
                                className="w-[45%] rounded-2xl bg-primary-purple-04 py-2 text-white sm:w-[28%]"
                            >
                                Hubungi di WhatsApp
                            </button>
                        </div>
                    )}
                    <div className="h-px bg-[#E5E5E5]"></div>
                </div>
            ))}
        </>
    );
};

export default TransactionCard;
