import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const position = [11.0168, 76.9558]; // Example: Coimbatore

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 py-3">
      <div className="row g-3">
        {/* Sidebar */}
        <div className="col-md-3 d-flex flex-column gap-3">
          
          {/* Student Profile */}
          <div className="card bg-secondary text-white">
            <div className="card-body">
              <h5 className="card-title">Student Profile</h5>
              <div className="row">
                <div className="col-6">
                  <small className="text-muted">Name</small>
                  <p className="fw-bold mb-2">Yusuf</p>
                  <small className="text-muted">Route</small>
                  <p className="fw-bold mb-2">R-07</p>
                </div>
                <div className="col-6">
                  <small className="text-muted">Class</small>
                  <p className="fw-bold mb-2">VI-B</p>
                  <small className="text-muted">Stop</small>
                  <p className="fw-bold mb-2">Stop 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center p-2 bg-dark rounded">
                  <span className="badge bg-success me-2">Trip</span>
                  <span>Pickup trip ended.</span>
                </div>
                <div className="d-flex align-items-center p-2 bg-dark rounded">
                  <span className="badge bg-success me-2">Arrival</span>
                  <span>Bus is arriving at your stop now.</span>
                </div>
                <div className="d-flex align-items-center p-2 bg-dark rounded">
                  <span className="badge bg-primary me-2">Trip</span>
                  <span>Pickup trip started.</span>
                </div>
                <div className="d-flex align-items-center p-2 bg-dark rounded">
                  <span className="badge bg-success me-2">Arrival</span>
                  <span>Bus approaching Stop 2. ETA 5 min.</span>
                </div>
                <div className="d-flex align-items-center p-2 bg-dark rounded">
                  <span className="badge bg-warning text-dark me-2">Delay</span>
                  <span>Traffic on NH44, ETA +10 min.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance */}
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Attendance</h5>
              <table className="table table-dark table-sm table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Trip</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2025-08-22</td>
                    <td>Pickup</td>
                    <td>Boarded</td>
                  </tr>
                  <tr>
                    <td>2025-08-14</td>
                    <td>Pickup</td>
                    <td>Boarded</td>
                  </tr>
                  <tr>
                    <td>2025-08-14</td>
                    <td>Drop</td>
                    <td>Boarded</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Account */}
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Account</h5>
              <div className="mb-2">
                <label className="form-label">New Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="mb-2">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" />
              </div>
              <button className="btn btn-success w-100">Update</button>
            </div>
          </div>

          {/* Contact Support */}
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Contact Support</h5>
              <textarea className="form-control mb-2" placeholder="Describe your issue..." rows="3"></textarea>
              <button className="btn btn-primary w-100">Send</button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 d-flex flex-column gap-3">
          
          {/* Map */}
          <div className="card bg-secondary flex-grow-1">
            <div className="card-body">
              <h5 className="card-title">Map View with Bus Location</h5>
              <MapContainer center={position} zoom={10} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={position}>
                  <Popup>Bus Location</Popup>
                </Marker>
              </MapContainer>
              <div className="d-flex justify-content-around mt-2">
                <span className="badge bg-dark p-2">ETA: <b>0 sec</b></span>
                <span className="badge bg-dark p-2">Distance: <b>0 m</b></span>
                <span className="badge bg-dark p-2">Speed: <b>30 km/h</b></span>
              </div>
            </div>
          </div>

          {/* Trip History */}
          <div className="card bg-secondary">
            <div className="card-body">
              <h5 className="card-title">Trip History</h5>
              <table className="table table-dark table-sm table-hover">
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
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2025-08-13</td>
                    <td>Drop</td>
                    <td>Yes</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2025-08-12</td>
                    <td>Pickup</td>
                    <td>No</td>
                    <td>Sick</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
