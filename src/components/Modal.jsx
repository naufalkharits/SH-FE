import {BsWhatsapp} from "react-icons/bs"

const Modal = () => {

    return (
        <>
            <div className="w-3/12 sm:mx-auto space-y-4 h-fit bg-neutral-01 rounded-xl">
                
                <div className="mx-8 space-y-4 my-6">
                    <div className="">

                    </div>
                    <h3>Yeay kamu berhasil mendapat harga yang sesuai</h3>
                    <h3 className="text-neutral-03">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</h3>
                    <div className="w-full bg-neutral-02 h-fit rounded-2xl">
                        <div className="m-4">Product Match</div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-4 rounded-2xl p-4">
                                <img alt="" src="/img/user.png" className="w-12 h-12 rounded-xl" />
                                <div className="space-y-1">
                                    <div>Nama Pembeli</div>
                                    <div className="text-xs text-neutral-03">Kota</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-4 p-4">
                                <img alt="" src="/img/jam-2.png" className="w-12 h-12 rounded-xl" />
                                <div className="space-y-1">
                                    <div>Jam Tangan Casio</div>
                                    <div className="line-through">Rp 250.000</div>
                                    <div>Ditawar Rp 200.000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="bg-primary-purple-04 w-full h-12 text-white rounded-xl flex justify-end items-center space-x-20 px-5">
                        <div></div>
                        <div className="">Hubungi via Whatsapp</div>
                        <div><BsWhatsapp /></div>
                    </button>
                </div>
            </div>
                
        </>
    );
};

export default Modal;
