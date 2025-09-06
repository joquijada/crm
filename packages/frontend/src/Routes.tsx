import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home.tsx";
import NotFound from "./containers/NotFound.tsx";
import NewCampaign from "./containers/NewCampaign.tsx";
import Campaign from "./containers/Campaign.tsx";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaigns/new" element={<NewCampaign />} />
      <Route path="/campaigns/:id" element={<Campaign />} />
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}
