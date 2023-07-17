import React from "react";

export default function Reservation({ Room }) {
    return (
        <>
            <div className="container flex">
                <div className=" border p-5 bg-white w-1/2 m-5 rounded-xl shadow-md relative overflow-hidden">
                    <div className="z-40  w-full">
                        <div>
                            <h1 className="text-2xl font-semibold mb-2 z-40">
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
                            <div className="w-1/2">
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
                                            className="w-full bg-slate-200 p-2 rounded-md"
                                        >
                                            {Room[1].map((room) => (
                                                <option
                                                    key={room.jenis}
                                                    value={room.jenis}
                                                    className=""
                                                >
                                                    {room.jenis}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div className="z-40">
                                    <label htmlFor="">
                                        <select
                                            id="roomNumber"
                                            className="w-full bg-slate-200 p-2 rounded-md"
                                        >
                                            {Room[0].map((room) => (
                                                <option
                                                    key={room.nomor_kamar}
                                                    value={`${room.nomor_kamar} - ${room.jenis_kamar}`}
                                                    className=""
                                                >
                                                    {`${room.nomor_kamar} - ${room.jenis_kamar}`}
                                                </option>
                                            ))}
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
                                            className=" bg-slate-200 mt-1 h-7 rounded-md p-5"
                                        />
                                    </label>
                                </div>
                                <div className="z-40">
                                    <label htmlFor="">
                                        Check Out <br />
                                        <input
                                            type="date"
                                            name=""
                                            id=""
                                            className="bg-slate-200 mt-1 h-7 rounded-md p-5"
                                        />
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className="absolute border end-0 -top-0 w-1/2 h-full bg-cover z-30 opacity-50 blur"
                        style={{
                            backgroundImage:
                                "url(https://wallpapercave.com/wp/wp1846068.jpg)",
                        }}
                    ></div>
                </div>

                <div className="border p-5 bg-white w-1/2 m-5 rounded-xl shadow-md">
                    <h1>Hello World</h1>
                </div>
            </div>
        </>
    );
}
