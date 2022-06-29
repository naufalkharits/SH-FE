import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchProductById, productsSelectors } from "../redux/productsSlice";
import ProfileCard from "../components/ProfileCard";
import ModalTawar from "../components/modals/ModalTawar";
import { AiOutlineHeart } from "react-icons/ai";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const PreviewProduct = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
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

    useEffect(() => {
        dispatch(fetchProductById(productId));
    }, [productId, dispatch]);

    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false);

    const onClick = () => {
        setModalOn(true);
    };

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
            <div className="container mx-auto sm:p-4 xl:px-32 2xl:px-64">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="space-y-4 sm:w-3/5 lg:w-2/3">
                        <Swiper>
                            {formValue.pictures.map((picture) => (
                                <SwiperSlide key={picture}>
                                    <img
                                        className="h-[32rem] w-full object-cover object-center sm:rounded-2xl"
                                        src={formValue.pictures}
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
                            <p className="text-sm text-neutral-03">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores consequatur
                                incidunt, nobis dolore, minus rerum, nisi unde
                                sint corrupti suscipit obcaecati dolores odio
                                qui ut error eius iusto alias deleniti?
                            </p>
                        </div>
                    </div>
                    <div className="relative z-10 -mt-16 space-y-4 px-4 sm:-mt-0 sm:w-2/5 sm:space-y-6 sm:px-0 lg:w-1/3">
                        <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                            <div className="mb-4 space-y-2">
                                <div>{formValue.name}</div>
                                <div className="text-sm text-neutral-03">
                                    {formValue.category}
                                </div>
                            </div>
                            <div className="sm:mb-6">{formValue.price}</div>
                            <button
                                onClick={onClick}
                                className="hidden w-full rounded-2xl bg-primary-purple-04 py-3.5 px-6 text-sm text-white hover:bg-primary-purple-05 sm:block"
                            >
                                Saya tertarik dan ingin nego
                            </button>
                        </div>
                        <ProfileCard />
                        <div className="flex items-center justify-center rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                            <AiOutlineHeart />
                        </div>
                    </div>
                    <div className="mb-8 px-4 sm:hidden sm:px-0">
                        <div className="space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
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
                </div>
                {modalOn && (
                    <ModalTawar setModalOn={setModalOn} setChoice={setChoice} />
                )}
            </div>
            <button
                className={className(
                    modalOn === true ? "hidden" : "sm:hidden",
                    "fixed inset-x-0 bottom-8 z-50 mx-auto w-fit rounded-2xl bg-primary-purple-04 px-6 py-3.5 text-white shadow-lg shadow-primary-purple-03 hover:bg-primary-purple-05"
                )}
                onClick={onClick}
            >
                <span>Saya Tertarik dan ingin Nego</span>
            </button>
        </>
    );
};

export default PreviewProduct;
