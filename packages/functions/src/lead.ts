import { lambdaWrapper } from '@exsoinn/aws-sdk-wrappers'
import { LeadService } from '@crm/core/lead'
import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from 'aws-lambda'

export const create: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return LeadService.create(event)
})

export const retrieve: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return LeadService.retrieve(event)
})

export const updateScore: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return LeadService.updateScore(event)
})

export const retrieveQualified: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return LeadService.retrieveQualified(event)
})
