/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ProductBasicText } from './ProductBasicText';

/**
 * Request builder class for operations supported on the {@link ProductBasicText} entity.
 */
export class ProductBasicTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductBasicText<T>, T> {
  /**
   * Returns a request builder for querying all `ProductBasicText` entities.
   * @returns A request builder for creating requests to retrieve all `ProductBasicText` entities.
   */
  getAll(): GetAllRequestBuilder<ProductBasicText<T>, T> {
    return new GetAllRequestBuilder<ProductBasicText<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductBasicText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductBasicText`.
   */
  create(
    entity: ProductBasicText<T>
  ): CreateRequestBuilder<ProductBasicText<T>, T> {
    return new CreateRequestBuilder<ProductBasicText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductBasicText` entity based on its keys.
   * @param product Key property. See {@link ProductBasicText.product}.
   * @param language Key property. See {@link ProductBasicText.language}.
   * @returns A request builder for creating requests to retrieve one `ProductBasicText` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductBasicText<T>, T> {
    return new GetByKeyRequestBuilder<ProductBasicText<T>, T>(this.entityApi, {
      Product: product,
      Language: language
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductBasicText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductBasicText`.
   */
  update(
    entity: ProductBasicText<T>
  ): UpdateRequestBuilder<ProductBasicText<T>, T> {
    return new UpdateRequestBuilder<ProductBasicText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductBasicText`.
   * @param product Key property. See {@link ProductBasicText.product}.
   * @param language Key property. See {@link ProductBasicText.language}.
   * @returns A request builder for creating requests that delete an entity of type `ProductBasicText`.
   */
  delete(
    product: string,
    language: string
  ): DeleteRequestBuilder<ProductBasicText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductBasicText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductBasicText` by taking the entity as a parameter.
   */
  delete(
    entity: ProductBasicText<T>
  ): DeleteRequestBuilder<ProductBasicText<T>, T>;
  delete(
    productOrEntity: any,
    language?: string
  ): DeleteRequestBuilder<ProductBasicText<T>, T> {
    return new DeleteRequestBuilder<ProductBasicText<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductBasicText
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Language: language!
          }
    );
  }
}
