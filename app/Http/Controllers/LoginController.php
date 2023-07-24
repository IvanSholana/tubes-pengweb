<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return inertia('LoginPage/Login');
    }

    public function loginprogress(Request $request)
    {
        // Validasi data login jika diperlukan
        dd($request->all());
    }
}
