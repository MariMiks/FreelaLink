export interface ICadastrarUsuario {
    nome: string,
    email: string,
    senha: string,
    telefone: string
}

export interface IListarUsuario {
    id: number,
    nome: string,
    email: string
}

export interface IAtualizarUsuario {
    id: number,
    nome: string,
    email: string,
    senha: string,
    telefone: string
}

export interface IDeletarUsuario {
    id: number
}

export interface ILoginUsuario {
    email: string,
    senha: string
}