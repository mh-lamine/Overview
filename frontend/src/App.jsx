import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
import CreateReservation from "./pages/CreateReservation";
import { IoMdLogIn } from "react-icons/io";
import { MdOutlineSchedule } from "react-icons/md";
import { RiMenuAddFill } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useState } from "react";

function App() {

  return (
    <div className=" w-screen h-screen p-5 flex flex-col bg-gray-200">
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createreservation" element={<CreateReservation />} />
        </Routes>
        <nav className="mt-auto p-3 flex items-center justify-around bg-green-300 shadow-lg shadow-green-600">
            <Link to="/login" className="text-2xl">
              <IoMdLogIn />
            </Link>
            <button className="text-2xl">
              <RiLogoutCircleLine />
            </button>
          <Link to="/" className="text-3xl">
            <MdOutlineSchedule />
          </Link>
          <Link to="/createreservation" className="text-2xl">
            <RiMenuAddFill />
          </Link>
        </nav>
      </Router>
    </div>
  );
}

export default App;
