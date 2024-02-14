<?php 
class Conexion{	  
    public static function Conectar() {        
        define('servidor', '51.222.207.182');
        define('nombre_bd', 'regixchem');
        define('usuario', 'rchemuser');
        define('password', 'gseeHI02TI8DRzoWkOap');					        
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');			
        try{
            $conexion = new PDO("mysql:host=".servidor."; dbname=".nombre_bd, usuario, password, $opciones);			
            return $conexion;
        }catch (Exception $e){
            die("El error de Conexión es: ". $e->getMessage());
        }
    }
}
?>