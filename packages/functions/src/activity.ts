import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { lambdaWrapper } from '@exsoinn/aws-sdk-wrappers'
import { ActivityService } from '@crm/core/activity'

export const create: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return ActivityService.create(event)
})

export const retrieve: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return ActivityService.retrieve(event)
})

export const retrieveForContact: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return ActivityService.retrieveForContact(event)
})

export const retrieveForCampaign: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return ActivityService.retrieveForCampaign(event)
})
