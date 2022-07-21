import { useLocation, useNavigate } from "react-router-dom"
import { ScrollingCarousel } from "@trendyol-js/react-carousel"
import { FiBox, FiDollarSign, FiHeart } from "react-icons/fi"
import { classNameJoin } from "../utils/classNameJoin"

const CategorySeller = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const navigation = (link) => {
        navigate(link)
    }

    return (
        <div className="sm:hidden">
            <ScrollingCarousel leftIcon={false} rightIcon={false}>
                <div
                    onClick={() => navigation("/manage-product")}
                    className={classNameJoin(
                        location.pathname === "/manage-product"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                >
                    <FiBox />
                    <span>Semua Produk</span>
                </div>
                <div
                    onClick={() => navigation("wishlisted")}
                    className={classNameJoin(
                        location.pathname === "/manage-product/wishlisted"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                >
                    <FiHeart />
                    <span>Diminati</span>
                </div>
                <div
                    onClick={() => navigation("sold")}
                    className={classNameJoin(
                        location.pathname === "/manage-product/sold"
                            ? "bg-primary-purple-04 text-white"
                            : "bg-primary-purple-01 hover:text-white",
                        "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                    )}
                >
                    <FiDollarSign />
                    <span>Terjual</span>
                </div>
            </ScrollingCarousel>
        </div>
    )
}

export default CategorySeller
