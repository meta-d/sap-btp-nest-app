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
import type { ProductValuationAccountApi } from './ProductValuationAccountApi';

/**
 * This class represents the entity "A_ProductValuationAccount" of service "API_PRODUCT_SRV".
 */
export class ProductValuationAccount<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductValuationAccountType<T>
{
  /**
   * Technical entity name for ProductValuationAccount.
   */
  static override _entityName = 'A_ProductValuationAccount';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductValuationAccount entity.
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
   * Valuation price based on commercial law: level 1.
   * @nullable
   */
  declare commercialPrice1InCoCodeCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Valuation price based on commercial law: level 2.
   * @nullable
   */
  declare commercialPrice2InCoCodeCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Valuation price based on commercial law: level 3.
   * @nullable
   */
  declare commercialPrice3InCoCodeCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Lowest value: devaluation indicator.
   * Maximum length: 2.
   * @nullable
   */
  declare devaluationYearCount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Future Price.
   * @nullable
   */
  declare futureEvaluatedAmountValue?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Date as of which the price is valid.
   * @nullable
   */
  declare futurePriceValidityStartDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Data element for domain BOOLE: TRUE (='X') and FALSE (=' ').
   * @nullable
   */
  declare isLifoAndFifoRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Pool number for LIFO valuation.
   * Maximum length: 4.
   * @nullable
   */
  declare lifoValuationPoolNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation price based on tax law: level 1.
   * @nullable
   */
  declare taxPricel1InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Valuation price based on tax law: level 2.
   * @nullable
   */
  declare taxPrice2InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Valuation price based on tax law: level 3.
   * @nullable
   */
  declare taxPrice3InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductValuationAccountApi<T>) {
    super(_entityApi);
  }
}

export interface ProductValuationAccountType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  commercialPrice1InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  commercialPrice2InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  commercialPrice3InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  devaluationYearCount?: DeserializedType<T, 'Edm.String'> | null;
  futureEvaluatedAmountValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  futurePriceValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  isLifoAndFifoRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifoValuationPoolNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxPricel1InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  taxPrice2InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  taxPrice3InCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
}
