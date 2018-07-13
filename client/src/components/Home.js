import React from 'react';
import { Header, Container, Image, Grid } from 'semantic-ui-react';

const Home = () => (
  <Container>
    <Header style={{ paddingTop: '5px' }}>Home</Header>
    <Grid style={{ marginTop: '75px' }}>
      <Grid.Row>
        <Grid.Column width={10}>
          <p style={{ display: 'inline' }}>
            Driven full stack web developer with a broad technical skill set.
            Seattle native and regular attendee of local meetups and hackathons.
            Currently obsessing over all things React.
          </p>
        </Grid.Column>
        <Grid.Column width={6}>
          <Image src="../../../on-the-water.png" size="small" circular />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Home;
