<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class EmployeController extends Controller
{
    public function UpdateData(Request $request, $id)
    {
        $account = User::find($id);
        if ($account) {
            $account->name = $request->input('name');
            $account->email = $request->input('email');
            $account->posisi = $request->input('posisi');
            $account->save(); 
        }
    }

    public function DeleteActiveData($id){
        $account = User::find($id);
        if ($account) {
            $account->delete();
        }
    }
}
