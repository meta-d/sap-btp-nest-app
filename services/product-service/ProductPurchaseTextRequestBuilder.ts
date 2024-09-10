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
import { ProductPurchaseText } from './ProductPurchaseText';

/**
 * Request builder class for operations supported on the {@link ProductPurchaseText} entity.
 */
export class ProductPurchaseTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPurchaseText<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPurchaseText` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPurchaseText` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPurchaseText<T>, T> {
    return new GetAllRequestBuilder<ProductPurchaseText<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductPurchaseText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPurchaseText`.
   */
  create(
    entity: ProductPurchaseText<T>
  ): CreateRequestBuilder<ProductPurchaseText<T>, T> {
    return new CreateRequestBuilder<ProductPurchaseText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPurchaseText` entity based on its keys.
   * @param product Key property. See {@link ProductPurchaseText.product}.
   * @param language Key property. See {@link ProductPurchaseText.language}.
   * @returns A request builder for creating requests to retrieve one `ProductPurchaseText` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPurchaseText<T>, T> {
    return new GetByKeyRequestBuilder<ProductPurchaseText<T>, T>(
      this.entityApi,
      {
        Product: product,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPurchaseText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPurchaseText`.
   */
  update(
    entity: ProductPurchaseText<T>
  ): UpdateRequestBuilder<ProductPurchaseText<T>, T> {
    return new UpdateRequestBuilder<ProductPurchaseText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPurchaseText`.
   * @param product Key property. See {@link ProductPurchaseText.product}.
   * @param language Key property. See {@link ProductPurchaseText.language}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPurchaseText`.
   */
  delete(
    product: string,
    language: string
  ): DeleteRequestBuilder<ProductPurchaseText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPurchaseText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPurchaseText` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPurchaseText<T>
  ): DeleteRequestBuilder<ProductPurchaseText<T>, T>;
  delete(
    productOrEntity: any,
    language?: string
  ): DeleteRequestBuilder<ProductPurchaseText<T>, T> {
    return new DeleteRequestBuilder<ProductPurchaseText<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductPurchaseText
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Language: language!
          }
    );
  }
}
