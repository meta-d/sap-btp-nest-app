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
import { ProductUnitsOfMeasure } from './ProductUnitsOfMeasure';

/**
 * Request builder class for operations supported on the {@link ProductUnitsOfMeasure} entity.
 */
export class ProductUnitsOfMeasureRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductUnitsOfMeasure<T>, T> {
  /**
   * Returns a request builder for querying all `ProductUnitsOfMeasure` entities.
   * @returns A request builder for creating requests to retrieve all `ProductUnitsOfMeasure` entities.
   */
  getAll(): GetAllRequestBuilder<ProductUnitsOfMeasure<T>, T> {
    return new GetAllRequestBuilder<ProductUnitsOfMeasure<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductUnitsOfMeasure` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductUnitsOfMeasure`.
   */
  create(
    entity: ProductUnitsOfMeasure<T>
  ): CreateRequestBuilder<ProductUnitsOfMeasure<T>, T> {
    return new CreateRequestBuilder<ProductUnitsOfMeasure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductUnitsOfMeasure` entity based on its keys.
   * @param product Key property. See {@link ProductUnitsOfMeasure.product}.
   * @param alternativeUnit Key property. See {@link ProductUnitsOfMeasure.alternativeUnit}.
   * @returns A request builder for creating requests to retrieve one `ProductUnitsOfMeasure` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    alternativeUnit: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductUnitsOfMeasure<T>, T> {
    return new GetByKeyRequestBuilder<ProductUnitsOfMeasure<T>, T>(
      this.entityApi,
      {
        Product: product,
        AlternativeUnit: alternativeUnit
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductUnitsOfMeasure`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductUnitsOfMeasure`.
   */
  update(
    entity: ProductUnitsOfMeasure<T>
  ): UpdateRequestBuilder<ProductUnitsOfMeasure<T>, T> {
    return new UpdateRequestBuilder<ProductUnitsOfMeasure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductUnitsOfMeasure`.
   * @param product Key property. See {@link ProductUnitsOfMeasure.product}.
   * @param alternativeUnit Key property. See {@link ProductUnitsOfMeasure.alternativeUnit}.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitsOfMeasure`.
   */
  delete(
    product: string,
    alternativeUnit: string
  ): DeleteRequestBuilder<ProductUnitsOfMeasure<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductUnitsOfMeasure`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitsOfMeasure` by taking the entity as a parameter.
   */
  delete(
    entity: ProductUnitsOfMeasure<T>
  ): DeleteRequestBuilder<ProductUnitsOfMeasure<T>, T>;
  delete(
    productOrEntity: any,
    alternativeUnit?: string
  ): DeleteRequestBuilder<ProductUnitsOfMeasure<T>, T> {
    return new DeleteRequestBuilder<ProductUnitsOfMeasure<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductUnitsOfMeasure
        ? productOrEntity
        : {
            Product: productOrEntity!,
            AlternativeUnit: alternativeUnit!
          }
    );
  }
}
