import React from "react";
import AvatarDemo from "../Component/Avatar";
import RoomReservationCard from "./Dashboard Component/RoomReservationCard";
import ChatCustomer from "./Dashboard Component/CustomerChatCard";
import LineChart from "../Component/LineChart";
import { PieChart } from "../Component/PieChart";
import DropdownMenuDemo from "../Component/DropDownMenu";
import HomeIcon from "@mui/icons-material/Home";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import BedIcon from "@mui/icons-material/Bed";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LuggageIcon from "@mui/icons-material/Luggage";

export default function DashboarShow({}) {
    return (
        <>
            {/* DASHBOARD LIST */}
            <div className=" p-5 bg-slate-200">
                <div className="flex p-5 rounded-3xl bg-white">
                    <div id="dashboard-menu" className="w-1/6 px-2 pt-5 me-5">
                        <div className="mb-2 font-bold text-center text-3xl">
                            <div
                                id="logo"
                                className="bg-sky-200 flex align-middle justify-center p-5   w-14 h-14 rounded-full mb-14"
                            ></div>
                        </div>
                        <div className="grid grid-rows-6 gap-6">
                            <div>
                                <button className="px-3 py-2 rounded-xl w-full hover:bg-slate-200">
                                    <span className="flex align-middle  space-x-1">
                                        <HomeIcon />
                                        <p className="font-semibold">
                                            Dashboard
                                        </p>
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button className="px-3 py-2 rounded-xl w-full hover:bg-slate-200">
                                    <span className="flex align-middle  space-x-1">
                                        <EventSeatIcon />
                                        <p className="font-semibold">
                                            Reservasi
                                        </p>
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button className="px-3 py-2 rounded-xl w-full hover:bg-slate-200">
                                    <span className="flex align-middle  space-x-1">
                                        <CleaningServicesIcon />
                                        <p className="font-semibold">Service</p>
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button className="px-3 py-2 rounded-xl w-full hover:bg-slate-200">
                                    <span className="flex align-middle  space-x-1">
                                        <BedIcon />
                                        <p className="font-semibold">
                                            Room Information
                                        </p>
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button className="px-3 py-2 rounded-xl w-full hover:bg-slate-200">
                                    <span className="flex align-middle  space-x-1">
                                        <FastfoodIcon />
                                        <p className="font-semibold">
                                            Facility
                                        </p>
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button className="px-3 py-2 rounded-xl w-full hover:bg-slate-200">
                                    <span className="flex align-middle  space-x-1">
                                        <AssessmentIcon />
                                        <p className="font-semibold">Report</p>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* DASHBOARD */}
                    <div id="dashboard" className="w-5/6 bg-slate-200">
                        {/* NAVBAR */}
                        <div id="navbar" className="p-10 flex gap-3  bg-white">
                            <div
                                id="name-account"
                                className="border-e pe-5 me-3 self-center"
                            >
                                <h1 className="text-3xl font-semibold">
                                    Hi! Ivan Sholana
                                </h1>
                                <p className="text-sm text-stone-700">
                                    Senior Manager
                                </p>
                            </div>
                            <div
                                id="calendar"
                                className="flex items-center self-center justify-center py-2 bg-slate-800 px-5 rounded-xl"
                            >
                                <p className="text-center text-md text-white">
                                    Monday, 7 July 2023
                                </p>
                            </div>
                            <div className=" ml-auto self-center flex border">
                                <AvatarDemo />
                                <DropdownMenuDemo />
                            </div>
                        </div>
                        {/* MAIN BOARD */}
                        <div id="main-dashboard" className="flex ">
                            {/* BOOKING BOARD */}
                            <div
                                id="booking"
                                className="border p-5 space-y-5 rounded-3xl m-5 bg-white w-1/2  shadow-sm overflow-hidden box-border h-96"
                            >
                                {/* HEADER */}
                                <div id="title-booking">
                                    <h1 className="text-2xl font-semibold">
                                        Booking
                                    </h1>
                                    <p className="text-base">
                                        Information about reservation
                                    </p>
                                </div>
                                {/* INFORMATION */}
                                <div
                                    id="information"
                                    className="flex gap-5 w-full"
                                >
                                    <div
                                        id="booking"
                                        className=" bg-green-300 p-5 rounded-xl w-2/6 shadow-md"
                                    >
                                        <p>Total Booking</p>
                                        <h1 className="text-4xl font-semibold">
                                            234
                                        </h1>
                                    </div>
                                    <div
                                        id="free-rooms"
                                        className=" bg-sky-300 p-5 rounded-xl w-2/6 shadow-md"
                                    >
                                        <p>Free Rooms</p>
                                        <h1 className="text-4xl font-semibold">
                                            120
                                        </h1>
                                    </div>
                                </div>
                                {/* TABLE RESERVATION ROOM */}
                                <div
                                    id="table-room"
                                    className="overflow-auto h-36"
                                >
                                    <RoomReservationCard />
                                    <RoomReservationCard />
                                    <RoomReservationCard />
                                    <RoomReservationCard />
                                </div>
                            </div>
                            {/* CUSTOMER CHAT */}
                            <div
                                id="customer-chat"
                                className="bg-white w-1/2 m-5 p-5 rounded-3xl space-y-10 shadow-sm h-96"
                            >
                                {/* TITLE CHAT */}
                                <div className="-mb-5">
                                    <h1 className="text-2xl font-semibold mb-1">
                                        Customer Chat
                                    </h1>
                                    <hr />
                                </div>
                                {/* CHAT CARD */}
                                <div className="overflow-auto h-5/6 space-y-5">
                                    <ChatCustomer />
                                    <ChatCustomer />
                                    <ChatCustomer />
                                    <ChatCustomer />
                                    <ChatCustomer />
                                </div>
                            </div>
                        </div>
                        {/* CHART */}
                        <div
                            id="navbar-chart"
                            className="bg-white  m-5 mt-0 p-5 rounded-3xl h-fit space-y-5 "
                        >
                            <h1 className="text-2xl font-semibo">Diagram</h1>
                            <div className="flex space-x-5">
                                <div className="w-1/2 self-center h-80 ">
                                    <LineChart />
                                </div>
                                <div className="w-1/2 justify-center flex  h-56">
                                    <PieChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
