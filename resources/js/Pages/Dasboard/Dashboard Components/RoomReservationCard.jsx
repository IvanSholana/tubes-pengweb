import React from "react";

export default function RoomReservationCard(DataReservation) {
    let id = DataReservation.Data.id_reservasi;
    console.log(id);

    return (
        <>
            <button>
                <a href={`/reservation/detail/${id}`}>
                    {/* CARD RESERVATIOM START */}
                    <div className="flex space-x-3 mb-5">
                        {/* ROOM TYPE */}
                        <div
                            id="room-type"
                            className="flex w-1/2 space-x-3 w-40  "
                        >
                            <div className="w-1/2  flex">
                                <img
                                    className="rounded-xl h-fit self-center"
                                    src={`/foto/${DataReservation.Data.hotel_room.room_type.foto}`}
                                />
                            </div>
                            <div className="w-1/2">
                                <h1 className="text-md font-semibold text-start">
                                    {
                                        DataReservation.Data.hotel_room
                                            .room_type.jenis_kamar
                                    }
                                    <br />
                                    <span className="text-sm font-normal">
                                        Room Type
                                    </span>
                                </h1>
                            </div>
                        </div>
                        {/* ROOM NUMBER */}
                        <div id="room-number" className="flex">
                            <h1 className="text-md font-semibold self-center text-start">
                                #{DataReservation.Data.hotel_room.nomor_kamar}{" "}
                                <br />
                                <span className="text-sm font-normal">
                                    Room Number
                                </span>
                            </h1>
                        </div>
                        <div id="check-in" className="flex p-1 ">
                            <h1 className="text-md font-semibold self-center">
                                {DataReservation.Data.check_in} <br />
                                <span className="font-normal">Check In</span>
                            </h1>
                        </div>
                        <div id="check-out" className="flex p-1">
                            <h1 className="text-md font-semibold self-center">
                                {DataReservation.Data.check_out} <br />
                                <span className="text-sm font-normal">
                                    Check Out
                                </span>
                            </h1>
                        </div>
                    </div>
                </a>
                {/* CARD RESERVATIOM END */}
            </button>
        </>
    );
}
