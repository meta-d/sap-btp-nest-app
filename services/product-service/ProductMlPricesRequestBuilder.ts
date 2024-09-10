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
import { ProductMlPrices } from './ProductMlPrices';

/**
 * Request builder class for operations supported on the {@link ProductMlPrices} entity.
 */
export class ProductMlPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMlPrices<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMlPrices` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMlPrices` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMlPrices<T>, T> {
    return new GetAllRequestBuilder<ProductMlPrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductMlPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMlPrices`.
   */
  create(
    entity: ProductMlPrices<T>
  ): CreateRequestBuilder<ProductMlPrices<T>, T> {
    return new CreateRequestBuilder<ProductMlPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMlPrices` entity based on its keys.
   * @param product Key property. See {@link ProductMlPrices.product}.
   * @param valuationArea Key property. See {@link ProductMlPrices.valuationArea}.
   * @param valuationType Key property. See {@link ProductMlPrices.valuationType}.
   * @param currencyRole Key property. See {@link ProductMlPrices.currencyRole}.
   * @returns A request builder for creating requests to retrieve one `ProductMlPrices` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>,
    currencyRole: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMlPrices<T>, T> {
    return new GetByKeyRequestBuilder<ProductMlPrices<T>, T>(this.entityApi, {
      Product: product,
      ValuationArea: valuationArea,
      ValuationType: valuationType,
      CurrencyRole: currencyRole
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMlPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMlPrices`.
   */
  update(
    entity: ProductMlPrices<T>
  ): UpdateRequestBuilder<ProductMlPrices<T>, T> {
    return new UpdateRequestBuilder<ProductMlPrices<T>, T>(
      this.entityApi,
      entity
    );
  }
}
