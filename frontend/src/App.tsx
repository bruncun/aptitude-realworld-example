import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "stores/Auth";
import { AuthPage } from "components/AuthPage/AuthPage.container";
import { SettingsPage } from "components/SettingsPage/SettingsPage.component";

const auth = new Auth();

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage auth={auth} />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
