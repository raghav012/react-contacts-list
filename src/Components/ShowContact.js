import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';

let contacts;
if(localStorage.getItem('contacts') === null){
  contacts = [];
} else {
  contacts = JSON.parse(localStorage.getItem('contacts'));
}

function compare_item(a, b){
   
    if(a.FirstName < b.FirstName){
            return -1;
    }else if(a.FirstName > b.FirstName){
            return 1;
    }else{
         if(a.LastName < b.LastName){
                return -1;
        }else if(a.LastName > b.LastName){
                return 1;}
          else{
              return 0;
          }      
        
    }
}

function ShowData(){
   
    if(contacts.length!==0){
        contacts.sort(compare_item);
        return(
       
    <div>{
         
        contacts.map((contact)=>{
            let hexCode= '#'+(Math.random()*0xFFFFFF<<0).toString(16);;
            var divStyle = {
                background: hexCode,
            };
              return(
             <div className="rag">
             <div className="circle" style={divStyle}>{contact.FirstName[0]} </div>
           <div className="detail">  {contact.FirstName} {contact.LastName}
             <div className="number">
             {contact.MobileNumber}
             </div>
             <div className="link">
             <Link to={`/EditContact/${contact.id}`} >EditDetails</Link>
             </div>
             </div>
             </div>
            );
        })
        }
        </div>
      );
    }

    else{
       return(<div>
           <h3>NO CONTACT TO DISPLAY </h3></div>
       
    
    );
}  

}


class Contact extends Component {
    
    componentDidMount(){
        console.log('hello');
         }     render(){
         
         return (
             <div>
            <Link to={'/AddContact'} ><button>ADD Contact</button></Link>
            <hr></hr>
            <br></br>
            <div className="container">
             <ShowData />
             </div>
             </div>
         );
     }

    

   
};

export default withRouter( Contact);