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
            $account->name = $request->name ?? $account->name;
            $account->email = $request->email ?? $account->email;
            $account->posisi = $request->posisi ?? $account->posisi;
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
