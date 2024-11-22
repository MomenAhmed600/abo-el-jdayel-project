import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/customNavbar";
import MainContent from "./components/mainContent";
import CreateAccount from "./pages/CreateAcountPage";
import Footer from "./components/footer";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import MainCoverPage from "./components/MainCoverPage";

function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/Contact-us" element={<ContactPage />} />
          <Route path="/breakfast" element={<MainCoverPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
