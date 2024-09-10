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
import type { ProductSalesTaxApi } from './ProductSalesTaxApi';

/**
 * This class represents the entity "A_ProductSalesTax" of service "API_PRODUCT_SRV".
 */
export class ProductSalesTax<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductSalesTaxType<T>
{
  /**
   * Technical entity name for ProductSalesTax.
   */
  static override _entityName = 'A_ProductSalesTax';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductSalesTax entity.
   */
  static _keys = ['Product', 'Country', 'TaxCategory', 'TaxClassification'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Departure Country/Region (from which the goods are sent).
   * Maximum length: 3.
   */
  declare country: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Condition Type (Sales Tax, Value-Added Tax,...).
   * Maximum length: 4.
   */
  declare taxCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Classification.
   * Maximum length: 1.
   */
  declare taxClassification: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProductSalesTaxApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSalesTaxType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  country: DeserializedType<T, 'Edm.String'>;
  taxCategory: DeserializedType<T, 'Edm.String'>;
  taxClassification: DeserializedType<T, 'Edm.String'>;
}
