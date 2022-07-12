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
import ModalStatus from "../components/modals/ModalStatus";
import { updateTransactionTawar } from "../redux/transactionSlice";
import { BsWhatsapp } from "react-icons/bs";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const TransactionCard = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState("");
    const [as] = useState("seller");
    const [isModalOn, setIsModalOn] = useState(false);
    const {loading} = useSelector((state) => state.transaction )
    // const [newStatus, setNewStatus] = useState(""); 

    const transaction = useSelector(transactionSelectors.selectAll);

    const clicked = (id, st, price) => {
        const newSt = String(st)
        console.log(newSt);
        // setStatus(st)
        console.log(id, st);
        dispatch(updateTransactionTawar({ id, newSt, price }));
    };

    useEffect(() => {
        loading === "idle" && 
        dispatch(fetchTransactionTawar({ status, as }));
    }, [status, as, dispatch]);

    return (
        <>
        {isModalOn && (
            <ModalStatus
                setIsModalOn={setIsModalOn}
            />
            )}
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
                            <button 
                            onClick={() => {clicked(tx?.id, 'REJECTED', tx?.price)}}
                            className="mr-4 w-[45%] rounded-2xl border border-primary-purple-04 py-2 sm:w-[28%]">
                                Tolak
                            </button>
                            <button
                            onClick={() => {clicked(tx?.id, 'ACCEPTED', tx?.price)}}
                            className="w-[45%] rounded-2xl bg-primary-purple-04 py-2 text-white sm:w-[28%]"
                            >
                                Terima
                            </button>
                        </div>
                    )}

                    {tx.status === "ACCEPTED" && (
                        <div className="flex justify-evenly sm:justify-end">
                            <button 
                            onClick={() => {
                                setIsModalOn(true);
                            }}
                            className="mr-4 w-[45%] rounded-2xl border border-primary-purple-04 py-2 sm:w-[28%]">
                                Status
                            </button>
                            <button
                                className="w-[45%] rounded-2xl bg-primary-purple-04 py-2 text-white sm:w-[28%]"
                            >
                                Hubungi di <BsWhatsapp/>
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
