<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\customer;
use App\Models\facility;
use App\Models\roomtype;
use App\Models\hotelroom;
use App\Models\reservation;
use App\Models\registration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
        public function showDashboard()
        {
            $AllData = reservation::with(['customer', 'hotelRoom.roomType'])
            ->select('id_reservasi', 'no_nik', 'total_harga', 'check_in', 'check_out', 'nomor_kamar')
            ->get();
            $CountData = reservation::CountData();
            $FreeRoom = hotelroom::CountAllRoom();

            $userName = Auth::user()->name;
            $position = Auth::user()->posisi;

            return Inertia::render('Main/Dashboard', [
                'DataReservation' => [$AllData,$CountData,$FreeRoom - $CountData], 
                'page' => 'Dashboard',
                'username' => $userName,
                'userposition' => $position,
            ]);
        }

    public function showreservation(){
        $roomType = roomtype::getAlldata();
        $hotelroom = hotelroom::with('roomtype')->get();
        return inertia('Main/Dashboard',['page' =>'Reservation','rooms' => [$roomType,$hotelroom]]);
    }

    public function showfacility(){
        $dataFacility = facility::getAlldata();
       

        return inertia('Main/Dashboard',['page'=>'Facility','facilityData'=>$dataFacility]);
    }

    public function showhotelroom(){
        $roomType = roomtype::getAlldata();
        $hotelroom = hotelroom::with('roomtype')->get();
        return inertia('Main/Dashboard',['page'=>'Hotelroom','rooms' => [$roomType,$hotelroom]]);
    }

    public function showAccountManagement(){
        $ActivateAccount = User::getAllData();
        $RegisterAccount = registration::getAllData();
        return inertia('Main/Dashboard',['page' => 'AccountManagement','account' => [$ActivateAccount,$RegisterAccount]]);
    }
}
