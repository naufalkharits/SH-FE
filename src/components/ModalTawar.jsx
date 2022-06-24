import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ setModalOn, setChoice }) => {
    const handleCancelClick = () => {
        setChoice(false);
        setModalOn(false);
    };

    return (
        <>
            <div className="fixed inset-0 bg-gray-bg ">
                <div className="flex h-screen items-center justify-center">
                    <div className="mx-auto h-fit w-[360px] space-y-4 rounded-xl bg-neutral-01">
                        <div className="mx-8 my-6 space-y-4">
                            <div className="flex justify-end">
                                <AiOutlineClose onClick={handleCancelClick} />
                            </div>
                            <h3 className="text-sm font-medium">
                                Masukkan Harga Tawarmu
                            </h3>
                            <h3 className="text-sm text-neutral-03">
                                Harga tawaranmu akan diketahui penjual, jika
                                penjual cocok kamu akan segera dihubungi
                                penjual.
                            </h3>
                            <div className="h-fit w-full rounded-2xl bg-gray shadow-high">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4 p-4">
                                        <img
                                            alt=""
                                            src="/img/jam-2.png"
                                            className="h-12 w-12 rounded-xl"
                                        />
                                        <div className="space-y-1">
                                            <div className="text-sm font-medium">
                                                Jam Tangan Casio
                                            </div>
                                            <div className="text-sm">
                                                Rp 250.000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="pb-1 text-xs font-normal ">
                                    Harga Tawar
                                </div>
                                <input
                                    className="w-full rounded-2xl border border-neutral-02 py-3 px-4 text-sm text-neutral-03 shadow-high focus:outline-none"
                                    type="text"
                                    placeholder="Rp 0,00"
                                />
                            </div>

                            <button className="flex h-12 w-full items-center justify-center space-x-20 rounded-xl bg-primary-purple-04 px-5 text-sm text-white">
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
