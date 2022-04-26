import { ThemeProvider } from 'styled-components';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { appTheme } from './common';
import { GlobalStyle }from './app.styled';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Home from '../home/home';
import Contacts from '../contacts/contacts';
import Page404 from '../page404/not-found-page';
import { appRoutes } from '../../utils/const';

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={`${appRoutes.quest}/:id`} component={() => <DetailedQuest />} />
          <Route exact path={appRoutes.contacts} component={() => <Contacts />} />
          <Route exact path={appRoutes.main} component={() => <Home />} />
          <Page404/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

