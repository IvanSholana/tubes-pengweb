<?php

namespace App\Http\Controllers;

use App\Models\hotelroom;
use Illuminate\Http\Request;

class HotelroomController extends Controller
{
    public function createRoom(Request $request){
        $request->validate([
            "nomor_kamar" => "required",
            "jenis_kamar" => "required",
            'status' => "required"
        ]);

        $dataInput = [
            'nomor_kamar' => $request->input('nomor_kamar'),
            'jenis_kamar' => $request->input('jenis_kamar'),
            'status' => $request->input('status')
        ];

        hotelroom::create($dataInput);
    }
}
