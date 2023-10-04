import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import CampaignView from "./views/CampaignView";
import "./assets/css/style.scss";
import BadGateView from "./views/BadGateView";
import LoginView from "./views/LoginView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/campaign" element={<CampaignView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/badgate" element={<BadGateView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
