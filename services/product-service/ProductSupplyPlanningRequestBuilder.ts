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
import { ProductSupplyPlanning } from './ProductSupplyPlanning';

/**
 * Request builder class for operations supported on the {@link ProductSupplyPlanning} entity.
 */
export class ProductSupplyPlanningRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSupplyPlanning<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSupplyPlanning` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSupplyPlanning` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSupplyPlanning<T>, T> {
    return new GetAllRequestBuilder<ProductSupplyPlanning<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductSupplyPlanning` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSupplyPlanning`.
   */
  create(
    entity: ProductSupplyPlanning<T>
  ): CreateRequestBuilder<ProductSupplyPlanning<T>, T> {
    return new CreateRequestBuilder<ProductSupplyPlanning<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSupplyPlanning` entity based on its keys.
   * @param product Key property. See {@link ProductSupplyPlanning.product}.
   * @param plant Key property. See {@link ProductSupplyPlanning.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductSupplyPlanning` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSupplyPlanning<T>, T> {
    return new GetByKeyRequestBuilder<ProductSupplyPlanning<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSupplyPlanning`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSupplyPlanning`.
   */
  update(
    entity: ProductSupplyPlanning<T>
  ): UpdateRequestBuilder<ProductSupplyPlanning<T>, T> {
    return new UpdateRequestBuilder<ProductSupplyPlanning<T>, T>(
      this.entityApi,
      entity
    );
  }
}
