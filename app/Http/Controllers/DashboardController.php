<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\customer;
use App\Models\roomtype;
use App\Models\hotelroom;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showdashboard(){
        $rowCount = customer::getRowCount();
        return inertia('Main/Dashboard',['rowCount'=>$rowCount,'page' =>'Dashboard']);
    }

    public function showreservation(){
        $allroom = hotelroom::with('roomtype')->get();
        return inertia('Main/Dashboard',['page' =>'Reservation','rooms'=>$allroom]);
    }

    public function showfacility(){
        return inertia('Main/Dashboard',['page'=>'Facility']);
    }
}
