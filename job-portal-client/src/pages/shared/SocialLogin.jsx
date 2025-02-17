import axios from "axios";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const form = location.state || "/";
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successfully!",
            icon: "success",
            draggable: true,
          });
        }
        const user = { email: result.user.email };
        axios
          .post(`http://localhost:5000/jwt`, user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
        navigate(form);
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
          draggable: true,
        });
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
