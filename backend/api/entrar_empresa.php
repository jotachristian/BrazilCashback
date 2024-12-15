<?php
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Cabeçalhos CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Responde requisições OPTIONS para preflight (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); // OK
    exit;
}

require_once '../conexao.php';

$response = ['success' => false, 'message' => ''];

try {
    // Recebe os dados do frontend
    $dados = json_decode(file_get_contents('php://input'), true);

    // Validações básicas
    if (empty($dados['email']) || empty($dados['senha'])) {
        throw new Exception("E-mail e senha são obrigatórios.");
    }

    // Conexão
    $conexao = new Conexao();
    $pdo = $conexao->getConexao();

    // Consulta para verificar o e-mail
    $stmt = $pdo->prepare("SELECT id, senha, razao_social, cnpj FROM empresas WHERE email = :email");
    $stmt->execute([':email' => $dados['email']]);
    $empresa = $stmt->fetch(PDO::FETCH_ASSOC);

    // Verifica se a empresa existe
    if (!$empresa) {
        throw new Exception("E-mail não encontrado.");
    }

    // Verifica se a senha está correta
    if (!password_verify($dados['senha'], $empresa['senha'])) {
        throw new Exception("Senha incorreta.");
    }

    // Login bem-sucedido
    $response['success'] = true;
    $response['message'] = "Login realizado com sucesso!";
    $response['empresa'] = [
        'id' => $empresa['id'],
        'razao_social' => $empresa['razao_social'],
        'cnpj' => $empresa['cnpj']
    ];
} catch (Exception $e) {
    http_response_code(400); // Bad Request
    $response['message'] = $e->getMessage();
}

echo json_encode($response);
