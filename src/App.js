import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './Components/MainComponent';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
class App extends Component {

  render() {
    return (  
      <BrowserRouter history={history}>
        <div className="App">
          <MainComponent />
        </div>
      </BrowserRouter>
    );
  }

  

}
export default App;
