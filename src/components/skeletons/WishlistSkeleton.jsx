import React from 'react'
import { useLocation } from 'react-router-dom';

const WishlistSkeleton = () => {
    const location = useLocation()
    return (
        <>
            <div className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4">
                <div className="space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                    <div className="h-48 w-full animate-pulse rounded bg-gray" />
                    <div className="h-5 w-24 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-4 w-12 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray"></div>
                    <div className={
                        location.pathname === "/manage-product/wishlisted" ?
                        "h-5 w-10 animate-pulse rounded-md bg-gray" : "hidden"
                    }></div>
                </div>
            </div>
            <div className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4">
                <div className="space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                    <div className="h-48 w-full animate-pulse rounded bg-gray" />
                    <div className="h-5 w-24 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-4 w-12 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray"></div>
                    <div className={
                        location.pathname === "/manage-product/wishlisted" ?
                        "h-5 w-10 animate-pulse rounded-md bg-gray" : "hidden"
                    }></div>
                </div>
            </div>
            <div className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4">
                <div className="space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                    <div className="h-48 w-full animate-pulse rounded bg-gray" />
                    <div className="h-5 w-24 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-4 w-12 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray"></div>
                    <div className={
                        location.pathname === "/manage-product/wishlisted" ?
                        "h-5 w-10 animate-pulse rounded-md bg-gray" : "hidden"
                    }></div>
                </div>
            </div>
            <div className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4">
                <div className="space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                    <div className="h-48 w-full animate-pulse rounded bg-gray" />
                    <div className="h-5 w-24 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-4 w-12 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray"></div>
                    <div className={
                        location.pathname === "/manage-product/wishlisted" ?
                        "h-5 w-10 animate-pulse rounded-md bg-gray" : "hidden"
                    }></div>
                </div>
            </div>
        </>
    )
}

export default WishlistSkeleton;