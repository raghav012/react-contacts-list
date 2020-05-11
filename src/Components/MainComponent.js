import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ShowContact';
import AddContact from './AddContact';
import EditContact from './EditContact';


let contacts;
if(localStorage.getItem('contacts') === null){
  contacts = [];
} else {
  contacts = JSON.parse(localStorage.getItem('contacts'));
}



class Main extends Component {

  
    render() {
    const ContactWithId = ({match}) => {
        const contaxt=contacts.filter((contact) => parseFloat(contact.id) === parseFloat(match.params.contactId,10))[0]
        console.log(contaxt);
        return(
          <EditContact contact={contaxt}  />
        );
      };


    return (
      <div>
       
        
              <Switch location={this.props.location}>
                  {/* <IndexRoute component={Contact} /> */}
                  <Route path='/contacts' component={Contact} />
                  <Route exact path='/AddContact' component={AddContact} />
                  <Route exact path='/EditContact/:contactId' component={ContactWithId} />
                  <Redirect to="/contacts" />
              </Switch>
          
      
      </div>
    );
  }
}
export default (Main);