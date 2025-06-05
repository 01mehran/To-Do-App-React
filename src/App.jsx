import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { LoginPage } from "./Pages/Loginpage";
import { SignUpPage } from "./Pages/SignUpPage";
import { Home } from "./Pages/Home";
import { UpcomingPage } from "./Pages/UpcomingPage";
import { TodayPage } from "./Pages/TodayPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignUpPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upCommingPage" element={<UpcomingPage />} />
        <Route path="todayPage" element={<TodayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
