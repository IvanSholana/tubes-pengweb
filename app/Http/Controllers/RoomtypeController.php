<?php

namespace App\Http\Controllers;

use App\Models\roomtype;
use Illuminate\Http\Request;

class RoomtypeController extends Controller
{
    public function createRoom(Request $request){
        $request->validate([
            "jenis" => "required",
            "harga" => "required",
            "kapasitas" => "required",
            "foto" => "required|mimes:jpeg,jpg,png"
        ]);

        $foto_file = $request->file('foto');
        $foto_extension = $foto_file->getClientOriginalExtension();
        $foto_name = date('ymdhis') . "." . $foto_extension;
        $foto_file->move(public_path('foto'), $foto_name);

        $dataInput = [
            'jenis_kamar' => $request->input('jenis'),
            'harga' => $request->input('harga'),
            'kapasitas' => $request->input('kapasitas'),
            'foto' => $foto_name
        ];
        roomtype::create($dataInput);
    }
}
