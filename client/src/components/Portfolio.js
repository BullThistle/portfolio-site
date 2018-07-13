import React from 'react';
import { Container, Header, Grid, List, Image } from 'semantic-ui-react';

const Portfolio = () => (
  <Container style={{ marginBottom: '100px' }}>
    <Header style={{ paddingTop: '5px' }}>Portfolio</Header>
    <List>
      <Grid style={{ marginTop: '74px' }}>
        <Grid.Row>
          <Grid.Column width={16}>
            <List.Item>
              <Header>
                Off the Record -{' '}
                <a href="https://www.offtherecord.com">www.offtherecord.com</a>
              </Header>
              <Image src="../../../off-the-record-referral.png" size="large" />
              <p style={{ marginTop: '10px' }}>
                Off The Record leverages the power of mobile and web technology
                to make fighting your ticket as easy as ordering take-out. Users
                provide a photo of their ticket and answer a few simple
                questions, and the platform intelligently matches them with best
                local traffic lawyer for their case. From there, everything is
                taken care of. Users receive real-time updates on the status of
                their case, and can communicate with their lawyer at any time
                via the app. Once a case is resolved, the user is notified of
                the outcome and advised of any further action.
              </p>
            </List.Item>
          </Grid.Column>
          <Grid.Column width={16}>
            <List.Item style={{ marginTop: '30px' }}>
              <Header>
                Senate Stacks -{' '}
                <a href="http://www.senatestacks.com">www.senatestacks.com</a>
              </Header>
              <Image src="../../../senate-stacks.png" size="large" />
              <p style={{ marginTop: '10px' }}>
                Senate stacks is a web app which allows users to easily find
                campaign finance data for legislators in the United States. I
                use OpenSecrets trusted information and display it in an
                intuitive easy to navigate user interface.
              </p>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </List>
  </Container>
);

export default Portfolio;
