import {AiOutlineClose} from "react-icons/ai"

const Modal = () => {
    return (
        <>
        <div className="bg-gray-bg opacity-80 fixed inset-0 ">
            <div className="flex h-screen justify-center items-center">
                    <div className="sm:w-[360px] w-full sm:mx-auto space-y-4 h-fit bg-neutral-01 rounded-xl">
                        
                        <div className="mx-8 space-y-4 my-6">
                            <div className="flex justify-end">
                                <AiOutlineClose />
                            </div>
                            <h3 className="font-medium text-sm">Masukkan Harga Tawarmu</h3>
                            <h3 className="text-neutral-03 text-sm">Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</h3>
                            <div className="w-full bg-gray h-fit rounded-2xl shadow-high">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4 p-4">
                                        <img alt="" src="/img/jam-2.png" className="w-12 h-12 rounded-xl" />
                                        <div className="space-y-1">
                                            <div className="text-sm font-medium">Jam Tangan Casio</div>
                                            <div className="text-sm">Rp 250.000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="text-xs font-normal pb-1 ">Harga Tawar</div>
                                <input
                                        className="w-full py-3 px-4 rounded-2xl border border-neutral-02 focus:outline-none text-neutral-03 shadow-high text-sm"
                                        type="text"
                                        placeholder="Rp 0,00"
                                />
                            </div>
                            
                            <button className="bg-primary-purple-04 w-full h-12 text-white rounded-xl flex justify-center items-center space-x-20 px-5 text-sm">
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
