import React from 'react'

const WishlistProfileSkeleton = () => {
    return (
        <>
            <div className="w-full sm:w-1/2 my-4 sm:mr-6 lg:w-1/3 2xl:w-1/4">
                <div className="space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                    <div className="h-48 w-full animate-pulse rounded bg-gray" />
                    <div className="h-4 w-24 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-4 w-16 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-10 w-full animate-pulse rounded-2xl bg-gray"></div>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/2 my-4 lg:mr-6 lg:w-1/3 2xl:w-1/4">
                <div className="space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                    <div className="h-48 w-full animate-pulse rounded bg-gray" />
                    <div className="h-4 w-24 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-4 w-16 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-10 w-full animate-pulse rounded-2xl bg-gray"></div>
                </div>
            </div>
            <div className="hidden my-4 lg:block lg:w-1/3 2xl:mr-6 2xl:w-1/4">
                <div className="space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                    <div className="h-48 w-full animate-pulse rounded bg-gray" />
                    <div className="h-4 w-24 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-4 w-16 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-10 w-full animate-pulse rounded-2xl bg-gray"></div>
                </div>
            </div>
            <div className="hidden my-4 lg:w-1/3 2xl:block 2xl:w-1/4">
                <div className="space-y-2 rounded-md p-2 shadow-md ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                    <div className="h-48 w-full animate-pulse rounded bg-gray" />
                    <div className="h-4 w-24 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-4 w-16 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-6 w-20 animate-pulse rounded-md bg-gray"></div>
                    <div className="h-10 w-full animate-pulse rounded-2xl bg-gray"></div>
                </div>
            </div>
        </>
    )
}

export default WishlistProfileSkeleton;