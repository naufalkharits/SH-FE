import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { FiEdit2 } from "react-icons/fi"
import AltFoto from "../images/AltFoto.png"

const SellerCard = ({ loading, id, name, picture, city }) => {
    const location = useLocation()
    const { profile } = useSelector((state) => state.auth)

    return (
        <div className="flex items-center justify-between rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-5">
            <div className="flex items-center gap-4">
                {loading === "pending" ? (
                    <div className="h-12 w-12 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                ) : (
                    <img
                        src={picture || AltFoto}
                        alt=""
                        className="h-12 w-12 rounded-xl"
                    />
                )}

                <div className="space-y-1">
                    <div
                        className={
                            loading === "pending"
                                ? "h-3 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"
                                : "dark:text-white"
                        }
                    >
                        {name}
                    </div>
                    <div
                        className={
                            loading === "pending"
                                ? "h-2 w-12 animate-pulse rounded-md bg-gray dark:bg-zinc-800"
                                : "text-xs text-neutral-03 dark:text-zinc-400"
                        }
                    >
                        {city}
                    </div>
                </div>
            </div>
            {loading === "pending" ? (
                <></>
            ) : (
                <>
                    {id === profile?.id && (
                        <Link
                            to="/user/profile"
                            state={{ from: location }}
                            className="rounded-lg border border-primary-purple-04 bg-white p-1 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white"
                        >
                            <FiEdit2 />
                        </Link>
                    )}
                </>
            )}
        </div>
    )
}

export default SellerCard
