import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import CustomError from '../errors/custom.error';

export const errorMiddleware: ErrorRequestHandler = (
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    res.status(error.statusCode).json({
      errors: error.errors,
    });

    return;
  }

  res.status(500).send('Internal server error');
};
