import React from 'react';
import Navbar from '../../../layouts/frontend/Navbar';


function Login()
    {

        return (
            <div>
            <Navbar />
                
            <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login</h4>
                            <div className="card-body">
                                <form>

                                    <div className="form-group mb-3">
                                        <label>ID Number</label>
                                        <input type="" name="" className="form-control" placeholder required aria-required="true" aria-describedby="id-error" aria-invalid="true"></input>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="" name="name" className="form-control" placeholder required aria-required="true" aria-describedby="Fullname-error" aria-invalid="true"></input>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Email Address</label>
                                        <input type="text" name="email"  className="form-control" placeholder required aria-required="true" aria-describedby="email-error" aria-invalid="true"></input>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password"  className="form-control" aria-describedby="passwordHelpInline" ></input>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Login</button>
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


export default Login;