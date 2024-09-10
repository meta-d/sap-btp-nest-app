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
import type { ProductDescriptionApi } from './ProductDescriptionApi';

/**
 * This class represents the entity "A_ProductDescription" of service "API_PRODUCT_SRV".
 */
export class ProductDescription<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductDescriptionType<T>
{
  /**
   * Technical entity name for ProductDescription.
   */
  static override _entityName = 'A_ProductDescription';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductDescription entity.
   */
  static _keys = ['Product', 'Language'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Key.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Description.
   * Maximum length: 40.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductDescriptionApi<T>) {
    super(_entityApi);
  }
}

export interface ProductDescriptionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
}
