/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSupplyPlanning } from './ProductSupplyPlanning';
import { ProductSupplyPlanningRequestBuilder } from './ProductSupplyPlanningRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class ProductSupplyPlanningApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSupplyPlanning<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ProductSupplyPlanningApi<DeSerializersT> {
    return new ProductSupplyPlanningApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductSupplyPlanning;

  requestBuilder(): ProductSupplyPlanningRequestBuilder<DeSerializersT> {
    return new ProductSupplyPlanningRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductSupplyPlanning<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductSupplyPlanning<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductSupplyPlanning<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProductSupplyPlanning,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductSupplyPlanning,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MAXIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MINIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    LOT_SIZE_ROUNDING_QUANTITY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    LOT_SIZING_PROCEDURE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MRP_TYPE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MRP_RESPONSIBLE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAFETY_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MINIMUM_SAFETY_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PLANNING_TIME_FENCE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABC_INDICATOR: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    REORDER_THRESHOLD_QUANTITY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PLANNED_DELIVERY_DURATION_IN_DAYS: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SAFETY_DURATION: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_STRATEGY_GROUP: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_REPLENISHMENT_LEAD_TIME: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PROCUREMENT_TYPE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_SUB_TYPE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSEMBLY_SCRAP_PERCENT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    AVAILABILITY_CHECK_TYPE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_RECEIPT_DURATION: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MRP_GROUP: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DFLT_STORAGE_LOCATION_EXT_PROCMT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROD_RQMTS_CONSUMPTION_MODE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BACKWARD_CNSMPN_PERIOD_IN_WORK_DAYS: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FWD_CONSUMPTION_PERIOD_IN_WORK_DAYS: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_AND_ORDER_DAY_DETERMINATION: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_PROFILE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOT_SIZE_INDEPENDENT_COSTS: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MRP_PLANNING_CALENDAR: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RANGE_OF_CVRG_PRFL_CODE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SAFETY_TIME: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERD_PRFL_FOR_SFTY_TME: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MRP_DEPENDENT_RQMT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_HOUSE_PRODUCTION_TIME: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_IS_FOR_CROSS_PROJECT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_COSTS_PERCENTAGE_CODE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SRVC_LVL: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MRP_AVAILABILITY_TYPE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOLLOW_UP_PRODUCT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPETITIVE_MANUFACTURING_IS_ALLWD: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DEPENDENT_REQUIREMENTS_TYPE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BULK_MATERIAL_COMPONENT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    REPETITIVE_MANUFACTURING_PROFILE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    FORECAST_REQUIREMENTS_ARE_SPLIT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_OUT_DATE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MRP_PROFILE: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPONENT_SCRAP_IN_PERCENT: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_IS_TO_BE_DISCONTINUED: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROD_RQMTS_ARE_CONSOLIDATED: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATL_COMP_IS_MARKED_FOR_BACKFLUSH: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPOSED_PRODUCT_SUPPLY_AREA: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_ACTION_CONTROL: OrderableEdmTypeField<
      ProductSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductSupplyPlanning<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link product} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.String', false),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
        /**
         * Static representation of the {@link fixedLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FixedLotSizeQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link maximumLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumLotSizeQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link minimumLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumLotSizeQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link lotSizeRoundingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZE_ROUNDING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'LotSizeRoundingQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link lotSizingProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZING_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'LotSizingProcedure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mrpType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_TYPE: fieldBuilder.buildEdmTypeField('MRPType', 'Edm.String', true),
        /**
         * Static representation of the {@link mrpResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'MRPResponsible',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link safetyStockQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SafetyStockQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link minimumSafetyStockQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumSafetyStockQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link planningTimeFence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_TIME_FENCE: fieldBuilder.buildEdmTypeField(
          'PlanningTimeFence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link abcIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_INDICATOR: fieldBuilder.buildEdmTypeField(
          'ABCIndicator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumStockQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumStockQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link reorderThresholdQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REORDER_THRESHOLD_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReorderThresholdQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link plannedDeliveryDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_DELIVERY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'PlannedDeliveryDurationInDays',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link safetyDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_DURATION: fieldBuilder.buildEdmTypeField(
          'SafetyDuration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planningStrategyGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_STRATEGY_GROUP: fieldBuilder.buildEdmTypeField(
          'PlanningStrategyGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalReplenishmentLeadTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_REPLENISHMENT_LEAD_TIME: fieldBuilder.buildEdmTypeField(
          'TotalReplenishmentLeadTime',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link procurementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProcurementType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link procurementSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_SUB_TYPE: fieldBuilder.buildEdmTypeField(
          'ProcurementSubType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assemblyScrapPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSEMBLY_SCRAP_PERCENT: fieldBuilder.buildEdmTypeField(
          'AssemblyScrapPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link availabilityCheckType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABILITY_CHECK_TYPE: fieldBuilder.buildEdmTypeField(
          'AvailabilityCheckType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsReceiptDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_RECEIPT_DURATION: fieldBuilder.buildEdmTypeField(
          'GoodsReceiptDuration',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link mrpGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_GROUP: fieldBuilder.buildEdmTypeField(
          'MRPGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dfltStorageLocationExtProcmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DFLT_STORAGE_LOCATION_EXT_PROCMT: fieldBuilder.buildEdmTypeField(
          'DfltStorageLocationExtProcmt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prodRqmtsConsumptionMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_RQMTS_CONSUMPTION_MODE: fieldBuilder.buildEdmTypeField(
          'ProdRqmtsConsumptionMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link backwardCnsmpnPeriodInWorkDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKWARD_CNSMPN_PERIOD_IN_WORK_DAYS: fieldBuilder.buildEdmTypeField(
          'BackwardCnsmpnPeriodInWorkDays',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fwdConsumptionPeriodInWorkDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FWD_CONSUMPTION_PERIOD_IN_WORK_DAYS: fieldBuilder.buildEdmTypeField(
          'FwdConsumptionPeriodInWorkDays',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'BaseUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planAndOrderDayDetermination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_AND_ORDER_DAY_DETERMINATION: fieldBuilder.buildEdmTypeField(
          'PlanAndOrderDayDetermination',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField(
          'RoundingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lotSizeIndependentCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZE_INDEPENDENT_COSTS: fieldBuilder.buildEdmTypeField(
          'LotSizeIndependentCosts',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link mrpPlanningCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_PLANNING_CALENDAR: fieldBuilder.buildEdmTypeField(
          'MRPPlanningCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rangeOfCvrgPrflCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE_OF_CVRG_PRFL_CODE: fieldBuilder.buildEdmTypeField(
          'RangeOfCvrgPrflCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSafetyTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SAFETY_TIME: fieldBuilder.buildEdmTypeField(
          'IsSafetyTime',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link perdPrflForSftyTme} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERD_PRFL_FOR_SFTY_TME: fieldBuilder.buildEdmTypeField(
          'PerdPrflForSftyTme',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMrpDependentRqmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MRP_DEPENDENT_RQMT: fieldBuilder.buildEdmTypeField(
          'IsMRPDependentRqmt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inHouseProductionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_HOUSE_PRODUCTION_TIME: fieldBuilder.buildEdmTypeField(
          'InHouseProductionTime',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productIsForCrossProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_FOR_CROSS_PROJECT: fieldBuilder.buildEdmTypeField(
          'ProductIsForCrossProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storageCostsPercentageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_COSTS_PERCENTAGE_CODE: fieldBuilder.buildEdmTypeField(
          'StorageCostsPercentageCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link srvcLvl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_LVL: fieldBuilder.buildEdmTypeField(
          'SrvcLvl',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link mrpAvailabilityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_AVAILABILITY_TYPE: fieldBuilder.buildEdmTypeField(
          'MRPAvailabilityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link followUpProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLLOW_UP_PRODUCT: fieldBuilder.buildEdmTypeField(
          'FollowUpProduct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link repetitiveManufacturingIsAllwd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPETITIVE_MANUFACTURING_IS_ALLWD: fieldBuilder.buildEdmTypeField(
          'RepetitiveManufacturingIsAllwd',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link dependentRequirementsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_REQUIREMENTS_TYPE: fieldBuilder.buildEdmTypeField(
          'DependentRequirementsType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBulkMaterialComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BULK_MATERIAL_COMPONENT: fieldBuilder.buildEdmTypeField(
          'IsBulkMaterialComponent',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link repetitiveManufacturingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPETITIVE_MANUFACTURING_PROFILE: fieldBuilder.buildEdmTypeField(
          'RepetitiveManufacturingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rqmtQtyRcptTaktTmeInWrkgDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: fieldBuilder.buildEdmTypeField(
          'RqmtQtyRcptTaktTmeInWrkgDays',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link forecastRequirementsAreSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_REQUIREMENTS_ARE_SPLIT: fieldBuilder.buildEdmTypeField(
          'ForecastRequirementsAreSplit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveOutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_OUT_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveOutDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link mrpProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_PROFILE: fieldBuilder.buildEdmTypeField(
          'MRPProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link componentScrapInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_SCRAP_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'ComponentScrapInPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productIsToBeDiscontinued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_TO_BE_DISCONTINUED: fieldBuilder.buildEdmTypeField(
          'ProductIsToBeDiscontinued',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prodRqmtsAreConsolidated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_RQMTS_ARE_CONSOLIDATED: fieldBuilder.buildEdmTypeField(
          'ProdRqmtsAreConsolidated',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matlCompIsMarkedForBackflush} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATL_COMP_IS_MARKED_FOR_BACKFLUSH: fieldBuilder.buildEdmTypeField(
          'MatlCompIsMarkedForBackflush',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link proposedProductSupplyArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_PRODUCT_SUPPLY_AREA: fieldBuilder.buildEdmTypeField(
          'ProposedProductSupplyArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderActionControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_ACTION_CONTROL: fieldBuilder.buildEdmTypeField(
          'PlannedOrderActionControl',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductSupplyPlanning)
      };
    }

    return this._schema;
  }
}
