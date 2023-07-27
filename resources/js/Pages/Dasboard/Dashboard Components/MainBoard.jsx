import RoomReservationCard from "./RoomReservationCard";
import ChatCustomer from "./CustomerChatCard";
import LineChart from "../../Components/LineChart";
import { PieChart } from "../../Components/PieChart";

export default function MainBoard(props) {
    return (
        <>
            {/* MAIN BOARD */}
            <div id="main-dashboard" className="flex ">
                {/* BOOKING BOARD */}
                <div
                    id="booking"
                    className="border p-5 space-y-5 rounded-3xl m-5 bg-white w-1/2  shadow-sm overflow-hidden box-border h-96"
                >
                    {/* HEADER */}
                    <div id="title-booking">
                        <h1 className="text-2xl font-semibold">Booking</h1>
                        <p className="text-base">
                            Information about reservation
                        </p>
                        <hr />
                    </div>
                    {/* INFORMATION */}
                    <div id="information" className="flex gap-5 w-full">
                        <div
                            id="booking"
                            className=" bg-green-300 p-5 rounded-xl w-2/6 shadow-md"
                        >
                            <p>Total Booking</p>
                            <h1 className="text-4xl font-semibold">
                                {props.AllData[1]}
                            </h1>
                        </div>
                        <div
                            id="free-rooms"
                            className=" bg-sky-300 p-5 rounded-xl w-2/6 shadow-md"
                        >
                            <p>Free Rooms</p>
                            <h1 className="text-4xl font-semibold">
                                {props.AllData[2]}
                            </h1>
                        </div>
                    </div>
                    {/* TABLE RESERVATION ROOM */}
                    <div id="table-room" className="overflow-auto h-36">
                        {props.AllData[0].map((reservation) => (
                            <RoomReservationCard Data={reservation} />
                        ))}
                    </div>
                </div>
                {/* CUSTOMER CHAT */}
                <div
                    id="customer-chat"
                    className="bg-white w-1/2 m-5 p-5 rounded-3xl space-y-10 shadow-sm h-96"
                >
                    {/* TITLE CHAT */}
                    <div className="-mb-5">
                        <h1 className="text-2xl font-semibold mb-1">
                            Customer Chat
                        </h1>
                        <hr />
                    </div>
                    {/* CHAT CARD */}
                    <div className="overflow-auto h-5/6 space-y-5">
                        <ChatCustomer />
                        <ChatCustomer />
                        <ChatCustomer />
                        <ChatCustomer />
                        <ChatCustomer />
                    </div>
                </div>
            </div>
            {/* CHART */}
            <div
                id="navbar-chart"
                className="bg-white  m-5 mt-0 p-5 rounded-3xl h-fit space-y-5 "
            >
                <h1 className="text-2xl font-semibo">Diagram</h1>
                <div className="flex space-x-5">
                    <div className="w-1/2 self-center h-80 ">
                        <LineChart />
                    </div>
                    <div className="w-1/2 justify-center flex  h-56">
                        <PieChart />
                    </div>
                </div>
            </div>
        </>
    );
}
