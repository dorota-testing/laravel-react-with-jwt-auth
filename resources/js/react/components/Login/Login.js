import React, { useState } from 'react';
import { makePostCall } from '../Utils/makeAxiosCalls.js';

function Login() {
  const [message, setMessage] = useState([]);
  const [inputEmail, setInputEmail] = useState({ value: '' });
  const [inputPassword, setInputPassword] = useState({ value: '' });

  const validateForm = () => {
    const errorMsg = [];
    if (inputEmail.value === '') {
      errorMsg.push('Please enter email.');
      setInputEmail({ value: '', css: 'is-invalid' });
    }
    if (inputPassword.value === '') {
      errorMsg.push('Please enter password.');
      setInputPassword({ value: '', css: 'is-invalid' });
    }
    return errorMsg;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const validation = validateForm(e);
    // there was an error
    if (validation.length > 0) {
      setMessage(validation);
    } else {
      // make a call to login api
      const loginUrl = "http://127.0.0.1:8000/api/auth/login";
      let objBody = { email: inputEmail.value, password: inputPassword.value }

      const loginRequest = await makePostCall(loginUrl, objBody);
      // console.log('login response= ', loginRequest.token);
      // check if token was returned
      if (typeof loginRequest.token !== 'undefined') {
        // success!!
        // save token in memory
        // save refresh_token in http cookie
        // save logged_in flag in local storage
        // change view to users dashboard

        // clear message and inputs
        setMessage([]);
        setInputEmail({ value: '', css: '' });
        setInputPassword({ value: '', css: '' });
      } else {
        // error
        setMessage(['Login error. Make sure to enter correct email and password.']);
        setInputEmail({ value: inputEmail.value, css: 'is-invalid' });
        setInputPassword({ value: inputPassword.value, css: 'is-invalid' });
      }
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={submitForm} >
                <div className="text-danger" >
                  {message.map((line, i) => <span key={i}>{line} </span>)}
                </div>
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      className={`form-control ${inputEmail.css}`}
                      name="inputEmail"
                      placeholder="Enter email"
                      value={inputEmail.value}
                      onChange={(e) => setInputEmail({ value: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      type="password"
                      className={`form-control ${inputPassword.css}`}
                      id="inputPassword"
                      name="inputPassword"
                      placeholder="Password"
                      value={inputPassword.value}
                      onChange={(e) => setInputPassword({ value: e.target.value })}
                    />
                  </div>

                  <fieldset className="form-group">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="remember"
                        />
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
