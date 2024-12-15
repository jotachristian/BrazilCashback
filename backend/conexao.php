<?php
class Conexao {
    private $host = 'localhost';
    private $usuario = 'root';  // Geralmente 'root' no xampp
    private $senha = '';        // Geralmente vazio no xampp
    private $banco = 'brazil_cashback';
    public $conexao;

    public function __construct() {
        try {
            $this->conexao = new PDO(
                "mysql:host={$this->host};dbname={$this->banco};charset=utf8", 
                $this->usuario, 
                $this->senha
            );
            $this->conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $erro) {
            die("Erro na conexão: " . $erro->getMessage());
        }
    }

    public function getConexao() {
        return $this->conexao;
    }
}