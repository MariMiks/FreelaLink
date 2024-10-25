import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Servico from '../model/servico.model';

@Entity()
export class ServicoEntity implements Servico {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    titulo!: string;

    @Column()
    descricao!: string;

    @Column()
    periodo!: string;

    @Column()
    local!: string;

    @Column()
    data!: string;

    @Column({ nullable: true })
    imagem!: string;

}