<?php

namespace Database\Seeders;

use App\Models\employeaccount;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class employeaccountseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $accounts = [
            [
                'username' => 'resepsionis1',
                'password' => 'masukpakeeko',
                'id_pegawai' => 1
            ],
            [
                'username' => 'operator1',
                'password' => 'masuk',
                'id_pegawai' => 2
            ]
            ];
        foreach ($accounts as $account) {
            employeaccount::create($account);
        }
    }
}
