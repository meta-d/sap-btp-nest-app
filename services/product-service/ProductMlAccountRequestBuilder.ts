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
import { ProductMlAccount } from './ProductMlAccount';

/**
 * Request builder class for operations supported on the {@link ProductMlAccount} entity.
 */
export class ProductMlAccountRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMlAccount<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMlAccount` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMlAccount` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMlAccount<T>, T> {
    return new GetAllRequestBuilder<ProductMlAccount<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductMlAccount` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMlAccount`.
   */
  create(
    entity: ProductMlAccount<T>
  ): CreateRequestBuilder<ProductMlAccount<T>, T> {
    return new CreateRequestBuilder<ProductMlAccount<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMlAccount` entity based on its keys.
   * @param product Key property. See {@link ProductMlAccount.product}.
   * @param valuationArea Key property. See {@link ProductMlAccount.valuationArea}.
   * @param valuationType Key property. See {@link ProductMlAccount.valuationType}.
   * @param currencyRole Key property. See {@link ProductMlAccount.currencyRole}.
   * @returns A request builder for creating requests to retrieve one `ProductMlAccount` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>,
    currencyRole: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMlAccount<T>, T> {
    return new GetByKeyRequestBuilder<ProductMlAccount<T>, T>(this.entityApi, {
      Product: product,
      ValuationArea: valuationArea,
      ValuationType: valuationType,
      CurrencyRole: currencyRole
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMlAccount`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMlAccount`.
   */
  update(
    entity: ProductMlAccount<T>
  ): UpdateRequestBuilder<ProductMlAccount<T>, T> {
    return new UpdateRequestBuilder<ProductMlAccount<T>, T>(
      this.entityApi,
      entity
    );
  }
}
