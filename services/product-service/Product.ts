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
import type { ProductApi } from './ProductApi';
import {
  ProductDescription,
  ProductDescriptionType
} from './ProductDescription';
import { ProductPlant, ProductPlantType } from './ProductPlant';
import { ProductBasicText, ProductBasicTextType } from './ProductBasicText';
import {
  ProductInspectionText,
  ProductInspectionTextType
} from './ProductInspectionText';
import {
  ProductProcurement,
  ProductProcurementType
} from './ProductProcurement';
import {
  ProductPurchaseText,
  ProductPurchaseTextType
} from './ProductPurchaseText';
import {
  ProductQualityMgmt,
  ProductQualityMgmtType
} from './ProductQualityMgmt';
import { ProductSales, ProductSalesType } from './ProductSales';
import { ProductSalesTax, ProductSalesTaxType } from './ProductSalesTax';
import { ProductStorage, ProductStorageType } from './ProductStorage';
import {
  ProductUnitsOfMeasure,
  ProductUnitsOfMeasureType
} from './ProductUnitsOfMeasure';
import {
  ProductSalesDelivery,
  ProductSalesDeliveryType
} from './ProductSalesDelivery';
import { ProductValuation, ProductValuationType } from './ProductValuation';

/**
 * This class represents the entity "A_Product" of service "API_PRODUCT_SRV".
 */
