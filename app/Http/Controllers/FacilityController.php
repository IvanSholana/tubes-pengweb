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

    public function updateFacility(Request $request, $id)
    {
        $facility = facility::find($id);
        if ($facility) {
            if($request->input('judul') == null){
                $facility->judul = $facility->judul;
            }else{
                $facility->judul = $request->input('judul');
            }
            
            if($request->input('deskripsi') == null){
                $facility->deskripsi = $facility->deskripsi;
            }else{
                $facility->deskripsi = $request->input('deskripsi');
            }
    
            if ($request->hasFile('foto')) {
                $foto_file = $request->file('foto');
                $foto_extension = $foto_file->getClientOriginalExtension();
                $foto_name = date('ymdhis') . "." . $foto_extension;
                $foto_file->move(public_path('foto'), $foto_name);
                $facility->foto = $foto_name; 
            }
    
            $facility->save();
        }
    }

    public function deleteFacility($id){
        $facility = facility::find($id);
        if ($facility) {
            $facility->delete();
        }
    }
}
