import React from 'react';
import { Container, Button, Fa } from 'mdbreact';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {api} from '../../Utils/api';
import TextField from '../../PublicWeb/Utils/Form/FormTextField';

class VehicleEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
        };
      }
    componentDidMount() {
        if(typeof this.props.location.pathname.split('/')[3] !== 'undefined'){
            api.get('api/vehicle/'+this.props.location.pathname.split('/')[3] ,  {
                headers: { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
              })
                .then(response => {
                    var data = response.data;
                    this.props.change('Brand', data.brand);
                    this.props.change('Model', data.model);
                    this.props.change('YearManufactured', data.yearManufactured);
                })
                .catch(function () {
                  // add logic for handling errors in the future
                });
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <Container>
                    <div className="container text-center text-white card" style={{paddingTop: 10}}>
                            <form onSubmit={this.props.handleSubmit(this.props.HandleVehicleData)}>
                            <h2 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Vehicle data</h2>
                                <div className="row justify-content-center">
                                    <Field name="Brand" component={TextField} label='Brand' required type="text" />
                                </div>
                                <div className="row justify-content-center">
                                    <Field name="Model" component={TextField} label='Model' required type="text" />
                                </div>
                                <div className="row justify-content-center">
                                    <Field name="YearManufactured" component={TextField} label='Manufactured year' type="number" />
                                </div>
                                <div className="text-center mb-4 mt-2">
                                    <Button color="secondary" type='submit'>{typeof this.props.location.pathname.split('/')[3] !== 'undefined' ? 'Update' : 'Submit'} <Fa icon="paper-plane-o" className="ml-1" /></Button>
                                </div>
                                <div className="text-center">
                                    <Link to="/pr/vehicles">
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

VehicleEdit = reduxForm({
    form: 'VehicleEdit',
    enableReinitialize : true,
})(VehicleEdit)

export default connect (mapStateToProps, mapDispatchToProps)(VehicleEdit);