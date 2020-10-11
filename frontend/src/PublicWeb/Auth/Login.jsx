import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import { RenderIf } from '../Utils/RenderIf';
import Form, { Section, Input, Password, SubmitButton } from '../Utils/Form';

const Login = ({ LoginPress, error }) => (
  <div style={{paddingTop: '70px'}}>
     <RenderIf isTrue={error.messageSource === 'login'}>
       <div style={{paddingBottom: '20px'}}>
          <div className="container card text-white" style={{width: '420px'}} role="alert">
            <header style={{margin: 'auto'}}>
            {error.messageText}
            </header>
          </div>
        </div>
      </RenderIf>
  <div style={{width:'420px'}} className="container card text-white">
    <Form submit={LoginPress}>
      <Section title="Sign in">
        <Input name="email" label='Email' />
        <Password name="password" label='Password' />
        <SubmitButton><b>Sign in</b></SubmitButton>
      </Section>
    </Form>
  </div>
  </div>
);

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
const mapStateToProps = (store) => ({
  error: store.auth.error,
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);