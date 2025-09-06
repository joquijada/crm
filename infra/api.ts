import { crmTable } from './storage'

export const api = new sst.aws.ApiGatewayV2('Api', {
  domain: $app.stage === 'production' ? 'api.exsoinn.com' : undefined
})

// Campaign management
api.route('POST /campaigns', {
  link: [ crmTable ],
  handler: 'packages/functions/src/campaign.create'
})
api.route('GET /campaigns/{id}', { link: [ crmTable ],
  handler: 'packages/functions/src/campaign.retrieve' })
api.route('GET /campaigns', { link: [ crmTable ],
  handler: 'packages/functions/src/campaign.retrieve' })
api.route('GET /campaigns/{id}/performance', { link: [ crmTable ],
  handler: 'packages/functions/src/campaign.metrics' })
api.route('PUT /campaigns/{id}/status', { link: [ crmTable ],
  handler: 'packages/functions/src/campaign.updateStatus' })
api.route('POST /campaigns/{id}/results', { link: [ crmTable ],
  handler: 'packages/functions/src/campaign.createResult' })
api.route('DELETE /campaigns/{id}', { link: [ crmTable ],
  handler: 'packages/functions/src/campaign.deleteCampaign' })

// Lead management
api.route('GET /campaigns/{id}/leads', { link: [ crmTable ],
  handler: 'packages/functions/src/lead.retrieve' })
api.route('POST /leads', { link: [ crmTable ],
  handler: 'packages/functions/src/lead.create' })
api.route('PUT /leads/{id}/score', { link: [ crmTable ],
  handler: 'packages/functions/src/lead.updateScore' })
api.route('GET /leads/qualified', { link: [ crmTable ],
  handler: 'packages/functions/src/lead.retrieveQualified' })

// Company management
api.route('POST /companies', { link: [ crmTable ],
  handler: 'packages/functions/src/company.create' })
api.route('GET /companies', { link: [ crmTable ],
  handler: 'packages/functions/src/company.retrieve' })
api.route('GET /companies/{id}', { link: [ crmTable ],
  handler: 'packages/functions/src/company.retrieve' })
api.route('DELETE /companies/{id}', { link: [ crmTable ],
  handler: 'packages/functions/src/company.deleteCompany' })
api.route('GET /companies/{id}/contacts', { link: [ crmTable ],
  handler: 'packages/functions/src/company.contacts' })

// Activities management
api.route('POST /activities', { link: [ crmTable ],
  handler: 'packages/functions/src/activity.create' })
api.route('GET /activities', { link: [ crmTable ],
  handler: 'packages/functions/src/activity.retrieve' })
api.route('GET /contacts/{id}/activities', { link: [ crmTable ],
  handler: 'packages/functions/src/activity.retrieveForContact' })
api.route('GET /campaigns/{id}/activities', { link: [ crmTable ],
  handler: 'packages/functions/src/activity.retrieveForCampaign' })
