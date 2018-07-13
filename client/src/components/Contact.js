import React from 'react';
import axios from 'axios';
import {
  Container,
  Header,
  Grid,
  Input,
  TextArea,
  Form,
  Button,
  Icon,
  Message,
} from 'semantic-ui-react';
import './Contact.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = { loading: false, emailSuccess: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST',
      url: '/send',
      data: {
        email,
        message,
      },
    }).then((response) => {
      if (response.data.msg === 'success') {
        this.setState({ loading: false });
        this.resetForm();
        this.setState({ emailSuccess: true });
      } else if (response.data.msg === 'fail') {
        this.setState({ loading: false });
      }
    });
  }

  /* eslint-disable class-methods-use-this */
  resetForm() {
    document.getElementById('contact-form').reset();
  }

  button() {
    if (this.state.loading === true) {
      return (
        <Button
          loading
          type="submit"
          icon
          floated="right"
          labelPosition="right"
          style={{ marginTop: '10px', width: '109px' }}
        >
          Loading
        </Button>
      );
    }
    return (
      <Button
        type="submit"
        icon
        floated="right"
        labelPosition="right"
        style={{ marginTop: '10px' }}
      >
        Send
        <Icon name="send" />
      </Button>
    );
  }

  /* eslint-disable consistent-return */
  message() {
    if (this.state.emailSuccess === true) {
      return (
        <Message
          positive
          onDismiss={this.handleDismiss}
          style={{ float: 'left', marginTop: '10px', width: '300px' }}
          header="Email successfully sent!"
          content="I'll be sure to get back to you with haste."
        />
      );
    }
  }

  handleDismiss = () => {
    this.setState({ emailSuccess: false });
  };

  render() {
    return (
      <Container>
        <Header style={{ paddingTop: '5px' }}>Contact</Header>
        <Grid style={{ marginTop: '75px' }}>
          <Grid.Row>
            <Form
              id="contact-form"
              onSubmit={this.handleSubmit}
              method="POST"
              style={{ width: '100%' }}
            >
              <Grid.Column width={16}>
                <Input id="email" fluid placeholder="Your Email" />
              </Grid.Column>
              <Grid.Column width={16}>
                <TextArea
                  id="message"
                  autoHeight
                  placeholder="Message"
                  style={{ marginTop: '10px' }}
                />
              </Grid.Column>
              <Grid.Column width={16}>
                {this.message()}
                {this.button()}
              </Grid.Column>
            </Form>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Contact;
