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
import type { ProductPlantApi } from './ProductPlantApi';
import {
  ProductPlantMrpArea,
  ProductPlantMrpAreaType
} from './ProductPlantMrpArea';
import {
  ProductPlantQualityMgmt,
  ProductPlantQualityMgmtType
} from './ProductPlantQualityMgmt';
import { ProductPlantSales, ProductPlantSalesType } from './ProductPlantSales';
import {
  ProductPlantStorage,
  ProductPlantStorageType
} from './ProductPlantStorage';
import { ProductPlantText, ProductPlantTextType } from './ProductPlantText';
import {
  ProductPlantIntlTrd,
  ProductPlantIntlTrdType
} from './ProductPlantIntlTrd';
import {
  ProductPlantCosting,
  ProductPlantCostingType
} from './ProductPlantCosting';
import {
  ProductPlantForecasting,
  ProductPlantForecastingType
} from './ProductPlantForecasting';
import {
  ProductPlantProcurement,
  ProductPlantProcurementType
} from './ProductPlantProcurement';
import {
  ProductSupplyPlanning,
  ProductSupplyPlanningType
} from './ProductSupplyPlanning';
import {
  ProductWorkScheduling,
  ProductWorkSchedulingType
} from './ProductWorkScheduling';
import {
  ProductStorageLocation,
  ProductStorageLocationType
} from './ProductStorageLocation';

/**
 * This class represents the entity "A_ProductPlant" of service "API_PRODUCT_SRV".
 */
