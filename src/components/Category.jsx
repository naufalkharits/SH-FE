import { useDispatch } from "react-redux";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { categoryQuery } from "../redux/productsSlice";
import { FiSearch } from "react-icons/fi";

const Category = () => {
    const dispatch = useDispatch();
    const onClick = (query) => dispatch(categoryQuery(query));

    return (
        <>
            <div className="mb-4 font-bold">Telusuri Kategori</div>
            <ScrollingCarousel>
                <div
                    className="flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white"
                    onClick={() => onClick("")}
                >
                    <FiSearch />
                    <span>Semua</span>
                </div>
                <div
                    className="ml-4 flex cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    onClick={() => {
                        onClick("Hobi");
                    }}
                >
                    <FiSearch />
                    <span>Hobi</span>
                </div>
                <div
                    className="ml-4 flex cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    onClick={() => {
                        onClick("Kendaraan");
                    }}
                >
                    <FiSearch />
                    <span>Kendaraan</span>
                </div>
                <div
                    className="ml-4 flex cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    onClick={() => {
                        onClick("Baju");
                    }}
                >
                    <FiSearch />
                    <span>Baju</span>
                </div>
                <div
                    className="ml-4 flex cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    onClick={() => {
                        onClick("Elektronik");
                    }}
                >
                    <FiSearch />
                    <span>Elektronik</span>
                </div>
                <div
                    className="ml-4 flex cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                    onClick={() => {
                        onClick("Kesehatan");
                    }}
                >
                    <FiSearch />
                    <span>Kesehatan</span>
                </div>
            </ScrollingCarousel>
        </>
    );
};

export default Category;
