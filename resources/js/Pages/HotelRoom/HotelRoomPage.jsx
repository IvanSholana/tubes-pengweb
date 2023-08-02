import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Inertia } from "@inertiajs/inertia";

export default function RoomPage({ Room }) {
    const [typeRoom, setFormData] = useState({
        jenis: "",
        harga: 0,
        kapasitas: 0,
        foto: null,
    });

    const [formRoom, setRoomData] = useState({
        nomor_kamar: 0,
        jenis_kamar: "",
        status: "Available",
    });

    const handleFormSubmit = () => {
        // Mengirim data ke rute Laravel menggunakan inertia.post()
        Inertia.post("/hotelroom/create", typeRoom, {
            onSuccess: () => {
                // Redirect ke halaman lain jika diperlukan
                Inertia.visit("/hotelroom");
            },
            onError: (errors) => {
                // Penanganan kesalahan jika terjadi
                console.error(errors);
            },
        });
    };

    const handleFormSubmit2 = () => {
        Inertia.post("/hotelroom/createroom", formRoom, {
            onSuccess: () => {
                // Redirect ke halaman lain jika diperlukan
                Inertia.visit("/hotelroom");
            },
            onError: (errors) => {
                // Penanganan kesalahan jika terjadi
                console.error(errors);
            },
        });
    };

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        if (type === "file") {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: event.target.files[0],
            }));
        } else {
            // For other inputs (text, textarea, etc.)
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleInputChange2 = (event) => {
        const { name, value } = event.target;
        setRoomData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleClick = (event) => {
        event.preventDefault();
        handleFormSubmit();
    };

    const handleClick2 = (event) => {
        event.preventDefault();
        handleFormSubmit2();
    };

    // Update Kamar
    const [id, setId] = useState(0);

    const handleUpdateRoom = (event) => {
        const { name, value } = event.target;
        setRoomData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFormUpdateRoom = () => {
        Inertia.post(`/hotelroom/update/${id}`, formRoom, {
            onSuccess: () => {
                // Redirect ke halaman lain jika diperlukan
                Inertia.visit("/hotelroom");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    const handleClickUpdate = (event) => {
        event.preventDefault();
        handleFormUpdateRoom();
    };

    return (
        <>
            <div className="w-full p-5 mx-auto">
                <div className="border space-x-5">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button className="mt-5 -mb-12 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 text-white px-[15px] font-medium leading-none shadow-md focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                                Tambah Kamar
                            </button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="bg-black data-[state=open]:animate-overlayShow fixed inset-0 bg-opacity-50" />
                            <Dialog.Content
                                data-theme="light"
                                className=" data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                            >
                                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                                    Tambah Kamar
                                </Dialog.Title>
                                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                                    Isikan data kamar baru dengan benar
                                </Dialog.Description>
                                <form method="POST">
                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                        <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                            Nomor Kamar
                                        </label>
                                        <input
                                            className="focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                            name="nomor_kamar"
                                            onChange={handleInputChange2}
                                        />
                                    </fieldset>
                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                        <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                            Jenis Kamar
                                        </label>
                                        <select
                                            name="jenis_kamar"
                                            className="bg-slate-200 py-1 px-2"
                                            onChange={handleInputChange2}
                                        >
                                            {Room[0].map((room) => (
                                                <option
                                                    key={room.jenis_kamar}
                                                    value={room.jenis_kamar}
                                                >
                                                    {room.jenis_kamar}
                                                </option>
                                            ))}
                                        </select>
                                    </fieldset>
                                    <div className="mt-[25px] flex justify-end">
                                        <Dialog.Close asChild>
                                            <button
                                                onClick={handleClick2}
                                                className=" bg-slate-900 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                                            >
                                                Save Data
                                            </button>
                                        </Dialog.Close>
                                    </div>
                                </form>
                                <Dialog.Close asChild>
                                    <button
                                        className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                        aria-label="Close"
                                    ></button>
                                </Dialog.Close>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                    {/* JENIS KAMAR */}
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button className=" ms-3 mt-5 -mb-12 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 text-white px-[15px] font-medium leading-none shadow-md focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                                Tambah Jenis Kamar
                            </button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="bg-black data-[state=open]:animate-overlayShow fixed inset-0 bg-opacity-50" />
                            <Dialog.Content
                                data-theme="light"
                                className=" data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                            >
                                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                                    Tambah Jenis Kamar
                                </Dialog.Title>
                                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                                    Isikan jenis dan detail per jenis kamar
                                    dengan baik dan benar
                                </Dialog.Description>
                                <form method="POST" onSubmit={handleFormSubmit}>
                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                        <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                            Jenis Kamar
                                        </label>
                                        <input
                                            type="text"
                                            name="jenis"
                                            id="jenis"
                                            className="px-2 py-1 border rouded-md border-black"
                                            onChange={handleInputChange}
                                        />
                                    </fieldset>
                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                        <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                            Harga/Malam
                                        </label>
                                        <input
                                            name="harga"
                                            type="number"
                                            onChange={handleInputChange}
                                            className="focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                        />
                                    </fieldset>
                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                        <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                            Kapasitas Kamar
                                        </label>
                                        <input
                                            name="kapasitas"
                                            type="number"
                                            onChange={handleInputChange}
                                            className="focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                        />
                                    </fieldset>
                                    <fieldset className="mb-[15px] flex items-center gap-5 mt-5 ms-5">
                                        <input
                                            type="file"
                                            id="gambar"
                                            name="foto"
                                            accept="image/*"
                                            onChange={handleInputChange}
                                        />
                                    </fieldset>
                                    <div className="mt-[25px] flex justify-end">
                                        <Dialog.Close asChild>
                                            <button
                                                onClick={handleClick}
                                                className=" bg-slate-900 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                                            >
                                                Save Data
                                            </button>
                                        </Dialog.Close>
                                    </div>
                                </form>
                                <Dialog.Close asChild>
                                    <button
                                        className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                        aria-label="Close"
                                    ></button>
                                </Dialog.Close>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                    {/*  */}
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
                            {Room[1].map((room) => (
                                <tr
                                    key={room.nomor_kamar}
                                    className="text-center border bg-white"
                                >
                                    <td>
                                        <Dialog.Root>
                                            <Dialog.Trigger asChild>
                                                <button
                                                    onClick={() => {
                                                        setId(
                                                            room.nomor_kamar_id
                                                        );
                                                    }}
                                                >
                                                    {room.nomor_kamar}
                                                </button>
                                            </Dialog.Trigger>
                                            <Dialog.Portal>
                                                <Dialog.Overlay className="bg-black data-[state=open]:animate-overlayShow fixed inset-0 bg-opacity-50" />
                                                <Dialog.Content
                                                    data-theme="light"
                                                    className=" data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                                                >
                                                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                                                        Edit Kamar
                                                    </Dialog.Title>
                                                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                                                        Isikan data kamar dengan
                                                        benar
                                                    </Dialog.Description>
                                                    <form method="POST">
                                                        <fieldset className="mb-[15px] flex items-center gap-5">
                                                            <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                                                Nomor Kamar
                                                            </label>
                                                            <input
                                                                className="focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                                                name="nomor_kamar"
                                                                onChange={
                                                                    handleUpdateRoom
                                                                }
                                                                placeholder={
                                                                    room.nomor_kamar
                                                                }
                                                            />
                                                        </fieldset>
                                                        <fieldset className="mb-[15px] flex items-center gap-5">
                                                            <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                                                Jenis Kamar
                                                            </label>
                                                            <select
                                                                name="jenis_kamar"
                                                                className="bg-slate-200 py-1 px-2"
                                                                onChange={
                                                                    handleUpdateRoom
                                                                }
                                                            >
                                                                {Room[0].map(
                                                                    (room) => (
                                                                        <option
                                                                            key={
                                                                                room.jenis_kamar
                                                                            }
                                                                            value={
                                                                                room.jenis_kamar
                                                                            }
                                                                        >
                                                                            {
                                                                                room.jenis_kamar
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        </fieldset>
                                                        <div className="mt-[25px] flex justify-end">
                                                            <Dialog.Close
                                                                asChild
                                                            >
                                                                <button
                                                                    onClick={
                                                                        handleClickUpdate
                                                                    }
                                                                    className=" bg-slate-900 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                                                                >
                                                                    Save Data
                                                                </button>
                                                            </Dialog.Close>
                                                        </div>
                                                    </form>
                                                    <Dialog.Close asChild>
                                                        <button
                                                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                                            aria-label="Close"
                                                        ></button>
                                                    </Dialog.Close>
                                                </Dialog.Content>
                                            </Dialog.Portal>
                                        </Dialog.Root>
                                    </td>
                                    <td>{room.jenis_kamar}</td>
                                    <td>{room.roomtype.kapasitas}</td>
                                    <td>Rp{room.roomtype.harga}</td>
                                    <td>
                                        {room.status == "Available" ? (
                                            <div className="bg-green-700 text-white m-2 py-1 rounded-md">
                                                Available
                                            </div>
                                        ) : (
                                            <div className="bg-red-700 text-white m-2 py-1 rounded-md">
                                                Booked
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
