import React from 'react';
import { MDBDataTable, Button, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';

class ApiKeys extends React.Component {
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
    this.props.fetchAPIKeysData();
  }
  deleteKey(id) {
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
  deleteKeyConfirmed(){
      var id = this.state.deletableId;
      this.setState(prevState => ({
        data: [...prevState.data, id], 
        modal: false
      }))
    this.props.deleteAPIKeyData(id);
  }
  render() {
    return (
      <div className="ListViewCSS">
          {this.state.modal ?
          <MDBContainer >
            <MDBModal isOpen={this.state.modal} toggle={this.toggle} >
              <MDBModalHeader toggle={this.toggle}>Confirm action</MDBModalHeader>
              <MDBModalBody>
                API key will be permanently deleted.
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={() => this.toggle()}>Cancel</MDBBtn>
                <MDBBtn color="primary" onClick={() =>this.deleteKeyConfirmed()}>Delete</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
          : ''}
          <div className="container d-flex h-100 view card wow text-white">
          <Link to="/pr/keyEdit" style={{padding: 10, width: 120}}>
            <Button rounded >Create API key</Button>
          </Link>
        {this.props.keys &&
            <MDBDataTable style={{width:'100%'}} striped bordered hover data={{
              columns: [
                {
                  label: 'API key',
                  field: 'APIKey',
                  sort: 'asc',
                },
                {
                  label: 'Valid to',
                  field: 'validTo',
                  sort: 'asc',
                },
                {
                  label: 'Is active',
                  field: 'active',
                  sort: 'asc',
                },
                {
                  field: 'actions',
                  width: 5,
                },
              ],
              rows: this.props.keys.map(d => ({
                  APIKey: d.key,
                  validTo: d.validTo.split('T')[0],
                  active: d.isActive ? "Yes" : "No",
                  actions: (
                      <React.Fragment>
                          <Link to={"/pr/keyEdit/" + d.id}>
                              <button>
                              <i className="fas fa-edit" />
                              </button>
                          </Link> 
                          <button onClick={() => this.deleteKey(d.id)}>
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
    keys: store.key
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiKeys);
