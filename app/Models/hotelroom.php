<?php

namespace App\Models;

use App\Models\reservation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class hotelroom extends Model
{
    use HasFactory;
    protected $primaryKey = 'nomor_kamar_id';
    public $timestamps = false;
    public static function getAllData(){
        return self::all();
    }

    protected $fillable = [
        'nomor_kamar',
        'jenis_kamar',
        'status'
    ];

    public function reservations()
    {
        return $this->hasMany(reservation::class, 'nomor_kamar', 'nomor_kamar');
    }

    public function roomType()
    {
        return $this->belongsTo(roomtype::class, 'jenis_kamar', 'jenis_kamar');
    }
    public static function CountAllRoom(){
        return self::count();
    }

}