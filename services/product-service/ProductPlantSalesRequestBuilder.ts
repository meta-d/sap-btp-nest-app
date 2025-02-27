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
import { ProductPlantSales } from './ProductPlantSales';

/**
 * Request builder class for operations supported on the {@link ProductPlantSales} entity.
 */
export class ProductPlantSalesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantSales<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantSales` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantSales` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantSales<T>, T> {
    return new GetAllRequestBuilder<ProductPlantSales<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductPlantSales` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantSales`.
   */
  create(
    entity: ProductPlantSales<T>
  ): CreateRequestBuilder<ProductPlantSales<T>, T> {
    return new CreateRequestBuilder<ProductPlantSales<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantSales` entity based on its keys.
   * @param product Key property. See {@link ProductPlantSales.product}.
   * @param plant Key property. See {@link ProductPlantSales.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantSales` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantSales<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantSales<T>, T>(this.entityApi, {
      Product: product,
      Plant: plant
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantSales`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantSales`.
   */
  update(
    entity: ProductPlantSales<T>
  ): UpdateRequestBuilder<ProductPlantSales<T>, T> {
    return new UpdateRequestBuilder<ProductPlantSales<T>, T>(
      this.entityApi,
      entity
    );
  }
}
