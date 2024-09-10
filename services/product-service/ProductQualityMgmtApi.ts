/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductQualityMgmt } from './ProductQualityMgmt';
import { ProductQualityMgmtRequestBuilder } from './ProductQualityMgmtRequestBuilder';
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
export class ProductQualityMgmtApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductQualityMgmt<DeSerializersT>, DeSerializersT>
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
  ): ProductQualityMgmtApi<DeSerializersT> {
    return new ProductQualityMgmtApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductQualityMgmt;

  requestBuilder(): ProductQualityMgmtRequestBuilder<DeSerializersT> {
    return new ProductQualityMgmtRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductQualityMgmt<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductQualityMgmt<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductQualityMgmt<DeSerializersT>,
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
    typeof ProductQualityMgmt,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductQualityMgmt,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QLTY_MGMT_IN_PROCMT_IS_ACTIVE: OrderableEdmTypeField<
      ProductQualityMgmt<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProductQualityMgmt<DeSerializers>>;
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
         * Static representation of the {@link qltyMgmtInProcmtIsActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QLTY_MGMT_IN_PROCMT_IS_ACTIVE: fieldBuilder.buildEdmTypeField(
          'QltyMgmtInProcmtIsActive',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductQualityMgmt)
      };
    }

    return this._schema;
  }
}
