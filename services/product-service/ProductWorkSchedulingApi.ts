/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductWorkScheduling } from './ProductWorkScheduling';
import { ProductWorkSchedulingRequestBuilder } from './ProductWorkSchedulingRequestBuilder';
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
export class ProductWorkSchedulingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductWorkScheduling<DeSerializersT>, DeSerializersT>
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
  ): ProductWorkSchedulingApi<DeSerializersT> {
    return new ProductWorkSchedulingApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductWorkScheduling;

  requestBuilder(): ProductWorkSchedulingRequestBuilder<DeSerializersT> {
    return new ProductWorkSchedulingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductWorkScheduling<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductWorkScheduling<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductWorkScheduling<DeSerializersT>,
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
    typeof ProductWorkScheduling,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductWorkScheduling,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_BASE_QUANTITY: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNLIMITED_OVER_DELIV_IS_ALLOWED: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    OVER_DELIV_TOLERANCE_LIMIT: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNDER_DELIV_TOLERANCE_LIMIT: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCTION_INVTRY_MANAGED_LOC: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_PROCESSING_TIME: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCTION_SUPERVISOR: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_PRODUCTION_QUANTITY_UNIT: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODN_ORDER_IS_BATCH_REQUIRED: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSITION_MATRIX_PRODUCTS_GROUP: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_CHANGE_MANAGEMENT_PROFILE: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATL_COMP_IS_MARKED_FOR_BACKFLUSH: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETUP_AND_TEARDOWN_TIME: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCTION_SCHEDULING_PROFILE: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSITION_TIME: OrderableEdmTypeField<
      ProductWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductWorkScheduling<DeSerializers>>;
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
         * Static representation of the {@link materialBaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_BASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaterialBaseQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link unlimitedOverDelivIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLIMITED_OVER_DELIV_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'UnlimitedOverDelivIsAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link overDelivToleranceLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_DELIV_TOLERANCE_LIMIT: fieldBuilder.buildEdmTypeField(
          'OverDelivToleranceLimit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link underDelivToleranceLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDER_DELIV_TOLERANCE_LIMIT: fieldBuilder.buildEdmTypeField(
          'UnderDelivToleranceLimit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productionInvtryManagedLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_INVTRY_MANAGED_LOC: fieldBuilder.buildEdmTypeField(
          'ProductionInvtryManagedLoc',
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
         * Static representation of the {@link productProcessingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_PROCESSING_TIME: fieldBuilder.buildEdmTypeField(
          'ProductProcessingTime',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productionSupervisor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SUPERVISOR: fieldBuilder.buildEdmTypeField(
          'ProductionSupervisor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productProductionQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_PRODUCTION_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductProductionQuantityUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prodnOrderIsBatchRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODN_ORDER_IS_BATCH_REQUIRED: fieldBuilder.buildEdmTypeField(
          'ProdnOrderIsBatchRequired',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transitionMatrixProductsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSITION_MATRIX_PRODUCTS_GROUP: fieldBuilder.buildEdmTypeField(
          'TransitionMatrixProductsGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderChangeManagementProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_CHANGE_MANAGEMENT_PROFILE: fieldBuilder.buildEdmTypeField(
          'OrderChangeManagementProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matlCompIsMarkedForBackflush} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATL_COMP_IS_MARKED_FOR_BACKFLUSH: fieldBuilder.buildEdmTypeField(
          'MatlCompIsMarkedForBackflush',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link setupAndTeardownTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_AND_TEARDOWN_TIME: fieldBuilder.buildEdmTypeField(
          'SetupAndTeardownTime',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productionSchedulingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SCHEDULING_PROFILE: fieldBuilder.buildEdmTypeField(
          'ProductionSchedulingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transitionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSITION_TIME: fieldBuilder.buildEdmTypeField(
          'TransitionTime',
          'Edm.Decimal',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductWorkScheduling)
      };
    }

    return this._schema;
  }
}
