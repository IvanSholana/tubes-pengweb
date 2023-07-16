<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\customer;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function show(){
        $rowCount = customer::getRowCount();
        return inertia('Dasboard/Dashboard',['rowCount'=>$rowCount]);
    }
}
