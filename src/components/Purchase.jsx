import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTransaction, transactionSelectors } from "../redux/transactionSlice"
import IDR from "../utils/IDR"
import { Swiper, SwiperSlide } from "swiper/react"

import TransactionSkeleton from "./skeletons/TransactionSkeleton"
import Transaction404 from "../unfound/Transaction404"

const className = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

const Purchase = () => {
    const dispatch = useDispatch()
    const [status] = useState("")
    const [as] = useState("buyer")

    const transaction = useSelector(transactionSelectors.selectAll)

    const { loading } = useSelector((state) => state.transaction)

    useEffect(() => {
        dispatch(getTransaction({ status, as }))
    }, [status, as, dispatch])

    return (
        <>
            <div className="mt-4 w-full space-y-5 px-5 sm:pl-10">
                <p className="font-medium">Histori Pembelian</p>
                {loading === "pending" ? (
                    <TransactionSkeleton />
                ) : transaction?.length === 0 ? (
                    <div className="my-16 w-full">
                        <Transaction404 />
                    </div>
                ) : (
                    transaction?.map((tx) => (
                        <div key={tx.id} className="w-full space-y-7">
                            <div className="flex gap-4 rounded-xl">
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
                                <div className="w-full space-y-1">
                                    <div className="flex justify-between text-xs text-neutral-03">
                                        <span>{tx?.status}</span>
                                        <span>
                                            {dayjs(tx.updatedAt).format(
                                                "D MMM, HH:mm"
                                            )}
                                        </span>
                                    </div>
                                    <div className="">{tx?.product.name}</div>
                                    <div
                                        className={className(
                                            tx?.status === "COMPLETED" &&
                                                "line-through"
                                        )}
                                    >
                                        <IDR price={tx?.product.price} />
                                    </div>
                                    {tx?.status === "PENDING" ||
                                    tx?.status === "ACCEPTED" ? (
                                        <div className="">
                                            Ditawar <IDR price={tx?.price} />
                                        </div>
                                    ) : tx?.status === "COMPLETED" ? (
                                        <div className="">
                                            Berhasil ditawar{" "}
                                            <IDR price={tx?.price} />
                                        </div>
                                    ) : (
                                        <div className="">
                                            Gagal ditawar{" "}
                                            <IDR price={tx?.price} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="h-px bg-neutral-200"></div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default Purchase
