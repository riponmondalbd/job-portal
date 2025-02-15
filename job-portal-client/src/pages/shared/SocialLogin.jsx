import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const form = location.state || "/";
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(form);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
