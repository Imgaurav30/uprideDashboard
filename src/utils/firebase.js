// Example: src/utils/firebase.js

import axios from 'axios';

const FIREBASE_URL = 'https://upride-internships-default-rtdb.firebaseio.com/';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${FIREBASE_URL}.json`);
    // console.log(response.data.offline_bookings.filter((activity)=>activity.bookingStatus === "SUCCESS"))
    // data.offline_bookings.filter((activity)=>activity.bookingStatus === "SUCCESS"
    return response.data;
  } catch (error) {
    throw error;
  }
};
