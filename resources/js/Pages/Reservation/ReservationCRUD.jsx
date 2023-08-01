import { React, useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function ReservationCRUD(ReservationData) {
    // UPDATE

    const [UpdateData, setUpdateData] = useState({
        no_nik: "",
        name: "",
        nomor_kamar: "",
        jenis_kamar: "",
        check_in: "",
        check_out: "",
    });

    useEffect(() => {
        setUpdateData({
            no_nik: ReservationData.DetailReservation.no_nik,
            name: ReservationData.DetailReservation.nama_pelanggan,
            nomor_kamar: ReservationData.DetailReservation.nomor_kamar,
            jenis_kamar: ReservationData.DetailReservation.jenis_kamar,
            check_in: ReservationData.DetailReservation.check_in,
            check_out: ReservationData.DetailReservation.check_out,
        });
    }, [ReservationData.DetailReservation]);

    const SubmitUpdateData = () => {
        Inertia.post(
            `/reservation/update/${ReservationData.DetailReservation.id}`,
            UpdateData,
            {
                onSuccess: () => {
                    Inertia.visit(
                        `/reservation/detail/${ReservationData.DetailReservation.id}`
                    );
                },
                onError: (errors) => {
                    console.error(errors);
                },
            }
        );
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleClickSubmit = (event) => {
        event.preventDefault();
        SubmitUpdateData();
    };

    // DELETE
    const Delete = () => {
        Inertia.post(
            `/reservation/delete/${ReservationData.DetailReservation.id}`,
            {
                onSuccess: () => {
                    Inertia.visit(`/reservation`);
                },
                onError: (errors) => {
                    console.error(errors);
                },
            }
        );
    };

    const handleClickDelete = (event) => {
        event.preventDefault();
        Delete();
    };

    return (
        <>
            <div className="m-5 p-5 bg-white rounded-md">
                <h1 className="mb-2 text-2xl font-semibold">
                    Detail Reservation
                </h1>
                <hr className="mb-2" />
                <div className="flex p-5 border">
                    <form method="POST" onSubmit={SubmitUpdateData}>
                        <div id="form" className="space-y-2">
                            <div>
                                <p>Reservation ID</p>
                                <input
                                    name="id"
                                    type="text"
                                    readOnly
                                    defaultValue={
                                        ReservationData.DetailReservation.id
                                    }
                                    className="bg-slate-100 p-1 border rounded-sm"
                                />
                            </div>

                            <div>
                                <p>No NIK</p>
                                <input
                                    name="no_nik"
                                    type="text"
                                    defaultValue={
                                        ReservationData.DetailReservation.no_nik
                                    }
                                    onChange={handleInputChange}
                                    className="bg-slate-100 p-1 border rounded-sm"
                                />
                            </div>
                            <div>
                                <p>Nama Pelanggan</p>
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={
                                        ReservationData.DetailReservation
                                            .nama_pelanggan
                                    }
                                    onChange={handleInputChange}
                                    className="bg-slate-100 p-1 border rounded-sm"
                                />
                            </div>
                            <div>
                                <p>Nomor Kamar</p>
                                <input
                                    type="text"
                                    name="nomor_kamar"
                                    defaultValue={
                                        ReservationData.DetailReservation
                                            .nomor_kamar
                                    }
                                    onChange={handleInputChange}
                                    className="bg-slate-100 p-1 border rounded-sm"
                                />
                            </div>
                            <div>
                                <p>Jenis Kamar</p>
                                <input
                                    type="text"
                                    name="jenis_kamar"
                                    defaultValue={
                                        ReservationData.DetailReservation
                                            .jenis_kamar
                                    }
                                    readOnly
                                    onChange={handleInputChange}
                                    className="bg-slate-100 p-1 border rounded-sm"
                                />
                            </div>
                            <div className="flex space-x-5">
                                <div>
                                    <p>Check In</p>
                                    <input
                                        type="date"
                                        name="check_in"
                                        defaultValue={
                                            ReservationData.DetailReservation
                                                .check_in
                                        }
                                        onChange={handleInputChange}
                                        className="bg-slate-100 p-1 border rounded-sm"
                                    />
                                </div>
                                <div>
                                    <p>Check Out</p>
                                    <input
                                        type="date"
                                        name="check_out"
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
                                    name="total"
                                    defaultValue={
                                        ReservationData.DetailReservation
                                            .total_harga
                                    }
                                    className="bg-slate-100 p-1 border rounded-sm"
                                />
                            </div>
                            <div className="space-x-5">
                                <button
                                    className="bg-slate-800 text-white px-5 py-2 rounded-md mt-2"
                                    onClick={handleClickSubmit}
                                >
                                    Update Data
                                </button>
                                <button
                                    className="bg-red-500 text-white px-5 py-2 rounded-md"
                                    onClick={handleClickDelete}
                                >
                                    Delete Data
                                </button>
                            </div>
                        </div>
                    </form>
                    <div
                        id="image"
                        className="w-full h-full ms-20 rounded-xl overflow-hidden"
                    >
                        <img
                            src={`/foto/${ReservationData.DetailReservation.foto}`}
                            alt="jenis kamar"
                        />
                        <h1 className="text-end text-2xl font-semibold">
                            {ReservationData.DetailReservation.jenis_kamar}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
