import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/firebase";
import BookingTables from "./BookingTables";

function BookingTabs() {
  const [activeBookings, setActiveBookings] = useState([]);
  const [bookings, setBookings] = useState([]);
  console.log(bookings)
  const [completedBookings, setCompletedBookings] = useState([]);
  const [cancelledBookings, setCancelledBookings] = useState([]);
  const [toggle, setToggle]= useState(activeBookings)
  const updateToggle=(id)=>{

    setToggle(id)
  }

  

  useEffect(() => { 
    fetchData().then((data) => {
      // Filter and sort data based on bookingStatus
      const filteredOfflineBookingsActive = Object.values(
        data.offline_bookings
      ).filter((booking) => booking.bookingStatus === "SUCCESS");
      console.log(filteredOfflineBookingsActive);
      const completed = Object.values(
        data.offline_bookings
      ).filter((booking) => booking.bookingStatus === "COMPLETED")

      const cancelled = Object.values(
        data.offline_bookings
      ).filter((booking) => booking.bookingStatus === "CANCELLED")


      setActiveBookings(filteredOfflineBookingsActive);
        setCompletedBookings(completed);
        setCancelledBookings(cancelled);
        setBookings(Object.values(
          data.offline_bookings
        ));
        // console.log(bookings)
    }).catch((err)=>console.log(err))
  }, []);

  // Implement pagination here

  return (
    <div className="booking-tabs">
      <div className="flex ">
        <ul className="flex gap-4 text-xl px-10 py-5 font-semibold  ">
          <li className="" onClick={()=>updateToggle(activeBookings)}>Active</li>
          <li className="" onClick={()=>updateToggle(completedBookings)}>Completed</li>
          <li className="" onClick={()=>updateToggle(cancelledBookings)}>Cancelled</li>
        </ul>
      </div>
      
      <table className="w-[100%]">
        <thead className="w-[100%] bg-zinc-300 bg-opacity-30 rounded-tl-[10px] rounded-tr-[10px] shadow">
          <th className="w-[25%]">Name</th>
          <th className="w-[25%]">Date</th>
          <th className="w-[25%]">Package Details</th>
          <th className="w-[25%]">Payment Mode</th>
          <th className="w-[25%]">Booking status</th>
        </thead>
      </table>
      {/* Implement pagination for each tab */}
      {
       toggle === activeBookings && activeBookings.map((singleData, index)=> <div>
          <BookingTables key={index} singleDataName={singleData.userName} singleDataDate={singleData.bookingEpochTime} singleDataPackageTitle={singleData.packageTitle} singleDataPaymentMode={singleData.paymentMode} singleDataBookingStatus={singleData.bookingStatus}  />
        </div>)
      }
      {
       toggle === cancelledBookings && cancelledBookings.map((singleData, index)=> <div>
          <BookingTables key={index} singleDataName={singleData.userName} singleDataDate={singleData.bookingEpochTime} singleDataPackageTitle={singleData.packageTitle} singleDataPaymentMode={singleData.paymentMode} singleDataBookingStatus={singleData.bookingStatus}  />
        </div>)
      }
      {
       toggle === completedBookings && completedBookings.map((singleData, index)=> <div>
          <BookingTables key={index} singleDataName={singleData.userName} singleDataDate={singleData.bookingEpochTime} singleDataPackageTitle={singleData.packageTitle} singleDataPaymentMode={singleData.paymentMode} singleDataBookingStatus={singleData.bookingStatus}  />
        </div>)
      }
    </div>
  );
}

export default BookingTabs;
