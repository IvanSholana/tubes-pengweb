<?php

namespace Database\Seeders;

use App\Models\hotelroom;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class hotelroomseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jenisKamar = ['Deluxe', 'Executive', 'Family', 'Standard', 'Suite'];

        for ($i = 1; $i <= 10; $i++) {
            $randomJenisKamar = $jenisKamar[array_rand($jenisKamar)];

            hotelroom::create([
                'nomor_kamar' => $i,
                'jenis_kamar' => $randomJenisKamar
            ]);
        }
    }
}
