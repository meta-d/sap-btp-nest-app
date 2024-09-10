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
import type { ProductSalesApi } from './ProductSalesApi';

/**
 * This class represents the entity "A_ProductSales" of service "API_PRODUCT_SRV".
 */
export class ProductSales<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductSalesType<T>
{
  /**
   * Technical entity name for ProductSales.
   */
  static override _entityName = 'A_ProductSales';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductSales entity.
   */
  static _keys = ['Product'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Cross-Distribution-Chain Material Status.
   * Maximum length: 2.
   * @nullable
   */
  declare salesStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date from which the X-distr.-chain Product status is valid.
   * @nullable
   */
  declare salesStatusValidityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Tax classification of the material.
   * Maximum length: 1.
   * @nullable
   */
  declare taxClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Group.
   * Maximum length: 4.
   * @nullable
   */
  declare transportationGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductSalesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSalesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  salesStatus?: DeserializedType<T, 'Edm.String'> | null;
  salesStatusValidityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  taxClassification?: DeserializedType<T, 'Edm.String'> | null;
  transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
