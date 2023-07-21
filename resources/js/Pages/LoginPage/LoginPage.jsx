import React from "react";

export default function Loginpage() {
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
                            <h1 className="font-semibold text-3xl">
                                Login Page
                            </h1>
                            <p className=" text-sm mt-1 mb-1 text-slate-500">
                                Please input your data account!
                            </p>
                            <hr />
                            <div id="form" className="">
                                <form action="">
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
                                            className="border w-full rounded-md p-1 text-sm"
                                            placeholder="Enter your username"
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
                                            className="border w-full rounded-md p-1 text-sm"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <button className=" bg-slate-800 text-white w-full py-1 mt-5 rounded-md">
                                        LOGIN
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
