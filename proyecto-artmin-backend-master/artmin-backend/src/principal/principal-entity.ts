import {PrimaryGeneratedColumn} from 'typeorm';

export abstract class PrincipalEntity {
    @PrimaryGeneratedColumn()
    id?: number;
}
