import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"

const Modal = () => {

    return (
        <>
        <div className="bg-gray-bg opacity-80 fixed inset-0 ">
            <div className="flex h-screen justify-center items-center">
            <div className="sm:w-[360px] w-full sm:mx-auto space-y-4 h-fit bg-neutral-01 rounded-xl ">
                <div className="mx-8 space-y-4 my-6">
                    <div className="flex justify-end">
                        <AiOutlineClose />
                    </div>
                    <h3 className="font-medium text-sm">Yeay kamu berhasil mendapat harga yang sesuai</h3>
                    <h3 className="text-neutral-03 text-sm">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</h3>
                    <div className="w-full bg-gray h-fit rounded-2xl pt-2">
                        <div className="m-2 font-medium text-sm flex justify-center">Product Match</div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-4 rounded-2xl p-4">
                                <img alt="" src="/img/user.png" className="w-12 h-12 rounded-xl" />
                                <div className="space-y-1">
                                    <div className="font-medium text-sm">Nama Pembeli</div>
                                    <div className="text-xs text-neutral-03">Kota</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-4 p-4">
                                <img alt="" src="/img/jam-2.png" className="w-12 h-12 rounded-xl" />
                                <div className="space-y-1">
                                    <div className="text-sm">Jam Tangan Casio</div>
                                    <div className="text-sm line-through">Rp 250.000</div>
                                    <div className="text-sm">Ditawar Rp 200.000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="bg-primary-purple-04 sm:w-[296px] w-full h-12 text-white rounded-xl flex justify-end items-center space-x-20 pr-5">
                        <div></div>
                        <div className="text-sm">Hubungi via Whatsapp</div>
                        <div><BsWhatsapp /></div>
                    </button>
                </div>
            </div>
                                    </div>
        </div>
                
        </>
    );
};

export default Modal;
