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
import type { ProductStorageLocationApi } from './ProductStorageLocationApi';

/**
 * This class represents the entity "A_ProductStorageLocation" of service "API_PRODUCT_SRV".
 */
export class ProductStorageLocation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductStorageLocationType<T>
{
  /**
   * Technical entity name for ProductStorageLocation.
   */
  static override _entityName = 'A_ProductStorageLocation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductStorageLocation entity.
   */
  static _keys = ['Product', 'Plant', 'StorageLocation'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Location.
   * Maximum length: 4.
   */
  declare storageLocation: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Bin.
   * Maximum length: 10.
   * @nullable
   */
  declare warehouseStorageBin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Status.
   * Maximum length: 15.
   * @nullable
   */
  declare maintenanceStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Inventory Blocking Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare physicalInventoryBlockInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Flag Material for Deletion at Storage Location Level.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Date of Last Posted Count.
   * @nullable
   */
  declare dateOfLastPostedCntUnRstrcdStk?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Inventory Correction Factor.
   * @nullable
   */
  declare inventoryCorrectionFactor?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Physical inventory indicator for restricted-use stock.
   * Maximum length: 3.
   * @nullable
   */
  declare invtryRestrictedUseStockInd?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Physical inventory indicator for whse stock in current year.
   * Maximum length: 3.
   * @nullable
   */
  declare invtryCurrentYearStockInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phys. inventory ind. f. stock in qual. insp. in current year.
   * Maximum length: 3.
   * @nullable
   */
  declare invtryQualInspCurrentYrStkInd?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Physical inventory indicator for blocked stock.
   * Maximum length: 3.
   * @nullable
   */
  declare inventoryBlockStockInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical inventory ind. for restricted-use stock, prev.pd.
   * Maximum length: 3.
   * @nullable
   */
  declare invtryRestStockPrevPeriodInd?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Physical inventory indicator for stock in previous year.
   * Maximum length: 3.
   * @nullable
   */
  declare inventoryStockPrevPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phys. inventory ind. f. stock in qual. insp. in prev. period.
   * Maximum length: 3.
   * @nullable
   */
  declare invtryStockQltyInspPrevPeriod?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Phys. inventory indicator for blocked stock in prev. period.
   * Maximum length: 3.
   * @nullable
   */
  declare hasInvtryBlockStockPrevPeriod?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Year Current Period.
   * Maximum length: 4.
   * @nullable
   */
  declare fiscalYearCurrentPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Month Current Period.
   * Maximum length: 2.
   * @nullable
   */
  declare fiscalMonthCurrentPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal year of current physical inventory indicator.
   * Maximum length: 4.
   * @nullable
   */
  declare fiscalYearCurrentInvtryPeriod?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Picking area for lean WM.
   * Maximum length: 3.
   * @nullable
   */
  declare leanWrhsManagementPickingArea?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ProductStorageLocationApi<T>) {
    super(_entityApi);
  }
}

export interface ProductStorageLocationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  storageLocation: DeserializedType<T, 'Edm.String'>;
  warehouseStorageBin?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceStatus?: DeserializedType<T, 'Edm.String'> | null;
  physicalInventoryBlockInd?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  dateOfLastPostedCntUnRstrcdStk?: DeserializedType<T, 'Edm.DateTime'> | null;
  inventoryCorrectionFactor?: DeserializedType<T, 'Edm.Double'> | null;
  invtryRestrictedUseStockInd?: DeserializedType<T, 'Edm.String'> | null;
  invtryCurrentYearStockInd?: DeserializedType<T, 'Edm.String'> | null;
  invtryQualInspCurrentYrStkInd?: DeserializedType<T, 'Edm.String'> | null;
  inventoryBlockStockInd?: DeserializedType<T, 'Edm.String'> | null;
  invtryRestStockPrevPeriodInd?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStockPrevPeriod?: DeserializedType<T, 'Edm.String'> | null;
  invtryStockQltyInspPrevPeriod?: DeserializedType<T, 'Edm.String'> | null;
  hasInvtryBlockStockPrevPeriod?: DeserializedType<T, 'Edm.String'> | null;
  fiscalYearCurrentPeriod?: DeserializedType<T, 'Edm.String'> | null;
  fiscalMonthCurrentPeriod?: DeserializedType<T, 'Edm.String'> | null;
  fiscalYearCurrentInvtryPeriod?: DeserializedType<T, 'Edm.String'> | null;
  leanWrhsManagementPickingArea?: DeserializedType<T, 'Edm.String'> | null;
}
