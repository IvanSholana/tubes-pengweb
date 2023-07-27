import { React, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Inertia } from "@inertiajs/inertia";

export default function AccountManagement({ Account }) {
    console.log(Account);

    const [formFacility, setFormData] = useState({
        nama: "",
        email: "",
        posisi: "Resepsionis",
        password: "",
    });

    const handleFormSubmit = () => {
        Inertia.post("/facility/create", formFacility, {
            onSuccess: () => {
                Inertia.visit("/facility");
            },
            onError: (errors) => {
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
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleClick = (event) => {
        event.preventDefault();
        handleFormSubmit();
    };

    return (
        <>
            <div className="p-5">
                <div id="Active-Account">
                    <h1 className="text-2xl pb-1">Active Account</h1>
                    <hr className="border-1 w-1/3 border-slate-800" />
                    {Account[0].map((account) => (
                        <div
                            className="bg-white w-1/5 my-5 py-5 rounded-xl shadow-md px-5"
                            key={account.id}
                        >
                            <div className="space-y-1">
                                <p>Nama Lengkap</p>
                                <input
                                    type="text"
                                    className="bg-slate-100 py-1 px-1"
                                    disabled
                                    value={account.name}
                                    key={account.name}
                                />
                                <p>Email</p>
                                <input
                                    type="text"
                                    className="bg-slate-100 py-1 px-1"
                                    disabled
                                    value={account.email}
                                    key={account.email}
                                />
                                <p>Posisi</p>
                                <input
                                    type="text"
                                    className="bg-slate-100 py-1 px-1"
                                    disabled
                                    value={account.posisi}
                                    key={account.posisi}
                                />
                            </div>
                            <div>
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <button className="mt-5 -mb-12 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 text-white px-[15px] font-medium leading-none shadow-md focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                                            Aksi
                                        </button>
                                    </Dialog.Trigger>
                                    <Dialog.Portal>
                                        <Dialog.Overlay className="bg-black data-[state=open]:animate-overlayShow fixed inset-0 bg-opacity-50" />
                                        <Dialog.Content
                                            data-theme="light"
                                            className=" data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
                                        >
                                            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                                                Data Pegawai
                                            </Dialog.Title>
                                            <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                                                Berhati hati dalam mengedit dan
                                                menghapus data
                                            </Dialog.Description>
                                            <form
                                                method="POST"
                                                onSubmit={handleFormSubmit}
                                            >
                                                <fieldset className="mb-[15px] flex items-center gap-5">
                                                    <label
                                                        className="text-violet11 w-[100px] text-right text-[15px] font-semibold"
                                                        htmlFor="nama"
                                                    >
                                                        Nama Lengkap
                                                    </label>
                                                    <input
                                                        className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                                        name="nama"
                                                        value={
                                                            formFacility.nama
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        placeholder={
                                                            account.name
                                                        }
                                                    />
                                                </fieldset>
                                                <fieldset className="mb-[15px] flex items-center gap-5">
                                                    <label
                                                        className="text-violet11 w-[100px] text-right text-[15px] font-semibold"
                                                        htmlFor="email"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                                        name="email"
                                                        value={
                                                            formFacility.email
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        placeholder={
                                                            account.email
                                                        }
                                                    />
                                                </fieldset>
                                                <fieldset className="mb-[15px] flex items-center gap-5">
                                                    <label
                                                        className="text-violet11 w-[100px] text-right text-[15px] font-semibold"
                                                        htmlFor="posisi"
                                                    >
                                                        Posisi
                                                    </label>
                                                    <select
                                                        className="bg-slate-200 py-1 px-5 rounded-md"
                                                        name="posisi"
                                                        id=""
                                                        value={
                                                            formFacility.posisi
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    >
                                                        <option value="Resepsionis">
                                                            Resepsionis
                                                        </option>
                                                        <option value="Operator">
                                                            Operator
                                                        </option>
                                                    </select>
                                                </fieldset>
                                                <div className="mt-[25px] flex justify-end">
                                                    <Dialog.Close asChild>
                                                        <div className="space-x-5">
                                                            <button className="bg-red-500 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                                                                Delete Data
                                                            </button>
                                                            <button
                                                                onClick={
                                                                    handleClick
                                                                }
                                                                className="bg-slate-900 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                                                            >
                                                                Save Data
                                                            </button>
                                                        </div>
                                                    </Dialog.Close>
                                                </div>
                                            </form>
                                            <Dialog.Close asChild>
                                                <button
                                                    className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                                    aria-label="Close"
                                                >
                                                    x
                                                </button>
                                            </Dialog.Close>
                                        </Dialog.Content>
                                    </Dialog.Portal>
                                </Dialog.Root>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="Waited">
                    <h1 className="text-2xl pb-1">Waiting for Confirmation</h1>
                    <hr className="border-1 w-1/3 border-slate-800" />
                    <div className="bg-white w-1/4 my-5 py-5 rounded-xl shadow-md">
                        <table className="mx-auto">
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>Ivan Sholana</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td>ivansholana@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Jabatan</td>
                                    <td>:</td>
                                    <td>Resepsionis</td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td>:</td>
                                    <td>12345</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
