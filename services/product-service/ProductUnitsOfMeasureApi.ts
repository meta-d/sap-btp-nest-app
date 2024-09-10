/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductUnitsOfMeasure } from './ProductUnitsOfMeasure';
import { ProductUnitsOfMeasureRequestBuilder } from './ProductUnitsOfMeasureRequestBuilder';
import { ProductUnitsOfMeasureEanApi } from './ProductUnitsOfMeasureEanApi';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export class ProductUnitsOfMeasureApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductUnitsOfMeasure<DeSerializersT>, DeSerializersT>
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
  ): ProductUnitsOfMeasureApi<DeSerializersT> {
    return new ProductUnitsOfMeasureApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toInternationalArticleNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_INTERNATIONAL_ARTICLE_NUMBER: Link<
      ProductUnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitsOfMeasureEanApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductUnitsOfMeasureEanApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_INTERNATIONAL_ARTICLE_NUMBER: new Link(
        'to_InternationalArticleNumber',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProductUnitsOfMeasure;

  requestBuilder(): ProductUnitsOfMeasureRequestBuilder<DeSerializersT> {
    return new ProductUnitsOfMeasureRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductUnitsOfMeasure<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductUnitsOfMeasure<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductUnitsOfMeasure<DeSerializersT>,
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
    typeof ProductUnitsOfMeasure,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductUnitsOfMeasure,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_UNIT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY_NUMERATOR: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MATERIAL_VOLUME: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    VOLUME_UNIT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_WEIGHT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    WEIGHT_UNIT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER_CATEGORY: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_LENGTH: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_WIDTH: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_HEIGHT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_MEASUREMENT_UNIT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOWER_LEVEL_PACKAGING_UNIT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_VOLUME_AFTER_NESTING: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MAXIMUM_STACKING_FACTOR: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CAPACITY_USAGE: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductUnitsOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toInternationalArticleNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_INTERNATIONAL_ARTICLE_NUMBER: Link<
      ProductUnitsOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitsOfMeasureEanApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductUnitsOfMeasure<DeSerializers>>;
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
         * Static representation of the {@link quantityNumerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_NUMERATOR: fieldBuilder.buildEdmTypeField(
          'QuantityNumerator',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link quantityDenominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'QuantityDenominator',
          'Edm.Decimal',
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
         * Static representation of the {@link volumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'VolumeUnit',
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
         * Static representation of the {@link weightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'WeightUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link globalTradeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_TRADE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'GlobalTradeItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link globalTradeItemNumberCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_TRADE_ITEM_NUMBER_CATEGORY: fieldBuilder.buildEdmTypeField(
          'GlobalTradeItemNumberCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitSpecificProductLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SPECIFIC_PRODUCT_LENGTH: fieldBuilder.buildEdmTypeField(
          'UnitSpecificProductLength',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link unitSpecificProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SPECIFIC_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'UnitSpecificProductWidth',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link unitSpecificProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SPECIFIC_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'UnitSpecificProductHeight',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productMeasurementUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MEASUREMENT_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductMeasurementUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lowerLevelPackagingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_LEVEL_PACKAGING_UNIT: fieldBuilder.buildEdmTypeField(
          'LowerLevelPackagingUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingVolumeAfterNesting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_VOLUME_AFTER_NESTING: fieldBuilder.buildEdmTypeField(
          'RemainingVolumeAfterNesting',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link maximumStackingFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_STACKING_FACTOR: fieldBuilder.buildEdmTypeField(
          'MaximumStackingFactor',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link capacityUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_USAGE: fieldBuilder.buildEdmTypeField(
          'CapacityUsage',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', ProductUnitsOfMeasure)
      };
    }

    return this._schema;
  }
}
