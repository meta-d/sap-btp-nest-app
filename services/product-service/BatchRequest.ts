/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  Product,
  ProductBasicText,
  ProductDescription,
  ProductInspectionText,
  ProductMlAccount,
  ProductMlPrices,
  ProductPlant,
  ProductPlantCosting,
  ProductPlantForecasting,
  ProductPlantIntlTrd,
  ProductPlantMrpArea,
  ProductPlantProcurement,
  ProductPlantQualityMgmt,
  ProductPlantSales,
  ProductPlantStorage,
  ProductPlantText,
  ProductProcurement,
  ProductPurchaseText,
  ProductQualityMgmt,
  ProductSales,
  ProductSalesDelivery,
  ProductSalesTax,
  ProductSalesText,
  ProductStorage,
  ProductStorageLocation,
  ProductSupplyPlanning,
  ProductUnitsOfMeasure,
  ProductUnitsOfMeasureEan,
  ProductValuation,
  ProductValuationAccount,
  ProductValuationCosting,
  ProductWorkScheduling
} from './index';

/**
 * Batch builder for operations supported on the Product Service.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadProductServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadProductServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadProductServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadProductServiceRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadProductServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultProductServicePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Product Service.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteProductServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteProductServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteProductServiceRequestBuilder<DeSerializersT>
    | Array<WriteProductServiceRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteProductServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultProductServicePath = '/sap/opu/odata/sap/API_PRODUCT_SRV';
export type ReadProductServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductBasicText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductInspectionText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductMlAccount<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductMlPrices<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductPlantForecasting<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductPlantIntlTrd<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlantMrpArea<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductPlantQualityMgmt<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlantText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPurchaseText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductQualityMgmt<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductSalesTax<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductSalesText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductStorageLocation<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductSupplyPlanning<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductUnitsOfMeasure<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductUnitsOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductValuationAccount<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductWorkScheduling<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductBasicText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductInspectionText<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductMlAccount<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductMlPrices<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductPlantForecasting<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductPlantIntlTrd<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlantMrpArea<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductPlantQualityMgmt<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlantText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPurchaseText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductQualityMgmt<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductSalesTax<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductSalesText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductStorageLocation<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductSupplyPlanning<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductUnitsOfMeasure<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductUnitsOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductValuationAccount<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductWorkScheduling<DeSerializersT>,
      DeSerializersT
    >;
export type WriteProductServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductBasicText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductBasicText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductBasicText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductInspectionText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductInspectionText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductInspectionText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductMlAccount<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductMlAccount<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductMlAccount<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductMlPrices<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductMlPrices<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductMlPrices<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductPlantForecasting<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantForecasting<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantForecasting<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductPlantIntlTrd<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantIntlTrd<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantIntlTrd<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlantMrpArea<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantMrpArea<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantMrpArea<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductPlantQualityMgmt<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantQualityMgmt<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantQualityMgmt<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlantText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPurchaseText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPurchaseText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPurchaseText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductQualityMgmt<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductQualityMgmt<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductQualityMgmt<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductSalesTax<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductSalesTax<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductSalesTax<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductSalesText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductSalesText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductSalesText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductStorageLocation<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductStorageLocation<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductStorageLocation<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductSupplyPlanning<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductSupplyPlanning<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductSupplyPlanning<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductUnitsOfMeasure<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductUnitsOfMeasure<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductUnitsOfMeasure<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductUnitsOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductUnitsOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductUnitsOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductValuationAccount<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductValuationAccount<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductValuationAccount<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductWorkScheduling<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductWorkScheduling<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductWorkScheduling<DeSerializersT>, DeSerializersT>;
