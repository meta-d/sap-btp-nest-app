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
import type { ProductPlantStorageApi } from './ProductPlantStorageApi';

/**
 * This class represents the entity "A_ProductPlantStorage" of service "API_PRODUCT_SRV".
 */
export class ProductPlantStorage<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantStorageType<T>
{
  /**
   * Technical entity name for ProductPlantStorage.
   */
  static override _entityName = 'A_ProductPlantStorage';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantStorage entity.
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
   * Physical Inventory Indicator for Cycle Counting.
   * Maximum length: 1.
   * @nullable
   */
  declare inventoryForCycleCountInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * IS-R service level.
   * Maximum length: 1.
   * @nullable
   */
  declare provisioningServiceLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CC indicator is fixed.
   * @nullable
   */
  declare cycleCountingIndicatorIsFixed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Unit for maximum storage period.
   * Maximum length: 3.
   * @nullable
   */
  declare prodMaximumStoragePeriodUnit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Strategy for Putaway and Stock Removal.
   * Maximum length: 1.
   * @nullable
   */
  declare wrhsMgmtPtwyAndStkRemovalStrgy?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ProductPlantStorageApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantStorageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  inventoryForCycleCountInd?: DeserializedType<T, 'Edm.String'> | null;
  provisioningServiceLevel?: DeserializedType<T, 'Edm.String'> | null;
  cycleCountingIndicatorIsFixed?: DeserializedType<T, 'Edm.Boolean'> | null;
  prodMaximumStoragePeriodUnit?: DeserializedType<T, 'Edm.String'> | null;
  wrhsMgmtPtwyAndStkRemovalStrgy?: DeserializedType<T, 'Edm.String'> | null;
}
