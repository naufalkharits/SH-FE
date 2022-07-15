const NotificationDropdownSkeleton = () => {
    return (
        <div className="divide-y divide-neutral-200">
            <div className="flex justify-between gap-4 py-6 first:pt-0 last:pb-0">
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
            <div className="flex justify-between gap-4 py-6 first:pt-0 last:pb-0">
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
            <div className="flex justify-between gap-4 py-6 first:pt-0 last:pb-0">
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
        </div>
    )
}

export default NotificationDropdownSkeleton
