import { useEffect, useState } from "react"
import { useNavigate, useParams, Navigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import {
    deleteProduct,
    getProductById,
    productsSelectors,
} from "../redux/productsSlice"
import { getWishlistById } from "../redux/wishlistSlice"
import {
    postTransaction,
    getFilteredTransaction,
    setIsModalOn,
} from "../redux/transactionSlice"
import BackFloatingButton from "../components/buttons/BackFloatingButton"
import ModalTawar from "../components/modals/ModalTawar"
import WishlistButton from "../components/buttons/WishlistButton"
import SellerCard from "../components/SellerCard"
import EditFloatingButton from "../components/buttons/EditFloatingButton"
import { priceFormatter } from "../utils/priceFormatter"
import { CgSpinner } from "react-icons/cg"
import { classNameJoin } from "../utils/classNameJoin"

const DetailProduct = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { productId } = useParams()
    const dispatch = useDispatch()
    const { user, profile } = useSelector((state) => state.auth)
    const { filteredTx, addedTx, isModalOn } = useSelector(
        (state) => state.transaction
    )
    const loadingTx = useSelector((state) => state.transaction.loading)
    const loadingAuth = useSelector((state) => state.auth.loading)
    const { loading, spinner, error } = useSelector((state) => state.products)
    const product = useSelector((state) =>
        productsSelectors.selectById(state, productId)
    )
    const [status] = useState("")
    const [as] = useState("buyer")
    const [price, setPrice] = useState(0)

    const handleDelete = () => {
        dispatch(deleteProduct({ productId, navigate }))
    }

    // modal transaksi
    const onChange = (e) => {
        setPrice(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(postTransaction({ productId, price }))
    }

    useEffect(() => {
        user && dispatch(getFilteredTransaction({ status, as, productId }))
    }, [user, addedTx, status, as, productId, dispatch])

    useEffect(() => {
        dispatch(getProductById(productId))
        user && dispatch(getWishlistById(productId))
    }, [user, productId, dispatch])

    return (
        <>
            {error?.message === "Product not found" ||
            error?.message === "Valid Product ID is required" ? (
                <Navigate to="/404" replace />
            ) : (
                <>
                    {isModalOn && (
                        <ModalTawar
                            price={price}
                            product={product}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        />
                    )}
                    <BackFloatingButton />
                    <div className="container mx-auto sm:p-4 xl:px-32 2xl:px-64">
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div
                                className={classNameJoin(
                                    product?.seller?.user_id === profile?.id
                                        ? "sm:w-2/3 lg:w-3/4"
                                        : "sm:w-3/5 lg:w-2/3",
                                    "space-y-4"
                                )}
                            >
                                {loading === "pending" ? (
                                    <div className="h-[32rem] w-full animate-pulse bg-smoke dark:bg-zinc-800 sm:rounded-2xl"></div>
                                ) : (
                                    <Swiper
                                        modules={[Pagination]}
                                        pagination={{
                                            dynamicBullets: true,
                                            clickable: true,
                                        }}
                                    >
                                        {product?.pictures.map((picture) => (
                                            <SwiperSlide key={picture}>
                                                <img
                                                    className="h-[32rem] w-full object-cover object-center sm:rounded-2xl"
                                                    src={picture}
                                                    alt=""
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                )}
                                <div className="hidden space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 sm:block">
                                    {loading === "pending" ? (
                                        <div className="h-4 w-20 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                    ) : (
                                        <div className="font-medium dark:text-white">
                                            Deskripsi
                                        </div>
                                    )}
                                    {loading === "pending" ? (
                                        <div className="space-y-2 [&>div:last-child]:w-4/5">
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-neutral-03 dark:text-zinc-400">
                                            {product?.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div
                                className={classNameJoin(
                                    product?.seller?.user_id === profile?.id
                                        ? "sm:w-1/3 lg:w-1/4"
                                        : "sm:w-2/5 lg:w-1/3",
                                    "relative z-10 -mt-16 space-y-4 px-4 sm:z-0 sm:-mt-0 sm:space-y-6 sm:px-0"
                                )}
                            >
                                <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-black ring-opacity-5 dark:bg-zinc-900 dark:shadow-zinc-800 dark:ring-white dark:ring-opacity-10">
                                    <div className="mb-4 space-y-2">
                                        <div
                                            className={
                                                loading === "pending"
                                                    ? "h-4 w-32 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"
                                                    : "dark:text-white"
                                            }
                                        >
                                            {product?.name}
                                        </div>
                                        <div
                                            className={
                                                loading === "pending"
                                                    ? "h-3 w-16 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"
                                                    : "text-sm text-neutral-03 dark:text-zinc-400"
                                            }
                                        >
                                            {product?.category}
                                        </div>
                                    </div>
                                    {loading === "pending" ? (
                                        <div className="h-4 w-20 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                    ) : (
                                        <div className="dark:text-white">
                                            {priceFormatter(product?.price)}
                                        </div>
                                    )}
                                    {loading === "pending" ||
                                    loadingTx === "pending" ||
                                    loadingAuth === "pending" ? (
                                        <div className="mt-6 hidden h-12 w-full animate-pulse rounded-2xl bg-smoke dark:bg-zinc-800 sm:block"></div>
                                    ) : user ? (
                                        <>
                                            {product?.seller?.user_id ===
                                            profile?.id ? (
                                                <>
                                                    {/* <button className="mb-4 mt-6 hidden w-full rounded-2xl bg-primary-purple-04 p-2 text-white hover:bg-primary-purple-05 sm:block">
                                                Terbitkan
                                            </button> */}
                                                    {/* <button
                                                className="mb-4 mt-6 hidden w-full rounded-2xl border border-primary-purple-04 p-2 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white sm:block"
                                                onClick={() => {
                                                    navigate(
                                                        `/manage-product/edit/${productId}`
                                                    );
                                                }}
                                            >
                                                Edit
                                            </button> */}
                                                    <button
                                                        className="mb-4 mt-6 hidden w-full rounded-2xl bg-primary-purple-04 p-2 text-white hover:bg-primary-purple-05 sm:block"
                                                        onClick={() => {
                                                            navigate(
                                                                `/manage-product/edit/${productId}`,
                                                                {
                                                                    state: {
                                                                        from: location,
                                                                    },
                                                                }
                                                            )
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className={classNameJoin(
                                                            spinner
                                                                ? "flex cursor-wait items-center justify-center gap-2 bg-neutral-02"
                                                                : "border border-primary-purple-04 hover:bg-primary-purple-05 hover:text-white dark:text-white",
                                                            "mt-6 w-full rounded-2xl p-2 sm:mt-0"
                                                        )}
                                                        type="submit"
                                                        onClick={handleDelete}
                                                    >
                                                        {spinner ? (
                                                            <>
                                                                <CgSpinner className="animate-spin" />
                                                                <span>
                                                                    Processing...
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <span>Delete</span>
                                                        )}
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    {product?.status ===
                                                    "SOLD" ? (
                                                        <button
                                                            className="mt-6 hidden w-full rounded-2xl bg-neutral-02 py-3.5 px-6 text-sm text-white dark:bg-zinc-500 sm:block"
                                                            disabled
                                                        >
                                                            SOLD OUT
                                                        </button>
                                                    ) : (
                                                        <>
                                                            {filteredTx?.length !==
                                                            0 ? (
                                                                <button
                                                                    className="mt-6 hidden w-full rounded-2xl bg-neutral-02 py-3.5 px-6 text-sm text-white dark:bg-zinc-500 sm:block"
                                                                    disabled
                                                                >
                                                                    Menunggu
                                                                    respon
                                                                    penjual
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    className="mt-6 hidden w-full rounded-2xl bg-primary-purple-04 py-3.5 px-6 text-sm text-white hover:bg-primary-purple-05 sm:block"
                                                                    onClick={() => {
                                                                        dispatch(
                                                                            setIsModalOn(
                                                                                true
                                                                            )
                                                                        )
                                                                    }}
                                                                >
                                                                    Saya
                                                                    tertarik dan
                                                                    ingin nego
                                                                </button>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <button
                                            className="mt-6 hidden w-full rounded-2xl bg-primary-purple-04 py-3.5 px-6 text-sm text-white hover:bg-primary-purple-05 sm:block"
                                            onClick={() => {
                                                navigate("/login")
                                            }}
                                        >
                                            Saya tertarik dan ingin nego
                                        </button>
                                    )}
                                </div>
                                {user &&
                                    product?.seller?.user_id !==
                                        profile?.id && <WishlistButton />}
                                <SellerCard
                                    loading={loading}
                                    id={product?.seller?.user_id}
                                    name={product?.seller?.name}
                                    picture={product?.seller?.picture}
                                    city={product?.seller?.city}
                                />
                            </div>
                            <div className="mb-8 px-4 sm:hidden sm:px-0">
                                <div className="space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                                    {loading === "pending" ? (
                                        <div className="h-4 w-20 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                    ) : (
                                        <div className="font-medium dark:text-white">
                                            Deskripsi
                                        </div>
                                    )}
                                    {loading === "pending" ? (
                                        <div className="space-y-2 [&>div:last-child]:w-4/5">
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                            <div className="h-3 animate-pulse rounded-md bg-smoke dark:bg-zinc-800"></div>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-neutral-03 dark:text-zinc-400">
                                            {product?.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    {user && product?.seller?.user_id === profile?.id ? (
                        <>
                            {loading === "idle" && loadingTx === "idle" && (
                                <EditFloatingButton productId={productId} />
                            )}
                        </>
                    ) : (
                        loading === "idle" &&
                        loadingTx === "idle" && (
                            <>
                                {filteredTx?.length !== 0 ? (
                                    <button
                                        className={classNameJoin(
                                            isModalOn ? "hidden" : "sm:hidden",
                                            "fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-neutral-02 px-6 py-3.5 text-white shadow-lg shadow-neutral-02 dark:bg-zinc-500 dark:shadow-zinc-500"
                                        )}
                                        disabled
                                    >
                                        <span>Menunggu respon penjual</span>
                                    </button>
                                ) : (
                                    <button
                                        className={classNameJoin(
                                            isModalOn ? "hidden" : "sm:hidden",
                                            "fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-primary-purple-04 px-6 py-3.5 text-white shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05 dark:shadow-primary-purple-04 dark:hover:shadow-primary-purple-05"
                                        )}
                                        onClick={() => {
                                            dispatch(setIsModalOn(true))
                                        }}
                                    >
                                        <span>
                                            Saya Tertarik dan ingin Nego
                                        </span>
                                    </button>
                                )}
                            </>
                        )
                    )}
                </>
            )}
        </>
    )
}

export default DetailProduct
