import React from 'react';
import Navbar from '../../../layouts/frontend/Navbar';

function Register ()
    {

        return (
            <div>
                <Navbar />
                
                <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Register</h4>
                            <div className="card-body">
                                <form>

                                <div className="form-group mb-3">
                                        <label>ID Number</label>
                                        <input type="" name="id" className="form-control" placeholder required aria-required="true" aria-describedby="id-error" aria-invalid="true"></input>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="" name="name"  className="form-control" placeholder required aria-required="true" aria-describedby="Fullname-error" aria-invalid="true"></input>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Email Address</label>
                                        <input type="text" name="email" className="form-control" placeholder required aria-required="true" aria-describedby="email-error" aria-invalid="true"></input>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control" aria-describedby="passwordHelpInline" ></input>
                                        <div id="passwordHelpBlock" class="form-text">
                                         Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                        </div>

                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Confirm Password</label>
                                        <input type="password" name="confirm_password"  className="form-control" ></input>
                                    </div>
                                    

                                    <div className="mb-3 form-check">
                                        <label class="form-check-label" for="exampleCheck1">I have read and agree to the Privacy Policy, Terms of Service, EULA.</label>
                                        <input type="checkbox" name="confirm_password" id="exampleCheck1" className="form-check-input"  ></input>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        
        
        </div>
                
           
        );

    }


export default Register;