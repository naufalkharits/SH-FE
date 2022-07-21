import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";
import { me } from "../redux/authSlice";
import ModalBerhasil from "../components/modals/ModalBerhasil";
import TransactionCard from "../components/TransactionCard";
import ProfileCard from "../components/ProfileCard";

const InfoPenawar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { decodedAccess } = useSelector((state) => state.auth);
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false);

    useEffect(() => {
        decodedAccess && dispatch(me(decodedAccess?.id));
    }, [decodedAccess, dispatch]);

    return (
        <div className="mx-auto mt-4 flex w-full justify-between sm:mt-10 md:w-full lg:w-[1024px]">
            <div className="hidden sm:ml-10 sm:mr-10 sm:block lg:mr-20">
                <FiArrowLeft
                    className="cursor-pointer text-3xl dark:text-white"
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </div>
            <div className="w-full space-y-7 px-4">
                <ProfileCard />
                <div className="font-medium dark:text-white">Daftar Produkmu yang Ditawar</div>
                <TransactionCard />
            </div>
            <div className="hidden h-[30px] w-[30px] sm:ml-10 sm:mr-10 sm:block lg:ml-20"></div>
            {/* {modalOn && (
                <ModalBerhasil setModalOn={setModalOn} setChoice={setChoice} />
            )} */}
        </div>
    );
};

export default InfoPenawar;
