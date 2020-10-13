import React from 'react';
import { MDBDataTable, Button, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';

class Vehicles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal: false,
      deletableId: null,
      dataImportsRun: false,
      importMessage: ''
    };
  }
  componentDidMount() {
    this.props.fetchVehiclesData();
  }
  deleteVehicle(id) {
    this.setState({
      modal: true,
      deletableId: id
    });
  }
  toggle(){
    this.setState({
      modal: false
    });
  }
  deleteVehicleConfirmed(){
      var id = this.state.deletableId;
      this.setState(prevState => ({
        data: [...prevState.data, id], 
        modal: false
      }))
    this.props.deleteVehicleData(id);
  }
  render() {
    return (
      <div className="ListViewCSS">
        {this.state.modal ?
        <MDBContainer >
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} >
            <MDBModalHeader toggle={this.toggle}>Confirm action</MDBModalHeader>
            <MDBModalBody>
              Vehicle data will be permanently deleted.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => this.toggle()}>Cancel</MDBBtn>
              <MDBBtn color="primary" onClick={() =>this.deleteVehicleConfirmed()}>Delete</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        : ''}
        <div className="container d-flex h-100 view card wow text-white">
        <Link to="/pr/vehicleEdit" style={{padding: 10, width: 120}}>
          <Button rounded >New vehicle data</Button>
        </Link>
      {this.props.vehicles &&
          <MDBDataTable style={{width:'100%'}} striped bordered hover data={{
            columns: [
              {
                label: 'Brand',
                field: 'vehicleBrandName',
                sort: 'asc',
              },
              {
                label: 'Model',
                field: 'vehicleModelName',
                sort: 'asc',
              },
              {
                label: 'Manufactured',
                field: 'vehicleYearManufactured',
                sort: 'asc',
              },
              {
                label: 'Locations',
                field: 'locations',
                sort: 'asc',
              },
              {
                field: 'actions',
                width: 5,
              },
            ],
             rows: this.props.vehicles.map(d => ({
              vehicleBrandName: d.brand,
              vehicleModelName: d.model,
              vehicleYearManufactured: d.yearManufactured,
              locations:(
                <React.Fragment>
                <Link to={"/pr/vehicleEdit/" + d.id} style={{color: '#ffff'}}>
                    Show locations data
                </Link> 
              </React.Fragment>
              ),
              actions: (
                <React.Fragment>
                  <Link to={"/pr/vehicleEdit/" + d.id}>
                    <button>
                      <i className="fas fa-edit" />
                    </button>
                  </Link> 
                   <button onClick={() => this.deleteVehicle(d.id)}>
                    <i className="fas fa-trash-alt" />
                  </button>
                </React.Fragment>
              )
            }))
          }} />}
      </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
