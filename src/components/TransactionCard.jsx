import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
    getTransaction,
    setIsModalOn,
    transactionSelectors,
} from "../redux/transactionSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import dayjs from "dayjs"
import { TbBrandWhatsapp } from "react-icons/tb"
import { putTransaction } from "../redux/transactionSlice"
import ModalStatus from "../components/modals/ModalStatus"
import Tawar404 from "../unfound/Tawar404"
import { priceFormatter } from "../utils/priceFormatter"
import TransactionSkeleton from "./skeletons/TransactionSkeleton"

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
            putTransaction({
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
            putTransaction({
                id: update.id,
                status: update.status,
                price: update.price,
            })
        )
    }

    useEffect(() => {
        dispatch(getTransaction({ status: "", as: "seller" }))
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
            {loading === "pending" ? (
                <TransactionSkeleton />
            ) : (
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
                                        <div className="flex justify-between text-xs text-neutral-03 dark:text-zinc-400">
                                            <span>{tx?.status}</span>
                                            <span>
                                                {dayjs(tx?.updatedAt).format(
                                                    "D MMM, HH:mm"
                                                )}
                                            </span>
                                        </div>
                                        <div className="dark:text-white">
                                            {tx?.product.name}
                                        </div>
                                        <div className="dark:text-white">
                                            {priceFormatter(tx?.product.price)}
                                        </div>
                                        <div>
                                            <span className="dark:text-white">
                                                Ditawar{" "}
                                            </span>
                                            <span className="text-primary-purple-04">
                                                {priceFormatter(tx?.price)}
                                            </span>{" "}
                                            <span className="dark:text-white">
                                                oleh
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={tx?.buyer?.picture}
                                                alt=""
                                            />
                                            <div className="">
                                                <div className="text-xs  dark:text-zinc-50">
                                                    {tx?.buyer?.name}
                                                </div>
                                                <div className="text-xs text-neutral-04 dark:text-zinc-100">
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
                                            className="mr-4 w-[45%] rounded-2xl border border-primary-purple-04 py-2 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white md:w-[35%] lg:w-[30%]"
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
                                            className="w-[45%] rounded-2xl bg-primary-purple-04 py-2 text-white hover:bg-primary-purple-05 md:w-[35%] lg:w-[30%]"
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
                                            className="mr-4 w-[45%] rounded-2xl border border-primary-purple-04 py-2 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white md:w-[35%] lg:w-[30%]"
                                        >
                                            Status
                                        </button>
                                        <button
                                            className="flex w-[45%] items-center justify-center gap-2 rounded-2xl bg-primary-purple-04 py-2 px-6 text-white hover:bg-primary-purple-05 md:w-[35%] lg:w-[30%]"
                                            onClick={() => {
                                                window.open(
                                                    `https://api.whatsapp.com/send?phone=62${tx?.buyer?.phone_number}`
                                                )
                                            }}
                                        >
                                            <span>
                                                Hubungi{" "}
                                                <span className="hidden sm:inline">
                                                    via
                                                </span>
                                            </span>
                                            <TbBrandWhatsapp />
                                        </button>
                                    </div>
                                )}
                                <div className="h-px bg-neutral-200 dark:bg-zinc-800"></div>
                            </div>
                        ))
                    ) : (
                        <Tawar404 />
                    )}
                </>
            )}
        </>
    )
}

export default TransactionCard
