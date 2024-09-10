/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ProductQualityMgmt } from './ProductQualityMgmt';

/**
 * Request builder class for operations supported on the {@link ProductQualityMgmt} entity.
 */
export class ProductQualityMgmtRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductQualityMgmt<T>, T> {
  /**
   * Returns a request builder for querying all `ProductQualityMgmt` entities.
   * @returns A request builder for creating requests to retrieve all `ProductQualityMgmt` entities.
   */
  getAll(): GetAllRequestBuilder<ProductQualityMgmt<T>, T> {
    return new GetAllRequestBuilder<ProductQualityMgmt<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductQualityMgmt` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductQualityMgmt`.
   */
  create(
    entity: ProductQualityMgmt<T>
  ): CreateRequestBuilder<ProductQualityMgmt<T>, T> {
    return new CreateRequestBuilder<ProductQualityMgmt<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductQualityMgmt` entity based on its keys.
   * @param product Key property. See {@link ProductQualityMgmt.product}.
   * @returns A request builder for creating requests to retrieve one `ProductQualityMgmt` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductQualityMgmt<T>, T> {
    return new GetByKeyRequestBuilder<ProductQualityMgmt<T>, T>(
      this.entityApi,
      { Product: product }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductQualityMgmt`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductQualityMgmt`.
   */
  update(
    entity: ProductQualityMgmt<T>
  ): UpdateRequestBuilder<ProductQualityMgmt<T>, T> {
    return new UpdateRequestBuilder<ProductQualityMgmt<T>, T>(
      this.entityApi,
      entity
    );
  }
}
