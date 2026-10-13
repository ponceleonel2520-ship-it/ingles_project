<?php

namespace App\Models;

use CodeIgniter\Model;

class DocenteModel extends Model
{
    protected $table         = 'docente';
    protected $primaryKey    = 'id_docente';
    protected $returnType    = 'array';
    protected $allowedFields = ['clave_docente', 'nombre_completo', 'password', 'hash'];

    public function verifica($clave = null, $pass = null)
    {
        $docente = $this->where('clave_docente', $clave)->first();

        if (!$docente) {
            return false;
        }

        return password_verify($pass, $docente['hash']);
    }
}