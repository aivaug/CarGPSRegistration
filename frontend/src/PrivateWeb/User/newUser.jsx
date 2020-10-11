import React from 'react';
import { Container, Button, Fa } from 'mdbreact';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '../../PublicWeb/Utils/Form/FormTextField';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
        };
      }
    render() {
        return (
            <MuiThemeProvider>
                <Container>
                    <div className="container text-center text-white card">
                            <form onSubmit={this.props.handleSubmit(this.props.CreateNewUser)}>
                            <h2 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">New user data</h2>
                                <div className="row justify-content-center">
                                    <Field name="Email" component={TextField} label='Email' required type="email" />
                                </div>
                                <div className="text-center mb-4 mt-2">
                                    <Button color="secondary" type='submit'>Submit<Fa icon="paper-plane-o" className="ml-1" /></Button>
                                </div>
                                <div className="text-center">
                                    <Link to="/pr/users">
                                        <Button color="secondary">Cancel <Fa icon="paper-plane-o" className="ml-1" /></Button>
                                    </Link>
                                </div>
                            </form>
                            <h5>Verification email will be sent to user for registration</h5>
                    </div>
                </Container>
            </MuiThemeProvider>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

const mapStateToProps = (store) => {
    return {
        vehicles: store.vehicle
    }
};

NewUser = reduxForm({
    form: 'NewUser',
    enableReinitialize : true,
})(NewUser)

export default connect (mapStateToProps, mapDispatchToProps)(NewUser);