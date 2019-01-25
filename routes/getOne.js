import getOneRouter from './router';
import getOneController from '../controllers/getOne';

getOneRouter.get('/entries', getOneController);

export default getOneRouter;
