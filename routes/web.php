<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\EmployeaccountController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/welcome', function () {
    return Inertia::render('Test');
});

Route::get('/dashboard  ', [DashboardController::class, 'showdashboard']);
Route::get('/reservation  ', [DashboardController::class, 'showreservation']);
Route::get('/facility', [DashboardController::class,'showfacility']);
Route::post('/create', [ReservationController::class,'insertdata']);
Route::get('/login', [EmployeaccountController::class,'login']);
Route::post('/loginprogress', [EmployeaccountController::class, 'loginprogress']);
