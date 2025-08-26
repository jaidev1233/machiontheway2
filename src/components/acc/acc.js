import React from 'react'
import "./acc.css"

const Acc = () => {
    return ( <center>
        <div id='form'>
            <h2>Account</h2>

            <form>
                <h3>Change Password</h3>
                <label for="newpass">New Password</label>
                <input type="password" id="newpass" placeholder="Enter new password" />

                <label for="confirmpass">Confirm Password</label>
                <input type="password" id="confirmpass" placeholder="Confirm new password" />
<h>d</h>
                <button type="submit" class="btn">Update</button>
            </form>
            <form class="form-section">
                <h3>Contact Support</h3>
                <label for="message">Message</label>
                <textarea id="message" rows="4" placeholder="Describe your issue…"></textarea>

                <button type="submit" class="btn">Send</button>
            </form>

        </div></center>
    )
}

export default Acc;
