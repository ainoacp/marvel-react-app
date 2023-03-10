import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Context } from "./context/Context";
import { useTranslation } from 'react-i18next';
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import ComicsPage from './pages/ComicsPage/ComicsPage';
import ComicPage from './pages/ComicPage/ComicPage';
import SeriesPage from './pages/SeriesPage/SeriesPage';
import SeriePage from './pages/SeriePage/SeriePage';

function App() {

  const {t, i18n} = useTranslation(['translation'])
  
  const translate = (code) => {
    i18n.changeLanguage(code);
  }

  return (
    <Context.Provider value={{t, translate}}>
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='marvel'>
              <Route path='home' element={<HomePage />} />
              <Route path='characters'>
                <Route index element={<CharactersPage />} />
                <Route path=':id'>
                  <Route index element={<CharacterPage />} />
                </Route>
              </Route>
              <Route path='comics'>
                <Route index element={<ComicsPage />} />
                <Route path=':id'>
                    <Route index element={<ComicPage />} />
                </Route>
              </Route>
              <Route path='series'>
                <Route index element={<SeriesPage />} />
                <Route path=':id'>
                    <Route index element={<SeriePage />} />
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
