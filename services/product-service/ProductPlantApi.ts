/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlant } from './ProductPlant';
import { ProductPlantRequestBuilder } from './ProductPlantRequestBuilder';
import { ProductPlantMrpAreaApi } from './ProductPlantMrpAreaApi';
import { ProductPlantQualityMgmtApi } from './ProductPlantQualityMgmtApi';
import { ProductPlantSalesApi } from './ProductPlantSalesApi';
import { ProductPlantStorageApi } from './ProductPlantStorageApi';
import { ProductPlantTextApi } from './ProductPlantTextApi';
import { ProductPlantIntlTrdApi } from './ProductPlantIntlTrdApi';
import { ProductPlantCostingApi } from './ProductPlantCostingApi';
import { ProductPlantForecastingApi } from './ProductPlantForecastingApi';
import { ProductPlantProcurementApi } from './ProductPlantProcurementApi';
import { ProductSupplyPlanningApi } from './ProductSupplyPlanningApi';
import { ProductWorkSchedulingApi } from './ProductWorkSchedulingApi';
import { ProductStorageLocationApi } from './ProductStorageLocationApi';
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
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class ProductPlantApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlant<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantApi<DeSerializersT> {
    return new ProductPlantApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toPlantMrpArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_MRP_AREA: Link<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantMrpAreaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlantQualityMgmt} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_QUALITY_MGMT: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantQualityMgmtApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlantSales} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_SALES: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantSalesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlantStorage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_STORAGE: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantStorageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlantText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_TEXT: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProdPlantInternationalTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PROD_PLANT_INTERNATIONAL_TRADE: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantIntlTrdApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductPlantCosting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PLANT_COSTING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantCostingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductPlantForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PLANT_FORECAST: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantForecastingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductPlantProcurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PLANT_PROCUREMENT: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantProcurementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductSupplyPlanning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_SUPPLY_PLANNING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductSupplyPlanningApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductWorkScheduling} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_WORK_SCHEDULING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductWorkSchedulingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toStorageLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_STORAGE_LOCATION: Link<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductStorageLocationApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductPlantMrpAreaApi<DeSerializersT>,
      ProductPlantQualityMgmtApi<DeSerializersT>,
      ProductPlantSalesApi<DeSerializersT>,
      ProductPlantStorageApi<DeSerializersT>,
      ProductPlantTextApi<DeSerializersT>,
      ProductPlantIntlTrdApi<DeSerializersT>,
      ProductPlantCostingApi<DeSerializersT>,
      ProductPlantForecastingApi<DeSerializersT>,
      ProductPlantProcurementApi<DeSerializersT>,
      ProductSupplyPlanningApi<DeSerializersT>,
      ProductWorkSchedulingApi<DeSerializersT>,
      ProductStorageLocationApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_PLANT_MRP_AREA: new Link('to_PlantMRPArea', this, linkedApis[0]),
      TO_PLANT_QUALITY_MGMT: new OneToOneLink(
        'to_PlantQualityMgmt',
        this,
        linkedApis[1]
      ),
      TO_PLANT_SALES: new OneToOneLink('to_PlantSales', this, linkedApis[2]),
      TO_PLANT_STORAGE: new OneToOneLink(
        'to_PlantStorage',
        this,
        linkedApis[3]
      ),
      TO_PLANT_TEXT: new OneToOneLink('to_PlantText', this, linkedApis[4]),
      TO_PROD_PLANT_INTERNATIONAL_TRADE: new OneToOneLink(
        'to_ProdPlantInternationalTrade',
        this,
        linkedApis[5]
      ),
      TO_PRODUCT_PLANT_COSTING: new OneToOneLink(
        'to_ProductPlantCosting',
        this,
        linkedApis[6]
      ),
      TO_PRODUCT_PLANT_FORECAST: new OneToOneLink(
        'to_ProductPlantForecast',
        this,
        linkedApis[7]
      ),
      TO_PRODUCT_PLANT_PROCUREMENT: new OneToOneLink(
        'to_ProductPlantProcurement',
        this,
        linkedApis[8]
      ),
      TO_PRODUCT_SUPPLY_PLANNING: new OneToOneLink(
        'to_ProductSupplyPlanning',
        this,
        linkedApis[9]
      ),
      TO_PRODUCT_WORK_SCHEDULING: new OneToOneLink(
        'to_ProductWorkScheduling',
        this,
        linkedApis[10]
      ),
      TO_STORAGE_LOCATION: new Link('to_StorageLocation', this, linkedApis[11])
    };
    return this;
  }

  entityConstructor = ProductPlant;

  requestBuilder(): ProductPlantRequestBuilder<DeSerializersT> {
    return new ProductPlantRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlant<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlant<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductPlant<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductPlant, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductPlant, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_GROUP: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_OF_ORIGIN: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION_OF_ORIGIN: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_INVTRY_MANAGED_LOC: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFILE_CODE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFILE_VALIDITY_START_DATE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    AVAILABILITY_CHECK_TYPE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_YEAR_VARIANT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_TYPE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_CENTER: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMODITY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_RECEIPT_DURATION: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MAINTENANCE_STATUS_NAME: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MRP_TYPE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MRP_RESPONSIBLE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABC_INDICATOR: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MAXIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    FIXED_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CONSUMPTION_TAX_CTRL_CODE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CO_PRODUCT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PRODUCT_IS_CONFIGURABLE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_DETERMINATION_GROUP: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOCK_IN_TRANSFER_QUANTITY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    STOCK_IN_TRANSIT_QUANTITY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    HAS_POST_TO_INSPECTION_STOCK: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_BATCH_MANAGEMENT_REQUIRED: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SERIAL_NUMBER_PROFILE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NEGATIVE_STOCK_ALLOWED: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    GOODS_RECEIPT_BLOCKED_STOCK_QTY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    HAS_CONSIGNMENT_CTRL: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_YEAR_CURRENT_PERIOD: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_MONTH_CURRENT_PERIOD: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_TYPE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTERNAL_BATCH_MANAGED: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PRODUCT_CFOP_CATEGORY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_IS_EXCISE_TAX_RELEVANT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIGURABLE_PRODUCT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_ISSUE_UNIT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_FREIGHT_GROUP: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_BATCH_REFERENCE_MATERIAL: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGL_BATCH_MANAGEMENT_IS_REQUIRED: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_IS_CRITICAL_PRT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PRODUCT_LOGISTICS_HANDLING_GROUP: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPlantMrpArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_MRP_AREA: Link<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantMrpAreaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlantQualityMgmt} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_QUALITY_MGMT: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantQualityMgmtApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlantSales} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_SALES: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantSalesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlantStorage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_STORAGE: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantStorageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toPlantText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT_TEXT: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProdPlantInternationalTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PROD_PLANT_INTERNATIONAL_TRADE: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantIntlTrdApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductPlantCosting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PLANT_COSTING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantCostingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductPlantForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PLANT_FORECAST: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantForecastingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductPlantProcurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PLANT_PROCUREMENT: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantProcurementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductSupplyPlanning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_SUPPLY_PLANNING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductSupplyPlanningApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductWorkScheduling} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_WORK_SCHEDULING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductWorkSchedulingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toStorageLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_STORAGE_LOCATION: Link<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductStorageLocationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlant<DeSerializers>>;
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
         * Static representation of the {@link purchasingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_GROUP: fieldBuilder.buildEdmTypeField(
          'PurchasingGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'CountryOfOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regionOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'RegionOfOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionInvtryManagedLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_INVTRY_MANAGED_LOC: fieldBuilder.buildEdmTypeField(
          'ProductionInvtryManagedLoc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profileCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_CODE: fieldBuilder.buildEdmTypeField(
          'ProfileCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profileValidityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'ProfileValidityStartDate',
          'Edm.DateTime',
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
         * Static representation of the {@link fiscalYearVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR_VARIANT: fieldBuilder.buildEdmTypeField(
          'FiscalYearVariant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TYPE: fieldBuilder.buildEdmTypeField(
          'PeriodType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CENTER: fieldBuilder.buildEdmTypeField(
          'ProfitCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link commodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMODITY: fieldBuilder.buildEdmTypeField(
          'Commodity',
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
         * Static representation of the {@link maintenanceStatusName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_STATUS_NAME: fieldBuilder.buildEdmTypeField(
          'MaintenanceStatusName',
          'Edm.String',
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
         * Static representation of the {@link abcIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_INDICATOR: fieldBuilder.buildEdmTypeField(
          'ABCIndicator',
          'Edm.String',
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
         * Static representation of the {@link fixedLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FixedLotSizeQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link consumptionTaxCtrlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_TAX_CTRL_CODE: fieldBuilder.buildEdmTypeField(
          'ConsumptionTaxCtrlCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCoProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CO_PRODUCT: fieldBuilder.buildEdmTypeField(
          'IsCoProduct',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link productIsConfigurable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_CONFIGURABLE: fieldBuilder.buildEdmTypeField(
          'ProductIsConfigurable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stockDeterminationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_DETERMINATION_GROUP: fieldBuilder.buildEdmTypeField(
          'StockDeterminationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stockInTransferQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_IN_TRANSFER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StockInTransferQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link stockInTransitQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_IN_TRANSIT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StockInTransitQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link hasPostToInspectionStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_POST_TO_INSPECTION_STOCK: fieldBuilder.buildEdmTypeField(
          'HasPostToInspectionStock',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isBatchManagementRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_MANAGEMENT_REQUIRED: fieldBuilder.buildEdmTypeField(
          'IsBatchManagementRequired',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link serialNumberProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER_PROFILE: fieldBuilder.buildEdmTypeField(
          'SerialNumberProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isNegativeStockAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEGATIVE_STOCK_ALLOWED: fieldBuilder.buildEdmTypeField(
          'IsNegativeStockAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link goodsReceiptBlockedStockQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_RECEIPT_BLOCKED_STOCK_QTY: fieldBuilder.buildEdmTypeField(
          'GoodsReceiptBlockedStockQty',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link hasConsignmentCtrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_CONSIGNMENT_CTRL: fieldBuilder.buildEdmTypeField(
          'HasConsignmentCtrl',
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
         * Static representation of the {@link procurementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProcurementType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInternalBatchManaged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTERNAL_BATCH_MANAGED: fieldBuilder.buildEdmTypeField(
          'IsInternalBatchManaged',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link productCfopCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CFOP_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProductCFOPCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productIsExciseTaxRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_EXCISE_TAX_RELEVANT: fieldBuilder.buildEdmTypeField(
          'ProductIsExciseTaxRelevant',
          'Edm.Boolean',
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
         * Static representation of the {@link configurableProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURABLE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'ConfigurableProduct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsIssueUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_ISSUE_UNIT: fieldBuilder.buildEdmTypeField(
          'GoodsIssueUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialFreightGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_FREIGHT_GROUP: fieldBuilder.buildEdmTypeField(
          'MaterialFreightGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalBatchReferenceMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_BATCH_REFERENCE_MATERIAL: fieldBuilder.buildEdmTypeField(
          'OriginalBatchReferenceMaterial',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origlBatchManagementIsRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGL_BATCH_MANAGEMENT_IS_REQUIRED: fieldBuilder.buildEdmTypeField(
          'OriglBatchManagementIsRequired',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productIsCriticalPrt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_CRITICAL_PRT: fieldBuilder.buildEdmTypeField(
          'ProductIsCriticalPrt',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link productLogisticsHandlingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LOGISTICS_HANDLING_GROUP: fieldBuilder.buildEdmTypeField(
          'ProductLogisticsHandlingGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductPlant)
      };
    }

    return this._schema;
  }
}
