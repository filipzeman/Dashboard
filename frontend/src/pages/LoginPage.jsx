// src/pages/LoginPage.jsx
import { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-page">
      <header className="page-header">
        <h2>🔒 Login</h2>
        <p>You are not authorized to view the page, please log-in lower</p>
      </header>
      {/* <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <hr /> */}
      <button className="primary" onClick={loginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
}
