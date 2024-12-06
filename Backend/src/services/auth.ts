import { Pool } from "pg";
import { HashPassword, HashPasswordCompare } from "./bcrypt";
import { Query } from "./postgres";

export async function updateUser(id: string, bdConn: Pool, novoNome?: string, novoEmail?: string, novaSenha?: string, novoTelefone?: string) {
    const updates = [];
    const values = [];
    let index = 1;
    let senhaHashed: string | undefined;

    if (novoNome) {
        updates.push(`nome = $${index++}`);
        values.push(novoNome);
    }
    if (novoEmail) {
        updates.push(`email = $${index++}`);
        values.push(novoEmail);
    }
    if (novaSenha) {
        senhaHashed = HashPassword(novaSenha);
        updates.push(`senha = $${index++}`);
        values.push(senhaHashed);
    }
    if (novoTelefone) {
        updates.push(`telefone = $${index++}`);
        values.push(novoTelefone);
    }

    if (updates.length === 0) {
        throw new Error("Nenhum dado para atualizar");
    }

    values.push(id);
    const resultQuery = await Query(
        bdConn,
        `UPDATE usuario SET ${updates.join(", ")} WHERE id = $${index} RETURNING id, nome, email, senha, telefone;`,
        values
    );

    if (resultQuery.length === 0) {
        throw new Error("Usuário não encontrado");
    }

    return resultQuery[0];
}


export async function authenticateUser(email: string, senha: string, bdConn: Pool) {
    console.log("entrou em authenticateuser")
    const resultQuery = await Query(
        bdConn,
        "SELECT id, nome, email, senha FROM usuario WHERE email = $1;",
        [email]
    );

    if (resultQuery.length === 0) {
        throw new Error("Usuário não encontrado");
    }
    
    const user = resultQuery.rows[0];
    const isPasswordValid = HashPasswordCompare(user.senha, senha);
    console.log(HashPasswordCompare(user.senha, senha));

    if (!isPasswordValid) {
        throw new Error("Senha inválida");
    }

    return {
        id: user.id,
        nome: user.nome,
        email: user.email
    };
}