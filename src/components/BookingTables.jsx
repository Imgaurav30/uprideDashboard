import React from "react";

const BookingTables = ({singleDataName,singleDataDate,singleDataPackageTitle,singleDataPaymentMode,singleDataBookingStatus}) => {
    const date = new Date(singleDataDate);

// Get the month, day, and year
const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();
const year = date.getFullYear();
const formattedDate = `${month}${day},${year}`

  return (
    <div className="">
      <table className="w-[100%] bg-white border-l border-r border-b border-black border-opacity-10">
        <tr className="w-[100%]">
            <td className="w-[25%] text-center shadow">
                {singleDataName}
            </td>
            <td className="w-[25%] text-center shadow">
                {formattedDate}
            </td>
            <td className="w-[25%] text-center shadow">
                {singleDataPackageTitle}
            </td>
            <td className="w-[25%] text-center shadow">
                {singleDataPaymentMode}
            </td>
            <td className="w-[25%] text-center shadow">
                {singleDataBookingStatus}
            </td>
        </tr>
      </table>
    </div>
  );
};

export default BookingTables;
