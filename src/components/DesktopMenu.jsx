import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { FiLogIn } from "react-icons/fi"
import { me } from "../redux/authSlice"
import MobileMenu from "./MobileMenu"
import Search from "./Search"
import ListDropdown from "./dropdowns/ListDropdown"
import NotificationDropdown from "./dropdowns/NotificationDropdown"
import UserDropdown from "./dropdowns/UserDropdown"
import TitlePerPage from "./TitlePerPage"
import SecondHand from "../images/SecondHand.png"

const DesktopMenu = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { user, decodedAccess, profile, loading } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        decodedAccess && dispatch(me(decodedAccess?.id))
    }, [decodedAccess, dispatch])

    return (
        <>
            <div className="flex items-center gap-8">
                <Link className="hidden sm:block" to="/">
                    <img className="h-8" src={SecondHand} alt="" />
                </Link>
                <MobileMenu profile={profile} />
                {location.pathname === "/" ? (
                    <div className="hidden sm:block">
                        <Search />
                    </div>
                ) : (
                    <TitlePerPage />
                )}
            </div>
            {location.pathname === "/" && (
                <div className="w-full sm:hidden">
                    <Search />
                </div>
            )}
            <div className="hidden items-center gap-6 sm:flex">
                {user ? (
                    <>
                        <ListDropdown />
                        <NotificationDropdown />
                        <UserDropdown profile={profile} loading={loading} />
                    </>
                ) : (
                    <Link
                        to="/login"
                        className="flex items-center gap-2 rounded-xl bg-primary-purple-04 py-3.5 px-4 font-semibold  text-white hover:bg-primary-purple-05"
                    >
                        <FiLogIn className="h-5 w-5" />
                        <span>Masuk</span>
                    </Link>
                )}
            </div>
        </>
    )
}

export default DesktopMenu
