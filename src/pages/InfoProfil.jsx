const InfoProfil = () => {
    return (
        <div className="lg:w-1/3 p-5 space-y-4 lg:m-auto sm:w-full">
            <form id="">
                <div className="mb-8 gap-6 space-y-6 justify-center items-center ">
                    <label className="block">
                        <input
                            className="w-full block cursor-pointer file:cursor-pointer file:rounded-full file:border-none file:primary-purple-04 file:py-1 file:px-3 file:text-white dark:text-neutral-300 dark:file:text-neutral-300"
                            type="file"
                            accept=".svg, .png, .jpeg, .jpg, .webp"
                        />
                    </label>
                    {/* Nama */}
                    <label className="space-y-2">
                        <span className="block ">
                            Nama*
                        </span>
                        <input
                            className="w-full py-3 px-4 rounded-2xl border border-neutral-02 focus:outline-none text-neutral-03"
                            type="text"
                            placeholder="Nama"
                        />
                    </label>
                    {/* Kota */}
                    <label className="space-y-2">
                        <span className="block">
                            Kota*
                        </span>
                        {/* <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none text-neutral-03"
                            type="number"
                            placeholder="Pilih Kota"
                        /> */}
                        <select className='w-full py-3 px-4 rounded-2xl bg-neutral-01 border border-neutral-02 focus:outline-none text-neutral-03'>
                            <option value="">Kota</option>
                            <option value="Aceh">Aceh</option>
                            <option value="Bogor">Bogor</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Semarang">Semarang</option>
                        </select>
                    </label>
                    {/* Alamat */}
                    <label className="space-y-2">
                        <span className="block">
                            Alamat*
                        </span>
                        <input
                            className="w-full h-20 py-3 px-4 rounded-2xl bg-neutral-01 border border-neutral-02 focus:outline-none text-neutral-03"
                            type="text"
                            placeholder="Contoh: Jalan Ikan Hiu 33"
                        />
                    </label>
                    {/* No Handphone */}
                    <label className="space-y-2">
                        <span className="block text-neutral-900">
                            No Handphone*
                        </span>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none text-neutral-03"
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

export default InfoProfil;
