import deleteOneRouter from './router';
import deleteOneController from '../controllers/deleteOne';

deleteOneRouter.delete('./entries/:id', deleteOneController);

export default deleteOneRouter;
