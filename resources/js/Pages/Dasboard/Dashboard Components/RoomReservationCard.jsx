import React from "react";

export default function RoomReservationCard(DataReservation) {
    console.log(DataReservation.Data.hotel_room.room_type.jenis);
    return (
        <>
            {/* CARD RESERVATIOM START */}
            <div className="flex space-x-3  mb-5">
                {/* ROOM TYPE */}
                <div id="room-type" className="flex space-x-3 p-1 ">
                    <div>
                        <img
                            src=
                            alt=""
                            className=" w-20 rounded-xl"
                        />
                    </div>
                    <h1 className="text-md font-semibold">
                        {DataReservation.Data.hotel_room.room_type.jenis}
                        <br />
                        <span className="text-sm font-normal">Room Type</span>
                    </h1>
                </div>
                {/* ROOM NUMBER */}
                <div id="room-number" className="flex ">
                    <h1 className="text-md font-semibold self-center">
                        #101 <br />
                        <span className="text-sm font-normal">Room Number</span>
                    </h1>
                </div>
                <div id="check-in" className="flex p-1">
                    <h1 className="text-md font-semibold self-center">
                        {DataReservation.Data.check_in} <br />
                        <span className="font-normal">Check In</span>
                    </h1>
                </div>
                <div id="check-out" className="flex p-1">
                    <h1 className="text-md font-semibold self-center">
                        {DataReservation.Data.check_out} <br />
                        <span className="text-sm font-normal">Check Out</span>
                    </h1>
                </div>
            </div>
            {/* CARD RESERVATIOM END */}
        </>
    );
}
