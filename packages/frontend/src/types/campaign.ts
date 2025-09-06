export interface CampaignType {
  'entityType': 'campaign'
  'updatedAt': number
  'status': 'draft' | 'active' | 'paused' | 'completed'
  'createdAt': number
  'PK': `CAMPAIGN#${string}`
  'name': string
}
