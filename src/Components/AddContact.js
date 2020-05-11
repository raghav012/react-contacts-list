import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';


function storeContactInLocalStorage(contact,e) {
    let contacts;
    if(localStorage.getItem('contacts') === null){
      contacts = [];
    } else {
      contacts = JSON.parse(localStorage.getItem('contacts'));
    }
  
    contacts.push(contact);
  
    localStorage.setItem('contacts', JSON.stringify(contacts));
  
  }
class AddContact extends Component {
        state = {
          id:'',
          FirstName: '',
          LastName: '',
          MobileNumber:'',
        };
       
        handleChange = (event) => {
          const input = event.target;
          const value = input.value;
          if(input.name==='FirstName' || input.name==='LastName'){
              if(value.length<0){
                  alert("Name too sort");
              }
          }
          if(input.name==='MobileNumber'){
             if(isNaN(Number(value))){
                alert("only number allow");
             }
          }
          this.setState({ [input.name]: value });
        };
       
        handleFormSubmit = () => {
            if(this.state.FirstName.length===0 ||this.state.LastName.length===0 ||this.state.MobileNumber.length===0 ){
                alert('No data entered');
                return;
            }
            this.setState({
                id: Math.random()
              }); 
              storeContactInLocalStorage(this.state);
            this.props.history.push('/');
            this.props.history.push('/contacts');
          };

        render() {
  return (
     
     
    <div className="container">
       <div className="row row-content">
                   <div className="col-12">
                      <h3>Add contact</h3>
                   </div>
                   <div className="col-12 col-md-12">
    <form onSubmit={this.handleFormSubmit}>
      
    <Row className="form-group">
        <Label md={5}>First Name</Label>
        <Col md={1}>
         <input  name="FirstName" value={this.state.FirstName} onChange={this.handleChange}/>
       </Col>
       </Row>
       <Row className="form-group">
       <Label  md={5}>Last Name </Label>
        <Col md={1}>
        <input name="LastName" value={this.state.LastName} onChange={this.handleChange}/>
        </Col>
        </Row>
     
        <Row className="form-group">
       <Label  md={5}>Mobile Number </Label>
        <Col md={1}>
       <input name="MobileNumber" value={this.state.MobileNumber} onChange={this.handleChange}/>
     </Col></Row>
     <Row className="form-group">
            <Col md={{size:8, offset: 2}}>
                <Button type="submit" color="primary">
                Add Contact
                </Button>
                </Col>
                
        </Row>
    </form>
      </div>
       </div>
       </div>
  );
}
      
};

export default withRouter(AddContact);