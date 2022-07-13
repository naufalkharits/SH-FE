import React from 'react'
import { useNavigate } from 'react-router-dom';
import IDR from "../utils/IDR";

const SellerWishlistsCard = ({ id, name, price, category, pictures, user, userimg }) => {
    const navigate = useNavigate();

    return (
        <div
            className="cursor-pointer space-y-2 rounded-md p-2 shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10"
            onClick={() => {
                navigate(`/product/${id}`);
            }}
        >
            <img
                className="h-48 w-full rounded object-cover object-center"
                src={pictures}
                alt=""
            />
            <div>
                <div className="truncate font-medium">{name}</div>
                <div className="text-sm text-neutral-03">{category}</div>
            </div>
            <div>
                <IDR price={price} />
            </div>
            <div className="w-full p-2 rounded-xl bg-primary-purple-04">
                <p className='text-sm text-white'>Diminati Oleh : </p>
                <div className="flex justify-between items-center rounded-2xl bg-gray p-2 hover:text-primary-purple-04">
                    <p className='text-sm'>{user}</p>
                    <img className="w-8 h-8 rounded-xl bg-white" src={userimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SellerWishlistsCard