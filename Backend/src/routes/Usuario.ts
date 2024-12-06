import express, { Request, Response } from "express";
import { IAtualizarUsuario, ICadastrarUsuario, IDeletarUsuario, IListarUsuario, ILoginUsuario } from "../types/Usuario";
import { IResponsePadrao } from "../types/ResponsePadrao";
import { Pool } from "pg";
import { EndConnection, Query, StartConnection } from "../services/postgres";
import { HashPassword } from "../services/bcrypt";
import { authenticateUser, updateUser } from "../services/auth";

const router = express.Router();

router.get('/listarTodos', async (req: Request, res: Response) => {
    let bdconnection: Pool | null = null;
    try {
        bdconnection = await StartConnection()

        const resultQuery = await Query<IListarUsuario>(
            bdconnection,
            "SELECT id, nome, email, telefone FROM usuario;",
            []
        )

        const retorno: IResponsePadrao = {
            errors: [],
            msg: ["Usuários listados com sucesso"],
            data: resultQuery.rows
        }
        res.status(200).send(retorno);
    } catch (error) {
        console.log("Erro ao listar usuários", error)
        const retorno: IResponsePadrao = {
            errors: [error instanceof Error ? error.message : "Erro desconhecido"],
            msg: ["Falha ao listar usuários"],
            data: null
        }
        res.status(500).send(retorno)
    }
    if (bdconnection) EndConnection(bdconnection);
})

router.post( '/cadastrar', async (req: Request, res: Response) => {
    console.log("Requisição recebida em /usuario/cadastrar")
    const {nome, email, senha, telefone} = req.body as ICadastrarUsuario;

        if(!nome || !email || !senha){
            const retorno: IResponsePadrao = {
                errors: ["Nome, email e senha são obrigatórios"],
                msg: ["Requisição inválida"],
                data: null
            };
            return res.status(400).send(retorno)
        }

        let bdconnection: Pool | null = null;
        try {
            bdconnection = await StartConnection()

            const senhaHashed = HashPassword(senha);

            const resultQuery = await Query<ICadastrarUsuario>(
                bdconnection,
                "INSERT INTO usuario (nome, email, senha, telefone) VALUES ($1, $2, $3, $4) RETURNING *;",
                [nome, email, senhaHashed, telefone]
            )

            const retorno: IResponsePadrao = {
                errors: [],
                msg: ["Usuário cadastrado com sucesso"],
                data: resultQuery.rows[0]
            };
            res.status(200).send(retorno);
        } catch (error) {
            console.log("Erro ao cadastrar usuário", error)
            const retorno: IResponsePadrao = {
                errors: [error instanceof Error ? error.message : "Erro desconhecido"],
                msg: ["Falha no cadastro de usuários"],
                data: null
            }
            res.status(500).send(retorno)
        }
        if (bdconnection) EndConnection(bdconnection);
    }
);

router.get('/:usuarioId', async (req: Request, res: Response) => {
    const usuarioId = parseInt(req.params.usuarioId);

    if (isNaN(usuarioId)) {
        const retorno: IResponsePadrao = {
            errors: ["ID do usuário deve ser um número válido"],
            msg: ["ID inválido"],
            data: null
        };
        return res.status(400).send(retorno);
    }

    let bdconnection: Pool | null = null;
    try {
        bdconnection = await StartConnection();

        const resultQuery = await Query<IListarUsuario>(
            bdconnection,
            "SELECT id, nome, email, telefone FROM usuario WHERE id = $1;",
            [usuarioId]
        );

        if(resultQuery.rows.length === 0){
            const retorno: IResponsePadrao = {
                errors: ["Usuário não encontrado"],
                msg: ["Usuário não encontrado"],
                data: null
            };
            return res.status(404).send(retorno);
        };

        const userData = resultQuery.rows[0];

        const retorno: IResponsePadrao = {
            errors: [],
            msg: ["Usuário encontrado com sucesso"],
            data: userData
        };
        res.status(200).send(retorno);
    } catch (error) {
        console.log("Erro ao listar usuário por ID", error)
        const retorno: IResponsePadrao = {
            errors: [error instanceof Error ? error.message : "Erro desconhecido"],
            msg: ["Falha ao listar usuário por ID"],
            data: null
        };
        res.status(500).send(retorno);
    }
    if (bdconnection) EndConnection(bdconnection);
})


