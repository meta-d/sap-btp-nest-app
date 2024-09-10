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
import type { ProductPlantSalesApi } from './ProductPlantSalesApi';

/**
 * This class represents the entity "A_ProductPlantSales" of service "API_PRODUCT_SRV".
 */
export class ProductPlantSales<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantSalesType<T>
{
  /**
   * Technical entity name for ProductPlantSales.
   */
  static override _entityName = 'A_ProductPlantSales';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductPlantSales entity.
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
   * Loading Group.
   * Maximum length: 4.
   * @nullable
   */
  declare loadingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replacement part.
   * Maximum length: 1.
   * @nullable
   */
  declare replacementPartType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base quantity for capacity planning in shipping.
   * @nullable
   */
  declare capPlanningQuantityInBaseUoM?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Shipping processing time.
   * @nullable
   */
  declare productShippingProcessingTime?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Shipping setup time.
   * @nullable
   */
  declare wrkCentersShipgSetupTimeInDays?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Checking Group for Availability Check.
   * Maximum length: 2.
   * @nullable
   */
  declare availabilityCheckType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductPlantSalesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantSalesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  loadingGroup?: DeserializedType<T, 'Edm.String'> | null;
  replacementPartType?: DeserializedType<T, 'Edm.String'> | null;
  capPlanningQuantityInBaseUoM?: DeserializedType<T, 'Edm.Decimal'> | null;
  productShippingProcessingTime?: DeserializedType<T, 'Edm.Decimal'> | null;
  wrkCentersShipgSetupTimeInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  availabilityCheckType?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
}
