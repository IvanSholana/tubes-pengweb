<?php

namespace App\Http\Controllers;

use App\Models\facility;
use Illuminate\Http\Request;

class FacilityController extends Controller
{
    public function createFacility(Request $request)
    {
        $request->validate([
            "judul" => "required",
            "deskripsi" => "required",
            "foto" => "required|mimes:jpeg,jpg,png"
        ]);

        $foto_file = $request->file('foto');
        $foto_extension = $foto_file->getClientOriginalExtension();
        $foto_name = date('ymdhis') . "." . $foto_extension;
        $foto_file->move(public_path('foto'), $foto_name);

        $dataInput = [
            'judul' => $request->input('judul'),
            'deskripsi' => $request->input('deskripsi'),
            'foto' => $foto_name
        ];
        facility::create($dataInput);
    }
}
