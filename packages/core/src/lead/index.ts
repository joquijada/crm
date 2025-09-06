import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { HttpResponse } from '@exsoinn/aws-sdk-wrappers'

export module LeadService {
  export function create(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Lead create operation not yet implemented')
  }

  export function retrieve(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Lead retrieve operation not yet implemented')
  }

  export function updateScore(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Lead update score operation not yet implemented')
  }

  export function retrieveQualified(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Lead retrieve qualified operation not yet implemented')
  }
}
