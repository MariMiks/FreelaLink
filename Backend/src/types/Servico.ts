export interface IUsuario{
    id: number,
    nome: string
}

export interface ICadastrarServico {
    titulo: string,
    descricao: string,
    periodo: string,
    local: string,
    data: string,
    imagem: string,
    tipo: number,
    qntd_pessoa: number,
    id_solicitante: number
}

export interface IListarServico {
    id: number
}

export interface IAtualizarServico {
    id: number,
    titulo: string,
    descricao: string,
    periodo: string,
    local: string,
    data: string,
    imagem: string,
    tipo: string,
    qntd_pessoa: number,
    id_prestador: Array<IUsuario>
}

export interface IDeletarServico {
    id: number
}

