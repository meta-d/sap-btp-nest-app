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
import { ProductPlantQualityMgmt } from './ProductPlantQualityMgmt';

/**
 * Request builder class for operations supported on the {@link ProductPlantQualityMgmt} entity.
 */
export class ProductPlantQualityMgmtRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantQualityMgmt<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantQualityMgmt` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantQualityMgmt` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantQualityMgmt<T>, T> {
    return new GetAllRequestBuilder<ProductPlantQualityMgmt<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductPlantQualityMgmt` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantQualityMgmt`.
   */
  create(
    entity: ProductPlantQualityMgmt<T>
  ): CreateRequestBuilder<ProductPlantQualityMgmt<T>, T> {
    return new CreateRequestBuilder<ProductPlantQualityMgmt<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantQualityMgmt` entity based on its keys.
   * @param product Key property. See {@link ProductPlantQualityMgmt.product}.
   * @param plant Key property. See {@link ProductPlantQualityMgmt.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantQualityMgmt` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantQualityMgmt<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantQualityMgmt<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantQualityMgmt`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantQualityMgmt`.
   */
  update(
    entity: ProductPlantQualityMgmt<T>
  ): UpdateRequestBuilder<ProductPlantQualityMgmt<T>, T> {
    return new UpdateRequestBuilder<ProductPlantQualityMgmt<T>, T>(
      this.entityApi,
      entity
    );
  }
}
