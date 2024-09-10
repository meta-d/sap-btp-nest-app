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
import { ProductUnitsOfMeasureEan } from './ProductUnitsOfMeasureEan';

/**
 * Request builder class for operations supported on the {@link ProductUnitsOfMeasureEan} entity.
 */
export class ProductUnitsOfMeasureEanRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductUnitsOfMeasureEan<T>, T> {
  /**
   * Returns a request builder for querying all `ProductUnitsOfMeasureEan` entities.
   * @returns A request builder for creating requests to retrieve all `ProductUnitsOfMeasureEan` entities.
   */
  getAll(): GetAllRequestBuilder<ProductUnitsOfMeasureEan<T>, T> {
    return new GetAllRequestBuilder<ProductUnitsOfMeasureEan<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductUnitsOfMeasureEan` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductUnitsOfMeasureEan`.
   */
  create(
    entity: ProductUnitsOfMeasureEan<T>
  ): CreateRequestBuilder<ProductUnitsOfMeasureEan<T>, T> {
    return new CreateRequestBuilder<ProductUnitsOfMeasureEan<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductUnitsOfMeasureEan` entity based on its keys.
   * @param product Key property. See {@link ProductUnitsOfMeasureEan.product}.
   * @param alternativeUnit Key property. See {@link ProductUnitsOfMeasureEan.alternativeUnit}.
   * @param consecutiveNumber Key property. See {@link ProductUnitsOfMeasureEan.consecutiveNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductUnitsOfMeasureEan` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    alternativeUnit: DeserializedType<T, 'Edm.String'>,
    consecutiveNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductUnitsOfMeasureEan<T>, T> {
    return new GetByKeyRequestBuilder<ProductUnitsOfMeasureEan<T>, T>(
      this.entityApi,
      {
        Product: product,
        AlternativeUnit: alternativeUnit,
        ConsecutiveNumber: consecutiveNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductUnitsOfMeasureEan`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductUnitsOfMeasureEan`.
   */
  update(
    entity: ProductUnitsOfMeasureEan<T>
  ): UpdateRequestBuilder<ProductUnitsOfMeasureEan<T>, T> {
    return new UpdateRequestBuilder<ProductUnitsOfMeasureEan<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductUnitsOfMeasureEan`.
   * @param product Key property. See {@link ProductUnitsOfMeasureEan.product}.
   * @param alternativeUnit Key property. See {@link ProductUnitsOfMeasureEan.alternativeUnit}.
   * @param consecutiveNumber Key property. See {@link ProductUnitsOfMeasureEan.consecutiveNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitsOfMeasureEan`.
   */
  delete(
    product: string,
    alternativeUnit: string,
    consecutiveNumber: string
  ): DeleteRequestBuilder<ProductUnitsOfMeasureEan<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductUnitsOfMeasureEan`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitsOfMeasureEan` by taking the entity as a parameter.
   */
  delete(
    entity: ProductUnitsOfMeasureEan<T>
  ): DeleteRequestBuilder<ProductUnitsOfMeasureEan<T>, T>;
  delete(
    productOrEntity: any,
    alternativeUnit?: string,
    consecutiveNumber?: string
  ): DeleteRequestBuilder<ProductUnitsOfMeasureEan<T>, T> {
    return new DeleteRequestBuilder<ProductUnitsOfMeasureEan<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductUnitsOfMeasureEan
        ? productOrEntity
        : {
            Product: productOrEntity!,
            AlternativeUnit: alternativeUnit!,
            ConsecutiveNumber: consecutiveNumber!
          }
    );
  }
}
