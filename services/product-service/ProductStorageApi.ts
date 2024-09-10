/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStorage } from './ProductStorage';
import { ProductStorageRequestBuilder } from './ProductStorageRequestBuilder';
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
export class ProductStorageApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStorage<DeSerializersT>, DeSerializersT>
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
  ): ProductStorageApi<DeSerializersT> {
    return new ProductStorageApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductStorage;

  requestBuilder(): ProductStorageRequestBuilder<DeSerializersT> {
    return new ProductStorageRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductStorage<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductStorage<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductStorage<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductStorage, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductStorage, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_CONDITIONS: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEMPERATURE_CONDITION_IND: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAZARDOUS_MATERIAL_NUMBER: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NMBR_OF_GR_OR_GI_SLIPS_TO_PRINT_QTY: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    LABEL_TYPE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_FORM: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIN_REMAINING_SHELF_LIFE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHELF_LIFE_EXPIRATION_DATE_PERIOD: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_SHELF_LIFE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductStorage<DeSerializers>>;
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
         * Static representation of the {@link storageConditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_CONDITIONS: fieldBuilder.buildEdmTypeField(
          'StorageConditions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link temperatureConditionInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPERATURE_CONDITION_IND: fieldBuilder.buildEdmTypeField(
          'TemperatureConditionInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hazardousMaterialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAZARDOUS_MATERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'HazardousMaterialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nmbrOfGrOrGiSlipsToPrintQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NMBR_OF_GR_OR_GI_SLIPS_TO_PRINT_QTY: fieldBuilder.buildEdmTypeField(
          'NmbrOfGROrGISlipsToPrintQty',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link labelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_TYPE: fieldBuilder.buildEdmTypeField(
          'LabelType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_FORM: fieldBuilder.buildEdmTypeField(
          'LabelForm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minRemainingShelfLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_REMAINING_SHELF_LIFE: fieldBuilder.buildEdmTypeField(
          'MinRemainingShelfLife',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shelfLifeExpirationDatePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LIFE_EXPIRATION_DATE_PERIOD: fieldBuilder.buildEdmTypeField(
          'ShelfLifeExpirationDatePeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalShelfLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_SHELF_LIFE: fieldBuilder.buildEdmTypeField(
          'TotalShelfLife',
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
        ALL_FIELDS: new AllFields('*', ProductStorage)
      };
    }

    return this._schema;
  }
}
