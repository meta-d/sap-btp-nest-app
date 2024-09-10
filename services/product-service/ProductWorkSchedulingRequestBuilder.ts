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
import { ProductWorkScheduling } from './ProductWorkScheduling';

/**
 * Request builder class for operations supported on the {@link ProductWorkScheduling} entity.
 */
export class ProductWorkSchedulingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductWorkScheduling<T>, T> {
  /**
   * Returns a request builder for querying all `ProductWorkScheduling` entities.
   * @returns A request builder for creating requests to retrieve all `ProductWorkScheduling` entities.
   */
  getAll(): GetAllRequestBuilder<ProductWorkScheduling<T>, T> {
    return new GetAllRequestBuilder<ProductWorkScheduling<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductWorkScheduling` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductWorkScheduling`.
   */
  create(
    entity: ProductWorkScheduling<T>
  ): CreateRequestBuilder<ProductWorkScheduling<T>, T> {
    return new CreateRequestBuilder<ProductWorkScheduling<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductWorkScheduling` entity based on its keys.
   * @param product Key property. See {@link ProductWorkScheduling.product}.
   * @param plant Key property. See {@link ProductWorkScheduling.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductWorkScheduling` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductWorkScheduling<T>, T> {
    return new GetByKeyRequestBuilder<ProductWorkScheduling<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductWorkScheduling`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductWorkScheduling`.
   */
  update(
    entity: ProductWorkScheduling<T>
  ): UpdateRequestBuilder<ProductWorkScheduling<T>, T> {
    return new UpdateRequestBuilder<ProductWorkScheduling<T>, T>(
      this.entityApi,
      entity
    );
  }
}
