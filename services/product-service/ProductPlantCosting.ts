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
import type { ProductPlantCostingApi } from './ProductPlantCostingApi';

/**
 * This class represents the entity "A_ProductPlantCosting" of service "API_PRODUCT_SRV".
 */
export class ProductPlantCosting<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantCostingType<T>
{
  /**
   * Technical entity name for ProductPlantCosting.
   */
  static override _entityName = 'A_ProductPlantCosting';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantCosting entity.
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
   * Co-Product.
   * @nullable
   */
  declare isCoProduct?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Lot Size for Product Costing.
   * @nullable
   */
  declare costingLotSize?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Variance Key.
   * Maximum length: 6.
   * @nullable
   */
  declare varianceKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Counter.
   * Maximum length: 2.
   * @nullable
   */
  declare taskListGroupCounter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key for Task List Group.
   * Maximum length: 8.
   * @nullable
   */
  declare taskListGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Task List Type.
   * Maximum length: 1.
   * @nullable
   */
  declare taskListType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Version To Be Costed.
   * Maximum length: 4.
   * @nullable
   */
  declare costingProductionVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed-Price Co-Product.
   * @nullable
   */
  declare isFixedPriceCoProduct?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Special Procurement Type for Costing.
   * Maximum length: 2.
   * @nullable
   */
  declare costingSpecialProcurementType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Alternative BOM.
   * Maximum length: 2.
   * @nullable
   */
  declare sourceBomAlternative?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM Usage.
   * Maximum length: 1.
   * @nullable
   */
  declare productBomUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Do Not Cost.
   * @nullable
   */
  declare productIsCostingRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;

  constructor(_entityApi: ProductPlantCostingApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantCostingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  isCoProduct?: DeserializedType<T, 'Edm.Boolean'> | null;
  costingLotSize?: DeserializedType<T, 'Edm.Decimal'> | null;
  varianceKey?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  taskListGroupCounter?: DeserializedType<T, 'Edm.String'> | null;
  taskListGroup?: DeserializedType<T, 'Edm.String'> | null;
  taskListType?: DeserializedType<T, 'Edm.String'> | null;
  costingProductionVersion?: DeserializedType<T, 'Edm.String'> | null;
  isFixedPriceCoProduct?: DeserializedType<T, 'Edm.Boolean'> | null;
  costingSpecialProcurementType?: DeserializedType<T, 'Edm.String'> | null;
  sourceBomAlternative?: DeserializedType<T, 'Edm.String'> | null;
  productBomUsage?: DeserializedType<T, 'Edm.String'> | null;
  productIsCostingRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
}
