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

    public function ShowDetailReservation($id){
    
    $reservation = UserPostView::find($id);
    return inertia('Main/Dashboard',['page'=>'ReservationDetail','DetailReservation' => $reservation]);
    }

    public function ReservationUpdate(Request $request, $id){
        $reservation = UserPostView::find($id);
        // if($request->has('no_nik')){
        //     $customer = customer::where('no_nik',$reservation->no_nik);
        // }
        // if($request->has('nomor_kamar')){
        //     $hotelroom = hotelroom::where('nomor_kamar',$reservation->nomor_kamar);
        // }
        dd($request->all());
        
    }
}
