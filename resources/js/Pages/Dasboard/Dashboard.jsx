import React from "react";
import AvatarDemo from "../Component/Avatar";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

export default function DashboarShow({}) {
    return (
        <>
            {/* DASHBOARD LIST */}
            <div className=" p-5 bg-slate-200">
                <div className="flex p-5 rounded-3xl bg-white">
                    <div id="dashboard-menu" className="w-1/6 px-2 pt-5 me-5">
                        <div className="mb-2 font-bold text-center text-3xl">
                            LOGO
                        </div>
                        <hr className="mb-3" />
                        <div className="grid grid-rows-6 gap-4">
                            <div>
                                <button className="border px-3 py-1 rounded-md w-full">
                                    Dashboard
                                </button>
                            </div>
                            <div>
                                <button className="border px-3 py-1 rounded-md w-full">
                                    Reservasi
                                </button>
                            </div>
                            <div>
                                <button className="border px-3 py-1 rounded-md w-full">
                                    Data Kamar
                                </button>
                            </div>
                            <div>
                                <button className="border px-3 py-1 rounded-md w-full">
                                    Service
                                </button>
                            </div>
                            <div>
                                <button className="border px-3 py-1 rounded-md w-full">
                                    Facility
                                </button>
                            </div>
                            <div>
                                <button className="border px-3 py-1 rounded-md w-full">
                                    Report
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* DASHBOARD */}
                    <div id="dashboard" className="w-5/6 bg-slate-200">
                        {/* NAVBAR */}
                        <div id="navbar" className="p-10 flex gap-3  bg-white ">
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
                            <div className=" ml-auto self-center">
                                <AvatarDemo />
                            </div>
                        </div>
                        {/* MAIN BOARD */}
                        <div id="main-dashboard" className="flex">
                            <div
                                id="booking"
                                className="border p-5 grid gap-y-4 rounded-3xl m-5 bg-white w-1/2"
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
                                <div id="information" className="flex gap-5">
                                    <div
                                        id="booking"
                                        className=" bg-green-300 p-5 rounded-xl"
                                    >
                                        <p>Total Booking</p>
                                        <h1 className="text-4xl font-semibold">
                                            234
                                        </h1>
                                    </div>
                                    <div
                                        id="free-rooms"
                                        className=" bg-sky-300 p-5 rounded-xl"
                                    >
                                        <p>Free Rooms</p>
                                        <h1 className="text-4xl font-semibold">
                                            120
                                        </h1>
                                    </div>
                                </div>
                                <div id="table-room" className="border">
                                    <div
                                        id="room-type"
                                        className="border flex gap-2 p-1"
                                    >
                                        <div>
                                            <img
                                                src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
                                                alt=""
                                                className="w-32 rounded-xl"
                                            />
                                        </div>
                                        <h1 className="text-xl font-semibold self-center">
                                            Deluxe <br />
                                            <span className="text-sm font-normal">
                                                Room Type
                                            </span>
                                        </h1>
                                    </div>
                                    <div
                                        id="room-number"
                                        className="border"
                                    ></div>
                                    <div id="check-in" className="border"></div>
                                    <div
                                        id="check-out"
                                        className="border"
                                    ></div>
                                </div>
                            </div>
                            <div
                                id="customer-chat"
                                className="bg-white w-1/2 m-5 p-5 rounded-3xl gap-y-4 "
                            >
                                <h1 className="text-2xl font-semibold">
                                    Customer Chat
                                </h1>
                                <div>
                                    <AvatarDemo />
                                </div>
                            </div>
                        </div>
                        <div id="navbar" className="border"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
