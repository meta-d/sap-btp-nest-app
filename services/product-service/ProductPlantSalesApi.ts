/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantSales } from './ProductPlantSales';
import { ProductPlantSalesRequestBuilder } from './ProductPlantSalesRequestBuilder';
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
export class ProductPlantSalesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantSales<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantSalesApi<DeSerializersT> {
    return new ProductPlantSalesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductPlantSales;

  requestBuilder(): ProductPlantSalesRequestBuilder<DeSerializersT> {
    return new ProductPlantSalesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantSales<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductPlantSales<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProductPlantSales,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantSales,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOADING_GROUP: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLACEMENT_PART_TYPE: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAP_PLANNING_QUANTITY_IN_BASE_UO_M: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_SHIPPING_PROCESSING_TIME: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    WRK_CENTERS_SHIPG_SETUP_TIME_IN_DAYS: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    AVAILABILITY_CHECK_TYPE: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductPlantSales<DeSerializers>>;
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
         * Static representation of the {@link loadingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOADING_GROUP: fieldBuilder.buildEdmTypeField(
          'LoadingGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replacementPartType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLACEMENT_PART_TYPE: fieldBuilder.buildEdmTypeField(
          'ReplacementPartType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link capPlanningQuantityInBaseUoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAP_PLANNING_QUANTITY_IN_BASE_UO_M: fieldBuilder.buildEdmTypeField(
          'CapPlanningQuantityInBaseUoM',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productShippingProcessingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SHIPPING_PROCESSING_TIME: fieldBuilder.buildEdmTypeField(
          'ProductShippingProcessingTime',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link wrkCentersShipgSetupTimeInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRK_CENTERS_SHIPG_SETUP_TIME_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'WrkCentersShipgSetupTimeInDays',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', ProductPlantSales)
      };
    }

    return this._schema;
  }
}
