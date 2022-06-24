import { Link } from "react-router-dom";
import orang from "../images/orang.png";

const ProfileCardBuyer = () => {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4 shadow">
            <div className="flex items-center gap-4">
                <img src={orang} alt="" />
                <div className="space-y-1">
                    <div>Nama User</div>
                    <div className="text-xs text-neutral-03">Kota</div>
                </div>
            </div>
            <Link
                to="/user/profile"
                className="rounded-lg border border-primary-purple-04 py-1 px-3 text-neutral-05 hover:bg-primary-purple-05 hover:text-white"
            >
                Edit
            </Link>
        </div>
    );
};

export default ProfileCardBuyer;
