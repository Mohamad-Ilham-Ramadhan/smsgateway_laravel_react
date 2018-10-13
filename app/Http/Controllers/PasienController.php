<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pasien;
use App\Http\Resources\Pasien as PasienResource;

class PasienController extends Controller
{
    public function index() {
    	return PasienResource::collection(Pasien::all());
    }
}
