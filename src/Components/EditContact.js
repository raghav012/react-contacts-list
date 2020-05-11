import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import {withRouter} from 'react-router-dom' 
function storeContactInLocalStorage(contact,e) {
    let contacts;
    if(localStorage.getItem('contacts') === null){
      contacts = [];
    } else {
      contacts = JSON.parse(localStorage.getItem('contacts'));
    }
  
    contacts.forEach(function(cont, index){
        console.log(cont.id);
        if(parseFloat(contact.id) ===parseFloat(cont.id)){
          contacts.splice(index, 1);
        }
    });

    contacts.push(contact);
  
    localStorage.setItem('contacts', JSON.stringify(contacts));

  
  }
class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.contact.id,
          FirstName:this.props.contact.FirstName,
          LastName: this.props.contact.LastName,
          MobileNumber:this.props.contact.MobileNumber,
          redirectToReferrer: false,
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        
    }
    handleChange = (event) => {
        const input = event.target;
        const value = input.value;
        this.setState({ [input.name]: value });

      };
      componentDidMount(){
          console.log('Hi form is submitted');
      }
     
      handleFormSubmit = () => { 
        this.setState({
            id: this.props.contact.id
          }); 
           storeContactInLocalStorage(this.state);
          console.log(this.state,'hello');
           this.props.history.push('/');
        };

      render() {

        
  return (
   
  
   
    <div className="container">
    <div className="row row-content">
                <div className="col-12">
                   <h3>Edit contact</h3>
                </div>
                <div className="col-12 col-md-12">
 <form onSubmit={this.handleFormSubmit}>
   
 <Row className="form-group">
     <Label htmlFor="firstname" md={5}>First Name</Label>
     <Col md={1}>
      <input name="FirstName" value={this.state.FirstName} onChange={this.handleChange}/>
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
             Edit Contact
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



export default withRouter(EditContact);