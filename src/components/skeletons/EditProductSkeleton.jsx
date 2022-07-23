const EditProductSkeleton = () => {
    return (
        <>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Nama Produk
                </div>
                <div className="h-14 w-full animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Harga Produk
                </div>
                <div className="h-14 w-full animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Kategori
                </div>
                <div className="h-14 w-full animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Deskripsi
                </div>
                <div className="h-[5.5rem] w-full animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Foto Produk
                </div>
                <div className="flex flex-wrap">
                    <div className="mr-4 mb-4 h-24 w-24 animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
                    <div className="mr-4 mb-4 h-24 w-24 animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
                    <div className="mr-4 mb-4 h-24 w-24 animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
                    <div className="mb-4 h-24 w-24 animate-pulse rounded-2xl border border-neutral-02 bg-smoke dark:border-zinc-600 dark:bg-zinc-800"></div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="sm:w-74 h-12 w-[48%] animate-pulse rounded-2xl border border-neutral-02 bg-smoke py-3 dark:border-zinc-600 dark:bg-zinc-800"></div>
                <div className="sm:w-74 h-12 w-[48%] animate-pulse rounded-2xl bg-smoke py-3 dark:bg-zinc-800"></div>
            </div>
        </>
    )
}

export default EditProductSkeleton
