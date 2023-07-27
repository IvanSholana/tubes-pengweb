<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\customer;
use App\Models\facility;
use App\Models\roomtype;
use App\Models\hotelroom;
use App\Models\registration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
        public function showDashboard()
        {
            $rowCount = customer::getRowCount();

            $userName = Auth::user()->name;
            $position = Auth::user()->posisi;

            return Inertia::render('Main/Dashboard', [
                'rowCount' => $rowCount,
                'page' => 'Dashboard',
                'username' => $userName,
                'userposition' => $position,
            ]);
        }

    public function showreservation(){
        $allroom = hotelroom::with('roomtype')->get();
        return inertia('Main/Dashboard',['page' =>'Reservation','rooms'=>$allroom]);
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
