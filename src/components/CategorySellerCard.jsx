import { Link, useLocation } from "react-router-dom";
import { FiBox, FiDollarSign, FiHeart } from "react-icons/fi";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const CategorySellerCard = () => {
    const location = useLocation();

    return (
        <div className="mt-4 hidden h-fit rounded-2xl p-6 shadow-md sm:block">
            <div className="mb-6 font-medium">Kategori</div>
            <Link
                to="/manage-product"
                className={className(
                    location.pathname === "/manage-product"
                        ? "text-primary-purple-04"
                        : "",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05"
                )}
            >
                <FiBox />
                <span>Semua Produk</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02"></div>
            <Link
                to="wishlisted"
                className={className(
                    location.pathname === "/manage-product/wishlisted"
                        ? "text-primary-purple-04"
                        : "",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05"
                )}
            >
                <FiHeart />
                <span>Diminati</span>
            </Link>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-02 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-02"></div>
            <Link
                to="sold"
                className={className(
                    location.pathname === "/manage-product/sold"
                        ? "text-primary-purple-04"
                        : "",
                    "flex cursor-pointer items-center gap-2 hover:text-primary-purple-05"
                )}
            >
                <FiDollarSign />
                <span>Terjual</span>
            </Link>
        </div>
    );
};

export default CategorySellerCard;
