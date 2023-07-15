import React from "react";
import AvatarDemo from "../Component/Avatar";

export default function DashboarShow({}) {
    return (
        <>
            {/* DASHBOARD LIST */}
            <div className=" h-screen mx-auto p-5">
                <div className="flex border border-black w-full">
                    <div className="w-1/6 border px-2 pt-5 ">
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
                    <div className="w-5/6 grid grid-rows-3 h-full">
                        {/* NAVBAR */}
                        <div
                            id="navbar"
                            className="p-5 flex gap-3 w-full h-2/6 border rounded-2xl"
                        >
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
                                className="flex items-center self-center justify-center h-2/3 bg-slate-800 px-5 rounded-xl"
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
                        <div id="mainboard" className="border p-5 grid gap-y-4">
                            {/* HEADER */}
                            <div id="title-booking">
                                <h1 className="text-3xl font-semibold">
                                    Booking
                                </h1>
                                <p className="text-md">
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
                                <table className="w-1/2">
                                    <tr className="">
                                        <td>Jenis Kamar</td>
                                        <td>
                                            <p className="text-xl font-semibold">
                                                #100
                                            </p>
                                            <p className="text-sm">Room</p>
                                        </td>
                                        <td>Check In</td>
                                        <td>Check Out</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div id="navbar" className="border"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
