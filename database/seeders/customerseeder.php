<?php

namespace Database\Seeders;


use App\Models\customer;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class customerseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $customers = [
             [
                'no_nik' => 3172011905080001,
                'nama_pelanggan' => 'John Doe',
                'no_telepon' => '081234567890'
            ],
            [
                'no_nik' => 5102037204980002,
                'nama_pelanggan' => 'Jane Smith',
                'no_telepon' => '082345678901'
            ],
            [
                'no_nik' => 3276012305980003,
                'nama_pelanggan' => 'Mark Johnson',
                'no_telepon' => '083456789012'
            ],
            [
                'no_nik' => 9424012704980004,
                'nama_pelanggan' => 'Sarah Williams',
                'no_telepon' => '084567890123'
            ],
            [
                'no_nik' => 9412031503960005,
                'nama_pelanggan' => 'Michael Brown',
                'no_telepon' => '085678901234'
            ]
        ];

        foreach ($customers as $customerData) {
            customer::create($customerData);
        }
    }
}
