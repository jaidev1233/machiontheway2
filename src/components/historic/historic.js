import React from 'react'
import "./historic.css"

const Historic = () => {
  return (
    <center>
  <div id="trip-card">
  <h2>Trip History</h2>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Trip</th>
        <th>Boarded</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-08-13</td>
        <td>Pickup</td>
        <td>Yes</td>
        <td>—</td>
      </tr>
      <tr>
        <td>2025-08-13</td>
        <td>Drop</td>
        <td>Yes</td>
        <td>—</td>
      </tr>
      <tr>
        <td>2025-08-12</td>
        <td>Pickup</td>
        <td>No</td>
        <td><span class="highlight">Sick</span></td>
      </tr>
    </tbody>
  </table>
</div>
</center>
  )
}

export default Historic
