import React from "react";
import Alertdialog from "../Components/AlertDialog";
import { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";

export default function Reservation({ Room }) {
    const { post } = usePage();
    const [showdata, setshow] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        nik: "",
        roomType: "",
        roomNumber: "",
        checkInDate: "",
        checkOutDate: "",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Mengumpulkan data form yang diisi oleh pengguna
        const { name, nik, roomType, roomNumber, checkInDate, checkOutDate } =
            formData;

        // Mengirim data ke rute Laravel menggunakan inertia.post()
        post("/create", {
            name,
            nik,
            roomType,
            roomNumber,
            checkInDate,
            checkOutDate,
        })
            .then(() => {
                // Redirect ke halaman lain jika diperlukan
                // contoh: history.push('/other-route');
            })
            .catch((error) => {
                // Penanganan kesalahan jika terjadi
                console.error(error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
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
                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            <div>
                                <label>
                                    Nama Lengkap <br />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="bg-slate-200 w-56 mt-1 h-7 rounded-md p-2"
                                    />
                                </label>
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="">
                                    NIK <br />
                                    <input
                                        type="text"
                                        name="nik"
                                        value={formData.nik}
                                        onChange={handleInputChange}
                                        className="bg-slate-200 w-56 mt-1 h-7 rounded-md p-2"
                                    />
                                </label>
                            </div>
                            {/*  */}
                            <div className="flex space-x-11">
                                <div>
                                    <h1>Jenis Kamar</h1>
                                    <label htmlFor="">
                                        <select
                                            name="roomType"
                                            value={formData.roomType}
                                            onChange={handleInputChange}
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
                                    <h1>Nomor Kamar</h1>
                                    <label htmlFor="">
                                        <select
                                            name="roomNumber"
                                            value={formData.roomNumber}
                                            onChange={handleInputChange}
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
                                        Check In <br />
                                        <input
                                            type="date"
                                            name="checkInDate"
                                            value={formData.checkInDate}
                                            onChange={handleInputChange}
                                            className=" bg-slate-200 mt-1 h-7 rounded-md p-5"
                                        />
                                    </label>
                                </div>
                                <div className="z-40">
                                    <label htmlFor="">
                                        Check Out <br />
                                        <input
                                            type="date"
                                            name="checkOutDate"
                                            value={formData.checkOutDate}
                                            onChange={handleInputChange}
                                            className="bg-slate-200 mt-1 h-7 rounded-md p-5"
                                        />
                                    </label>
                                </div>
                            </div>
                            <button
                                onClick={() => setshow(true)}
                                className="text-white hover:bg-mauve3 shadow-md inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-600 px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                            >
                                Tambahkan Data
                            </button>
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
                {/* INVOICE */}
                <div className="border p-5 bg-white w-1/2 m-5 rounded-xl shadow-md space-y-5">
                    <div>
                        <h1 className="text-2xl font-semibold mb-2">Invoice</h1>
                        <hr />
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <h1 className="text-md font-semibold">Nama Lengkap</h1>
                        <p>{showdata ? formData.name : null}</p>
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <h1 className="text-md font-semibold">NIK</h1>
                        <p>{showdata ? formData.nik : null}</p>
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <h1 className="text-md font-semibold">
                            Room Reservased
                        </h1>
                        <p>{showdata ? `${formData.roomNumber}` : null}</p>
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <h1 className="text-md font-semibold">Check In</h1>
                        <p>{showdata ? formData.checkInDate : null}</p>
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <h1 className="text-md font-semibold">Check Out</h1>
                        <p>{showdata ? formData.checkOutDate : null}</p>
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <h1 className="text-md font-semibold">Total Payment</h1>
                        <p>Rp1.000.000</p>
                    </div>
                    <div className="pt-5">
                        {" "}
                        <Alertdialog />
                    </div>
                </div>
            </div>
        </>
    );
}
