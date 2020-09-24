import React,{useState} from 'react';
import './style.scss'
import GoogleIcon from '../../assets/loginForm/google.png';
import { Redirect } from 'react-router-dom';


/* A fake authentication function */
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    }
  };

const Login =(props)=>{
    console.log('props',props)
    const { from } = props.location || { from: { pathname: "/" } };
    console.log('from:',from);
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const HandleLogin = () => {
        console.log('click')
        fakeAuth.authenticate(() => {
          setRedirectToReferrer(true);
          console.log('login');
        });
      };
    
      if (redirectToReferrer) {
        return <Redirect to={from} />;
        
      }

    return(
        <div className="login-container">
            <div className="loginForm-container">
            <form>
                <button className="btn btn-ghost">
                    <img src={GoogleIcon} alt="Google"/>
                    Login with Google
                </button>

                <small>Or</small>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input className="text-input" type="email" id="email" placeholder="Enter your email"/>
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input className="text-input" type="password" id="password" placeholder="Password"/>
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" id="remember"/>
                    <label htmlFor="remember">Remember me</label>

                    <a href="/">Forgot Password</a>
                </div>

                <button className="btn" onClick={HandleLogin}>Log In</button>

                <small>Don't have an account? <a href="/">Sign up</a></small>
            </form>

            <div className="features">
                <div className="feature">
                    <i className="fas fa-code"></i>
                    <h3>Development</h3>
                    <p>A modern and clean design system for developing fast and powerful
                        web interfaces.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-gift"></i>
                    <h3>Features</h3>
                    <p>A modern and clean design system for developing fast and powerful
                        web interfaces.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-edit"></i>
                    <h3>Updates</h3>
                    <p>A modern and clean design system for developing fast and powerful
                        web interfaces.</p>
                </div>
            </div>
            </div>
        </div>
    )
};



export default Login;