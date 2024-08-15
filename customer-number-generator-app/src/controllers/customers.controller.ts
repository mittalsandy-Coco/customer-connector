import { UpdateAction } from '@commercetools/sdk-client-v2';

import CustomError from '../errors/custom.error';
import { Resource } from '../interfaces/resource.interface';

/**
 * Handle the create action
 *
 * @param {Resource} resource The resource from the request body
 * @returns {object}
 */
const create = async (resource: Resource) => {
  const updateActions: Array<UpdateAction> = [];

 // TODO: Create the UpdateAction Object to return it to the client
 const updateAction: UpdateAction = {
  action: 'setCustomerNumber',
  customerNumber: String(Math.floor(1000 + Math.random() * 900)),
};

updateActions.push(updateAction);

  return { statusCode: 201, actions: updateActions };
};

// Controller for update actions
// const update = (resource: Resource) => {};

/**
 * Handle the order controller according to the action
 *
 * @param {string} action The action that comes with the request. Could be `Create` or `Update`
 * @param {Resource} resource The resource from the request body
 * @returns {Promise<object>} The data from the method that handles the action
 */
export const customerController = async (
  action: string,
  resource: Resource
) => {
  switch (action) {
    case 'Create': {
      const data = create(resource);
      return data;
    }
    case 'Update':
      break;

    default:
      throw new CustomError(
        'InvalidOperation',
        400,
        `The action is not recognized. Allowed values are 'Create' or 'Update'.`
      );
  }
};
