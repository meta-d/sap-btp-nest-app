/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ProductValuationAccount } from './ProductValuationAccount';

/**
 * Request builder class for operations supported on the {@link ProductValuationAccount} entity.
 */
export class ProductValuationAccountRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductValuationAccount<T>, T> {
  /**
   * Returns a request builder for querying all `ProductValuationAccount` entities.
   * @returns A request builder for creating requests to retrieve all `ProductValuationAccount` entities.
   */
  getAll(): GetAllRequestBuilder<ProductValuationAccount<T>, T> {
    return new GetAllRequestBuilder<ProductValuationAccount<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductValuationAccount` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductValuationAccount`.
   */
  create(
    entity: ProductValuationAccount<T>
  ): CreateRequestBuilder<ProductValuationAccount<T>, T> {
    return new CreateRequestBuilder<ProductValuationAccount<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductValuationAccount` entity based on its keys.
   * @param product Key property. See {@link ProductValuationAccount.product}.
   * @param valuationArea Key property. See {@link ProductValuationAccount.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationAccount.valuationType}.
   * @returns A request builder for creating requests to retrieve one `ProductValuationAccount` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductValuationAccount<T>, T> {
    return new GetByKeyRequestBuilder<ProductValuationAccount<T>, T>(
      this.entityApi,
      {
        Product: product,
        ValuationArea: valuationArea,
        ValuationType: valuationType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductValuationAccount`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductValuationAccount`.
   */
  update(
    entity: ProductValuationAccount<T>
  ): UpdateRequestBuilder<ProductValuationAccount<T>, T> {
    return new UpdateRequestBuilder<ProductValuationAccount<T>, T>(
      this.entityApi,
      entity
    );
  }
}
