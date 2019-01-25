import createOneRouter from './router';

import createOneController from '../controllers/createOne';

createOneRouter.post('/entries', createOneController);

export default createOneRouter;
