import React from "react";
import AvatarDemo from "../../Components/Avatar";

export default function ChatCustomer({}) {
    return (
        <>
            <div className="flex space-x-5">
                <AvatarDemo />
                <h1 className="text-lg font-semibold">
                    Justin Temberley
                    <br />
                    <span className="text-sm text-slate-500 font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis eveniet obcaecati nihil, inventore excepturi
                        alias expedita commodi.
                    </span>
                </h1>
            </div>
        </>
    );
}
