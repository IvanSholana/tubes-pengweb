<?php

namespace App\Models;

use App\Models\reservation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class customer extends Model
{
    use HasFactory;
    protected $primaryKey = 'no_nik';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
        'no_nik',
        'nama_pelanggan',
        'no_telepon',
    ];

    public function reservations()
    {
        return $this->hasMany(reservation::class, 'no_nik', 'no_nik');
    }

    public static function getRowCount(){
        return self::count();
    }
}
