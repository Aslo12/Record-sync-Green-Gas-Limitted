import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (!userId) {
      setError("User ID not found in localStorage.");
      return;
    }

    axios.get(`http://localhost:8080/${userId}`)
      .then(res => {
        if (res.data.msg === "Success") {
          setUser(res.data.user);
        } else {
          setError("Failed to load user data.");
        }
      })
      .catch(err => {
        console.error(err);
        setError("Server Error: " + (err.response?.data?.error || err.message));
      });
  }, []);

  if (error) return <div className="container mt-5"><div className="alert alert-danger">{error}</div></div>;
  if (!user) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h5 className="border-bottom pb-2 mb-4">My Profile</h5>
        <div className="row">
          <div className="col-md-3 mx-auto">
            <div style={{ height: "150px", width: "150px", borderRadius: "100px", border: "1px solid black", marginLeft: "60px" }}>
              <img
                src={`http://localhost:8080/uploads/${user.image}`}
                alt="Profile"
                style={{ height: "150px", width: "150px", borderRadius: "100px" }}
              />
            </div>
          </div>
          <div className="col-md-9">
            <p><strong>Employee Name:</strong> <span className="ms-2">{user.firstName} {user.lastName}</span></p>
            <p><strong>Email:</strong> <span className="ms-2">{user.email}</span></p>
            <p><strong>Gender:</strong> <span className="ms-2">{user.gender}</span></p>
            <p><strong>Date of birth:</strong> <span className="ms-2">{new Date(user.dob).toLocaleDateString()}</span></p>
            <p><strong>Address:</strong> <span className="ms-2">{user.address}</span></p>
            <p><strong>Department Name:</strong> <span className="ms-2">{user.departmentId?.deptName || 'N/A'}</span></p>
            <form>
              <Link to={'/employee/profile/update'}>
                <input type="button" value="Update Profile" className="btn btn-primary" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
