<?php
 
namespace App\Controllers\Api;
 
use CodeIgniter\RESTful\ResourceController;
use App\Models\UsuarioModel;
use App\Libraries\JWTAuth;
 
class Auth extends ResourceController
{
    protected $format = 'json';
 
    public function login()
    {
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');
 
        $userModel = new DocenteModel();
        //corregir y pasar al modelo 
        $user = $userModel->where('email', $email)->first();
 
        if (!$user || !password_verify($password, $user['password'])) {
            return $this->failUnauthorized('Credenciales incorrectas.');
        }
 
        $payload = [
            'id'    => $user['id'],
            'email' => $user['email'],
            'rol'   => $user['rol'] // 'estudiante', 'docente', 'admin'
        ];
 
        $token = JWTAuth::generateToken($payload);
 
        return $this->respond([
            'status'  => 200,
            'message' => 'Login exitoso',
            'token'   => $token,
            'user'    => $payload
        ]);
    }
}