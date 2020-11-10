import React, { Component } from 'react';
import {Button, Form,  FormGroup, Label, Input} from 'reactstrap';

import {FacebookLoginButton} from 'react-social-login-buttons';

class App extends Component {
  render () {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">mywebsite</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="email"></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="password"></Input>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">
          Log in
        </Button>
        <div className="text-center pt-3">
          Or continue with your Facebook account
          <FacebookLoginButton className="mt-3 mb-3"/>
          <div className="text-center">
            <a href="/sign-up">Sign up</a>
            <span className="p-2">|</span>
            <a href="/sign-up">Forgot password?</a>
          </div>
        </div>
      </Form>
    );
  }
}

export default App;
