import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { CgSpinner } from "react-icons/cg"
import {
    addWishlistBuyer,
    deleteWishlistBuyer,
} from "../../redux/wishlistSlice"

const WishlistButton = () => {
    const navigate = useNavigate()
    const { productId } = useParams()
    const dispatch = useDispatch()
    const { isWishlist, loading } = useSelector((state) => state.wishlist)
    const [isHovered, setIsHovered] = useState(false)

    const wishlist = () => {
        dispatch(addWishlistBuyer({ productId, navigate }))
    }
    const unwishlist = () => {
        dispatch(deleteWishlistBuyer({ productId, navigate }))
    }

    return (
        <div className="flex items-center justify-center rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
            {loading === "pending" ? (
                <CgSpinner className="h-5 w-5 animate-spin dark:text-white" />
            ) : (
                <>
                    {isWishlist ? (
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => {
                                unwishlist()
                                setIsHovered(false)
                            }}
                        >
                            {isHovered ? (
                                <FaRegHeart className="h-5 w-5 cursor-pointer dark:text-white" />
                            ) : (
                                <FaHeart className="h-5 w-5 cursor-pointer text-red-500" />
                            )}
                        </div>
                    ) : (
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => {
                                wishlist()
                                setIsHovered(false)
                            }}
                        >
                            {isHovered ? (
                                <FaHeart className="h-5 w-5 cursor-pointer text-red-600" />
                            ) : (
                                <FaRegHeart className="h-5 w-5 cursor-pointer dark:text-white" />
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default WishlistButton
