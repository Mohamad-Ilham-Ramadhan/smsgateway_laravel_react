<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Pasien extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nama' => $this->nama,
            'no_telpon' => $this->no_telpon,
            'alamat' => $this->alamat,
            'jenis_kelamin' => $this->jenis_kelamin,
            'tgl_daftar' => $this->tgl_daftar
        ];
    }
}
