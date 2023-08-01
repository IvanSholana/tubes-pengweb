<?php

namespace App\Http\Controllers;


use DateTime;

use App\Models\customer;
use App\Models\hotelroom;
use App\Models\reservation;
use App\Models\UserPostView;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

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
        
        $room = HotelRoom::where('nomor_kamar', $request->input('roomNumber'))->first();

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
        $customer = customer::where('no_nik',$reservation->no_nik)->first();;
        
        // Customer
        if($customer){
            $customer->no_nik = $request->input('no_nik');
            $customer->nama_pelanggan = $request->input('name');
            $customer->save();
        }
        
        // Reservation
        $reservation->nama_pelanggan = $request->input('name');
        $reservation->no_nik = $request->input('no_nik');
        
        // NOMOR KAMAR
        $reservation->nomor_kamar = $request->input('nomor_kamar');
        // CHECK IN & CHECK OUT
        $reservation->check_in = $request->input('check_in');
        $reservation->check_out = $request->input('check_out');
        // TOTAL HARGA
        $checkInDateTime = new DateTime($request->input('check_in'));
        $checkOutDateTime = new DateTime($request->input('check_out'));
        $selisihHari = $checkInDateTime->diff($checkOutDateTime)->days;
        $reservation->total_harga = $reservation->harga * $selisihHari;

        $reservation->save();
    }

    public function DeleteActiveReservation($id){
        $account = reservation::where('id_reservasi',$id)->first();
        if ($account) {
            $account->delete();
        }
        return Redirect::to('/dashboard');
    }
}
