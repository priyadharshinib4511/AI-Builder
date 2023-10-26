import logo from './logo.svg';
import './App.css';
import Sidebar from './pages/Topbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ApplicationAutomation from './pages/ApplicationAutomation';
import SupportAutomation from './pages/SupportAutomation';
import DevopsAutomation from './pages/DevopsAutomation';
import TestingAutomation from './pages/TestingAutomation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<SupportAutomation />} />
          <Route path="application-automation" element={<ApplicationAutomation />} />
          <Route path="support-automation" element={<SupportAutomation />} />
          <Route path="devops-automation" element={<DevopsAutomation />} />
          <Route path="testing-automation" element={<TestingAutomation />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
