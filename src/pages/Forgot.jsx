import React, { useState } from "react";

const Forgot = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [validate, setValidate] = useState({
    name: "",
    email: "",
    pass: "",
    success: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (ev) => {
    console.log("Change: ", ev.target.checked);
    setIsChecked(ev.target.checked);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleName = (ev) => {
    // console.log("ev.target.value");
    setUser({ name: ev.target.value });
  };

  const handleEmail = (ev) => {
    // console.log("ev.target.value");
    setUser({ email: ev.target.value });
  };

  const handlePassword = (ev) => {
    // console.log("ev.target.value");
    setUser({ pass: ev.target.value });
  };

  const handleClick = () => {
    if (user.name === "") {
      setValidate({ name: "Please fill your Name ... !" });
      return;
    }
    if (user.email === "") {
      setValidate({ email: "Please fill your Email ... !" });
      return;
    }
    if (user.pass === "") {
      setValidate({ pass: "Please fill your Password ... !" });
      return;
    }
    if (isChecked === true) {
      setValidate({ success: "Account has been created successfully ... !" });
    } else {
      clearStates();
      setValidate({ success: "Account has been created successfully ... !" });
    }
  };

  const clearStates = () => {
    setUser({
      name: "",
      email: "",
      pass: "",
    });
  };
  return (
    <div>
      <div className="bg-white h-full w-full mt-20 justify-center flex-col">
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-black text-4xl text-center mb-5 mt-16 font-bold">
                <h2> Recover your Accout </h2>
              </div>
              <div className="content-center w-full h-full">
              </div>
              <form onSubmit={(ev) => handleSubmit(ev)}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Enter your valid Email
                  </label>
                  <input
                    required
                    type="email"
                    value={user.email}
                    onChange={(ev) => handleEmail(ev)}
                    className="text-black border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                  <span className="text-rose-500">{validate.email}</span>
                </div>
                
               
                <div className="text-center mt-6">
                  <button
                    onClick={handleClick}
                    className="text-black hover:bg-sky-500 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Submit
                  </button>
                  <span className="text-green-500">{validate.success}</span>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
