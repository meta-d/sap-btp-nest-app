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
import { ProductInspectionText } from './ProductInspectionText';

/**
 * Request builder class for operations supported on the {@link ProductInspectionText} entity.
 */
export class ProductInspectionTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductInspectionText<T>, T> {
  /**
   * Returns a request builder for querying all `ProductInspectionText` entities.
   * @returns A request builder for creating requests to retrieve all `ProductInspectionText` entities.
   */
  getAll(): GetAllRequestBuilder<ProductInspectionText<T>, T> {
    return new GetAllRequestBuilder<ProductInspectionText<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductInspectionText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductInspectionText`.
   */
  create(
    entity: ProductInspectionText<T>
  ): CreateRequestBuilder<ProductInspectionText<T>, T> {
    return new CreateRequestBuilder<ProductInspectionText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductInspectionText` entity based on its keys.
   * @param product Key property. See {@link ProductInspectionText.product}.
   * @param language Key property. See {@link ProductInspectionText.language}.
   * @returns A request builder for creating requests to retrieve one `ProductInspectionText` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductInspectionText<T>, T> {
    return new GetByKeyRequestBuilder<ProductInspectionText<T>, T>(
      this.entityApi,
      {
        Product: product,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductInspectionText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductInspectionText`.
   */
  update(
    entity: ProductInspectionText<T>
  ): UpdateRequestBuilder<ProductInspectionText<T>, T> {
    return new UpdateRequestBuilder<ProductInspectionText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductInspectionText`.
   * @param product Key property. See {@link ProductInspectionText.product}.
   * @param language Key property. See {@link ProductInspectionText.language}.
   * @returns A request builder for creating requests that delete an entity of type `ProductInspectionText`.
   */
  delete(
    product: string,
    language: string
  ): DeleteRequestBuilder<ProductInspectionText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductInspectionText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductInspectionText` by taking the entity as a parameter.
   */
  delete(
    entity: ProductInspectionText<T>
  ): DeleteRequestBuilder<ProductInspectionText<T>, T>;
  delete(
    productOrEntity: any,
    language?: string
  ): DeleteRequestBuilder<ProductInspectionText<T>, T> {
    return new DeleteRequestBuilder<ProductInspectionText<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductInspectionText
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Language: language!
          }
    );
  }
}
