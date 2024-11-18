import express, { Request, Response } from "express";
import { ICadastrarUsuario } from "../types/Usuario";
import { IResponsePadrao } from "../types/ResponsePadrao";
import { Pool } from "pg";
import { EndConnection, Query, StartConnection } from "../services/postgres";

const router = express.Router();

router.get('/teste', (req: Request, res: Response) => {
    res.send("Rota teste funcionando")
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

            const resultQuery = await Query<ICadastrarUsuario>(
                bdconnection,
                "INSERT INTO usuario (nome, email, senha, telefone) VALUES ($1, $2, $3, $4) RETURNING *;",
                [nome, email, senha, telefone]
            )

            const retorno: IResponsePadrao = {
                errors: [],
                msg: ["Usuário cadastrado com sucesso"],
                data: resultQuery.rows[0]
            };
            res.status(200).send(retorno);
        } catch (error) {
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

export default router;