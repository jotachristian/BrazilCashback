<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Cabeçalhos CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Responde requisições OPTIONS para preflight (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once '../conexao.php';

$response = ['success' => false, 'message' => ''];

try {
    // Recebe os dados do frontend
    $dados = json_decode(file_get_contents('php://input'), true);

    // Validações básicas
    if (
        empty($dados['razao_social']) || 
        empty($dados['cnpj']) || 
        empty($dados['email']) || 
        empty($dados['senha'])
    ) {
        throw new Exception("Todos os campos obrigatórios devem ser preenchidos.");
    }

    // Conexão com o banco de dados
    $conexao = new Conexao();
    $pdo = $conexao->getConexao();

    // Verificar duplicidade de e-mail
    $stmt = $pdo->prepare("SELECT id FROM empresas WHERE email = :email");
    $stmt->execute([':email' => $dados['email']]);
    if ($stmt->rowCount() > 0) {
        throw new Exception("O e-mail já está cadastrado.");
    }

    // Verificar duplicidade de CNPJ
    $stmt = $pdo->prepare("SELECT id FROM empresas WHERE cnpj = :cnpj");
    $stmt->execute([':cnpj' => $dados['cnpj']]);
    if ($stmt->rowCount() > 0) {
        throw new Exception("O CNPJ já está cadastrado.");
    }

    // Inserir nova empresa no banco
    $stmt = $pdo->prepare("
        INSERT INTO empresas (razao_social, cnpj, email, senha, telefone, categoria_empresa) 
        VALUES (:razao_social, :cnpj, :email, :senha, :telefone, :categoria_empresa)
    ");

    $stmt->execute([
        ':razao_social' => $dados['razao_social'],
        ':cnpj' => $dados['cnpj'],
        ':email' => $dados['email'],
        ':senha' => password_hash($dados['senha'], PASSWORD_BCRYPT), // Hash da senha
        ':telefone' => $dados['telefone'] ?? null,
        ':categoria_empresa' => $dados['categoria_empresa'] ?? null,
    ]);

    // Resposta de sucesso
    $response['success'] = true;
    $response['message'] = "Cadastro realizado com sucesso!";
} catch (Exception $e) {
    http_response_code(400); // Bad Request
    $response['message'] = $e->getMessage();
}

// Enviar resposta JSON
echo json_encode($response);
