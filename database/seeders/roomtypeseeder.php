<?php

namespace Database\Seeders;

use App\Models\roomtype;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class roomtypeseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roomTypes = [
            [
                'jenis' => 'Standard',
                'harga' => 100000,
                'kapasitas' => 2
            ],
            [
                'jenis' => 'Deluxe',
                'harga' => 200000,
                'kapasitas' => 2
            ],
            [
                'jenis' => 'Suite',
                'harga' => 300000,
                'kapasitas' => 4
            ],
            [
                'jenis' => 'Family',
                'harga' => 400000,
                'kapasitas' => 4
            ],
            [
                'jenis' => 'Executive',
                'harga' => 500000,
                'kapasitas' => 2
            ]
        ];

        foreach ($roomTypes as $roomType) {
            roomtype::create($roomType);
        }
    }
}
