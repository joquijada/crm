import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "aws-amplify";
import { onError } from "../lib/errorLib";
import './Campaign.css'
import BootstrapTable from 'react-bootstrap-table-next'
import type { CampaignType } from "../types/campaign.ts";
import Button from "react-bootstrap/Button";

export default function Campaign() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState<CampaignType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    function loadCampaign() {
      return API.get("crm", `/campaigns/${encodeURIComponent(id!)}`, {});
    }

    async function onLoad() {
      try {
        const loaded = await loadCampaign();
        setCampaign(loaded.campaigns[0]);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [id, isLoading]);

  function formatDate(time: number) {
    return new Date(time).toLocaleString();
  }

  async function handleUpdateCampaignStatus(event: React.MouseEvent) {
    try {
      event.preventDefault()
      await API.put('crm', `/campaigns/${encodeURIComponent(id!)}/status`, {
        body: {
          status: 'unknown',
        }
      })
    } catch (e) {
      onError(e);
    }
  }

  async function handleDeleteCampaign(event: React.MouseEvent) {
    try {
      event.preventDefault()
      await API.del('crm', `/campaigns/${encodeURIComponent(id!)}`, {})
    } catch (e) {
      onError(e);
    }
  }

  async function handleCreateCampaignLead(event: React.MouseEvent) {
    try {
      event.preventDefault()
      await API.post('crm', `/leads`, {})
    } catch (e) {
      onError(e);
    }
  }


  const info = [
    {
      field: 'Campaign ID',
      value: (campaign && campaign.PK) || 'Error'
    },
    {
      field: 'Campaign Name',
      value: (campaign && campaign.name) || 'Error'
    },
    {
      field: 'Created At',
      value: (campaign && formatDate(campaign.createdAt)) || 'Error'
    },
    {
      field: 'Updated At',
      value: (campaign && formatDate(campaign.updatedAt)) || 'Error'
    },
    {
      field: 'Status',
      value: (campaign && campaign.status) || 'Error'
    },
    {
      field: 'Conversion Rate',
      value: '.9999'
    },
    {
      field: 'Leads Generated',
      value: '9999'
    }
  ]

  const columns = [{
    dataField: 'field',
    text: 'Field'
  }, {
    dataField: 'value',
    text: 'Value'
  }]

  return (
    <div className="Campaign">
      {!isLoading && <>
        <Button id="back-btn" size="sm"
                onClick={() => nav('/')}>{'< Back'}</Button>
        <BootstrapTable keyField="field"
                        data={info}
                        columns={columns}/>
        <Button id="update-campaign-status-btn" size="sm" className="btn-space"
                onClick={(event) => handleUpdateCampaignStatus(event)}>{'Update Status'}</Button>
        <Button id="delete-campaign-btn" size="sm" variant="danger" className="btn-space"
                onClick={(event) => handleDeleteCampaign(event)}>{'Delete'}</Button>
        <Button id="create-campaign-lead-btn" size="sm" variant="success" className="btn-space"
                onClick={(event) => handleCreateCampaignLead(event)}>{'Create Lead'}</Button>
      </>}
    </div>
  );
}
