import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { HttpResponse } from '@exsoinn/aws-sdk-wrappers'

export module CompanyService {
  export function create(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Company create operation not yet implemented')
  }

  export function retrieve(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Company retrieve operation not yet implemented')
  }

  export function update(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Company update operation not yet implemented')
  }

  export function deleteCompany(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Company delete operation not yet implemented')
  }

  export function contacts(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Company contacts operation not yet implemented')
  }
}
