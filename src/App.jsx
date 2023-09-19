import { useState } from "react";
import BookingTabs from "./components/BookingTabs";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex w-[100%]">
      <Navbar />
    <div className="">
    <SearchBar/>
      <BookingTabs />
    </div>
      </div>
    </>
  );
}

export default App;
