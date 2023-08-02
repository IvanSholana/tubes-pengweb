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

    public function updateRoom(Request $request, $id){
        $hotelroom = hotelroom::find($id);
        if($request->nomor_kamar == 0){
            $hotelroom->nomor_kamar = $hotelroom->nomor_kamar;
        }else{
            $hotelroom->nomor_kamar = $request->nomor_kamar;
        }
        if($request->jenis_kamar == ""){
            $hotelroom->jenis_kamar = $hotelroom->jenis_kamar;
        }else{
            $hotelroom->jenis_kamar = $request->jenis_kamar;
        }

        $hotelroom->save();
    }

    public function deleteRoom($id){
        $hotelroom = hotelroom::find($id);
        if($hotelroom && $hotelroom->status != "Booked"){
            $hotelroom->delete();
        }else{
            return redirect()->route('hotelroom')->with('error', 'Maaf, kamar tidak dapat dihapus.');
        }
    }
}
