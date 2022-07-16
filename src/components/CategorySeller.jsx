import { Link, useLocation } from "react-router-dom"
import { ScrollingCarousel } from "@trendyol-js/react-carousel"
import { FiBox, FiDollarSign, FiHeart } from "react-icons/fi"
import { classNameJoin } from "../utils/classNameJoin"

const CategorySeller = () => {
    const location = useLocation()

    return (
        <div className="mb-4 sm:hidden">
            <ScrollingCarousel leftIcon={false} rightIcon={false}>
                <Link
                    to="/manage-product"
                    className={classNameJoin(
                        location.pathname === "/manage-product"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                >
                    <FiBox />
                    <span>Semua Produk</span>
                </Link>
                <Link
                    to="wishlisted"
                    className={classNameJoin(
                        location.pathname === "/manage-product/wishlisted"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                >
                    <FiHeart />
                    <span>Diminati</span>
                </Link>
                <Link
                    to="sold"
                    className={classNameJoin(
                        location.pathname === "/manage-product/sold"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                >
                    <FiDollarSign />
                    <span>Terjual</span>
                </Link>
            </ScrollingCarousel>
        </div>
    )
}

export default CategorySeller
