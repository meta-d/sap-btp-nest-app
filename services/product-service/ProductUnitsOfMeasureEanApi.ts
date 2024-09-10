/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductUnitsOfMeasureEan } from './ProductUnitsOfMeasureEan';
import { ProductUnitsOfMeasureEanRequestBuilder } from './ProductUnitsOfMeasureEanRequestBuilder';
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
export class ProductUnitsOfMeasureEanApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductUnitsOfMeasureEan<DeSerializersT>, DeSerializersT>
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
  ): ProductUnitsOfMeasureEanApi<DeSerializersT> {
    return new ProductUnitsOfMeasureEanApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductUnitsOfMeasureEan;

  requestBuilder(): ProductUnitsOfMeasureEanRequestBuilder<DeSerializersT> {
    return new ProductUnitsOfMeasureEanRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductUnitsOfMeasureEan<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductUnitsOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductUnitsOfMeasureEan<DeSerializersT>,
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
    typeof ProductUnitsOfMeasureEan,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductUnitsOfMeasureEan,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductUnitsOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_UNIT: OrderableEdmTypeField<
      ProductUnitsOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSECUTIVE_NUMBER: OrderableEdmTypeField<
      ProductUnitsOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STANDARD_ID: OrderableEdmTypeField<
      ProductUnitsOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNATIONAL_ARTICLE_NUMBER_CAT: OrderableEdmTypeField<
      ProductUnitsOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MAIN_GLOBAL_TRADE_ITEM_NUMBER: OrderableEdmTypeField<
      ProductUnitsOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductUnitsOfMeasureEan<DeSerializers>>;
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
         * Static representation of the {@link alternativeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_UNIT: fieldBuilder.buildEdmTypeField(
          'AlternativeUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consecutiveNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSECUTIVE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsecutiveNumber',
          'Edm.String',
          false
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
         * Static representation of the {@link isMainGlobalTradeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MAIN_GLOBAL_TRADE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'IsMainGlobalTradeItemNumber',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductUnitsOfMeasureEan)
      };
    }

    return this._schema;
  }
}
