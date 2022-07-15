import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { FiX } from "react-icons/fi"
import { setIsModalOn } from "../../redux/transactionSlice"
import DangerToast from "../toasts/DangerToast"
import IDR from "../../utils/IDR"
import { CgSpinner } from "react-icons/cg"

const className = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

const Modal = ({ price, product, onChange, onSubmit }) => {
    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.transaction)
    const [show, setShow] = useState(false)

    const handleCancelClick = () => {
        dispatch(setIsModalOn(false))
    }

    return (
        <>
            {show && (
                <DangerToast
                    show={show}
                    setShow={setShow}
                    message={error?.message}
                />
            )}
            <div className="fixed inset-0 z-40 bg-gray-bg">
                <div className="flex h-screen items-center justify-center">
                    {/* modal */}
                    <div className="h-fit w-96 rounded-2xl bg-white p-8">
                        <form className="" onSubmit={onSubmit}>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex justify-end">
                                        <FiX
                                            className="h-7 w-7 cursor-pointer rounded-full p-1 shadow hover:bg-gray"
                                            onClick={handleCancelClick}
                                        />
                                    </div>
                                    <div className="font-medium">
                                        Masukkan Harga Tawarmu
                                    </div>
                                    <div className="text-sm text-neutral-03">
                                        Harga tawaranmu akan diketahui penjual,
                                        jika penjual cocok kamu akan segera
                                        dihubungi penjual.
                                    </div>
                                    <div className="flex items-center gap-4 rounded-2xl p-4 shadow-md ring-1 ring-black ring-opacity-5 sm:bg-gray sm:shadow-none sm:ring-0">
                                        <div className="">
                                            <Swiper className="h-14 w-14 rounded-xl">
                                                {product?.pictures?.map(
                                                    (picture) => (
                                                        <SwiperSlide
                                                            key={picture}
                                                        >
                                                            <img
                                                                className="h-14 w-14 rounded-xl object-cover object-center"
                                                                src={picture}
                                                                alt=""
                                                            />
                                                        </SwiperSlide>
                                                    )
                                                )}
                                            </Swiper>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-sm font-medium">
                                                {product?.name}
                                            </div>
                                            <div className="text-sm">
                                                <IDR price={product?.price} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-1 text-xs">
                                        Harga Tawar
                                    </div>
                                    <input
                                        className="w-full rounded-2xl py-3.5 px-4 text-neutral-03 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        type="number"
                                        placeholder="Rp 0,00"
                                        onChange={onChange}
                                    />
                                </div>
                                <button
                                    className={className(
                                        !price && "bg-neutral-02",
                                        loading === "pending" &&
                                            "flex cursor-wait items-center justify-center gap-2 bg-neutral-02",
                                        price &&
                                            loading === "idle" &&
                                            "bg-primary-purple-04 hover:bg-primary-purple-05",
                                        "w-full rounded-2xl py-3.5 px-6 font-medium text-white"
                                    )}
                                    type="submit"
                                    disabled={!price}
                                    onClick={() => {
                                        setShow(true)
                                    }}
                                >
                                    {loading === "pending" ? (
                                        <>
                                            <CgSpinner className="animate-spin" />
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <span>Kirim</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
