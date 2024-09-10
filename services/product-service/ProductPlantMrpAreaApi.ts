/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantMrpArea } from './ProductPlantMrpArea';
import { ProductPlantMrpAreaRequestBuilder } from './ProductPlantMrpAreaRequestBuilder';
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
export class ProductPlantMrpAreaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantMrpArea<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantMrpAreaApi<DeSerializersT> {
    return new ProductPlantMrpAreaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductPlantMrpArea;

  requestBuilder(): ProductPlantMrpAreaRequestBuilder<DeSerializersT> {
    return new ProductPlantMrpAreaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantMrpArea<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantMrpArea<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantMrpArea<DeSerializersT>,
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
    typeof ProductPlantMrpArea,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantMrpArea,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_AREA: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_TYPE: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MRP_RESPONSIBLE: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MRP_GROUP: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REORDER_THRESHOLD_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PLANNING_TIME_FENCE: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOT_SIZING_PROCEDURE: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOT_SIZE_ROUNDING_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MINIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MAXIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MAXIMUM_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ASSEMBLY_SCRAP_PERCENT: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PROCUREMENT_SUB_TYPE: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DFLT_STORAGE_LOCATION_EXT_PROCMT: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MRP_PLANNING_CALENDAR: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAFETY_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    RANGE_OF_CVRG_PRFL_CODE: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAFETY_DURATION: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    LOT_SIZE_INDEPENDENT_COSTS: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    IS_STORAGE_COSTS: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SRVC_LVL: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PERD_PRFL_FOR_SFTY_TME: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MRP_DEPENDENT_RQMT: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SAFETY_TIME: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_DELIVERY_DURATION_IN_DAYS: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    IS_PLANNED_DELIVERY_TIME: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_AND_ORDER_DAY_DETERMINATION: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_PROFILE: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_LOCATION: OrderableEdmTypeField<
      ProductPlantMrpArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductPlantMrpArea<DeSerializers>>;
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
         * Static representation of the {@link mrpArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_AREA: fieldBuilder.buildEdmTypeField(
          'MRPArea',
          'Edm.String',
          false
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
         * Static representation of the {@link mrpGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_GROUP: fieldBuilder.buildEdmTypeField(
          'MRPGroup',
          'Edm.String',
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
         * Static representation of the {@link planningTimeFence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_TIME_FENCE: fieldBuilder.buildEdmTypeField(
          'PlanningTimeFence',
          'Edm.String',
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
         * Static representation of the {@link lotSizeRoundingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZE_ROUNDING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'LotSizeRoundingQuantity',
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
         * Static representation of the {@link maximumLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumLotSizeQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link assemblyScrapPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSEMBLY_SCRAP_PERCENT: fieldBuilder.buildEdmTypeField(
          'AssemblyScrapPercent',
          'Edm.Decimal',
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
         * Static representation of the {@link dfltStorageLocationExtProcmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DFLT_STORAGE_LOCATION_EXT_PROCMT: fieldBuilder.buildEdmTypeField(
          'DfltStorageLocationExtProcmt',
          'Edm.String',
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
         * Static representation of the {@link safetyStockQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SafetyStockQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link safetyDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_DURATION: fieldBuilder.buildEdmTypeField(
          'SafetyDuration',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link lotSizeIndependentCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZE_INDEPENDENT_COSTS: fieldBuilder.buildEdmTypeField(
          'LotSizeIndependentCosts',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link isStorageCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STORAGE_COSTS: fieldBuilder.buildEdmTypeField(
          'IsStorageCosts',
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
         * Static representation of the {@link srvcLvl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRVC_LVL: fieldBuilder.buildEdmTypeField(
          'SrvcLvl',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link isMarkedForDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField(
          'IsMarkedForDeletion',
          'Edm.Boolean',
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
         * Static representation of the {@link isSafetyTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SAFETY_TIME: fieldBuilder.buildEdmTypeField(
          'IsSafetyTime',
          'Edm.String',
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
         * Static representation of the {@link isPlannedDeliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PLANNED_DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'IsPlannedDeliveryTime',
          'Edm.Boolean',
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
         * Static representation of the {@link storageLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_LOCATION: fieldBuilder.buildEdmTypeField(
          'StorageLocation',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductPlantMrpArea)
      };
    }

    return this._schema;
  }
}
