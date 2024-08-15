import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';

const CONTAINER = 'application-settings';
const CUSTOM_OBJECT_KEY = 'application-settings-object';

export async function createCustomObject(
  apiRoot: ByProjectKeyRequestBuilder,
  applicationUrl: string
): Promise<void> {
  const {
    body: { results: customObjects },
  } = await apiRoot
    .customObjects()
    .withContainer({ container: CONTAINER })
    .get({
      queryArgs: {
        where: `key = "${CUSTOM_OBJECT_KEY}"`,
      },
    })
    .execute();

  if (customObjects.length > 0) {
    const customObject = customObjects[0];

    await apiRoot
      .extensions()
      .withKey({ key: CUSTOM_OBJECT_KEY })
      .delete({
        queryArgs: {
          version: customObject.version,
        },
      })
      .execute();
  }

  await apiRoot
    .customObjects()
    .post({
      body: {
        key: CUSTOM_OBJECT_KEY,
        container: CONTAINER,
        value: {
          'webhook-url': applicationUrl,
        },
      },
    })
    .execute();
}

export async function deleteCustomObject(
  apiRoot: ByProjectKeyRequestBuilder
): Promise<void> {
  const {
    body: { results: customObjects },
  } = await apiRoot
    .customObjects()
    .withContainer({ container: CONTAINER })
    .get({
      queryArgs: {
        where: `key = "${CUSTOM_OBJECT_KEY}"`,
      },
    })
    .execute();

  if (customObjects.length > 0) {
    await apiRoot
      .customObjects()
      .withContainerAndKey({ container: CONTAINER, key: CUSTOM_OBJECT_KEY })
      .delete()
      .execute();
  }
}
