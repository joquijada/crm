import { CompanyService } from '@crm/core/company'
import { lambdaWrapper } from '@exsoinn/aws-sdk-wrappers'
import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from 'aws-lambda'

export const create: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CompanyService.create(event)
})

export const retrieve: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CompanyService.retrieve(event)
})

export const update: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CompanyService.update(event)
})

export const deleteCompany: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CompanyService.deleteCompany(event)
})

export const contacts: APIGatewayProxyHandlerV2 = lambdaWrapper(async (event: APIGatewayProxyEventV2) => {
  return CompanyService.contacts(event)
})
