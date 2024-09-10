/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantCosting } from './ProductPlantCosting';
import { ProductPlantCostingRequestBuilder } from './ProductPlantCostingRequestBuilder';
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
export class ProductPlantCostingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantCosting<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantCostingApi<DeSerializersT> {
    return new ProductPlantCostingApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductPlantCosting;

  requestBuilder(): ProductPlantCostingRequestBuilder<DeSerializersT> {
    return new ProductPlantCostingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantCosting<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantCosting<DeSerializersT>,
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
    typeof ProductPlantCosting,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantCosting,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_CO_PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COSTING_LOT_SIZE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    VARIANCE_KEY: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_LIST_GROUP_COUNTER: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_LIST_GROUP: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_LIST_TYPE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COSTING_PRODUCTION_VERSION: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FIXED_PRICE_CO_PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COSTING_SPECIAL_PROCUREMENT_TYPE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_BOM_ALTERNATIVE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_BOM_USAGE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_IS_COSTING_RELEVANT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductPlantCosting<DeSerializers>>;
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
         * Static representation of the {@link isCoProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CO_PRODUCT: fieldBuilder.buildEdmTypeField(
          'IsCoProduct',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link costingLotSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_LOT_SIZE: fieldBuilder.buildEdmTypeField(
          'CostingLotSize',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link varianceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_KEY: fieldBuilder.buildEdmTypeField(
          'VarianceKey',
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
         * Static representation of the {@link taskListGroupCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LIST_GROUP_COUNTER: fieldBuilder.buildEdmTypeField(
          'TaskListGroupCounter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskListGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LIST_GROUP: fieldBuilder.buildEdmTypeField(
          'TaskListGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskListType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LIST_TYPE: fieldBuilder.buildEdmTypeField(
          'TaskListType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costingProductionVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_PRODUCTION_VERSION: fieldBuilder.buildEdmTypeField(
          'CostingProductionVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFixedPriceCoProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_PRICE_CO_PRODUCT: fieldBuilder.buildEdmTypeField(
          'IsFixedPriceCoProduct',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link costingSpecialProcurementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_SPECIAL_PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'CostingSpecialProcurementType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceBomAlternative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BOM_ALTERNATIVE: fieldBuilder.buildEdmTypeField(
          'SourceBOMAlternative',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productBomUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_BOM_USAGE: fieldBuilder.buildEdmTypeField(
          'ProductBOMUsage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productIsCostingRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_COSTING_RELEVANT: fieldBuilder.buildEdmTypeField(
          'ProductIsCostingRelevant',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductPlantCosting)
      };
    }

    return this._schema;
  }
}
