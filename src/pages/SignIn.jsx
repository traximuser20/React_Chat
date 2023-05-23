import React, { useState } from "react";
import { FaGoogle, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import "../styles/socialButtons.css";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithFacebookPopup, signInWithGitHubPopup} from "../utils/firebaseAuth";

const SignIn = () => {

  const [isChecked, setIsChecked] = useState(false);

  const [validate, setValidate] = useState({
    email: "",
    pass: "",
    success: "",
  });

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  // const router = useRouter();
  // const handleNew = () => {
  //     router.push("/signup")
  // }

  // const handleSubmit = (ev) => {
  //   ev.preventDefaults();
  // };

  // const handleUserEmail = (ev) => {
  //   setUser({ email: ev.target.value });
  // };

  // const handleUserPassword = (ev) => {
  //   setUser({ pass: ev.target.value });
  // };

  // const handleChecked = (ev) => {
  //   setIsChecked(ev.target.checked);
  // };

  // const handleClick = () => {
  //   navigate("/");
  // };

  const handleGoogle = () => {
    console.log("Google button clicked");
    signInWithGooglePopup();
  };

  const handleFacebook = () => {
    console.log("Facebook button clicked");
    signInWithFacebookPopup();
  };

  const handleLinkedIn = () => {
    console.log("LinkedIn button clicked");
  };

  const handleGithub = () => {
    console.log("Github button clicked");
    signInWithGitHubPopup();
  };


  return (
    <div className="bg-white h-full w-full mt-28">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-black text-6xl text-center mb-5 mt-16 font-bold">
              <h1> Login Here</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
                <span className="text-rose-500">{validate.email}</span>
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
                <span className="text-rose-500">{validate.pass}</span>
              </div>
              <div className="jus">
                <label className="inline-flex items-center cursor-pointer mt-5">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span className="ml-2 text-sm font-semibold text-black">
                    Remember me
                  </span>
                </label>
              </div>
              <div className="text-center mt-6">
                <button
                  className="text-black hover:bg-sky-500 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Login
                </button>
                {err && (
                  <span className="text-red-500">Something went wrong</span>
                )}
                <span className="text-green-500">{validate.success}</span>
              </div>
              <div>
                <div className="mt-3">
                  <span
                    className="text-black text-sm font-semibold hover:text-sky-500 underline cursor-pointer"
                    // onClick={handleNew}
                  >
                    <Link to="/forget">Recover your Password ?</Link>
                  </span>
                </div>
                <div className="mt-3">
                  <span
                    className="text-black text-sm font-semibold hover:text-sky-500 underline cursor-pointer"
                    // onClick={handleNew}
                  >
                    <Link to="/register">Create new Account ?</Link>
                  </span>
                </div>
              </div>
            </form>
            <div className="centerStyles">
              <div className="loginLineStyle" />
              <div className="orStyle">OR</div>
            </div>

            <div className="buttonBox">
              <div className="googleButton" onClick={handleGoogle}>
                <FaGoogle className="iconStyle" />
                Login with Google
              </div>

              <div className="facebookButton" onClick={handleFacebook}>
                <FaFacebook className="iconStyle" />
                Login with Facebook
              </div>

              <div className="linkedinButton" onClick={handleLinkedIn}>
                <FaLinkedin className="iconStyle" />
                Login with LinkedIn
              </div>

              <div className="githubButton" onClick={handleGithub}>
                <FaGithub className="iconStyle" />
                Login with Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
