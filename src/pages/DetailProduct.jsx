import { useEffect, useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
    deleteProduct,
    fetchProductById,
    productsSelectors,
} from "../redux/productsSlice";
import { getWishlistById } from "../redux/wishlistSlice";
import { addTransactionTawar } from "../redux/transactionSlice";
import ProfileCard from "../components/ProfileCard";
import PublishButton from "../components/buttons/PublishButton";
import BackButton from "../components/buttons/BackButton";
import ModalTawar from "../components/modals/ModalTawar";
import WishlistButton from "../components/buttons/WishlistButton";
import { CgSpinner } from "react-icons/cg";
import IDR from "../utils/IDR";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const DetailProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { user, biodata } = useSelector((state) => state.auth);
    const { process, loading, error } = useSelector((state) => state.products);
    const product = useSelector((state) =>
        productsSelectors.selectById(state, productId)
    );

    const [isModalOn, setIsModalOn] = useState(false);
    const [price, setPrice] = useState(0);

    const handleDelete = () => {
        dispatch(deleteProduct({ productId, process, navigate }));
    };

    // modal transaksi
    const onChange = (e) => {
        setPrice(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(addTransactionTawar({ productId, price }));
    };

    useEffect(() => {
        dispatch(fetchProductById(productId));
        user && dispatch(getWishlistById(productId));
    }, [user, productId, dispatch]);

    return (
        <>
            {error?.message === "Valid Product ID is required" ? (
                <Navigate to="/" replace />
            ) : (
                <>
                    {isModalOn && (
                        <ModalTawar
                            setIsModalOn={setIsModalOn}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        />
                    )}
                    <BackButton />
                    <div className="container mx-auto sm:p-4 xl:px-32 2xl:px-64">
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div
                                className={className(
                                    product?.seller_id === biodata?.user_id
                                        ? "sm:w-2/3 lg:w-3/4"
                                        : "sm:w-3/5 lg:w-2/3",
                                    "space-y-4"
                                )}
                            >
                                {loading === "pending" ? (
                                    <div className="h-[32rem] w-full animate-pulse bg-gray sm:rounded-2xl"></div>
                                ) : (
                                    <Swiper>
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
                                        <div className="h-4 w-12 animate-pulse rounded-md bg-gray"></div>
                                    ) : (
                                        <div className="font-medium">
                                            Deskripsi
                                        </div>
                                    )}
                                    <p
                                        className={
                                            loading === "pending"
                                                ? "h-3 w-64 animate-pulse rounded-md bg-gray"
                                                : "text-sm text-neutral-03"
                                        }
                                    >
                                        {product?.description}
                                    </p>
                                </div>
                            </div>
                            <div
                                className={className(
                                    product?.seller_id === biodata?.user_id
                                        ? "sm:w-1/3 lg:w-1/4"
                                        : "sm:w-2/5 lg:w-1/3",
                                    "relative z-10 -mt-16 space-y-4 px-4 sm:z-0 sm:-mt-0 sm:space-y-6 sm:px-0"
                                )}
                            >
                                <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                                    <div className="mb-4 space-y-2">
                                        <div
                                            className={
                                                loading === "pending"
                                                    ? "h-4 w-32 animate-pulse rounded-md bg-gray"
                                                    : ""
                                            }
                                        >
                                            {product?.name}
                                        </div>
                                        <div
                                            className={
                                                loading === "pending"
                                                    ? "h-3 w-16 animate-pulse rounded-md bg-gray"
                                                    : "text-sm text-neutral-03"
                                            }
                                        >
                                            {product?.category}
                                        </div>
                                    </div>
                                    {loading === "pending" ? (
                                        <div className="h-4 w-20 animate-pulse rounded-md bg-gray"></div>
                                    ) : (
                                        <div>
                                            <IDR price={product?.price} />
                                        </div>
                                    )}
                                    {loading === "pending" ? (
                                        <div className="mt-6 h-12 w-full animate-pulse rounded-2xl bg-gray"></div>
                                    ) : user &&
                                      product?.seller_id ===
                                          biodata?.user_id ? (
                                        <>
                                            <button className="mb-4 mt-6 hidden w-full rounded-2xl bg-primary-purple-04 p-2 text-white hover:bg-primary-purple-05 sm:block">
                                                Terbitkan
                                            </button>
                                            <button
                                                className="mb-4 hidden w-full rounded-2xl border border-primary-purple-04 p-2 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white sm:block"
                                                onClick={() => {
                                                    navigate(
                                                        `/manage-product/edit/${productId}`
                                                    );
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className={className(
                                                    process === "pending"
                                                        ? "gap-2"
                                                        : "",
                                                    "hidden w-full items-center justify-center rounded-2xl bg-red-500 p-2 text-white hover:bg-red-600 sm:flex"
                                                )}
                                                type="submit"
                                                onClick={handleDelete}
                                            >
                                                {process === "pending" ? (
                                                    <>
                                                        <CgSpinner className="animate-spin" />
                                                        <span>Deleting...</span>
                                                    </>
                                                ) : (
                                                    <span>Delete</span>
                                                )}
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            className="mt-6 hidden w-full rounded-2xl bg-primary-purple-04 py-3.5 px-6 text-sm text-white hover:bg-primary-purple-05 sm:block"
                                            onClick={() => {
                                                setIsModalOn(true);
                                            }}
                                        >
                                            Saya tertarik dan ingin nego
                                        </button>
                                    )}
                                </div>
                                {user &&
                                    product?.seller_id !== biodata?.user_id && (
                                        <WishlistButton />
                                    )}
                                <ProfileCard
                                    user={user}
                                    seller_id={product?.seller_id}
                                    id={biodata?.user_id}
                                />
                            </div>
                            <div className="mb-8 px-4 sm:hidden sm:px-0">
                                <div className="space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                                    {loading === "pending" ? (
                                        <div className="h-4 w-12 animate-pulse rounded-md bg-gray"></div>
                                    ) : (
                                        <div className="font-medium">
                                            Deskripsi
                                        </div>
                                    )}
                                    <p
                                        className={
                                            loading === "pending"
                                                ? "h-3 w-64 animate-pulse rounded-md bg-gray"
                                                : "text-sm text-neutral-03"
                                        }
                                    >
                                        {product?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {user && product?.seller_id === biodata?.user_id ? (
                        <PublishButton />
                    ) : (
                        <button
                            className={className(
                                isModalOn === true ? "hidden" : "sm:hidden",
                                "fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-primary-purple-04 px-6 py-3.5 text-white shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05"
                            )}
                            onClick={() => {
                                setIsModalOn(true);
                            }}
                        >
                            <span>Saya Tertarik dan ingin Nego</span>
                        </button>
                    )}
                </>
            )}
        </>
    );
};

export default DetailProduct;
