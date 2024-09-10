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
import { ProductStorageLocation } from './ProductStorageLocation';

/**
 * Request builder class for operations supported on the {@link ProductStorageLocation} entity.
 */
export class ProductStorageLocationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductStorageLocation<T>, T> {
  /**
   * Returns a request builder for querying all `ProductStorageLocation` entities.
   * @returns A request builder for creating requests to retrieve all `ProductStorageLocation` entities.
   */
  getAll(): GetAllRequestBuilder<ProductStorageLocation<T>, T> {
    return new GetAllRequestBuilder<ProductStorageLocation<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductStorageLocation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductStorageLocation`.
   */
  create(
    entity: ProductStorageLocation<T>
  ): CreateRequestBuilder<ProductStorageLocation<T>, T> {
    return new CreateRequestBuilder<ProductStorageLocation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductStorageLocation` entity based on its keys.
   * @param product Key property. See {@link ProductStorageLocation.product}.
   * @param plant Key property. See {@link ProductStorageLocation.plant}.
   * @param storageLocation Key property. See {@link ProductStorageLocation.storageLocation}.
   * @returns A request builder for creating requests to retrieve one `ProductStorageLocation` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>,
    storageLocation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductStorageLocation<T>, T> {
    return new GetByKeyRequestBuilder<ProductStorageLocation<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant,
        StorageLocation: storageLocation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductStorageLocation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductStorageLocation`.
   */
  update(
    entity: ProductStorageLocation<T>
  ): UpdateRequestBuilder<ProductStorageLocation<T>, T> {
    return new UpdateRequestBuilder<ProductStorageLocation<T>, T>(
      this.entityApi,
      entity
    );
  }
}
