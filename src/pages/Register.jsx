import React, { useState } from "react";
import "../styles/socialButtons.css";
import { FaGoogle, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import "../App.css";
// import Cookie from "universal-cookie";
import AddAvatar from "../assets/AddAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage, signInWithGooglePopup, signInWithFacebookPopup, signInWithGitHubPopup } from "../utils/firebaseAuth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [validate, setValidate] = useState({
    name: "",
    email: "",
    pass: "",
    success: "",
  });

  const [err, setErr] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // const [isChecked, setIsChecked] = useState(false);

  // const cookie = new Cookie();

  // const handleChange = (e) => {
  //   // console.log("Change: ", ev.target.checked);
  //   setIsChecked(e.target.checked);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console("Data: ", e.target.value);
    const file = e.target[0].files[0];
    const displayName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    // if(displayName === "") {
    //   setValidate({ name: "Please fill your Name ... !" });
    //   return;
    // }
    // else if (email === "") {
    //   setValidate({ email: "Please fill your Email ... !" });
    //   return;
    // }
    // else if (password === "") {
    //   setValidate({ pass: "Please fill your Password ... !" });
    //   return;
    // }
    // else {
    //   setValidate()
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
    // }
  };

  // const handleName = (ev) => {
  //   // console.log("ev.target.value");
  //   setUser({ name: ev.target.value });
  // };

  // const handleEmail = (ev) => {
  //   // console.log("ev.target.value");
  //   setUser({ email: ev.target.value });
  // };

  // const handlePassword = (ev) => {
  //   // console.log("ev.target.value");
  //   setUser({ pass: ev.target.value });
  // };

  // const handleClick = () => {
  //   navigate("/");
  // };

  // const clearStates = () => {
  //   setUser({
  //     name: "",
  //     email: "",
  //     pass: "",
  //   });
  // };

  const handleGoogle = () => {
    console.log("Google button clicked");
    signInWithGooglePopup()
  };

  const handleFacebook = () => {
    console.log("Facebook button clicked");
    signInWithFacebookPopup();
  };

  const handleLinkedIn = () => {
    console.log("LinkedIn button clicked");
    alert("Feature is under development")
  };

  const handleGithub = () => {
    console.log("Github button clicked");
    signInWithGitHubPopup();
  };

  return (
    <div className="bg-white h-full w-full mt-20 justify-center flex-col">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-black text-4xl text-center mb-5 mt-16 font-bold">
              <h2> Create your Accout </h2>
            </div>
            <div className="content-center w-full h-full"></div>
            <form onSubmit={handleSubmit}>
              <input style={{ display: "none" }} type="file" id="file" />
              <label htmlFor="file">
                <div className="flex-auto w-full text-center align-center	">
                <img className="cursor-pointer h-20" src={AddAvatar} alt="" />
                <span className="text-blue-500 align-center font-bold">Add an avatar</span>
                </div>
              </label>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Full Name
                </label>
                <input
                  required
                  className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  placeholder="Name"
                />
                <span className="text-rose-500">{validate.name}</span>
              </div>
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
                  required
                  type="password"
                  className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
                <span className="text-rose-500">{validate.pass}</span>
              </div>
              <div className="contentStart">
                <label className="inline-flex items-center cursor-pointer mt-5">
                  <input
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
                  disabled={loading}
                  className="text-black hover:bg-sky-500 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                >
                  Sign up
                </button>
                {loading &&
                  "Uploading and compressing the image please wait..."}
                {err && (
                  <span className="text-red-500">Something went wrong</span>
                )}
                <span className="text-green-500">{validate.success}</span>
              </div>
              <span className="text-black text-sm font-semibold hover:text-sky-500 underline cursor-pointer">
                <Link to="/login">Already have an Account ?</Link>
              </span>
            </form>
            <div className="centerStyles">
              <div className="lineStyle" />
              <div className="orStyle">OR</div>
            </div>

            <div className="buttonBox">
              <div className="googleButton" onClick={handleGoogle}>
                <FaGoogle className="iconStyle" />
                <span>Signup with Google</span>
              </div>

              <div className="facebookButton" onClick={handleFacebook}>
                <FaFacebook className="iconStyle" />
                <span>Signup with Facebook</span>
              </div>

              <div className="linkedinButton" onClick={handleLinkedIn}>
                <FaLinkedin className="iconStyle" />
                <span>Signup with LinkedIn</span>
              </div>

              <div className="githubButton" onClick={handleGithub}>
                <FaGithub className="iconStyle" />
                <span>Signup with Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
