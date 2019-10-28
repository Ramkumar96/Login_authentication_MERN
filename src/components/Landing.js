import React, { Component } from "react";
import { Link } from "react-router-dom";


class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col text-center center-align">
            <h4>
              Welcome To MERN TODO APP
            </h4>
            <br/>
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
            
            <div className="col">
              
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-primary btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
              <br/>
              <br/>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-danger btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;