import getAllRouter from './router';
import getAllController from '../controllers/getAll';

getAllRouter.get('./entries', getAllController);

export default getAllRouter;
