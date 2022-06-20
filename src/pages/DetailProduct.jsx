import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, productsSelectors } from "../redux/productsSlice";
import ProfileCard from "../components/ProfileCard";
import { AiOutlineHeart } from "react-icons/ai";

const DetailProduct = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(productsSelectors.selectAll);

    useEffect(() => {
        console.log(products);
        dispatch(fetchProductById(productId));
    }, [dispatch]);

    return (
        <>
            {products.map((product) => (
                <div
                    className="container mx-auto px-4 xl:px-32 2xl:px-64"
                    key={product.id}
                >
                    <div className="m-4 flex flex-col gap-4 sm:flex-row">
                        <div className="space-y-4 sm:w-2/3 lg:w-3/4">
                            <img
                                className="w-full"
                                src={product.pictures}
                                alt=""
                            />
                            <div className="hidden space-y-4 rounded-2xl border border-neutral-200 p-4 shadow sm:block">
                                <div className="font-medium">
                                    {product.description}
                                </div>
                                <p className="text-sm text-neutral-03">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Tempora nostrum nisi
                                    labore nesciunt necessitatibus, debitis
                                    quibusdam veritatis. Ratione impedit
                                    architecto maxime dolores in commodi
                                    praesentium repellat, soluta vel odit id!
                                </p>
                                <p className="text-sm text-neutral-03">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Asperiores consequatur
                                    incidunt, nobis dolore, minus rerum, nisi
                                    unde sint corrupti suscipit obcaecati
                                    dolores odio qui ut error eius iusto alias
                                    deleniti?
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 sm:w-1/3 sm:space-y-6 lg:w-1/4">
                            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-md">
                                <div className="mb-4 space-y-2">
                                    <div>{product.name}</div>
                                    <div className="text-sm text-neutral-03">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="mb-6">Rp. 250.000</div>
                                <button className="mb-4 hidden w-full rounded-2xl bg-primary-purple-04 p-2 text-white hover:bg-primary-purple-05 sm:block">
                                    Terbitkan
                                </button>
                                <button className="hidden w-full rounded-2xl border border-primary-purple-04 p-2 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white sm:block">
                                    Edit
                                </button>
                            </div>
                            <ProfileCard />
                            <div className="flex items-center justify-center rounded-2xl border border-neutral-200 p-4 shadow">
                                <AiOutlineHeart />
                            </div>
                        </div>
                        <div className="space-y-4 rounded-2xl border border-neutral-200 p-4 shadow sm:hidden">
                            <div className="font-medium">Deskripsi</div>
                            <p className="text-sm text-neutral-03">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempora nostrum nisi labore
                                nesciunt necessitatibus, debitis quibusdam
                                veritatis. Ratione impedit architecto maxime
                                dolores in commodi praesentium repellat, soluta
                                vel odit id!
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
                </div>
            ))}
        </>
    );
};

export default DetailProduct;
