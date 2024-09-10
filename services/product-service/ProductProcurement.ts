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
import type { ProductProcurementApi } from './ProductProcurementApi';

/**
 * This class represents the entity "A_ProductProcurement" of service "API_PRODUCT_SRV".
 */
export class ProductProcurement<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductProcurementType<T>
{
  /**
   * Technical entity name for ProductProcurement.
   */
  static override _entityName = 'A_ProductProcurement';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductProcurement entity.
   */
  static _keys = ['Product'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare purchaseOrderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variable Purchase Order Unit Active.
   * Maximum length: 1.
   * @nullable
   */
  declare varblPurOrdUnitStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Value Key.
   * Maximum length: 4.
   * @nullable
   */
  declare purchasingAcknProfile?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductProcurementApi<T>) {
    super(_entityApi);
  }
}

export interface ProductProcurementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  purchaseOrderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  varblPurOrdUnitStatus?: DeserializedType<T, 'Edm.String'> | null;
  purchasingAcknProfile?: DeserializedType<T, 'Edm.String'> | null;
}
