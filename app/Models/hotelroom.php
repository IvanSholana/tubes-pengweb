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

    protected $fillable = [
        'nomor_kamar',
        'jenis_kamar',
        'status'
    ];

    public function roomType()
    {
        return $this->belongsTo(roomtype::class, 'jenis_kamar', 'jenis');
        
    }
}