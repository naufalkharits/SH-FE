import { useLocation } from "react-router-dom"

const TransactionSkeleton = () => {
    const location = useLocation()
    return (
        <>
            <div className="w-full space-y-7">
                <div className="flex gap-4 rounded-xl">
                    <div className="h-14 w-16 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                    <div className="w-full space-y-1">
                        <div className="flex justify-between">
                            <div className="h-4 w-28 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                            <div className="h-4 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        </div>
                        <div className="h-6 w-24 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className="h-6 w-20 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className="h-6 w-36 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className={location.pathname === "/user/infopenawar" ? "flex" : "hidden"}>
                            <div className="h-8 w-8 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                            <div className="space-y-1 ml-2">
                                <div className="h-4 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                                <div className="h-4 w-12 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={location.pathname === "/user/infopenawar" ? "flex justify-evenly sm:justify-end" : "hidden"}>
                    <div className="h-10 w-[45%] md:w-[35%] lg:w-[30%] mr-4 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                    <div className="h-10 w-[45%] md:w-[35%] lg:w-[30%] animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                </div>
                <div className="h-px bg-neutral-200 dark:bg-zinc-800"></div>
            </div>
            <div className="w-full space-y-7">
                <div className="flex gap-4 rounded-xl">
                    <div className="h-14 w-16 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                    <div className="w-full space-y-1">
                        <div className="flex justify-between">
                            <div className="h-4 w-28 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                            <div className="h-4 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        </div>
                        <div className="h-6 w-24 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className="h-6 w-20 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className="h-6 w-36 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className={location.pathname === "/user/infopenawar" ? "flex" : "hidden"}>
                            <div className="h-8 w-8 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                            <div className="space-y-1 ml-2">
                                <div className="h-4 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                                <div className="h-4 w-12 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={location.pathname === "/user/infopenawar" ? "flex justify-evenly sm:justify-end" : "hidden"}>
                    <div className="h-10 w-[45%] md:w-[35%] lg:w-[30%] mr-4 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                    <div className="h-10 w-[45%] md:w-[35%] lg:w-[30%] animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                </div>
                <div className="h-px bg-neutral-200 dark:bg-zinc-800"></div>
            </div>
            <div className="w-full space-y-7">
                <div className="flex gap-4 rounded-xl">
                    <div className="h-14 w-16 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                    <div className="w-full space-y-1">
                        <div className="flex justify-between">
                            <div className="h-4 w-28 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                            <div className="h-4 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        </div>
                        <div className="h-6 w-24 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className="h-6 w-20 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className="h-6 w-36 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className={location.pathname === "/user/infopenawar" ? "flex" : "hidden"}>
                            <div className="h-8 w-8 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                            <div className="space-y-1 ml-2">
                                <div className="h-4 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                                <div className="h-4 w-12 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={location.pathname === "/user/infopenawar" ? "flex justify-evenly sm:justify-end" : "hidden"}>
                    <div className="h-10 w-[45%] md:w-[35%] lg:w-[30%] mr-4 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                    <div className="h-10 w-[45%] md:w-[35%] lg:w-[30%] animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                </div>
                <div className="h-px bg-neutral-200 dark:bg-zinc-800"></div>
            </div>
            <div className="w-full space-y-7">
                <div className="flex gap-4 rounded-xl">
                    <div className="h-14 w-16 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                    <div className="w-full space-y-1">
                        <div className="flex justify-between">
                            <div className="h-4 w-28 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                            <div className="h-4 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        </div>
                        <div className="h-6 w-24 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className="h-6 w-20 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className="h-6 w-36 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                        <div className={location.pathname === "/user/infopenawar" ? "flex" : "hidden"}>
                            <div className="h-8 w-8 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                            <div className="space-y-1 ml-2">
                                <div className="h-4 w-16 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                                <div className="h-4 w-12 animate-pulse rounded-md bg-gray dark:bg-zinc-800"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={location.pathname === "/user/infopenawar" ? "flex justify-evenly sm:justify-end" : "hidden"}>
                    <div className="h-10 w-[45%] md:w-[35%] lg:w-[30%] mr-4 animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                    <div className="h-10 w-[45%] md:w-[35%] lg:w-[30%] animate-pulse rounded-xl bg-gray dark:bg-zinc-800"></div>
                </div>
                <div className="h-px bg-neutral-200 dark:bg-zinc-800"></div>
            </div>
        </>
    )
}

export default TransactionSkeleton
