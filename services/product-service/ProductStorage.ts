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
import type { ProductStorageApi } from './ProductStorageApi';

/**
 * This class represents the entity "A_ProductStorage" of service "API_PRODUCT_SRV".
 */
export class ProductStorage<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductStorageType<T>
{
  /**
   * Technical entity name for ProductStorage.
   */
  static override _entityName = 'A_ProductStorage';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductStorage entity.
   */
  static _keys = ['Product'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage conditions.
   * Maximum length: 2.
   * @nullable
   */
  declare storageConditions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Temperature conditions indicator.
   * Maximum length: 2.
   * @nullable
   */
  declare temperatureConditionInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hazardous material number.
   * Maximum length: 40.
   * @nullable
   */
  declare hazardousMaterialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity: Number of GR/GI slips to be printed.
   * @nullable
   */
  declare nmbrOfGrOrGiSlipsToPrintQty?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Label type.
   * Maximum length: 2.
   * @nullable
   */
  declare labelType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label form.
   * Maximum length: 2.
   * @nullable
   */
  declare labelForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Remaining Shelf Life.
   * @nullable
   */
  declare minRemainingShelfLife?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Expiration Date.
   * Maximum length: 1.
   * @nullable
   */
  declare expirationDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Indicator for Shelf Life Expiration Date.
   * Maximum length: 1.
   * @nullable
   */
  declare shelfLifeExpirationDatePeriod?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total shelf life.
   * @nullable
   */
  declare totalShelfLife?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductStorageApi<T>) {
    super(_entityApi);
  }
}

export interface ProductStorageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  storageConditions?: DeserializedType<T, 'Edm.String'> | null;
  temperatureConditionInd?: DeserializedType<T, 'Edm.String'> | null;
  hazardousMaterialNumber?: DeserializedType<T, 'Edm.String'> | null;
  nmbrOfGrOrGiSlipsToPrintQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  labelType?: DeserializedType<T, 'Edm.String'> | null;
  labelForm?: DeserializedType<T, 'Edm.String'> | null;
  minRemainingShelfLife?: DeserializedType<T, 'Edm.Decimal'> | null;
  expirationDate?: DeserializedType<T, 'Edm.String'> | null;
  shelfLifeExpirationDatePeriod?: DeserializedType<T, 'Edm.String'> | null;
  totalShelfLife?: DeserializedType<T, 'Edm.Decimal'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
}
