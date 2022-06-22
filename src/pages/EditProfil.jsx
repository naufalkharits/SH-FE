import { AiOutlineCamera } from "react-icons/ai"
import { FiArrowLeft, FiChevronDown } from "react-icons/fi";

const EditProfil = () => {
    return (
        <div className="flex justify-between w-full md:w-full lg:w-[1024px] mx-auto mt-4 sm:mt-10">
            <div className="hidden sm:block lg:mr-20 sm:ml-10 sm:mr-10">
                <FiArrowLeft className="text-3xl" />
            </div>
            <div className="space-y-4 px-5 w-full">
                <div className="mb-8 gap-6 space-y-6  items-center ">
                    <div className="space-y-2 flex justify-center items-center">
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
                            <AiOutlineCamera className="text-primary-purple-04 text-3xl" />
                        </label>
                    </div>

                    <div className="space-y-2">
                        {/* Nama */}
                        <label className="space-y-2">
                            <span className="block ">
                                Nama*
                            </span>
                            <input
                                className="w-full py-2 px-4 rounded-2xl border border-neutral-02 focus:outline-none text-neutral-03"
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
                            <label className="relative block">
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                                    <FiChevronDown />
                                </span>
                                <select className='w-full py-2 px-4 appearance-none rounded-2xl bg-neutral-01 border border-neutral-02 focus:outline-none text-neutral-03'>
                                    <option value="">Pilih Kota</option>
                                    <option value="Aceh">Aceh</option>
                                    <option value="Bogor">Bogor</option>
                                    <option value="Bandung">Bandung</option>
                                    <option value="Jakarta">Jakarta</option>
                                    <option value="Semarang">Semarang</option>
                                </select>
                            </label>
                        </label>
                    </div>

                    <div className="">
                        {/* Alamat */}
                        <label className="space-y-2">
                            <span className="block">
                                Alamat*
                            </span>
                            <textarea
                                id=""
                                name=""
                                rows="2"
                                className="w-full h-20 py-2 px-4 rounded-2xl bg-neutral-01 border border-neutral-02 focus:outline-none text-neutral-03 resize-none"
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
                                className="w-full rounded-2xl border border-neutral-02 py-2 px-4 focus:outline-none text-neutral-03"
                                type="number"
                                placeholder="contoh: +628123456789"
                            />
                        </label>
                    </div>
                    <button className="bg-primary-purple-04 w-full h-12 text-white rounded-xl p-2">Simpan</button>
                </div>
            </div>
            <div className="hidden sm:block h-[30px] w-[30px] lg:ml-20 sm:ml-10 sm:mr-10"></div>
        </div>
    );
};

export default EditProfil;
