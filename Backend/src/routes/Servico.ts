import express, { Request, Response } from "express";
import { IResponsePadrao } from "../types/ResponsePadrao";
import { Pool } from "pg";
import { EndConnection, Query, StartConnection } from "../services/postgres";
import { IAtualizarServico, ICadastrarServico, IDeletarServico, IListarServico, IUsuario } from "../types/Servico";

const router = express.Router();

router.get('/listarTodos', async (req: Request, res: Response) => {
    let bdconnection: Pool | null = null;
    try {
        bdconnection = await StartConnection()

        const resultQuery = await Query<IListarServico>(
            bdconnection,
            "SELECT id, titulo, descricao, periodo, local, data, tipo, id_solicitante FROM servico;",
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

router.post('/cadastrar', async (req: Request, res: Response) => {
    console.log("Requisição recebida em /usuario/cadastrar")
    const { titulo, descricao, periodo, local, data, imagem, tipo, qntd_pessoa, id_solicitante } = req.body as ICadastrarServico;

    if (!titulo || !periodo || !local || !data) {
        const retorno: IResponsePadrao = {
            errors: ["titulo, descricao, periodo, local e data são obrigatórios"],
            msg: ["Requisição inválida"],
            data: null
        };
        return res.status(400).send(retorno)
    }

    let bdconnection: Pool | null = null;
    try {
        bdconnection = await StartConnection()

        const resultQuery = await Query<ICadastrarServico>(
            bdconnection,
            "INSERT INTO servico (titulo, descricao, periodo, local, data, imagem, tipo, qntd_pessoa, id_solicitante) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;",
            [titulo, descricao, periodo, local, data, imagem, tipo, qntd_pessoa, id_solicitante]
        )

        const retorno: IResponsePadrao = {
            errors: [],
            msg: ["Serviço cadastrado com sucesso"],
            data: resultQuery.rows[0]
        };
        res.status(200).send(retorno);
    } catch (error) {
        console.log("Erro ao cadastrar serviço", error)
        const retorno: IResponsePadrao = {
            errors: [error instanceof Error ? error.message : "Erro desconhecido"],
            msg: ["Falha no cadastro de serviço"],
            data: null
        }
        res.status(500).send(retorno)
    }
    if (bdconnection) EndConnection(bdconnection);
}
);

router.get('/:servicoId', async (req: Request, res: Response) => {
    const servicoId = parseInt(req.params.servicoId);

    if (isNaN(servicoId)) {
        const retorno: IResponsePadrao = {
            errors: ["ID do serviço deve ser um número válido"],
            msg: ["ID inválido"],
            data: null
        };
        return res.status(400).send(retorno);
    }

    let bdconnection: Pool | null = null;
    try {
        bdconnection = await StartConnection();

        const resultQuery = await Query<IListarServico>(
            bdconnection,
            "SELECT * FROM servico WHERE id = $1;",
            [servicoId]
        );

        if (resultQuery.rows.length === 0) {
            const retorno: IResponsePadrao = {
                errors: ["Serviço não encontrado"],
                msg: ["Serviço não encontrado"],
                data: null
            };
            return res.status(404).send(retorno);
        };

        const servicoData = resultQuery.rows[0];

        const usuarios: { solicitante: IUsuario | null; prestador: IUsuario[]; } = {
            solicitante: null,
            prestador: []
        };

        const prestadoresQuery = await Query<IUsuario>(
            bdconnection,
            `SELECT u.id, u.nome 
             FROM usuario u 
             JOIN servico_prestador sp ON u.id = sp.prestador_id 
             WHERE sp.servico_id = $1;`,
            [servicoId]
        );

        const solicitanteQuery = await Query<IUsuario>(
            bdconnection,
            `SELECT u.id, u.nome 
             FROM usuario u 
             WHERE u.id = $1;`,
            [servicoData.id_solicitante]
        );
        

        if (solicitanteQuery.rows.length > 0) {
            usuarios.solicitante = solicitanteQuery.rows[0];
        }
        usuarios.prestador = prestadoresQuery.rows;

        servicoData.usuarios = usuarios;


        const retorno: IResponsePadrao = {
            errors: [],
            msg: ["Serviço encontrado com sucesso"],
            data: servicoData
        };
        res.status(200).send(retorno);
    } catch (error) {
        console.log("Erro ao listar serviço por ID", error)
        const retorno: IResponsePadrao = {
            errors: [error instanceof Error ? error.message : "Erro desconhecido"],
            msg: ["Falha ao listar serviço por ID"],
            data: null
        };
        res.status(500).send(retorno);
    }
    if (bdconnection) EndConnection(bdconnection);
})


router.patch(
    "/atualizar",
    async (req: Request, res: Response) => {
        const { id, titulo, descricao, periodo, local, data, imagem, tipo, qntd_pessoa, id_prestador } = req.body as IAtualizarServico;

        let bdConn: Pool | null = null;
        try {
            bdConn = StartConnection();

            const servicoQuery = await Query<IListarServico>(
                bdConn,
                "SELECT * FROM servico WHERE id = $1;",
                [id]
            );
    
            if (servicoQuery.rows.length === 0) {
                const retorno: IResponsePadrao = {
                    errors: ["Serviço não encontrado"],
                    msg: ["Serviço não encontrado"],
                    data: null
                };
                return res.status(404).send(retorno);
            }    

            let valoresQuery: Array<string> = [];
            if (titulo !== undefined) valoresQuery.push(`titulo = '${titulo}'`);
            if (descricao !== undefined) valoresQuery.push(`descricao = '${descricao}'`);
            if (periodo !== undefined) valoresQuery.push(`periodo = '${periodo}'`);
            if (local !== undefined) valoresQuery.push(`local = '${local}'`);
            if (data !== undefined) valoresQuery.push(`data = '${data}'`);
            if (imagem !== undefined) valoresQuery.push(`imagem = '${imagem}'`);
            if (tipo !== undefined) valoresQuery.push(`tipo = '${tipo}'`);
            if (qntd_pessoa !== undefined) valoresQuery.push(`qntd_pessoa = '${qntd_pessoa}'`);
            // if (id_prestador !== undefined) valoresQuery.push(`id_prestador = '${id_prestador}'`);

            await Query<IAtualizarServico>(
                bdConn,
                `UPDATE servico SET ${valoresQuery.join(", ")} WHERE id = $1;`,
                [id]
            );

            if (id_prestador !== undefined) {
                await Query<IAtualizarServico>(
                    bdConn,
                    `DELETE FROM servico_prestador WHERE servico_id = $1;`,
                    [id]
                );
    
                for (const prestadorId of id_prestador) {
                    const prestadorQuery = await Query<IUsuario>(
                        bdConn,
                        "SELECT * FROM usuario WHERE id = $1;",
                        [prestadorId]
                    );
    
                    if (prestadorQuery.rows.length === 0) {
                        const retorno: IResponsePadrao = {
                            errors: [`Prestador com ID ${prestadorId} não encontrado`],
                            msg: ["Prestador não encontrado"],
                            data: null
                        };
                        return res.status(404).send(retorno);
                    }
    
                    await Query<IAtualizarServico>(
                        bdConn,
                        `INSERT INTO servico_prestador (servico_id, prestador_id) VALUES ($1, $2);`,
                        [id, prestadorId]
                    );
                }
            }

            const retorno: IResponsePadrao = {
                errors: [],
                msg: ["Serviço atualizado com sucesso"],
                data: null
            };
            res.status(200).send(retorno);
        } catch (err) {
            let statusCode = 500;
            let msg = "Falha ao atualizar serviço";

            if (err instanceof Error) {
                if (err.message === "Nenhum dado para atualizar") {
                    statusCode = 400;
                    msg = err.message;
                } else if (err.message === "Serviço não encontrado") {
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
        const { id } = req.body as IDeletarServico;

        let bdConn: Pool | null = null;
        try {
            bdConn = StartConnection();

            await Query<IDeletarServico>(
                bdConn,
                "DELETE FROM servico_prestador WHERE servico_id = $1;",
                [id]
            );

            const resultQuery = await Query<IDeletarServico>(
                bdConn,
                "DELETE FROM servico WHERE id = $1 RETURNING id, titulo, tipo;",
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
                msg: ["Serviço deletado com sucesso"],
                data: null
            } as IResponsePadrao;
            res.status(200).send(retorno);
        } catch (err) {
            const retorno = {
                errors: [(err as Error).message],
                msg: ["Falha ao excluir serviço"],
                data: null
            } as IResponsePadrao;
            res.status(500).send(retorno);
        }

    }
);

export default router;