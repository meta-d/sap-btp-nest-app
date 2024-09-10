/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ProductPlantText } from './ProductPlantText';

/**
 * Request builder class for operations supported on the {@link ProductPlantText} entity.
 */
export class ProductPlantTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantText<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantText` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantText` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantText<T>, T> {
    return new GetAllRequestBuilder<ProductPlantText<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductPlantText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantText`.
   */
  create(
    entity: ProductPlantText<T>
  ): CreateRequestBuilder<ProductPlantText<T>, T> {
    return new CreateRequestBuilder<ProductPlantText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantText` entity based on its keys.
   * @param product Key property. See {@link ProductPlantText.product}.
   * @param plant Key property. See {@link ProductPlantText.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantText` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantText<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantText<T>, T>(this.entityApi, {
      Product: product,
      Plant: plant
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantText`.
   */
  update(
    entity: ProductPlantText<T>
  ): UpdateRequestBuilder<ProductPlantText<T>, T> {
    return new UpdateRequestBuilder<ProductPlantText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPlantText`.
   * @param product Key property. See {@link ProductPlantText.product}.
   * @param plant Key property. See {@link ProductPlantText.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantText`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantText` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantText<T>
  ): DeleteRequestBuilder<ProductPlantText<T>, T>;
  delete(
    productOrEntity: any,
    plant?: string
  ): DeleteRequestBuilder<ProductPlantText<T>, T> {
    return new DeleteRequestBuilder<ProductPlantText<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductPlantText
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Plant: plant!
          }
    );
  }
}
