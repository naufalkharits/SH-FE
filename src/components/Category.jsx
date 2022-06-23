import { useDispatch, useSelector } from "react-redux";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { categoryQuery } from "../redux/productsSlice";
import { FiSearch } from "react-icons/fi";

const Category = () => {
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.products);
    const onClick = (query) => dispatch(categoryQuery(query));

    return (
        <>
            <div className="mb-4 font-bold">Telusuri Kategori</div>
            <ScrollingCarousel>
                <div
                    className={`${
                        category === ""
                            ? "bg-primary-purple-04 text-white "
                            : "bg-primary-purple-01 "
                    }flex cursor-pointer items-center gap-2 rounded-xl py-3 px-6`}
                    onClick={() => {
                        onClick("");
                    }}
                >
                    <FiSearch />
                    <span>Semua</span>
                </div>
                <div
                    className={`${
                        category === "Automotive"
                            ? "bg-primary-purple-04 text-white "
                            : "bg-primary-purple-01 "
                    }ml-4 flex cursor-pointer items-center gap-2 rounded-xl py-3 px-6`}
                    onClick={() => {
                        onClick("Automotive");
                    }}
                >
                    <FiSearch />
                    <span>Automotive</span>
                </div>
                <div
                    className={`${
                        category === "Property"
                            ? "bg-primary-purple-04 text-white "
                            : "bg-primary-purple-01 "
                    }ml-4 flex cursor-pointer items-center gap-2 rounded-xl py-3 px-6`}
                    onClick={() => {
                        onClick("Property");
                    }}
                >
                    <FiSearch />
                    <span>Property</span>
                </div>
                <div
                    className={`${
                        category === "Baju"
                            ? "bg-primary-purple-04 text-white "
                            : "bg-primary-purple-01 "
                    }ml-4 flex cursor-pointer items-center gap-2 rounded-xl py-3 px-6`}
                    onClick={() => {
                        onClick("Baju");
                    }}
                >
                    <FiSearch />
                    <span>Baju</span>
                </div>
                <div
                    className={`${
                        category === "Electronic"
                            ? "bg-primary-purple-04 text-white "
                            : "bg-primary-purple-01 "
                    }ml-4 flex cursor-pointer items-center gap-2 rounded-xl py-3 px-6`}
                    onClick={() => {
                        onClick("Electronic");
                    }}
                >
                    <FiSearch />
                    <span>Electronic</span>
                </div>
                <div
                    className={`${
                        category === "Sport"
                            ? "bg-primary-purple-04 text-white "
                            : "bg-primary-purple-01 "
                    }ml-4 flex cursor-pointer items-center gap-2 rounded-xl py-3 px-6`}
                    onClick={() => {
                        onClick("Sport");
                    }}
                >
                    <FiSearch />
                    <span>Sport</span>
                </div>
                <div
                    className={`${
                        category === "Office"
                            ? "bg-primary-purple-04 text-white "
                            : "bg-primary-purple-01 "
                    }ml-4 flex cursor-pointer items-center gap-2 rounded-xl py-3 px-6`}
                    onClick={() => {
                        onClick("Office");
                    }}
                >
                    <FiSearch />
                    <span>Office</span>
                </div>
            </ScrollingCarousel>
        </>
    );
};

export default Category;
