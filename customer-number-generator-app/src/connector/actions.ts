import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';

const CUSTOMER_CREATE_EXTENSION_KEY = 'myconnector-customerCreateExtension';

export async function createCustomerCreateExtension(
  apiRoot: ByProjectKeyRequestBuilder,
  applicationUrl: string
): Promise<void> {
  console.log(applicationUrl);

  const {
    body: { results: extensions },
  } = await apiRoot
    .extensions()
    .get({
      queryArgs: {
        where: `key = "${CUSTOMER_CREATE_EXTENSION_KEY}"`,
      },
    })
    .execute();

  if (extensions.length > 0) {
    const extension = extensions[0];
    await apiRoot
      .extensions()
      .withKey({ key: CUSTOMER_CREATE_EXTENSION_KEY })
      .delete({
        queryArgs: {
          version: extension.version,
        },
      })
      .execute();
  }

  await apiRoot
    .extensions()
    .post({
      body: {
        key: CUSTOMER_CREATE_EXTENSION_KEY,
        destination: {
          type: 'HTTP',
          url: applicationUrl,
        },
        triggers: [
          {
            resourceTypeId: 'customer',
            actions: ['Create'],
          },
        ],
      },
    })
    .execute();
}

export async function deleteCustomerCreateExtension(
  apiRoot: ByProjectKeyRequestBuilder
): Promise<void> {
  const {
    body: { results: extensions },
  } = await apiRoot
    .extensions()
    .get({
      queryArgs: {
        where: `key = "${CUSTOMER_CREATE_EXTENSION_KEY}"`,
      },
    })
    .execute();

  if (extensions.length > 0) {
    const extension = extensions[0];
    await apiRoot
      .extensions()
      .withKey({ key: CUSTOMER_CREATE_EXTENSION_KEY })
      .delete({
        queryArgs: {
          version: extension.version,
        },
      })
      .execute();
  }
}
