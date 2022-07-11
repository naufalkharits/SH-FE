import React from 'react'
import HistoryTransaksi from './HistoryTransaksi'
import WishlistUser from './WishlistUser'

const ProfileMenu = () => {
  return (
    <div className="w-full space-y-7">
        <WishlistUser />
        <HistoryTransaksi />
    </div>
  )
}

export default ProfileMenu;