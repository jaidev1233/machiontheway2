import React from 'react'
import './profiel.css'

const Profile = () => {
  return (
    <center>
 <div id="profile">
  <h4 >Student Profile</h4>
  <table class="profile-table">
    <tr>
      <td>
        <p class="label">Name</p>
        <h4 class="value">Yusaf</h4>
        <p class="label">Route</p>
        <h4 class="value">R-07</h4>
      </td>
      <td>
        <p class="label">Class</p>
        <h4 class="value">VI-B</h4>
        <p class="label">Stop</p>
        <h4 class="value">2</h4>
      </td>
    </tr>
  </table>
</div>
</center>
  )
}

export default Profile
