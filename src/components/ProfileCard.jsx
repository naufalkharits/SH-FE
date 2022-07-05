import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import orang from "../images/orang.png";
import { useEffect } from "react";
import { getBiodata } from "../redux/authSlice";
import AltFoto from "../images/AltFoto.png"

const ProfileCard = () => {
    const { decodedAccess, biodata } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        decodedAccess &&
        dispatch(getBiodata(decodedAccess.id));
    }, [decodedAccess, dispatch]);

    return (
        <div className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4 shadow">
            <div className="flex items-center gap-4">
                <img src={biodata?.picture || AltFoto} alt="" className="w-12 h-12 rounded-xl"/>
                <div className="space-y-1">
                    <div>{biodata?.name}</div>
                    <div className="text-xs text-neutral-03">{biodata?.city}</div>
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

export default ProfileCard;
