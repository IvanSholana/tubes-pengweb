<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hotelroom extends Model
{
    use HasFactory;
    protected $primaryKey = 'nomor_kamar';
    public $timestamps = false;
    public static function getAllData(){
        return self::all();
    }
    public function roomType()
    {
        return $this->belongsTo(roomtype::class, 'jenis_kamar', 'jenis');
    }
}