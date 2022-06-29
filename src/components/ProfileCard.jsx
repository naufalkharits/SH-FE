import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import orang from "../images/orang.png";
import { me } from "../redux/authSlice";

const ProfileCard = () => {
    const location = useLocation();
    // const { user, biodata } = useSelector((state) => state.auth);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(me(user.accessToken));
    // }, [user, dispatch]);

    return (
        <div className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4 shadow">
            <div className="flex items-center gap-4">
                <img src={orang} alt="" className="w-12 h-12 rounded-xl"/>
                <div className="space-y-1">
                    <div>Nama</div>
                    <div className="text-xs text-neutral-03">Kota</div>
                </div>
            </div>
            {location.pathname === "/manage-product" && (
                <Link
                    to="/user/profile"
                    className="rounded-lg border border-primary-purple-04 py-1 px-3 text-neutral-05 hover:bg-primary-purple-05 hover:text-white"
                >
                    Edit
                </Link>
            )}
        </div>
    );
};

export default ProfileCard;
