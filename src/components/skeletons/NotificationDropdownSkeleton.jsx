import React from "react"

const NotificationDropdownSkeleton = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-4">
                <div className="h-14 w-14 animate-pulse rounded-xl bg-gray"></div>
                <div className="space-y-2">
                    <div className="h-3 w-20 animate-pulse bg-gray"></div>
                    <div className="h-3 w-16 animate-pulse bg-gray"></div>
                    <div className="h-3 w-12 animate-pulse bg-gray"></div>
                </div>
            </div>
            <div className="h-2 w-12 animate-pulse bg-gray"></div>
        </div>
    )
}

export default NotificationDropdownSkeleton
