import { Request, Response } from 'express';
import CustomError from '../errors/custom.error';
import { createApiRoot } from '../client/create.client';
import { isHttpError } from '../types/index.types';

// import { customerController } from './customers.controller';

/**
 * Exposed service endpoint.
 * - Receives a POST request, parses the action and the controller
 * and returns it to the correct controller. We should be use 3. `Cart`, `Order` and `Payments`
 *
 * @param {Request} request The express request
 * @param {Response} response The express response
 * @returns
 */
export const post = async (request: Request, response: Response) => {
  const { token } = request.body;

  const apiRoot = createApiRoot();
  try {
    const customer = await apiRoot
      .customers()
      .emailConfirm()
      .post({
        body: {
          tokenValue: token,
        },
      })
      .execute();

    response.status(200).json(customer);
  } catch (error) {
    if (isHttpError(error)) {
      throw new CustomError(error.code, error.message, error.body?.errors);
    } else {
      throw new CustomError('Internal Server Error', 'Unable to verify token');
    }
  }
};
