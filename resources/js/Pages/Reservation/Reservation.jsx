import React from "react";
import BedIcon from "@mui/icons-material/Bed";

export default function Reservation() {
    return (
        <>
            <div className="p-5 bg-white w-1/2 m-5 rounded-xl shadow-md">
                <div>
                    <h1 className="text-2xl font-semibold mb-2">
                        New Reservation
                    </h1>
                    <hr className="mb-5" />
                </div>

                <form action="" className="space-y-5">
                    <div>
                        <label>
                            Nama Lengkap <br />
                            <input
                                type="text"
                                name=""
                                id=""
                                className="bg-slate-200 w-56 mt-1 h-7 rounded-md p-2"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            NIK <br />
                            <input
                                type="text"
                                name=""
                                id=""
                                className="bg-slate-200 w-56 mt-1 h-7 rounded-md p-2"
                            />
                        </label>
                    </div>
                    <div className="flex space-x-11">
                        <div>
                            <label htmlFor="">
                                <select
                                    name=""
                                    id=""
                                    className="w-28 bg-slate-200 bg-slate-200 mt-1 h-7 rounded-md "
                                >
                                    <option value="1">Deluxe</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <select
                                    name=""
                                    id=""
                                    className="w-28 bg-slate-200 bg-slate-200 mt-1 h-7 rounded-md"
                                >
                                    <option value="1" className="">
                                        01-05
                                    </option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <div>
                            <label htmlFor="">
                                Check Out <br />
                                <input
                                    type="date"
                                    name=""
                                    id=""
                                    className="bg-slate-200 bg-slate-200 mt-1 h-7 rounded-md"
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Check Out <br />
                                <input
                                    type="date"
                                    name=""
                                    id=""
                                    className="bg-slate-200 bg-slate-200 mt-1 h-7 rounded-md"
                                />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
