import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai"

const ModalStatus = ({ setModalOn, setChoice }) => {
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    const [buttonKirim, setButtonKirim] = useState(false)

    return (
        <>
        <div className="bg-gray-bg opacity-80 fixed inset-0 ">
            <div className="flex h-screen justify-center items-center">
                <div className="sm:w-[360px] w-full sm:mx-auto space-y-4 h-fit bg-neutral-01 rounded-xl">
                    <div className="mx-8 space-y-4 my-6 ">
                        <div className="flex justify-end">
                            <AiOutlineClose onClick={handleCancelClick}/>
                        </div>
                        <div className="text-sm font-medium">Perbarui status penjualan produkmu</div>
                        <div className="items-start gap-4 space-y-6">
                            <div className="flex items-start mb-4">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={() => setButtonKirim(true)}/>
                                <div className="mx-4">
                                    <div className="text-sm font-normal">Berhasil terjual</div>
                                    <div className="text-sm font-normal text-neutral-03">Kamu telah sepakat menjual produk ini kepada pembeli</div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <input  id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={() => setButtonKirim(true)}/>
                                <div className="mx-4">
                                    <div className="text-sm font-normal">Batalkan transaksi</div>
                                    <div className="text-sm font-normal text-neutral-03">Kamu membatalkan transaksi produk ini dengan pembeli</div>
                                </div>
                            </div>
                        </div>
                        <button className={buttonKirim === true ? "bg-primary-purple-04 w-full h-12 text-white rounded-xl flex justify-center items-center text-sm font-medium" : "bg-neutral-03 w-full h-12 text-white rounded-xl flex justify-center items-center text-sm font-medium"}>
                            Kirim
                        </button>
                    </div>
                </div>
            </div> 
        </div>            
        </>
    );
};

export default ModalStatus;
