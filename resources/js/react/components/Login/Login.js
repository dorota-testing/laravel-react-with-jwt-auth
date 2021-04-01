import React from 'react';

function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
            <form>
              <fieldset>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <fieldset className="form-group">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" />
                          Rememer me ?
                        </label>
                  </div>
                </fieldset>
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

export default Login;
