const InfoProduct = () => {
    return (
        <div className="justify-center items-center bg-white w-2/6 gap-6 h-fit">
            <form id="add-form" className="justify-center items-center bg-white">
                <div className="mb-8 gap-6 space-y-6 justify-center items-center ">
                    <label className="block">
                        <input
                            className="w-full block cursor-pointer file:cursor-pointer file:rounded-full file:border-none file:primary-purple-04 file:py-1 file:px-3 file:text-white dark:text-neutral-300 dark:file:text-neutral-300"
                            type="file"
                            accept=".svg, .png, .jpeg, .jpg, .webp"
                        />
                    </label>
                    {/* Nama */}
                    <label className="block">
                        <span className="block text-neutral-900">
                            Nama*
                        </span>
                        <input
                            className="w-full rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700  dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="text"
                            placeholder="Nama"
                        />
                    </label>
                    {/* Kota */}
                    <label className="block">
                        <span className="block text-neutral-900">
                            Kota*
                        </span>
                        <input
                            className="w-full rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700  dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="number"
                            placeholder="Pilih Kota"
                        />
                    </label>
                    {/* Alamat */}
                    <label className="block">
                        <span className="block text-neutral-900">
                            Alamat*
                        </span>
                        <input
                            className="w-full h-20 rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700  dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="text"
                            placeholder="Contoh: Jalan Ikan Hiu 33"
                        />
                    </label>
                    {/* No Handphone */}
                    <label className="block">
                        <span className="block text-neutral-900">
                            No Handphone*
                        </span>
                        <input
                            className="w-full rounded-xl border-neutral-200 bg-neutral-100 py-1 px-3 focus:border focus:border-neutral-300 focus:ring-0 dark:border-neutral-700  dark:text-neutral-300 dark:focus:border-neutral-600"
                            type="number"
                            placeholder="contoh: +628123456789"
                        />
                    </label>
                    <button className="bg-primary-purple-04 w-full text-white rounded-xl p-2">Simpan</button>
                </div>
            </form>
        </div>
    );
};

export default InfoProduct;
