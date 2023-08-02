<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\RoomtypeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HotelroomController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\RegistrationController;

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


Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'showdashboard']);
    Route::get('/dashboard/resepsionis  ', [DashboardController::class, 'showdashboard'])->middleware('userAkses:resepsionis');
    Route::get('/dashboard/operator  ', [DashboardController::class, 'showdashboard'])->middleware('userAkses:operator');
    Route::get('/reservation  ', [DashboardController::class, 'showreservation']);
    Route::get('/facility', [DashboardController::class,'showfacility']);
    Route::get('/hotelroom', [DashboardController::class,'showhotelroom']);
    Route::post('/hotelroom/create', [RoomtypeController::class,'createRoom']);
    Route::post('/hotelroom/createroom', [HotelroomController::class,'createRoom']);
    Route::post('/create', [ReservationController::class,'insertdata']);
    Route::get('/sesi/logout', [LoginController::class, 'logout']);
    Route::post('facility/create',[FacilityController::class,'CreateFacility']);
    Route::get('/account',[DashboardController::class,'showAccountManagement']);
    Route::post('/account/update/{id}',[EmployeController::class,'UpdateData']);
    Route::post('/account/delete/{id}',[EmployeController::class,'DeleteActiveData']);
    Route::post('/account/addaccount',[RegistrationController::class,'addAcounttoActiveAccount']);
    Route::post('/facility/update/{id}',[FacilityController::class,'updateFacility']);
    Route::post('/facility/delete/{id}',[FacilityController::class,'deleteFacility']);
    Route::get('/reservation/detail/{id}', [ReservationController::class, 'ShowDetailReservation']);
    Route::post('/reservation/update/{id}',[ReservationController::class,'ReservationUpdate']);
    Route::post('/reservation/delete/{id}',[ReservationController::class,'DeleteActiveReservation']);
    Route::post('/hotelroom/update/{id}',[HotelroomController::class,'updateRoom']);
});

Route::middleware(['guest'])->group(function () {
    Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('/sesi/login', [LoginController::class, 'loginprogress'])->name('login.progress');
    Route::get('/',[LoginController::class, 'redirectToLogin']);
    Route::get('/register', [LoginController::class, 'showRegistration']);
    Route::post('/sesi/register', [RegistrationController::class, 'createAccount']);
});