<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class facility extends Model
{
    use HasFactory;
    protected $fillable = [
        'judul',
        'deskripsi',
        'foto'
    ];
    public static function getAlldata(){
        return self::all();
    }
}
