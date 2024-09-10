## Description


## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## How to consume an odata service

### Generate client library for odata

1. Download the EDMX file for odata service like business partner service in the [SAP Business Accelerator Hub](https://api.sap.com/api/API_BUSINESS_PARTNER/overview).
2. Copy the EDMX file into the `service-specifications` folder.
3. Add options for odata service in `options-per-service.json` file in the `service-specifications` folder like the following content:
  ```json
  {
    "service-specifications/API_BUSINESS_PARTNER.edmx": {
      "directoryName": "business-partner-service",
      "basePath": "/sap/opu/odata/sap/API_BUSINESS_PARTNER",
      "packageName": "business-partner-service"
    }
  }
  ```
4. Generate the odata service.
   ```
   npx generate-odata-client --input service-specifications --outputDir services --optionsPerService service-specifications/options-per-service.json --overwrite
   ```

The generated client library is in `services/business-partner-service`, you can use it in services.

### Create service to consume odata service

Next, you will create a service that will be responsible for fetching the business partners. To create a service class `business-partner.service.ts`, execute:

`nest g service business-partner`

Add client library to the service.

Create a controller for providing business partner api:

`nest g controller business-partner`



## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
