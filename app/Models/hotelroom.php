<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hotelroom extends Model
{
    use HasFactory;
    protected $primaryKey = 'nomor_kamar';
    public $timestamps = false;
}