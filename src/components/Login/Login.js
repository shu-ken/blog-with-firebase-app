import React from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    // Googleログイン
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={() => loginInWithGoogle()}>Googleでログイン</button>
    </div>
  );
};

export default Login;
