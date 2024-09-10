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
import { ProductSalesText } from './ProductSalesText';

/**
 * Request builder class for operations supported on the {@link ProductSalesText} entity.
 */
export class ProductSalesTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSalesText<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSalesText` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSalesText` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSalesText<T>, T> {
    return new GetAllRequestBuilder<ProductSalesText<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSalesText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSalesText`.
   */
  create(
    entity: ProductSalesText<T>
  ): CreateRequestBuilder<ProductSalesText<T>, T> {
    return new CreateRequestBuilder<ProductSalesText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSalesText` entity based on its keys.
   * @param product Key property. See {@link ProductSalesText.product}.
   * @param productSalesOrg Key property. See {@link ProductSalesText.productSalesOrg}.
   * @param productDistributionChnl Key property. See {@link ProductSalesText.productDistributionChnl}.
   * @param language Key property. See {@link ProductSalesText.language}.
   * @returns A request builder for creating requests to retrieve one `ProductSalesText` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    productSalesOrg: DeserializedType<T, 'Edm.String'>,
    productDistributionChnl: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSalesText<T>, T> {
    return new GetByKeyRequestBuilder<ProductSalesText<T>, T>(this.entityApi, {
      Product: product,
      ProductSalesOrg: productSalesOrg,
      ProductDistributionChnl: productDistributionChnl,
      Language: language
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSalesText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSalesText`.
   */
  update(
    entity: ProductSalesText<T>
  ): UpdateRequestBuilder<ProductSalesText<T>, T> {
    return new UpdateRequestBuilder<ProductSalesText<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSalesText`.
   * @param product Key property. See {@link ProductSalesText.product}.
   * @param productSalesOrg Key property. See {@link ProductSalesText.productSalesOrg}.
   * @param productDistributionChnl Key property. See {@link ProductSalesText.productDistributionChnl}.
   * @param language Key property. See {@link ProductSalesText.language}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSalesText`.
   */
  delete(
    product: string,
    productSalesOrg: string,
    productDistributionChnl: string,
    language: string
  ): DeleteRequestBuilder<ProductSalesText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSalesText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSalesText` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSalesText<T>
  ): DeleteRequestBuilder<ProductSalesText<T>, T>;
  delete(
    productOrEntity: any,
    productSalesOrg?: string,
    productDistributionChnl?: string,
    language?: string
  ): DeleteRequestBuilder<ProductSalesText<T>, T> {
    return new DeleteRequestBuilder<ProductSalesText<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductSalesText
        ? productOrEntity
        : {
            Product: productOrEntity!,
            ProductSalesOrg: productSalesOrg!,
            ProductDistributionChnl: productDistributionChnl!,
            Language: language!
          }
    );
  }
}
