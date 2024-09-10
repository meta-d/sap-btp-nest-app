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
import type { ProductValuationApi } from './ProductValuationApi';
import { ProductMlAccount, ProductMlAccountType } from './ProductMlAccount';
import { ProductMlPrices, ProductMlPricesType } from './ProductMlPrices';
import {
  ProductValuationAccount,
  ProductValuationAccountType
} from './ProductValuationAccount';
import {
  ProductValuationCosting,
  ProductValuationCostingType
} from './ProductValuationCosting';

/**
 * This class represents the entity "A_ProductValuation" of service "API_PRODUCT_SRV".
 */
export class ProductValuation<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductValuationType<T>
{
  /**
   * Technical entity name for ProductValuation.
   */
  static override _entityName = 'A_ProductValuation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductValuation entity.
   */
  static _keys = ['Product', 'ValuationArea', 'ValuationType'];
  /**
   * Material Number.
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
   * Valuation Class.
   * Maximum length: 4.
   * @nullable
   */
  declare valuationClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Price Determination: Control.
   * Maximum length: 1.
   * @nullable
   */
  declare priceDeterminationControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard price.
   * @nullable
   */
  declare standardPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Price unit.
   * @nullable
   */
  declare priceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Price Control.
   * Maximum length: 1.
   * @nullable
   */
  declare inventoryValuationProcedure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Deletion flag for all material data of a valuation type.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Moving Average Price/Periodic Unit Price.
   * @nullable
   */
  declare movingAveragePrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Valuation Category.
   * Maximum length: 1.
   * @nullable
   */
  declare valuationCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage of the Product.
   * Maximum length: 1.
   * @nullable
   */
  declare productUsageType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin of the Product.
   * Maximum length: 1.
   * @nullable
   */
  declare productOriginType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Produced in-house.
   * @nullable
   */
  declare isProducedInhouse?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Cost Estimate Number - Product Costing.
   * Maximum length: 12.
   * @nullable
   */
  declare prodCostEstNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation Class for Project Stock.
   * Maximum length: 4.
   * @nullable
   */
  declare projectStockValuationClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation Class for Sales Order Stock.
   * Maximum length: 4.
   * @nullable
   */
  declare valuationClassSalesOrderStock?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Future Planned Price 1.
   * @nullable
   */
  declare plannedPrice1InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Future Planned Price 2.
   * @nullable
   */
  declare plannedPrice2InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Future Planned Price 3.
   * @nullable
   */
  declare plannedPrice3InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Date from Which Future Planned Price 1 Is Valid.
   * @nullable
   */
  declare futurePlndPrice1ValdtyDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Date from Which Future Planned Price 2 Is Valid.
   * @nullable
   */
  declare futurePlndPrice2ValdtyDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Date from Which Future Planned Price 3 Is Valid.
   * @nullable
   */
  declare futurePlndPrice3ValdtyDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Price unit for valuation prices based on tax/commercial law.
   * @nullable
   */
  declare taxBasedPricesPriceUnitQty?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Date of Last Price Change.
   * @nullable
   */
  declare priceLastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Future Planned Price.
   * @nullable
   */
  declare plannedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Previous Price.
   * @nullable
   */
  declare prevInvtryPriceInCoCodeCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductMlAccount} entity.
   */
  declare toMlAccount: ProductMlAccount<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMlPrices} entity.
   */
  declare toMlPrices: ProductMlPrices<T>[];
  /**
   * One-to-one navigation property to the {@link ProductValuationAccount} entity.
   */
  declare toValuationAccount?: ProductValuationAccount<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductValuationCosting} entity.
   */
  declare toValuationCosting?: ProductValuationCosting<T> | null;

  constructor(_entityApi: ProductValuationApi<T>) {
    super(_entityApi);
  }
}

export interface ProductValuationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  valuationClass?: DeserializedType<T, 'Edm.String'> | null;
  priceDeterminationControl?: DeserializedType<T, 'Edm.String'> | null;
  standardPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  priceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  inventoryValuationProcedure?: DeserializedType<T, 'Edm.String'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  movingAveragePrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  valuationCategory?: DeserializedType<T, 'Edm.String'> | null;
  productUsageType?: DeserializedType<T, 'Edm.String'> | null;
  productOriginType?: DeserializedType<T, 'Edm.String'> | null;
  isProducedInhouse?: DeserializedType<T, 'Edm.Boolean'> | null;
  prodCostEstNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectStockValuationClass?: DeserializedType<T, 'Edm.String'> | null;
  valuationClassSalesOrderStock?: DeserializedType<T, 'Edm.String'> | null;
  plannedPrice1InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  plannedPrice2InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  plannedPrice3InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  futurePlndPrice1ValdtyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  futurePlndPrice2ValdtyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  futurePlndPrice3ValdtyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  taxBasedPricesPriceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  priceLastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  plannedPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  prevInvtryPriceInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  toMlAccount: ProductMlAccountType<T>[];
  toMlPrices: ProductMlPricesType<T>[];
  toValuationAccount?: ProductValuationAccountType<T> | null;
  toValuationCosting?: ProductValuationCostingType<T> | null;
}
