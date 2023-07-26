<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\customer;
use App\Models\facility;
use App\Models\roomtype;
use App\Models\hotelroom;
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
        return inertia('Main/Dashboard',['page'=>'Hotelroom']);
    }
}
