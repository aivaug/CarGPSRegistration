import React from 'react';
import { MDBDataTable, Button, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';

class Users extends React.Component {
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
    this.props.fetchUsersData();
  }
  deleteUser(id) {
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
  deleteUserConfirmed(){
      var id = this.state.deletableId;
      this.setState(prevState => ({
        data: [...prevState.data, id], 
        modal: false
      }))
    this.props.deleteUserData(id);
  }
  render() {
    return (
      <div className="ListViewCSS">
        {this.state.modal ?
        <MDBContainer >
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} >
            <MDBModalHeader toggle={this.toggle}>Confirm action</MDBModalHeader>
            <MDBModalBody>
              User data will be permanently deleted.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => this.toggle()}>Cancel</MDBBtn>
              <MDBBtn color="primary" onClick={() =>this.deleteUserConfirmed()}>Delete</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        : ''}
        <div className="container d-flex h-100 view card wow text-white">
        <Link to="/pr/newUser" style={{padding: 10, width: 120}}>
          <Button rounded >Create user</Button>
        </Link>
      {this.props.users &&
          <MDBDataTable style={{width:'100%'}} striped bordered hover data={{
            columns: [
              {
                label: 'First name',
                field: 'firtName',
                sort: 'asc',
              },
              {
                label: 'Last name',
                field: 'lastName',
                sort: 'asc',
              },
              {
                label: 'Email',
                field: 'email',
                sort: 'asc',
              },
              {
                label: 'Is active',
                field: 'isActive',
                sort: 'asc',
              },
              {
                field: 'actions',
                width: 5,
              },
            ],
             rows: this.props.users.map(d => ({
              firtName: d.firstName,
              lastName: d.lastName,
              email: d.email,
              isActive: d.isActive ? "Yes" : "No",
              actions: (
                <React.Fragment>
                   <button onClick={() => this.deleteUser(d.id)}>
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
    users: store.user
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
