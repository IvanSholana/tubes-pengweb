import React from "react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export default function Reservation({ Room }) {
    const [showdata, setshow] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        nik: "",
        no_hp: "",
        roomType: "Single Room",
        roomNumber: "",
        checkInDate: "",
        checkOutDate: "",
        harga: "",
    });

    const handleFormSubmit = () => {
        // Mengirim data ke rute Laravel menggunakan inertia.post()
        Inertia.post("/create", formData, {
            onSuccess: () => {
                // Redirect ke halaman lain jika diperlukan
                Inertia.visit("/reservation");
            },
            onError: (errors) => {
                // Penanganan kesalahan jika terjadi
                console.error(errors);
            },
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleConfirmSubmit = () => {
        // Kirim data ke server saat tombol "Yes" ditekan
        handleFormSubmit();
    };

    const uniqueRoomTypes = new Set();
    return (
        <>
            <div className="container flex bg-slate-200" data-theme="light">
                <div className="border p-5 bg-white w-1/2 m-5 rounded-xl shadow-md relative overflow-hidden">
                    <form onSubmit={handleFormSubmit} method="POST">
                        <div className="z-40 w-full space-y-3">
                            <div>
                                <h1 className="text-2xl font-semibold mb-2 z-40">
                                    New Reservation
                                </h1>
                                <hr className="mb-5" />
                            </div>
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
                            <div className="w-1/2">
                                <label htmlFor="">
                                    Nomer Telepon <br />
                                    <input
                                        type="text"
                                        name="no_hp"
                                        value={formData.no_hp}
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
                                            {Room[0].map((room) => {
                                                if (
                                                    !uniqueRoomTypes.has(
                                                        room.jenis_kamar
                                                    )
                                                ) {
                                                    uniqueRoomTypes.add(
                                                        <room className="jenis"></room>
                                                    );

                                                    return (
                                                        <option
                                                            key={`${room.nomor_kamar}-${room.jenis_kamar}`}
                                                            value={
                                                                room.jenis_kamar
                                                            }
                                                        >
                                                            {room.jenis_kamar}
                                                        </option>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </select>
                                    </label>
                                </div>
                                <div className="z-40">
                                    <h1>Nomor Kamar</h1>
                                    <label htmlFor="">
                                        <select
                                            name="roomNumber"
                                            value={
                                                formData.roomNumber == ""
                                                    ? Room[0].nomor_kamar
                                                    : formData.roomNumber
                                            }
                                            onChange={handleInputChange}
                                            className="w-full bg-slate-200 p-2 rounded-md"
                                        >
                                            {Room[1].map((room) => {
                                                if (
                                                    room.jenis_kamar ===
                                                        formData.roomType &&
                                                    room.status != "Booked"
                                                ) {
                                                    return (
                                                        <option
                                                            key={
                                                                room.nomor_kamar
                                                            }
                                                            value={`${room.nomor_kamar}`}
                                                            className=""
                                                        >
                                                            {`${room.nomor_kamar} - ${room.jenis_kamar}`}
                                                        </option>
                                                    );
                                                }
                                                return null;
                                            })}
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
                                onClick={() => {
                                    setshow(true);
                                    handleInputChange;
                                }}
                                type="button"
                                className="text-white hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-600 px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                            >
                                Tambahkan Data
                            </button>
                        </div>
                    </form>
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
                        <p>Make sure again the data is correct or not!!</p>
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
                        <h1 className="text-md font-semibold">Nomor Telepon</h1>
                        <p>{showdata ? formData.no_hp : null}</p>
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <h1 className="text-md font-semibold">
                            Room Reservased
                        </h1>
                        <p>
                            {showdata
                                ? `${formData.roomNumber} - ${formData.roomType}`
                                : null}
                        </p>
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
                        <h1 className="text-md font-semibold">
                            Total Payment{" "}
                        </h1>
                        {Room[1].map((room) => {
                                const startDateObj = new Date(formData.checkInDate);
                            const endDateObj = new Date(formData.checkOutDate);
                            const differenceInMilliseconds =
                                endDateObj - startDateObj;
                            const differenceInDays =
                                differenceInMilliseconds /
                                (1000 * 60 * 60 * 24);
                            if (formData.roomNumber == room.nomor_kamar) {
                                formData.harga =
                                    room.roomtype.harga * differenceInDays;
                                return (
                                    <p>{`Rp${
                                        showdata ? formData.harga : null
                                    }`}</p>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="pt-5">
                        <>
                            <AlertDialog.Root>
                                <AlertDialog.Trigger asChild>
                                    <button className="text-white hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-600 px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
                                        Confirm Reservation
                                    </button>
                                </AlertDialog.Trigger>
                                <AlertDialog.Portal>
                                    <AlertDialog.Overlay className="bg-black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
                                    <AlertDialog.Content
                                        data-theme="light"
                                        className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                                    >
                                        <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium z-50">
                                            Konfirmasi Pemesanan
                                        </AlertDialog.Title>
                                        <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal z-50">
                                            Pemesanan akan ditambahkan ke dalam
                                            database
                                        </AlertDialog.Description>
                                        <div className="flex justify-end gap-[25px] z-50">
                                            <AlertDialog.Cancel asChild>
                                                <button className="z-50 text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                                    Cancel
                                                </button>
                                            </AlertDialog.Cancel>
                                            <AlertDialog.Action asChild>
                                                <button
                                                    onClick={
                                                        handleConfirmSubmit
                                                    }
                                                    className="z-50 text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                                                >
                                                    Yes
                                                </button>
                                            </AlertDialog.Action>
                                        </div>
                                    </AlertDialog.Content>
                                </AlertDialog.Portal>
                            </AlertDialog.Root>
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}
