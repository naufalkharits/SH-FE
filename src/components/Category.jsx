import { useDispatch, useSelector } from "react-redux";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { categoryQuery, resetPageOffset } from "../redux/productsSlice";
import { FiSearch } from "react-icons/fi";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const Category = () => {
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.products);
    const onClick = (query) => {
        dispatch(categoryQuery(query));
        dispatch(resetPageOffset());
    };

    return (
        <>
            <div className="mb-4 font-medium sm:font-bold">
                Telusuri Kategori
            </div>
            <ScrollingCarousel leftIcon={false} rightIcon={false}>
                <div
                    className={className(
                        category === ""
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                    onClick={() => {
                        onClick("");
                    }}
                >
                    <FiSearch />
                    <span>Semua</span>
                </div>
                <div
                    className={className(
                        category === "Automotive"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                    onClick={() => {
                        onClick("Automotive");
                    }}
                >
                    <FiSearch />
                    <span>Automotive</span>
                </div>
                <div
                    className={className(
                        category === "Property"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                    onClick={() => {
                        onClick("Property");
                    }}
                >
                    <FiSearch />
                    <span>Property</span>
                </div>
                <div
                    className={className(
                        category === "Electronic"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                    onClick={() => {
                        onClick("Electronic");
                    }}
                >
                    <FiSearch />
                    <span>Electronic</span>
                </div>
                <div
                    className={className(
                        category === "Sport"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                    onClick={() => {
                        onClick("Sport");
                    }}
                >
                    <FiSearch />
                    <span>Sport</span>
                </div>
                <div
                    className={className(
                        category === "Office"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
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
