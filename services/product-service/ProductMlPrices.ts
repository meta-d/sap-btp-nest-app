/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { ProductMlPricesApi } from './ProductMlPricesApi';

/**
 * This class represents the entity "A_ProductMLPrices" of service "API_PRODUCT_SRV".
 */
export class ProductMlPrices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductMlPricesType<T>
{
  /**
   * Technical entity name for ProductMlPrices.
   */
  static override _entityName = 'A_ProductMLPrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductMlPrices entity.
   */
  static _keys = ['Product', 'ValuationArea', 'ValuationType', 'CurrencyRole'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Valuation Area.
   * Maximum length: 4.
   */
  declare valuationArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Valuation Type.
   * Maximum length: 10.
   */
  declare valuationType: DeserializedType<T, 'Edm.String'>;
  /**
   * External Currency Type and Valuation View.
   * Maximum length: 2.
   */
  declare currencyRole: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Future Price.
   * @nullable
   */
  declare futurePrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Valid From.
   * @nullable
   */
  declare futurePriceValidityStartDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Cost.
   * @nullable
   */
  declare plannedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: ProductMlPricesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMlPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  currencyRole: DeserializedType<T, 'Edm.String'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  futurePrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  futurePriceValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  plannedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
