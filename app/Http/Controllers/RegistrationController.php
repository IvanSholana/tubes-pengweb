<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\registration;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function createAccount(Request $request){
        $dataRegister = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'posisi' => $request->input('posisi'),
            'password' => $request->input('password')
        ];
        registration::create($dataRegister);
    }
    public function addAcounttoActiveAccount(Request $request){
        $dataRegister = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'posisi' => $request->input('posisi'),
            'password' => bcrypt($request->input('password')) 
        ];
        $account = registration::where('name', $request->input('name'))->delete();
        User::create($dataRegister);
       
        
    }
}
