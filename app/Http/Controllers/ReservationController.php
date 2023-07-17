<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function reservation() {
        return inertia('Main/Dashboard');
    }
}
