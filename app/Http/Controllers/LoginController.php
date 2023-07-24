<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function redirectToLogin(){
        return Inertia::location('/login');
    }
    
    public function showLoginForm()
    {
        return inertia('LoginPage/Login');
    }

    public function loginprogress(Request $request)
    {
        $request->validate([
                'email' => 'required',
                'password' => 'required'
            ]);
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];
        if(Auth::attempt($data)){
            $request->session()->regenerate();
            return Inertia::location('dashboard');
        }else{
            throw ValidationException::withMessages(['username' => 'Username atau Password Salah']);
        };
    }

    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Inertia::location('/login');
    }
}
