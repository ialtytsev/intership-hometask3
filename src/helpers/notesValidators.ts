import express from 'express';
import { NoteCreateSchema, NoteUpdateSchema, idSchema } from '../models/noteModel';

export const noteValidator = ( schema: NoteUpdateSchema | NoteCreateSchema ) =>
(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  schema.validate(req.body)
  .then(() => {
    next();
  })
  .catch((err) => {
    res.statusCode = 400;
    res.send(err.errors)
  })
}
  
export const idValidator = () =>
(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => (
  idSchema.validate(req.params)
    .then(() => {
      next();
    })
    .catch((err) => {
      res.statusCode = 400;
      res.send(err.errors)
    })
)