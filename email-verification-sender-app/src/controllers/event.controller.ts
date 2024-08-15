import { Request, Response } from 'express';
import {
  HTTP_STATUS_SUCCESS_ACCEPTED,
  HTTP_STATUS_BAD_REQUEST,
} from '../constants/http-status.constants';
import {
  doValidation,
  isCustomerCreatedMessage,
} from '../validators/message.validators';
import { decodeToJson } from '../utils/decoder.utils';
import CustomError from '../errors/custom.error';
import EmailVerificationHandler from '../handlers/email-verification.handler';

/**
 * Exposed event POST endpoint.
 * Receives the Pub/Sub message and works with it
 *
 * @typedef {import("express").Response} Response
 * @typedef {import("express").Request} Request
 *
 * @param {Request} request The express request
 * @param {Response} response The express response
 * @returns
 */
export const post = async (request: Request, response: Response) => {
  try {
    // Check request body
    doValidation(request);

    const encodedMessageBody = request.body.message.data;
    const messageBody = decodeToJson(encodedMessageBody);

    if (isCustomerCreatedMessage(messageBody)) {
      const handler = new EmailVerificationHandler();
      await handler.process(messageBody);
      response.status(HTTP_STATUS_SUCCESS_ACCEPTED).send();
    }
  } catch (error) {
    if (error instanceof CustomError) {
      response.status(error.statusCode as number).send();
      return;
    }
    throw new CustomError(400, `Bad request: ${error}`);
  }
};
