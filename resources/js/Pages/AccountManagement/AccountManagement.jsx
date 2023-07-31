import { React, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Inertia } from "@inertiajs/inertia";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export default function AccountManagement({ Account }) {
    const [id, setId] = useState(0);

    const [accountFormUpdate, setFormDataUpdate] = useState({
        name: "",
        email: "",
        posisi: "Resepsionis",
    });

    const [accountFormSubmit, setFormDataSubmit] = useState({
        name: "",
        email: "",
        password: "",
        posisi: "Resepsionis",
    });

    const handleFormSubmitUpdate = () => {
        Inertia.post(`/account/update/${id}`, accountFormUpdate, {
            onSuccess: () => {
                Inertia.visit("/account");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    const handleFormSubmit = () => {
        Inertia.post(`/account/addaccount`, accountFormSubmit, {
            onSuccess: () => {
                Inertia.visit("/account");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    const handleDeleteData = () => {
        Inertia.post(`/account/delete/${id}`, {
            onSuccess: () => {
                Inertia.visit("/account");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormDataUpdate((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleInputChangeSubmit = (SubmitValue) => {
        const { NameInput, EmailInput, PasswordInput, PosisiInput } =
            SubmitValue;
        setFormDataSubmit((prevFormData) => ({
            ...prevFormData,
            name: NameInput,
            email: EmailInput,
            password: PasswordInput,
            posisi: PosisiInput,
        }));
    };

    const handleClickSubmit = (event) => {
        event.preventDefault();
        handleFormSubmit();
    };

    const handleClickUpdate = (event) => {
        event.preventDefault();
        handleFormSubmitUpdate();
    };

    const updateId = (AccountId) => {
        setId(AccountId);
    };

    return (
        <>
            <div className="p-5 bg-slate-200 mb-20" data-theme="light">
                <div id="Active-Account">
                    <h1 className="text-2xl pb-1">Active Account</h1>
                    <hr className="border-1 w-1/3 border-slate-800" />

                    <div className="flex space-x-5">
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
                                            <button
                                                className="mt-5 -mb-12 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 text-white px-[15px] font-medium leading-none shadow-md focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                                                onClick={() =>
                                                    updateId(account.id)
                                                }
                                            >
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
                                                    Berhati hati dalam mengedit
                                                    dan menghapus data
                                                </Dialog.Description>
                                                <form
                                                    method="POST"
                                                    onSubmit={
                                                        handleFormSubmitUpdate
                                                    }
                                                >
                                                    <fieldset className="mb-[15px] flex items-center gap-5">
                                                        <label
                                                            className="text-violet11 w-[100px] text-right text-[15px] font-semibold"
                                                            htmlFor="name"
                                                        >
                                                            Nama Lengkap
                                                        </label>
                                                        <input
                                                            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                                            name="name"
                                                            value={
                                                                accountFormUpdate.name
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
                                                                accountFormUpdate.email
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
                                                                accountFormUpdate.posisi
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
                                                                <button
                                                                    onClick={
                                                                        handleDeleteData
                                                                    }
                                                                    className="bg-red-500 text-white text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                                                                >
                                                                    Delete Data
                                                                </button>
                                                                <button
                                                                    className="mt-5 -mb-12 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-800 text-white px-[15px] font-medium leading-none shadow-md focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                                                                    onClick={
                                                                        handleClickUpdate
                                                                    }
                                                                >
                                                                    Update Data
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
                </div>
                <div id="Waited">
                    <h1 className="text-2xl pb-1">Waiting for Confirmation</h1>
                    <hr className="border-1 w-1/3 border-slate-800" />
                    <form action="" onSubmit={handleFormSubmit}>
                        <div className="flex space-x-5">
                            {Account[1].map((account) => (
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
                                            name="name"
                                            value={account.name}
                                            key={account.name}
                                        />
                                        <p>Email</p>
                                        <input
                                            type="text"
                                            className="bg-slate-100 py-1 px-1"
                                            disabled
                                            name="email"
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
                                    <div className="mt-5">
                                        <AlertDialog.Root>
                                            <AlertDialog.Trigger asChild>
                                                <button
                                                    onClick={handleInputChangeSubmit.bind(
                                                        null,
                                                        {
                                                            NameInput:
                                                                account.name,
                                                            EmailInput:
                                                                account.email,
                                                            PasswordInput:
                                                                account.password,
                                                            PosisiInput:
                                                                account.posisi,
                                                        }
                                                    )}
                                                    className="text-white hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-slate-600 px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                                                >
                                                    Confirm Account
                                                </button>
                                            </AlertDialog.Trigger>
                                            <AlertDialog.Portal>
                                                <AlertDialog.Overlay className="bg-black opacity-50 data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
                                                <AlertDialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                                                    <AlertDialog.Title className=" text-black m-0 text-[17px] font-medium z-50">
                                                        Konfirmasi Akun
                                                    </AlertDialog.Title>
                                                    <AlertDialog.Description className="text-black mt-4 mb-5 text-[15px] leading-normal z-50">
                                                        Akun akan ditambahkan ke
                                                        dalam database dan dapat
                                                        mengakses halaman
                                                    </AlertDialog.Description>
                                                    <div className="flex justify-end gap-[25px] z-50">
                                                        <AlertDialog.Cancel
                                                            asChild
                                                        >
                                                            <button className="z-50 text-white bg-red-500  bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                                                                Cancel
                                                            </button>
                                                        </AlertDialog.Cancel>
                                                        <AlertDialog.Action
                                                            asChild
                                                        >
                                                            <button
                                                                onClick={
                                                                    handleClickSubmit
                                                                }
                                                                type="submit"
                                                                className="z-50 bg-green-500 text-white bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                                                            >
                                                                <a href="create">
                                                                    Yes
                                                                </a>
                                                            </button>
                                                        </AlertDialog.Action>
                                                    </div>
                                                </AlertDialog.Content>
                                            </AlertDialog.Portal>
                                        </AlertDialog.Root>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
