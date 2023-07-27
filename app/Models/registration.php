<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class registration extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'posisi',
        'password',
    ];

    public static function getAllData(){
       return self::all();
}
}
