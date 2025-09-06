import ListGroup from "react-bootstrap/ListGroup";
// import { useAppContext } from "../lib/contextLib";
import "./Home.css";
import { API } from "aws-amplify";
import { onError } from "../lib/errorLib";
import { useState, useEffect } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";
import type { CampaignType } from "../types/campaign.ts";

export default function Home() {
  const [campaigns, setCampaigns] = useState<Array<CampaignType>>([]);
  // const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      try {
        const campaigns = await loadCampaigns();
        setCampaigns(campaigns.campaigns);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    }

    onLoad();
  }, [isLoading]);

  function loadCampaigns() {
    return API.get("crm", "/campaigns", {});
  }

  function formatDate(time: number) {
    return new Date(time).toLocaleString();
  }

  function renderCampaignList(campaigns: CampaignType[]) {
    return (
      <>
        <LinkContainer to="/campaigns/new">
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <BsPencilSquare size={17}/>
            <span className="ms-2 fw-bold">Create a new campaign</span>
          </ListGroup.Item>
        </LinkContainer>
        {campaigns.map(({ PK: campaignId, name, createdAt }) => (
          <LinkContainer key={campaignId} to={`/campaigns/${encodeURIComponent(campaignId)}`}>
            <ListGroup.Item action className="text-nowrap text-truncate">
              <span className="fw-bold">{name}</span>
              <br/>
              <span className="text-muted">
              Created: {formatDate(createdAt)}
            </span>
            </ListGroup.Item>
          </LinkContainer>
        ))}
      </>
    );
  }

  /*function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
      </div>
    );
  }*/

  function renderCampaigns() {
    return (
      <div className="notes">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Your Campaigns</h2>
        <ListGroup>{!isLoading && renderCampaignList(campaigns)}</ListGroup>
      </div>
    );
  }

  return (
    <div className="Home">
      {renderCampaigns()}
    </div>
  );
}
