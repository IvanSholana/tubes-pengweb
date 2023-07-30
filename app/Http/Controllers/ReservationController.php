<?php

namespace App\Http\Controllers;


use App\Models\customer;

use App\Models\hotelroom;
use App\Models\reservation;
use App\Models\UserPostView;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function insertdata(Request $request)
    {
        $dataCustomer = [
            'nama_pelanggan' => $request->input('name'),
            'no_nik' => $request->input('nik'),
            'no_telepon' => $request->input('no_hp'),
        ];
        $customer = customer::firstOrCreate(['no_nik' => $request->input('nik')], $dataCustomer);
        $dataReservation = [
            'no_nik' => $request->input('nik'),
            'total_harga' => $request->input('harga'),
            'check_in' => $request->input('checkInDate'),
            'check_out' => $request->input('checkOutDate'),
            'nomor_kamar' => $request->input('roomNumber'),
        ];

        $room = HotelRoom::find($request->input('roomNumber'));
        // Periksa apakah kamar ditemukan sebelum melakukan update statusnya
        if ($room) {
            $room->status = "Booked";
            $room->save();
        }
        reservation::create($dataReservation);
    }

    public function ShowDetailReservation($id)
{
    
    $reservation = UserPostView::find($id);

    if ($reservation) {
        echo "Reservation ID: " . $reservation->id . "<br>";
        echo "NIK: " . $reservation->no_nik . "<br>";
        echo "Nomor Kamar: " . $reservation->nomor_kamar . "<br>";
        echo "Jenis Kamar: " . $reservation->jenis . "<br>";
        echo "Check-in: " . $reservation->check_in . "<br>";
        echo "Check-out: " . $reservation->check_out . "<br>";
        echo "Total Harga: " . $reservation->total_harga . "<br><br>";
    } else {
        echo "Data not found";
    }
}
}
