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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </List.Item>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </List>
  </Container>
);

export default Portfolio;
