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
import type { ProductUnitsOfMeasureEanApi } from './ProductUnitsOfMeasureEanApi';

/**
 * This class represents the entity "A_ProductUnitsOfMeasureEAN" of service "API_PRODUCT_SRV".
 */
export class ProductUnitsOfMeasureEan<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductUnitsOfMeasureEanType<T>
{
  /**
   * Technical entity name for ProductUnitsOfMeasureEan.
   */
  static override _entityName = 'A_ProductUnitsOfMeasureEAN';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductUnitsOfMeasureEan entity.
   */
  static _keys = ['Product', 'AlternativeUnit', 'ConsecutiveNumber'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit of Measure for Display.
   * Maximum length: 3.
   */
  declare alternativeUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Consecutive Number.
   * Maximum length: 5.
   */
  declare consecutiveNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * International Article Number (EAN/UPC).
   * Maximum length: 18.
   * @nullable
   */
  declare productStandardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category of Global Trade Item Number (GTIN).
   * Maximum length: 2.
   * @nullable
   */
  declare internationalArticleNumberCat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Indicator: Main EAN.
   * @nullable
   */
  declare isMainGlobalTradeItemNumber?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;

  constructor(_entityApi: ProductUnitsOfMeasureEanApi<T>) {
    super(_entityApi);
  }
}

export interface ProductUnitsOfMeasureEanType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  alternativeUnit: DeserializedType<T, 'Edm.String'>;
  consecutiveNumber: DeserializedType<T, 'Edm.String'>;
  productStandardId?: DeserializedType<T, 'Edm.String'> | null;
  internationalArticleNumberCat?: DeserializedType<T, 'Edm.String'> | null;
  isMainGlobalTradeItemNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
}
