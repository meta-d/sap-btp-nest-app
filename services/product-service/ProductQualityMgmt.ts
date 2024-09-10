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
import type { ProductQualityMgmtApi } from './ProductQualityMgmtApi';

/**
 * This class represents the entity "A_ProductQualityMgmt" of service "API_PRODUCT_SRV".
 */
export class ProductQualityMgmt<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductQualityMgmtType<T>
{
  /**
   * Technical entity name for ProductQualityMgmt.
   */
  static override _entityName = 'A_ProductQualityMgmt';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductQualityMgmt entity.
   */
  static _keys = ['Product'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * QM in Procurement Is Active.
   * @nullable
   */
  declare qltyMgmtInProcmtIsActive?: DeserializedType<T, 'Edm.Boolean'> | null;

  constructor(_entityApi: ProductQualityMgmtApi<T>) {
    super(_entityApi);
  }
}

export interface ProductQualityMgmtType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  qltyMgmtInProcmtIsActive?: DeserializedType<T, 'Edm.Boolean'> | null;
}