export class ProductPlant<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantType<T>
{
  /**
   * Technical entity name for ProductPlant.
   */
  static override _entityName = 'A_ProductPlant';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlant entity.
   */
  static _keys = ['Product', 'Plant'];
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
   * Purchasing Group.
   * Maximum length: 3.
   * @nullable
   */
  declare purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region of Origin of Material (Non-Preferential Ori.).
   * Maximum length: 3.
   * @nullable
   */
  declare countryOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region of Origin of Material (Non-Preferential Origin).
   * Maximum length: 3.
   * @nullable
   */
  declare regionOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Storage Location.
   * Maximum length: 4.
   * @nullable
   */
  declare productionInvtryManagedLoc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant-Specific Material Status.
   * Maximum length: 2.
   * @nullable
   */
  declare profileCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date from Which the Plant-Specific Material Status Is Valid.
   * @nullable
   */
  declare profileValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Checking Group for Availability Check.
   * Maximum length: 2.
   * @nullable
   */
  declare availabilityCheckType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Year Variant.
   * Maximum length: 2.
   * @nullable
   */
  declare fiscalYearVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare periodType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  declare profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commodity Code.
   * Maximum length: 17.
   * @nullable
   */
  declare commodity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods receipt processing time in days.
   * @nullable
   */
  declare goodsReceiptDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Maintenance Status.
   * Maximum length: 15.
   * @nullable
   */
  declare maintenanceStatusName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flag Material for Deletion at Plant Level.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * ABC Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare abcIndicator?: DeserializedType<T, 'Edm.String'> | null;
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
   * Fixed lot size.
   * @nullable
   */
  declare fixedLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Control code for consumption taxes in foreign trade.
   * Maximum length: 16.
   * @nullable
   */
  declare consumptionTaxCtrlCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Co-Product.
   * @nullable
   */
  declare isCoProduct?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Configurable Product.
   * Maximum length: 40.
   * @nullable
   */
  declare productIsConfigurable?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock determination group.
   * Maximum length: 4.
   * @nullable
   */
  declare stockDeterminationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock In Transfer Quantity.
   * @nullable
   */
  declare stockInTransferQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Stock In Transit Quantity.
   * @nullable
   */
  declare stockInTransitQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Has Post to Inspection Stock.
   * @nullable
   */
  declare hasPostToInspectionStock?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Batch Management Requirement Indicator for Plant.
   * @nullable
   */
  declare isBatchManagementRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Serial Number Profile.
   * Maximum length: 4.
   * @nullable
   */
  declare serialNumberProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Negative stocks allowed in plant.
   * @nullable
   */
  declare isNegativeStockAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Goods Receipt Blocked Stock Qty.
   * @nullable
   */
  declare goodsReceiptBlockedStockQty?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Consignment Control.
   * Maximum length: 1.
   * @nullable
   */
  declare hasConsignmentCtrl?: DeserializedType<T, 'Edm.String'> | null;
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
   * Procurement Type.
   * Maximum length: 1.
   * @nullable
   */
  declare procurementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch management indicator (internal).
   * @nullable
   */
  declare isInternalBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Material CFOP category.
   * Maximum length: 2.
   * @nullable
   */
  declare productCfopCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise Tax Relevance Indicator.
   * @nullable
   */
  declare productIsExciseTaxRelevant?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Configurable Material.
   * Maximum length: 40.
   * @nullable
   */
  declare configurableProduct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Issue.
   * Maximum length: 3.
   * @nullable
   */
  declare goodsIssueUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Freight Group.
   * Maximum length: 8.
   * @nullable
   */
  declare materialFreightGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Material for Original Batches.
   * Maximum length: 40.
   * @nullable
   */
  declare originalBatchReferenceMaterial?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Indicator for Original Batch Management.
   * Maximum length: 1.
   * @nullable
   */
  declare origlBatchManagementIsRequired?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Indicator: Critical part.
   * @nullable
   */
  declare productIsCriticalPrt?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Logistics handling group for workload calculation.
   * Maximum length: 4.
   * @nullable
   */
  declare productLogisticsHandlingGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link ProductPlantMrpArea} entity.
   */
  declare toPlantMrpArea: ProductPlantMrpArea<T>[];
  /**
   * One-to-one navigation property to the {@link ProductPlantQualityMgmt} entity.
   */
  declare toPlantQualityMgmt?: ProductPlantQualityMgmt<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantSales} entity.
   */
  declare toPlantSales?: ProductPlantSales<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantStorage} entity.
   */
  declare toPlantStorage?: ProductPlantStorage<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantText} entity.
   */
  declare toPlantText?: ProductPlantText<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantIntlTrd} entity.
   */
  declare toProdPlantInternationalTrade?: ProductPlantIntlTrd<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantCosting} entity.
   */
  declare toProductPlantCosting?: ProductPlantCosting<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantForecasting} entity.
   */
  declare toProductPlantForecast?: ProductPlantForecasting<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantProcurement} entity.
   */
  declare toProductPlantProcurement?: ProductPlantProcurement<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSupplyPlanning} entity.
   */
  declare toProductSupplyPlanning?: ProductSupplyPlanning<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductWorkScheduling} entity.
   */
  declare toProductWorkScheduling?: ProductWorkScheduling<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductStorageLocation} entity.
   */
  declare toStorageLocation: ProductStorageLocation<T>[];

  constructor(_entityApi: ProductPlantApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  countryOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  regionOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  productionInvtryManagedLoc?: DeserializedType<T, 'Edm.String'> | null;
  profileCode?: DeserializedType<T, 'Edm.String'> | null;
  profileValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  availabilityCheckType?: DeserializedType<T, 'Edm.String'> | null;
  fiscalYearVariant?: DeserializedType<T, 'Edm.String'> | null;
  periodType?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  commodity?: DeserializedType<T, 'Edm.String'> | null;
  goodsReceiptDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  maintenanceStatusName?: DeserializedType<T, 'Edm.String'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  mrpType?: DeserializedType<T, 'Edm.String'> | null;
  mrpResponsible?: DeserializedType<T, 'Edm.String'> | null;
  abcIndicator?: DeserializedType<T, 'Edm.String'> | null;
  minimumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  maximumLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  fixedLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  consumptionTaxCtrlCode?: DeserializedType<T, 'Edm.String'> | null;
  isCoProduct?: DeserializedType<T, 'Edm.Boolean'> | null;
  productIsConfigurable?: DeserializedType<T, 'Edm.String'> | null;
  stockDeterminationGroup?: DeserializedType<T, 'Edm.String'> | null;
  stockInTransferQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  stockInTransitQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  hasPostToInspectionStock?: DeserializedType<T, 'Edm.Boolean'> | null;
  isBatchManagementRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  serialNumberProfile?: DeserializedType<T, 'Edm.String'> | null;
  isNegativeStockAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  goodsReceiptBlockedStockQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  hasConsignmentCtrl?: DeserializedType<T, 'Edm.String'> | null;
  fiscalYearCurrentPeriod?: DeserializedType<T, 'Edm.String'> | null;
  fiscalMonthCurrentPeriod?: DeserializedType<T, 'Edm.String'> | null;
  procurementType?: DeserializedType<T, 'Edm.String'> | null;
  isInternalBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  productCfopCategory?: DeserializedType<T, 'Edm.String'> | null;
  productIsExciseTaxRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  configurableProduct?: DeserializedType<T, 'Edm.String'> | null;
  goodsIssueUnit?: DeserializedType<T, 'Edm.String'> | null;
  materialFreightGroup?: DeserializedType<T, 'Edm.String'> | null;
  originalBatchReferenceMaterial?: DeserializedType<T, 'Edm.String'> | null;
  origlBatchManagementIsRequired?: DeserializedType<T, 'Edm.String'> | null;
  productIsCriticalPrt?: DeserializedType<T, 'Edm.Boolean'> | null;
  productLogisticsHandlingGroup?: DeserializedType<T, 'Edm.String'> | null;
  toPlantMrpArea: ProductPlantMrpAreaType<T>[];
  toPlantQualityMgmt?: ProductPlantQualityMgmtType<T> | null;
  toPlantSales?: ProductPlantSalesType<T> | null;
  toPlantStorage?: ProductPlantStorageType<T> | null;
  toPlantText?: ProductPlantTextType<T> | null;
  toProdPlantInternationalTrade?: ProductPlantIntlTrdType<T> | null;
  toProductPlantCosting?: ProductPlantCostingType<T> | null;
  toProductPlantForecast?: ProductPlantForecastingType<T> | null;
  toProductPlantProcurement?: ProductPlantProcurementType<T> | null;
  toProductSupplyPlanning?: ProductSupplyPlanningType<T> | null;
  toProductWorkScheduling?: ProductWorkSchedulingType<T> | null;
  toStorageLocation: ProductStorageLocationType<T>[];
}
