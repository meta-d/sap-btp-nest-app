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
import type { ProductValuationCostingApi } from './ProductValuationCostingApi';

/**
 * This class represents the entity "A_ProductValuationCosting" of service "API_PRODUCT_SRV".
 */
export class ProductValuationCosting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductValuationCostingType<T>
{
  /**
   * Technical entity name for ProductValuationCosting.
   */
  static override _entityName = 'A_ProductValuationCosting';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductValuationCosting entity.
   */
  static _keys = ['Product', 'ValuationArea', 'ValuationType'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Valuation Area.
   * Maximum length: 4.
   */
  declare valuationArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Valuation Type.
   * Maximum length: 10.
   */
  declare valuationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Is Costed with Quantity Structure.
   * @nullable
   */
  declare isMaterialCostedWithQtyStruc?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Material-related origin.
   * Maximum length: 1.
   * @nullable
   */
  declare isMaterialRelatedOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin Group as Subdivision of Cost Element.
   * Maximum length: 4.
   * @nullable
   */
  declare costOriginGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Costing Overhead Group.
   * Maximum length: 10.
   * @nullable
   */
  declare costingOverheadGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductValuationCostingApi<T>) {
    super(_entityApi);
  }
}

export interface ProductValuationCostingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  isMaterialCostedWithQtyStruc?: DeserializedType<T, 'Edm.Boolean'> | null;
  isMaterialRelatedOrigin?: DeserializedType<T, 'Edm.String'> | null;
  costOriginGroup?: DeserializedType<T, 'Edm.String'> | null;
  costingOverheadGroup?: DeserializedType<T, 'Edm.String'> | null;
}
