import "./App.css";
import profile from "./assets/profile.png";
import view from "./assets/view.png";
import hide from "./assets/hide.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [viewpass, setViewPass] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userobj = window.localStorage.getItem("user");
  const navigate = useNavigate();
  const jsonObj = JSON.parse(userobj);

  const handleViewClick = () => {
    setViewPass(!viewpass);
  };

  const handleLogin = () => {
    if (userName == jsonObj["userName"] && password == jsonObj["password"]) {
      console.log("userobj ==>", userobj);
      navigate("/todo");
    }
  };
  return (
    <div className="flex justify-center flex-col  items-center h-lvh w-full bg-slate-200 ">
      <div className="flex justify-center box-border flex-col items-center w-45 shadow-lg bg-gray-200 rounded-md p-6">
        <h1 className="font-extrabold m-4">Login</h1>
        <div>
          <img
            src={profile}
            alt="profile"
            className="h-20 w-20 object-center shadow-lg rounded-full border-gray-50 "
          />
        </div>
        <div className="flex flex-col  items-center justify-center m-10 p-4 gap-3">
          <input
            className="outline-0 border-solid border-2 p-2 h-8 w-full"
            type="text"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="flex items-center justify-center border-solid border-2 h-8 w-full p-2 bg-white ">
            <input
              className="outline-0"
              type={viewpass ? "text " : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span onClick={handleViewClick}>
              <img
                src={viewpass ? view : hide}
                alt="view"
                className="h-6 w-6 p-1 cursor-pointer"
              />
            </span>
          </div>
          <button
            className="border-2 self-center border-black-400 bg-gray-800 text-yellow-100 h-8 w-20 "
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <span className="italic flex self-end font-serif text-right font-thin">
          user? <Link to="/register">Register her</Link>
        </span>
      </div>
    </div>
  );
}

export default App;
