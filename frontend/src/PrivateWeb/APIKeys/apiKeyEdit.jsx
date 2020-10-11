import React from 'react';
import { Container, Button, Fa } from 'mdbreact';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import TextField from '../../PublicWeb/Utils/Form/FormTextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {api} from '../../Utils/api';

class ApiKeyEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
        };
      }
      componentDidMount() {
        if(typeof this.props.location.pathname.split('/')[3] !== 'undefined'){
            api.get('api/apikey/'+this.props.location.pathname.split('/')[3] ,  {
                headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
              })
                .then(response => {
                    var data = response.data;
                    this.props.change('APIKey', data.key);
                    this.props.change('ValidTo', data.validTo.split('T')[0]);
                })
                .catch(function () {
                  // add logic for handling errors in the future
                });
        } else {
            this.props.change('APIKey', ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & (15 >> c / 4)).toString(16)));
            this.props.change('ValidTo', new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]);
        }
        
    }

    render() {
        return (
            <MuiThemeProvider>
                <Container>
                    <div className="container text-center text-white card">
                            <form onSubmit={this.props.handleSubmit(this.props.HandleAPIKeyData)}>
                            <h2 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">API key data</h2>
                            {typeof this.props.location.pathname.split('/')[3] !== 'undefined' ? '' : <p>Auto generated data</p>}
                                <div className="row justify-content-center">
                                    <Field name="APIKey" component={TextField} label='API key' required type="text" />
                                </div>
                                <div className="row justify-content-center">
                                    <Field name="ValidTo" component={TextField} label='Valid to' required type="date" />
                                </div>
                                <div className="text-center mb-4 mt-2">
                                    <Button color="secondary" type='submit'>{typeof this.props.location.pathname.split('/')[3] !== 'undefined' ? 'Update' : 'Submit'} <Fa icon="paper-plane-o" className="ml-1" /></Button>
                                </div>

                                <div className="text-center">
                                    <Link to="/pr/keys">
                                        <Button color="secondary">Cancel <Fa icon="paper-plane-o" className="ml-1" /></Button>
                                    </Link>
                                </div>
                            </form>
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

ApiKeyEdit = reduxForm({
    form: 'APIKey',
    enableReinitialize : true,
})(ApiKeyEdit)

export default connect (mapStateToProps, mapDispatchToProps)(ApiKeyEdit);