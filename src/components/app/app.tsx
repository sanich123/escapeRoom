import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { appTheme } from './common';
import * as S from './app.styled';

import DetailedQuest from '../detailed-quest/detailed-quest';
import Home from '../home/home';
import Contacts from '../contacts/contacts';
export default function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/detailed-quest/:id">
            <DetailedQuest />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

