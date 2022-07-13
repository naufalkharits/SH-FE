import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AltFoto from "../images/AltFoto.png";

const ProfileCard = () => {
    const location = useLocation();
    const { profile, loading } = useSelector((state) => state.auth);

    return (
        <div className="flex items-center justify-between rounded-2xl p-4 shadow">
            <Link to="/user" className="flex items-center gap-4">
                {loading === "pending" ? (
                    <div className="h-12 w-12 animate-pulse rounded-xl bg-gray"></div>
                ) : (
                    <img
                        src={profile?.picture || AltFoto}
                        alt=""
                        className="h-12 w-12 rounded-xl"
                    />
                )}

                <div className="space-y-1">
                    <div
                        className={
                            loading === "pending"
                                ? "h-3 w-16 animate-pulse rounded-md bg-gray"
                                : ""
                        }
                    >
                        {profile?.name}
                    </div>
                    <div
                        className={
                            loading === "pending"
                                ? "h-2 w-12 animate-pulse rounded-md bg-gray"
                                : "text-xs text-neutral-03"
                        }
                    >
                        {profile?.city}
                    </div>
                </div>
            </Link>
            {loading === "pending" ? (
                <div className="h-8 w-14 animate-pulse rounded-lg bg-gray"></div>
            ) : (
                <>
                    <Link
                        to="/user/profile"
                        state={{ from: location }}
                        className="rounded-lg border border-primary-purple-04 bg-white py-1 px-3 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white"
                    >
                        Edit
                    </Link>
                </>
            )}
        </div>
    );
};

export default ProfileCard;
