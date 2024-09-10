/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductApi } from './ProductApi';
import { ProductBasicTextApi } from './ProductBasicTextApi';
import { ProductDescriptionApi } from './ProductDescriptionApi';
import { ProductInspectionTextApi } from './ProductInspectionTextApi';
import { ProductMlAccountApi } from './ProductMlAccountApi';
import { ProductMlPricesApi } from './ProductMlPricesApi';
import { ProductPlantApi } from './ProductPlantApi';
import { ProductPlantCostingApi } from './ProductPlantCostingApi';
import { ProductPlantForecastingApi } from './ProductPlantForecastingApi';
import { ProductPlantIntlTrdApi } from './ProductPlantIntlTrdApi';
import { ProductPlantMrpAreaApi } from './ProductPlantMrpAreaApi';
import { ProductPlantProcurementApi } from './ProductPlantProcurementApi';
import { ProductPlantQualityMgmtApi } from './ProductPlantQualityMgmtApi';
import { ProductPlantSalesApi } from './ProductPlantSalesApi';
import { ProductPlantStorageApi } from './ProductPlantStorageApi';
import { ProductPlantTextApi } from './ProductPlantTextApi';
import { ProductProcurementApi } from './ProductProcurementApi';
import { ProductPurchaseTextApi } from './ProductPurchaseTextApi';
import { ProductQualityMgmtApi } from './ProductQualityMgmtApi';
import { ProductSalesApi } from './ProductSalesApi';
import { ProductSalesDeliveryApi } from './ProductSalesDeliveryApi';
import { ProductSalesTaxApi } from './ProductSalesTaxApi';
import { ProductSalesTextApi } from './ProductSalesTextApi';
import { ProductStorageApi } from './ProductStorageApi';
import { ProductStorageLocationApi } from './ProductStorageLocationApi';
import { ProductSupplyPlanningApi } from './ProductSupplyPlanningApi';
import { ProductUnitsOfMeasureApi } from './ProductUnitsOfMeasureApi';
import { ProductUnitsOfMeasureEanApi } from './ProductUnitsOfMeasureEanApi';
import { ProductValuationApi } from './ProductValuationApi';
import { ProductValuationAccountApi } from './ProductValuationAccountApi';
import { ProductValuationCostingApi } from './ProductValuationCostingApi';
import { ProductWorkSchedulingApi } from './ProductWorkSchedulingApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function productService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): ProductService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new ProductService(mergeDefaultDeSerializersWith(deSerializers));
}
class ProductService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get productApi(): ProductApi<DeSerializersT> {
    const api = this.initApi('productApi', ProductApi);
    const linkedApis = [
      this.initApi('productDescriptionApi', ProductDescriptionApi),
      this.initApi('productPlantApi', ProductPlantApi),
      this.initApi('productBasicTextApi', ProductBasicTextApi),
      this.initApi('productInspectionTextApi', ProductInspectionTextApi),
      this.initApi('productProcurementApi', ProductProcurementApi),
      this.initApi('productPurchaseTextApi', ProductPurchaseTextApi),
      this.initApi('productQualityMgmtApi', ProductQualityMgmtApi),
      this.initApi('productSalesApi', ProductSalesApi),
      this.initApi('productSalesTaxApi', ProductSalesTaxApi),
      this.initApi('productStorageApi', ProductStorageApi),
      this.initApi('productUnitsOfMeasureApi', ProductUnitsOfMeasureApi),
      this.initApi('productSalesDeliveryApi', ProductSalesDeliveryApi),
      this.initApi('productValuationApi', ProductValuationApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productBasicTextApi(): ProductBasicTextApi<DeSerializersT> {
    return this.initApi('productBasicTextApi', ProductBasicTextApi);
  }

  get productDescriptionApi(): ProductDescriptionApi<DeSerializersT> {
    return this.initApi('productDescriptionApi', ProductDescriptionApi);
  }

  get productInspectionTextApi(): ProductInspectionTextApi<DeSerializersT> {
    return this.initApi('productInspectionTextApi', ProductInspectionTextApi);
  }

  get productMlAccountApi(): ProductMlAccountApi<DeSerializersT> {
    return this.initApi('productMlAccountApi', ProductMlAccountApi);
  }

  get productMlPricesApi(): ProductMlPricesApi<DeSerializersT> {
    return this.initApi('productMlPricesApi', ProductMlPricesApi);
  }

  get productPlantApi(): ProductPlantApi<DeSerializersT> {
    const api = this.initApi('productPlantApi', ProductPlantApi);
    const linkedApis = [
      this.initApi('productPlantMrpAreaApi', ProductPlantMrpAreaApi),
      this.initApi('productPlantQualityMgmtApi', ProductPlantQualityMgmtApi),
      this.initApi('productPlantSalesApi', ProductPlantSalesApi),
      this.initApi('productPlantStorageApi', ProductPlantStorageApi),
      this.initApi('productPlantTextApi', ProductPlantTextApi),
      this.initApi('productPlantIntlTrdApi', ProductPlantIntlTrdApi),
      this.initApi('productPlantCostingApi', ProductPlantCostingApi),
      this.initApi('productPlantForecastingApi', ProductPlantForecastingApi),
      this.initApi('productPlantProcurementApi', ProductPlantProcurementApi),
      this.initApi('productSupplyPlanningApi', ProductSupplyPlanningApi),
      this.initApi('productWorkSchedulingApi', ProductWorkSchedulingApi),
      this.initApi('productStorageLocationApi', ProductStorageLocationApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantCostingApi(): ProductPlantCostingApi<DeSerializersT> {
    return this.initApi('productPlantCostingApi', ProductPlantCostingApi);
  }

  get productPlantForecastingApi(): ProductPlantForecastingApi<DeSerializersT> {
    return this.initApi(
      'productPlantForecastingApi',
      ProductPlantForecastingApi
    );
  }

  get productPlantIntlTrdApi(): ProductPlantIntlTrdApi<DeSerializersT> {
    return this.initApi('productPlantIntlTrdApi', ProductPlantIntlTrdApi);
  }

  get productPlantMrpAreaApi(): ProductPlantMrpAreaApi<DeSerializersT> {
    return this.initApi('productPlantMrpAreaApi', ProductPlantMrpAreaApi);
  }

  get productPlantProcurementApi(): ProductPlantProcurementApi<DeSerializersT> {
    return this.initApi(
      'productPlantProcurementApi',
      ProductPlantProcurementApi
    );
  }

  get productPlantQualityMgmtApi(): ProductPlantQualityMgmtApi<DeSerializersT> {
    return this.initApi(
      'productPlantQualityMgmtApi',
      ProductPlantQualityMgmtApi
    );
  }

  get productPlantSalesApi(): ProductPlantSalesApi<DeSerializersT> {
    return this.initApi('productPlantSalesApi', ProductPlantSalesApi);
  }

  get productPlantStorageApi(): ProductPlantStorageApi<DeSerializersT> {
    return this.initApi('productPlantStorageApi', ProductPlantStorageApi);
  }

  get productPlantTextApi(): ProductPlantTextApi<DeSerializersT> {
    return this.initApi('productPlantTextApi', ProductPlantTextApi);
  }

  get productProcurementApi(): ProductProcurementApi<DeSerializersT> {
    return this.initApi('productProcurementApi', ProductProcurementApi);
  }

  get productPurchaseTextApi(): ProductPurchaseTextApi<DeSerializersT> {
    return this.initApi('productPurchaseTextApi', ProductPurchaseTextApi);
  }

  get productQualityMgmtApi(): ProductQualityMgmtApi<DeSerializersT> {
    return this.initApi('productQualityMgmtApi', ProductQualityMgmtApi);
  }

  get productSalesApi(): ProductSalesApi<DeSerializersT> {
    return this.initApi('productSalesApi', ProductSalesApi);
  }

  get productSalesDeliveryApi(): ProductSalesDeliveryApi<DeSerializersT> {
    const api = this.initApi(
      'productSalesDeliveryApi',
      ProductSalesDeliveryApi
    );
    const linkedApis = [
      this.initApi('productSalesTaxApi', ProductSalesTaxApi),
      this.initApi('productSalesTextApi', ProductSalesTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productSalesTaxApi(): ProductSalesTaxApi<DeSerializersT> {
    return this.initApi('productSalesTaxApi', ProductSalesTaxApi);
  }

  get productSalesTextApi(): ProductSalesTextApi<DeSerializersT> {
    return this.initApi('productSalesTextApi', ProductSalesTextApi);
  }

  get productStorageApi(): ProductStorageApi<DeSerializersT> {
    return this.initApi('productStorageApi', ProductStorageApi);
  }

  get productStorageLocationApi(): ProductStorageLocationApi<DeSerializersT> {
    return this.initApi('productStorageLocationApi', ProductStorageLocationApi);
  }

  get productSupplyPlanningApi(): ProductSupplyPlanningApi<DeSerializersT> {
    return this.initApi('productSupplyPlanningApi', ProductSupplyPlanningApi);
  }

  get productUnitsOfMeasureApi(): ProductUnitsOfMeasureApi<DeSerializersT> {
    const api = this.initApi(
      'productUnitsOfMeasureApi',
      ProductUnitsOfMeasureApi
    );
    const linkedApis = [
      this.initApi('productUnitsOfMeasureEanApi', ProductUnitsOfMeasureEanApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productUnitsOfMeasureEanApi(): ProductUnitsOfMeasureEanApi<DeSerializersT> {
    return this.initApi(
      'productUnitsOfMeasureEanApi',
      ProductUnitsOfMeasureEanApi
    );
  }

  get productValuationApi(): ProductValuationApi<DeSerializersT> {
    const api = this.initApi('productValuationApi', ProductValuationApi);
    const linkedApis = [
      this.initApi('productMlAccountApi', ProductMlAccountApi),
      this.initApi('productMlPricesApi', ProductMlPricesApi),
      this.initApi('productValuationAccountApi', ProductValuationAccountApi),
      this.initApi('productValuationCostingApi', ProductValuationCostingApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productValuationAccountApi(): ProductValuationAccountApi<DeSerializersT> {
    return this.initApi(
      'productValuationAccountApi',
      ProductValuationAccountApi
    );
  }

  get productValuationCostingApi(): ProductValuationCostingApi<DeSerializersT> {
    return this.initApi(
      'productValuationCostingApi',
      ProductValuationCostingApi
    );
  }

  get productWorkSchedulingApi(): ProductWorkSchedulingApi<DeSerializersT> {
    return this.initApi('productWorkSchedulingApi', ProductWorkSchedulingApi);
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
