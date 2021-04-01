import React from 'react';

function Register() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
            <form>
              <fieldset>
              <div className="form-group">
                  <label for="exampleInputName">Name</label>
                  <input type="text" className="form-control" id="exampleInputName"  placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </fieldset>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
