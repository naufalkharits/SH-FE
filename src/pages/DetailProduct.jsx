import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
    deleteProduct,
    fetchProductById,
    productsSelectors,
} from "../redux/productsSlice";
import {
    addWishlistBuyer,
    deleteWishlistBuyer,
    getWishlistById,
} from "../redux/wishlistSlice";
import { addTransactionTawar } from "../redux/transactionSlice";
import ProfileCard from "../components/ProfileCard";
import PublishButton from "../components/buttons/PublishButton";
import BackButton from "../components/buttons/BackButton";
import ModalTawar from "../components/modals/ModalTawar";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const DetailProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { biodata } = useSelector((state) => state.auth);
    const { process } = useSelector((state) => state.products);
    const product = useSelector((state) =>
        productsSelectors.selectById(state, productId)
    );
    const { isWishlist } = useSelector((state) => state.wishlist);
    const [formValue, setFormValue] = useState({
        id: null,
        name: "",
        price: 0,
        category: "",
        description: "",
        pictures: [],
        sellerId: null,
    });
    const [price, setPrice] = useState(0);

    const [isHovered, setIsHovered] = useState(false);
    const [modalOn, setModalOn] = useState(false);

    const handleDelete = (e) => {
        dispatch(deleteProduct({ productId, process, navigate }));
    };

    const addWishlist = (e) => {
        dispatch(addWishlistBuyer({ productId, navigate }));
    };

    const deleteWishlist = (e) => {
        dispatch(deleteWishlistBuyer({ productId, navigate }));
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
        dispatch(getWishlistById(productId));
        dispatch(fetchProductById(productId));
    }, [productId, dispatch]);

    useEffect(() => {
        product &&
            setFormValue({
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                description: product.description,
                pictures: product.pictures,
                sellerId: product.seller_id,
            });
    }, [product]);

    return (
        <>
            {modalOn && (
                <ModalTawar
                    setModalOn={setModalOn}
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            )}
            <BackButton />
            <div className="container mx-auto sm:p-4 xl:px-32 2xl:px-64">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div
                        className={className(
                            formValue.sellerId === biodata?.id
                                ? "sm:w-2/3 lg:w-3/4"
                                : "sm:w-3/5 lg:w-2/3",
                            "space-y-4"
                        )}
                    >
                        <Swiper>
                            {formValue.pictures.map((picture) => (
                                <SwiperSlide key={picture}>
                                    <img
                                        className="h-[32rem] w-full object-cover object-center sm:rounded-2xl"
                                        src={picture}
                                        alt=""
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="hidden space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 sm:block">
                            <div className="font-medium">Deskripsi</div>
                            <p className="text-sm text-neutral-03">
                                {formValue.description}
                            </p>
                            {/* <p className="text-sm text-neutral-03">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores consequatur
                                incidunt, nobis dolore, minus rerum, nisi unde
                                sint corrupti suscipit obcaecati dolores odio
                                qui ut error eius iusto alias deleniti?
                            </p> */}
                        </div>
                    </div>
                    <div
                        className={className(
                            formValue.sellerId === biodata?.id
                                ? "sm:w-1/3 lg:w-1/4"
                                : "sm:w-2/5 lg:w-1/3",
                            "relative z-10 -mt-16 space-y-4 px-4 sm:z-0 sm:-mt-0 sm:space-y-6 sm:px-0"
                        )}
                    >
                        <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                            <div className="mb-4 space-y-2">
                                <div>{formValue.name}</div>
                                <div className="text-sm text-neutral-03">
                                    {formValue.category}
                                </div>
                            </div>
                            <div className="">
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(formValue.price)}
                            </div>
                            {formValue.sellerId === biodata?.id ? (
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
                                        setModalOn(true);
                                    }}
                                >
                                    Saya tertarik dan ingin nego
                                </button>
                            )}
                        </div>
                        {formValue.sellerId !== biodata?.id && (
                            <div className="flex items-center justify-center rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                                {isWishlist ? (
                                    <div
                                        onMouseEnter={() => {
                                            setIsHovered(true);
                                        }}
                                        onMouseLeave={() => {
                                            setIsHovered(false);
                                        }}
                                        onClick={deleteWishlist}
                                    >
                                        {isHovered ? (
                                            <FaRegHeart className="h-5 w-5" />
                                        ) : (
                                            <FaHeart className="h-5 w-5 text-red-500" />
                                        )}
                                    </div>
                                ) : (
                                    <div
                                        onMouseEnter={() => {
                                            setIsHovered(true);
                                        }}
                                        onMouseLeave={() => {
                                            setIsHovered(false);
                                        }}
                                        onClick={addWishlist}
                                    >
                                        {isHovered ? (
                                            <FaHeart className="h-5 w-5 text-red-600" />
                                        ) : (
                                            <FaRegHeart className="h-5 w-5" />
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        <ProfileCard />
                    </div>
                    <div className="mb-8 px-4 sm:hidden sm:px-0">
                        <div className="space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                            <div className="font-medium">Deskripsi</div>
                            <p className="text-sm text-neutral-03">
                                {formValue.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {formValue.sellerId === biodata?.id ? (
                <PublishButton />
            ) : (
                <button
                    className={className(
                        modalOn === true ? "hidden" : "sm:hidden",
                        "fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-primary-purple-04 px-6 py-3.5 text-white shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05"
                    )}
                    onClick={() => {
                        setModalOn(true);
                    }}
                >
                    <span>Saya Tertarik dan ingin Nego</span>
                </button>
            )}
        </>
    );
};

export default DetailProduct;
