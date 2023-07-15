<?php

namespace Database\Seeders;

use App\Models\employe;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class employeseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $employes = [
            [
                'nama_pegawai' => 'Siti Amiroh',
                'jabatan' => 'resepsionis'
            ],
            [
                'nama_pegawai' => 'Rusdi Setiawan',
                'jabatan' => 'operator'
            ],
            [
                'nama_pegawai' => 'Ivan Panjarnarso',
                'jabatan' => 'manager'
            ],
            [
                'nama_pegawai' => 'Emily Kurniasari',
                'jabatan' => 'resepsionis'
            ],
            [
                'nama_pegawai' => 'David Boy',
                'jabatan' => 'satpam'
            ],
        ];
        foreach ($employes as $employeData) {
            employe::create($employeData);
        }
    }
}
