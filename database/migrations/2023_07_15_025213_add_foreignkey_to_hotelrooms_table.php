<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('hotelrooms', function (Blueprint $table) {
            $table->string('jenis_kamar')->nullable(false);
            $table->foreign('jenis_kamar')->references('jenis')->on('roomtypes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hotelrooms', function (Blueprint $table) {
            //
        });
    }
};
