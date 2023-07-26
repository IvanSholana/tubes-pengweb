import React from "react";

export default function RoomPage() {
    return (
        <>
            <div className="w-full p-5 mx-auto">
                <div className="border p-5 space-x-5">
                    <button className=" -ms-5 bg-slate-800 text-white w-56 py-2 rounded-md">
                        Tambah Kamar
                    </button>
                    <button className=" bg-slate-800 text-white w-56 py-2 rounded-md">
                        Tambah Tipe Kamar
                    </button>
                </div>
                <div className=" mt-5 bg-white p-5">
                    <h1 className=" text-2xl font-semibold">
                        Data Kamar Hotel
                    </h1>
                    <hr />
                    <table className="border mt-5">
                        <thead className="h-10">
                            <tr className="font-normal bg-white">
                                <th className="w-44">Nomor Kamar</th>
                                <th className="w-44">Jenis Kamar</th>
                                <th className="w-44">Kapasitas</th>
                                <th className="w-44">Harga</th>
                                <th className="w-44">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center border bg-white">
                                <td>1</td>
                                <td>Deluxe</td>
                                <td>2 Orang</td>
                                <td>Rp1.000.000</td>
                                <td>
                                    <div className=" bg-red-700 text-white m-2 py-1 rounded-md">
                                        Booked
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
