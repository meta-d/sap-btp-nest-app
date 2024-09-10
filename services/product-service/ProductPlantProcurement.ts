/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { ProductPlantProcurementApi } from './ProductPlantProcurementApi';

/**
 * This class represents the entity "A_ProductPlantProcurement" of service "API_PRODUCT_SRV".
 */
export class ProductPlantProcurement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantProcurementType<T>
{
  /**
   * Technical entity name for ProductPlantProcurement.
   */
  static override _entityName = 'A_ProductPlantProcurement';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantProcurement entity.
   */
  static _keys = ['Product', 'Plant'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Indicator: "automatic purchase order allowed".
   * @nullable
   */
  declare isAutoPurOrdCreationAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Indicator: Source list requirement.
   * @nullable
   */
  declare isSourceListRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Source of Supply.
   * Maximum length: 1.
   * @nullable
   */
  declare sourceOfSupplyCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * JIT Delivery Schedules.
   * Maximum length: 1.
   * @nullable
   */
  declare itmIsRlvtToJitDelivSchedules?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ProductPlantProcurementApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantProcurementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  isAutoPurOrdCreationAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  isSourceListRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  sourceOfSupplyCategory?: DeserializedType<T, 'Edm.String'> | null;
  itmIsRlvtToJitDelivSchedules?: DeserializedType<T, 'Edm.String'> | null;
}
