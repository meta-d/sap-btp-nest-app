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
import { ProductPlantMrpArea } from './ProductPlantMrpArea';

/**
 * Request builder class for operations supported on the {@link ProductPlantMrpArea} entity.
 */
export class ProductPlantMrpAreaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantMrpArea<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantMrpArea` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantMrpArea` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantMrpArea<T>, T> {
    return new GetAllRequestBuilder<ProductPlantMrpArea<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductPlantMrpArea` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantMrpArea`.
   */
  create(
    entity: ProductPlantMrpArea<T>
  ): CreateRequestBuilder<ProductPlantMrpArea<T>, T> {
    return new CreateRequestBuilder<ProductPlantMrpArea<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantMrpArea` entity based on its keys.
   * @param product Key property. See {@link ProductPlantMrpArea.product}.
   * @param plant Key property. See {@link ProductPlantMrpArea.plant}.
   * @param mrpArea Key property. See {@link ProductPlantMrpArea.mrpArea}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantMrpArea` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>,
    mrpArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantMrpArea<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantMrpArea<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant,
        MRPArea: mrpArea
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantMrpArea`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantMrpArea`.
   */
  update(
    entity: ProductPlantMrpArea<T>
  ): UpdateRequestBuilder<ProductPlantMrpArea<T>, T> {
    return new UpdateRequestBuilder<ProductPlantMrpArea<T>, T>(
      this.entityApi,
      entity
    );
  }
}
