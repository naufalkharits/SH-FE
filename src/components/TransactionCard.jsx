import { useEffect } from "react"
import {
    fetchTransactionTawar,
    setIsModalOn,
    transactionSelectors,
} from "../redux/transactionSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import dayjs from "dayjs"
import { BsWhatsapp } from "react-icons/bs"

import { updateTransactionTawar } from "../redux/transactionSlice"
import ModalStatus from "../components/modals/ModalStatus"
import MyTransaction404 from "../unfound/MyTransaction404"
import IDR from "../utils/IDR"
import { useNavigate } from "react-router-dom"

const className = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

const TransactionCard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const transaction = useSelector(transactionSelectors.selectAll)
    const { isModalOn, updatedTx, loading } = useSelector(
        (state) => state.transaction
    )
    const [update, setUpdate] = useState({
        id: null,
        status: "",
        price: 0,
    })

    // step-1
    const onClick = (updateValue) => {
        dispatch(
            updateTransactionTawar({
                id: updateValue.id,
                status: updateValue.status,
                price: updateValue.price,
            })
        )
    }

    // step-2
    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(
            updateTransactionTawar({
                id: update.id,
                status: update.status,
                price: update.price,
            })
        )
    }

    useEffect(() => {
        dispatch(fetchTransactionTawar({ status: "", as: "seller" }))
    }, [updatedTx, dispatch])

    return (
        <>
            {isModalOn && (
                <ModalStatus
                    update={update}
                    setUpdate={setUpdate}
                    onSubmit={onSubmit}
                />
            )}
            {loading === "idle" && (
                <>
                    {transaction.length !== 0 ? (
                        transaction?.map((tx) => (
                            <div key={tx.id} className="mb-5 space-y-6">
                                <div className="flex gap-4 rounded-xl">
                                    <Swiper className="h-14 w-16 rounded-xl">
                                        {tx.product.pictures.map((picture) => (
                                            <SwiperSlide key={picture}>
                                                <img
                                                    className="h-14 w-14 rounded-xl object-cover object-center"
                                                    src={picture}
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="w-full space-y-1">
                                        <div className="flex justify-between text-xs text-neutral-03">
                                            <span>{tx?.status}</span>
                                            <span>
                                                {dayjs(tx?.updatedAt).format(
                                                    "D MMM, HH:mm"
                                                )}
                                            </span>
                                        </div>
                                        <div>{tx?.product.name}</div>
                                        <div>
                                            <IDR price={tx?.product.price} />
                                        </div>
                                        <div>
                                            Ditawar{" "}
                                            <span className="text-primary-purple-04">
                                                <IDR price={tx?.price} />
                                            </span>{" "}
                                            oleh
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={tx?.buyer?.picture}
                                                alt=""
                                            />
                                            <div className="">
                                                <div className="text-xs text-neutral-05">
                                                    {tx?.buyer?.name}
                                                </div>
                                                <div className="text-xs text-neutral-04">
                                                    {tx?.buyer?.city}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {tx.status === "PENDING" && (
                                    <div className="flex justify-evenly sm:justify-end">
                                        <button
                                            onClick={() => {
                                                onClick({
                                                    id: tx?.id,
                                                    status: "REJECTED",
                                                    price: tx?.price,
                                                })
                                            }}
                                            className="mr-4 w-[45%] rounded-2xl border border-primary-purple-04 py-2 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white sm:w-[28%]"
                                        >
                                            Tolak
                                        </button>
                                        <button
                                            onClick={() => {
                                                onClick({
                                                    id: tx?.id,
                                                    status: "ACCEPTED",
                                                    price: tx?.price,
                                                })
                                            }}
                                            className="w-[45%] rounded-2xl bg-primary-purple-04 py-2 text-white hover:bg-primary-purple-05 sm:w-[28%]"
                                        >
                                            Terima
                                        </button>
                                    </div>
                                )}
                                {tx.status === "ACCEPTED" && (
                                    <div className="flex justify-evenly sm:justify-end">
                                        <button
                                            onClick={() => {
                                                setUpdate({
                                                    id: tx?.id,
                                                    price: tx?.price,
                                                })
                                                dispatch(setIsModalOn(true))
                                            }}
                                            className="mr-4 w-[45%] rounded-2xl border border-primary-purple-04 py-2 sm:w-[28%]"
                                        >
                                            Status
                                        </button>
                                        <button
                                            onClick={() => {
                                                window.open(
                                                    `https://wa.me/${tx?.buyer?.phone_number}`
                                                )
                                            }}
                                            className="flex w-[45%] items-center justify-center rounded-2xl bg-primary-purple-04 py-2 text-white sm:w-[28%]"
                                        >
                                            Hubungi di{" "}
                                            <BsWhatsapp className="mx-2 my-1 h-3" />
                                        </button>
                                    </div>
                                )}
                                <div className="h-px bg-neutral-200"></div>
                            </div>
                        ))
                    ) : (
                        <MyTransaction404 />
                    )}
                </>
            )}
        </>
    )
}

export default TransactionCard
