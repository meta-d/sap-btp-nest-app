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
import type { ProductSalesDeliveryApi } from './ProductSalesDeliveryApi';
import { ProductSalesTax, ProductSalesTaxType } from './ProductSalesTax';
import { ProductSalesText, ProductSalesTextType } from './ProductSalesText';

/**
 * This class represents the entity "A_ProductSalesDelivery" of service "API_PRODUCT_SRV".
 */
export class ProductSalesDelivery<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSalesDeliveryType<T>
{
  /**
   * Technical entity name for ProductSalesDelivery.
   */
  static override _entityName = 'A_ProductSalesDelivery';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductSalesDelivery entity.
   */
  static _keys = ['Product', 'ProductSalesOrg', 'ProductDistributionChnl'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Organization.
   * Maximum length: 4.
   */
  declare productSalesOrg: DeserializedType<T, 'Edm.String'>;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   */
  declare productDistributionChnl: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum order quantity in base unit of measure.
   * @nullable
   */
  declare minimumOrderQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Delivering Plant (Own or External).
   * Maximum length: 4.
   * @nullable
   */
  declare supplyingPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Pricing Group.
   * Maximum length: 2.
   * @nullable
   */
  declare priceSpecificationProductGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Account Assignment Group for Material.
   * Maximum length: 2.
   * @nullable
   */
  declare accountDetnProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Delivery Quantity in Delivery Note Processing.
   * @nullable
   */
  declare deliveryNoteProcMinDelivQty?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Item Category Group from Material Master.
   * Maximum length: 4.
   * @nullable
   */
  declare itemCategoryGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure Of Delivery Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare deliveryQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery unit.
   * @nullable
   */
  declare deliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Distribution-chain-specific material status.
   * Maximum length: 2.
   * @nullable
   */
  declare productSalesStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date from which distr.-chain-spec. material status is valid.
   * @nullable
   */
  declare productSalesStatusValidityDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Sales Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare salesMeasureUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ind.: Flag material for deletion at distribution chain level.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Product Hierarchy.
   * Maximum length: 18.
   * @nullable
   */
  declare productHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group 1.
   * Maximum length: 3.
   * @nullable
   */
  declare firstSalesSpecProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group 2.
   * Maximum length: 3.
   * @nullable
   */
  declare secondSalesSpecProductGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Group 3.
   * Maximum length: 3.
   * @nullable
   */
  declare thirdSalesSpecProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group 4.
   * Maximum length: 3.
   * @nullable
   */
  declare fourthSalesSpecProductGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Group 5.
   * Maximum length: 3.
   * @nullable
   */
  declare fifthSalesSpecProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum make-to-order quantity.
   * @nullable
   */
  declare minimumMakeToOrderOrderQty?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material statistics group.
   * Maximum length: 1.
   * @nullable
   */
  declare logisticsStatisticsGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Volume rebate group.
   * Maximum length: 2.
   * @nullable
   */
  declare volumeRebateGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commission Group.
   * Maximum length: 2.
   * @nullable
   */
  declare productCommissionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Indicator.
   * @nullable
   */
  declare cashDiscountIsDeductible?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Pricing Reference Material.
   * Maximum length: 40.
   * @nullable
   */
  declare pricingReferenceProduct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   * @nullable
   */
  declare roundingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Measure Group.
   * Maximum length: 4.
   * @nullable
   */
  declare productUnitGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variable Sales Unit Not Allowed.
   * @nullable
   */
  declare variableSalesUnitIsNotAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * ID for product attribute 1.
   * @nullable
   */
  declare productHasAttributeId01?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 2.
   * @nullable
   */
  declare productHasAttributeId02?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 3.
   * @nullable
   */
  declare productHasAttributeId03?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 4.
   * @nullable
   */
  declare productHasAttributeId04?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 5.
   * @nullable
   */
  declare productHasAttributeId05?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 6.
   * @nullable
   */
  declare productHasAttributeId06?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 7.
   * @nullable
   */
  declare productHasAttributeId07?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 8.
   * @nullable
   */
  declare productHasAttributeId08?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 9.
   * @nullable
   */
  declare productHasAttributeId09?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ID for product attribute 10.
   * @nullable
   */
  declare productHasAttributeId10?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-many navigation property to the {@link ProductSalesTax} entity.
   */
  declare toSalesTax: ProductSalesTax<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSalesText} entity.
   */
  declare toSalesText: ProductSalesText<T>[];

  constructor(_entityApi: ProductSalesDeliveryApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSalesDeliveryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  productSalesOrg: DeserializedType<T, 'Edm.String'>;
  productDistributionChnl: DeserializedType<T, 'Edm.String'>;
  minimumOrderQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  supplyingPlant?: DeserializedType<T, 'Edm.String'> | null;
  priceSpecificationProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountDetnProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryNoteProcMinDelivQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemCategoryGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  deliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  productSalesStatus?: DeserializedType<T, 'Edm.String'> | null;
  productSalesStatusValidityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  salesMeasureUnit?: DeserializedType<T, 'Edm.String'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  firstSalesSpecProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  secondSalesSpecProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  thirdSalesSpecProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  fourthSalesSpecProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  fifthSalesSpecProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  minimumMakeToOrderOrderQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  logisticsStatisticsGroup?: DeserializedType<T, 'Edm.String'> | null;
  volumeRebateGroup?: DeserializedType<T, 'Edm.String'> | null;
  productCommissionGroup?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscountIsDeductible?: DeserializedType<T, 'Edm.Boolean'> | null;
  pricingReferenceProduct?: DeserializedType<T, 'Edm.String'> | null;
  roundingProfile?: DeserializedType<T, 'Edm.String'> | null;
  productUnitGroup?: DeserializedType<T, 'Edm.String'> | null;
  variableSalesUnitIsNotAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId01?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId02?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId03?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId04?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId05?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId06?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId07?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId08?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId09?: DeserializedType<T, 'Edm.Boolean'> | null;
  productHasAttributeId10?: DeserializedType<T, 'Edm.Boolean'> | null;
  toSalesTax: ProductSalesTaxType<T>[];
  toSalesText: ProductSalesTextType<T>[];
}
