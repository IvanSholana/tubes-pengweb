<?php

namespace App\Models;

use App\Models\hotelroom;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
    public function hotelRooms()
    {
        return $this->hasMany(hotelroom::class, 'jenis_kamar', 'jenis');
    }
}
