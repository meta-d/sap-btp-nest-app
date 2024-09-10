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
import type { ProductUnitsOfMeasureApi } from './ProductUnitsOfMeasureApi';
import {
  ProductUnitsOfMeasureEan,
  ProductUnitsOfMeasureEanType
} from './ProductUnitsOfMeasureEan';

/**
 * This class represents the entity "A_ProductUnitsOfMeasure" of service "API_PRODUCT_SRV".
 */
export class ProductUnitsOfMeasure<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductUnitsOfMeasureType<T>
{
  /**
   * Technical entity name for ProductUnitsOfMeasure.
   */
  static override _entityName = 'A_ProductUnitsOfMeasure';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the ProductUnitsOfMeasure entity.
   */
  static _keys = ['Product', 'AlternativeUnit'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Alternative Unit of Measure for Stockkeeping Unit.
   * Maximum length: 3.
   */
  declare alternativeUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Numerator for Conversion to Base Units of Measure.
   * @nullable
   */
  declare quantityNumerator?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Denominator for conversion to base units of measure.
   * @nullable
   */
  declare quantityDenominator?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Volume.
   * @nullable
   */
  declare materialVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Volume Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare volumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Weight.
   * @nullable
   */
  declare grossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Weight.
   * Maximum length: 3.
   * @nullable
   */
  declare weightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * International Article Number (EAN/UPC).
   * Maximum length: 18.
   * @nullable
   */
  declare globalTradeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category of Global Trade Item Number (GTIN).
   * Maximum length: 2.
   * @nullable
   */
  declare globalTradeItemNumberCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Length.
   * @nullable
   */
  declare unitSpecificProductLength?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Width.
   * @nullable
   */
  declare unitSpecificProductWidth?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Height.
   * @nullable
   */
  declare unitSpecificProductHeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Dimension for Length/Width/Height.
   * Maximum length: 3.
   * @nullable
   */
  declare productMeasurementUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lower-Level Unit of Measure in a Packing Hierarchy.
   * Maximum length: 3.
   * @nullable
   */
  declare lowerLevelPackagingUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Volume after Nesting (in Percentage).
   * @nullable
   */
  declare remainingVolumeAfterNesting?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Maximum Stacking Factor.
   * @nullable
   */
  declare maximumStackingFactor?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * Capacity Usage.
   * @nullable
   */
  declare capacityUsage?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductUnitsOfMeasureEan} entity.
   */
  declare toInternationalArticleNumber: ProductUnitsOfMeasureEan<T>[];

  constructor(_entityApi: ProductUnitsOfMeasureApi<T>) {
    super(_entityApi);
  }
}

export interface ProductUnitsOfMeasureType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  alternativeUnit: DeserializedType<T, 'Edm.String'>;
  quantityNumerator?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantityDenominator?: DeserializedType<T, 'Edm.Decimal'> | null;
  materialVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  volumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  grossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  weightUnit?: DeserializedType<T, 'Edm.String'> | null;
  globalTradeItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  globalTradeItemNumberCategory?: DeserializedType<T, 'Edm.String'> | null;
  unitSpecificProductLength?: DeserializedType<T, 'Edm.Decimal'> | null;
  unitSpecificProductWidth?: DeserializedType<T, 'Edm.Decimal'> | null;
  unitSpecificProductHeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  productMeasurementUnit?: DeserializedType<T, 'Edm.String'> | null;
  lowerLevelPackagingUnit?: DeserializedType<T, 'Edm.String'> | null;
  remainingVolumeAfterNesting?: DeserializedType<T, 'Edm.Decimal'> | null;
  maximumStackingFactor?: DeserializedType<T, 'Edm.Byte'> | null;
  capacityUsage?: DeserializedType<T, 'Edm.Decimal'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  toInternationalArticleNumber: ProductUnitsOfMeasureEanType<T>[];
}
