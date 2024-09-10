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
import type { ProductWorkSchedulingApi } from './ProductWorkSchedulingApi';

/**
 * This class represents the entity "A_ProductWorkScheduling" of service "API_PRODUCT_SRV".
 */
export class ProductWorkScheduling<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductWorkSchedulingType<T>
{
  /**
   * Technical entity name for ProductWorkScheduling.
   */
  static override _entityName = 'A_ProductWorkScheduling';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductWorkScheduling entity.
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
   * Base quantity.
   * @nullable
   */
  declare materialBaseQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Indicator: Unlimited Overdelivery Allowed.
   * @nullable
   */
  declare unlimitedOverDelivIsAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Overdelivery Tolerance Limit.
   * @nullable
   */
  declare overDelivToleranceLimit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Underdelivery Tolerance Limit.
   * @nullable
   */
  declare underDelivToleranceLimit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Issue Storage Location.
   * Maximum length: 4.
   * @nullable
   */
  declare productionInvtryManagedLoc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing time.
   * @nullable
   */
  declare productProcessingTime?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Production Supervisor.
   * Maximum length: 3.
   * @nullable
   */
  declare productionSupervisor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production unit.
   * Maximum length: 3.
   * @nullable
   */
  declare productProductionQuantityUnit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Determination of batch entry in the production/process order.
   * Maximum length: 1.
   * @nullable
   */
  declare prodnOrderIsBatchRequired?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group of Materials for Transition Matrix.
   * Maximum length: 20.
   * @nullable
   */
  declare transitionMatrixProductsGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Overall profile for order change management.
   * Maximum length: 6.
   * @nullable
   */
  declare orderChangeManagementProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Indicator: Backflush.
   * Maximum length: 1.
   * @nullable
   */
  declare matlCompIsMarkedForBackflush?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Setup and teardown time.
   * @nullable
   */
  declare setupAndTeardownTime?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Production Scheduling Profile.
   * Maximum length: 6.
   * @nullable
   */
  declare productionSchedulingProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Interoperation time.
   * @nullable
   */
  declare transitionTime?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(_entityApi: ProductWorkSchedulingApi<T>) {
    super(_entityApi);
  }
}

export interface ProductWorkSchedulingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  materialBaseQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  unlimitedOverDelivIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  overDelivToleranceLimit?: DeserializedType<T, 'Edm.Decimal'> | null;
  underDelivToleranceLimit?: DeserializedType<T, 'Edm.Decimal'> | null;
  productionInvtryManagedLoc?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  productProcessingTime?: DeserializedType<T, 'Edm.Decimal'> | null;
  productionSupervisor?: DeserializedType<T, 'Edm.String'> | null;
  productProductionQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  prodnOrderIsBatchRequired?: DeserializedType<T, 'Edm.String'> | null;
  transitionMatrixProductsGroup?: DeserializedType<T, 'Edm.String'> | null;
  orderChangeManagementProfile?: DeserializedType<T, 'Edm.String'> | null;
  matlCompIsMarkedForBackflush?: DeserializedType<T, 'Edm.String'> | null;
  setupAndTeardownTime?: DeserializedType<T, 'Edm.Decimal'> | null;
  productionSchedulingProfile?: DeserializedType<T, 'Edm.String'> | null;
  transitionTime?: DeserializedType<T, 'Edm.Decimal'> | null;
}