export class Product<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductType<T>
{
  /**
   * Technical entity name for Product.
   */
  static override _entityName = 'A_Product';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
  /**
   * All key fields of the Product entity.
   */
  static _keys = ['Product'];
  /**
   * Product Number.
   * Maximum length: 40.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Type.
   * Maximum length: 4.
   * @nullable
   */
  declare productType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cross-Plant Product Status.
   * Maximum length: 2.
   * @nullable
   */
  declare crossPlantStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date from which the cross-plant material status is valid.
   * @nullable
   */
  declare crossPlantStatusValidityDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Created On.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Name of Person Responsible for Creating the Object.
   * Maximum length: 12.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Last Change.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Name of Person Who Changed Object.
   * Maximum length: 12.
   * @nullable
   */
  declare lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Change Time Stamp.
   * @nullable
   */
  declare lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Old Product Number.
   * Maximum length: 40.
   * @nullable
   */
  declare productOldId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Weight.
   * @nullable
   */
  declare grossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Purchase Order Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare purchaseOrderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source of Supply.
   * Maximum length: 1.
   * @nullable
   */
  declare sourceOfSupply?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Weight.
   * Maximum length: 3.
   * @nullable
   */
  declare weightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Weight.
   * @nullable
   */
  declare netWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Country/Region of Origin of Material (Non-Preferential Ori.).
   * Maximum length: 3.
   * @nullable
   */
  declare countryOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Competitor.
   * Maximum length: 10.
   * @nullable
   */
  declare competitorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group.
   * Maximum length: 9.
   * @nullable
   */
  declare productGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General item category group.
   * Maximum length: 4.
   * @nullable
   */
  declare itemCategoryGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Hierarchy.
   * Maximum length: 18.
   * @nullable
   */
  declare productHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  declare division?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variable Purchase Order Unit Active.
   * Maximum length: 1.
   * @nullable
   */
  declare varblPurOrdUnitIsActive?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Volume Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare volumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Volume.
   * @nullable
   */
  declare materialVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * ANP Code.
   * Maximum length: 9.
   * @nullable
   */
  declare anpCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Brand.
   * Maximum length: 4.
   * @nullable
   */
  declare brand?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement rule.
   * Maximum length: 1.
   * @nullable
   */
  declare procurementRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid-From Date.
   * @nullable
   */
  declare validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Low-Level Code.
   * Maximum length: 3.
   * @nullable
   */
  declare lowLevelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Number of the Generic Material in Prepack Materials.
   * Maximum length: 40.
   * @nullable
   */
  declare prodNoInGenProdInPrepackProd?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Serial Number Profile.
   * Maximum length: 4.
   * @nullable
   */
  declare serialIdentifierAssgmtProfile?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Size/dimensions.
   * Maximum length: 32.
   * @nullable
   */
  declare sizeOrDimensionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry Standard Description (such as ANSI or ISO).
   * Maximum length: 18.
   * @nullable
   */
  declare industryStandardName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Global Trade Item Number (EAN/UPC/GTIN).
   * Maximum length: 18.
   * @nullable
   */
  declare productStandardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category of International Article Number (EAN).
   * Maximum length: 2.
   * @nullable
   */
  declare internationalArticleNumberCat?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product is Configurable.
   * @nullable
   */
  declare productIsConfigurable?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Batch Management Requirement Indicator.
   * @nullable
   */
  declare isBatchManagementRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * External Product Group.
   * Maximum length: 18.
   * @nullable
   */
  declare externalProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cross-Plant Configurable Product.
   * Maximum length: 40.
   * @nullable
   */
  declare crossPlantConfigurableProduct?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Level of Explicitness for Serial Number.
   * Maximum length: 1.
   * @nullable
   */
  declare serialNoExplicitnessLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manufacturer Part Number.
   * Maximum length: 40.
   * @nullable
   */
  declare productManufacturerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number of a Manufacturer.
   * Maximum length: 10.
   * @nullable
   */
  declare manufacturerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mfr Part Profile.
   * Maximum length: 4.
   * @nullable
   */
  declare manufacturerPartProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * QM in Procurement Is Active.
   * @nullable
   */
  declare qltyMgmtInProcmtIsActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Industry.
   * Maximum length: 1.
   * @nullable
   */
  declare industrySector?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Change Number.
   * Maximum length: 12.
   * @nullable
   */
  declare changeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Revision Level.
   * Maximum length: 2.
   * @nullable
   */
  declare materialRevisionLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Indicator.
   * Maximum length: 4.
   * @nullable
   */
  declare handlingIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Material Group.
   * Maximum length: 4.
   * @nullable
   */
  declare warehouseProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Storage Condition.
   * Maximum length: 2.
   * @nullable
   */
  declare warehouseStorageCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Standard HU Type.
   * Maximum length: 4.
   * @nullable
   */
  declare standardHandlingUnitType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Number Profile.
   * Maximum length: 4.
   * @nullable
   */
  declare serialNumberProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjustment Profile.
   * Maximum length: 3.
   * @nullable
   */
  declare adjustmentProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferred Alternative UoM for Warehouse Operations.
   * Maximum length: 3.
   * @nullable
   */
  declare preferredUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pilferable.
   * @nullable
   */
  declare isPilferable?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Relevant for Hazardous Substances.
   * @nullable
   */
  declare isRelevantForHzdsSubstances?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Quarantine Period.
   * @nullable
   */
  declare quarantinePeriod?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Time Unit for Quarantine Period.
   * Maximum length: 3.
   * @nullable
   */
  declare timeUnitForQuarantinePeriod?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Quality Inspection Group.
   * Maximum length: 4.
   * @nullable
   */
  declare qualityInspectionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  declare authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CAD Indicator.
   * @nullable
   */
  declare documentIsCreatedByCad?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Handling Unit Type.
   * Maximum length: 4.
   * @nullable
   */
  declare handlingUnitType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variable Tare Weight.
   * @nullable
   */
  declare hasVariableTareWeight?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Maximum Packing Length of Packaging Material.
   * @nullable
   */
  declare maximumPackagingLength?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Maximum Packing Width of Packaging Material.
   * @nullable
   */
  declare maximumPackagingWidth?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Maximum Packing Height of Packaging Material.
   * @nullable
   */
  declare maximumPackagingHeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of Measure for Maximum Packing Length/Width/Height.
   * Maximum length: 3.
   * @nullable
   */
  declare unitForMaxPackagingDimensions?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link ProductDescription} entity.
   */
  declare toDescription: ProductDescription<T>[];
  /**
   * One-to-many navigation property to the {@link ProductPlant} entity.
   */
  declare toPlant: ProductPlant<T>[];
  /**
   * One-to-many navigation property to the {@link ProductBasicText} entity.
   */
  declare toProductBasicText: ProductBasicText<T>[];
  /**
   * One-to-many navigation property to the {@link ProductInspectionText} entity.
   */
  declare toProductInspectionText: ProductInspectionText<T>[];
  /**
   * One-to-one navigation property to the {@link ProductProcurement} entity.
   */
  declare toProductProcurement?: ProductProcurement<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductPurchaseText} entity.
   */
  declare toProductPurchaseText: ProductPurchaseText<T>[];
  /**
   * One-to-one navigation property to the {@link ProductQualityMgmt} entity.
   */
  declare toProductQualityMgmt?: ProductQualityMgmt<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSales} entity.
   */
  declare toProductSales?: ProductSales<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductSalesTax} entity.
   */
  declare toProductSalesTax: ProductSalesTax<T>[];
  /**
   * One-to-one navigation property to the {@link ProductStorage} entity.
   */
  declare toProductStorage?: ProductStorage<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductUnitsOfMeasure} entity.
   */
  declare toProductUnitsOfMeasure: ProductUnitsOfMeasure<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSalesDelivery} entity.
   */
  declare toSalesDelivery: ProductSalesDelivery<T>[];
  /**
   * One-to-many navigation property to the {@link ProductValuation} entity.
   */
  declare toValuation: ProductValuation<T>[];

  constructor(_entityApi: ProductApi<T>) {
    super(_entityApi);
  }
}

