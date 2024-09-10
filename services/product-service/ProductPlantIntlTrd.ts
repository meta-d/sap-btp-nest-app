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
import type { ProductPlantIntlTrdApi } from './ProductPlantIntlTrdApi';

/**
 * This class represents the entity "A_ProductPlantIntlTrd" of service "API_PRODUCT_SRV".
 */
export class ProductPlantIntlTrd<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantIntlTrdType<T>
{
  /**
   * Technical entity name for ProductPlantIntlTrd.
   */
  static override _entityName = 'A_ProductPlantIntlTrd';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantIntlTrd entity.
   */
  static _keys = ['Product', 'Plant'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Country/Region of Origin of Product.
   * Maximum length: 3.
   * @nullable
   */
  declare countryOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region of Origin.
   * Maximum length: 3.
   * @nullable
   */
  declare regionOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control code for consumption taxes in foreign trade.
   * Maximum length: 16.
   * @nullable
   */
  declare consumptionTaxCtrlCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CAS number for pharmaceutical products in foreign trade.
   * Maximum length: 15.
   * @nullable
   */
  declare productCasNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production statistics: PRODCOM number for foreign trade.
   * Maximum length: 9.
   * @nullable
   */
  declare prodIntlTradeClassification?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Material Group for Intrastat.
   * Maximum length: 4.
   * @nullable
   */
  declare exportAndImportProductGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ProductPlantIntlTrdApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantIntlTrdType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  countryOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  regionOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  consumptionTaxCtrlCode?: DeserializedType<T, 'Edm.String'> | null;
  productCasNumber?: DeserializedType<T, 'Edm.String'> | null;
  prodIntlTradeClassification?: DeserializedType<T, 'Edm.String'> | null;
  exportAndImportProductGroup?: DeserializedType<T, 'Edm.String'> | null;
}
