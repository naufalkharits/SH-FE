import {AiOutlineClose} from "react-icons/ai"
import {IoEllipseOutline} from "react-icons/io5"

const ModalStatus = () => {

    return (
        <>
        <div className="bg-gray-bg opacity-80 fixed inset-0 ">
            <div className="flex h-screen justify-center items-center">
                <div className="sm:w-[360px] w-full sm:mx-auto space-y-4 h-fit bg-neutral-01 rounded-xl">
                    <div className="mx-8 space-y-4 my-6 ">
                        <div className="flex justify-end">
                            <AiOutlineClose />
                        </div>
                        <div className="text-sm font-medium">Perbarui status penjualan produkmu</div>
                        <div className="flex items-start">
                            <IoEllipseOutline/>
                            <div className="mx-4 items-start">
                                <div className="text-sm font-normal">Berhasil terjual</div>
                                <div className="text-sm font-normal text-neutral-03">Kamu telah sepakat menjual produk ini kepada pembeli</div>
                            </div>
                        </div>
                        <div className="flex items-start py-2">
                            <IoEllipseOutline/>
                            <div className="mx-4 items-start">
                                <div className="text-sm font-normal">Batalkan transaksi</div>
                                <div className="text-sm font-normal text-neutral-03">Kamu membatalkan transaksi produk ini dengan pembeli</div>
                            </div>
                        </div>
                        <button className="bg-primary-purple-04 w-full h-12 text-white rounded-xl flex justify-center items-center text-sm font-medium">
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
