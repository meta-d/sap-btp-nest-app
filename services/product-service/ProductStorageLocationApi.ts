/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStorageLocation } from './ProductStorageLocation';
import { ProductStorageLocationRequestBuilder } from './ProductStorageLocationRequestBuilder';
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
export class ProductStorageLocationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStorageLocation<DeSerializersT>, DeSerializersT>
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
  ): ProductStorageLocationApi<DeSerializersT> {
    return new ProductStorageLocationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductStorageLocation;

  requestBuilder(): ProductStorageLocationRequestBuilder<DeSerializersT> {
    return new ProductStorageLocationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductStorageLocation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductStorageLocation<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductStorageLocation<DeSerializersT>,
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
    typeof ProductStorageLocation,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductStorageLocation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_LOCATION: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_STORAGE_BIN: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_STATUS: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_INVENTORY_BLOCK_IND: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DATE_OF_LAST_POSTED_CNT_UN_RSTRCD_STK: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    INVENTORY_CORRECTION_FACTOR: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    INVTRY_RESTRICTED_USE_STOCK_IND: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVTRY_CURRENT_YEAR_STOCK_IND: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVTRY_QUAL_INSP_CURRENT_YR_STK_IND: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_BLOCK_STOCK_IND: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVTRY_REST_STOCK_PREV_PERIOD_IND: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STOCK_PREV_PERIOD: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVTRY_STOCK_QLTY_INSP_PREV_PERIOD: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_INVTRY_BLOCK_STOCK_PREV_PERIOD: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_YEAR_CURRENT_PERIOD: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_MONTH_CURRENT_PERIOD: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_YEAR_CURRENT_INVTRY_PERIOD: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAN_WRHS_MANAGEMENT_PICKING_AREA: OrderableEdmTypeField<
      ProductStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductStorageLocation<DeSerializers>>;
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
         * Static representation of the {@link storageLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_LOCATION: fieldBuilder.buildEdmTypeField(
          'StorageLocation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseStorageBin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_STORAGE_BIN: fieldBuilder.buildEdmTypeField(
          'WarehouseStorageBin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenanceStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_STATUS: fieldBuilder.buildEdmTypeField(
          'MaintenanceStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalInventoryBlockInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_INVENTORY_BLOCK_IND: fieldBuilder.buildEdmTypeField(
          'PhysicalInventoryBlockInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTime',
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
         * Static representation of the {@link dateOfLastPostedCntUnRstrcdStk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_LAST_POSTED_CNT_UN_RSTRCD_STK: fieldBuilder.buildEdmTypeField(
          'DateOfLastPostedCntUnRstrcdStk',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link inventoryCorrectionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_CORRECTION_FACTOR: fieldBuilder.buildEdmTypeField(
          'InventoryCorrectionFactor',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link invtryRestrictedUseStockInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVTRY_RESTRICTED_USE_STOCK_IND: fieldBuilder.buildEdmTypeField(
          'InvtryRestrictedUseStockInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invtryCurrentYearStockInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVTRY_CURRENT_YEAR_STOCK_IND: fieldBuilder.buildEdmTypeField(
          'InvtryCurrentYearStockInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invtryQualInspCurrentYrStkInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVTRY_QUAL_INSP_CURRENT_YR_STK_IND: fieldBuilder.buildEdmTypeField(
          'InvtryQualInspCurrentYrStkInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryBlockStockInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_BLOCK_STOCK_IND: fieldBuilder.buildEdmTypeField(
          'InventoryBlockStockInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invtryRestStockPrevPeriodInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVTRY_REST_STOCK_PREV_PERIOD_IND: fieldBuilder.buildEdmTypeField(
          'InvtryRestStockPrevPeriodInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryStockPrevPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STOCK_PREV_PERIOD: fieldBuilder.buildEdmTypeField(
          'InventoryStockPrevPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invtryStockQltyInspPrevPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVTRY_STOCK_QLTY_INSP_PREV_PERIOD: fieldBuilder.buildEdmTypeField(
          'InvtryStockQltyInspPrevPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasInvtryBlockStockPrevPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_INVTRY_BLOCK_STOCK_PREV_PERIOD: fieldBuilder.buildEdmTypeField(
          'HasInvtryBlockStockPrevPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalYearCurrentPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR_CURRENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'FiscalYearCurrentPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalMonthCurrentPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_MONTH_CURRENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'FiscalMonthCurrentPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalYearCurrentInvtryPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR_CURRENT_INVTRY_PERIOD: fieldBuilder.buildEdmTypeField(
          'FiscalYearCurrentInvtryPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leanWrhsManagementPickingArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAN_WRHS_MANAGEMENT_PICKING_AREA: fieldBuilder.buildEdmTypeField(
          'LeanWrhsManagementPickingArea',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductStorageLocation)
      };
    }

    return this._schema;
  }
}
