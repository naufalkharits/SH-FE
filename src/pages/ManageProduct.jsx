import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import CategorySellerCard from "../components/CategorySellerCard"
import CategorySeller from "../components/CategorySeller"
import ProfileCard from "../components/ProfileCard"
import MyProduct404 from "../unfound/MyProduct404"

const className = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

const ManageProduct = () => {
    const { filteredProduct } = useSelector((state) => state.products)

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4 sm:mb-2 sm:space-y-6">
                <h1 className="hidden text-xl font-bold sm:block">
                    Daftar Jual Saya
                </h1>
                <ProfileCard />
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                    <CategorySellerCard />
                    <CategorySeller />
                </div>
                <div
                    className={className(
                        filteredProduct?.length === 0
                            ? "flex-col"
                            : "flex-wrap",
                        "flex sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6"
                    )}
                >
                    <Outlet />
                    {filteredProduct?.length === 0 && <MyProduct404 />}
                </div>
            </div>
        </div>
    )
}

export default ManageProduct
