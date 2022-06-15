import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FiSearch } from "react-icons/fi";

const Category = () => {
    return (
        <>
            <div className="mb-4 font-bold">Telusuri Kategori</div>
            <ScrollingCarousel leftIcon={"<"} rightIcon={">"}>
                <div className="flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white">
                    <FiSearch />
                    <span>Semua</span>
                </div>
                <div className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6">
                    <FiSearch />
                    <span>Hobi</span>
                </div>
                <div className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6">
                    <FiSearch />
                    <span>Kendaraan</span>
                </div>
                <div className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6">
                    <FiSearch />
                    <span>Baju</span>
                </div>
                <div className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6">
                    <FiSearch />
                    <span>Elektronik</span>
                </div>
                <div className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6">
                    <FiSearch />
                    <span>Kesehatan</span>
                </div>
            </ScrollingCarousel>
        </>
    );
};

export default Category;
