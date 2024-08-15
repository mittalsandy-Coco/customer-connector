import { createApiRoot } from '../client/create.client';
import { logger } from '../utils/logger.utils';

class EmailVerificationHandler {
  async process(messageBody: any) {
    const customerId = messageBody.resource.id;
    const apiRoot = createApiRoot();

    const customer = await apiRoot
      .customers()
      .withId({ ID: customerId })
      .get()
      .execute();

    const token = await apiRoot
      .customers()
      .emailToken()
      .post({
        body: {
          id: customerId,
          ttlMinutes: 90,
        },
      })
      .execute();

    logger.info(
      `Ready to send email verification: customerEmail=${customer.body.email}, with token=${token.body.value}`
    );
  }
}
export default EmailVerificationHandler;
