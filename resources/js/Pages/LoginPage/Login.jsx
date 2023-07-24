import { React, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Loginpage() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const ConfirmLogin = () => {
        // Mengirim data ke rute Laravel menggunakan inertia.post()
        Inertia.post("/loginprogress", formData, {
            onSuccess: () => {
                // Redirect ke halaman lain jika diperlukan
                Inertia.visit("/dashboard");
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

    const handleClick = (event) => {
        event.preventDefault();
        // Kirim data ke server saat tombol LOGIN ditekan
        ConfirmLogin();
    };

    return (
        <>
            <div data-theme="light" className="h-screen p-5 bg-slate-300">
                <div className="flex w-2/3 border mx-auto overflow-hidden h-full shadow-md p-5 bg-white">
                    <div
                        className="border w-2/3 m-5 rounded-bl-3xl rounded-tr-3xl bg-cover"
                        id="LoginImg"
                        style={{
                            backgroundImage:
                                "url(https://cdn.wallpapersafari.com/46/38/j46uNT.jpg)",
                        }}
                    ></div>
                    <div id="LoginForm" className="w-1/2 p-10 flex">
                        <div id="header" className="w-full self-center">
                            <h1 className="font-semibold text-3xl text-center">
                                Hello Again!
                            </h1>
                            <p className=" text-sm mt-1 mb-1 text-slate-500 text-center">
                                Have a nice day, and have fun while working! 😘
                            </p>
                            <hr />
                            <div>
                                <form onSubmit={ConfirmLogin}>
                                    <div className="mb-5 mt-5">
                                        <label
                                            htmlFor=""
                                            className=" font-semibold"
                                        >
                                            Username
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="border w-full rounded-md px-1 text-sm bg-slate-200 py-2 mt-2"
                                            placeholder="Enter your username"
                                            name="username"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor=""
                                            className=" font-semibold"
                                        >
                                            Password
                                        </label>
                                        <br />
                                        <input
                                            type="password"
                                            className="border w-full rounded-md px-1 text-sm bg-slate-200 py-2 mt-2"
                                            placeholder="Enter your password"
                                            name="password"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <button
                                        onClick={handleClick}
                                        className=" bg-slate-800 text-white w-full py-2 mt-10 rounded-md"
                                    >
                                        LOGIN
                                    </button>
                                    <p className="mt-2">
                                        Belum punya akun?{" "}
                                        <a
                                            href="#"
                                            className="underline hover:text-cyan-500"
                                        >
                                            Register
                                        </a>{" "}
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
