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
import { ProductPlantIntlTrd } from './ProductPlantIntlTrd';

/**
 * Request builder class for operations supported on the {@link ProductPlantIntlTrd} entity.
 */
export class ProductPlantIntlTrdRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantIntlTrd<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantIntlTrd` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantIntlTrd` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantIntlTrd<T>, T> {
    return new GetAllRequestBuilder<ProductPlantIntlTrd<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductPlantIntlTrd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantIntlTrd`.
   */
  create(
    entity: ProductPlantIntlTrd<T>
  ): CreateRequestBuilder<ProductPlantIntlTrd<T>, T> {
    return new CreateRequestBuilder<ProductPlantIntlTrd<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantIntlTrd` entity based on its keys.
   * @param product Key property. See {@link ProductPlantIntlTrd.product}.
   * @param plant Key property. See {@link ProductPlantIntlTrd.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantIntlTrd` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantIntlTrd<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantIntlTrd<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantIntlTrd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantIntlTrd`.
   */
  update(
    entity: ProductPlantIntlTrd<T>
  ): UpdateRequestBuilder<ProductPlantIntlTrd<T>, T> {
    return new UpdateRequestBuilder<ProductPlantIntlTrd<T>, T>(
      this.entityApi,
      entity
    );
  }
}
