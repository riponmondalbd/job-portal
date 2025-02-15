import Lottie from "lottie-react";

import reactLottieData from "../../assets/lottie/register.json";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // password validation
    if (password.length < 6) {
      alert("password must be contain 6 character");
      return;
    } else if (!/[0-9]/.test(password)) {
      alert("Password must contain at least one digit");
      return;
    } else if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lower case letter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one upper case letter");
      return;
    } else if (!/[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/.test(password)) {
      alert("Password must contain at least special character");
      return;
    } else if (!/^\S*$/.test(password)) {
      alert("Password must not contain White spaces");
      return;
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left md:w-96">
          <Lottie animationData={reactLottieData}></Lottie>
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
