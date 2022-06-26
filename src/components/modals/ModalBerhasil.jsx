import { BsWhatsapp } from "react-icons/bs";
import { FiX } from "react-icons/fi";

const Modal = ({ setModalOn, setChoice }) => {
    const handleCancelClick = () => {
        setChoice(false);
        setModalOn(false);
    };

    return (
        <>
            <div className="fixed inset-0 z-50 bg-gray-bg">
                <div className="flex h-screen items-center justify-center">
                    {/* modal */}
                    <div className="h-fit w-96 rounded-2xl bg-white p-8">
                        <div className="mb-6 space-y-4">
                            <div className="flex justify-end">
                                <FiX
                                    className="h-7 w-7 cursor-pointer rounded-full p-1 shadow hover:bg-gray"
                                    onClick={handleCancelClick}
                                />
                            </div>
                            <h3 className="font-medium">
                                Yeay kamu berhasil mendapat harga yang sesuai
                            </h3>
                            <h3 className="text-sm text-neutral-03">
                                Segera hubungi pembeli melalui whatsapp untuk
                                transaksi selanjutnya
                            </h3>
                            <div className="space-y-4 rounded-2xl p-4 shadow ring-1 ring-black ring-opacity-5 sm:bg-gray sm:shadow-none sm:ring-0">
                                <div className="text-center text-sm font-medium">
                                    Product Match
                                </div>
                                <div className="flex items-center gap-4">
                                    <img
                                        className="h-12 w-12 rounded-xl"
                                        src="/img/user.png"
                                        alt=""
                                    />
                                    <div className="space-y-1">
                                        <div className="text-sm font-medium">
                                            Nama Pembeli
                                        </div>
                                        <div className="text-xs text-neutral-03">
                                            Kota
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <img
                                        className="h-12 w-12 rounded-xl"
                                        src="/img/jam-2.png"
                                        alt=""
                                    />
                                    <div className="space-y-1">
                                        <div className="text-sm">
                                            Jam Tangan Casio
                                        </div>
                                        <div className="text-sm line-through">
                                            Rp 250.000
                                        </div>
                                        <div className="text-sm">
                                            Ditawar Rp 200.000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="flex w-full items-center justify-between rounded-2xl bg-primary-purple-04 py-3.5 px-6 text-white hover:bg-primary-purple-05">
                            <BsWhatsapp className="opacity-0" />
                            <span className="font-medium">
                                Hubungi via Whatsapp
                            </span>
                            <BsWhatsapp />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
