<?php

namespace App\Models;

use App\Models\customer;
use App\Models\roomtype;
use App\Models\hotelroom;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class reservation extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'no_nik',
        'total_harga',
        'check_in',
        'check_out',
        'nomor_kamar'
    ];

    public function customer()
    {
        return $this->belongsTo(customer::class, 'no_nik', 'no_nik');
    }

    public function hotelRoom()
    {
        return $this->belongsTo(hotelRoom::class, 'nomor_kamar', 'nomor_kamar');
    }

    public static function CountData(){
        return self::count();
    }
}
