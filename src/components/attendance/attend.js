import React from 'react'
import "./attend.css";

const Attend = () => {
    return (<center>
        <div id='att'>
            <h4 >Student Profile</h4>\
            <br></br>
            <table id="profile-table">
                <tr>
                    <td>
                        <h4 class="value">Date</h4>
                        <p class="label">2025-08-22</p>
                        <p class="label">2025‑08‑14</p>
                        <p class="label">2025‑08‑14</p>
                        
                    </td>
                    <td>
                        <h4 class="value">Trip</h4>
                        <p class="label">Pickup</p>
                        <p class="label">Pickup</p>
                        <p class="label">Drop</p>
                        
                        
                    </td>
                    <td>
                        <h4 class="value">Status</h4>
                        <p class="label">Boarded</p>
                        <p class="label">Boarded</p>
                        <p class="label">Boarded</p>
                        
                        
                    </td>
                </tr>
                <br></br>
            </table>
<br></br>
        </div></center>
    )
}

export default Attend
