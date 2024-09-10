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
import { ProductSalesDelivery } from './ProductSalesDelivery';

/**
 * Request builder class for operations supported on the {@link ProductSalesDelivery} entity.
 */
export class ProductSalesDeliveryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSalesDelivery<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSalesDelivery` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSalesDelivery` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSalesDelivery<T>, T> {
    return new GetAllRequestBuilder<ProductSalesDelivery<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSalesDelivery` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSalesDelivery`.
   */
  create(
    entity: ProductSalesDelivery<T>
  ): CreateRequestBuilder<ProductSalesDelivery<T>, T> {
    return new CreateRequestBuilder<ProductSalesDelivery<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSalesDelivery` entity based on its keys.
   * @param product Key property. See {@link ProductSalesDelivery.product}.
   * @param productSalesOrg Key property. See {@link ProductSalesDelivery.productSalesOrg}.
   * @param productDistributionChnl Key property. See {@link ProductSalesDelivery.productDistributionChnl}.
   * @returns A request builder for creating requests to retrieve one `ProductSalesDelivery` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    productSalesOrg: DeserializedType<T, 'Edm.String'>,
    productDistributionChnl: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSalesDelivery<T>, T> {
    return new GetByKeyRequestBuilder<ProductSalesDelivery<T>, T>(
      this.entityApi,
      {
        Product: product,
        ProductSalesOrg: productSalesOrg,
        ProductDistributionChnl: productDistributionChnl
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSalesDelivery`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSalesDelivery`.
   */
  update(
    entity: ProductSalesDelivery<T>
  ): UpdateRequestBuilder<ProductSalesDelivery<T>, T> {
    return new UpdateRequestBuilder<ProductSalesDelivery<T>, T>(
      this.entityApi,
      entity
    );
  }
}
