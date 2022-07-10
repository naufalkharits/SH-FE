import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
    deleteProduct,
    getProductById,
    productsSelectors,
} from "../redux/productsSlice";
import ProfileCard from "../components/ProfileCard";
import PublishButton from "../components/buttons/PublishButton";
import BackButton from "../components/buttons/BackButton";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const PreviewProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { process } = useSelector((state) => state.products);
    const product = useSelector((state) =>
        productsSelectors.selectById(state, productId)
    );
    const [formValue, setFormValue] = useState({
        name: "",
        price: 0,
        category: "",
        description: "",
        pictures: [],
    });

    const [isHovered, setIsHovered] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteProduct({ productId, navigate }));
    };

    useEffect(() => {
        dispatch(getProductById(productId));
    }, [productId, dispatch]);

    useEffect(() => {
        product &&
            setFormValue({
                name: product.name,
                price: product.price,
                category: product.category,
                description: product.description,
                pictures: product.pictures,
            });
    }, [product]);

    return (
        <>
            <BackButton />
            <div className="container mx-auto sm:p-4 xl:px-32 2xl:px-64">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="space-y-4 sm:w-2/3 lg:w-3/4">
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
                    <div className="relative z-10 -mt-16 space-y-4 px-4 sm:z-0 sm:-mt-0 sm:w-1/3 sm:space-y-6 sm:px-0 lg:w-1/4">
                        <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                            <div className="mb-4 space-y-2">
                                <div>{formValue.name}</div>
                                <div className="text-sm text-neutral-03">
                                    {formValue.category}
                                </div>
                            </div>
                            <div className="">{formValue.price}</div>
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
                        </div>
                        <div className="flex items-center justify-center rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                            <div
                                onMouseEnter={() => {
                                    setIsHovered(true);
                                }}
                                onMouseLeave={() => {
                                    setIsHovered(false);
                                }}
                            >
                                {isHovered ? (
                                    <FaHeart className="h-5 w-5 text-red-600" />
                                ) : (
                                    <FaRegHeart className="h-5 w-5" />
                                )}
                            </div>
                        </div>
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
            <PublishButton />
        </>
    );
};

export default PreviewProduct;
