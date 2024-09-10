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
import { ProductPlantForecasting } from './ProductPlantForecasting';

/**
 * Request builder class for operations supported on the {@link ProductPlantForecasting} entity.
 */
export class ProductPlantForecastingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantForecasting<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantForecasting` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantForecasting` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantForecasting<T>, T> {
    return new GetAllRequestBuilder<ProductPlantForecasting<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductPlantForecasting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantForecasting`.
   */
  create(
    entity: ProductPlantForecasting<T>
  ): CreateRequestBuilder<ProductPlantForecasting<T>, T> {
    return new CreateRequestBuilder<ProductPlantForecasting<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantForecasting` entity based on its keys.
   * @param product Key property. See {@link ProductPlantForecasting.product}.
   * @param plant Key property. See {@link ProductPlantForecasting.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantForecasting` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantForecasting<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantForecasting<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantForecasting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantForecasting`.
   */
  update(
    entity: ProductPlantForecasting<T>
  ): UpdateRequestBuilder<ProductPlantForecasting<T>, T> {
    return new UpdateRequestBuilder<ProductPlantForecasting<T>, T>(
      this.entityApi,
      entity
    );
  }
}
