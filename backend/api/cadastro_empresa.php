<?php
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Cabeçalhos CORS
header("Access-Control-Allow-Origin: *"); // Permite requisições de qualquer origem
header("Content-Type: application/json; charset=UTF-8"); // Resposta em JSON
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With"); // Cabeçalhos permitidos

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
    if (empty($dados['razao_social']) || 
        empty($dados['cnpj']) || 
        empty($dados['email']) || 
        empty($dados['senha']) || 
        empty($dados['telefone']) || 
        empty($dados['categoria_empresa'])) {
        throw new Exception("Todos os campos são obrigatórios");
    }

    // Validação de CNPJ
    if (!validarCNPJ($dados['cnpj'])) {
        throw new Exception("CNPJ inválido");
    }

    // Conexão
    $conexao = new Conexao();
    $pdo = $conexao->getConexao();

    // Verifica se o email ou CNPJ já existe
    $stmt = $pdo->prepare("SELECT id FROM empresas WHERE email = :email OR cnpj = :cnpj");
    $stmt->execute([':email' => $dados['email'], ':cnpj' => $dados['cnpj']]);
    if ($stmt->rowCount() > 0) {
        throw new Exception("Email ou CNPJ já cadastrado");
    }

    // Hash da senha
    $senhaHash = password_hash($dados['senha'], PASSWORD_DEFAULT);

    // Inserção no banco de dados
    $stmt = $pdo->prepare(
        "INSERT INTO empresas (razao_social, cnpj, email, senha, telefone, categoria_empresa) 
         VALUES (:razao_social, :cnpj, :email, :senha, :telefone, :categoria_empresa)"
    );

    $resultado = $stmt->execute([
        ':razao_social' => $dados['razao_social'],
        ':cnpj' => $dados['cnpj'],
        ':email' => $dados['email'],
        ':senha' => $senhaHash,
        ':telefone' => $dados['telefone'],
        ':categoria_empresa' => $dados['categoria_empresa']
    ]);

    if ($resultado) {
        $response['success'] = true;
        $response['message'] = 'Empresa cadastrada com sucesso!';
        $response['empresaId'] = $pdo->lastInsertId();
    } else {
        throw new Exception("Erro ao cadastrar empresa");
    }
} catch (Exception $e) {
    http_response_code(400);
    $response['message'] = $e->getMessage();
}

echo json_encode($response);

// Função de validação de CNPJ
function validarCNPJ($cnpj) {
    $cnpj = preg_replace('/\D/', '', $cnpj);
    if (strlen($cnpj) !== 14 || preg_match('/(\d)\1{13}/', $cnpj)) {
        return false;
    }

    $soma = 0;
    $peso = 2;
    for ($i = 11; $i >= 0; $i--) {
        $soma += $cnpj[$i] * $peso;
        $peso = $peso == 9 ? 2 : $peso + 1;
    }
    $digito1 = 11 - ($soma % 11);
    if ($digito1 >= 10) $digito1 = 0;

    $soma = 0;
    $peso = 2;
    for ($i = 12; $i >= 0; $i--) {
        $soma += $cnpj[$i] * $peso;
        $peso = $peso == 9 ? 2 : $peso + 1;
    }
    $digito2 = 11 - ($soma % 11);
    if ($digito2 >= 10) $digito2 = 0;

    return $cnpj[12] == $digito1 && $cnpj[13] == $digito2;
}
