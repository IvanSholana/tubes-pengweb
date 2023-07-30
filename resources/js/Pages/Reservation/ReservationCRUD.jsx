import { React, useState } from "react";

export default function ReservationCRUD(ReservationData) {
    const [UpdateData, setUpdateData] = useState({});
    return (
        <>
            <div className="m-5 p-5 bg-white rounded-md">
                <h1 className="mb-2 text-2xl font-semibold">
                    Detail Reservation
                </h1>
                <hr className="mb-2" />
                <div className="flex p-5 border">
                    <div id="form" className="space-y-2">
                        <div>
                            <p>Reservation ID</p>
                            <input
                                name="id"
                                type="text"
                                defaultValue={
                                    ReservationData.DetailReservation.id
                                }
                                className="bg-slate-100 p-1 border rounded-sm"
                            />
                        </div>
                        <div>
                            <p>No NIK</p>
                            <input
                                name="No NIK"
                                type="text"
                                defaultValue={
                                    ReservationData.DetailReservation.no_nik
                                }
                                className="bg-slate-100 p-1 border rounded-sm"
                            />
                        </div>
                        <div>
                            <p>Nama Pelanggan</p>
                            <input
                                type="text"
                                defaultValue={
                                    ReservationData.DetailReservation
                                        .nama_pelanggan
                                }
                                className="bg-slate-100 p-1 border rounded-sm"
                            />
                        </div>
                        <div>
                            <p>Nomor Kamar</p>
                            <input
                                type="text"
                                defaultValue={
                                    ReservationData.DetailReservation
                                        .nomor_kamar
                                }
                                className="bg-slate-100 p-1 border rounded-sm"
                            />
                        </div>
                        <div>
                            <p>Jenis Kamar</p>
                            <input
                                type="text"
                                defaultValue={
                                    ReservationData.DetailReservation.jenis
                                }
                                className="bg-slate-100 p-1 border rounded-sm"
                            />
                        </div>
                        <div className="flex space-x-5">
                            <div>
                                <p>Check In</p>
                                <input
                                    type="date"
                                    defaultValue={
                                        ReservationData.DetailReservation
                                            .check_in
                                    }
                                    className="bg-slate-100 p-1 border rounded-sm"
                                />
                            </div>
                            <div>
                                <p>Check Out</p>
                                <input
                                    type="date"
                                    defaultValue={
                                        ReservationData.DetailReservation
                                            .check_out
                                    }
                                    className="bg-slate-100 p-1 border rounded-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <p>Total Harga</p>
                            <input
                                type="text"
                                defaultValue={
                                    ReservationData.DetailReservation
                                        .total_harga
                                }
                                className="bg-slate-100 p-1 border rounded-sm"
                            />
                        </div>
                        <div className="space-x-5">
                            <button className="bg-slate-800 text-white px-5 py-2 rounded-md mt-2">
                                Update Data
                            </button>
                            <button className="bg-red-500 text-white px-5 py-2 rounded-md">
                                Delete Data
                            </button>
                        </div>
                    </div>
                    <div
                        id="image"
                        className="w-full h-full ms-20 rounded-xl overflow-hidden"
                    >
                        <img
                            src={`/foto/${ReservationData.DetailReservation.foto}`}
                            alt="jenis kamar"
                        />

                        <h1 className="text-end text-2xl font-semibold">
                            {ReservationData.DetailReservation.jenis} Room
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
