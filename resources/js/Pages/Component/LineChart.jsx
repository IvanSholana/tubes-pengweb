import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
);

const options = {
    responsive: true,
    plugins: { legend: true },
    scales: { y: { min: 3, max: 6 } },
};

function LineChart() {
    const data = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "Jumlah Reservasi",
                data: [3, 6, 9],
                backgroundColor: "aqua",
                borderColor: "black",
                pointBorderColor: "aqua",
            },
        ],
    };
    return (
        <>
            <Line data={data} options={options}></Line>
        </>
    );
}

export default LineChart;
