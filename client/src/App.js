import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import SiteHeader from './components/SiteHeader';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

const App = () => (
  <Container className="site-container" style={{ width: '80%' }}>
    <BrowserRouter>
      <Grid>
        <Grid.Column width={4}>
          <SiteHeader />
        </Grid.Column>
        <Grid.Column width={11}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Grid.Column>
      </Grid>
    </BrowserRouter>
  </Container>
);

export default App;