export interface ProductType<T extends DeSerializers = DefaultDeSerializers> {
  product: DeserializedType<T, 'Edm.String'>;
  productType?: DeserializedType<T, 'Edm.String'> | null;
  crossPlantStatus?: DeserializedType<T, 'Edm.String'> | null;
  crossPlantStatusValidityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  productOldId?: DeserializedType<T, 'Edm.String'> | null;
  grossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  purchaseOrderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  sourceOfSupply?: DeserializedType<T, 'Edm.String'> | null;
  weightUnit?: DeserializedType<T, 'Edm.String'> | null;
  netWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  countryOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  competitorId?: DeserializedType<T, 'Edm.String'> | null;
  productGroup?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemCategoryGroup?: DeserializedType<T, 'Edm.String'> | null;
  productHierarchy?: DeserializedType<T, 'Edm.String'> | null;
  division?: DeserializedType<T, 'Edm.String'> | null;
  varblPurOrdUnitIsActive?: DeserializedType<T, 'Edm.String'> | null;
  volumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  materialVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  anpCode?: DeserializedType<T, 'Edm.String'> | null;
  brand?: DeserializedType<T, 'Edm.String'> | null;
  procurementRule?: DeserializedType<T, 'Edm.String'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lowLevelCode?: DeserializedType<T, 'Edm.String'> | null;
  prodNoInGenProdInPrepackProd?: DeserializedType<T, 'Edm.String'> | null;
  serialIdentifierAssgmtProfile?: DeserializedType<T, 'Edm.String'> | null;
  sizeOrDimensionText?: DeserializedType<T, 'Edm.String'> | null;
  industryStandardName?: DeserializedType<T, 'Edm.String'> | null;
  productStandardId?: DeserializedType<T, 'Edm.String'> | null;
  internationalArticleNumberCat?: DeserializedType<T, 'Edm.String'> | null;
  productIsConfigurable?: DeserializedType<T, 'Edm.Boolean'> | null;
  isBatchManagementRequired?: DeserializedType<T, 'Edm.Boolean'> | null;
  externalProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  crossPlantConfigurableProduct?: DeserializedType<T, 'Edm.String'> | null;
  serialNoExplicitnessLevel?: DeserializedType<T, 'Edm.String'> | null;
  productManufacturerNumber?: DeserializedType<T, 'Edm.String'> | null;
  manufacturerNumber?: DeserializedType<T, 'Edm.String'> | null;
  manufacturerPartProfile?: DeserializedType<T, 'Edm.String'> | null;
  qltyMgmtInProcmtIsActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  industrySector?: DeserializedType<T, 'Edm.String'> | null;
  changeNumber?: DeserializedType<T, 'Edm.String'> | null;
  materialRevisionLevel?: DeserializedType<T, 'Edm.String'> | null;
  handlingIndicator?: DeserializedType<T, 'Edm.String'> | null;
  warehouseProductGroup?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStorageCondition?: DeserializedType<T, 'Edm.String'> | null;
  standardHandlingUnitType?: DeserializedType<T, 'Edm.String'> | null;
  serialNumberProfile?: DeserializedType<T, 'Edm.String'> | null;
  adjustmentProfile?: DeserializedType<T, 'Edm.String'> | null;
  preferredUnitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  isPilferable?: DeserializedType<T, 'Edm.Boolean'> | null;
  isRelevantForHzdsSubstances?: DeserializedType<T, 'Edm.Boolean'> | null;
  quarantinePeriod?: DeserializedType<T, 'Edm.Decimal'> | null;
  timeUnitForQuarantinePeriod?: DeserializedType<T, 'Edm.String'> | null;
  qualityInspectionGroup?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  documentIsCreatedByCad?: DeserializedType<T, 'Edm.Boolean'> | null;
  handlingUnitType?: DeserializedType<T, 'Edm.String'> | null;
  hasVariableTareWeight?: DeserializedType<T, 'Edm.Boolean'> | null;
  maximumPackagingLength?: DeserializedType<T, 'Edm.Decimal'> | null;
  maximumPackagingWidth?: DeserializedType<T, 'Edm.Decimal'> | null;
  maximumPackagingHeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  unitForMaxPackagingDimensions?: DeserializedType<T, 'Edm.String'> | null;
  toDescription: ProductDescriptionType<T>[];
  toPlant: ProductPlantType<T>[];
  toProductBasicText: ProductBasicTextType<T>[];
  toProductInspectionText: ProductInspectionTextType<T>[];
  toProductProcurement?: ProductProcurementType<T> | null;
  toProductPurchaseText: ProductPurchaseTextType<T>[];
  toProductQualityMgmt?: ProductQualityMgmtType<T> | null;
  toProductSales?: ProductSalesType<T> | null;
  toProductSalesTax: ProductSalesTaxType<T>[];
  toProductStorage?: ProductStorageType<T> | null;
  toProductUnitsOfMeasure: ProductUnitsOfMeasureType<T>[];
  toSalesDelivery: ProductSalesDeliveryType<T>[];
  toValuation: ProductValuationType<T>[];
}
