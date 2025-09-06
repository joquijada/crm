import { lambdaWrapper } from '@exsoinn/aws-sdk-wrappers'
import { CampaignService } from '@crm/core/campaign'
import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from 'aws-lambda'

export const create: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CampaignService.create(event)
})

export const retrieve: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CampaignService.retrieve(event)
})

export const metrics: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CampaignService.metrics(event)
})

export const updateStatus: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CampaignService.updateStatus(event)
})

export const createResult: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CampaignService.createResult(event)
})

export const deleteCampaign: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CampaignService.deleteCampaign(event)
})
