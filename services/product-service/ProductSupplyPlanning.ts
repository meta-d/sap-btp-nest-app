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
import type { ProductSupplyPlanningApi } from './ProductSupplyPlanningApi';

/**
 * This class represents the entity "A_ProductSupplyPlanning" of service "API_PRODUCT_SRV".
 */
export class ProductSupplyPlanning<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSupplyPlanningType<T>
{
  /**
   * Technical entity name for ProductSupplyPlanning.
   */
  static override _entityName = 'A_ProductSupplyPlanning';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductSupplyPlanning entity.
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
   * Fixed lot size.
   * @nullable
   */
  declare fixedLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Maximum Lot Size.
   * @nullable
   */
  declare maximumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Minimum Lot Size.
   * @nullable
   */
  declare minimumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Rounding value for purchase order quantity.
   * @nullable
   */
  declare lotSizeRoundingQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Lot Sizing Procedure in Materials Planning.
   * Maximum length: 2.
   * @nullable
   */
  declare lotSizingProcedure?: DeserializedType<T, 'Edm.String'> | null;
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
   * Safety Stock.
   * @nullable
   */
  declare safetyStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Minimum Safety Stock.
   * @nullable
   */
  declare minimumSafetyStockQuantity?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Planning time fence.
   * Maximum length: 3.
   * @nullable
   */
  declare planningTimeFence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ABC Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare abcIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Stock Level.
   * @nullable
   */
  declare maximumStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Reorder Point.
   * @nullable
   */
  declare reorderThresholdQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Planned Delivery Time in Days.
   * @nullable
   */
  declare plannedDeliveryDurationInDays?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Safety Time (in Workdays).
   * Maximum length: 2.
   * @nullable
   */
  declare safetyDuration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning Strategy Group.
   * Maximum length: 2.
   * @nullable
   */
  declare planningStrategyGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total replenishment lead time (in workdays).
   * @nullable
   */
  declare totalReplenishmentLeadTime?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Procurement Type.
   * Maximum length: 1.
   * @nullable
   */
  declare procurementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Procurement Type.
   * Maximum length: 2.
   * @nullable
   */
  declare procurementSubType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assembly scrap in percent.
   * @nullable
   */
  declare assemblyScrapPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Checking Group for Availability Check.
   * Maximum length: 2.
   * @nullable
   */
  declare availabilityCheckType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods receipt processing time in days.
   * @nullable
   */
  declare goodsReceiptDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * MRP Group.
   * Maximum length: 4.
   * @nullable
   */
  declare mrpGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Consumption mode.
   * Maximum length: 1.
   * @nullable
   */
  declare prodRqmtsConsumptionMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Period: Backward.
   * Maximum length: 3.
   * @nullable
   */
  declare backwardCnsmpnPeriodInWorkDays?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consumption period: Forward.
   * Maximum length: 3.
   * @nullable
   */
  declare fwdConsumptionPeriodInWorkDays?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Lot-Size-Independent Costs.
   * @nullable
   */
  declare lotSizeIndependentCosts?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Planning Calendar.
   * Maximum length: 3.
   * @nullable
   */
  declare mrpPlanningCalendar?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Range-of-Coverage Profile.
   * Maximum length: 3.
   * @nullable
   */
  declare rangeOfCvrgPrflCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Safety Time Indicator (with or Without Safety Time).
   * Maximum length: 1.
   * @nullable
   */
  declare isSafetyTime?: DeserializedType<T, 'Edm.String'> | null;
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
   * In-house production time.
   * @nullable
   */
  declare inHouseProductionTime?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Indicator for Cross-Project Material.
   * Maximum length: 1.
   * @nullable
   */
  declare productIsForCrossProject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Costs Percentage Code.
   * Maximum length: 1.
   * @nullable
   */
  declare storageCostsPercentageCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service level.
   * @nullable
   */
  declare srvcLvl?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Mixed MRP indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare mrpAvailabilityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Follow-Up Material.
   * Maximum length: 40.
   * @nullable
   */
  declare followUpProduct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Repetitive Manufacturing Enabled.
   * @nullable
   */
  declare repetitiveManufacturingIsAllwd?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Indicator for Individual and Collective Requirements.
   * Maximum length: 1.
   * @nullable
   */
  declare dependentRequirementsType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Bulk Material.
   * @nullable
   */
  declare isBulkMaterialComponent?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Repetitive Manufacturing Profile.
   * Maximum length: 4.
   * @nullable
   */
  declare repetitiveManufacturingProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Takt time.
   * @nullable
   */
  declare rqmtQtyRcptTaktTmeInWrkgDays?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Splitting Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare forecastRequirementsAreSplit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Effective-Out Date.
   * @nullable
   */
  declare effectiveOutDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Material: MRP profile.
   * Maximum length: 4.
   * @nullable
   */
  declare mrpProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Component Scrap in Percent.
   * @nullable
   */
  declare componentScrapInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Discontinuation indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare productIsToBeDiscontinued?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator for Requirements Grouping.
   * Maximum length: 1.
   * @nullable
   */
  declare prodRqmtsAreConsolidated?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Backflush.
   * Maximum length: 1.
   * @nullable
   */
  declare matlCompIsMarkedForBackflush?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Proposed Supply Area in Material Master Record.
   * Maximum length: 10.
   * @nullable
   */
  declare proposedProductSupplyArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action Control: Planned Order Processing.
   * Maximum length: 2.
   * @nullable
   */
  declare plannedOrderActionControl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductSupplyPlanningApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSupplyPlanningType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  fixedLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  maximumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  minimumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  lotSizeRoundingQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  lotSizingProcedure?: DeserializedType<T, 'Edm.String'> | null;
  mrpType?: DeserializedType<T, 'Edm.String'> | null;
  mrpResponsible?: DeserializedType<T, 'Edm.String'> | null;
  safetyStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  minimumSafetyStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  planningTimeFence?: DeserializedType<T, 'Edm.String'> | null;
  abcIndicator?: DeserializedType<T, 'Edm.String'> | null;
  maximumStockQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  reorderThresholdQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  plannedDeliveryDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  safetyDuration?: DeserializedType<T, 'Edm.String'> | null;
  planningStrategyGroup?: DeserializedType<T, 'Edm.String'> | null;
  totalReplenishmentLeadTime?: DeserializedType<T, 'Edm.Decimal'> | null;
  procurementType?: DeserializedType<T, 'Edm.String'> | null;
  procurementSubType?: DeserializedType<T, 'Edm.String'> | null;
  assemblyScrapPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  availabilityCheckType?: DeserializedType<T, 'Edm.String'> | null;
  goodsReceiptDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  mrpGroup?: DeserializedType<T, 'Edm.String'> | null;
  dfltStorageLocationExtProcmt?: DeserializedType<T, 'Edm.String'> | null;
  prodRqmtsConsumptionMode?: DeserializedType<T, 'Edm.String'> | null;
  backwardCnsmpnPeriodInWorkDays?: DeserializedType<T, 'Edm.String'> | null;
  fwdConsumptionPeriodInWorkDays?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  planAndOrderDayDetermination?: DeserializedType<T, 'Edm.String'> | null;
  roundingProfile?: DeserializedType<T, 'Edm.String'> | null;
  lotSizeIndependentCosts?: DeserializedType<T, 'Edm.Decimal'> | null;
  mrpPlanningCalendar?: DeserializedType<T, 'Edm.String'> | null;
  rangeOfCvrgPrflCode?: DeserializedType<T, 'Edm.String'> | null;
  isSafetyTime?: DeserializedType<T, 'Edm.String'> | null;
  perdPrflForSftyTme?: DeserializedType<T, 'Edm.String'> | null;
  isMrpDependentRqmt?: DeserializedType<T, 'Edm.String'> | null;
  inHouseProductionTime?: DeserializedType<T, 'Edm.Decimal'> | null;
  productIsForCrossProject?: DeserializedType<T, 'Edm.String'> | null;
  storageCostsPercentageCode?: DeserializedType<T, 'Edm.String'> | null;
  srvcLvl?: DeserializedType<T, 'Edm.Decimal'> | null;
  mrpAvailabilityType?: DeserializedType<T, 'Edm.String'> | null;
  followUpProduct?: DeserializedType<T, 'Edm.String'> | null;
  repetitiveManufacturingIsAllwd?: DeserializedType<T, 'Edm.Boolean'> | null;
  dependentRequirementsType?: DeserializedType<T, 'Edm.String'> | null;
  isBulkMaterialComponent?: DeserializedType<T, 'Edm.Boolean'> | null;
  repetitiveManufacturingProfile?: DeserializedType<T, 'Edm.String'> | null;
  rqmtQtyRcptTaktTmeInWrkgDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  forecastRequirementsAreSplit?: DeserializedType<T, 'Edm.String'> | null;
  effectiveOutDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mrpProfile?: DeserializedType<T, 'Edm.String'> | null;
  componentScrapInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  productIsToBeDiscontinued?: DeserializedType<T, 'Edm.String'> | null;
  prodRqmtsAreConsolidated?: DeserializedType<T, 'Edm.String'> | null;
  matlCompIsMarkedForBackflush?: DeserializedType<T, 'Edm.String'> | null;
  proposedProductSupplyArea?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderActionControl?: DeserializedType<T, 'Edm.String'> | null;
}
