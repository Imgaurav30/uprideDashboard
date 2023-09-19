import React from 'react'
import {BsSearch} from "react-icons/bs"

const SearchBar = () => {
  return (
    <div className='flex shadow w-[1240px] h-[72px] items-center'>
        <div className="flex items-center px-4">
            <div className=" flex gap-4 items-center ">
                <div className="flex items-center relative">
                <input type="search" placeholder='Search Bookings' className='shadow border border-black border-opacity-5 rounded-lg px-12 py-2 ' />
                <BsSearch className='bg-pink-500 text-white relative right-8 text-3xl rounded-full p-1 font-extrabold' />
                </div>
                <button>New Booking</button>
            </div>

        </div>
        <div className="">
            <p>Hello gaurav</p>
        </div>
    </div>
  )
}

export default SearchBar