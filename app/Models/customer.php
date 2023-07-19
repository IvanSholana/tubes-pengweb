<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
    public static function getRowCount(){
        return self::count();
    }
}
