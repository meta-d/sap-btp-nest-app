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
import { ProductValuationCosting } from './ProductValuationCosting';

/**
 * Request builder class for operations supported on the {@link ProductValuationCosting} entity.
 */
export class ProductValuationCostingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductValuationCosting<T>, T> {
  /**
   * Returns a request builder for querying all `ProductValuationCosting` entities.
   * @returns A request builder for creating requests to retrieve all `ProductValuationCosting` entities.
   */
  getAll(): GetAllRequestBuilder<ProductValuationCosting<T>, T> {
    return new GetAllRequestBuilder<ProductValuationCosting<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductValuationCosting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductValuationCosting`.
   */
  create(
    entity: ProductValuationCosting<T>
  ): CreateRequestBuilder<ProductValuationCosting<T>, T> {
    return new CreateRequestBuilder<ProductValuationCosting<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductValuationCosting` entity based on its keys.
   * @param product Key property. See {@link ProductValuationCosting.product}.
   * @param valuationArea Key property. See {@link ProductValuationCosting.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationCosting.valuationType}.
   * @returns A request builder for creating requests to retrieve one `ProductValuationCosting` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductValuationCosting<T>, T> {
    return new GetByKeyRequestBuilder<ProductValuationCosting<T>, T>(
      this.entityApi,
      {
        Product: product,
        ValuationArea: valuationArea,
        ValuationType: valuationType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductValuationCosting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductValuationCosting`.
   */
  update(
    entity: ProductValuationCosting<T>
  ): UpdateRequestBuilder<ProductValuationCosting<T>, T> {
    return new UpdateRequestBuilder<ProductValuationCosting<T>, T>(
      this.entityApi,
      entity
    );
  }
}
