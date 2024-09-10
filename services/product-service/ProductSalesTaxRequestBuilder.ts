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
import { ProductSalesTax } from './ProductSalesTax';

/**
 * Request builder class for operations supported on the {@link ProductSalesTax} entity.
 */
export class ProductSalesTaxRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSalesTax<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSalesTax` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSalesTax` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSalesTax<T>, T> {
    return new GetAllRequestBuilder<ProductSalesTax<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSalesTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSalesTax`.
   */
  create(
    entity: ProductSalesTax<T>
  ): CreateRequestBuilder<ProductSalesTax<T>, T> {
    return new CreateRequestBuilder<ProductSalesTax<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSalesTax` entity based on its keys.
   * @param product Key property. See {@link ProductSalesTax.product}.
   * @param country Key property. See {@link ProductSalesTax.country}.
   * @param taxCategory Key property. See {@link ProductSalesTax.taxCategory}.
   * @param taxClassification Key property. See {@link ProductSalesTax.taxClassification}.
   * @returns A request builder for creating requests to retrieve one `ProductSalesTax` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    country: DeserializedType<T, 'Edm.String'>,
    taxCategory: DeserializedType<T, 'Edm.String'>,
    taxClassification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSalesTax<T>, T> {
    return new GetByKeyRequestBuilder<ProductSalesTax<T>, T>(this.entityApi, {
      Product: product,
      Country: country,
      TaxCategory: taxCategory,
      TaxClassification: taxClassification
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSalesTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSalesTax`.
   */
  update(
    entity: ProductSalesTax<T>
  ): UpdateRequestBuilder<ProductSalesTax<T>, T> {
    return new UpdateRequestBuilder<ProductSalesTax<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSalesTax`.
   * @param product Key property. See {@link ProductSalesTax.product}.
   * @param country Key property. See {@link ProductSalesTax.country}.
   * @param taxCategory Key property. See {@link ProductSalesTax.taxCategory}.
   * @param taxClassification Key property. See {@link ProductSalesTax.taxClassification}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSalesTax`.
   */
  delete(
    product: string,
    country: string,
    taxCategory: string,
    taxClassification: string
  ): DeleteRequestBuilder<ProductSalesTax<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSalesTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSalesTax` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSalesTax<T>
  ): DeleteRequestBuilder<ProductSalesTax<T>, T>;
  delete(
    productOrEntity: any,
    country?: string,
    taxCategory?: string,
    taxClassification?: string
  ): DeleteRequestBuilder<ProductSalesTax<T>, T> {
    return new DeleteRequestBuilder<ProductSalesTax<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductSalesTax
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Country: country!,
            TaxCategory: taxCategory!,
            TaxClassification: taxClassification!
          }
    );
  }
}
