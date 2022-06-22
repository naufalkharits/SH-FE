import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, productsSelectors } from "../redux/productsSlice";
import ProfileCardBuyer from "../components/ProfileCardBuyer";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import ModalTawar from "../components/ModalTawar";

const DetailProductBuyer = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) =>
        productsSelectors.selectById(state, productId)
    );

    useEffect(() => {
        dispatch(fetchProductById(productId));
    }, [productId, dispatch]);

    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false);

    const clicked = () => {
        setModalOn(true);
    };

    return (
        <div
            className="container mx-auto px-4 xl:px-32 2xl:px-64"
            key={product?.id}
        >
            <div className="m-4 flex flex-col gap-4 sm:flex-row">
                <div className="space-y-4 sm:w-2/3 lg:w-3/4">
                    <img className="w-full" src={product?.pictures} alt="" />
                    <div className="hidden space-y-4 rounded-2xl border border-neutral-200 p-4 shadow sm:block">
                        <div className="font-medium">Deskripsi</div>
                        <p className="text-sm text-neutral-03">
                            {product?.description}
                        </p>
                        <p className="text-sm text-neutral-03">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores consequatur incidunt, nobis dolore,
                            minus rerum, nisi unde sint corrupti suscipit
                            obcaecati dolores odio qui ut error eius iusto alias
                            deleniti?
                        </p>
                    </div>
                </div>
                <div className="space-y-4 sm:w-1/3 sm:space-y-6 lg:w-1/4">
                    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-md">
                        <div className="mb-4 space-y-2">
                            <div>{product?.name}</div>
                            <div className="text-sm text-neutral-03">
                                {product?.category}
                            </div>
                        </div>
                        <div className="mb-6">Rp. 250.000</div>
                        <button
                            onClick={clicked}
                            className="mb-4 hidden w-full rounded-2xl bg-primary-purple-04 p-2 text-sm text-white hover:bg-primary-purple-05 sm:block sm:h-[48px]"
                        >
                            Saya tertarik dan ingin nego
                        </button>
                    </div>
                    <ProfileCardBuyer />
                    <div className="flex items-center justify-center rounded-2xl border border-neutral-200 p-4 shadow">
                        <AiOutlineHeart />
                    </div>
                </div>
                <div className="space-y-4 rounded-2xl border border-neutral-200 p-4 shadow sm:hidden">
                    <div className="font-medium">Deskripsi</div>
                    <p className="text-sm text-neutral-03">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora nostrum nisi labore nesciunt necessitatibus,
                        debitis quibusdam veritatis. Ratione impedit architecto
                        maxime dolores in commodi praesentium repellat, soluta
                        vel odit id!
                    </p>
                    <p className="text-sm text-neutral-03">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores consequatur incidunt, nobis dolore, minus
                        rerum, nisi unde sint corrupti suscipit obcaecati
                        dolores odio qui ut error eius iusto alias deleniti?
                    </p>
                </div>
            </div>
            {modalOn && (
                <ModalTawar setModalOn={setModalOn} setChoice={setChoice} />
            )}
        </div>
    );
};

export default DetailProductBuyer;
