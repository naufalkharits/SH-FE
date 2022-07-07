import { React, useEffect } from "react";
import orang from "../images/orang.png";
import { FiArrowLeft } from "react-icons/fi";
import ModalBerhasil from "../components/modals/ModalBerhasil";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionCard from "../components/TransactionCard";
import { useNavigate } from "react-router-dom";

const InfoPenawar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false);

    const clicked = () => {
        setModalOn(true);
    };

    return (
        <div className="mx-auto mt-4 flex w-full justify-between sm:mt-10 md:w-full lg:w-[1024px]">
            <div className="hidden sm:ml-10 sm:mr-10 sm:block lg:mr-20">
                <FiArrowLeft
                    className="cursor-pointer text-3xl"
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </div>
            <div className="w-full space-y-7 px-4">
                <div className="shadow-low flex items-center gap-6 rounded-2xl border border-neutral-200 p-4">
                    <img src={orang} alt="" />
                    <div className="space-y-1">
                        <div>Nama Pembeli</div>
                        <div className="text-xs text-neutral-03">Kota</div>
                    </div>
                </div>
                <p className="font-medium">Daftar Produkmu yang Ditawar</p>

                <div
                    className="w-full"
                >
                    <TransactionCard />
                </div>

                {/* <div className="flex gap-6 rounded-xl">
                    <img
                        src="/img/jam-2.png"
                        alt=""
                        className="h-14 w-14 rounded-xl object-cover"
                    />
                    <div className="w-full space-y-1">
                        <div className="flex justify-between text-xs text-neutral-03">
                            <p>Penawaran Produk</p>
                            <p>20 Apr, 14:04</p>
                        </div>
                        <p className="">Jam Tangan Casio</p>
                        <p className="">Rp 250.000</p>
                        <p className="">Ditawar Rp 200.000</p>
                        <div className="flex justify-end">
                            <button className="mr-4 w-1/3 rounded-2xl border border-primary-purple-04 py-2">
                                Tolak
                            </button>
                            <button
                                onClick={clicked}
                                className="w-1/3 rounded-2xl bg-primary-purple-04 py-2 text-white"
                            >
                                Terima
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="hidden h-[30px] w-[30px] sm:ml-10 sm:mr-10 sm:block lg:ml-20"></div>
            {modalOn && (
                <ModalBerhasil setModalOn={setModalOn} setChoice={setChoice} />
            )}
        </div>
    );
};

export default InfoPenawar;
