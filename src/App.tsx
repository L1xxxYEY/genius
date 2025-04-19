import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route element={<RegistrationPage />} path="/registrationPage" />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route element={<LoginPage />} path="/" />
              <Route element={<MainPage />} path="/mainPage" />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
