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
        Schema::create('roomtypes', function (Blueprint $table) {
            $table->bigIncrements('jenis_kamar_id')->nullable(false);
            $table->string('jenis_kamar')->nullable(false)->unique();
            $table->integer('harga')->nullable(false);
            $table->integer('kapasitas')->nullable(false);;
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roomtypes');
    }
};
