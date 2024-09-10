/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Product } from './Product';
import { ProductRequestBuilder } from './ProductRequestBuilder';
import { ProductDescriptionApi } from './ProductDescriptionApi';
import { ProductPlantApi } from './ProductPlantApi';
import { ProductBasicTextApi } from './ProductBasicTextApi';
import { ProductInspectionTextApi } from './ProductInspectionTextApi';
import { ProductProcurementApi } from './ProductProcurementApi';
import { ProductPurchaseTextApi } from './ProductPurchaseTextApi';
import { ProductQualityMgmtApi } from './ProductQualityMgmtApi';
import { ProductSalesApi } from './ProductSalesApi';
import { ProductSalesTaxApi } from './ProductSalesTaxApi';
import { ProductStorageApi } from './ProductStorageApi';
import { ProductUnitsOfMeasureApi } from './ProductUnitsOfMeasureApi';
import { ProductSalesDeliveryApi } from './ProductSalesDeliveryApi';
import { ProductValuationApi } from './ProductValuationApi';
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
export class ProductApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Product<DeSerializersT>, DeSerializersT>
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
  ): ProductApi<DeSerializersT> {
    return new ProductApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toDescription} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DESCRIPTION: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductDescriptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductBasicText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_BASIC_TEXT: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductBasicTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductInspectionText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_INSPECTION_TEXT: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductInspectionTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductProcurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PROCUREMENT: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductProcurementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductPurchaseText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PURCHASE_TEXT: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductPurchaseTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductQualityMgmt} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_QUALITY_MGMT: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductQualityMgmtApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductSales} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_SALES: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductSalesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductSalesTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_SALES_TAX: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductSalesTaxApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductStorage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_STORAGE: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductStorageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductUnitsOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_UNITS_OF_MEASURE: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductUnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesDelivery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_DELIVERY: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductSalesDeliveryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_VALUATION: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductValuationApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductDescriptionApi<DeSerializersT>,
      ProductPlantApi<DeSerializersT>,
      ProductBasicTextApi<DeSerializersT>,
      ProductInspectionTextApi<DeSerializersT>,
      ProductProcurementApi<DeSerializersT>,
      ProductPurchaseTextApi<DeSerializersT>,
      ProductQualityMgmtApi<DeSerializersT>,
      ProductSalesApi<DeSerializersT>,
      ProductSalesTaxApi<DeSerializersT>,
      ProductStorageApi<DeSerializersT>,
      ProductUnitsOfMeasureApi<DeSerializersT>,
      ProductSalesDeliveryApi<DeSerializersT>,
      ProductValuationApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_DESCRIPTION: new Link('to_Description', this, linkedApis[0]),
      TO_PLANT: new Link('to_Plant', this, linkedApis[1]),
      TO_PRODUCT_BASIC_TEXT: new Link(
        'to_ProductBasicText',
        this,
        linkedApis[2]
      ),
      TO_PRODUCT_INSPECTION_TEXT: new Link(
        'to_ProductInspectionText',
        this,
        linkedApis[3]
      ),
      TO_PRODUCT_PROCUREMENT: new OneToOneLink(
        'to_ProductProcurement',
        this,
        linkedApis[4]
      ),
      TO_PRODUCT_PURCHASE_TEXT: new Link(
        'to_ProductPurchaseText',
        this,
        linkedApis[5]
      ),
      TO_PRODUCT_QUALITY_MGMT: new OneToOneLink(
        'to_ProductQualityMgmt',
        this,
        linkedApis[6]
      ),
      TO_PRODUCT_SALES: new OneToOneLink(
        'to_ProductSales',
        this,
        linkedApis[7]
      ),
      TO_PRODUCT_SALES_TAX: new Link('to_ProductSalesTax', this, linkedApis[8]),
      TO_PRODUCT_STORAGE: new OneToOneLink(
        'to_ProductStorage',
        this,
        linkedApis[9]
      ),
      TO_PRODUCT_UNITS_OF_MEASURE: new Link(
        'to_ProductUnitsOfMeasure',
        this,
        linkedApis[10]
      ),
      TO_SALES_DELIVERY: new Link('to_SalesDelivery', this, linkedApis[11]),
      TO_VALUATION: new Link('to_Valuation', this, linkedApis[12])
    };
    return this;
  }

  entityConstructor = Product;

  requestBuilder(): ProductRequestBuilder<DeSerializersT> {
    return new ProductRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Product<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Product<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Product<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Product, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Product, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_TYPE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_PLANT_STATUS: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_PLANT_STATUS_VALIDITY_DATE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE_TIME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PRODUCT_OLD_ID: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_WEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PURCHASE_ORDER_QUANTITY_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_OF_SUPPLY: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_WEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    COUNTRY_OF_ORIGIN: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPETITOR_ID: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_CATEGORY_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_HIERARCHY: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARBL_PUR_ORD_UNIT_IS_ACTIVE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOLUME_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_VOLUME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ANP_CODE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAND: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_RULE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LOW_LEVEL_CODE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROD_NO_IN_GEN_PROD_IN_PREPACK_PROD: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_IDENTIFIER_ASSGMT_PROFILE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE_OR_DIMENSION_TEXT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDUSTRY_STANDARD_NAME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STANDARD_ID: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNATIONAL_ARTICLE_NUMBER_CAT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_IS_CONFIGURABLE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_BATCH_MANAGEMENT_REQUIRED: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    EXTERNAL_PRODUCT_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CROSS_PLANT_CONFIGURABLE_PRODUCT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NO_EXPLICITNESS_LEVEL: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_MANUFACTURER_NUMBER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUFACTURER_NUMBER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUFACTURER_PART_PROFILE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QLTY_MGMT_IN_PROCMT_IS_ACTIVE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    INDUSTRY_SECTOR: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGE_NUMBER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_REVISION_LEVEL: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HANDLING_INDICATOR: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_PRODUCT_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_STORAGE_CONDITION: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_HANDLING_UNIT_TYPE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER_PROFILE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTMENT_PROFILE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERRED_UNIT_OF_MEASURE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PILFERABLE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_RELEVANT_FOR_HZDS_SUBSTANCES: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    QUARANTINE_PERIOD: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TIME_UNIT_FOR_QUARANTINE_PERIOD: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUALITY_INSPECTION_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_IS_CREATED_BY_CAD: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    HANDLING_UNIT_TYPE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_VARIABLE_TARE_WEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MAXIMUM_PACKAGING_LENGTH: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MAXIMUM_PACKAGING_WIDTH: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MAXIMUM_PACKAGING_HEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNIT_FOR_MAX_PACKAGING_DIMENSIONS: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toDescription} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DESCRIPTION: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductDescriptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PLANT: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductBasicText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_BASIC_TEXT: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductBasicTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductInspectionText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_INSPECTION_TEXT: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductInspectionTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductProcurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PROCUREMENT: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductProcurementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductPurchaseText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_PURCHASE_TEXT: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductPurchaseTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductQualityMgmt} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_QUALITY_MGMT: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductQualityMgmtApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductSales} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_SALES: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductSalesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductSalesTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_SALES_TAX: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductSalesTaxApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProductStorage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_STORAGE: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductStorageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProductUnitsOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT_UNITS_OF_MEASURE: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductUnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesDelivery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_DELIVERY: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductSalesDeliveryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_VALUATION: Link<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductValuationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Product<DeSerializers>>;
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
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crossPlantStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_PLANT_STATUS: fieldBuilder.buildEdmTypeField(
          'CrossPlantStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crossPlantStatusValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_PLANT_STATUS_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'CrossPlantStatusValidityDate',
          'Edm.DateTime',
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
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastChangeDateTime',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link productOldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_OLD_ID: fieldBuilder.buildEdmTypeField(
          'ProductOldID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'GrossWeight',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderQuantityUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceOfSupply} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_OF_SUPPLY: fieldBuilder.buildEdmTypeField(
          'SourceOfSupply',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link weightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'WeightUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_WEIGHT: fieldBuilder.buildEdmTypeField(
          'NetWeight',
          'Edm.Decimal',
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
         * Static representation of the {@link competitorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPETITOR_ID: fieldBuilder.buildEdmTypeField(
          'CompetitorID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'ProductGroup',
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
         * Static representation of the {@link itemCategoryGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CATEGORY_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemCategoryGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HIERARCHY: fieldBuilder.buildEdmTypeField(
          'ProductHierarchy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link division} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION: fieldBuilder.buildEdmTypeField(
          'Division',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link varblPurOrdUnitIsActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARBL_PUR_ORD_UNIT_IS_ACTIVE: fieldBuilder.buildEdmTypeField(
          'VarblPurOrdUnitIsActive',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link volumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'VolumeUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_VOLUME: fieldBuilder.buildEdmTypeField(
          'MaterialVolume',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link anpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANP_CODE: fieldBuilder.buildEdmTypeField('ANPCode', 'Edm.String', true),
        /**
         * Static representation of the {@link brand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAND: fieldBuilder.buildEdmTypeField('Brand', 'Edm.String', true),
        /**
         * Static representation of the {@link procurementRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_RULE: fieldBuilder.buildEdmTypeField(
          'ProcurementRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link lowLevelCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_LEVEL_CODE: fieldBuilder.buildEdmTypeField(
          'LowLevelCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prodNoInGenProdInPrepackProd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_NO_IN_GEN_PROD_IN_PREPACK_PROD: fieldBuilder.buildEdmTypeField(
          'ProdNoInGenProdInPrepackProd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serialIdentifierAssgmtProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_IDENTIFIER_ASSGMT_PROFILE: fieldBuilder.buildEdmTypeField(
          'SerialIdentifierAssgmtProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sizeOrDimensionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_OR_DIMENSION_TEXT: fieldBuilder.buildEdmTypeField(
          'SizeOrDimensionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link industryStandardName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_STANDARD_NAME: fieldBuilder.buildEdmTypeField(
          'IndustryStandardName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStandardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STANDARD_ID: fieldBuilder.buildEdmTypeField(
          'ProductStandardID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link internationalArticleNumberCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_ARTICLE_NUMBER_CAT: fieldBuilder.buildEdmTypeField(
          'InternationalArticleNumberCat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productIsConfigurable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_CONFIGURABLE: fieldBuilder.buildEdmTypeField(
          'ProductIsConfigurable',
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
         * Static representation of the {@link externalProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'ExternalProductGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crossPlantConfigurableProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_PLANT_CONFIGURABLE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'CrossPlantConfigurableProduct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serialNoExplicitnessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NO_EXPLICITNESS_LEVEL: fieldBuilder.buildEdmTypeField(
          'SerialNoExplicitnessLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productManufacturerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MANUFACTURER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductManufacturerNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manufacturerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManufacturerNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link manufacturerPartProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_PART_PROFILE: fieldBuilder.buildEdmTypeField(
          'ManufacturerPartProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qltyMgmtInProcmtIsActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QLTY_MGMT_IN_PROCMT_IS_ACTIVE: fieldBuilder.buildEdmTypeField(
          'QltyMgmtInProcmtIsActive',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link industrySector} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_SECTOR: fieldBuilder.buildEdmTypeField(
          'IndustrySector',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link changeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChangeNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialRevisionLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_REVISION_LEVEL: fieldBuilder.buildEdmTypeField(
          'MaterialRevisionLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link handlingIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLING_INDICATOR: fieldBuilder.buildEdmTypeField(
          'HandlingIndicator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'WarehouseProductGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseStorageCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_STORAGE_CONDITION: fieldBuilder.buildEdmTypeField(
          'WarehouseStorageCondition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardHandlingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_HANDLING_UNIT_TYPE: fieldBuilder.buildEdmTypeField(
          'StandardHandlingUnitType',
          'Edm.String',
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
         * Static representation of the {@link adjustmentProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_PROFILE: fieldBuilder.buildEdmTypeField(
          'AdjustmentProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preferredUnitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'PreferredUnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPilferable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PILFERABLE: fieldBuilder.buildEdmTypeField(
          'IsPilferable',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isRelevantForHzdsSubstances} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RELEVANT_FOR_HZDS_SUBSTANCES: fieldBuilder.buildEdmTypeField(
          'IsRelevantForHzdsSubstances',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link quarantinePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARANTINE_PERIOD: fieldBuilder.buildEdmTypeField(
          'QuarantinePeriod',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link timeUnitForQuarantinePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_UNIT_FOR_QUARANTINE_PERIOD: fieldBuilder.buildEdmTypeField(
          'TimeUnitForQuarantinePeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qualityInspectionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_INSPECTION_GROUP: fieldBuilder.buildEdmTypeField(
          'QualityInspectionGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField(
          'AuthorizationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentIsCreatedByCad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_IS_CREATED_BY_CAD: fieldBuilder.buildEdmTypeField(
          'DocumentIsCreatedByCAD',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link handlingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLING_UNIT_TYPE: fieldBuilder.buildEdmTypeField(
          'HandlingUnitType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasVariableTareWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_VARIABLE_TARE_WEIGHT: fieldBuilder.buildEdmTypeField(
          'HasVariableTareWeight',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link maximumPackagingLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PACKAGING_LENGTH: fieldBuilder.buildEdmTypeField(
          'MaximumPackagingLength',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link maximumPackagingWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PACKAGING_WIDTH: fieldBuilder.buildEdmTypeField(
          'MaximumPackagingWidth',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link maximumPackagingHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PACKAGING_HEIGHT: fieldBuilder.buildEdmTypeField(
          'MaximumPackagingHeight',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link unitForMaxPackagingDimensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_FOR_MAX_PACKAGING_DIMENSIONS: fieldBuilder.buildEdmTypeField(
          'UnitForMaxPackagingDimensions',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Product)
      };
    }

    return this._schema;
  }
}
