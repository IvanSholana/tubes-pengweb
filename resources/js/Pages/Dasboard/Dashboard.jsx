import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import BedIcon from "@mui/icons-material/Bed";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DropDownMenu from "../Component/DropDownMenu";
import RoomReservationCard from "./Dashboard Component/RoomReservationCard";
import MainBoard from "./Dashboard Component/MainBoard";

export default function DashboarShow({ rowCount }) {
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
                            <div className=" ml-auto self-center ">
                                <DropDownMenu />
                            </div>
                        </div>
                        <MainBoard Count={rowCount} />
                    </div>
                </div>
            </div>
        </>
    );
}
