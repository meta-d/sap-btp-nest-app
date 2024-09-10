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
import type { ProductPlantMrpAreaApi } from './ProductPlantMrpAreaApi';

/**
 * This class represents the entity "A_ProductPlantMRPArea" of service "API_PRODUCT_SRV".
 */
export class ProductPlantMrpArea<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantMrpAreaType<T>
{
  /**
   * Technical entity name for ProductPlantMrpArea.
   */
  static override _entityName = 'A_ProductPlantMRPArea';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantMrpArea entity.
   */
  static _keys = ['Product', 'Plant', 'MRPArea'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * MRP Area: Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * MRP Area.
   * Maximum length: 10.
   */
  declare mrpArea: DeserializedType<T, 'Edm.String'>;
  /**
   * MRP Type.
   * Maximum length: 2.
   * @nullable
   */
  declare mrpType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MRP Controller.
   * Maximum length: 3.
   * @nullable
   */
  declare mrpResponsible?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MRP Group.
   * Maximum length: 4.
   * @nullable
   */
  declare mrpGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reorder Point.
   * @nullable
   */
  declare reorderThresholdQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Planning time fence.
   * Maximum length: 3.
   * @nullable
   */
  declare planningTimeFence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lot Sizing Procedure in Materials Planning.
   * Maximum length: 2.
   * @nullable
   */
  declare lotSizingProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding value for purchase order quantity.
   * @nullable
   */
  declare lotSizeRoundingQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Minimum Lot Size.
   * @nullable
   */
  declare minimumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Maximum Lot Size.
   * @nullable
   */
  declare maximumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Maximum Stock Level.
   * @nullable
   */
  declare maximumStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Assembly scrap in percent.
   * @nullable
   */
  declare assemblyScrapPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Special Procurement Type.
   * Maximum length: 2.
   * @nullable
   */
  declare procurementSubType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Storage Location for External Procurement.
   * Maximum length: 4.
   * @nullable
   */
  declare dfltStorageLocationExtProcmt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Planning Calendar.
   * Maximum length: 3.
   * @nullable
   */
  declare mrpPlanningCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Safety Stock.
   * @nullable
   */
  declare safetyStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Range-of-Coverage Profile.
   * Maximum length: 3.
   * @nullable
   */
  declare rangeOfCvrgPrflCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Safety Time (in Workdays).
   * Maximum length: 2.
   * @nullable
   */
  declare safetyDuration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed lot size.
   * @nullable
   */
  declare fixedLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Lot-Size-Independent Costs.
   * @nullable
   */
  declare lotSizeIndependentCosts?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Storage Costs Percentage Code.
   * Maximum length: 1.
   * @nullable
   */
  declare isStorageCosts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Takt time.
   * @nullable
   */
  declare rqmtQtyRcptTaktTmeInWrkgDays?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Service level.
   * @nullable
   */
  declare srvcLvl?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Period Profile for Safety Time.
   * Maximum length: 3.
   * @nullable
   */
  declare perdPrflForSftyTme?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MRP relevancy for dependent requirements.
   * Maximum length: 1.
   * @nullable
   */
  declare isMrpDependentRqmt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Safety Time Indicator (with or Without Safety Time).
   * Maximum length: 1.
   * @nullable
   */
  declare isSafetyTime?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Delivery Time in Days.
   * @nullable
   */
  declare plannedDeliveryDurationInDays?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Consider Planned Delivery Time of the MRP Area.
   * @nullable
   */
  declare isPlannedDeliveryTime?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning Cycle.
   * Maximum length: 3.
   * @nullable
   */
  declare planAndOrderDayDetermination?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   * @nullable
   */
  declare roundingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Storage Location.
   * Maximum length: 4.
   * @nullable
   */
  declare storageLocation?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductPlantMrpAreaApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantMrpAreaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  mrpArea: DeserializedType<T, 'Edm.String'>;
  mrpType?: DeserializedType<T, 'Edm.String'> | null;
  mrpResponsible?: DeserializedType<T, 'Edm.String'> | null;
  mrpGroup?: DeserializedType<T, 'Edm.String'> | null;
  reorderThresholdQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  planningTimeFence?: DeserializedType<T, 'Edm.String'> | null;
  lotSizingProcedure?: DeserializedType<T, 'Edm.String'> | null;
  lotSizeRoundingQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  minimumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  maximumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  maximumStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  assemblyScrapPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  procurementSubType?: DeserializedType<T, 'Edm.String'> | null;
  dfltStorageLocationExtProcmt?: DeserializedType<T, 'Edm.String'> | null;
  mrpPlanningCalendar?: DeserializedType<T, 'Edm.String'> | null;
  safetyStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  rangeOfCvrgPrflCode?: DeserializedType<T, 'Edm.String'> | null;
  safetyDuration?: DeserializedType<T, 'Edm.String'> | null;
  fixedLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  lotSizeIndependentCosts?: DeserializedType<T, 'Edm.Decimal'> | null;
  isStorageCosts?: DeserializedType<T, 'Edm.String'> | null;
  rqmtQtyRcptTaktTmeInWrkgDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  srvcLvl?: DeserializedType<T, 'Edm.Decimal'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  perdPrflForSftyTme?: DeserializedType<T, 'Edm.String'> | null;
  isMrpDependentRqmt?: DeserializedType<T, 'Edm.String'> | null;
  isSafetyTime?: DeserializedType<T, 'Edm.String'> | null;
  plannedDeliveryDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  isPlannedDeliveryTime?: DeserializedType<T, 'Edm.Boolean'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  planAndOrderDayDetermination?: DeserializedType<T, 'Edm.String'> | null;
  roundingProfile?: DeserializedType<T, 'Edm.String'> | null;
  storageLocation?: DeserializedType<T, 'Edm.String'> | null;
}
