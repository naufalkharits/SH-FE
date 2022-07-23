import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTransaction, transactionSelectors } from "../redux/transactionSlice"
import { priceFormatter } from "../utils/priceFormatter"
import { Swiper, SwiperSlide } from "swiper/react"
import TransactionSkeleton from "./skeletons/TransactionSkeleton"
import MyTransaction404 from "./unfound/MyTransaction404"
import { classNameJoin } from "../utils/classNameJoin"

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
                <p className="font-medium dark:text-white">Histori Pembelian</p>
                {loading === "pending" ? (
                    <TransactionSkeleton />
                ) : transaction?.length === 0 ? (
                    <div className="my-16 w-full">
                        <MyTransaction404 />
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
                                    <div className="flex justify-between text-xs text-neutral-03 dark:text-zinc-400">
                                        <span>{tx?.status}</span>
                                        <span>
                                            {dayjs(tx.updatedAt).format(
                                                "D MMM, HH:mm"
                                            )}
                                        </span>
                                    </div>
                                    <div className="dark:text-white">
                                        {tx?.product.name}
                                    </div>
                                    <div
                                        className={classNameJoin(
                                            tx?.status === "COMPLETED"
                                                ? "line-through dark:text-white"
                                                : "dark:text-white"
                                        )}
                                    >
                                        {priceFormatter(tx?.product.price)}
                                    </div>
                                    {tx?.status === "PENDING" ||
                                    tx?.status === "ACCEPTED" ? (
                                        <div className="dark:text-white">
                                            Ditawar {priceFormatter(tx?.price)}
                                        </div>
                                    ) : tx?.status === "COMPLETED" ? (
                                        <div className="dark:text-white">
                                            Berhasil ditawar{" "}
                                            {priceFormatter(tx?.price)}
                                        </div>
                                    ) : (
                                        <div className="dark:text-white">
                                            Gagal ditawar{" "}
                                            {priceFormatter(tx?.price)}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="h-px bg-neutral-200 dark:bg-zinc-800"></div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default Purchase
