import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { LoginPage } from "./Pages/Loginpage";
import { SignUpPage } from "./Pages/SignUpPage";
import { Home } from "./Pages/Home";
import { UpcomingPage } from "./Pages/UpcomingPage";
import { TodayPage } from "./Pages/TodayPage";
import { Calendarpage } from "./Pages/Calendarpage";
import { NotFoundPage } from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignUpPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upComingPage" element={<UpcomingPage />} />
        <Route path="/todayPage" element={<TodayPage />} />
        <Route path="/calendarPage" element={<Calendarpage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
