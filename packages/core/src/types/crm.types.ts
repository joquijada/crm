export type EntityType = 'campaign' | 'lead' | 'company' | 'activity'

// Template literal types for enforcing PK patterns
type CampaignPK = `CAMPAIGN#${string}`
type LeadPK = `LEAD#${string}`
type CompanyPK = `COMPANY#${string}`
type ActivityPK = `ACTIVITY#${string}`

export interface CampaignMetadata {
  PK: CampaignPK
  SK: 'METADATA'
  entityType: Extract<EntityType, 'campaign'>
  name: string
  status: 'draft' | 'active' | 'paused' | 'completed'
  createdAt: number
  updatedAt: number
}
