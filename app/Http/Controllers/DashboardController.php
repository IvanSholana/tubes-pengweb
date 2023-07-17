<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\customer;
use App\Models\hotelroom;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showdashboard(){
        $rowCount = customer::getRowCount();
        return inertia('Main/Dashboard',['rowCount'=>$rowCount,'page' =>'Dashboard']);
    }

    public function showreservation(){
        $hotelroom = hotelroom::getAllData();
        return inertia('Main/Dashboard',['page' =>'Reservation','room'=>$hotelroom]);
    }
}
