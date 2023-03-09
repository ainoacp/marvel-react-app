import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Context } from "./context/Context";
import { useTranslation } from 'react-i18next';
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';

function App() {

  const {t,i18n} = useTranslation(['translation'])
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  }

  return (
    <Context.Provider value={{t,changeLanguage}}>
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='marvel'>
              <Route path='home'>
                <Route index element={<HomePage />} />
                <Route path='characters'>
                  <Route index element={<CharactersPage />} />
                  <Route path=':name'>
                    <Route index element={<CharacterPage />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </Context.Provider>
    
  );
}

export default App;
