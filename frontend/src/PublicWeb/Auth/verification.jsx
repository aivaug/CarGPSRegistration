import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import { RenderIf } from '../Utils/RenderIf';
import Form, { Section, Password, SubmitButton } from '../Utils/Form';

const Verification = ({ Verification, error }) => (
  <div style={{paddingTop: '70px'}}>
     <RenderIf isTrue={error.messageSource === 'verify'}>
       <div style={{paddingBottom: '20px'}}>
          <div className="container card text-white" style={{width: '420px'}} role="alert">
            <header style={{margin: 'auto'}}>
            {error.messageText}
            </header>
          </div>
        </div>
      </RenderIf>
  <div style={{width:'420px', textAlign: 'center', padding: 10}} className="container card text-white">
    <Form submit={Verification}>
      <Section title="Verification, create password">
        <Password name="password" label='Password' />
        <Password name="passwordToMatch" label='Confirm password' />
        <SubmitButton><b>Submit verification</b></SubmitButton>
      </Section>
    </Form>
  </div>
  </div>
);

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
const mapStateToProps = (store) => ({
  error: store.auth.error,
});


export default connect(mapStateToProps, mapDispatchToProps)(Verification);