/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantIntlTrd } from './ProductPlantIntlTrd';
import { ProductPlantIntlTrdRequestBuilder } from './ProductPlantIntlTrdRequestBuilder';
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
export class ProductPlantIntlTrdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantIntlTrd<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantIntlTrdApi<DeSerializersT> {
    return new ProductPlantIntlTrdApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductPlantIntlTrd;

  requestBuilder(): ProductPlantIntlTrdRequestBuilder<DeSerializersT> {
    return new ProductPlantIntlTrdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantIntlTrd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantIntlTrd<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantIntlTrd<DeSerializersT>,
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
    typeof ProductPlantIntlTrd,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantIntlTrd,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantIntlTrd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantIntlTrd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_OF_ORIGIN: OrderableEdmTypeField<
      ProductPlantIntlTrd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION_OF_ORIGIN: OrderableEdmTypeField<
      ProductPlantIntlTrd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_TAX_CTRL_CODE: OrderableEdmTypeField<
      ProductPlantIntlTrd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CAS_NUMBER: OrderableEdmTypeField<
      ProductPlantIntlTrd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROD_INTL_TRADE_CLASSIFICATION: OrderableEdmTypeField<
      ProductPlantIntlTrd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_AND_IMPORT_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductPlantIntlTrd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductPlantIntlTrd<DeSerializers>>;
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
         * Static representation of the {@link consumptionTaxCtrlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_TAX_CTRL_CODE: fieldBuilder.buildEdmTypeField(
          'ConsumptionTaxCtrlCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productCasNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CAS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductCASNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prodIntlTradeClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_INTL_TRADE_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'ProdIntlTradeClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportAndImportProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_AND_IMPORT_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'ExportAndImportProductGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductPlantIntlTrd)
      };
    }

    return this._schema;
  }
}
