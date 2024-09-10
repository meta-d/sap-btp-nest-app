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
import { ProductProcurement } from './ProductProcurement';

/**
 * Request builder class for operations supported on the {@link ProductProcurement} entity.
 */
export class ProductProcurementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductProcurement<T>, T> {
  /**
   * Returns a request builder for querying all `ProductProcurement` entities.
   * @returns A request builder for creating requests to retrieve all `ProductProcurement` entities.
   */
  getAll(): GetAllRequestBuilder<ProductProcurement<T>, T> {
    return new GetAllRequestBuilder<ProductProcurement<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductProcurement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductProcurement`.
   */
  create(
    entity: ProductProcurement<T>
  ): CreateRequestBuilder<ProductProcurement<T>, T> {
    return new CreateRequestBuilder<ProductProcurement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductProcurement` entity based on its keys.
   * @param product Key property. See {@link ProductProcurement.product}.
   * @returns A request builder for creating requests to retrieve one `ProductProcurement` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductProcurement<T>, T> {
    return new GetByKeyRequestBuilder<ProductProcurement<T>, T>(
      this.entityApi,
      { Product: product }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductProcurement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductProcurement`.
   */
  update(
    entity: ProductProcurement<T>
  ): UpdateRequestBuilder<ProductProcurement<T>, T> {
    return new UpdateRequestBuilder<ProductProcurement<T>, T>(
      this.entityApi,
      entity
    );
  }
}
