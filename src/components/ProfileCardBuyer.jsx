// import { useLocation } from "react-router-dom";
import orang from "../images/orang.png";

const ProfileCard = () => {
    // const location = useLocation();

    return (
        <div className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4 shadow">
            <div className="flex items-center gap-4">
                <img src={orang} alt="" />
                <div className="space-y-1">
                    <div>Nama Penjual</div>
                    <div className="text-xs text-neutral-03">Kota</div>
                </div>
            </div>
            {/* {location.pathname === "/manage-product" && (
                <button className="rounded-lg border border-primary-purple-04 py-1 px-3 text-neutral-05">
                    Edit
                </button>
            )} */}
        </div>
    );
};

export default ProfileCard;
