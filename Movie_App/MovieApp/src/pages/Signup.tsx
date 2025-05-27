import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-blackc vh-100">
        <div className="bg-white p-3 rounnded w-25">
          <h2> Register </h2>
          <form onSubmit={handleSubmit}>
            {/* Start of Email */}
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Start of Password */}
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                autoComplete="off"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Start of Password */}
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input
                type="text"
                placeholder="Enter your Password"
                autoComplete="off"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Register
            </button>
          </form>
          <p>Already Have An Account</p>
          <Link to="/Login" className="btn btn-default border w-100 rounded-0">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
