import { Router } from 'express';
import userRouter from './user.routes';
import productRouter from './product.routes';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
