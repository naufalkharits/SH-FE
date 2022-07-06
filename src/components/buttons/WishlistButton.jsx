import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
    addWishlistBuyer,
    deleteWishlistBuyer,
} from "../../redux/wishlistSlice";

const WishlistButton = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { isWishlist } = useSelector((state) => state.wishlist);
    const [isHovered, setIsHovered] = useState(false);

    const wishlist = () => {
        dispatch(addWishlistBuyer({ productId, navigate }));
    };
    const unwishlist = () => {
        dispatch(deleteWishlistBuyer({ productId, navigate }));
    };
    return (
        <div className="flex items-center justify-center rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
            {isWishlist ? (
                <div
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                    onClick={unwishlist}
                >
                    {isHovered ? (
                        <FaRegHeart className="h-5 w-5 cursor-pointer" />
                    ) : (
                        <FaHeart className="h-5 w-5 cursor-pointer text-red-500" />
                    )}
                </div>
            ) : (
                <div
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                    onClick={wishlist}
                >
                    {isHovered ? (
                        <FaHeart className="h-5 w-5 cursor-pointer text-red-600" />
                    ) : (
                        <FaRegHeart className="h-5 w-5 cursor-pointer" />
                    )}
                </div>
            )}
        </div>
    );
};

export default WishlistButton;
