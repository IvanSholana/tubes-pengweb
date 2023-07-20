import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const DialogDemo = () => (
    <div className="p-5">
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 text-white px-[15px] font-medium leading-none shadow-md focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                    Tambah Fasilitas
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className=" data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <div className=" opacity-100">
                        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                            Tambah Fasilitas
                        </Dialog.Title>
                        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                            Isikan judul dan deskripsi dari fasilitas baru yang
                            akan ditambahkan
                        </Dialog.Description>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label
                                className="text-violet11 w-[100px] text-right text-[15px]"
                                htmlFor="name"
                            >
                                Nama Fasilitas
                            </label>
                            <input
                                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                id="name"
                            />
                        </fieldset>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label className="text-violet11 w-[100px] text-right text-[15px] ">
                                Deskirpsi
                            </label>
                            <textarea
                                name=""
                                id="description"
                                cols="30"
                                rows="10"
                                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex  w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                            ></textarea>
                        </fieldset>
                        <div className="mt-[25px] flex justify-end">
                            <Dialog.Close asChild>
                                <button className=" bg-slate-900 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                                    Save changes
                                </button>
                            </Dialog.Close>
                        </div>
                        <Dialog.Close asChild>
                            <button
                                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                aria-label="Close"
                            ></button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </div>
);

export default DialogDemo;
