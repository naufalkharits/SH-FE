import { Outlet } from "react-router-dom"
import CategorySellerCard from "../components/CategorySellerCard"
import CategorySeller from "../components/CategorySeller"
import ProfileCard from "../components/ProfileCard"

const ManageProduct = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="mb-4 sm:mb-2 sm:space-y-6">
                <h1 className="hidden text-xl font-bold sm:block">Toko Saya</h1>
                <ProfileCard />
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                    <CategorySellerCard />
                    <CategorySeller />
                </div>
                <div className="flex flex-wrap sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ManageProduct
