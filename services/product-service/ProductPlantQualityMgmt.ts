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
import type { ProductPlantQualityMgmtApi } from './ProductPlantQualityMgmtApi';

/**
 * This class represents the entity "A_ProductPlantQualityMgmt" of service "API_PRODUCT_SRV".
 */
export class ProductPlantQualityMgmt<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantQualityMgmtType<T>
{
  /**
   * Technical entity name for ProductPlantQualityMgmt.
   */
  static override _entityName = 'A_ProductPlantQualityMgmt';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantQualityMgmt entity.
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
   * Maximum Storage Period.
   * @nullable
   */
  declare maximumStoragePeriod?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Control Key for Quality Management in Procurement.
   * Maximum length: 8.
   * @nullable
   */
  declare qualityMgmtCtrlKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Authorization Group for Activities in QM.
   * Maximum length: 6.
   * @nullable
   */
  declare matlQualityAuthorizationGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Has Post to Inspection Stock.
   * @nullable
   */
  declare hasPostToInspectionStock?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Documentation required indicator.
   * @nullable
   */
  declare inspLotDocumentationIsRequired?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Required QM System for Supplier.
   * Maximum length: 4.
   * @nullable
   */
  declare suplrQualityManagementSystem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Interval Until Next Recurring Inspection.
   * @nullable
   */
  declare recrrgInspIntervalTimeInDays?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Certificate Type.
   * Maximum length: 4.
   * @nullable
   */
  declare productQualityCertificateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ProductPlantQualityMgmtApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantQualityMgmtType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  maximumStoragePeriod?: DeserializedType<T, 'Edm.Decimal'> | null;
  qualityMgmtCtrlKey?: DeserializedType<T, 'Edm.String'> | null;
  matlQualityAuthorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  hasPostToInspectionStock?: DeserializedType<T, 'Edm.Boolean'> | null;
  inspLotDocumentationIsRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  suplrQualityManagementSystem?: DeserializedType<T, 'Edm.String'> | null;
  recrrgInspIntervalTimeInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  productQualityCertificateType?: DeserializedType<T, 'Edm.String'> | null;
}
