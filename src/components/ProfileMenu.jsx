import Purchase from "./Purchase"
import WishlistUser from "./WishlistUser"

const ProfileMenu = () => {
    return (
        <div className="w-full space-y-7">
            <WishlistUser />
            <Purchase />
        </div>
    )
}

export default ProfileMenu
