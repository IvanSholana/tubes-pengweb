<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmployeaccountController extends Controller
{
    public function login(){
        return inertia('LoginPage/LoginPage'); 
    }
    public function loginprogress(Request $request){
        dd($request->all());
    }
}
