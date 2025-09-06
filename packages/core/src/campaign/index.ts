import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { dynamoDbClient, HttpResponse } from '@exsoinn/aws-sdk-wrappers'
import { CampaignMetadata } from '../types/crm.types'
import { Resource } from 'sst'
import { v4 as uuidGenerator } from 'uuid'
import { DocumentClient } from 'aws-sdk/lib/dynamodb/document_client'

const parseCampaign = async (event: APIGatewayProxyEventV2): Promise<CampaignMetadata | undefined> => {
  const campaign = event.body
  if (!campaign) {
    return undefined
  }
  const campaignObj = JSON.parse(campaign)
  if (!campaignObj.name) {
    return undefined
  }
  const now = Date.now()
  return {
    PK: `CAMPAIGN#${uuidGenerator()}`,
    SK: 'METADATA',
    entityType: 'campaign',
    name: campaignObj.name,
    status: 'draft',
    createdAt: now,
    updatedAt: now
  }
}
export module CampaignService {
  export async function create(event: APIGatewayProxyEventV2) {
    try {
      const campaign: CampaignMetadata | undefined = await parseCampaign(event)
      if (campaign) {
        await dynamoDbClient.put({
          TableName: Resource.CRM.name,
          Item: campaign
        })

        return new HttpResponse(200, 'Campaign XYZ successfully created', {
          body: campaign
        })
      } else {
        return new HttpResponse(400, 'Request is either empty or invalid')
      }
    } catch (e) {
      return new HttpResponse(500, `Something went wrong, ${e}`)
    }
  }

  export async function retrieve(event: APIGatewayProxyEventV2) {
    try {
      const campaignId = (event.pathParameters && event.pathParameters.id) as string
      let res: DocumentClient.ItemList = []
      if (campaignId) {
        const item = (await dynamoDbClient.get({
          TableName: Resource.CRM.name,
          Key: { PK: campaignId, SK: 'METADATA' }
        })).Item
        if (item) {
          res.push(item)
        }
      } else {
        const items = (await dynamoDbClient.scan({
          TableName: Resource.CRM.name,
          FilterExpression: 'begins_with(#pk, :prefix) AND #sk = :metadata',
          ExpressionAttributeNames: { '#pk': 'PK', '#sk': 'SK' },
          ExpressionAttributeValues: { ':prefix': 'CAMPAIGN#', ':metadata': 'METADATA' }
        })).Items
        if (items && items.length > 0) {
          res = items
        }
      }

      if ((!res || res.length < 1) && campaignId) {
        return new HttpResponse(404, `Campaign ${campaignId} not found.`)
      } else if (!res || res.length < 1) {
        return new HttpResponse(200, 'No campaigns were found, have you created any yet?')
      } else {
        return new HttpResponse(200, '', { campaigns: res })
      }
    } catch (e) {
      return new HttpResponse(500, `Something went wrong, ${e}`)
    }
  }

  export function metrics(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Campaign metrics operation not yet implemented')
  }

  export function updateStatus(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Campaign update status operation not yet implemented')
  }

  export function createResult(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Campaign create result operation not yet implemented')
  }

  export function deleteCampaign(event: APIGatewayProxyEventV2) {
    return new HttpResponse(501, 'Campaign delete operation not yet implemented')
  }
}
