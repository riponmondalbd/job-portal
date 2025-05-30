import axios from "axios";
import Lottie from "lottie-react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import signinLottieData from "../../assets/lottie/login.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successfully!",
            icon: "success",
            draggable: true,
          });
        }

        const user = { email: email };
        axios
          .post(`http://localhost:5000/jwt`, user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
        navigate(from);
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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left md:w-96">
          <Lottie animationData={signinLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-8 mt-4 ">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
