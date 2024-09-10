/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductValuationAccount } from './ProductValuationAccount';
import { ProductValuationAccountRequestBuilder } from './ProductValuationAccountRequestBuilder';
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
export class ProductValuationAccountApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductValuationAccount<DeSerializersT>, DeSerializersT>
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
  ): ProductValuationAccountApi<DeSerializersT> {
    return new ProductValuationAccountApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductValuationAccount;

  requestBuilder(): ProductValuationAccountRequestBuilder<DeSerializersT> {
    return new ProductValuationAccountRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductValuationAccount<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductValuationAccount<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductValuationAccount<DeSerializersT>,
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
    typeof ProductValuationAccount,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductValuationAccount,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMERCIAL_PRICE_1_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    COMMERCIAL_PRICE_2_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    COMMERCIAL_PRICE_3_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DEVALUATION_YEAR_COUNT: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUTURE_EVALUATED_AMOUNT_VALUE: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    FUTURE_PRICE_VALIDITY_START_DATE: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    IS_LIFO_AND_FIFO_RELEVANT: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFO_VALUATION_POOL_NUMBER: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PRICEL_1_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TAX_PRICE_2_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TAX_PRICE_3_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductValuationAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductValuationAccount<DeSerializers>>;
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
         * Static representation of the {@link valuationArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_AREA: fieldBuilder.buildEdmTypeField(
          'ValuationArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valuationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ValuationType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link commercialPrice1InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_PRICE_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'CommercialPrice1InCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link commercialPrice2InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'CommercialPrice2InCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link commercialPrice3InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'CommercialPrice3InCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link devaluationYearCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVALUATION_YEAR_COUNT: fieldBuilder.buildEdmTypeField(
          'DevaluationYearCount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link futureEvaluatedAmountValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_EVALUATED_AMOUNT_VALUE: fieldBuilder.buildEdmTypeField(
          'FutureEvaluatedAmountValue',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link futurePriceValidityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PRICE_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'FuturePriceValidityStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link isLifoAndFifoRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LIFO_AND_FIFO_RELEVANT: fieldBuilder.buildEdmTypeField(
          'IsLIFOAndFIFORelevant',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link lifoValuationPoolNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFO_VALUATION_POOL_NUMBER: fieldBuilder.buildEdmTypeField(
          'LIFOValuationPoolNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPricel1InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PRICEL_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxPricel1InCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link taxPrice2InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxPrice2InCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link taxPrice3InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxPrice3InCoCodeCrcy',
          'Edm.Decimal',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductValuationAccount)
      };
    }

    return this._schema;
  }
}
