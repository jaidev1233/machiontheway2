import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Profile from './components/header/profile/profile';
import Noti from './components/notification/noti';
import Attend from './components/attendance/attend';
import Acc from './components/acc/acc';
import Historic from './components/historic/historic';
import BusMap from './components/map/map';
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="App" id='app'>
      <Header/>
      
         
      
      <div id='sd'>
      <div id='s'>
        <Profile/>
        <br></br>
        <Noti/>
        <br></br>
        <Attend/>
        <br></br>
        <Acc/>
        <br></br>
      </div>
      <div id='w'>
        <BusMap/>
        <br></br>
        <Historic/>
        
      </div>
     </div>
      
    </div>
  );
}

export default App;
