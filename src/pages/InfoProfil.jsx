import {AiOutlineCamera} from "react-icons/ai"

const InfoProfil = () => {
    return (
        <div className="lg:w-1/3 p-5 space-y-4 lg:m-auto sm:w-full">
                <div className="mb-8 gap-6 space-y-6  items-center ">
                    <div className="space-y-2 items-center">
                        <label
                            className="flex h-24 w-24 bg-primary-purple-01 items-center justify-center rounded-xl border border-neutral-02 text-neutral-03"
                            htmlFor="file"
                        >
                            <input
                                className="hidden h-full w-full"
                                type="file"
                                id="file"
                                accept="image/png, image/jpeg"
                                multiple
                            />
                            <AiOutlineCamera/>
                        </label>
                    </div>

                    <div className="space-y-2">
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

                    </div>

                    <div className="">
                        {/* Kota */}
                        <label className="space-y-2">
                            <span className="block">
                                Kota*
                            </span>
                            <select className='w-full py-3 px-4 rounded-2xl bg-neutral-01 border border-neutral-02 focus:outline-none text-neutral-03'>
                                <option value="">Kota</option>
                                <option value="Aceh">Aceh</option>
                                <option value="Bogor">Bogor</option>
                                <option value="Bandung">Bandung</option>
                                <option value="Jakarta">Jakarta</option>
                                <option value="Semarang">Semarang</option>
                            </select>
                        </label>
                    </div>

                    <div className="">
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
                    </div>

                    <div className="space-y-2">
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
                    </div>
                    <button className="bg-primary-purple-04 w-full h-12 text-white rounded-xl p-2">Simpan</button>
                </div>
        </div>
    );
};

export default InfoProfil;
