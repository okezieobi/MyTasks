import createOneRouter from './createOne';
import deleteOneRouter from './deleteOne';
import getAllRouter from './getAll';
import getOneRouter from './getOne';
import updateOneRouter from './updateOne';

export default (app) => {
  app.use('/v1', createOneRouter);
  app.use('/v1', deleteOneRouter);
  app.use('/v1', getAllRouter);
  app.use('/v1', getOneRouter);
  app.use('/v1', updateOneRouter);
};
