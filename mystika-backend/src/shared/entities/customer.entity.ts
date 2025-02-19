import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('customer')
export class Customer{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'phone', nullable: false })
    phone: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'password', nullable: false })
    password: string;
    
    @Column({ name: 'status', nullable: false })
    status: string;
}