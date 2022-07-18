import { Outlet } from "react-router-dom"
import MobileUserMenu from "../components/MobileUserMenu"
import DesktopUserMenu from "../components/DesktopUserMenu"
import ProfileCard from "../components/ProfileCard"

const UserProfile = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="mb-4 sm:mb-2 sm:space-y-6">
                <h1 className="hidden text-xl font-bold sm:block dark:text-white">Akun Saya</h1>
                <ProfileCard />
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                    <DesktopUserMenu />
                    <MobileUserMenu />
                </div>
                <div className="flex flex-wrap sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default UserProfile
