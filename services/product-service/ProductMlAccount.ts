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
import type { ProductMlAccountApi } from './ProductMlAccountApi';

/**
 * This class represents the entity "A_ProductMLAccount" of service "API_PRODUCT_SRV".
 */
export class ProductMlAccount<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductMlAccountType<T>
{
  /**
   * Technical entity name for ProductMlAccount.
   */
  static override _entityName = 'A_ProductMLAccount';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductMlAccount entity.
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
   * Price control indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare productPriceControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price unit.
   * @nullable
   */
  declare priceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Periodic Unit Price.
   * @nullable
   */
  declare movingAveragePrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Standard Price.
   * @nullable
   */
  declare standardPrice?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: ProductMlAccountApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMlAccountType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  currencyRole: DeserializedType<T, 'Edm.String'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  productPriceControl?: DeserializedType<T, 'Edm.String'> | null;
  priceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  movingAveragePrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  standardPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
}
