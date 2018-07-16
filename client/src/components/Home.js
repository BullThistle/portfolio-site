import React from 'react';
import { Header, Container, Image, Grid, Responsive } from 'semantic-ui-react';

const Home = () => (
  <Container>
    <Header style={{ paddingTop: '5px' }}>Home</Header>
    <div className="grid-container">
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <p style={{ display: 'inline' }}>
              Driven full stack web developer with a broad technical skill set.
              Seattle native and regular attendee of local meetups and
              hackathons. Currently obsessing over all things React.
            </p>
          </Grid.Column>
          <Responsive minWidth={767}>
            <Grid.Column width={6}>
              <Image src="../../../on-the-water.png" size="small" circular />
            </Grid.Column>
          </Responsive>
        </Grid.Row>
      </Grid>
    </div>
  </Container>
);

export default Home;
