<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../conexao.php';

$response = ['success' => false, 'message' => ''];

try {
    // Recebe dados do frontend
    $dados = json_decode(file_get_contents('php://input'), true);

    // Validações básicas
    if(empty($dados['nome_completo']) || 
       empty($dados['email']) || 
       empty($dados['senha']) || 
       empty($dados['cpf']) || 
       empty($dados['data_nascimento']) || 
       empty($dados['telefone'])) {
        throw new Exception("Todos os campos são obrigatórios");
    }

    // Validação de CPF (você pode criar uma função mais robusta)
    if(!validarCPF($dados['cpf'])) {
        throw new Exception("CPF inválido");
    }

    // Cria conexão
    $conexao = new Conexao();
    $pdo = $conexao->getConexao();

    // Verifica se o email ou CPF já existe
    $stmt = $pdo->prepare("SELECT id FROM clientes WHERE email = :email OR cpf = :cpf");
    $stmt->execute([':email' => $dados['email'], ':cpf' => $dados['cpf']]);
    if($stmt->rowCount() > 0) {
        throw new Exception("Email ou CPF já cadastrado");
    }

    // Hash da senha
    $senhaHash = password_hash($dados['senha'], PASSWORD_DEFAULT);

    // Prepara e executa a inserção
    $stmt = $pdo->prepare(
        "INSERT INTO clientes (nome_completo, email, senha, cpf, data_nascimento, telefone) 
         VALUES (:nome_completo, :email, :senha, :cpf, :data_nascimento, :telefone)"
    );

    $resultado = $stmt->execute([
        ':nome_completo' => $dados['nome_completo'],
        ':email' => $dados['email'],
        ':senha' => $senhaHash,
        ':cpf' => $dados['cpf'],
        ':data_nascimento' => $dados['data_nascimento'],
        ':telefone' => $dados['telefone']
    ]);

    if($resultado) {
        $response['success'] = true;
        $response['message'] = 'Usuário cadastrado com sucesso!';
        $response['clienteId'] = $pdo->lastInsertId();
    } else {
        throw new Exception("Erro ao cadastrar usuário");
    }

} catch(Exception $e) {
    $response['message'] = $e->getMessage();
}

// Retorna resposta
echo json_encode($response);

// Função simples de validação de CPF
function validarCPF($cpf) {
    // Remove caracteres não numéricos
    $cpf = preg_replace('/[^0-9]/', '', $cpf);
    
    // Verifica se tem 11 dígitos
    if (strlen($cpf) != 11) return false;
    
    // Verifica se todos os dígitos são iguais
    if (preg_match('/^(.)\1*$/', $cpf)) return false;
    
    // Calcula os dígitos verificadores
    for ($t = 9; $t < 11; $t++) {
        $d = 0;
        for ($c = 0; $c < $t; $c++) {
            $d += $cpf[$c] * (($t + 1) - $c);
        }
        $d = ((10 * $d) % 11) % 10;
        if ($cpf[$c] != $d) {
            return false;
        }
    }
    
    return true;
}