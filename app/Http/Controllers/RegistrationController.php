<?php

namespace App\Http\Controllers;

use App\Models\registration;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function createAccount(Request $request){
        $dataRegister = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'posisi' => $request->input('posisi'),
            'password' => bcrypt($request->input('password')) 
        ];
        registration::create($dataRegister);
    }

    

}
