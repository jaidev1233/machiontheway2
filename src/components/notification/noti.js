import React from 'react'
import "./noti.css";

const Noti = () => {
  return ( <center>
    <div id='not'>
        <h4>Notifications</h4>
        <br></br>
        <div id='trip'>
             <p id='s'>Trip</p>
            <h4>Pickup trip ended</h4>
        </div>
        
        <div id='trip' className='a'>
             <p id='s' >Arrival</p>
            <h4>Bus is arriving at your stop now.</h4>
        </div>

       <div id='trip' className='b'>
             <p id='s1'>Trip</p>
            <h4>Pickup trip started.</h4>
        </div>

<div id='trip' class='c'>
             <p id='s'>Arrival</p>
            <h4>Bus approaching Stop 2. ETA 5 min.</h4>
        </div>
         <div id='trip' className='b'>
             <p id='s1'>Trip</p>
            <h4>Pickup trip started.</h4>
        </div>

<div id='trip' className='d'>
             <p id='s3'>Delay</p>
            <h4>Traffic on NH44, ETA +10 min.</h4>
        </div>


      
    </div></center>
  )
}

export default Noti
