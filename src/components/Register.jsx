import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const userDetails = {
    userName: userName,
    password: password,
    confirmPass: confirmPass,
  };

  localStorage.setItem("user", JSON.stringify(userDetails));

  const handleSubmit = (e) => {
    e.preventDefault();
    passwordRegex.test("password");
    if (passwordRegex.test(password) && passwordRegex.test(confirmPass)) {
      if (password === confirmPass) {
        localStorage.setItem("user", JSON.stringify(userDetails));
        navigate("/");
      }
    }
  };
  return (
    <div className="flex justify-center flex-col  items-center h-lvh w-full bg-slate-200 ">
      <div className="flex justify-center flex-col items-center h-1/2 w-45 shadow-lg bg-gray-200 rounded-md ">
        <div className="flex flex-col  items-center justify-center m-6 p-4 gap-2">
          <h1 className="font-extrabold m-2">Register</h1>
          <form
            action=""
            className="flex flex-col justify-center items-center m-6 p-4 gap-3"
          >
            <input
              className="outline-0 border-solid border-2 p-2 h-8 w-auto"
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="outline-0 border-solid border-2 p-2 h-8 w-auto"
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span></span>
            <input
              className="outline-0 border-solid border-2 p-2 h-8 w-auto"
              type="text"
              placeholder="confirm-password"
              value={confirmPass}
              onChange={(e) => {
                setConfirmPass(e.target.value);
              }}
            />
            <button
              className="border-2  border-black-400 bg-gray-800 text-yellow-100 h-8 w-20 "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
