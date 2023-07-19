<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reservation extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'no_nik',
        'total_harga',
        'check_in',
        'check_out',
        'id_kamar'
    ];
}
