import React from "react";
export default function DashboardList({}) {
    return (
        <>
            {/* DASHBOARD LIST */}
            <div className="container p-2 border h-screen mx-auto">
                <div className="flex border border-black">
                    <div className="w-1/6 border px-2 pt-5">
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
                    <div className="w-5/6 grid grid-rows-6 gap-3">
                        {/* NAVBAR */}
                        <div id="navbar" className="p-5 flex gap-3 w-full">
                            <div
                                id="name-account"
                                className="border-e pe-5 me-3"
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
                                className="flex self-center items-center h-2/3 bg-slate-800 px-5 rounded-xl"
                            >
                                <p className="text-center text-md text-white">
                                    Monday, 7 July 2023
                                </p>
                            </div>
                            <div className=" ml-auto">
                                <AvatarDemo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
