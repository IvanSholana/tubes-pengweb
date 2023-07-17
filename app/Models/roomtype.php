<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class roomtype extends Model
{
    use HasFactory;
    protected $primaryKey = 'jenis';
    protected $keyType = 'string';
    public $incrementing = false;
    public $timestamps = false;
    public static function getAllData(){
        return self::all();
    }
}
