import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Header, List, Icon } from 'semantic-ui-react';

export default class SiteHeader extends Component {
  state = { activeItem: 'Home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Header
          style={{ display: 'block', fontWeight: '300', fontSize: '23px' }}
        >
          Rafael Furry
        </Header>
        <List horizontal>
          <List.Item>
            <a
              href="https://www.linkedin.com/in/rafaelfurry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                fitted
                size="big"
                name="linkedin"
                style={{ color: '#007AB6' }}
              />
            </a>
          </List.Item>
          <List.Item>
            <a
              href="https://github.com/BullThistle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon fitted size="big" name="github" color="black" />
            </a>
          </List.Item>
        </List>
        <Menu fluid vertical tabular style={{ marginTop: '40px' }}>
          <Menu.Item
            as={NavLink}
            exact
            to="/"
            name="Home"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/portfolio"
            name="Portfolio"
            active={activeItem === 'Portfolio'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/contact"
            name="Contact"
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Container>
    );
  }
}
