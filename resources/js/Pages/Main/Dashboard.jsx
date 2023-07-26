import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import BedIcon from "@mui/icons-material/Bed";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DropDownMenu from "../Components/DropDownMenu";
import MainBoard from "../Dasboard/Dashboard Components/MainBoard";
import Reservation from "../Reservation/Reservation";
import FacilityForm from "../Facility/Facilityform";
import Hotelroom from "../HotelRoom/HotelRoomPage";

const TodayDate = () => {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        setCurrentDate(formattedDate);
    }, []);

    return <>{currentDate}</>;
};

export default function DashboarShow({
    rowCount,
    page,
    rooms,
    username,
    userposition,
    facilityData,
}) {
    console.log(facilityData);
    return (
        <>
            {/* DASHBOARD LIST */}
            <div className="p-5 bg-slate-200 h-screen" data-theme="light">
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
                                            <a href="/dashboard">Dasboard</a>
                                        </p>
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button className="px-3 py-2 rounded-xl w-full hover:bg-slate-200">
                                    <span className="flex align-middle  space-x-1">
                                        <EventSeatIcon />
                                        <p className="font-semibold">
                                            <a href="/reservation">Reservasi</a>
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
                                            <a href="/hotelroom">Hotel Room</a>
                                        </p>
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button className="px-3 py-2 rounded-xl w-full hover:bg-slate-200">
                                    <span className="flex align-middle  space-x-1">
                                        <FastfoodIcon />
                                        <p className="font-semibold">
                                            <a href="/facility">Facility</a>
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
                                    Hi! {username}
                                </h1>
                                <p className="text-sm text-stone-700">
                                    {userposition}
                                </p>
                            </div>
                            <div
                                id="calendar"
                                className="flex items-center self-center justify-center py-2 bg-slate-800 px-5 rounded-xl"
                            >
                                <p className="text-center text-md text-white">
                                    <TodayDate />
                                </p>
                            </div>
                            <div className=" ml-auto self-center ">
                                <DropDownMenu />
                            </div>
                        </div>
                        {page == "Dashboard" ? (
                            <MainBoard Count={rowCount} />
                        ) : page == "Reservation" ? (
                            <Reservation Room={rooms} />
                        ) : page == "Facility" ? (
                            <FacilityForm DataFacility={facilityData} />
                        ) : page == "Hotelroom" ? (
                            <Hotelroom />
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}
