<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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

    public function showRegistration(){
        return inertia('LoginPage/Register');
    }

    public function createAccount(Request $request){
        $dataRegister = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'posisi' => $request->input('posisi'),
            'password' => bcrypt($request->input('password')) 
        ];
        User::create($dataRegister);
    }
}
