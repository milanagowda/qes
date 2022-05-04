import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import { useHistory } from 'react-router-dom';
import '../styles/login.css';

const Panel = ({ title, description, btnTitle, onClick, position }) => {
  return (
    <div className={`panel ${position}`}>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn btn-primary" id="sign-up-btn" onClick={onClick}>
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

function Login() {
  const [signup, setSignup] = useState(false);
  const history = useHistory();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (auth.token) {
      history.push('/');
    }
  }, [auth.token, history]);

  return (
    <div className={`container ${signup && 'sign-up-mode'}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignUp /> <SignIn />
        </div>
      </div>

      <div className="panels-container">
        <Panel
          title="New here ?"
          description="Try SnapMe for free. Get started just by creating a new account in few steps"
          btnTitle="Sign up"
          position="left-panel"
          onClick={() => setSignup(!signup)}
        />

        <Panel
          title="One of us ?"
          description="   Instance update from your friends. Get the latest updates from
        indusrty leaders and members of your community."
          btnTitle="Sign in"
          position="right-panel"
          onClick={() => setSignup(!signup)}
        />
      </div>
    </div>
  );
}

export default Login;
