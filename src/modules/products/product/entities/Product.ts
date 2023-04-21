import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import User from '../../../users/user/entities/User';

@Entity('product')
export default class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    user_id: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column('varchar')
    name: string;

    @Column('varchar')
    description: string;

    @Column('numeric')
    price: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
