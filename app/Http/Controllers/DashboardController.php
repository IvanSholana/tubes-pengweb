<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\customer;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showdashboard(){
        $rowCount = customer::getRowCount();
        return inertia('Main/Dashboard',['rowCount'=>$rowCount,'page' =>'Dashboard']);
    }

    public function showreservation(){
        return inertia('Main/Dashboard',['rowCount'=>null,'page' =>'Reservation']);
    }
}
