import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CampaignView from "./views/CampaignView";
import "./assets/css/style.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/campaign" element={<CampaignView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
