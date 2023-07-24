<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReservationController;

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


Route::get('/',[LoginController::class, 'redirectToLogin'])->middleware('guest');

Route::get('/dashboard  ', [DashboardController::class, 'showdashboard'])->middleware('auth');
Route::get('/reservation  ', [DashboardController::class, 'showreservation'])->middleware('auth');
Route::get('/facility', [DashboardController::class,'showfacility'])->middleware('auth');
Route::post('/create', [ReservationController::class,'insertdata'])->middleware('auth');

Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login')->middleware('guest');
Route::post('/sesi/login', [LoginController::class, 'loginprogress'])->name('login.progress')->middleware('guest');
Route::get('/sesi/logout', [LoginController::class, 'logout']);
Route::get('/register', [LoginController::class, 'showRegistration']);
Route::post('/sesi/register', [LoginController::class, 'createAccount']);