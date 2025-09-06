// Create an S3 bucket
// export const bucket = new sst.aws.Bucket("Uploads");

export const crmTable = new sst.aws.Dynamo('CRM', {
  fields: {
    PK: 'string', // Partition key: CAMPAIGN#123, LEAD#456, COMPANY#789
    SK: 'string', // Sort key: METADATA, LEAD#123, ACTIVITY#456
    GSI1PK: 'string', // For reverse lookups and filtering
    GSI1SK: 'string' // For sorting (dates, names, etc)
    /* entityType: 'string', // campaign, lead, company, activity
    name: 'string',
    email: 'string',
    status: 'string',
    campaignId: 'string',
    companyId: 'string',
    leadId: 'string',
    createdAt: 'number',
    updatedAt: 'number' */
  },
  primaryIndex: { hashKey: 'PK', rangeKey: 'SK' },
  globalIndexes: {
    GSI1: { hashKey: 'GSI1PK', rangeKey: 'GSI1SK' }
  }
})
