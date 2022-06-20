import React from 'react'
import ProfileCard from '../components/ProfileCardBuyer'
import ListWishlist from "../components/ListWishlist"

const History = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 space-y-6 sm:mb-2">
        <div className="text-xl font-bold">History Transaksi</div>
        <ProfileCard />
        <div className="flex flex-wrap sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6">
          <ListWishlist />
        </div>
      </div>
    </div>
  )
}

export default History