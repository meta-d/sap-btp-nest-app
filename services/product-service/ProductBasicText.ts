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
import type { ProductBasicTextApi } from './ProductBasicTextApi';

/**
 * This class represents the entity "A_ProductBasicText" of service "API_PRODUCT_SRV".
 */
export class ProductBasicText<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductBasicTextType<T>
{
  /**
   * Technical entity name for ProductBasicText.
   */
  static override _entityName = 'A_ProductBasicText';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductBasicText entity.
   */
  static _keys = ['Product', 'Language'];
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Key.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * String.
   * @nullable
   */
  declare longText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductBasicTextApi<T>) {
    super(_entityApi);
  }
}

export interface ProductBasicTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
}
