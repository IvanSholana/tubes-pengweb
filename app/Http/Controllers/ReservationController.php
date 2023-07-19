<?php

namespace App\Http\Controllers;

use App\Models\reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function insertdata(Request $request){
        $validatedData = $request->validate([
            'nik' => 'required|integer',
            'roomNumber' => 'required|integer',
            'checkInDate' => 'required|date',
            'checkOutDate' => 'required|date|after:checkInDate'
        ]);
        reservation::create($validatedData);
    }
}
