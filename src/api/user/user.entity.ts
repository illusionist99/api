import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class User {


    @PrimaryGeneratedColumn()
    public id!: number;

    // @Column()
}