router.patch(
    "/atualizar",
    async (req: Request, res: Response) => {
        const { id, nome, email, senha, telefone } = req.body as IAtualizarUsuario;

        let bdConn: Pool | null = null;
        try {
            bdConn = StartConnection();

            // Atualizar o usuário com o novo nome, email e senha
            const updatedUser = await updateUser(id.toString(), bdConn, nome, email, senha, telefone);

            const retorno: IResponsePadrao = {
                errors: [],
                msg: ["Usuário atualizado com sucesso"],
                data: updatedUser
            };
            res.status(200).send(retorno);
        } catch (err) {
            let statusCode = 500;
            let msg = "Falha ao atualizar usuário";

            if (err instanceof Error) {
                if (err.message === "Nenhum dado para atualizar") {
                    statusCode = 400;
                    msg = err.message;
                } else if (err.message === "Usuário não encontrado") {
                    statusCode = 404;
                    msg = err.message;
                }
            }

            const retorno: IResponsePadrao = {
                errors: [err instanceof Error ? err.message : "Erro desconhecido"],
                msg: [msg],
                data: null
            };
            res.status(statusCode).send(retorno);
        }
        
    }
);

router.delete(
    "/deletar",
    async (req: Request, res: Response) => {
        const { id } = req.body as IDeletarUsuario;

        let bdConn: Pool | null = null;
        try {
            bdConn = StartConnection();

            const resultQuery = await Query<IDeletarUsuario>(
                bdConn,
                "DELETE FROM usuario WHERE id = $1 RETURNING id, nome, email;",
                [id]
            );

            if (resultQuery.length === 0) {
                const retorno = {
                    errors: [],
                    msg: [`id (${id}) é inválido`],
                    data: null
                } as IResponsePadrao;
                res.status(400).send(retorno);
                return;
            }

            const retorno = {
                errors: [],
                msg: ["Usuário deletado com sucesso"],
                data: null
            } as IResponsePadrao;
            res.status(200).send(retorno);
        } catch (err) {
            const retorno = {
                errors: [(err as Error).message],
                msg: ["Falha ao excluir usuário"],
                data: null
            } as IResponsePadrao;
            res.status(500).send(retorno);
        }
        
    }
);

router.post(
    "/login",
    async (req: Request, res: Response) => {
        const { email, senha } = req.body as ILoginUsuario;

        let bdConn: Pool | null = null;
        try {
            bdConn = StartConnection();

            const user = await authenticateUser(email, senha, bdConn);

            const retorno: IResponsePadrao = {
                errors: [],
                msg: ["Login bem-sucedido"],
                data: {
                    id: user.id,
                    nome: user.nome,
                    email: user.email
                }
            };
            res.status(200).send(retorno);
        } catch (err) {
            let statusCode = 500;
            let msg = "Falha ao fazer login";

            if (err instanceof Error) {
                if (err.message === "Usuário não encontrado") {
                    statusCode = 404;
                    msg = err.message;
                } else if (err.message === "Senha inválida") {
                    statusCode = 401;
                    msg = err.message;
                }
            }

            const retorno: IResponsePadrao = {
                errors: [err instanceof Error ? err.message : "Erro desconhecido"],
                msg: [msg],
                data: null
            };
            res.status(statusCode).send(retorno);
        }
        
    }
);

router.post(
    "/logout",
    async (req: Request, res: Response) => {

        const retorno: IResponsePadrao = {
            errors: [],
            msg: ["Logout realizado com sucesso"],
            data: null
        };
        res.status(200).send(retorno);
    }
);

export default router;