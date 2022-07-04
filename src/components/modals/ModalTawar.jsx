import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTransactionTawar } from "../../redux/transactionSlice";

const ModalTawar = ({ setModalOn, setChoice }) => {
    const { productId } = useParams();
    const dispatch = useDispatch;
    const [formData, setFormData] = useState("");

    const [formValue, setFormValue] = useState({
        price: 0,
    });

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };
    
    
    const handleCancelClick = () => {
        setChoice(false);
        setModalOn(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        formData.set("price", formValue.price);
        dispatch(addTransactionTawar({ productId, formData}));
    };

    useEffect(() => {
        setFormData(new FormData());
    }, []);

    return (
        <>
            <div className="fixed inset-0 z-50 bg-gray-bg">
                <div className="flex h-screen items-center justify-center">
                    {/* modal */}
                    <div className="h-fit w-96 rounded-2xl bg-white p-8">
                    <form className="" 
                    onSubmit={onSubmit}
                    >
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex justify-end">
                                    <FiX
                                        className="h-7 w-7 cursor-pointer rounded-full p-1 shadow hover:bg-gray"
                                        onClick={handleCancelClick}
                                    />
                                </div>
                                <div className="font-medium">
                                    Masukkan Harga Tawarmu
                                </div>
                                <div className="text-sm text-neutral-03">
                                    Harga tawaranmu akan diketahui penjual, jika
                                    penjual cocok kamu akan segera dihubungi
                                    penjual.
                                </div>
                                <div className="flex items-center gap-4 rounded-2xl p-4 shadow-md ring-1 ring-black ring-opacity-5 sm:bg-gray sm:shadow-none sm:ring-0">
                                    <img
                                        className="h-12 w-12 rounded-xl"
                                        src="/img/jam-2.png"
                                        alt=""
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
                            <div>
                                <div className="mb-1 text-xs">Harga Tawar</div>
                                <input
                                    className="w-full rounded-2xl py-3.5 px-4 text-neutral-03 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    type="number"
                                    placeholder="Rp 0,00"
                                    onChange={onChange}
                                    // value={formValue.price}
                                />
                            </div>
                            <button type="submit" className="w-full rounded-2xl bg-primary-purple-04 py-3.5 px-6 font-medium text-white hover:bg-primary-purple-05">
                                Kirim
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalTawar;
