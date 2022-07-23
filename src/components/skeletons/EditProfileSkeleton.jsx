const EditProfileSkeleton = () => {
    return (
        <>
            <div className="flex items-center justify-center space-y-2">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Nama
                </div>
                <div className="h-11 w-full animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Kota
                </div>
                <div className="h-11 w-full animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Alamat
                </div>
                <div className="h-20 w-full animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    No Handphone
                </div>
                <div className="h-11 w-full animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="h-14 w-full rounded-2xl bg-smoke px-6 dark:bg-zinc-800"></div>
        </>
    )
}

export default EditProfileSkeleton
