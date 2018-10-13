<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    protected $table = 'pasien';

    public $guarded = [];
    public $timestamps = ['created_at', 'updated_at'];
}
