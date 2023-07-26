import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Inertia } from "@inertiajs/inertia";

export default function RoomPage({ room, roomtype }) {
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
                                        <label
                                            className="text-violet11 w-[100px] text-right text-[15px] font-semibold"
                                            htmlFor="name"
                                        >
                                            Nomor Kamar
                                        </label>
                                        <input
                                            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                            name="judul"
                                            // onChange={handleInputChange}
                                        />
                                    </fieldset>
                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                        <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                            Deskirpsi
                                        </label>
                                        <select name="jenisKamar" id="">
                                            <option value=""></option>
                                        </select>
                                    </fieldset>
                                    <fieldset className="mb-[15px] flex items-center gap-5 mt-5 ms-5">
                                        <input
                                            type="file"
                                            id="gambar"
                                            name="foto"
                                            accept="image/*"
                                            // onChange={handleInputChange}
                                        />
                                    </fieldset>
                                    <div className="mt-[25px] flex justify-end">
                                        <Dialog.Close asChild>
                                            <button
                                                // onClick={handleClick}
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
                                    Isikan judul dan deskripsi dari fasilitas
                                    baru yang akan ditambahkan
                                </Dialog.Description>
                                <form method="POST">
                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                        <label
                                            className="text-violet11 w-[100px] text-right text-[15px] font-semibold"
                                            htmlFor="name"
                                        >
                                            Nama Fasilitas
                                        </label>
                                        <input
                                            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                            name="judul"
                                            // onChange={handleInputChange}
                                        />
                                    </fieldset>
                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                        <label className="text-violet11 w-[100px] text-right text-[15px] font-semibold">
                                            Deskirpsi
                                        </label>
                                        <textarea
                                            name="deskripsi"
                                            id="description"
                                            cols="30"
                                            rows="10"
                                            // onChange={handleInputChange}
                                            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex  w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                        ></textarea>
                                    </fieldset>
                                    <fieldset className="mb-[15px] flex items-center gap-5 mt-5 ms-5">
                                        <input
                                            type="file"
                                            id="gambar"
                                            name="foto"
                                            accept="image/*"
                                            // onChange={handleInputChange}
                                        />
                                    </fieldset>
                                    <div className="mt-[25px] flex justify-end">
                                        <Dialog.Close asChild>
                                            <button
                                                // onClick={handleClick}
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
