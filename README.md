# CRM Application

A simple Customer Relationship Management (CRM) application built for campaign management and lead tracking. This project demonstrates modern serverless architecture using AWS services with Node.js Lambda functions and React frontend.

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│                 │    │                  │    │                 │
│   React App     │    │  API Gateway     │    │   Lambda        │
│   (Frontend)    │◄──►│  (REST API)      │◄──►│   Functions     │
│                 │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                          │
                                                          ▼
                                                ┌─────────────────┐
                                                │                 │
                                                │   DynamoDB      │
                                                │   (Single       │
                                                │    Table)       │
                                                │                 │
                                                └─────────────────┘
```

## 🚀 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with AWS Lambda
- **Database**: AWS DynamoDB (Single Table Design)
- **Infrastructure**: SST (Serverless Stack Toolkit)
- **API**: REST API with API Gateway
- **Language**: TypeScript

## 📊 Data Model

This CRM uses a **single table design** in DynamoDB to efficiently store and query related entities:

### Entities
- **Campaigns**: Marketing campaigns with status tracking
- **Leads**: Potential customers generated from campaigns
- **Companies**: Customer organizations
- **Activities**: Interactions and touchpoints

### Key Structure
- **PK (Partition Key)**: `CAMPAIGN#123`, `LEAD#456`, `COMPANY#789`
- **SK (Sort Key)**: `METADATA`, `LEAD#123`, `ACTIVITY#456`
- **GSI1**: For reverse lookups and filtering

## 🔌 API Endpoints

### Campaigns
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/campaigns` | List all campaigns |
| `POST` | `/campaigns` | Create new campaign |
| `GET` | `/campaigns/{id}` | Get campaign details |
| `PUT` | `/campaigns/{id}` | Update campaign |
| `DELETE` | `/campaigns/{id}` | Delete campaign |
| `GET` | `/campaigns/{id}/leads` | Get leads for campaign |
| `GET` | `/campaigns/{id}/performance` | Get campaign metrics |

### Leads
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/leads` | List all leads |
| `POST` | `/leads` | Create new lead |
| `GET` | `/leads/{id}` | Get lead details |
| `PUT` | `/leads/{id}` | Update lead |
| `DELETE` | `/leads/{id}` | Delete lead |
| `PUT` | `/leads/{id}/score` | Update lead score |
| `GET` | `/leads/qualified` | Get qualified leads |

### Companies
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/companies` | List all companies |
| `POST` | `/companies` | Create new company |
| `GET` | `/companies/{id}` | Get company details |
| `PUT` | `/companies/{id}` | Update company |
| `DELETE` | `/companies/{id}` | Delete company |
| `GET` | `/companies/{id}/contacts` | Get company contacts |

### Activities
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/activities` | List activities |
| `POST` | `/activities` | Log new activity |
| `GET` | `/contacts/{id}/activities` | Get activities for contact |
| `GET` | `/campaigns/{id}/activities` | Get campaign activities |

### Dashboard
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/dashboard/metrics` | Get overall CRM metrics |
| `GET` | `/dashboard/active-campaigns` | Monitor active campaigns |

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- AWS CLI configured
- AWS Account with appropriate permissions

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

This will:
- Deploy AWS infrastructure (DynamoDB, Lambda, API Gateway)
- Start local development environment
- Enable hot reloading for both backend and frontend

### Project Structure
```
crm/
├── packages/
│   ├── core/           # Shared types and utilities
│   ├── functions/      # Lambda function handlers
│   └── scripts/        # Utility scripts
├── infra/              # Infrastructure definitions
├── sst.config.ts       # SST configuration
└── README.md
```

## 🚢 Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npx sst deploy --stage production
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run linting
npm run lint
```

## 📈 Key Features

### Campaign Management
- Create and manage marketing campaigns
- Track campaign performance and metrics
- Monitor lead generation by campaign
- Status management (draft, active, paused, completed)

### Lead Tracking
- Capture leads from various sources
- Lead scoring and qualification
- Lead-to-customer conversion tracking
- Activity timeline per lead

### Single Table Design Benefits
- **Performance**: Related data retrieved in single queries
- **Cost-effective**: Reduced DynamoDB costs
- **Scalability**: Handles growing data efficiently
- **Atomic transactions**: Update related entities together

## 🏢 Business Context

This CRM is designed for teams preparing for campaign launches and managing post-launch operations. It focuses on:

- **Pre-launch**: Campaign setup and planning
- **Launch**: Lead capture and initial processing  
- **Post-launch**: Performance monitoring and lead nurturing
- **Analysis**: Campaign ROI and conversion tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.