import updateOneRouter from './router';
import updateOneController from '../controllers/updateOne';

updateOneRouter.put('/entries/:id', updateOneController);

export default updateOneController;
