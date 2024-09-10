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
import type { ProductPlantTextApi } from './ProductPlantTextApi';

/**
 * This class represents the entity "A_ProductPlantText" of service "API_PRODUCT_SRV".
 */
export class ProductPlantText<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantTextType<T>
{
  /**
   * Technical entity name for ProductPlantText.
   */
  static override _entityName = 'A_ProductPlantText';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantText entity.
   */
  static _keys = ['Product', 'Plant'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * String.
   * @nullable
   */
  declare longText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductPlantTextApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
