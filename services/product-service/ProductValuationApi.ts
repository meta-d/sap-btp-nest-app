/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductValuation } from './ProductValuation';
import { ProductValuationRequestBuilder } from './ProductValuationRequestBuilder';
import { ProductMlAccountApi } from './ProductMlAccountApi';
import { ProductMlPricesApi } from './ProductMlPricesApi';
import { ProductValuationAccountApi } from './ProductValuationAccountApi';
import { ProductValuationCostingApi } from './ProductValuationCostingApi';
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
export class ProductValuationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductValuation<DeSerializersT>, DeSerializersT>
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
  ): ProductValuationApi<DeSerializersT> {
    return new ProductValuationApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toMlAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ML_ACCOUNT: Link<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductMlAccountApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toMlPrices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ML_PRICES: Link<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductMlPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toValuationAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_VALUATION_ACCOUNT: OneToOneLink<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductValuationAccountApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toValuationCosting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_VALUATION_COSTING: OneToOneLink<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductValuationCostingApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductMlAccountApi<DeSerializersT>,
      ProductMlPricesApi<DeSerializersT>,
      ProductValuationAccountApi<DeSerializersT>,
      ProductValuationCostingApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_ML_ACCOUNT: new Link('to_MLAccount', this, linkedApis[0]),
      TO_ML_PRICES: new Link('to_MLPrices', this, linkedApis[1]),
      TO_VALUATION_ACCOUNT: new OneToOneLink(
        'to_ValuationAccount',
        this,
        linkedApis[2]
      ),
      TO_VALUATION_COSTING: new OneToOneLink(
        'to_ValuationCosting',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = ProductValuation;

  requestBuilder(): ProductValuationRequestBuilder<DeSerializersT> {
    return new ProductValuationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductValuation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductValuation<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductValuation<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductValuation, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductValuation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_CLASS: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_DETERMINATION_CONTROL: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_PRICE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRICE_UNIT_QTY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    INVENTORY_VALUATION_PROCEDURE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MOVING_AVERAGE_PRICE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    VALUATION_CATEGORY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_USAGE_TYPE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_ORIGIN_TYPE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCED_INHOUSE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PROD_COST_EST_NUMBER: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_STOCK_VALUATION_CLASS: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUATION_CLASS_SALES_ORDER_STOCK: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_PRICE_1_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PLANNED_PRICE_2_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PLANNED_PRICE_3_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    FUTURE_PLND_PRICE_1_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    FUTURE_PLND_PRICE_2_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    FUTURE_PLND_PRICE_3_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    TAX_BASED_PRICES_PRICE_UNIT_QTY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRICE_LAST_CHANGE_DATE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PLANNED_PRICE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PREV_INVTRY_PRICE_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toMlAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ML_ACCOUNT: Link<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductMlAccountApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toMlPrices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ML_PRICES: Link<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductMlPricesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toValuationAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_VALUATION_ACCOUNT: OneToOneLink<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductValuationAccountApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toValuationCosting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_VALUATION_COSTING: OneToOneLink<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductValuationCostingApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductValuation<DeSerializers>>;
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
         * Static representation of the {@link valuationClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_CLASS: fieldBuilder.buildEdmTypeField(
          'ValuationClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceDeterminationControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DETERMINATION_CONTROL: fieldBuilder.buildEdmTypeField(
          'PriceDeterminationControl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_PRICE: fieldBuilder.buildEdmTypeField(
          'StandardPrice',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link priceUnitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'PriceUnitQty',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link inventoryValuationProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_VALUATION_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'InventoryValuationProcedure',
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
         * Static representation of the {@link movingAveragePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVING_AVERAGE_PRICE: fieldBuilder.buildEdmTypeField(
          'MovingAveragePrice',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link valuationCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ValuationCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productUsageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_USAGE_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductUsageType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ORIGIN_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductOriginType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProducedInhouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCED_INHOUSE: fieldBuilder.buildEdmTypeField(
          'IsProducedInhouse',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link prodCostEstNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_COST_EST_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProdCostEstNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectStockValuationClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_STOCK_VALUATION_CLASS: fieldBuilder.buildEdmTypeField(
          'ProjectStockValuationClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valuationClassSalesOrderStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_CLASS_SALES_ORDER_STOCK: fieldBuilder.buildEdmTypeField(
          'ValuationClassSalesOrderStock',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedPrice1InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_PRICE_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'PlannedPrice1InCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link plannedPrice2InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'PlannedPrice2InCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link plannedPrice3InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'PlannedPrice3InCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link futurePlndPrice1ValdtyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PLND_PRICE_1_VALDTY_DATE: fieldBuilder.buildEdmTypeField(
          'FuturePlndPrice1ValdtyDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link futurePlndPrice2ValdtyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PLND_PRICE_2_VALDTY_DATE: fieldBuilder.buildEdmTypeField(
          'FuturePlndPrice2ValdtyDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link futurePlndPrice3ValdtyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PLND_PRICE_3_VALDTY_DATE: fieldBuilder.buildEdmTypeField(
          'FuturePlndPrice3ValdtyDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link taxBasedPricesPriceUnitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASED_PRICES_PRICE_UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'TaxBasedPricesPriceUnitQty',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link priceLastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'PriceLastChangeDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link plannedPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_PRICE: fieldBuilder.buildEdmTypeField(
          'PlannedPrice',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link prevInvtryPriceInCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREV_INVTRY_PRICE_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'PrevInvtryPriceInCoCodeCrcy',
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
        /**
         * Static representation of the {@link baseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'BaseUnit',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductValuation)
      };
    }

    return this._schema;
  }
}
