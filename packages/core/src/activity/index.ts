import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { HttpResponse } from '@exsoinn/aws-sdk-wrappers'

export module ActivityService {
  export function create(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Activity create operation not yet implemented')
  }

  export function retrieve(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Activity retrieve operation not yet implemented')
  }

  export function retrieveForContact(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Activity retrieve for contact operation not yet implemented')
  }

  export function retrieveForCampaign(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Activity retrieve for campaign operation not yet implemented')
  }
}
