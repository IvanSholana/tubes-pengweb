<?php

namespace App\Http\Controllers;


use App\Models\customer;

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

        $dataReservation = [
            'no_nik' => $request->input('nik'),
            'total_harga' => $request->input('harga'),
            'check_in' => $request->input('checkInDate'),
            'check_out' => $request->input('checkOutDate'),
            'id_kamar' => $request->input('roomNumber'),
        ];

        customer::create($dataCustomer);
        reservation::create($dataReservation);
    }
}
