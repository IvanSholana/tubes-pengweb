<?php

namespace App\Http\Controllers;


use App\Models\customer;

use App\Models\hotelroom;
use App\Models\reservation;
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
}
