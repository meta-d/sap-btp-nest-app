/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantStorage } from './ProductPlantStorage';
import { ProductPlantStorageRequestBuilder } from './ProductPlantStorageRequestBuilder';
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
export class ProductPlantStorageApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantStorage<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantStorageApi<DeSerializersT> {
    return new ProductPlantStorageApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductPlantStorage;

  requestBuilder(): ProductPlantStorageRequestBuilder<DeSerializersT> {
    return new ProductPlantStorageRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantStorage<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantStorage<DeSerializersT>,
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
    typeof ProductPlantStorage,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantStorage,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_FOR_CYCLE_COUNT_IND: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISIONING_SERVICE_LEVEL: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CYCLE_COUNTING_INDICATOR_IS_FIXED: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PROD_MAXIMUM_STORAGE_PERIOD_UNIT: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRHS_MGMT_PTWY_AND_STK_REMOVAL_STRGY: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductPlantStorage<DeSerializers>>;
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
         * Static representation of the {@link inventoryForCycleCountInd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_FOR_CYCLE_COUNT_IND: fieldBuilder.buildEdmTypeField(
          'InventoryForCycleCountInd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link provisioningServiceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISIONING_SERVICE_LEVEL: fieldBuilder.buildEdmTypeField(
          'ProvisioningServiceLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cycleCountingIndicatorIsFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_COUNTING_INDICATOR_IS_FIXED: fieldBuilder.buildEdmTypeField(
          'CycleCountingIndicatorIsFixed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link prodMaximumStoragePeriodUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_MAXIMUM_STORAGE_PERIOD_UNIT: fieldBuilder.buildEdmTypeField(
          'ProdMaximumStoragePeriodUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wrhsMgmtPtwyAndStkRemovalStrgy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRHS_MGMT_PTWY_AND_STK_REMOVAL_STRGY: fieldBuilder.buildEdmTypeField(
          'WrhsMgmtPtwyAndStkRemovalStrgy',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductPlantStorage)
      };
    }

    return this._schema;
  }
}
