<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPostView extends Model
{
    use HasFactory;
    protected $table = 'reservation_view';
    public $timestamps = false;

}
