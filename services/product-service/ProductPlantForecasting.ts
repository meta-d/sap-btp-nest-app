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
import type { ProductPlantForecastingApi } from './ProductPlantForecastingApi';

/**
 * This class represents the entity "A_ProductPlantForecasting" of service "API_PRODUCT_SRV".
 */
export class ProductPlantForecasting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantForecastingType<T>
{
  /**
   * Technical entity name for ProductPlantForecasting.
   */
  static override _entityName = 'A_ProductPlantForecasting';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantForecasting entity.
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
   * To date of the material to be copied for consumption.
   * @nullable
   */
  declare consumptionRefUsageEndDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Multiplier for reference material for consumption.
   * @nullable
   */
  declare consumptionQtyMultiplier?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Reference material for consumption.
   * Maximum length: 40.
   * @nullable
   */
  declare consumptionReferenceProduct?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reference plant for consumption.
   * Maximum length: 4.
   * @nullable
   */
  declare consumptionReferencePlant?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductPlantForecastingApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantForecastingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  consumptionRefUsageEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  consumptionQtyMultiplier?: DeserializedType<T, 'Edm.Decimal'> | null;
  consumptionReferenceProduct?: DeserializedType<T, 'Edm.String'> | null;
  consumptionReferencePlant?: DeserializedType<T, 'Edm.String'> | null;
}
