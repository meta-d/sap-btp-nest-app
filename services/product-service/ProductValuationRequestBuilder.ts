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
import { ProductValuation } from './ProductValuation';

/**
 * Request builder class for operations supported on the {@link ProductValuation} entity.
 */
export class ProductValuationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductValuation<T>, T> {
  /**
   * Returns a request builder for querying all `ProductValuation` entities.
   * @returns A request builder for creating requests to retrieve all `ProductValuation` entities.
   */
  getAll(): GetAllRequestBuilder<ProductValuation<T>, T> {
    return new GetAllRequestBuilder<ProductValuation<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductValuation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductValuation`.
   */
  create(
    entity: ProductValuation<T>
  ): CreateRequestBuilder<ProductValuation<T>, T> {
    return new CreateRequestBuilder<ProductValuation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductValuation` entity based on its keys.
   * @param product Key property. See {@link ProductValuation.product}.
   * @param valuationArea Key property. See {@link ProductValuation.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuation.valuationType}.
   * @returns A request builder for creating requests to retrieve one `ProductValuation` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductValuation<T>, T> {
    return new GetByKeyRequestBuilder<ProductValuation<T>, T>(this.entityApi, {
      Product: product,
      ValuationArea: valuationArea,
      ValuationType: valuationType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductValuation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductValuation`.
   */
  update(
    entity: ProductValuation<T>
  ): UpdateRequestBuilder<ProductValuation<T>, T> {
    return new UpdateRequestBuilder<ProductValuation<T>, T>(
      this.entityApi,
      entity
    );
  }
}
