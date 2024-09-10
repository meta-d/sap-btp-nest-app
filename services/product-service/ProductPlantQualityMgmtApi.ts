/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantQualityMgmt } from './ProductPlantQualityMgmt';
import { ProductPlantQualityMgmtRequestBuilder } from './ProductPlantQualityMgmtRequestBuilder';
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
export class ProductPlantQualityMgmtApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantQualityMgmt<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantQualityMgmtApi<DeSerializersT> {
    return new ProductPlantQualityMgmtApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductPlantQualityMgmt;

  requestBuilder(): ProductPlantQualityMgmtRequestBuilder<DeSerializersT> {
    return new ProductPlantQualityMgmtRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantQualityMgmt<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductPlantQualityMgmt<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantQualityMgmt<DeSerializersT>,
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
    typeof ProductPlantQualityMgmt,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantQualityMgmt,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_STORAGE_PERIOD: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    QUALITY_MGMT_CTRL_KEY: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATL_QUALITY_AUTHORIZATION_GROUP: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_POST_TO_INSPECTION_STOCK: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    INSP_LOT_DOCUMENTATION_IS_REQUIRED: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPLR_QUALITY_MANAGEMENT_SYSTEM: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECRRG_INSP_INTERVAL_TIME_IN_DAYS: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_QUALITY_CERTIFICATE_TYPE: OrderableEdmTypeField<
      ProductPlantQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductPlantQualityMgmt<DeSerializers>>;
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
         * Static representation of the {@link maximumStoragePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_STORAGE_PERIOD: fieldBuilder.buildEdmTypeField(
          'MaximumStoragePeriod',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link qualityMgmtCtrlKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_MGMT_CTRL_KEY: fieldBuilder.buildEdmTypeField(
          'QualityMgmtCtrlKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matlQualityAuthorizationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATL_QUALITY_AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField(
          'MatlQualityAuthorizationGroup',
          'Edm.String',
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
         * Static representation of the {@link inspLotDocumentationIsRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_DOCUMENTATION_IS_REQUIRED: fieldBuilder.buildEdmTypeField(
          'InspLotDocumentationIsRequired',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link suplrQualityManagementSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPLR_QUALITY_MANAGEMENT_SYSTEM: fieldBuilder.buildEdmTypeField(
          'SuplrQualityManagementSystem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recrrgInspIntervalTimeInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRRG_INSP_INTERVAL_TIME_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'RecrrgInspIntervalTimeInDays',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productQualityCertificateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUALITY_CERTIFICATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductQualityCertificateType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductPlantQualityMgmt)
      };
    }

    return this._schema;
  }
}
