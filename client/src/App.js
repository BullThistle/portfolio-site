import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import SiteHeader from './components/SiteHeader';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => (
  <div className="site-container">
    <Container>
      <BrowserRouter>
        <Grid>
          <Grid.Column width={4}>
            <div className="header-container">
              <SiteHeader />
            </div>
          </Grid.Column>
          <Grid.Column tablet={11} computer={11}>
            <Switch>
              <div className="content-container">
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </div>
            </Switch>
          </Grid.Column>
        </Grid>
      </BrowserRouter>
    </Container>
  </div>
);

export default App;
