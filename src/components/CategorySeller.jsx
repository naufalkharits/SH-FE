import { Link } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FiBox, FiDollarSign, FiHeart } from "react-icons/fi";

const CategorySeller = () => {
    return (
        <div className="mb-4 sm:hidden">
            <ScrollingCarousel leftIcon={"<"} rightIcon={">"}>
                <Link
                    to="/manage-product"
                    className="flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white"
                >
                    <FiBox />
                    <span>Semua Produk</span>
                </Link>
                <Link
                    to="wishlisted"
                    className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                >
                    <FiHeart />
                    <span>Diminati</span>
                </Link>
                <Link
                    to="sold"
                    className="ml-4 flex items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6"
                >
                    <FiDollarSign />
                    <span>Terjual</span>
                </Link>
            </ScrollingCarousel>
        </div>
    );
};

export default CategorySeller;
