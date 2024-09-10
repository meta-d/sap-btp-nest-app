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
import type { ProductSalesTextApi } from './ProductSalesTextApi';

/**
 * This class represents the entity "A_ProductSalesText" of service "API_PRODUCT_SRV".
 */
export class ProductSalesText<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductSalesTextType<T>
{
  /**
   * Technical entity name for ProductSalesText.
   */
  static override _entityName = 'A_ProductSalesText';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductSalesText entity.
   */
  static _keys = [
    'Product',
    'ProductSalesOrg',
    'ProductDistributionChnl',
    'Language'
  ];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Organization.
   * Maximum length: 4.
   */
  declare productSalesOrg: DeserializedType<T, 'Edm.String'>;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   */
  declare productDistributionChnl: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Key.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * String.
   * @nullable
   */
  declare longText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductSalesTextApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSalesTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  productSalesOrg: DeserializedType<T, 'Edm.String'>;
  productDistributionChnl: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
