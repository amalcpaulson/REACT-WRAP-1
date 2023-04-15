import React from 'react'
import './Registration.css'
import login_img from '../../assets/registration/logsig.png'

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="login">
                <div className="signup-header">
                    <h3>Lets get started!</h3>
                    <p style={{marginBottom:" -20px"}}>Welcome back to WRAP,</p>
                    <p>to continue.</p>
                </div>
                <div>
                    <img src={login_img} alt="" />
                </div>
                <form className="login-form" action="{% url 'signin' %}" method="POST">
                    <input
                        type="text"
                        name="name"
                        placeholder="User name"
                        autocomplete="off"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        autocomplete="off"
                        required
                    /><input
                        type="password"
                        name="password"
                        placeholder="Password"
                        autocomplete="off"
                        required
                    />
                    <input
                        style={{
                            height: "40px",
                            width: "278px",
                            borderRadius: "10px",
                            backgroundColor: "#009743",
                            color: "white"
                        }}

                        type="submit"
                        value="Login"
                        name="login"
                    />
                </form>
            </div>
            <div>
                <p style={{fontSize: '12px'}}>
                    Not a member? <a href="{% url 'signup' %}">Register Now</a>
                </p>
            </div>
        </div>
    )
}

export default Login
