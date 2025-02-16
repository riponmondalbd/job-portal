import Lottie from "lottie-react";

import { useContext } from "react";
import Swal from "sweetalert2";
import registerLottieData from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const showValidationError = (message) => {
    Swal.fire({
      icon: "error",
      title: message,
      draggable: true,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // password validation
    if (password.length < 6) {
      showValidationError("password must be contain 6 character");
      return;
    } else if (!/[0-9]/.test(password)) {
      showValidationError("Password must contain at least one digit");
      return;
    } else if (!/[a-z]/.test(password)) {
      showValidationError(
        "Password must contain at least one lower case letter"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      showValidationError(
        "Password must contain at least one upper case letter"
      );
      return;
    } else if (!/[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/.test(password)) {
      showValidationError("Password must contain at least special character");
      return;
    } else if (!/^\S*$/.test(password)) {
      showValidationError("Password must not contain White spaces");
      return;
    }

    // success
    Swal.fire({
      title: "Register Successfully!",
      icon: "success",
      draggable: true,
    });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        showValidationError(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left md:w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-8 mt-4 ">Register now!</h1>
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
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
