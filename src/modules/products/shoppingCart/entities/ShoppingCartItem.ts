import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Product from '../../product/entities/Product';

@Entity('shopping_cart_item')
export default class ShoppingCart {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int')
    shopping_cart_id: number;

    @ManyToOne(() => ShoppingCart, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'shopping_cart_id' })
    shoppingCart: ShoppingCart;

    @Column('int')
    product_id: number;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
