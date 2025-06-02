import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { LoginPage } from "./Pages/Loginpage";
import { SignUpPage } from "./Pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
